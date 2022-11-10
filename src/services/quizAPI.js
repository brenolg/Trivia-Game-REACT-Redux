const requestQuiz = async (token) => {
  const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const data = await response.json();

  return data;
};

export default requestQuiz;

// getQuestion = async () => {
//   const { history } = this.props;
//   const token = localStorage.getItem('token');
//   const apiQuestion = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
//   const response = await apiQuestion.json();
//   const quest = response;
//   if (quest.response_code !== 0) {
//     localStorage.remove('token');
//     history.push('/');
//   } else {
//     return this.setState({
//       alternativas: quest.results,
//     });
//   }
// };
