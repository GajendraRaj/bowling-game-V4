import React from "react";
import { shallow, mount } from "enzyme";
import BowlingGame from "../../components/bowling-game";
import ScoreCard from "../../components/bowling-game/score-card";
import Pins from "../../components/bowling-game/pins";

describe("BowlingGame component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BowlingGame />);
  });

  it("should render ScoreCard component", () => {
    expect(wrapper.find(ScoreCard).length).toEqual(1);
  });

  it("should render Pin component", () => {
    expect(wrapper.find(Pins).length).toEqual(1);
  });

  it("should score gutter game", () => {
    const wrapper = mount(<BowlingGame />);
    const startButton = wrapper.find(Pins).find("button").at(0);
    startButton.simulate("click");

    expect(wrapper.find(ScoreCard).props().rolls[0]).toEqual(0);
  });

  it("should score gutter gameas as 0, if all frames scores are 0", () => {
    const wrapper = mount(<BowlingGame />);
    const startButton = wrapper.find(Pins).find("button").at(0);
    for (let i = 0; i < 20; i++) {
      startButton.simulate("click");
    }
    const totalScore = wrapper.find(ScoreCard).find("#total-score").text();
    expect(totalScore).toEqual("0");
  });

  it("should score game as 20, if all frames score are 1", () => {
    const wrapper = mount(<BowlingGame />);
    const startButton = wrapper.find(Pins).find("button").at(1);
    for (let i = 0; i < 20; i++) {
      startButton.simulate("click");
    }
    const totalScore = wrapper.find(ScoreCard).find("#total-score").text();
    expect(totalScore).toEqual("20");
  });

  it("should score game with spare", () => {
    const wrapper = mount(<BowlingGame />);
    const startButton = wrapper.find(Pins).find("button").at(5);
    for (let i = 0; i <= 20; i++) {
      startButton.simulate("click");
    }
    const totalScore = wrapper.find(ScoreCard).find("#total-score").text();
    expect(totalScore).toEqual("150");
  });
});
