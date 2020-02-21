class AdventureGame {
    constructor() {
        this.options = {
            buttonText: "option pineapple",
            storyText: "Sam goes to the kitchen and sees a bowl of FrUiT. \n",
            next: [
                {
                    buttonText: "option 1",
                    optionText: "Option 1: Sam eats a pineapple.",
                    storyText: "Sam gets heartburn from eating an entire pineapple. \n",
                    next: [
                        {
                            buttonText: "option 1",
                            optionText: "Option 1: Sam goes to get an antacid.",
                            storyText: "Sam feels much better. \n",
                            next: [
                                {
                                    buttonText: "option 1",
                                    optionText: "Option 1: Sam goes for a run.",
                                    storyText: "Sam feels invigorated after the run. \n",
                                    next:
                                        [
                                            {
                                                buttonText: "option 1",
                                                optionText: "Option 1: Sam cleans up around the apartment.",
                                            },
                                            {
                                                buttonText: "option pineapple",
                                                optionText: "Option Pineapple: Sam stays outside and enjoys a day in the park.",
                                            }
                                        ],
                                },
                                {
                                    buttonText: "option pineapple",
                                    optionText:
                                        "Option Pineapple: Sam eats another pineapple",
                                }
                            ],
                        },
                        {
                            buttonText: "Option Pineapple",
                            optionText:
                                "Option Pineapple: Sam dances off the heartburn.",
                            storyText:
                                "Sam dances off the heartburn. \n",
                            next:
                                [
                                    {
                                        buttonText: "option 1",
                                        optionText: "Option 1: Sam dances forever.",
                                    },
                                    {
                                        buttonText: "option pineapple",
                                        optionText: "Option Pineapple: Sam sits in an easy chair.",
                                    }
                                ]
                        }
                        ,
                        {
                            buttonText: "Option Kyle",
                            optionText:
                                "Option Kyle: Go home and go to sleep",
                            storyText:
                                "Kyle kills Sam and gets the best sleep he's ever had. \n",
                        }
                    ],
                },
                {
                    buttonText: "option pineapple",
                    optionText:
                        "Option Pineapple: Sam looks for another snack.",
                    storyText:
                        "Sam finds a jar of peanutbutter. \n",
                    next:
                        [
                            {
                                buttonText: "option 1",
                                optionText: "Option 1: Sam makes a peanutbutter sandwich.",
                            },
                            {
                                buttonText: "option pineapple",
                                optionText: "Option Pineapple: Sam eats the entire jar of peanutbutter.",
                                storyText: "Sam can't decide how they want to cut the sandwich.",
                                next: [
                                    {
                                        buttonText: "option 1",
                                        optionText: "Option 1: Sam cuts it into squares.",
                                    },
                                    {
                                        buttonText: "option pineapple",
                                        optionText: "Option Pineapple: Sam cuts it into triangles.",
                                    }
                                ]
                            }
                        ],
                }
            ],
        };
        this.history = [this.options];
        this.currentOptions = this.options
    }

    start() {
        this.render();
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
                this.history.push(option);
                this.render()
            };
        });
        if (this.history.length != 1) {
            let backButtonElement = document.createElement("button");
            backButtonElement.innerText = "back";
            gameContentElement.appendChild(backButtonElement);
            backButtonElement.onclick = () => {
                let previous = this.history[this.history.length - 2];
                this.history.splice(-1);
                this.options = previous;
                this.render()
            };
        }

        let addToStoryButton = document.createElement("button");
        addToStoryButton.innerText = "Add to story";
        gameContentElement.appendChild(addToStoryButton);
        let addInput = (labelText) => {
            // create input, create label
            // set text on label
            // add both into game content element
        };
        addToStoryButton.onclick = () => {
            let optionTextInput = document.createElement("input");
            let storyTextInput = document.createElement("input");
            let buttonTextInput = document.createElement("input");
            optionTextInput.style = "display: block;";
            storyTextInput.style = "display: block;";
            buttonTextInput.style = "display: block;";
            let optionLabel = document.createElement("label");
            let storyLabel = document.createElement("label");
            let buttonLabel = document.createElement("label");
            optionLabel.innerText = "action long";
            storyLabel.innerText = "outcome";
            buttonLabel.innerText = "action short";
            gameContentElement.appendChild(optionLabel);
            gameContentElement.appendChild(optionTextInput);

            gameContentElement.appendChild(storyLabel);
            gameContentElement.appendChild(storyTextInput);

            gameContentElement.appendChild(buttonLabel);
            gameContentElement.appendChild(buttonTextInput);
        }
    }
}


function pageReady() {
    let elements = document.getElementsByTagName("button");
    console.log(elements);
    let button = elements[0];
    console.log("button", button);
    button.onclick = function showAlert() {
        alert("something else")
    };

    let game = new AdventureGame();
    game.start();
}

window.addEventListener('load', pageReady);