import { navigate } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "@reach/router";
import "../Components/styles.css";

const DisplayOnePet = (props) => {
  const { petId } = props;
  const [petInfo, setPetInfo] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pet/${petId}`)
      .then((queriedPet) => {
        console.log(queriedPet.data.pet);
        setPetInfo(queriedPet.data.pet);
      })
      .catch((err) => console.log(err.response));
  }, []);

  const deletePet = (id) => {
    axios
      .delete(`http://localhost:8000/api/pet/${petId}`)
      .then((response) => {
        console.log("deletion successful");
        navigate("/");
      })
      .catch((err) => console.log("error deleting pet", err));
  };

  const [Likes, setLikes] = useState(0);

  return (
    <div>
      <section className="pageHeader">
        <div className="petShelter">Pet Shelter</div>
        <div className="linkBox">
          <Link to={`/`}>back home</Link>
        </div>
      </section>
      {petInfo ? (
        <div>
          <h1 id="details">Details about: {petInfo.name}</h1>
          <button id="displayAdopt" onClick={() => deletePet(petInfo._id)}>
            Adopt {petInfo.name}
          </button>
          <section id="displayone">
            <div className="displaycolumnone">
              <p>Pet Type:</p>
              <p>Description:</p>
              <p>Skills</p>
            </div>
            <div className="displaycolumntwo">
              <p>{petInfo.type}</p>
              <p>{petInfo.description}</p>
              <p>{petInfo.skill1}</p>
              <p>{petInfo.skill2}</p>
              <p>{petInfo.skill3}</p>
            </div>
          </section>
          <button onClick={() => setLikes(Likes + 1)}>
            Like {petInfo.name}
          </button>
          <p>{Likes} Like(s)</p>
        </div>
      ) : (
        <h1>DTA IS LOADING</h1>
      )}
    </div>
  );
};

export default DisplayOnePet;
