import React from "react";

const Pins = (props) => {
  const pins = () => {
    let pins = [];
    for (let i = 0; i <= props.possibleRoll; i++) {
      pins.push(
        <button id={"pin" + i} key={i} onClick={() => props.pinsDown(i)}>
          {i}
        </button>
      );
    }

    return pins;
  };

  return (
    <div>
      <h4>Pins down on Player roll</h4>
      <div className="Container">{pins()}</div>
    </div>
  );
};

export default Pins;
