import React from "react";
import { Image } from "react-bootstrap";
import spices from "../assets/images/spices.jpg";

export const Home = () => {
  return (
    <>
      <div>Welcome to SpiceHub</div>
      <Image
        src={spices}
        alt="spices in containers"
        style={{
          width: "100%",
          height: "80vh",
          objectFit: "cover",
          opacity: "50%",
        }}
      />
    </>
  );
};
