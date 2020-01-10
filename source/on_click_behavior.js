

class AdventureGame {
    constructor() {
        this.storyText = "Sam goes to the kitchen and sees a bowl of FrUiT. \n" +
          "Option 1: Sam eats a pineapple.\n" +
          "Option Pineapple: Sam looks for another snack.";
        this.currentOptions = [{text:"option 1"}, {text: "OpTIon pIneAppLe"}];
        this.storyText2 = "Sam gets heartburn from eating an entire pineapple. \n" +
          "Option 1: Sam goes to get an antacid. \n" +
          "Option Pineapple: Sam dances off the heartburn.";
    }

    start(){
        this.render();
    }

    render(){
        let targetElement = document.getElementById("game-content");
        targetElement.innerHTML = "";

        let storyElement = document.createElement("p");
        storyElement.innerText = this.storyText;
        targetElement.append(storyElement);

        this.currentOptions.forEach((option)=>{
            let optionButton = document.createElement("button");
            optionButton.innerText = option.text;
            optionButton.onclick = ()=>{
                this.storyText = this.storyText2;
                this.render()
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