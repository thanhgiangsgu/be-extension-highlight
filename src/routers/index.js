const user = require("./User");
const category = require("./Category")
const highlight = require("./Highlight")


function route(app) {
  app.use("/user", user);
  app.use("/category", category)
  app.use("/highlight" , highlight)
}

module.exports = route;
