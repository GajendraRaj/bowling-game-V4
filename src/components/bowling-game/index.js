import React, { useState } from "react";
import ScoreCard from "./score-card";
import Pins from "./pins";

const BowlingGame = () => {
  const initialState = {
    rolls: [],
    score: 0,
  };
  const [gameState, setGameState] = useState(initialState);
  const [frameScore, setFrameScore] = useState([]);

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
    let score = 0,
      i = 0,
      isGameOver = true,
      frameScore = [];
    for (let frame = 0; frame < 10; frame++) {
      if (i + 1 >= rolls.length) {
        isGameOver = false;
        break;
      }
      score += rolls[i] + rolls[i + 1];
      i += 2;
      frameScore.push(score);
    }
    setFrameScore(frameScore);
    if (isGameOver) {
      return score;
    }
  };

  return (
    <div className="Game">
      <Pins pinsDown={updateScore} />
      <ScoreCard
        rolls={gameState.rolls}
        score={gameState.score}
        frameScore={frameScore}
      />
    </div>
  );
};

export default BowlingGame;
