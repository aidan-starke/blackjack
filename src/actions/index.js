export const SET_PLAYERS = 'SET_PLAYERS'

export function setPlayers (players) {
  return {
    type: SET_PLAYERS,
    players,
  }
}
