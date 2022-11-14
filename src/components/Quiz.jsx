import React from 'react';
import PropTypes from 'prop-types';
import './Quiz.css';
import requestQuiz from '../services/quizAPI';

class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      questions: [],
      buttonDisable: false,
      click: false,
    };
  }

  async componentDidMount() {
    const { history } = this.props;
    const gameToken = localStorage.getItem('token');
    const response = await requestQuiz(gameToken);
    if (response.response_code === 0) {
      this.setState({
        questions: response.results,
      });
    } else {
      localStorage.removeItem('token');
      history.push('/');
    } this.handleTimeBtn();
  }

  handleTimeBtn = () => {
    setTimeout(() => {
      this.setState({
        buttonDisable: true,
      });
    }, '30000');
  };

  handleClickNext() {
    const { history } = this.props;
    history.push('/feedback');
    // HandleClick provisorio
  }

  // fonte: https://www.horadecodar.com.br/2021/05/10/como-embaralhar-um-array-em-javascript-shuffle/
  shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  handleClick = () => {
    this.setState({ click: true });
  };

  render() {
    const { questions, id, buttonDisable, click } = this.state;
    if (questions.length === 0) return <p>Loading...</p>;

    const getAlternatives = [questions[id].correct_answer,
      ...questions[id].incorrect_answers];

    const randomAlternatives = this.shuffleArray(getAlternatives);
    return (
      <>

        <h1>Quiz</h1>

        <h2 data-testid="question-category">
          { questions[id].category }
        </h2>
        <h3 data-testid="question-text">
          { questions[id].question }
        </h3>
        <div data-testid="answer-options">
          {
            randomAlternatives.map((alt, i) => {
              if (alt === questions[id].correct_answer) {
                return (
                  <button
                    type="button"
                    data-testid="correct-answer"
                    disabled={ buttonDisable }
                    className={ click ? 'correctAnswer' : null }
                    onClick={ this.handleClick }
                  >
                    { alt }
                  </button>
                );
              }
              return (
                <button
                  key={ alt }
                  type="button"
                  data-testid={ `wrong-answer-${i}` }
                  disabled={ buttonDisable }
                  className={ click ? 'incorrectAnswer' : null }
                  onClick={ this.handleClick }
                >
                  { alt }
                </button>
              );
            })
          }
        </div>
        <h3 data-testid="question-text">dsd</h3>
        <button
          type="button"
          onClick={ this.handleClickNext }

        >
          Proximo

        </button>

      </>

    );
  }
}

Quiz.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Quiz;
