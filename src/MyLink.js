import React, {Component} from 'react';

const CLASS = {
    NORMAL: 'normal'
};

export default class MyLink extends Component {

    constructor(props) {
        super(props);

        this.state = {class: CLASS.NORMAL}

        this.onMouseEnter = this.onMouseEnter.bind(this);
    }

    onMouseEnter() {
        console.log('on hover');
        this.setState({class: CLASS.HOVER});

    }

    render() {

        return (<a href=""
                className = {this.state.class}
                onMouseEnter = {this.onMouseEnter}>{this.props.children}
            </a>
        );
    }

}
