import React from 'react';
import { connect } from 'react-redux';
import { fetchQuiz } from '../redux/actions';

class Quiz extends React.Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    const gameToken = localStorage.getItem('token');
    const response = () => dispatch(fetchQuiz(gameToken));
    console.log(response);
  }

  render() {
    return (
      <h1>Quiz</h1>
    );
  }
}

export default connect()(Quiz);
