import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ForYou from '../Screens/SearchFriend/ForYou';
import Following from '../Screens/SearchFriend/Following';
import WrapperContainer from '../Components/WrapperContainer';
import HeaderComp from '../Components/HeaderComp';
import imagePath from '../constants/imagePath';
import { View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

function MaterialTopTab({navigation}) {
  return (
    <WrapperContainer>
      <View>
    <HeaderComp leftIcon={imagePath.backicon}/>
    </View>
    <Tab.Navigator>
      <Tab.Screen name="ForYou" component={ForYou} />
      <Tab.Screen name="Following" component={Following} />
      {/* <Tab.Screen name="Following" component={Following} /> */}
    </Tab.Navigator>
    </WrapperContainer>
  );
}
export default MaterialTopTab;