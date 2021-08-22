import { navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

const EditPet = (props) => {
  const { petId } = props;
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pet/${petId}`)
      .then((queriedPet) => {
        console.log(queriedPet.data.pet);

        setName(queriedPet.data.pet.name);
        setType(queriedPet.data.pet.type);
        setDescription(queriedPet.data.pet.description);
        setSkill1(queriedPet.data.pet.skill1);
        setSkill2(queriedPet.data.pet.skill2);
        setSkill3(queriedPet.data.pet.skill3);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/pet/${petId}`, {
        name,
        type,
        description,
        skill1,
        skill2,
        skill3,
      })
      .then((updatedDoc) => navigate("/"))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <section classname="pageHeader">
        <div class="petShelter">Pet Shelter</div>
        <div class="linkBox">
          <Link to={`/`}>back home</Link>
        </div>
      </section>
      <p style={{ fontSize: 30 }}>Edit {name}</p>
      <form onSubmit={handleSubmitUpdate}>
        <div classname="formcolumnone">
          <div>
            <p>Name: </p>
            <p>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </p>
          </div>
          <div>
            <p>Type: </p>
            <p>
              <input
                type="text"
                name="type"
                onChange={(e) => setType(e.target.value)}
                value={type}
              />
            </p>
          </div>
          <div>
            <p>Description: </p>
            <p>
              <input
                type="text"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </p>
          </div>
          <button style={{ backgroundColor: "blue", color: "white" }}>
            SUBMIT EDIT
          </button>
        </div>
        <div className="formcolumntwo">
          <div>
            <label>Skills (optional)</label>
          </div>
          <div>
            <p>Skill 1</p>
            <p>
              <input
                type="text"
                value={skill1}
                onChange={(e) => setSkill1(e.target.value)}
              />
            </p>
          </div>
          <div>
            <p>Skill 2</p>
            <p>
              <input
                type="text"
                value={skill2}
                onChange={(e) => setSkill2(e.target.value)}
              />
            </p>
          </div>
          <div>
            <p>Skill 3</p>
            <p>
              <input
                type="text"
                value={skill3}
                onChange={(e) => setSkill3(e.target.value)}
              />
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditPet;
