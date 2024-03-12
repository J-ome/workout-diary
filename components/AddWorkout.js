import React, { useState } from "react";
import { Pressable, Text, View, Modal, Button, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SegmentedButtons, TextInput } from "react-native-paper";
import { Calendar } from 'react-native-calendars';
import Style from "../styles/Style";
import DATA from "./Data";
import { useDistanceContext } from "./Contexts";

const AddWorkout = ({ workouts, setWorkouts }) => {
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [visible, setVisible] = useState(false);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const { distanceUnit } = useDistanceContext();

  const buttons = DATA.map(item => ({ value: item.workout, label: item.workout }));

  const handleAddWorkout = () => {
    if (selectedWorkout && selectedDate && distance && duration) {
      if (distance >= 0 && duration >= 0) {
        const newWorkout = {
          workout: selectedWorkout,
          date: selectedDate,
          distance: distance,
          duration: duration,
          unit: distanceUnit
        };
        setWorkouts(prevWorkouts => [...prevWorkouts, newWorkout]);
      } else {
        Alert.alert(
          'Invalid input',
          'Distance and duration cannot be negative.',
          [{ text: 'OK' }]
        );
      }
    }
  };

  return (
    <SafeAreaView style={Style.container}>
      <SegmentedButtons theme={{ colors: { secondaryContainer: '#FFFFF0', outline: 'black' }, roundness: 1 }}
        style={Style.segmentedButton}
        value={selectedWorkout}
        onValueChange={setSelectedWorkout}
        buttons={buttons}
      />
      <TextInput
        style={Style.addWorkoutTextInput}
        label={`Distance (${distanceUnit === 'km' ? 'km' : 'miles'})`}
        keyboardType='numeric'
        value={distance}
        onChangeText={setDistance}
      />
      <TextInput
        style={Style.addWorkoutTextInput}
        label="Duration (min)"
        keyboardType='numeric'
        value={duration}
        onChangeText={setDuration}
      />
      <Modal visible={visible} transparent={true}>
        <Calendar
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
            setVisible(false);
          }}
        />
        <Pressable onPress={() => setVisible(false)}>
          <Text style={Style.calendarDate}>{selectedDate ? selectedDate : 'Close calendar'}</Text>
        </Pressable>
      </Modal>
      <Pressable onPress={() => setVisible(true)}

      >
        <Text style={Style.calendarDate}>{selectedDate ? selectedDate : 'Select date'}</Text>
      </Pressable >
      <Pressable onPress={() => handleAddWorkout()}>
        <Text style={Style.addWorkoutButton}>ADD WORKOUT</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default AddWorkout;
