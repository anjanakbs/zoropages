import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const CustomTab = ({ state, descriptors, navigation }) => {
    const { navigate } = useNavigation();

    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#ffffff' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigate(route.name); // Use navigate to switch tabs
                    }
                };

                // const tabBackgroundColor = isFocused ? '#cccccc' : '#ffffff';
                // const tabTextColor = isFocused ? '#000000' : '#666666';

                return (
                    <TouchableOpacity
                        key={index}
                        onPress={onPress}
                        style={styles.touchable}
                    >
                        <Text style={{ color: 'black',width:100}}>{label}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default CustomTab;
const styles = StyleSheet.create({
     touchable:{
      alignItems: 'center',
       justifyContent: 'center',
        paddingVertical: 12,
        }
})
