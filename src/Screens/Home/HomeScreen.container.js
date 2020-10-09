import {connect} from 'react-redux';
import HomeScreen from './HomeScreen';
import {increaseCount, decreaseCount} from './Home.actions';

const mapStateToProps = (state) => ({
  count: state.homeStore.count,
});

const mapDispatchToProps = (dispatch) => ({
  increaseCount: () => dispatch(increaseCount()),
  decreaseCount: () => dispatch(decreaseCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
