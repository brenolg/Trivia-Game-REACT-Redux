import requestQuiz from '../../services/quizAPI';

export const SAVEUSER = 'SAVEUSER';
export const SAVEQUIZ = 'SAVEQUIZ';

export const saveUser = (payload) => ({
  type: SAVEUSER,
  payload,
});

export const saveQuiz = (payload) => ({
  type: SAVEQUIZ,
  payload,
});

export const fetchQuiz = async (token) => async (dispatch) => {
  try {
    const quiz = await requestQuiz(token);
    console.log(quiz);
    dispatch(saveQuiz(quiz));
  } catch (error) {
    console.log(error);
  }
};
