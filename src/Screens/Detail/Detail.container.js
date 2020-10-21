import {connect} from 'react-redux';
import DetailsScreen from './Detail.screen';
import {increaseCount, decreaseCount} from '../Home/Home.actions';

const mapStateToProps = (state) => ({
  count: state.homeStore.count,
});

const mapDispatchToProps = (dispatch) => ({
  increaseCount: () => dispatch(increaseCount()),
  decreaseCount: () => dispatch(decreaseCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);
