class AdventureGame {
    constructor() {
        this.options = {
            buttonText: "A",
            storyText: "When you are ready to begin the adventure, choose a scene:\n",
            next: [
                {
                    buttonText: "A",
                    optionText: "A: A tiny town.",
                    storyText: "Once upon a time, in a tiny town on the outskirts of a deep wood, there lived a watchmaker. Day after day he sat in his shop, his wiry and weathered fingers expertly gracing faces with freshly painted numbers, a chaotic chorus of hands chattering in time as he worked. \n",
                    next: [
                        {
                            buttonText: "A",
                            optionText: "A: Watch faces.",
                            storyText: "The watchmaker worked tirelessly, the efforts of his labor showing in the fine detail of every watch produced. Not a soul in the town would ever forget the time. \n",
                        },
                        {
                            buttonText: "B",
                            optionText: "B: Watching faces.",
                            storyText: "The watchmaker worked tirelessly, etching numbers expertly into each cheek, chin, and forehead. \n",
                        }
                    ],
                },
                {
                    buttonText: "B",
                    optionText: "B: A sprawling city.",
                    storyText: "Once upon a time, in a sprawling city on the planet Galar, there lived a watchmaker. Day after day he sat in his shop, his wiry and weathered fingers expertly gracing faces with freshly painted numbers, a chaotic chorus of hands chattering in time as he worked. \n",
                    next: [
                        {},
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