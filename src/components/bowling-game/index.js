import React, { useState } from "react";
import ScoreCard from "./score-card";
import Pins from "./pins";

const BowlingGame = () => {
  const initialState = {
    rolls: [],
    score: 0,
  };
  const [gameState, setGameState] = useState(initialState);

  const updateScore = (pinsDown) => {
    const rolls = [...gameState.rolls, pinsDown];
    let score = rolls.length > 0 ? getTotalScore(rolls) : gameState.score;

    setGameState((prevState) => {
      return {
        ...prevState,
        rolls,
        score,
      };
    });
  };

  const getTotalScore = (rolls) => {
    let score = 0;
    for (let i = 0; i < rolls.length; i++) {
      score += rolls[i];
    }

    return score;
  };

  return (
    <div className="Game">
      <Pins pinsDown={updateScore} />
      <ScoreCard rolls={gameState.rolls} score={gameState.score} />
    </div>
  );
};

export default BowlingGame;
