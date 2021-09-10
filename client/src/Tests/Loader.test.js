import "@testing-library/jest-dom/extend-expect";
import React from "react";
import renderer from 'react-test-renderer';

import Loader from "../Components/Loader";

// Testing testing setup

test("Loader - should be rendered", () => {
    const component = renderer.create(
        <Loader />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
