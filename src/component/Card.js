import React from "react";
import Mycard from "./mycard";
import "./Card.css";
import { Button } from "@mui/material";

function Card() {
  let box = document.querySelector(".product-container");
  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };
  return (
    <div className="product-carousal">
      <h1>New This Week</h1>

      <button className="pre-btn" onClick={btnpressprev}>
        <p>&#8249;</p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>&#8250;</p>
      </button>
      <div className="product">
        <div className="product-container">
          <img src="https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?" />
          <h5>Collection</h5>
          <h2>
            Most Popular around <br />
            the World
          </h2>
          <Button><h3>Show all</h3></Button>
        </div>
        <div className="product-container">
          <img src="https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?" />
          <h5>Collection</h5>
          <h2>
            Most Popular around <br />
            the World
          </h2>
          <Button><h3>Show all</h3></Button>
        </div>
        
      </div>
      <div className="buttons">
        <Button>Dates</Button>
        <Button>Group Size</Button>
        <Button>More Filters</Button>
        <p className="ver-line"></p>
        <div className="prev-btn"><h4>&#8249;</h4></div>
        <Button>Magic</Button>
        <Button>Music</Button>
        <Button>Social Impact</Button>
        <Button>Wellness</Button>
        <Button>Olympians</Button>
        <Button>Paralympians</Button>
      </div>
    </div>
  );
}

export default Card;
