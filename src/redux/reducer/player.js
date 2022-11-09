import { SAVEUSER } from '../actions';

const INITIAL_STATE = {
  player: xxx,

};

const player = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SAVEUSER:

    return {
      ...state,
      player: payload,
    };

  default:
    return state;
  }
};

export default player;
