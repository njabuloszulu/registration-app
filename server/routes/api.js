const Register = require("../models/register");

const registerApi = (app) => {
  app.post("/register", async (req, res) => {
    try {
      const { name, surname, email, idNumber, homeAddress } = req.body;
      const newRegistration = await Register({
        name,
        surname,
        email,
        idNumber,
        homeAddress,
      }).save();
      res.status(201).json(newRegistration);
    } catch (error) {
      console.log(error);
    }
  });

  app.get("/register", async (req, res) => {
    try {
      const registrationList = await Register.find();
      res.status(201).json(registrationList );
    } catch (error) {
      res.status(404).json(error);
    }
  });
};

module.exports = { registerApi };
