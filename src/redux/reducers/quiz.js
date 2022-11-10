import { SAVEQUIZ } from '../actions';

const INITIAL_STATE = {

};

const quiz = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SAVEQUIZ:

    return {
      ...state,
      quiz: payload,
    };

  default:
    return state;
  }
};

export default quiz;
