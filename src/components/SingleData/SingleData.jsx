import React from "react";
import { SlCalender } from "react-icons/sl";
import { BsArrowRight } from "react-icons/bs";

const SingleData = (props) => {
  //   console.log(props.singleData);
  const { name, image, published_in, features } = props.singleData;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl my-5">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Feature</h2>
          <p>
            {features.map((feature, index) => (
              <p>
                {index + 1}. {feature}
              </p>
            ))}
          </p>
          <hr className="border-2 border-inherit	" />
          <div className="flex justify-between items-center">
            <div className="">
              <h2 className="text-2xl font-bold mb-2">{name}</h2>
              <div className="flex  items-center">
                <SlCalender className="mr-2" />

                <p>{published_in}</p>
              </div>
            </div>
            <div className="bg-purple-200 p-2 rounded-2xl cursor-pointer">
              <BsArrowRight className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleData;
