import { List } from 'immutable';

export default (decks, name) => decks
  .filter((deck) => deck.name === name)
  .map((deck) => deck.cards)
  .reduce((prev, curr) => prev.concat(curr)) || new List();
