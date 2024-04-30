import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Realestate from './Realestate';
import Entertainment from './Entertainment';
import Travel from './Travel';
import Sports from './Sports';
import Politics from './Politics';
import scienceTechnology from './scienceTechnology';
import CustomTab from '../../Components/CustomTab';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import { height, width } from '../../styles/responsiveSize';
import strings from '../../constants/lang';

const Tab = createMaterialTopTabNavigator();

const News = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{marginBottom:10}}>
            <TextInputWithLabel 
            placeholder={strings.search}
           lefticon={imagePath.search2}
           lefticonstyle={{height:20,width:20,postion:'absolute',top:30,marginLeft:5}}
            extraStyle={{width: width/1.1, alignSelf: 'center',}}
/>
            </View>
            <Tab.Navigator tabBar={(props) => <CustomTab {...props} />}>
                <Tab.Screen name="Realestate" component={Realestate} />
                {/* <Tab.Screen name="Entertainment" component={Entertainment} /> */}
                <Tab.Screen name="Travel" component={Travel} />
                <Tab.Screen name="Sports" component={Sports} />
                <Tab.Screen name="Politics" component={Politics} />
                <Tab.Screen name="Science & Technology" component={scienceTechnology}/>
            </Tab.Navigator>
        </View>
    )
}

export default News