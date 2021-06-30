let express = require('express');
let app = express();
app.use(express.static(__dirname + '/public'));
let PORT = process.env.PORT || 3002;
let server = require('http').createServer(app)
const io = require("socket.io")(server);
server.listen(PORT, ()=>{
  console.log('App listening on port ' + PORT);
});
setInterval(() => {
  io.emit('hello world')
},5000)
io.on("hi back", (data) => {
  console.log("hi back")
    }
)
