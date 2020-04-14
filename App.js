import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import RecipeListScreen from './screens/SymptomScreen';
import SingleRecipeScreen from './screens/StatsScreen';
import InstagramScreen from './screens/ImagesScreen';


const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        )
      }
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        title: 'About Corona',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="skyatlas" size={25} color={tintColor} />
        )
      }
    },
    Recipes: {
      screen: RecipeListScreen,
      navigationOptions: {
        title: 'Signs & Symptoms',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="odnoklassniki" size={25} color={tintColor} />
        )
      },
    },
    Featured: {
      screen: SingleRecipeScreen,
      navigationOptions: {
        title: 'Statictics',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ravelry" size={25} color={tintColor} />
        )
      },
    },

    Instagram: {
      screen: InstagramScreen,
      navigationOptions: {
        title: 'Image Feed',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="picture-o" size={25} color={tintColor} />
        )
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
);
const AppContainer = createAppContainer(bottomTabNavigator);
export default function App() {
  return (
    <AppContainer />
  );
}