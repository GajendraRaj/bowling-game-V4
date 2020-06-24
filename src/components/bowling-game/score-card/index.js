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
    const rolls = [];
    for (let i = 0; i < Constants.MAX_ROLLS; i++) {
      const downPins = props.rolls.length > i ? props.rolls[i] : "";
      rolls.push(
        <td key={i} id={"r" + i} colSpan="3">
          {downPins}
        </td>
      );
    }

    return rolls;
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
