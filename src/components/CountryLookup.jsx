"use client";

import { useState, useEffect } from "react";

const apiKey = process.env.NEXT_PUBLIC_GEO_API_KEY;

const makeUrl = (ip) => {
  return `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}&fields=country_name`;
};

//&fields=country_code2,country_name

const CountryLookup = () => {
  const [country, setCountry] = useState("");

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        //get IP
        const res1 = await fetch(`https://api.ipgeolocation.io/getip`);
        const data1 = await res1.json();

        //get location data
        const res2 = await fetch(makeUrl(data1.ip));
        const data2 = await res2.json();

        setCountry(data2.country_name);
      } catch (error) {
        console.log({
          error,
          devMessage:
            "ERROR AT CountryLookup.js.  Func won't work if ad block is turned on",
        });
      }
    };
    asyncFunc();
  }, []);

  return <>{country || "..."}</>;
};

export default CountryLookup;
