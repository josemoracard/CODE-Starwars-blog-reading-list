import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const PlanetDetail = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [isFetched, setIsFetched] = useState(false);
  const [details, setDetails] = useState({});

  useEffect(() => {
    actions.getPlanetsDetails(id).then((response) => {
      setDetails(response);
      setIsFetched(true);
    });
  }, []);

  if (!isFetched) {
    return null;
  }

  return (
    <div className="container-fluid d-flex row justify-content-center mt-3 px-5">
      <div className="col-md-3">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
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
          <h4 className="text-center">Diameter</h4>
          <p className="text-center">{details.properties.diameter}</p>
        </div>
        <div className="col-lg-1 d-flex flex-column">
          <h4 className="text-center">Rotation Period</h4>
          <p className="text-center">{details.properties.rotation_period}</p>
        </div>
        <div className="col-lg-1 d-flex flex-column">
          <h4 className="text-center">Gravity</h4>
          <p className="text-center">{details.properties.gravity}</p>
        </div>
        <div className="col-lg-1 d-flex flex-column">
          <h4 className="text-center">Population</h4>
          <p className="text-center">{details.properties.population}</p>
        </div>
        <div className="col-lg-1 d-flex flex-column">
          <h4 className="text-center">Climate</h4>
          <p className="text-center">{details.properties.climate}</p>
        </div>
        <div className="col-lg-1 d-flex flex-column">
          <h4 className="text-center">Terrain</h4>
          <p className="text-center">{details.properties.terrain}</p>
        </div>
        <div className="col-lg-1 d-flex flex-column">
          <h4 className="text-center">Surface Water</h4>
          <p className="text-center">{details.properties.surface_water}</p>
        </div>
      </div>
    </div>
  );
};
