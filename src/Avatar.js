import React from "react";
import man from "./assets/male.png";
import female from "./assets/female.png";

export const MaleAvatar = () => {
  return (
    <div>
      <img src={man} alt="" width="50px" />
    </div>
  );
};

export const FemaleAvatar = () => {
  return (
    <div>
      <img src={female} alt="" width="50px" />
    </div>
  );
};
