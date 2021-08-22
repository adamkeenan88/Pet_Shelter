import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import "./styles.css";

const PetForm = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [errors, setErrors] = useState({});
  const { formSubmittedBoolen, setFormSubmittedBoolean } = props;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("success");
    const newPetData = { name, type, description, skill1, skill2, skill3 };
    console.log(newPetData);
    axios
      .post("http://localhost:8000/api/pet", newPetData)
      .then((newPet) => {
        setName("");
        setType("");
        setDescription("");
        setSkill1("");
        setSkill2("");
        setSkill3("");
        setFormSubmittedBoolean(!formSubmittedBoolen);
        navigate("/");
      })
      .catch((err) => {
        console.log("error block", err.response);
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors.errors);
      });
  };

  return (
    <>
      <p style={{ fontSize: 30 }}>Know a pet needing a home?</p>
      <form onSubmit={onSubmitHandler}>
        <div classname="formcolumnone">
          <p>
            <label>Animal Name</label>
          </p>
          <p>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </p>
          <p>
            <label htmlFor="animalType">Animal Type</label>
          </p>
          <p>
            <input type="text" onChange={(e) => setType(e.target.value)} />
          </p>
          <p>
            <label>Description</label>
          </p>
          <p>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </p>
          <input
            style={{ backgroundColor: "blue", color: "white" }}
            className="newpet"
            type="submit"
            value="Add Pet"
          />
        </div>
        <div className="formcolumntwo">
          <p>
            <label>Animal Skill(s)</label>
            <p>Skill 1</p>
            <p>
              <input type="text" onChange={(e) => setSkill1(e.target.value)} />
            </p>
            <p>Skill 2</p>
            <p>
              <input type="text" onChange={(e) => setSkill2(e.target.value)} />
            </p>
            <p>Skill 3</p>
            <p>
              <input type="text" onChange={(e) => setSkill3(e.target.value)} />
            </p>
          </p>
        </div>
      </form>
      {errors
        ? Object.keys(errors).map((objKey, index) => (
            <p key={index}>{errors[objKey].message}</p>
          ))
        : null}
    </>
  );
};
export default PetForm;
