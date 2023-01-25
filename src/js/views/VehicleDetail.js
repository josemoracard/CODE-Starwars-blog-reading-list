import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const VehicleDetail = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [isFetched, setIsFetched] = useState(false);
  const [details, setDetails] = useState({});

  useEffect(() => {
    actions.getVehiclesDetail(id).then((response) => {
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
          src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
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
          <h4 className="text-center">Model</h4>
          <p className="text-center">{details.properties.model}</p>
        </div>
        <div className="col-lg-1 d-flex flex-column">
          <h4 className="text-center">Vehicle class</h4>
          <p className="text-center">{details.properties.vehicle_class}</p>
        </div>
        <div className="col-lg-1 d-flex flex-column">
          <h4 className="text-center">Manufacturer</h4>
          <p className="text-center">{details.properties.manufacturer}</p>
        </div>
        <div className="col-lg-1 d-flex flex-column">
          <h4 className="text-center">Cost</h4>
          <p className="text-center">{details.properties.cost_in_credits} Credits</p>
        </div>
        <div className="col-lg-1 d-flex flex-column">
          <h4 className="text-center">Crew</h4>
          <p className="text-center">{details.properties.crew}</p>
        </div>
        <div className="col-lg-1 d-flex flex-column">
          <h4 className="text-center">Passengers</h4>
          <p className="text-center">{details.properties.passengers}</p>
        </div>
        <div className="col-lg-1 d-flex flex-column">
          <h4 className="text-center">Cargo capacity</h4>
          <p className="text-center">{details.properties.cargo_capacity}</p>
        </div>
        <div className="col-lg-1 d-flex flex-column">
          <h4 className="text-center">Consumables</h4>
          <p className="text-center">{details.properties.consumables}</p>
        </div>
      </div>
    </div>
  );
};
