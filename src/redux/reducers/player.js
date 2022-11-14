import { SAVEASSERTION, SAVENAME, SAVESCORE, SAVETIMER } from '../actions';

const INITIAL_STATE = {
  name: '',
  score: 0,
  assertions: 0,
  gravatarEmail: '',
  timer: 30,
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
      score: state.score + payload,
    };
  case SAVEASSERTION:
    return {
      ...state,
      assertions: +payload,
    };
  case SAVETIMER:
    return {
      ...state,
      timer: payload,
    };
  default:
    return state;
  }
};

export default player;
