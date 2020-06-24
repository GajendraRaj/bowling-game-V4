import React from "react";

const Pins = (props) => {
  return (
    <div>
      <h4>Pins down on Player roll</h4>
      <div className="Container">
        <button id="pin0" onClick={() => props.pinsDown(0)}>
          0
        </button>
        <button id="pin1" onClick={() => props.pinsDown(1)}>
          1
        </button>
        <button id="pin2" onClick={() => props.pinsDown(2)}>
          2
        </button>
        <button id="pin3" onClick={() => props.pinsDown(3)}>
          3
        </button>
        <button id="pin4" onClick={() => props.pinsDown(4)}>
          4
        </button>
        <button id="pin5" onClick={() => props.pinsDown(5)}>
          5
        </button>
        <button id="pin6" onClick={() => props.pinsDown(6)}>
          6
        </button>
        <button id="pin7" onClick={() => props.pinsDown(7)}>
          7
        </button>
        <button id="pin8" onClick={() => props.pinsDown(8)}>
          8
        </button>
        <button id="pin9" onClick={() => props.pinsDown(9)}>
          9
        </button>
        <button id="pin10" onClick={() => props.pinsDown(10)}>
          10
        </button>
      </div>
    </div>
  );
};

export default Pins;
