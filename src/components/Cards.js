import React from "react";
import CardItem from "./CardItem";
import { v4 as uuidv4 } from "uuid";
import "./Cards.css";
import waterFall from "../images/img-9.jpg";
import island from "../images/img-2.jpg";
import ocean from "../images/img-3.jpg";
import football from "../images/img-4.jpg";
import camel from "../images/img-8.jpg";

const cardsContent1 = [
  {
    src: waterFall,
    text: "Explore the hidden waterfall deep inside the Amazon Jungle",
    label: "Adventure",
  },
  {
    src: island,
    text: "Travel through the Islands of Bali in a Private Jungle",
    label: "Luxury",
  },
  {
    src: ocean,
    text: "Set Sail in the Atlantic Ocean visiting Uncharted Waters",
    label: "Luxury",
  },
];
const cardsContent2 = [
  {
    src: football,
    text: "Experience Football on Top of the Himilayan Mountains",
    label: "Adventure",
  },
  {
    src: camel,
    text: "Ride through the Sahara Desert on a guided camel tour",
    label: "Adrenaline",
  },
];

function Cards() {
  const renderItem = (cardInfo) =>
    cardInfo.map((item) => (
      <CardItem
        key={uuidv4()}
        src={item.src}
        label={item.label}
        text={item.text}
        path="/services"
      />
    ));
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">{renderItem(cardsContent1)}</ul>
          <ul className="cards__items">{renderItem(cardsContent2)}</ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
