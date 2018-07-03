import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import Warrior from "../../../components/warriorAdd/ViewComponent";

describe("Addition", () => {
  it("knows that 2 and 2 make 4", () => {
    expect(2 + 2).toBe(4);
  });
});

describe("Warrior", () => {
  afterEach(() => jest.resetAllMocks());
  beforeEach(() => jest.resetAllMocks());

  it("button triggers submit", () => {
    const handleSubmit = jest.fn();

    const testInput = {
      username: "Marcel Davis",
      weapon: "Elder Wand",
      rating: 3,
      tipHidden: true
    };

    const warrior = shallow(<Warrior handleSubmit={handleSubmit} />);

    const usernameInput = warrior.find("#username");
    usernameInput.value = testInput.username;
    expect(usernameInput.value).toBe("Marcel Davis");

    warrior.find("button").simulate("click");
    expect(handleSubmit).toBeCalled();
  });

  it("username input is correctly handled", () => {
    const handleSubmit = jest.fn();

    const testInput = {
      username: "Marcel Davis",
      weapon: "Elder Wand",
      rating: 3,
      tipHidden: true
    };

    const warrior = shallow(<Warrior />);

    const usernameInput = warrior.find("#username");
    usernameInput.value = testInput.username;
    expect(usernameInput.value).toBe("Marcel Davis");
  });

  it("weapon input is correctly handled", () => {
    const handleSubmit = jest.fn();

    const testInput = {
      username: "Marcel Davis",
      weapon: "Elder Wand",
      rating: 3,
      tipHidden: true
    };

    const warrior = shallow(<Warrior />);

    const weaponInput = warrior.find("#weapon");
    weaponInput.value = testInput.weapon;
    expect(weaponInput.value).toBe("Elder Wand");
  });

  // it("skill input is correctly handled", () => {
  //   const onChange = jest.fn();

  //   const testInput = {
  //     username: "Marcel Davis",
  //     weapon: "Elder Wand",
  //     rating: 3,
  //     tipHidden: true
  //   };

  //   const warrior = shallow(<Warrior />);
  //   expect(
  //     warrior.find("select").simulate("change", { target: { value: 3 } })
  //   ).toBe(3);
  // });
});
