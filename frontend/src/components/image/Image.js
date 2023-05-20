import React from "react";

const Image = ({ imgName, className }) => {
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/steadfast_images/${imgName}`}
        className={className}
        alt={imgName}
      />
    </div>
  );
};

export default Image;
