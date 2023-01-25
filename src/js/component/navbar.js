import React, { useContext } from "react";
import starWarsLogo from "../../img/starwars-logo.png"; 
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

  const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand ms-5">
	<img src={starWarsLogo} height="90px" width="100%"/>
	</Link>
	<div className="d-flex justify-content-end me-5">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle btn btn-primary text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
          {store.favorites.map((favorite, index) => {
            return (
              <li key={index} className="d-flex navegacion"> 
                <Link to={favorite.type===1 ? `/characters/${favorite.id}` : favorite.type===2 ? `/planets/${favorite.id}` : `/vehicles/${favorite.id}`} className="dropdown-item">
                  {favorite.name}
                </Link>
                <span
                  onClick={() => {
                    actions.deleteFavorite(favorite.name);
                  }}
                >
                  <i className="fa-regular fa-trash-can pe-2 pt-2"></i>
                </span>
              </li>
            );
          })}
          </ul>
        </li>
        </ul>
	</div>
  </div>
</nav>
	);
};