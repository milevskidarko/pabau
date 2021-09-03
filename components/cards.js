import React from "react";
import Card from "./card";

const Cards = ({ data }) => {
  console.log(data, "data");
  return (
    <>
      {data.map((item, index) => (
        <Card data={item} key={index} />
      ))}
    </>
  );
};
export default Cards;
