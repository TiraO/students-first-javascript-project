class AdventureGame {
    constructor() {
        this.options = {
            buttonText: null,
            storyText: "In 1977, NASA created a Golden Record to send into space to represent the sounds of Earth." +
                " Now, you and your teammates are tasked with creating a new record, representing the sounds of global America." +
                " Throughout the semester, gain experience points (XP) by completing missions to enhance your knowledge of music and globalization, appropriation, and appreciation." +
                " Navigate the prompts in this choose-your-own-adventure activity to complete the training and prove your readiness for the missions ahead.",
            storyPhoto: "https://live.staticflickr.com/1894/44493311531_705051131f_b.jpg",
            infoText: window.alert("Let's begin!"),
            next: [
                {
                    buttonText: "Next",
                    optionText: null,
                    storyText: "Scenario: It is Week 4 and your team is discussing the first official mission, researching music in/of New York.",
                    storyPhoto: "https://cdn4.picryl.com/photo/1946/01/01/view-of-the-apollo-theatre-marquee-new-york-ny-between-1946-and-1948-1024.jpg",
                    infoText: "test",
                    next: [
                        {
                            buttonText: "Globalization of music in New York",
                            optionText: "Which topic do you suggest for your team to research?",
                            storyText: "You choose the Pilot role for this mission, but when looking for sources you" +
                                " realize that the sources you're finding are not very concise, covering a large range of topics related to music in New York. What do you do?",
                            storyPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsm-U_X52Of_4jAaJ1f6X4uOlmB4Wf2wrIkmP7DGI1NI7eFU2x",
                            next: [
                                {
                                    buttonText: "A",
                                    optionText: "A: Type 'globalization, music, New York' into Google and use the first few sources you find.",
                                    storyText: "You find three sources about globalization and add them to your team's document." +
                                        " Because the initial topic was so vague, your sources and your teammates' don't relate very well. Prof. S reads the log and leaves a comment suggesting" +
                                        " that you choose a more specific topic next time.",
                                    storyPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo9H9n-uNhUGgssFGVcZm47L5TMxYAjLMiwIUGPDQCdMvJSMxh",
                                    next: [
                                        {
                                            buttonText: "Read her feedback and choose a more specific topic next time.",
                                            optionText: "What do you do?",
                                            storyText: "Correct. Narrowing your topic will allow you to find more" +
                                                " specific sources and submit a more interesting, informative, and cohesive mission log.",
                                            next: [
                                                {
                                                    buttonText: null,
                                                    optionText: "Refresh your screen to start again.",
                                                    storyText: null,
                                                    storyPhoto: null,
                                                },
                                            ]
                                        },
                                        {
                                            buttonText: "Ignore her feedback and choose 'Globalization of South American music' as your topic in Week 5.",
                                            optionText: null,
                                            storyText: "Incorrect. If a topic is too broad, your team may have trouble finding anything substantial to write about, or risk submitting a very vague and varied mission log that doesn't teach very much." +
                                                "Choosing a specific sub-topic allows you to include more details, statistics, dates, etc. and will make your mission log more informative, interesting, and cohesive.",
                                        },

                                    ]
                                },
                                {
                                    buttonText: "B",
                                    optionText: "B: Suggest a more specific topic for your group to research.",
                                    storyText: "Refresh your screen to return to the beginning and choose a more specific topic.",
                                },
                            ]

                        },
                        {
                            buttonText: "1970s Jamaican-American music culture in New York",
                            optionText: null,
                            storyText: "You choose the Pilot role for the mission and begin looking for sources. Which of the following ",
                            storyPhoto: "https://negromanosphere.com/wp-content/uploads/2017/09/maxresdefault-1-678x381.jpg",
                        },
                    ]
                }
            ],
        }
        ;
        this.currentOptions = this.options
    }


    render() {
        let gameContentElement = document.getElementById("game-content");
        gameContentElement.innerHTML = null;

        let photoElement = document.createElement("img");
        photoElement.src = this.options.storyPhoto;
        photoElement.style = "width: 360px; height: 240 px; margin: 0px;";
        gameContentElement.appendChild(photoElement);

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
            let infoElement = document.createElement("info");
            infoElement.innerText = option.infoText;
            gameContentElement.appendChild(infoElement);
            infoElement.onclick = (event) => {
                this.options = alert(this.infoclick(event));
                console.log(event)
            };
        });
    }
}

function pageReady() {
    let startButton = document.getElementById("start");
    startButton.onclick = () => {
        let introText = document.getElementById("intro");
        introText.innerHTML = null;
        let globePhoto = document.getElementById("globe");
        globePhoto.innerHTML = null;

        let game = new AdventureGame();
        game.render();
    }

}

window.addEventListener('load', pageReady);