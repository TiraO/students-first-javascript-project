class AdventureGame {
    constructor() {
        this.options = {
            buttonText: "A",
            storyText: "Choose a scene:",
            storyPhoto: "https://cdn.pixabay.com/photo/2018/02/24/20/39/clock-3179167_960_720.jpg",
            next: [
                {
                    buttonText: "A",
                    optionText: "A: A tiny town.",
                    storyText: "Once upon a time, in a tiny town on the outskirts of a deep wood, there lived a watchmaker. Day after day he sat in his shop, his wiry and weathered fingers expertly gracing faces with freshly painted numbers, a chaotic chorus of hands chattering in time as he worked. What was he working on?\n",
                    storyPhoto: "https://storage.needpix.com/rsynced_images/cottage-2052212_1280.jpg",
                    next: [
                        {
                            buttonText: "A",
                            optionText: "A: Watch faces.",
                            storyText: "The watchmaker worked tirelessly, the efforts of his labor evident in the fine detail of every watch produced. In such a tiny town there was not a large demand for watchmaking; he had full reign over the industry, confident that no passing peddler's product could ever come close to matching his. \n",
                            storyPhoto: "https://cdn.pixabay.com/photo/2017/09/28/17/17/clock-2796247_960_720.jpg",
                            next: [
                                {
                                    buttonText: "Pride cometh before the fall.",
                                    optionText: null,
                                    storyText: "Years passed and the watchmaker continued his craft. The townspeople respected his work and never questioned its quality. Then one day, someone new arrived. \n",
                                    storyPhoto: "data:image/jpeg;base64,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",
                                    next: [
                                        {
                                            buttonText: "Tell me more!",
                                            optionText: null,
                                            storyText: "Dressed in a dark, hooded cloak and carrying a large satchel, the newcomer immediately captured the attention of the town. Who was this mysterious visitor, and what was inside so hefty a bag?",
                                            storyPhoto: "https://storage.needpix.com/rsynced_images/black-and-white-2315326_1280.jpg",
                                            next: [
                                                {
                                                    buttonText: "Next",
                                                    optionText: null,
                                                    storyText: "Watches, of course!",
                                                    storyPhoto: "https://storage.needpix.com/rsynced_images/clocks-1098080_1280.jpg",
                                                    next: [
                                                        {
                                                            buttonText: "Yes.",
                                                            optionText: "The End...for now.",
                                                            storyText: "Great, but you'll need to refresh because I haven't learned how to loop back yet.",
                                                            storyPhoto: "https://cdn.pixabay.com/photo/2013/03/29/13/40/reload-97640_960_720.png",
                                                        },
                                                        {
                                                            buttonText: "No.",
                                                            optionText: "Return to the beginning?",
                                                            storyText: "Alright, thanks for playing.",
                                                            storyPhoto: "https://upload.wikimedia.org/wikipedia/commons/3/3d/The_End_Book.png",
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            buttonText: "That's too much intrigue. I've read enough.",
                                            optionText: null,
                                            storyText: "Wow, okay.",
                                            storyPhoto: "https://farm6.staticflickr.com/5490/9673880568_493fb94cff_b.jpg",
                                            next: [
                                                {
                                                    buttonText: "Yes.",
                                                    optionText: "The End.",
                                                    storyText: "Great, but you'll need to refresh because I haven't learned how to loop back yet.",
                                                    storyPhoto: "https://cdn.pixabay.com/photo/2013/03/29/13/40/reload-97640_960_720.png",
                                                },
                                                {
                                                    buttonText: "No.",
                                                    optionText: "Return to the beginning?",
                                                    storyText: "Alright, thanks for playing.",
                                                    storyPhoto: "https://upload.wikimedia.org/wikipedia/commons/3/3d/The_End_Book.png",
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    buttonText: "As you sow, so shall you reap.",
                                    optionText: null,
                                    storyText: "Years passed and the watchmaker continued his craft. The townspeople respected his work and never questioned its quality. The watchmaker lived a peaceful, satisfactory life of production and repair. \n",
                                    storyPhoto: "data:image/jpeg;base64,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",
                                    next: [
                                        {
                                            buttonText: "Yes.",
                                            optionText: "The End.",
                                            storyText: "Great, but you'll need to refresh because I haven't learned how to loop back yet.",
                                            storyPhoto: "https://cdn.pixabay.com/photo/2013/03/29/13/40/reload-97640_960_720.png",
                                        },
                                        {
                                            buttonText: "No.",
                                            optionText: "Return to the beginning?",
                                            storyText: "Alright, thanks for playing.",
                                            storyPhoto: "https://upload.wikimedia.org/wikipedia/commons/3/3d/The_End_Book.png",
                                        }
                                    ]
                                }
                            ],
                        },
                        {
                            buttonText: "B",
                            optionText: "B: Watching faces.",
                            storyText: "The watchmaker worked tirelessly, etching numbers expertly into each cheek, chin, and forehead. Such a small town didn't require many watchers, but each one had to be flawless.",
                            storyPhoto: "https://p0.piqsels.com/preview/733/650/355/fantasy-woman-clock-mysterious.jpg",
                            next: [
                                {
                                    buttonText: "The safety of the town was at stake.",
                                    optionText: "Why?",
                                    storyText: "At the end of each day, with a pile of fresh, finished faces in hand, the watchmaker would leave his shop. The worn soles of his shoes marked the miles he traversed each night, plastering fresh faces to statues, doorways, and clocktowers, removing those that were damaged to bring back to his shop for repair. The town was small, but he ventured into the woods, uniting faces with tree trunks as an extra barrier.",
                                    storyPhoto: "https://cdn.pixabay.com/photo/2018/04/04/02/12/clock-3288640_960_720.jpg",
                                },
                                {
                                    buttonText: "The watchers gather information.",
                                    optionText: null,
                                    storyText: "They're always watching.",
                                    storyPhoto: "https://cdn.pixabay.com/photo/2018/04/04/02/12/clock-3288640_960_720.jpg",
                                }
                            ]

                        }
                    ],
                },
                {
                    buttonText: "B",
                    optionText: "B: A sprawling city.",
                    storyText: "Once upon a time, in a sprawling city on the planet Galar, there lived a watchmaker. Day after day she sat in her shop, wiry and weathered fingers expertly gracing faces with freshly painted numbers, a chaotic chorus of hands chattering in time as she worked. What was she working on? \n",
                    storyPhoto: "https://p1.pxfuel.com/preview/209/654/502/steampunk-city-clock-clock-city-royalty-free-thumbnail.jpg",
                    next: [
                        {
                            buttonText: "A",
                            optionText: "A: Watch faces.",
                            storyText: "The watchmaker worked tirelessly, the efforts of her labor showing in the fine detail of every watch produced. In such a big city competitors were many, but craftmanship of her caliber was as rare as a glimpse of the planet's third moon. \n",
                            storyPhoto: "https://cdn.pixabay.com/photo/2019/04/10/12/41/time-4117023_960_720.jpg",
                            next: [
                                {
                                    buttonText: "Pride cometh before the fall.",
                                    optionText: null,
                                    storyText: "Years passed and the watchmaker continued her craft. Despite so many competitors, people respected her work and never questioned its quality. Then one day, a stranger arrived.\n",
                                    storyPhoto: "https://p1.pxfuel.com/preview/974/841/259/steampunk-time-clock-brass-royalty-free-thumbnail.jpg",
                                    next: [
                                        {
                                            buttonText: "Next",
                                            optionText: null,
                                            storyText: "What happened next? You'll have to imagine on your own, because GGJ has ended and so has my time for this story.",
                                            storyPhoto: "https://cdn.pixabay.com/photo/2017/09/29/10/11/time-2798567__340.jpg",
                                        }
                                    ]
                                },
                                {
                                    buttonText: "As you sow, so shall you reap.",
                                    optionText: null,
                                    storyText: "Years passed and the watchmaker continued her craft. Despite so many competitors, people respected her work and never questioned its quality. The watchmaker lived a peaceful, satisfactory life of production and repair. \n",
                                    storyPhoto: "https://p1.pxfuel.com/preview/938/533/121/fantasy-steampunk-watches-world-gothic-mysterious.jpg",
                                    next: [
                                        {
                                            buttonText: "Yes.",
                                            optionText: "The End.",
                                            storyText: "Great, but you'll need to refresh because I haven't learned how to loop back yet.",
                                            storyPhoto: "https://cdn.pixabay.com/photo/2013/03/29/13/40/reload-97640_960_720.png",
                                        },
                                        {
                                            buttonText: "No.",
                                            optionText: "Return to the beginning?",
                                            storyText: "Alright, thanks for playing.",
                                            storyPhoto: "https://upload.wikimedia.org/wikipedia/commons/3/3d/The_End_Book.png",
                                        }
                                    ]
                                }
                            ],
                        },
                        {
                            buttonText: "B",
                            optionText: "B: Watching faces.",
                            storyText: "The watchmaker worked tirelessly, etching numbers expertly into each cheek, chin, and forehead. The city was vast; so too must be her legion. \n",
                            storyPhoto: "https://p0.piqsels.com/preview/733/650/355/fantasy-woman-clock-mysterious.jpg",
                            next: [
                                {
                                    buttonText: "Next",
                                    optionText: null,
                                    storyText: "At the end of each day, with a pile of fresh, finished faces in hand, the watchmaker would leave her shop. The worn soles of her shoes marked the miles traversed each night, plastering fresh faces to statues, doorways, and clocktowers, removing those that were damaged to bring back to her shop for repair.",
                                    storyPhoto: "https://cdn.pixabay.com/photo/2019/06/07/10/37/high-tech-4257948_960_720.jpg",
                                    next: [
                                        {
                                            buttonText: "The watchers protect the city.",
                                            optionText: null,
                                            storyText: "Watchmakers have a valuable role in society. You'll have to imagine how on your own, since GGJ has ended and so has my time for this story.",
                                            storyPhoto: "https://cdn.pixabay.com/photo/2018/02/17/20/08/vintage-3160785_960_720.jpg",
                                        },
                                        {
                                            buttonText: "The watchers gather information.",
                                            optionText: null,
                                            storyText: "They're always watching.",
                                            storyPhoto: "https://p1.pxfuel.com/preview/12/769/98/watch-time-clock-eye-fantasy-blue.jpg",
                                        }
                                    ]
                                },
                            ]
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

        let photoElement = document.createElement("img");
        photoElement.src = this.options.storyPhoto;
        photoElement.style = "width: 360px; height: 240px; margin: 0px;";
        gameContentElement.appendChild(photoElement);
        photoElement.onclick = (event) => {
            alert(this.chimneyclick(event));
            console.log(event)
        };

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

    chimneyclick(event) {
        // offsetX: 164 offsetY: 64
        if (event.offsetX > 150 && event.offsetX < 180 && event.offsetY > 50 && event.offsetY < 80) {
            return true + " You found the chimney and repaired it. Great job!"
        } else {
            return false + " You have not repaired the chimney. Try again."
        }
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