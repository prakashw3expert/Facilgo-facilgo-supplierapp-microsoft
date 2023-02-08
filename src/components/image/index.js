import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import GoBack from '@components/goBack';
import {s, vs} from '@utils/sizeMatter';

const ImageComponent = ({path, type, imgStyle, resizeMode, canGoBack}) => {
  let newPath = type === 'offline' ? path : {uri: path};
  return (
    <>
      <Image source={newPath} style={styles.imgStyle} resizeMode={resizeMode} />
      {canGoBack && (
        <View style={styles.goBackContainer}>
          <GoBack />
        </View>
      )}
    </>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  imgStyle: {
    width: '100%',
    height: '100%',
  },
  goBackContainer: {
    position: 'absolute',
    top: vs(20),
    left: s(10),
  },
});
