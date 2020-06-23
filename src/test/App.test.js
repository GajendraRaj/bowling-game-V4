import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";
import BowlingGame from "../components/bowling-game";

describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render title correctly", () => {
    expect(wrapper.find("h1").text()).toEqual("Bowling Game");
  });

  it("should render BowlingGame component", () => {
    expect(wrapper.find(BowlingGame).length).toEqual(1);
  });
});
