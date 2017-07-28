
import React, { Component } from 'react';

import MyLink  from './MyLink.js';

import renderer from 'react-test-renderer';

test('test mylink', () => {

    const component = renderer.create(
        <MyLink page="http://www.facebook.com">Facebook</MyLink>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onMouseEnter()
    expect(tree).toMatchSnapshot();

});