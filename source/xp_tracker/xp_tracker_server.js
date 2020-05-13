let express = require('express');
let app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('App listening on port ' + PORT);
});
let addScore = (person, score, description) => {
    let assignment = {
        person: person,
        score: score,
        description: description,
    }
};