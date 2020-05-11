
function pageReady() {

  let questionTextElement = document.getElementById("question-text");
  let yesButton = document.getElementById("yes-button");
  let noButton = document.getElementById("no-button");
  let currentQuestionId = 0;

  yesButton.onclick = () => {
    axios.get("http://localhost:3000/questions/" + currentQuestionId + '/next/true').then((response)=>{
      currentQuestionId = response.data.id;
      questionTextElement.innerHTML = response.data.value;
    });
  };
  noButton.onclick = () => {
    axios.get("http://localhost:3000/questions/" + currentQuestionId + '/next/false').then((response)=>{
      currentQuestionId = response.data.id;
      questionTextElement.innerHTML = response.data.value;
    });
  };
  axios.get("http://localhost:3000/questions/" + currentQuestionId).then((response)=>{
    currentQuestionId = response.data.id;
    questionTextElement.innerHTML = response.data.value;
  });

}

window.addEventListener('load', pageReady);