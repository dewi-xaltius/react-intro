import React, { Component } from 'react';
import styles from './Button.module.css';

class Counter extends Component {
  // Initialize state in the constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // Method to increment the count
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  // Method to decrement the count
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button 
            className={styles.button}
            onClick={this.increment}>Increment
        </button>
        <button 
            className={styles.button}
            onClick={this.decrement}>Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
