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

  it("should score game with a strike", () => {
    const wrapper = mount(<BowlingGame />);
    const startButton = wrapper.find(Pins).find("button").at(10);
    for (let i = 0; i <= 20; i++) {
      startButton.simulate("click");
    }
    const totalScore = wrapper.find(ScoreCard).find("#total-score").text();
    expect(totalScore).toEqual("300");
  });

  it("should hide the pins if sum of the last roll and its value is greater than 10", () => {
    const wrapper = mount(<BowlingGame />);
    const pin = wrapper.find(Pins).find("button").at(5);
    pin.simulate("click");

    expect(wrapper.find(Pins).find("button").at(0)).toHaveLength(1);
    expect(wrapper.find(Pins).find("button").at(1)).toHaveLength(1);
    expect(wrapper.find(Pins).find("button").at(2)).toHaveLength(1);
    expect(wrapper.find(Pins).find("button").at(3)).toHaveLength(1);
    expect(wrapper.find(Pins).find("button").at(4)).toHaveLength(1);
    expect(wrapper.find(Pins).find("button").at(5)).toHaveLength(1);
    expect(wrapper.find(Pins).find("button").at(6)).toHaveLength(0);
    expect(wrapper.find(Pins).find("button").at(7)).toHaveLength(0);
    expect(wrapper.find(Pins).find("button").at(8)).toHaveLength(0);
    expect(wrapper.find(Pins).find("button").at(9)).toHaveLength(0);
    expect(wrapper.find(Pins).find("button").at(10)).toHaveLength(0);
  });
});
