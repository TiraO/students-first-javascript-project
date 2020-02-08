class AdventureGame {
    constructor() {
        this.options = {
            buttonText: "Next",
            storyText: "You are part of a team tasked with creating a record to represent the sounds of global America." +
                "You and your team must gain experience points and prove your expertise." +
                "Navigate the obstacles ahead to prove that you are ready to begin your mission.",
            next: [
                {
                    buttonText: "Next",
                    storyText: "In Week 4, you receive instructions to complete a mission on the music of New York.",
                    optionText: "Which topic should you choose?",
                    next: [
                        {
                            buttonText: "Globalization of music in New York.",
                            storyText: "You have chosen the Pilot role for this mission, but when looking for sources you begin" +
                                "to realize that this topic is really broad.",
                            optionText: "What should you do?",
                            next: [
                                {
                                    buttonText: "Type 'globalization, NYC' into Google and use the first few sources you find.",
                                    storyText: "You find three sources about globalization and add them to your team's document." +
                                        "They aren't really related, and when Prof. S reads the log she leaves a comment suggesting" +
                                        "that you choose a more specific topic next time.",
                                    optionText: "What should you do?",
                                    next: [
                                        {
                                            buttonText: "Read her feedback and choose a more specific topic next time.",
                                            storyText: "Correct. Choosing a more narrow topic will allow you to find more" +
                                                "specific sources and submit a more interesting mission log.",
                                            optionText: "Refresh your screen to return to the beginning and choose a more specific topic.",
                                        },
                                        {
                                            buttonText: "Ignore her feedback and choose another broad topic next time.",
                                            storyText: "Incorrect. Choosing broad topics will result in mission logs that" +
                                                "don't really give much information.",
                                            optionText: "Refresh your screen to return to the beginning and choose a more specific topic.",
                                        },

                                    ]
                                },
                                {
                                    buttonText: "Music traditions of Bukharian Jewish immigrants in Brooklyn",
                                    storyText: "You choose the Pilot role for the mission and begin looking for sources.",
                                    optionText: "A: Google",
                                },
                            ]
                        }
                    ]
                }
            ]
        }
        ;
        this.currentOptions = this.options
    }


    render() {
        let gameContentElement = document.getElementById("game-content");
        gameContentElement.innerHTML = null;

        let descriptionElement = document.createElement("p");
        descriptionElement.innerText = this.options.storyText;
        gameContentElement.appendChild(descriptionElement);

        this.options.next.forEach((option) => {
            let optionTextElement = document.createElement("p");
            optionTextElement.innerText = option.optionText;
            gameContentElement.appendChild(optionTextElement);
        });
        this.options.next.forEach((option) => {
            let buttonElement = document.createElement("button");
            buttonElement.innerText = option.buttonText;
            gameContentElement.appendChild(buttonElement);
            buttonElement.onclick = () => {
                this.options = option;
                this.render()
            };
        });
    }
}

function pageReady() {
    let startButton = document.getElementById("start");
    startButton.onclick = () => {
        let introText = document.getElementById("intro");
        introText.innerHTML = null;

        let game = new AdventureGame();
        game.render();
    }

}

window.addEventListener('load', pageReady);