import React, { FC } from 'react';
import { View, Animated, StyleSheet, ImageSourcePropType } from 'react-native';

interface IProps {
  image: ImageSourcePropType;
  title: string;
}

const CollapsibleHeaderScrollView: FC<IProps> = ({
  title,
  image,
  children,
}) => {
  const scrollY = new Animated.Value(0);

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true },
  );

  const transform = [
    {
      translateY: scrollY.interpolate({
        inputRange: [0, 250],
        outputRange: [0, 125],
      }),
    },
  ];

  const imageAnimatedStyle = {
    transform,
  };

  const textAnimatedStyle = {
    transform,
    opacity: scrollY.interpolate({
      inputRange: [0, 120, 150],
      outputRange: [1, 0.9, 0],
    }),
  };

  const renderText = () => (
    <View style={styles.textWrapper}>
      <Animated.Text style={[styles.text, textAnimatedStyle]}>
        {title}
      </Animated.Text>
    </View>
  );

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Animated.Image
          source={image}
          style={[styles.image, imageAnimatedStyle]}
          resizeMode="cover"
        />
        <View style={styles.overlay} />
        {renderText()}
      </View>
    );
  };

  return (
    <Animated.ScrollView
      onScroll={onScroll}
      scrollEventThrottle={20}
      bounces={false}
    >
      {renderHeader()}
      {children}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  textWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    paddingHorizontal: 30,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    height: 250,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
});

export default CollapsibleHeaderScrollView;
