

class AdventureGame {
    constructor() {
        this.storyText = "Sam goes to the kitchen and sees a bowl of FrUiT. \n" +
          "Option 1: Sam eats a pineapple.\n" +
          "Option Pineapple: Sam looks for another snack.";
        this.storyText2 = "Sam gets heartburn from eating an entire pineapple. \n" +
          "Option 1: Sam goes to get an antacid. \n" +
          "Option Pineapple: Sam dances off the heartburn.";
        this.storyText3 = "Sam finds a jar of peanutbutter. \n" +
            "Option 1: Sam makes a peanutbutter sandwich. \n" +
            "Option Pineapple: Sam eats the entire jar of peanutbutter."
        this.currentOptions = [{text:"option 1", next: this.storyText2}, {text: "OpTIon pIneAppLe", next: this.storyText3}];
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
                this.storyText = option.next;
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