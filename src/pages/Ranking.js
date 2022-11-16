import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPlayer } from '../services/localStorage';
import { resetScore } from '../redux/actions';

class Ranking extends Component {
  constructor() {
    super();

    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    const players = getPlayer();
    this.setState({ players });
    console.log(players);
  }

  handleClick = () => {
    const { history, dispatch } = this.props;
    history.push('/');
    dispatch(resetScore());
  };

  render() {
    const { players } = this.state;
    const one = -1;
    const sortPlayer = players.sort((a, b) => {
      if (a.score < b.score) {
        return 1;
      }
      if (a.score > b.score) {
        return one;
      }
      // a must be equal to b
      return 0;
    });

    return (

      <div>

        <h1 data-testid="ranking-title">Ranking</h1>
        <button
          data-testid="btn-go-home"
          type="button"
          onClick={ this.handleClick }
        >
          Play again
        </button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {sortPlayer.map((player, index) => (
              <tr key={ index }>

                <td
                  key={ index }
                  data-testid={ `player-name-${index}` }
                >
                  {player.name}

                </td>
                <td
                  data-testid={ `player-score-${index}` }
                >
                  {player.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Ranking.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired };

export default connect()(Ranking);
