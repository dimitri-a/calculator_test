import React, {Component} from 'react';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.calcSum = this.calcSum.bind(this);
        this.go = this.go.bind(this);
        this.state = {sum: 0};
    }

    go()
    {
        console.log('this.refs.one=', this.refs.one);
        this.calcSum(this.refs.one.value, this.refs.two.value)
    }

    calcSum(s1, s2) {
        console.log('this.refs.one=', this.refs.one);
        let s = Number(s1) + Number(s2);

        this.setState({sum: s});
    }

    render() {
        return (<div>
                <input type="text" placeholder="number 1" ref="one"/>
                <input type="text" placeholder="number 2" ref="two"/>

                <button ref="button" onClick={this.go}>sum</button>
                sum: {this.state.sum}

            </div>
        );
    }
}
