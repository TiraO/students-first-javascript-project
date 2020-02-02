class AdventureGame {
    constructor() {
        this.options = {
            buttonText: "A",
            storyText: "Choose a scene:",
            storyPhoto: "watch-photo \n",
            next: [
                {
                    buttonText: "A",
                    optionText: "A: A tiny town.",
                    storyText: "Once upon a time, in a tiny town on the outskirts of a deep wood, there lived a watchmaker. Day after day he sat in his shop, his wiry and weathered fingers expertly gracing faces with freshly painted numbers, a chaotic chorus of hands chattering in time as he worked. What was he working on?\n",
                    next: [
                        {
                            buttonText: "A",
                            optionText: "A: Watch faces.",
                            storyText: "The watchmaker worked tirelessly, the efforts of his labor showing in the fine detail of every watch produced. In such a tiny town there was not a large demand for watchmaking; he had full reign over the industry, confident that no passing peddler's product could ever come close to matching his. \n",
                            next: [
                                {
                                    buttonText: "Pride cometh before the fall.",
                                    optionText: null,
                                    storyText: "Years passed and the watchmaker continued his craft. The townspeople respected his work and never questioned its quality. \n",
                                    next: [
                                        {
                                            buttonText:
                                        }

                                    ]
                                },
                                {
                                    buttonText: "As you sow, so shall you reap.",
                                    optionText: null,
                                    storyText: "Years passed and the watchmaker continued his craft. The townspeople respected his work and never questioned its quality. The watchmaker lived a peaceful, satisfactory life. \n",
                                    next: [
                                        {
                                            buttonText: "Yes.",
                                            optionText: "Return to the beginning?",
                                            storyText: "The End.",
                                        }
                                        {
                                            buttonText: "No."
                                            optionText: null,
                                            storyText: null,
                                        }
                                    ]
                                }
                            ],
                        },
                        {
                            buttonText: "B",
                            optionText: "B: Watching faces.",
                            storyText: "The watchmaker worked tirelessly, etching numbers expertly into each cheek, chin, and forehead. Such a small town didn't require many watchers, but each one had to be flawless. The safety of the town was at stake. \n",
                        }
                    ],
                },
                {
                    buttonText: "B",
                    optionText: "B: A sprawling city.",
                    storyText: "Once upon a time, in a sprawling city on the planet Galar, there lived a watchmaker. Day after day he sat in his shop, his wiry and weathered fingers expertly gracing faces with freshly painted numbers, a chaotic chorus of hands chattering in time as he worked. What was he working on? \n",
                    next: [
                        {
                            buttonText: "A",
                            optionText: "A: Watch faces.",
                            storyText: "The watchmaker worked tirelessly, the efforts of his labor showing in the fine detail of every watch produced. In such a big city competitors were many, but craftmanship of his caliber was as rare as a glimpse of the planet's third moon. \n",
                        },
                        {
                            buttonText: "B",
                            optionText: "B: Watching faces.",
                            storyText: "The watchmaker worked tirelessly, etching numbers expertly into each cheek, chin, and forehead. The city was vast; so must be his legion. \n",
                        },
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

        let watchPhoto = document.getElementById("watch-photo");

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
        this.options.next.forEach((option) => {
            let photoElement = document.createElement("photo");
            photoElement.innerText = option.storyPhoto;
            gameContentElement.appendChild(photoElement);
        });

    }
}

function pageReady() {
    let startButton = document.getElementById("start");
    startButton.onclick = () => {
        let introText = document.getElementById("intro");
        introText.innerHTML = null;
        let jamPhoto = document.getElementById("jam-photo");
        jamPhoto.innerHTML = null;

        let game = new AdventureGame();
        game.render();
    }

}

window.addEventListener('load', pageReady);