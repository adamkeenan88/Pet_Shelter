import PetForm from "../Components/NewPetForm";
import { Link } from "@reach/router";
import React, { useState, useEffect } from "react";
import "../Components/styles.css";

const NewPet = () => {
  const [formSubmittedBoolean, setFormSubmittedBoolean] = useState(false);

  return (
    <div>
      <section className="pageHeader">
        <div className="petShelter">Pet Shelter</div>
        <div className="linkBox">
          <Link to={`/`}>back home</Link>
        </div>
      </section>
      <PetForm
        formSubmittedBoolean={formSubmittedBoolean}
        setFormSubmittedBoolean={setFormSubmittedBoolean}
      />
    </div>
  );
};

export default NewPet;
