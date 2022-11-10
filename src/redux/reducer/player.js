import { SAVEUSER } from '../actions';

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
      player: payload.name,
      gravatarEmail: payload.email,
      photoUrl: payload.photo,
    };

  default:
    return state;
  }
};

export default player;
