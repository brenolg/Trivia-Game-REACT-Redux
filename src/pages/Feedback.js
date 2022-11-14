import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends React.Component {
  handleFeedbackMessage = () => {
    const three = 3;
    const { assertions } = this.props;
    if (assertions < three) {
      return 'Could be better...';
    }
    if (assertions >= three) {
      return 'Well Done!';
    }
  };

  render() {
    return (
      <>
        <h1>Feedback</h1>
        <h2 data-testid="feedback-text">{ this.handleFeedbackMessage }</h2>
        <Header />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  player: state.player.name,
  score: state.player.score,
};

export default connect(mapStateToProps)(Feedback);
