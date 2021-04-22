import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Hyderabad");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=70c6577339178b975173fb418ed82ce4`;
      const response = await fetch(url);
      const JsonRes = await response.json();
      setCity(JsonRes.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <Header />
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className=""
            value={search}
            onChange={e => {
              e.preventDefault();
              setSearch(e.target.value);
            }}
          />
          <h1>{search}</h1>
        </div>
      </div>
      {!city ? <p>city not found</p> : <div>{city.temp}</div>}

      <Footer />
    </>
  );
}
