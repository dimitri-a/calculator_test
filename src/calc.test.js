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
   // console.log('component=',component.refs);

    component.getInstance().calcSum(1,3);
    expect(tree).toMatchSnapshot();

});