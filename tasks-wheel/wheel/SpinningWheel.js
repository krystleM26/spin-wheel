import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';

const SpinningWheel = () => {
  const wheelRef = useRef(null);

  const onWheelPan = (event) => {};

  return (
    <GestureHandlerRootView>
      <View stlye={styles.container}>
        <PanGestureHandler onGestureEvent={onWheelPan}>
          <Svg width={300} height={300}>
            <Circle cx={150} cy={150} r={140} fill="yellow" />
            <SvgText
              x={150}
              y={150}
              fontSize={20}
              textAnchor="middle"
              fill="black"
              top={50}
            >
              Spin me!
            </SvgText>
          </Svg>
        </PanGestureHandler>
        <TouchableOpacity onPress={() => onSpinPress('Default Task')}>
          <View style={styles.spinButton}>
            <Text>Spin</Text>
          </View>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinButton: {
    marginTop: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SpinningWheel;

