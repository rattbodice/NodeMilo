const BMIcontroller = require("./src/BMIcontroller/ControllerBMI");

module.exports = (app) => {
  app.get("/BMIcal/:Weight/:height", BMIcontroller.BMIget);
  app.post("/BMIcalpost", BMIcontroller.BMIpost);
};
