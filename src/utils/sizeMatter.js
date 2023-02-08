import {Dimensions, useWindowDimensions} from 'react-native';
import {SIZE_MATTERS_BASE_HEIGHT, SIZE_MATTERS_BASE_WIDTH} from '@env';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = SIZE_MATTERS_BASE_WIDTH;
const guidelineBaseHeight = SIZE_MATTERS_BASE_HEIGHT;

Dimensions.addEventListener('change', val => {
  window.customHeight = val.window.height;
});

const s = size => (width / guidelineBaseWidth) * size;
const vs = size => (height / guidelineBaseHeight) * size;
const ms = (size, factor = 0.5) => size + (s(size) - size) * factor;

export {s, vs, ms};
