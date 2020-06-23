import React from "react";
import { shallow } from "enzyme";
import Pins from "../../../components/bowling-game/pins";

describe("Pins component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Pins />);
  });

  it("should render Buttons to capture pin down for gutter ball", () => {
    expect(wrapper.find("button").at(0).text()).toEqual("0");
    expect(wrapper.find("button").at(1).text()).toEqual("1");
  });
});
