import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onclick, style }) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span
  key={i}
  onClick={() => {
    console.log(`Clicked on star ${i + 1}`);
    onclick(i + 1);
  }}
  style={{ ...style, cursor: "pointer" }}
>
  {rating > i ? (
    <AiFillStar fontSize="15px" />
  ) : (
    <AiOutlineStar fontSize="15px" />
  )}
</span>

      ))}
    </div>
  );
};

export default Rating;
