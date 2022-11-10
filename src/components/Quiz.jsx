import React from 'react';
import { connect } from 'react-redux';
import requestQuiz from '../services/quizAPI';
import { saveQuiz } from '../redux/actions';

class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
    };
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    const gameToken = localStorage.getItem('token');
    const response = await requestQuiz(gameToken);
    const { results } = response;
    dispatch(saveQuiz(results));
  }

  render() {
    const { quiz } = this.props;
    const { id } = this.state;

    const array = Object.values(quiz);

    console.log(array);

    return (
      <>
        <h1>Quiz</h1>

        <h2 data-testid="question-category">0</h2>

        <h3 data-testid="question-text">dsd</h3>
        <button type="button">Proximo</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  quiz: state.quiz,

});

export default connect(mapStateToProps)(Quiz);
