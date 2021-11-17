import React from "react";
import IcecreamCard from "./IcecreamCard";

const IcecreamList = ({ list }) => {
  return (
    <div>
      {list.map((item, i) => (
        <IcecreamCard item={item} key={i} />
      ))}
    </div>
  );
};

export default IcecreamList;
