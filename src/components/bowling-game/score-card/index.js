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
      getRoll1(props.rolls, i, frame, frameRolls);
      getRoll2(props.rolls, i, frame, frameRolls);
      if (frame === 9) {
        getRoll3(props.rolls, i, frameRolls);
      }

      if (isStrike(i)) {
        i++;
      } else {
        i += 2;
      }
    }

    return frameRolls;
  };

  const getRoll1 = (rolls, i, frame, frameRolls) => {
    let roll1,
      colSpanValue = "3";
    if (frame === 9) {
      roll1 =
        rolls.length > i ? (isStrike(i) ? Constants.STRIKE : rolls[i]) : "";
      colSpanValue = "2";
    } else {
      roll1 = rolls.length > i ? (isStrike(i) ? "" : rolls[i]) : "";
    }

    frameRolls.push(
      <td key={2 * frame} id={"r" + 2 * frame} colSpan={colSpanValue}>
        {roll1}
      </td>
    );
  };

  const getRoll2 = (rolls, i, frame, frameRolls) => {
    let roll2,
      colSpanValue = "3";
    if (frame === 9) {
      roll2 =
        rolls.length > i + 1
          ? isStrike(i + 1)
            ? Constants.STRIKE
            : !isStrike(i) && isSpare(i)
            ? Constants.SPARE
            : rolls[i + 1]
          : "";
      colSpanValue = "2";
    } else {
      roll2 = isStrike(i)
        ? Constants.STRIKE
        : rolls.length > i + 1
        ? isSpare(i)
          ? Constants.SPARE
          : rolls[i + 1]
        : "";
    }

    frameRolls.push(
      <td key={2 * frame + 1} id={"r" + (2 * frame + 1)} colSpan={colSpanValue}>
        {roll2}
      </td>
    );
  };

  const getRoll3 = (rolls, i, frameRolls) => {
    const colSpanValue = "2";
    const roll3 =
      rolls.length > i + 2
        ? isStrike(i + 2)
          ? Constants.STRIKE
          : props.rolls[i + 2]
        : "";

    frameRolls.push(
      <td key={20} id={"r" + 20} colSpan={colSpanValue}>
        {roll3}
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
