import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Circle, Text as SvgText, G, Path } from 'react-native-svg';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';

const SpinningWheel = () => {
  const wheelRef = useRef(null);

  const onWheelPan = (event) => {};

  const launchSegments = () => {
    const numOfSegments = 5;
    const angle = (2 * Math.PI) / numOfSegments;

    const segments = [];
    for (let i = 0; i < numOfSegments; i++) {
      const startAngle = i * angle;
      const endAngle = (i + 1) * angle;

      const pathData = `
        M 150 150 
        L ${150 + 140 * Math.cos(startAngle)} ${
        150 + 140 * Math.sin(startAngle)
      }
        A 140 140 0 0 1 ${150 + 140 * Math.cos(endAngle)} ${
        150 + 140 * Math.sin(endAngle)
      }
        Z
        `;

      segments.push(
        <Path
          d={pathData}
          cx={150}
          cy={150}
          r={140}
          fill={`hsl(${(i * 360) / numOfSegments}, 50%, 70%)`}
        />
      );
    }
    return segments;
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <PanGestureHandler onGestureEvent={onWheelPan}>
          <Svg width={300} height={300}>
            <G>
              {launchSegments()}
              <Circle
                cx={150}
                cy={150}
                r={55}
                fill="grey"
                stroke="white"
                strokeWidth={1.5}
              />
              <SvgText
                x={150}
                y={150}
                fontSize={20}
                textAnchor="middle"
                fill="white"
                top={19}
              >
                Spin me!
              </SvgText>
            </G>
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
