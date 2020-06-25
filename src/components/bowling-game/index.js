import React, { useState } from "react";
import ScoreCard from "./score-card";
import Pins from "./pins";
import Constants from "../../constants";

const BowlingGame = () => {
  const initialState = {
    rolls: [],
    score: 0,
    possibleRoll: Constants.ACTIVE_PINS,
    isSecondRoll: false,
  };
  const [gameState, setGameState] = useState(initialState);
  const [frameScore, setFrameScore] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const updateScore = (pinsDown) => {
    const rolls = [...gameState.rolls, pinsDown];
    let score = rolls.length > 0 ? getTotalScore(rolls) : gameState.score;
    const { possibleRoll, isSecondRoll } = getPossibleRolls(pinsDown);

    setGameState((prevState) => {
      return {
        ...prevState,
        rolls,
        score,
        possibleRoll,
        isSecondRoll,
      };
    });
  };

  const getTotalScore = (rolls) => {
    let score = 0,
      i = 0,
      isGameOver = true,
      frameScore = [];
    for (let frame = 0; frame < Constants.MAX_FRAME_COUNT; frame++) {
      if (rolls.length <= i + 1) {
        isGameOver = false;
        break;
      }

      if (rolls[i] === 10) {
        if (rolls.length <= i + 2) {
          isGameOver = false;
          break;
        }
        score += 10 + rolls[i + 1] + rolls[i + 2];
        i++;
      } else if (isSpare(rolls[i], rolls[i + 1])) {
        if (rolls.length <= i + 2) {
          isGameOver = false;
          break;
        }
        score += 10 + rolls[i + 2];
        i += 2;
      } else {
        score += rolls[i] + rolls[i + 1];
        i += 2;
      }
      frameScore.push(score);
    }
    setFrameScore(frameScore);
    if (isGameOver) {
      setGameOver(true);
      return score;
    }
  };

  const getPossibleRolls = (pinsDown) => {
    if (gameState.isSecondRoll || pinsDown === Constants.ACTIVE_PINS) {
      return { possibleRoll: Constants.ACTIVE_PINS, isSecondRoll: false };
    } else {
      return {
        possibleRoll: Constants.ACTIVE_PINS - pinsDown,
        isSecondRoll: true,
      };
    }
  };

  const isSpare = (roll1, roll2) => {
    return roll1 + roll2 === 10;
  };

  return (
    <div className="Game">
      <Pins
        pinsDown={updateScore}
        possibleRoll={gameState.possibleRoll}
        gameOver={gameOver}
      />
      <ScoreCard
        rolls={gameState.rolls}
        score={gameState.score}
        frameScore={frameScore}
      />
    </div>
  );
};

export default BowlingGame;
