import React, { useEffect } from "react";

export default function weather() {
  useEffect(() => {
    const fetchApi = async () => {
      const url =
        "http://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=70c6577339178b975173fb418ed82ce4";
      const response = await fetch();
    };
    fetchApi();
  });
  return (
    <div>
      {/**http://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=70c6577339178b975173fb418ed82ce4*/}
    </div>
  );
}
