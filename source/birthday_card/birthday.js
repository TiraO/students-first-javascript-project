let previewCard = () => {

}

let initialize = () => {
  const app = new PIXI.Application();
  document.body.appendChild(app.view);
  app.view.style = "display:none;"//{ "display": "none" }
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

  $("#make-card-button").on("click", previewCard);
}

window.addEventListener('load', initialize);
