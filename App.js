import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useEffect } from 'react';
import { DistanceProvider } from './components/Contexts'
import Workouts from "./components/Workouts";
import Settings from "./components/Settings";
import AddWorkout from "./components/AddWorkout";


const Tab = createBottomTabNavigator();

export default function App() {
  console.log('App component rendering...');

  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    console.log('Workouts in App:', workouts);
  }, [workouts]);

  return (

    <NavigationContainer>
      <DistanceProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'account-settings' : 'account-settings-outline';
              } else if (route.name === 'Workouts') {
                iconName = focused ? 'bicycle' : 'bicycle';
              } else if (route.name === 'Add workout') {
                iconName = focused ? 'plus-box' : 'plus-box-outline';
              }
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: 'orange',
            tabBarActiveTintColor: 'black',
          })}
        >
          <Tab.Screen name="Workouts">
            {() => <Workouts workouts={workouts} />}
          </Tab.Screen>
          <Tab.Screen name="Add workout">
            {() => <AddWorkout workouts={workouts} setWorkouts={setWorkouts} />}
          </Tab.Screen>
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </DistanceProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
