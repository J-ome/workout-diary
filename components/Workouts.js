import { View, Text, FlatList } from "react-native";
import { useState } from "react";
import { Button } from "react-native-paper";
import AddWorkout from "./AddWorkout";
import { useEffect } from "react";
import { useDistanceContext } from "./Contexts";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Style from "../styles/Style";


const Workouts = ( { workouts }) => {

    const { distanceUnit } = useDistanceContext();

    useEffect(() => {
        
        console.log('Received workouts:', workouts);
      }, [workouts]);

      const getIconName = (workout) => {
        if (workout === 'Running') {
          return 'run';
        } else if (workout === 'Cycling') {
          return 'bike';
        } else if (workout === 'Swimming') {
          return 'swim'
        } else if (workout === 'Gym') {
          return 'dumbbell'
        }
      }

      const defaultWorkout = {
        date: '2024-03-25',
        workout: 'Cycling',
        distance: '55',
        duration: '55'
      };
    
    console.log('Workouts component rendered???.');
    console.log("workouts here??:", workouts)

    return (
        <View style={Style.container}>
            <FlatList
              data={workouts.length === 0 ? [defaultWorkout] : [defaultWorkout, ...workouts]}
              renderItem={({ item }) => (
                <View style={Style.flatList}>
                  <MaterialCommunityIcons name={getIconName(item.workout)} size={55} color="black"/>
                  <View style={Style.workouts}>
                  <Text>Date: {item.date}</Text>
                  <Text>Workout: {item.workout}</Text>
                  <Text>Distance: {distanceUnit === 'km' ? item.distance : (item.distance * 0.621371).toFixed(2)} {distanceUnit}</Text>
                  <Text>Duration: {item.duration} min</Text>
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
        </View>
      );
    };

export default Workouts;