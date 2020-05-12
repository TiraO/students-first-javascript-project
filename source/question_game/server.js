var express = require('express');
const QuestionGame = require("./question_game");
const { Pool, Client } = require('pg')
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const game = new QuestionGame({
  id: 0,
  type: "question",
  value: "Are you thinking of a secret word?",

  yes: {
    id: 1,
    type: "answer",
    value: "Hallyu",
  },
  no: {
    id: 2,
    type: "answer",
    value: "Well, what are you waiting for? Think of a word and start again."
  }

});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

const readGameFromDatabase = async () => {

  const gameJson = (await pool.query("SELECT * from games order by id desc limit 1")).rows[0].game;
  game.startingQuestion = JSON.parse(gameJson);

}

const writeGameToDatabase = async () => {
  try {
    await pool.query('BEGIN')
    const lastId = (await client.query("SELECT id from games order by id limit 1")).rows[0].id;
    let gameJson = JSON.stringify(game.startingQuestion);
    const insertGame = 'INSERT INTO games(id, game) VALUES ($1, $2)';
    await pool.query(insertGame, [lastId + 1, gameJson]);
    await pool.query('COMMIT')
  } catch (e) {
    await pool.query('ROLLBACK');
    throw e
  }
}

readGameFromDatabase();
app.use(express.static(__dirname + '/public'));

app.get('/questions/:questionId', function (request, response) {
  let questionId = request.params.questionId;
  response.setHeader('Content-Type', 'application/json');
  let questionResult = game.getQuestionById(game.startingQuestion, questionId);
  response.send(JSON.stringify(questionResult));
});

app.get('/questions/:questionId/next/:trueOrFalse', function (request, response) {
  let questionId = request.params.questionId;
  let userAnswer = request.params.trueOrFalse === "true";
  response.setHeader('Content-Type', 'application/json');
  response.send(game.getNextQuestion(questionId, userAnswer));
});

app.post('/questions/:wrongAnswerId/addAnswer', function (request, response) {
  let wrongAnswerId = request.params.wrongAnswerId;
  let { question, answer, isQuestionTrueForAnswer, user } = request.body.data;
  response.setHeader('Content-Type', 'application/json');
  response.send(game.addAnswer(wrongAnswerId, question, answer, isQuestionTrueForAnswer, user));
  var startingQuestion = JSON.stringify(game.startingQuestion);
  console.log(startingQuestion)
  writeGameToDatabase();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('App listening on port ' + PORT);
});
