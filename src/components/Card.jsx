import React, { useContext, useEffect, useState } from "react";
import data from "../data.json";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { themeContext } from "../contexts/ThemeContext";
function Card() {
  const [mode] = useContext(themeContext);
  // uselocation
  // const location=useLocation()
  // console.log(location.pathname) // logs the current path eg "/about"
  // console.log(location.search)// logs the query string eg"?id=123"
  // console.log(location.state)// logs any state passed during navigation eg(form:"/home")

  const navigate = useNavigate();
  const [countryData, setCountryData] = useState(null);

  // const location=useLocation() // passing the data from one page to another page using useLocation
  // console.log(location.state)  // in countryCard.jsx the link should contain the state={data}

  // const countryName= new URLSearchParams(location.search).get('name')
  const countryName = useParams();
  useEffect(() => {
    const item = data.find((country) => country.name === countryName.card);
    setCountryData(item);
    if (!item) {
      const item1 = data.find(
        (country) => country.alpha3Code === countryName.card
      );
      setCountryData(item1);
    }
  }, [countryName]);

  return (
    <>
      <div className={`${mode ? "bg-light text-dark" : "bg-dark text-light"}`}>
        <button className={`btn ${mode ? "bg-light text-dark" : "bg-dark text-light"}`} onClick={() => navigate(-1)}>Back</button>
        <button className={`btn ${mode ? "bg-light text-dark" : "bg-dark text-light"}`} onClick={()=>navigate(+1)}>forward</button>
      </div>
      <div className={`card d-flex flex-column align-items-center hover-shadow  ${mode ? "bg-light text-dark" : "bg-dark text-light"} `}>
        {countryData ? (
          <>
            <h1 className="card-header">{countryData.name}</h1>
            <img className="w-50" src={countryData.flag} alt={`${countryData.name} Flag`}/>
              <p>Population: {countryData.population}</p>
              <p>Region: {countryData.region}</p>
              <p>Capital: {countryData.capital}</p>
              <div className="row-cols-9">
              border :
              {countryData.borders ? (
                countryData.borders.map((border) => (
                  <button className="btn" key={border}>
                    <Link to={`/${border}`} className={`text-decoration-none ${mode ? "bg-light text-dark" : "bg-dark text-light"} g-2`}>{border}</Link>
                  </button>
                ))
              ) : (
                <> No border</>
              )}
              </div>
          </>
            ) : (
              <p>Country not found</p>
            )}
      </div>
    </>
  );
}

export default Card;
