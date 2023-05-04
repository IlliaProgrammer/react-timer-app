import React, { Component } from 'react';
import "./App.css"

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: props.timeInSeconds || 60,
      isRunning: false,
    };

    this.intervalId = null;
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }
  componentDidMount() {
    if (this.props.autostart === true) {
      this.startTimer();
    }
  }

  startTimer() {
    const { step } = this.props;
  
    if (!this.state.isRunning) {
      this.intervalId = setInterval(() => {
        if (this.state.time <= 0) {
          clearInterval(this.intervalId);
          this.setState({ isRunning: false });
        } else {
          this.setState({ time: this.state.time - 1 });
        }
      }, step);
  
      this.setState({ isRunning: true });
    }
  }

  pauseTimer() {
    clearInterval(this.intervalId);
    this.setState({ isRunning: false });
  }

  resetTimer() {
    clearInterval(this.intervalId);
    this.setState({ time: this.props.timeInSeconds || 60, isRunning: false });
  }

  handleTimeChange(event) {
    const newTime = parseInt(event.target.value, 10);
    this.setState({ time: newTime });
  }

  render() {
    const { time, isRunning } = this.state;


    return (
      <div>
        <h2>Timer: {time}</h2>
        <label htmlFor="time-input">Set time (seconds): </label>
        <input type="number" id="time-input" value={time} onChange={this.handleTimeChange} />
        {isRunning ? (
          <button onClick={this.pauseTimer}>Pause</button>
        ) : (
          <button onClick={this.startTimer}>Start</button>
        )}
        <button onClick={this.resetTimer}>Reset</button>
      
      </div>
    );
  }
}
export default Timer;