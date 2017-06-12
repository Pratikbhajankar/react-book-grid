const express = require("express");
const app = express();
app.use(express.static('public'))
const route = require("./app/route/route");
route(app);
app.listen(4040,function(){
    console.log("server listening to 4040");
});
