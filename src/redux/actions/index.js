export const SAVEUSER = 'SAVEUSER';
export const SAVEQUIZ = 'SAVEQUIZ';
export const SAVENAME = 'SAVENAME';

export const saveUser = (payload) => ({
  type: SAVEUSER,
  payload,
});

export const saveQuiz = (payload) => ({
  type: SAVEQUIZ,
  payload,
});

export const saveName = (payload) => ({
  type: SAVENAME,
  payload,
});

// export function actionCreator(payload) {
//   return (dispatch) => {
//     dispatch(action1(payload));
//     dispatch(action2(payload));
//   };
// }
