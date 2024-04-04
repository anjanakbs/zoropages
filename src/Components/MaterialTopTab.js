import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ForYou from '../Screens/SearchFriend/ForYou';
import Following from '../Screens/SearchFriend/Following';
import WrapperContainer from './WrapperContainer';
import HeaderComp from './HeaderComp';
import imagePath from '../constants/imagePath';

const Tab = createMaterialTopTabNavigator();

function MaterialTopTab() {
  return (
    <WrapperContainer>
    <Tab.Navigator>
      <Tab.Screen name="ForYou" component={ForYou} />
      <Tab.Screen name="Following" component={Following} />
    </Tab.Navigator>
    </WrapperContainer>
  );
}
export default MaterialTopTab;