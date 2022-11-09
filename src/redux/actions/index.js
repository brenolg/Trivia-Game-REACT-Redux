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
