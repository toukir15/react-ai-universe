import React, { useEffect, useState } from "react";

const Card = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
      );
      const data = await res.json();
      setData(data.data.tools);
    };
    loadData();
  }, []);
  return (
    <div>
      <h1>hello card vai</h1>
    </div>
  );
};

export default Card;
