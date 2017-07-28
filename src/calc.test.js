import React from 'react';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils'
import Calculator from "./calculator";

test('test that calculator', () => {
    const component = renderer.create(
        <Calculator></Calculator>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    console.log('component=',component.refs);

    // Simulate click on button -> trigger sumCalc()
    ReactTestUtils.Simulate.click(component.refs.button);

});