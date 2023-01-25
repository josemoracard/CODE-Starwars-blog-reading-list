import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const CharacterDetail = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [isFetched, setIsFetched] = useState(false);
  const [details, setDetails] = useState({});

  useEffect(() => {
    actions.getCharacterDetail(id).then((response) => {
      setDetails(response);
      setIsFetched(true);
    });
  }, [id]);

  if (!isFetched) {
    return null;
  }

  return (
    <div className="container-fluid d-flex row justify-content-center mt-3 px-5">
      <div className="col-md-3">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          className="img-fluid rounded max-width: 100% height: auto"
        />
      </div>
      <div className="col-md-4">
        <div className="d-flex flex-column">
          <h1 className="text-center">{details.properties.name}</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            consectetur nisl nisi, vel dictum urna fringilla in. Suspendisse
            fringilla sit amet massa et maximus.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quisque consectetur nisl nisi, vel
            dictum urna fringilla in. Suspendisse fringilla sit amet massa et
            maximus.
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            consectetur nisl nisi, vel dictum urna fringilla in. Suspendisse
            fringilla sit amet massa et maximus.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quisque consectetur nisl nisi, vel
            dictum urna fringilla in. Suspendisse fringilla sit amet massa et
            maximus.
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            consectetur nisl nisi, vel dictum urna fringilla in. Suspendisse
            fringilla sit amet massa et maximus.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quisque consectetur nisl nisi, vel
            dictum urna fringilla in. Suspendisse fringilla sit amet massa et
            maximus.
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <hr className="col-md-7 d-flex mt-3  " />
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-1 d-flex flex-column">
          <h4 className="text-center">Name</h4>
          <p className="text-center">{details.properties.name}</p>
        </div>
        <div className="col-lg-1 d-flex flex-column">
          <h4 className="text-center">
            Birth <br></br>Year
          </h4>
          <p className="text-center">{details.properties.birth_year}</p>
        </div>
        <div className="col-lg-1 d-flex flex-column">
          <h4 className="text-center">Gender</h4>
          <p className="text-center">{details.properties.gender}</p>
        </div>
        <div className="col-lg-1 d-flex flex-column">
          <h4 className="text-center">Height</h4>
          <p className="text-center">{details.properties.height}</p>
        </div>
        <div className="col-lg-1 d-flex flex-column">
          <h4 className="text-center">
            Skin<br></br> Color
          </h4>
          <p className="text-center">{details.properties.skin_color}</p>
        </div>
        <div className="col-lg-1 d-flex flex-column">
          <h4 className="text-center">
            Eye<br></br> Color
          </h4>
          <p className="text-center">{details.properties.eye_color}</p>
        </div>
      </div>
    </div>
  );
};
