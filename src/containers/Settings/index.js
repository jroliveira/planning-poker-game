import { connect } from 'react-redux';
import actions from '../../actions';
import Settings from './Settings';

export default connect((state) => ({
  configs: state.configs,
}), {
  updateConfigs: actions.configs.update,
})(Settings);
