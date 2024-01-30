import React, { useRef } from "react";
import { Svg, Circle, G, Path } from 'react-native-svg'
import {
    Animated,
    Text,
    View,
    StyleSheet,

    Pressable,
} from 'react-native';

const SpinWheel = ({ data, radius = 100 }) => {
    const rotateValue = useRef(new Animated.Value(0)).current;

    const getEndAngle = (data) => {
        const totalValue = data.reduce((sum, item) => sum + item.value, 0);
        let startAngle = 0;
        const endAngles = [];

        for (let i = 0; i < data.length; i++) {
            const angle = (data[i].value / totalValue) * 360;
            endAngles[i] = startAngle;
            startAngle += angle;
        }

        return endAngles;
    };



    const spinCircle = () => {
        const finalRotationValue = Math.random() * 360;
        Animated.timing(rotateValue, {
            toValue: finalRotationValue,
            duration: 1000,
            // easing: Easing.ease,
            useNativeDriver: true,
        }).start();


    }




    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    };

    const calculateSlicePath = (slice) => {
        const largeArcFlag = slice.endAngle - slice.startAngle <= 180 ? 0 : 1;
        return {
            d: `M ${radius},${radius}
        A ${radius},${radius} 0 ${largeArcFlag} 1 ${Math.cos(slice.startAngle * Math.PI / 180) * radius + radius
                },${Math.sin(slice.startAngle * Math.PI / 180) * radius + radius
                }
     L ${radius},${radius} Z`,
        };
    }


    const slices = data.map((item, index) => ({
        startAngle: getEndAngle(data, index - 1),
        endAngle: getEndAngle(data, index),
        value: item.value,
        label: item.name,
        colors: getRandomColor(),
    }))

    const interpolation = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    })


    if (data.length === 0) {
        return <Text>No data to display</Text>
    } else {



        return (
            <View>

                <Svg width={radius * 2} height={radius * 2}>

                    <G rotation={interpolation}>
                        <Circle
                            cx={radius}
                            cy={radius}
                            r={radius}
                            stroke={'#ccc'}
                            fill="none"

                        />
                        {slices.map((slice) => {
                            <G key={slice.value}>
                                <Path
                                    d={calculateSlicePath(slice)}
                                    fill={slice.colors}
                                />
                                <Text transform={{ rotate: `${interpolation}deg` }} style={{ textAlign: 'center' }}>
    {slice.label}
</Text>

                            </G>
                        })}
                    </G>
                </Svg>
                <Pressable onPress={spinCircle} style={{ backgroundColor: 'blue', padding: 10 }}>
                    <Text>Spin Me!</Text>
                </Pressable>

            </View>


        );
    }



}


export default SpinWheel