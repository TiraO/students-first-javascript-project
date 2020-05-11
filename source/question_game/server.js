var express = require('express');
const QuestionGame = require("./question_game");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const PORT = process.env.PORT || 3000;
const game = new QuestionGame({
  id: 0,
  type: "question",
  value: "Are you thinking of a secret word?",

  yes: {
    id: 1,
    type: "question",
    value: "Is it round?",

    yes: {
      id: 3,
      type: "answer",
      value: "Ball"
    }
  },
  no: {
    id: 2,
    type: "question",
    value: "Is it hard?"
  }
});

app.use(express.static('.'));

app.get('/questions/:questionId', function ( request, response ) {
  let questionId = request.params.questionId;
  response.setHeader('Content-Type', 'application/json');
  let questionResult = game.getQuestionById(game.startingQuestion, questionId);
  console.log("questionResult", questionResult);
  response.send(JSON.stringify(questionResult));
});

app.get('/questions/:questionId/next/:trueOrFalse', function ( request, response ) {
  let questionId = request.params.questionId;
  let userAnswer = request.params.trueOrFalse;
  response.setHeader('Content-Type', 'application/json');
  response.send(game.getNextQuestion(questionId, userAnswer));
});

app.post('/questions/:wrongAnswerId/addAnswer', function ( request, response ) {
  let wrongAnswerId = request.params.wrongAnswerId;
  let { question, answer, isQuestionTrueForAnswer } = request.body;
  response.setHeader('Content-Type', 'application/json');
  response.send(game.addAnswer(wrongAnswerId, question, answer, isQuestionTrueForAnswer));
});


app.listen(PORT, function () {
  console.log('App listening on port ' + PORT);
});