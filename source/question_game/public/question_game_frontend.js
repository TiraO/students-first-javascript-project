function pageReady() {

  let questionTextElement = document.getElementById("question-text");
  let yesButton = document.getElementById("yes-button");
  let noButton = document.getElementById("no-button");
  let submitArea = document.getElementById("submit-area");
  let submitNewAnswerButton = document.getElementById("submit-new-answer");
  let trueForAnswerCheckbox = document.getElementById("is-question-true-for-answer");
  let distinguishingQuestionInput = document.getElementById("distinguishing-question");
  let secretWordInput = document.getElementById("secret-word");
  let userNameSection = document.getElementById("user-name-section");
  let userNameInput = document.getElementById("user-name");
  let startGameButton = document.getElementById("start-button");
  let currentQuestion;

  let onFetchQuestionFromServer = function (response) {
    currentQuestion = response.data;
    if (currentQuestion.type == "answer") {
      questionTextElement.innerHTML = "I have a guess! Was this your secret word?: " + currentQuestion.value;
    } else {
      questionTextElement.innerHTML = response.data.value;
    }
  };

  let goToBeginning = () => {
    userNameSection.style.display = "none";
    $("#questions-section")[0].style.display = "initial";
    axios.get("http://localhost:3000/questions/" + 0).then(onFetchQuestionFromServer);
    submitArea.style.display = "none";
  };

  submitNewAnswerButton.onclick = () => {
    let question = distinguishingQuestionInput.value;
    let answer = secretWordInput.value;
    let isQuestionTrueForAnswer = trueForAnswerCheckbox.checked;
    axios.post("http://localhost:3000/questions/" + currentQuestion.id + "/addAnswer", {
      data: {
        question, answer, isQuestionTrueForAnswer, user: userNameInput.value
      }
    });
    goToBeginning();
  };

  yesButton.onclick = () => {
    if (currentQuestion.type == "answer") {
      goToBeginning();
    } else {
      axios.get("http://localhost:3000/questions/" + currentQuestion.id + '/next/true').then(onFetchQuestionFromServer);
    }
  };
  noButton.onclick = () => {
    if (currentQuestion.type == "answer") {
      questionTextElement.innerHTML = "Okay, I give up.";
      submitArea.style.display = "initial";

    } else {
      axios.get("http://localhost:3000/questions/" + currentQuestion.id + '/next/false').then(onFetchQuestionFromServer);
    }
  };
  startGameButton.onclick = goToBeginning;
}

window.addEventListener('load', pageReady);