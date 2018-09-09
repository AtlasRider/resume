import { createBottomTabNavigator } from 'react-navigation';
import AboutScreen from './screens/AboutScreen'
import SkillScreen from './screens/SkillScreen'
import ExperienceScreen from './screens/ExperienceScreen'
import OtherScreen from './screens/OtherScreen'

export default createBottomTabNavigator({
  About: AboutScreen,
  Skills: SkillScreen,
  Experience: ExperienceScreen,
  Other: OtherScreen
});