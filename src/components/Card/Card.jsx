import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import SingleData from "../SingleData/SingleData";

const Card = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);
  const [singleData, setSingleData] = useState({});
  console.log(singleData);

  const handleShowAll = () => {
    setShowAll(true);
  };
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data));
  }, [uniqueId]);

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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5">
        {data.slice(0, showAll ? 12 : 6).map((singleData) => (
          <SingleData
            setUniqueId={setUniqueId}
            singleData={singleData}
          ></SingleData>
        ))}
      </div>
      {!showAll && (
        <div className="text-center">
          <span className="inline-block" onClick={handleShowAll}>
            <Button>See More</Button>
          </span>
        </div>
      )}
      <Modal setSingleData={setSingleData} />
    </>
  );
};

export default Card;
