import { api } from '../../shared';
import { decks } from '../../actions';

export default (dispatch) => () => api.decks.getAll().then((data) => {
  dispatch(decks.update(data));
});
