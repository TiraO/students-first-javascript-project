

class AdventureGame {
    constructor() {
        this.currentOptions = [{text:""}];
    }

    start(){
        this.render();
    }

    render(){
        let targetElement = document.getElementById("game-content");
        targetElement.innerHTML = "";
        this.currentOptions.forEach((option)=>{
            let optionButton = document.createElement("button");
            optionButton.innerText = option.text;
            optionButton.onclick = function goToOption(){
                // TODO
            };
            targetElement.append(optionButton);
        });
    }
}

function pageReady(){
    let elements = document.getElementsByTagName("button")
    console.log(elements);
    let button = elements[0];
    console.log("button", button);
    button.onclick = function showAlert(){
        alert("something else")
    };

    let game = new AdventureGame();
    game.start();
}
window.addEventListener('load', pageReady);