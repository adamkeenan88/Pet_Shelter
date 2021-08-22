import React from "react";
import { Router } from "@reach/router";
import Main from "./Views/Main";
import NewPet from "./Views/NewPet";
import DisplayOnePet from "./Components/DisplayOnePet";
import EditPet from "./Components/EditPet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <NewPet path="/pet/new" />
        <EditPet path="/pet/:petId/edit" />
        <DisplayOnePet path="/pet/:petId" />
      </Router>
    </div>
  );
}
export default App;
