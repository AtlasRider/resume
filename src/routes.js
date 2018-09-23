import { createBottomTabNavigator } from 'react-navigation';
import AboutScreen from './screens/AboutScreen';
import SkillScreen from './screens/SkillScreen';
import ExperienceScreen from './screens/ExperienceScreen';
import EducationScreen from './screens/EducationScreen';
import OtherScreen from './screens/OtherScreen';
// import colors from './styles';

export default createBottomTabNavigator({
  About: AboutScreen,
  Skills: SkillScreen,
  Experience: ExperienceScreen,
  Education: EducationScreen,
  Other: OtherScreen,
}, {
  //initialRouteName: 'Experience',
  tabBarOptions: {
    style: {
      backgroundColor: 'grey'
    },
    labelStyle : {
      color: 'black'
    }
  }
});
