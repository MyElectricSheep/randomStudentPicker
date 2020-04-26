import React from "react";

const Player = ({player}) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        style={{width: "87%", margin: "0 auto"}}
        src={`https://robohash.org/${Math.random()}?set=set4`}
        alt="Card cap"
      />
      <div className="card-body">
        <h4 className="card-title">{player.firstName}{" "}{player.lastName}</h4>
        <p className="card-text">
        {player.timesPassed === 0 ? "First time to pass!" : `Already passed: ${player.timesPassed} times!`}
          
        </p>
      </div>
    </div>
  );
};

export default Player;
