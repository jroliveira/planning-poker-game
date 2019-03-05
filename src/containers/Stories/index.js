import { connect } from 'react-redux';
import Stories from './Stories';

export default connect((state) => ({
  api: state.configs.api.config,
}), {})(Stories);
