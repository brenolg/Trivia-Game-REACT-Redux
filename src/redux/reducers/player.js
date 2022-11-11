import { SAVEASSERTION, SAVENAME, SAVESCORE } from '../actions';

const INITIAL_STATE = {
  name: '',
  score: 0,
  assertions: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SAVENAME:
    return {
      ...state,
      name: payload,
    };
  case SAVESCORE:
    return {
      ...state,
      score: payload,
    };
  case SAVEASSERTION:
    return {
      ...state,
      assertions: +payload,
    };
  default:
    return state;
  }
};

export default player;
