import { SAVENAME, SAVEUSER } from '../actions';

const INITIAL_STATE = {
  name: '',
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SAVEUSER:

    return {
      ...state,
      player: payload,
    };
  case SAVENAME:

    return {
      name: payload,
    };

  default:
    return state;
  }
};

export default player;
