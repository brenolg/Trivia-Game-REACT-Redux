import { SAVEQUIZ } from '../actions';

const INITIAL_STATE = {
  questions: [],
};

const quiz = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SAVEQUIZ:

    return {
      ...state,
      questions: payload,
    };

  default:
    return state;
  }
};

export default quiz;
