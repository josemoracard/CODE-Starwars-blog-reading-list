import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardVehicles = (props) => {
  const { url, uid } = props;
  const { store, actions } = useContext(Context);

  const [details, setDetails] = useState({
    model: "",
    passengers: "",
  });

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setDetails(response.result.properties));
  }, []);

  return (
    <div className="col">
      <div className="card mt-2" style={{ width: "18rem" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${props.uid}.jpg`}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text m-0">Vehicle model: {details.model}</p>
          <p className="card-text">Passengers: {details.passengers}</p>
          <div className="d-flex justify-content-between">
            <Link to={`/vehicles/${uid}`} className="btn btn-outline-primary">
              Learn more!
            </Link>
            <span>
            {Boolean(
                store.favorites.find((favorite) => favorite.name === props.name)
              ) ? (
                <button
                  onClick={() => {
                    actions.deleteFavorite(props.name);
                  }}
                  className="btn btn-outline-primary"
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
              ) : (
                <button
                  onClick={() => {
                    actions.addToFavorites({
                      name: props.name,
                      id: props.uid,
                      type: 3,
                    });
                  }}
                  className="btn btn-outline-primary"
                >
                  <i
                    className={
                      store.favorites.includes(props.name)
                        ? "fa-solid fa-heart"
                        : "fa-regular fa-heart"
                    }
                  ></i>
                </button>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
