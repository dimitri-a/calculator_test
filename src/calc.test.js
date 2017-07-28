import React from 'react';
import Calc from './calculator.js'
import renderer from 'react-test-renderer';

test('test that calculator', () => {
    const component = renderer.create(
        <Calc>hi there</Calc>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    console.log('tree.props.calcSum=',tree.props.calcSum);
    // manually trigger the callback
    tree.props.calcSum();

    expect(tree).toMatchSnapshot();
    

});