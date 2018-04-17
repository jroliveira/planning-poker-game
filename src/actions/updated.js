import { constants } from '../shared';

export default data => {
  const players = [];

  for (var id in data.users) {
    if (typeof data.users[id] !== 'function') {
      players.push(data.users[id]);
    }
  }

  return {
    type: constants.actions.players,
    players: players,
  };
}
