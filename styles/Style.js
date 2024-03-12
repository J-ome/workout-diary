import { StyleSheet } from "react-native";


export default Style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#c4ecf9',
    },
    flatList: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 2,
        borderRadius: 5,
        margin: 5,
        backgroundColor: '#FFFFF0'
    },
    workouts: {
        marginLeft: 10,   
    },
    addWorkoutTextInput: {
        margin: 10,
        borderWidth: 2,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        backgroundColor: '#FFFFF0',
    },
    calendarDate: {
        borderWidth: 2,
        alignSelf: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 3,
        backgroundColor: '#FFFFF0',
        textAlign: 'center',
        alignSelf: 'stretch'
        

    },
    addWorkoutButton: {
        backgroundColor: '#FFFFF0',
        borderWidth: 2,
        margin: 10,
        padding: 10,
        borderRadius: 3,
        textAlign: 'center'
    },
    segmentedButton: {
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 2
    },
    chooseUnit: {
        fontSize: 24
    },
    radioButtons: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10
    },
    radioButtonRow: {
        marginTop: 10,
        alignItems: 'center',
        marginBottom: 10,
    }
  });