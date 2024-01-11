import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';

const SpinningWheel = () => {
  const wheelRef = useRef(null);

  const onWheelPan = (event) => {
    const { translationX, translationY, state } = event.nativeEvent;
  };

  return (
    <GestureHandlerRootView>
      <View>
        <PanGestureHandler onGestureEvent={onWheelPan}>
          <Svg width={300} height={300}>
            <Circle cx={150} cy={150} r={140} fill="yellow" />
            <SvgText
              x={150}
              y={150}
              fontSize={20}
              textAnchor="middle"
              fill="black"
            >
              Spin me!
            </SvgText>
          </Svg>
        </PanGestureHandler>
        <TouchableOpacity onPress={() => console.log('Spin button pressed')}>
          <Text>Spin</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default SpinningWheel;
