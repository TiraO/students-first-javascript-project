function pageReady() {

  let questionTextElement = document.getElementById("question-text");
  let yesButton = document.getElementById("yes-button");
  let noButton = document.getElementById("no-button");
  let submitArea = document.getElementById("submit-section");
  let submitNewAnswerButton = document.getElementById("submit-new-answer");
  let trueForAnswerCheckbox = document.getElementById("is-question-true-for-answer");
  let distinguishingQuestionInput = document.getElementById("distinguishing-question");
  let secretWordInput = document.getElementById("secret-word");
  let userNameSection = document.getElementById("user-name-section");
  let userNameInput = document.getElementById("user-name");
  let startGameButton = document.getElementById("start-button");
  let currentQuestion;
  let serverUrl = window.location.href.slice(0, -1);

  let onFetchQuestionFromServer = function (response) {
    currentQuestion = response.data;
    if (currentQuestion.type == "answer") {
      questionTextElement.innerHTML = "I have a guess! Was this your secret word?: " + currentQuestion.value;
    } else {
      questionTextElement.innerHTML = response.data.value;
    }
  };

  let goToBeginning = () => {
    distinguishingQuestionInput.value = "";
    secretWordInput.value = "";
    trueForAnswerCheckbox.checked = null;

    userNameSection.style.display = "none";
    $("#questions-section")[0].style.display = "initial";
    axios.get(serverUrl + "/questions/" + 0).then(onFetchQuestionFromServer);
    submitArea.style.display = "none";
  };

  submitNewAnswerButton.onclick = () => {
    let question = distinguishingQuestionInput.value;
    let answer = secretWordInput.value;
    let isQuestionTrueForAnswer = trueForAnswerCheckbox.checked;


    axios.post(serverUrl + "/questions/" + currentQuestion.id + "/addAnswer", {
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
      axios.get(serverUrl + "/questions/" + currentQuestion.id + '/next/true').then(onFetchQuestionFromServer);
    }
  };
  noButton.onclick = () => {
    if (currentQuestion.type == "answer") {
      $("#questions-section")[0].style.display = "none";
      submitArea.style.display = "initial";
      $("#distinguishing-question-label")[0].innerText = "Enter a question that distinguishes my guess (" + currentQuestion.value + ") from your secret word:"
    } else {
      axios.get(serverUrl + "/questions/" + currentQuestion.id + '/next/false').then(onFetchQuestionFromServer);
    }
  };
  startGameButton.onclick = goToBeginning;
}

window.addEventListener('load', pageReady);