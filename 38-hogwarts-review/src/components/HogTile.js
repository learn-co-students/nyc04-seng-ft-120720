import { useState } from "react";
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";

const imageMap = {
  "Augustus Gloop": augustus_gloop,
  Babe: babe,
  Bailey: bailey,
  Cherub: cherub,
  "Galaxy Note": galaxy_note,
  "Leggo My Eggo": leggo_my_eggo,
  Peppa: peppa,
  "Piggy smalls": piggy_smalls,
  Piglet: piglet,
  Porkchop: porkchop,
  Trouble: trouble,
  "Truffle Shuffle": truffle_shuffle,
};

function HogTile({ hog }) {
  const [isShowingDetails, setIsShowingDetails] = useState(false);
  const image = imageMap[hog.name];

  function handleToggleDetails() {
    setIsShowingDetails(!isShowingDetails);
  }

  const {
    name,
    specialty,
    greased,
    weight: wght,
    "highest medal achieved": medal,
  } = hog;

  return (
    <div className="ui four wide column" onClick={handleToggleDetails}>
      <div className="ui card">
        <div className="image">
          <img src={image} alt={name} style={{ width: "100%" }} />
        </div>
        <div className="content">
          <a className="header">{name}</a>
          <div className="description">
            {isShowingDetails ? (
              <div>
                <p>specialty: {specialty}</p>
                <p>greased: {greased ? "yup" : "nup"}</p>
                <p>wght: {wght}</p>
                <p>medal: {medal}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HogTile;
