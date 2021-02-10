let express = require('express');
let app = express();
app.use(express.static(__dirname + '/public'));
let PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log('App listening on port ' + PORT);
});