import React from "react";
import "./Countries.css";
import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  return (
    <div>
      <LoadCountry></LoadCountry>
    </div>
  );
};

function LoadCountry() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1 className="header">Country Details</h1>
      <div className="container">
        {countries.map((country) => (
          // <Country name={country.name.common} population={country.population} flags={country.flags.png}></Country>
          <Country country={country} key={country.cca3}></Country>
        ))}
      </div>
    </div>
  );
}
export default Countries;
