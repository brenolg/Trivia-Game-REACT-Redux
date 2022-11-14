import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends React.Component {
  render() {
    return (
      <>
        <h1>Feedback</h1>
        <Header />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  player: state.player.player,
  score: state.player.score,
});

export default connect(mapStateToProps)(Feedback);
