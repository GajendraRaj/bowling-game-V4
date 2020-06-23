import React from "react";

const Pins = (props) => {
  return (
    <div>
      <h4>Pins down on Player roll</h4>
      <div className="Container">
        <button id="pin0" onClick={() => props.pinsDown()}>
          0
        </button>
      </div>
    </div>
  );
};

export default Pins;
