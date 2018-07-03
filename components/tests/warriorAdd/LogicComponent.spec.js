import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import Warrior, {
  handleSubmit
} from "../../../components/warriorAdd/LogicComponent";

describe("Addition", () => {
  it("knows that 2 and 2 make 4", () => {
    expect(2 + 2).toBe(4);
  });
});

describe("Warrior", () => {
  afterEach(() => jest.resetAllMocks());
  beforeEach(() => jest.resetAllMocks());

  it("handleSubmit logic test", () => {
    const testInput = {
      username: "Marcel Davis",
      weapon: "Elder Wand",
      rating: 3,
      tipHidden: true
    };
    const store = {
      dispatch: jest.fn(() => true)
    };
    const props = {
      store,
      testInput,
      updateTipHidden: jest.fn(() => true)
    };
  });
});
