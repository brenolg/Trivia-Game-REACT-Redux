import React from 'react';

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: 30,
    };
  }

  componentDidMount() {
    this.handleTimer();
  }

  handleTimer = () => {
    const timerInterval = setInterval(() => {
      this.setState((prev) => ({
        timer: prev.timer - 1,
      }));
    }, '1000');

    setTimeout(() => {
      clearInterval(timerInterval);
      this.setState({
        timer: 0,
      });
    }, '30000');
  };

  render() {
    const { timer } = this.state;
    return (
      <p>{timer}</p>
    );
  }
}

export default Timer;
