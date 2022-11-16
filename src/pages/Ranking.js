import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getScore, getName } from '../services/localStorage';

class Ranking extends Component {
  constructor() {
    super();

    this.state = {
      scores: [],
      names: [],
    };
  }

  componentDidMount() {
    const scores = this.getScore();
    const names = this.getName();
    this.setState({ scores, names });
  }

  handleClick = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { scores, names } = this.state;

    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <button
          data-testid="btn-go-home"
          type="button"
          onClick={ this.handleClick }
        >
          Home
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired };

export default connect()(Ranking);
