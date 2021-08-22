import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import "./styles.css";

const DisplayAllPets = (props) => {
  const { formSubmittedBoolean, setFormSubmittedBoolean } = props;
  const [pets, setPets] = useState([]);

  useEffect(() => {
    console.log("useEffect triggered");
    axios
      .get("http://localhost:8000/api")
      .then((allPets) => {
        console.log(allPets.data.pet);
        setPets(allPets.data.pet);
      })
      .catch((err) => console.log(err));
  }, [formSubmittedBoolean]);

  const deletePet = (id) => {
    axios
      .delete(`http://localhost:8000/api/pet/${id}`)
      .then((response) => {
        console.log("adoption successful");
        setFormSubmittedBoolean(!formSubmittedBoolean);
      })
      .catch((err) => console.log("error deleting pet", err));
  };

  return (
    <div>
      <h2>These pets are looking for a good home</h2>
      <table className="allPets">
        {pets
          ? pets.length > 0 &&
            pets.map((pet, index) => (
              <tr key={index}>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>
                  <Link to={`/pet/${pet._id}`}>Details</Link> |
                  <Link to={`/pet/${pet._id}/edit`}>Edit Pet</Link>
                </td>
              </tr>
            ))
          : "Pet Loading"}
      </table>
    </div>
  );
};

export default DisplayAllPets;
