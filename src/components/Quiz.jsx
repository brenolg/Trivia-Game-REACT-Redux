import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import requestQuiz from '../services/quizAPI';
import { saveQuiz } from '../redux/actions';

class Quiz extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     id: 0,
  //   };
  // }

  async componentDidMount() {
    const { dispatch } = this.props;
    const gameToken = localStorage.getItem('token');
    const response = await requestQuiz(gameToken);
    const { results } = response;
    console.log(results);
    dispatch(saveQuiz(results));
  }

  render() {
    // const { questions } = this.props;
    // const { id } = this.state;
    // const array = Object.values(questions);
    // console.log(typeof array);

    // console.log(array);
    return (
      <>
        <h1>Quiz</h1>
        {/* {
          questions.length > 0 ? <h3>{ questions }</h3>
            : <p>Veio nada</p>
        } */}
        <h2 data-testid="question-category">0</h2>

        <h3 data-testid="question-text">dsd</h3>
        <button type="button">Proximo</button>
      </>
    );
  }
}

Quiz.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // questions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  questions: state.quiz.questions,
});

export default connect(mapStateToProps)(Quiz);
