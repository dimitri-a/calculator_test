import React from 'react';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils'
import Calculator from "./calculator";

test('test that calculator snapshot', () => {
    const component = renderer.create(
        <Calculator></Calculator>
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();

    let res = component.getInstance().calcSum(122,2);
    


});test('test that calculator again sum', () => {
    const component = renderer.create(
        <Calculator></Calculator>
    );
    let tree = component.toJSON();

    let res = component.getInstance().calcSum(122,2);

    console.log('res=',res);

    expect(res).toEqual(124);


});