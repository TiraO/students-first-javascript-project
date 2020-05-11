module.exports = class QuestionGame {
  constructor( startingQuestions = {} ) {
    this.startingQuestion = startingQuestions;
  }

  getNextQuestion( questionId, answer ) {
    if (answer) {
      return this.getQuestionById(this.startingQuestion, questionId).yes;
    } else {
      return this.getQuestionById(this.startingQuestion, questionId).no;
    }
  }

  getQuestionById( question, questionId ) {
    if (question == null) {
      return null;
    } else if (question.id == questionId) {
      return question
    } else {

      if (question.yes) {
        question.yes.parentId = question.id;
      }
      if (question.no) {
        question.no.parentId = question.id;
      }

      return this.getQuestionById(question.yes, questionId) || this.getQuestionById(question.no, questionId);
    }
  }

  getParentQuestion( answerId ) {
    return this.getQuestionById(this.startingQuestion, this.getQuestionById(this.startingQuestion, answerId).parentId);
  }

  addAnswer( wrongAnswerId, question, answer, isQuestionTrueForAnswer ) {
    let wrongAnswer = this.getQuestionById(this.startingQuestion, wrongAnswerId);
    let parentQuestion = this.getParentQuestion(wrongAnswerId);

    let newQuestion = {
      id: Math.random() * 1000,
      type: "question",
      value: question
    };
    let newAnswer = {
      id: Math.random() * 1000,
      type: "answer",
      value: answer
    };


    if (isQuestionTrueForAnswer) {
      newQuestion.yes = newAnswer;
      newQuestion.no = wrongAnswer;
    } else {
      newQuestion.yes = wrongAnswer;
      newQuestion.no = newAnswer;
    }

    if (parentQuestion.yes == wrongAnswer) {
      parentQuestion.yes = newQuestion;
    } else if (parentQuestion.no == wrongAnswer) {
      parentQuestion.no = newQuestion;
    } else {
      console.error("Couldn't find answer to replace!")
    }
  }
};