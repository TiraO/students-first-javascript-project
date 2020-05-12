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

  nextId(){
    return Math.floor(Math.random() * 1000000);
  }
  addAnswer( wrongAnswerId, question, answer, isQuestionTrueForAnswer, user ) {
    let wrongAnswer = this.getQuestionById(this.startingQuestion, wrongAnswerId);
    let parentQuestion = this.getParentQuestion(wrongAnswerId);

    let newQuestion = {
      id: this.nextId(),
      type: "question",
      value: question,
      user
    };
    let newAnswer = {
      id: this.nextId(),
      type: "answer",
      value: answer,
      user
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