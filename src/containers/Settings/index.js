import { connect } from 'react-redux';
import Settings from './Settings';

export default connect((state) => ({
  decks: state.decks,
  message: state.message,
}), {})(Settings);
