import { Component } from "react";

const CardContainer = ({ monster }) => {
  const { name, id, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set4&size=260x260`}
      ></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default CardContainer;
