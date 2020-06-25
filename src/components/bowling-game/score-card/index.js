import React from "react";
import Constants from "../../../constants";

const ScoreCard = (props) => {
  const header = () =>
    Constants.SCORECARD_TITLES.map((title) => (
      <th key={title} colSpan="6">
        {title}
      </th>
    ));

  const frameRolls = () => {
    const frameRolls = [];
    let i = 0;
    for (let frame = 0; frame < 10; frame++) {
      getFrameRolls(frame, frameRolls, i);
      if (isStrike(i)) {
        i++;
      } else {
        i += 2;
      }
    }

    return frameRolls;
  };

  const getFrameRolls = (frame, frameRolls, i) => {
    const rolls = props.rolls;
    const roll1 = rolls.length > i ? (isStrike(i) ? "" : rolls[i]) : "";
    const roll2 = isStrike(i)
      ? Constants.STRIKE
      : rolls.length > i + 1
      ? isSpare(i)
        ? Constants.SPARE
        : rolls[i + 1]
      : "";

    frameRolls.push(
      <td key={2 * frame} id={"r" + 2 * frame} colSpan="3">
        {roll1}
      </td>
    );
    frameRolls.push(
      <td key={2 * frame + 1} id={"r" + (2 * frame + 1)} colSpan="3">
        {roll2}
      </td>
    );
  };

  const isSpare = (i) => {
    return props.rolls[i] + props.rolls[i + 1] === 10;
  };

  const isStrike = (i) => {
    return props.rolls[i] === 10;
  };

  const footer = () => {
    const frameScore = [];
    for (let i = 0; i < Constants.MAX_FRAMES; i++) {
      const score = props.frameScore.length > i ? props.frameScore[i] : "";
      frameScore.push(
        <td id={"frame" + i} key={"frame" + i} colSpan="6">
          {score}
        </td>
      );
    }

    return frameScore;
  };

  return (
    <div className="Container">
      <table id="table" className="Scorecard" cellPadding="1" cellSpacing="0">
        <tr>{header()}</tr>
        <tr>
          {frameRolls()}
          <td id="total-score" colSpan="6">
            {props.score}
          </td>
        </tr>
        <tr>{footer()}</tr>
      </table>
    </div>
  );
};

export default ScoreCard;
