import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { themeContext } from "../contexts/ThemeContext";
function CountryCard({ name, flag, population, region, capital}) {
  const [mode]=useContext(themeContext)
  return (
    <>
      <div className={`col-md-4 col-lg-3 col-sm-5 d-flex-md justify-content-center align-space-evenly auto ${mode?'bg-light':'bg-dark'} g-3 `} key={name}>
        <Link className="text-decoration-none" to={`/${name}`} state={"hello"}>
          <div className="card ">
            <img className="card-img-top " src={flag} alt={`${name} Flag`} height={"150px"}/>
            <div className={`card-body ${mode?'bg-light text-dark':'bg-dark text-light'}`}>
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
                <strong>Population: {population}</strong>
              </p>
              <p className="card-text">
                <strong>Region: {region}</strong>
              </p>
              <p className="card-text">
                <strong>Capital: {capital}</strong>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CountryCard;
