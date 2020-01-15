class AdventureGame {
    constructor() {
        this.options = {
            buttonText: "option pineapple",
            storyText: "Sam goes to the kitchen and sees a bowl of FrUiT. \n" +
                "Option 1: Sam eats a pineapple.\n" +
                "Option Pineapple: Sam looks for another snack.",
            next: [
                {
                    buttonText: "option 1",
                    storyText: "Sam gets heartburn from eating an entire pineapple. \n" +
                        "Option 1: Sam goes to get an antacid. \n" +
                        "Option Pineapple: Sam dances off the heartburn.\n" +
                        "Option Kyle: Go home and go to sleep",
                    next: [
                        {
                            buttonText: "option 1",
                            storyText: "Sam feels much better. \n" +
                                "Option 1: Sam goes for a run. \n" +
                                "Option Pineapple: Sam eats another pineapple",
                            next: [
                                {
                                    buttonText: "option 1",
                                    storyText: "Sam feels invigorated after the run. \n" +
                                        "Option 1: Sam cleans up around the apartment. \n" +
                                        "Option Pineapple: Sam stays outside and enjoys a day in the park.",
                                    next: [],
                                }
                            ],
                        },
                        {
                            buttonText: "Option Pineapple",
                            storyText: "Sam dances off the heartburn. \n" +
                                "Option 1: Sam dances forever. \n" +
                                "Option Pineapple: Sam sits in an easy chair.",
                        },
                        {
                            buttonText: "Option Kyle",
                            storyText: "Kyle kills Sam and gets the best sleep he's ever had. \n" ,
                        }
                    ],
                },
                {
                    buttonText: "option pineapple",
                    storyText: "Sam finds a jar of peanutbutter. \n" +
                        "Option 1: Sam makes a peanutbutter sandwich. \n" +
                        "Option Pineapple: Sam eats the entire jar of peanutbutter.",
                    next: [
                        {
                            buttonText: "option pineapple",
                            storyText: "Sam can't decide how they want to cut the sandwich. \n" +
                                "Option 1: Sam cuts it into squares. \n" +
                                "Option Pineapple: Sam cuts it into triangles.",
                            next: []
                        }
                    ],
                }
            ],
        };
        this.currentOptions = this.options
    }

    start() {
        this.render();
    }

    render() {
        let targetElement = document.getElementById("game-content");
        targetElement.innerHTML = "";

        let storyElement = document.createElement("p");
        storyElement.innerText = this.currentOptions.storyText;
        targetElement.append(storyElement);

        this.currentOptions.next.forEach((option) => {
            let optionButton = document.createElement("button");
            optionButton.innerText = option.buttonText;
            optionButton.onclick = () => {
                this.currentOptions = option;
                this.render()
            };
            targetElement.append(optionButton);
        });
    }
}


function pageReady() {
    let elements = document.getElementsByTagName("button")
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