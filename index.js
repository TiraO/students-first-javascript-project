let express = require('express');
let app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('source/watch_maker'));
app.listen(PORT, function () {
  console.log('App listening on port ' + PORT);
});