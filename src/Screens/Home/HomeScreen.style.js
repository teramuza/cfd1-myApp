import {StyleSheet} from 'react-native';
import {rh, rw, rbr} from '../../Utils/Layout.utils';
import {COLORS} from '../../Themes';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GREY_BACKGROUND,
  },
  header: {
    height: rh(200),
    width: '100%',
  },
  banner: {
    height: rh(200),
    width: '100%',
    resizeMode: 'stretch',
  },
  content: {
    flex: 1,
    paddingVertical: rh(30),
  },
  products: {
    height: rh(300),
  },
  card: {
    height: rh(150),
    width: rw(170),
    backgroundColor: COLORS.WHITE,
    borderRadius: rbr(6),
    elevation: 5,
    alignItems: 'center',
    marginHorizontal: rw(10),
  },
  imageCard: {
    height: rh(80),
    width: '100%',
    resizeMode: 'stretch',
  },
  textCard: {
    flex: 1,
    marginVertical: rh(20),
  },
});

export {Styles};
