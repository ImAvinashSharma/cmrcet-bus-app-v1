import React, { useEffect, useState } from "react";
export default function Weather() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Hyderabad");
  useEffect(() => {
    const fetchApi = async () => {
      const APIkey = process.env.REACT_APP_APIID;
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${APIkey}`;
      const response = await fetch(url);
      const JsonRes = await response.json();
      setCity(JsonRes.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "10vh" }}
      >
        <h2>Weather</h2>
        <div className="input flex-nowrap">
          <input
            maxlength="20"
            size="20"
            type="search"
            className="form-control"
            value={search}
            onChange={e => {
              e.preventDefault();
              setSearch(e.target.value);
            }}
          />
        </div>
        <h1>{search}</h1>
      </div>
      {!city ? (
        <p>city not found</p>
      ) : (
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "27.2vh" }}
        >
          <h1>
            {city.temp} <sup>&#8451;</sup>
          </h1>
          <h3>
            Min : {city.temp_min}
            <sup>&#8451;</sup>
          </h3>
          <h3>
            Max : {city.temp_max}
            <sup>&#8451;</sup>
          </h3>
        </div>
      )}
    </>
  );
}
