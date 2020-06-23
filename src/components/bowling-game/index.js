import React, { useState } from "react";
import ScoreCard from "./score-card";
import Pins from "./pins";

const BowlingGame = () => {
  const initialState = {
    rolls: [],
    score: 0,
  };
  const [gameState, setGameState] = useState(initialState);

  const updateScore = () => {
    const rolls = [...gameState.rolls, 0];
    setGameState((prevState) => {
      return {
        ...prevState,
        rolls,
      };
    });
  };

  return (
    <div className="Game">
      <Pins pinsDown={updateScore} />
      <ScoreCard rolls={gameState.rolls} score={gameState.score} />
    </div>
  );
};

export default BowlingGame;
