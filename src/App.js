import React, { useState, useEffect } from "react";
import PlayerList from "./PlayerList";
import Player from "./Player";

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [playersIn, setPlayersIn] = useState([]);
  const [playersOut, setPlayersOut] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  const listOfPlayersIn = [
    "Btissam Asbai",
    "René Wildförster",
    "Patrick Porschen",
    "Octavian Sum",
    "António e'Silva",
    "Martina Hahler",
    "Tom Ahrens",
    "Samuel Greenwald",
    "Christoph Steiner",
    "Pawel Mazurek",
    "Heinrich Guber",
    "Ita Connell",
    "Josy Prabhagaran",
  ];

  useEffect(() => {
    const list = [];
    for (let [index, player] of listOfPlayersIn.entries()) {
      const splitName = player.split(" ");
      list.push({
        id: index + 1,
        firstName: splitName[0],
        lastName: splitName[1],
        timesPassed: 0,
      });
    }
    setPlayersIn(list);
  }, []);

  const handlePickRandomPlayer = () => {
    const randomPlayer =
      playersIn[Math.floor(Math.random() * playersIn.length)];

    setCurrentPlayer(randomPlayer);

    const playersLeft = playersIn.filter(
      (player) => player.id !== randomPlayer.id
    );
    setPlayersIn(playersLeft);

    const playerOut = { ...randomPlayer };
    playerOut.timesPassed += 1;
    setPlayersOut([...playersOut, playerOut]);
  };

  const resetGame = () => {
    const compare = (a, b) => {
      if (a.id > b.id) return 1;
      if (b.id > a.id) return -1;
      return 0;
    }
    setPlayersIn(playersOut.sort(compare));
    setPlayersOut([]);
    setCurrentPlayer(null);
  };

  const handleButtonStyling = () => {
    let classes = "btn mt-3 btn-";
    playersIn.length ? (classes += "primary") : (classes += "danger");
    return classes;
  };

  if (!currentPlayer) {
    return (
      <>
        <div className="container-fluid">
          <nav className="navbar navbar-dark bg-dark mb-3">
            <h1 style={{ color: "white" }}>Random Student Picker</h1>
          </nav>
          <div className="row justify-content-center">
            <div className="col-6 text-center">
              <h2>Students to pass</h2>
              <PlayerList players={playersIn} />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col text-center">
              <button
                type="button"
                className={handleButtonStyling()}
                onClick={playersIn.length ? handlePickRandomPlayer : resetGame}
              >
                {playersIn.length ? "Next Student!" : "Time to reset!"}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container-fluid">
          <nav className="navbar navbar-dark bg-dark mb-3">
            <h1 style={{ color: "white" }}>Random Student Picker</h1>
          </nav>
          <div className="row justify-content-center">
            <div className="col text-center">
              <h2>Students to pass</h2>
              <PlayerList players={playersIn} />
            </div>
            <div className="col text-center">
              <h2>Current Student</h2>

              {currentPlayer && <Player player={currentPlayer} />}
            </div>
            <div className="col text-center">
              <h2>Students Out</h2>
              <PlayerList players={playersOut} />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col text-center">
              <button
                type="button"
                className={handleButtonStyling()}
                onClick={playersIn.length ? handlePickRandomPlayer : resetGame}
              >
                {playersIn.length ? "Next Student!" : "Time to reset!"}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default App;
