const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

require("./routes")(app);

app.get("/status", function (req, res) {
  res.send("hello");
});


let port = 8081;

app.listen(port, function () {
  console.log("running " + port);
});
