var express = require('express');
const QuestionGame = require("./question_game");
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
    value: "A rather cheeky person"
  }

});

app.use(express.static(__dirname + '/public'));

app.get('/questions/:questionId', function ( request, response ) {
  let questionId = request.params.questionId;
  response.setHeader('Content-Type', 'application/json');
  let questionResult = game.getQuestionById(game.startingQuestion, questionId);
  response.send(JSON.stringify(questionResult));
});

app.get('/questions/:questionId/next/:trueOrFalse', function ( request, response ) {
  let questionId = request.params.questionId;
  let userAnswer = request.params.trueOrFalse === "true";
  response.setHeader('Content-Type', 'application/json');
  response.send(game.getNextQuestion(questionId, userAnswer));
});

app.post('/questions/:wrongAnswerId/addAnswer', function ( request, response ) {
  let wrongAnswerId = request.params.wrongAnswerId;
  let { question, answer, isQuestionTrueForAnswer, user } = request.body.data;
  response.setHeader('Content-Type', 'application/json');
  response.send(game.addAnswer(wrongAnswerId, question, answer, isQuestionTrueForAnswer, user));
  var startingQuestion = JSON.stringify(game.startingQuestion);
  console.log(startingQuestion)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('App listening on port ' + PORT);
});