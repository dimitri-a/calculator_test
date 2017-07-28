import React, {Component} from 'react';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.calcSum = this.calcSum.bind(this);
        this.state = {sum: 0};
    }

    calcSum() {
        console.log('this.refs.one=', this.refs.one);
        let s = Number(this.refs.one.value) + Number(this.refs.two.value);
        this.setState({sum: s});
    }

    render() {
        return (<div>
                <input type="text" placeholder="number 1" ref="one"/>
                <input type="text" placeholder="number 2" ref="two"/>

                <button ref="button" onClick={this.calcSum}>sum</button>
                sum: {this.state.sum}

            </div>
        );
    }
}
