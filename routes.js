import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import SkillScreen from './screens/SkillScreen'
import ExperienceScreen from './screens/ExperienceScreen'
import OtherScreen from './screens/HomeScreen'

export default createBottomTabNavigator({
  About: HomeScreen,
  Skills: SkillScreen,
  Experience: ExperienceScreen,
  Other: OtherScreen

});