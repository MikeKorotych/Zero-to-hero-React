import { Component } from "react";
import CardContainer from "./card-container.component";
import "./card-list.style.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <CardContainer monster={monster} />;
    })}
  </div>
);

export default CardList;
