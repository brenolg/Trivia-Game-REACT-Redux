import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveTimer } from '../redux/actions';

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: 30,
    };
  }

  // resolver o timer
  componentDidMount() {
    this.handleTimer();
  }

  handleTimer = () => {
    const { dispatch } = this.props;
    const timerInterval = setInterval(() => {
      this.setState((prev) => ({
        timer: prev.timer - 1,
      }));
      const { timer } = this.state;
      dispatch(saveTimer(timer));
    }, '1000');

    setTimeout(() => {
      clearInterval(timerInterval);
    }, '31000');
  };

  render() {
    const { timer } = this.props;
    return (
      <p>{timer}</p>
    );
  }
}

Timer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  timer: state.player.timer,
});

export default connect(mapStateToProps)(Timer);
