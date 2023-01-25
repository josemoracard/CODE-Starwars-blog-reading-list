import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardCharacters = (props) => {
  const { url, uid } = props;
  const { store, actions } = useContext(Context);

  const [details, setDetails] = useState({
    gender: "",
    hair_color: "",
    eye_color: "",
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
          src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text m-0">Gender: {details.gender}</p>
          <p className="card-text m-0">Hair Color: {details.hair_color}</p>
          <p className="card-text">Eye-Color: {details.eye_color}</p>
          <div className="d-flex justify-content-between">
            <Link to={`/characters/${uid}`} className="btn btn-outline-primary">
              Learn more!
            </Link>
            <span>
              { Boolean(store.favorites.find(favorite => favorite.name === props.name)) ? 
              <button onClick={() => {
                actions.deleteFavorite(props.name);
              }} className="btn btn-outline-primary">
            <i className="fa-solid fa-heart"></i>
          </button> :
          <button onClick={() => {
            actions.addToFavorites({
              name: props.name,
              id: props.uid,
              type: 1
            });
          }} className="btn btn-outline-primary">
                <i className={store.favorites.includes(props.name) ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
      </button>
              }
              
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
