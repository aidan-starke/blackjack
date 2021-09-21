import { SET_PLAYERS } from '../actions'

function players (state = [], action) {
  switch (action.type) {
    case SET_PLAYERS:
      state = action.players
      return state
    default:
      return state
  }
}

export default players
