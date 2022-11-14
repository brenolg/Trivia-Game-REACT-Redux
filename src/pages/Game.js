import React from 'react';
import PropTypes from 'prop-types';
import Quiz from '../components/Quiz';
import Header from '../components/Header';
import Timer from '../components/Timer';

class Game extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <Header />
        <Timer />
        <Quiz
          history={ history }
        />

      </>
    );
  }
}

Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Game;
