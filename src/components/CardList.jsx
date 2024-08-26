import React, { useContext } from "react";
import data from "../data.json";
// import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import { themeContext } from "../contexts/ThemeContext";
import { QueContext } from "../contexts/QueryContext";

function CardList() {
  const [mode]=useContext(themeContext)
  const [query]=useContext(QueContext)
  return (
    <>
     <div className={`container-fluid ${mode?'bg-light':'bg-dark'}`}>
      <div className="row">
        {data
          .filter((country) =>
            country.name.toLowerCase().includes(query.toLowerCase()) || country.region.toLowerCase().includes(query.toLowerCase())
          )
          .map((country) => (
            <CountryCard key={country.name} name={country.name} flag={country.flag}  population={country.population} region={country.region} capital={country.capital} mode={mode}/>
          ))}
      </div>
    </div>
    </>
  );
}

export default CardList;
