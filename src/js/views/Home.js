import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";

import { CardCharacters } from "../component/CardCharacters";
import { CardPlanets } from "../component/CardPlanets";
import { CardVehicles } from "../component/CardVehicles";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

//   useEffect(() => {
// 	console.log("inicio useEffect")
// 	console.log(store.characterList)
//     store.characterList.map((character) => {
// 		console.log("se ejecuta useeffect" + character)
//       actions.getCharacterDetail(character.uid).then((data) => {
// 		console.log("data: " + data);
//         setlistDetails(...listDetails, data);
//       });
//     });
//   }, []);

  return (
    <div className="container-fluid px-5">
      <h1 className="text-danger mt-3 ">Characters</h1>
      <div className="d-flex overflow-auto">
      {store.characterList.map((character, index) => {
          return (
            <CardCharacters
              uid={character.uid}
              index={index}
              key={character.uid}
              url={character.url}
              name={character.name}
            />
          );
        })}
      </div>
      <h1 className="text-danger mt-3">Planets</h1>
      <div className="d-flex overflow-auto">
        {store.planetList.map((planet) => {
          return (
            <CardPlanets
              uid={planet.uid}
              key={planet.uid}
              url={planet.url}
              name={planet.name}
            />
          );
        })}
      </div>
      <h1 className="text-danger mt-3">Vehicles</h1>
      <div className="d-flex overflow-auto">
        {store.vehicleList.map((vehicle) => {
          return (
            <CardVehicles
              uid={vehicle.uid}
              key={vehicle.uid}
              url={vehicle.url}
              name={vehicle.name}
            />
          );
        })}
      </div>
    </div>
  );
};
