import { List } from 'immutable';

export default () => new Promise((resolve) => resolve(new List([
  {
    name: 'fibonacci',
    cards: new List(['0', '1', '2', '3', '5', '8', '13', '20', '40', '&infin;', '&quest;', '&#9749;']),
  },
])));
