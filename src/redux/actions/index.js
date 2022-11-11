export const SAVEQUIZ = 'SAVEQUIZ';
export const SAVENAME = 'SAVENAME';
export const SAVESCORE = 'SAVESCORE';
export const SAVEASSERTION = 'SAVEASSERTION';

export const saveQuiz = (payload) => ({
  type: SAVEQUIZ,
  payload,
});

export const saveScore = (payload) => ({
  type: SAVESCORE,
  payload,
});

export const saveName = (payload) => ({
  type: SAVENAME,
  payload,
});

export const saveAssertion = (payload) => ({
  type: SAVEASSERTION,
  payload,
});

// export function actionCreator(payload) {
//   return (dispatch) => {
//     dispatch(action1(payload));
//     dispatch(action2(payload));
//   };
// }
