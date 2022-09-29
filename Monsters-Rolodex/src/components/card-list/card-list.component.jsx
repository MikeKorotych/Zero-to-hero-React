import { Component } from "react";
import CardContainer from "./card-container.component";
import "./card-list.style.css";

class CardList extends Component {
  render() {
    console.log("render from card-list component");
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardContainer monster={monster}></CardContainer>;
        })}
      </div>
    );
  }
}

export default CardList;
