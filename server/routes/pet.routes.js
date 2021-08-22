const PetController = require("../controllers/pet.controller");

module.exports = (app) => {
  app.get("/healthcheck", (req, res) => {
    res.send("Everything ok");
  });
  app.post("/api/pet", PetController.createPet);
  app.get("/api", PetController.findPet);
  app.get("/api/pet/:petId", PetController.findOnePet);
  app.put("/api/pet/:petId", PetController.updatePet);
  app.delete("/api/pet/:petId", PetController.deletePet);
};
