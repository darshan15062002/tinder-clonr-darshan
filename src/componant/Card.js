import React, { useEffect, useState } from "react";
import "./Card.css";
import TinderCard from "react-tinder-card";
import { Directions, LineAxisOutlined, SwipeDown } from "@mui/icons-material";
import axios from "axios";

function Card() {
  const [people, setPeople] = useState([]);
  const Swiped = (Directions, nameToDelete) => {
    console.log("removing " + nameToDelete);
  };
  const outOfFram = (name) => {
    console.log(name);
  };

  useEffect(() => {
    async function fatchgats() {
      const req = await axios.get(
        "https://arcane-reaches-77213.herokuapp.com/tinder/cards"
      );
      setPeople(req.data);
    }
    fatchgats();
  }, []);

  return (
    <div className="cart">
      <div className="tindercard__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => Swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFram(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="cardbox"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
export default Card;
