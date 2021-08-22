const Pet = require("../models/pet.model");

module.exports.index = (req, res) => {
  res.json({ message: "Hello World" });
};

module.exports.createPet = (request, response) => {
  const { name, type, description, skill1, skill2, skill3 } = request.body;

  Pet.create({
    name,
    type,
    description,
    skill1,
    skill2,
    skill3,
  })
    .then((pet) => response.json(pet))
    .catch((err) => {
      console.log("Mongoose Error:");
      console.log(err);
      response.status(400).json({ errors: err });
    });
};
module.exports.findPet = (req, res) => {
  Pet.find()
    .then((allPets) => res.json({ pet: allPets }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOnePet = (req, res) => {
  Pet.findOne({ _id: req.params.petId })
    .then((onePet) => res.json({ pet: onePet }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updatePet = (req, res) => {
  const { body } = req;
  Pet.findOneAndUpdate({ _id: req.params.petId }, body, {
    new: true,
    runValidators: true,
    context: "query",
  })
    .then((updatedPet) => res.json({ pet: updatedPet }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deletePet = (req, res) => {
  Pet.deleteOne({ _id: req.params.petId })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
