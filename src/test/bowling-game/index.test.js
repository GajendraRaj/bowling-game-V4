import React from "react";
import { shallow } from "enzyme";
import BowlingGame from "../../components/bowling-game";
import ScoreCard from "../../components/bowling-game/score-card";

describe("BowlingGame component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BowlingGame />);
  });

  it("should render ScoreCard component", () => {
    expect(wrapper.find(ScoreCard).length).toEqual(1);
  });
});
