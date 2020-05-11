const { expect } = require('chai');
const QuestionGame = require("./question_game");
describe("QuestionGame", () => {
  let questionGame, startingQuestion;
  beforeEach(() => {
    startingQuestion = {
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
    };
    questionGame = new QuestionGame(startingQuestion)
  });

  describe("getNextQuestion", () => {
    it("returns the next question", () => {
      expect(questionGame.getNextQuestion(0, false)).to.deep.eq({
        id: 2,
        type: "question",
        value: "Is it hard?"
      });
    });

    describe("when there is no question", () => {
      it("returns null", () => {
        expect(questionGame.getNextQuestion(2, false)).to.be.undefined
      });
    });
  });

  describe("addAnswer", () => {
    it("adds the question", () => {
      let wrongAnswerId = 3;
      let question = "Is it covered in water?";
      let answer = "Earth";
      questionGame.addAnswer(wrongAnswerId, question, answer, true);

      expect(questionGame.getQuestionById(startingQuestion, 1).yes.type).to.eq("question");
      expect(questionGame.getQuestionById(startingQuestion, 1).yes.no.value).to.eq("Ball");
      expect(questionGame.getQuestionById(startingQuestion, 1).yes.yes.value).to.eq("Earth");
    });
  });

  describe("getQuestionById", () => {
    it("returns the question with that ID", () => {
      expect(questionGame.getQuestionById(startingQuestion, 2).id).to.eq(2);
      expect(questionGame.getQuestionById(startingQuestion, 1).id).to.eq(1);
      expect(questionGame.getQuestionById(startingQuestion, 0).id).to.eq(0);
    });
  });

  describe("getAllQuestions", () => {
    xit("returnsAllQuestions", () => {

    });
  });
});