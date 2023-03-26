import React from "react";

const SingleData = (props) => {
  //   console.log(props.singleData);
  const { name, image, published_in, features } = props.singleData;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Feature</h2>
          <p>{features.map((singleFeature) => console.log(singleFeature))}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
