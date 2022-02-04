import React, { Component } from 'react';

class CounterClassic extends Component {
    state = {
        countA: 0,
        countB: 0,
        countC: 0,
    };

    incrementA = () => {
        this.setState({
            ...this.state,
            countA: this.state.countA + 1
        });
    }

    incrementB = () => {
        this.setState({
            ...this.state,
            countB: this.state.countB + 1
        });
    }

    incrementC = () => {
        this.setState({
            ...this.state,
            countC: this.state.countC + 1
        });
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <h3>Classic Component</h3>

                <p>Counter: {this.state.countA}</p>
                <p>Counter: {this.state.countB}</p>
                <p>Counter: {this.state.countC}</p>

                <button onClick={this.incrementA}>
                    Increment A
                </button>

                <button onClick={this.incrementB}>
                    Increment B
                </button>

                <button onClick={this.incrementC}>
                    Increment C
                </button>
            </div>
        );
    }
}

export default CounterClassic;