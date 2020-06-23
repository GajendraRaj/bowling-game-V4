import React from "react";
import { shallow } from "enzyme";
import ScoreCard from "../../../components/bowling-game/score-card";

describe("Scorecard component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ScoreCard rolls={[]} score={""} />);
  });

  describe("Render ScoreCard Table", () => {
    it("should render table with three rows", () => {
      expect(wrapper.find("tr").length).toEqual(3);
    });

    it("should render table header with 11 columns with heading", () => {
      expect(wrapper.find("tr").at(0).find("th").length).toEqual(11);
      expect(wrapper.find("th").at(0).text()).toEqual("Frame 1");
      expect(wrapper.find("th").at(1).text()).toEqual("Frame 2");
      expect(wrapper.find("th").at(2).text()).toEqual("Frame 3");
      expect(wrapper.find("th").at(3).text()).toEqual("Frame 4");
      expect(wrapper.find("th").at(4).text()).toEqual("Frame 5");
      expect(wrapper.find("th").at(5).text()).toEqual("Frame 6");
      expect(wrapper.find("th").at(6).text()).toEqual("Frame 7");
      expect(wrapper.find("th").at(7).text()).toEqual("Frame 8");
      expect(wrapper.find("th").at(8).text()).toEqual("Frame 9");
      expect(wrapper.find("th").at(9).text()).toEqual("Frame 10");
      expect(wrapper.find("th").at(10).text()).toEqual("Total Score");
    });

    it("should render table content with 21 cells (20 for rolls and 1 for total score) empty", () => {
      expect(wrapper.find("tr").at(1).find("td").length).toEqual(21);
      wrapper
        .find("tr")
        .at(1)
        .find("td")
        .forEach((cell) => {
          expect(cell.text()).toEqual("");
        });
    });

    it("should render table footer with 11 cells empty", () => {
      expect(wrapper.find("tr").at(2).find("td").length).toEqual(11);
      wrapper
        .find("tr")
        .at(2)
        .find("td")
        .forEach((cell) => {
          expect(cell.text()).toEqual("");
        });
    });
  });
});
