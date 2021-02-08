class BirthdayCardApp {
  constructor() {
    $("#event-form").hide();
    this.pixiApp = new PIXI.Application({
      view: $("#birthday-card-canvas")[0],
      width: 400,
      height: 600,
    });

    // document.body.appendChild(this.pixiApp.view);
    this.pixiApp.view.style = "display:none;"

    moment.updateLocale('en', {
      longDateFormat: {
        LT: "h:mma",
        LTS: "h:mm:ssa",
        L: "MMM D [at] LT",
        l: "M/D/YYYY",
        LL: "MMMM Do YYYY",
        ll: "MMM D YYYY",
        LLL: "MMMM Do YYYY LT",
        lll: "MMM D YYYY LT",
        LLLL: "dddd, MMMM Do YYYY LT",
        llll: "ddd, MMM D YYYY LT"
      }
    });

    let selectedMoment = moment();
    $("#date-text")[0].innerText = selectedMoment.calendar({
      sameElse: 'ddd MMM Mo'
    });

    $("#make-card-button").on("click", this.previewCard.bind(this));
  }

  previewCard() {
    let baseImage = PIXI.Sprite.from('./happybirthdaytira.png');
    baseImage.scale.y = 600 / baseImage.height;
    baseImage.scale.x = baseImage.scale.y;

    this.pixiApp.stage.addChild(baseImage);
    this.pixiApp.view.style = "display:block;"

  }
}

let initialize = () => {
  let birthdayApp = new BirthdayCardApp();
}

window.addEventListener('load', initialize);
