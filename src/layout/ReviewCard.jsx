import React from "react";
import Button from "./Button";

const ReviewCard = (props) => {
  return (
    <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <div>
        <p className=" text-lightText  text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          consectetur error, dolores quae ipsa quos enim corporis magni
          obcaecati tempore natus eos, libero ducimus nulla neque eaque maxime
          nam molestias?
        </p>
      </div>

      <div className=" flex flex-col items-center justify-center mt-3">
        <img className=" rounded-full w-1/4" src={props.img} alt="img" />
        <Button title="Learn More"/>
      </div>
    </div>
  );
};

export default ReviewCard;