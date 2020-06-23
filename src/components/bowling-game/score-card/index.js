import React from "react";

const ScoreCard = () => {
  return (
    <div className="Container">
      <table id="table" className="Scorecard" cellPadding="1" cellSpacing="0">
        <tr>
          <th colSpan="6">Frame 1</th>
          <th colSpan="6">Frame 2</th>
          <th colSpan="6">Frame 3</th>
          <th colSpan="6">Frame 4</th>
          <th colSpan="6">Frame 5</th>
          <th colSpan="6">Frame 6</th>
          <th colSpan="6">Frame 7</th>
          <th colSpan="6">Frame 8</th>
          <th colSpan="6">Frame 9</th>
          <th colSpan="6">Frame 10</th>
          <th colSpan="6">Total Score</th>
        </tr>
        <tr>
          <td id="r1" colSpan="3"></td>
          <td id="r2" colSpan="3"></td>
          <td id="r3" colSpan="3"></td>
          <td id="r4" colSpan="3"></td>
          <td id="r5" colSpan="3"></td>
          <td id="r6" colSpan="3"></td>
          <td id="r7" colSpan="3"></td>
          <td id="r8" colSpan="3"></td>
          <td id="r9" colSpan="3"></td>
          <td id="r10" colSpan="3"></td>
          <td id="r11" colSpan="3"></td>
          <td id="r12" colSpan="3"></td>
          <td id="r13" colSpan="3"></td>
          <td id="r14" colSpan="3"></td>
          <td id="r15" colSpan="3"></td>
          <td id="r16" colSpan="3"></td>
          <td id="r17" colSpan="3"></td>
          <td id="r18" colSpan="3"></td>
          <td id="r19" colSpan="3"></td>
          <td id="r20" colSpan="3"></td>
          <td id="total-score" colSpan="6"></td>
        </tr>
        <tr>
          <td id="frame1Score" colSpan="6"></td>
          <td id="frame2Score" colSpan="6"></td>
          <td id="frame3Score" colSpan="6"></td>
          <td id="frame4Score" colSpan="6"></td>
          <td id="frame5Score" colSpan="6"></td>
          <td id="frame6Score" colSpan="6"></td>
          <td id="frame7Score" colSpan="6"></td>
          <td id="frame8Score" colSpan="6"></td>
          <td id="frame9Score" colSpan="6"></td>
          <td id="frame10Score" colSpan="6"></td>
          <td id="total-score" colSpan="6"></td>
        </tr>
      </table>
    </div>
  );
};

export default ScoreCard;
