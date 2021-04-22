import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Hyderabad");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=70c6577339178b975173fb418ed82ce4`;
      const response = await fetch(url);
      console.log(response);
    };
    fetchApi();
  });
  return (
    <>
      <Header />
      <div>
        {/**http://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=70c6577339178b975173fb418ed82ce4*/}
      </div>
      <Footer />
    </>
  );
}
