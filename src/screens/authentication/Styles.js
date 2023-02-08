import {StyleSheet, Dimensions} from 'react-native';
import {vs, ms} from '@utils/sizeMatter';
import theme from '@theme';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  imgContainer: {
    height: '30%',
    width: '100%',
    backgroundColor: 'blue',
  },
  loginForm: {
    height: '70%',
    width: '80%',
    alignSelf: 'center',
  },
  heading: {
    fontSize: ms(30),
    paddingTop: vs(30),
  },
  labelText: {
    fontSize: ms(16),
    color: theme.colors.labelText,
    paddingTop: vs(20),
    paddingBottom: vs(5),
    fontWeight: '600',
  },
  button: {
    marginTop: vs(4),
    alignSelf: 'flex-end',
  },
  bottomText: {
    color: 'blue',
    textAlign: 'right',
  },
  extraMargin: (margin, value) => ({
    [margin]: value,
  }),
});

export default styles;
