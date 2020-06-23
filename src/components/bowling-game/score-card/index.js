import React from "react";
import Constants from "../../../constants";

const ScoreCard = () => {
  const header = () =>
    Constants.SCORECARD_TITLES.map((title) => (
      <th key={title} colSpan="6">
        {title}
      </th>
    ));

  const frameRolls = () => {
    const rolls = [];
    for (let i = 0; i < 20; i++) {
      rolls.push(<td key={i} id={"r" + i} colSpan="3"></td>);
    }

    return rolls;
  };

  const footer = () => {
    const frameScore = [];
    for (let i = 0; i < 11; i++) {
      frameScore.push(<td key={"frame" + i} colSpan="6"></td>);
    }

    return frameScore;
  };

  return (
    <div className="Container">
      <table id="table" className="Scorecard" cellPadding="1" cellSpacing="0">
        <tr>{header()}</tr>
        <tr>
          {frameRolls()}
          <td id="total-score" colSpan="6"></td>
        </tr>
        <tr>{footer()}</tr>
      </table>
    </div>
  );
};

export default ScoreCard;
