import React from "react";
import renderer from "react-test-renderer";

import Container from "./Container";

describe("Container", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Container />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
