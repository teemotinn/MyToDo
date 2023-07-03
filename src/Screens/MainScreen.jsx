import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Constants from 'expo-constants';
import * as NavigationBar from 'expo-navigation-bar';

export default function MainScreen() {
    const [tasks, setTasks] = useState([])
    const [taskTitle, setTaskTitle] = useState('')

    const handleAddTask = () => {
        if (taskTitle.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), title: taskTitle, completed: false }]);
            setTaskTitle('');
        }
    };

    const renderTask = ({ item }) => (
        <View style={styles.taskItem}>
            <Text>
                {item.title}
            </Text>
        </View>
    );
    
    NavigationBar.setBackgroundColorAsync("white");

    return (
        <View style={styles.container}>
            <View style={styles.addTaskInput}>
                <TextInput
                    value={taskTitle}
                    placeholder='Ingrese una tarea...'
                    onChangeText={setTaskTitle}
                />
                <TouchableOpacity
                    onPress={handleAddTask}
                >
                    <Text>
                        Agregar
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={tasks}
                renderItem={renderTask}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.tasksList}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginTop: Constants.statusBarHeight
    },
    addTaskInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 14,
        padding: 8
    },
    tasksList: {
        marginTop: 12
    },
    taskItem: {
        alignItems: 'center',
        justifyContent:'space-between',
        marginTop: 4,
        borderColor: 'grey',
        borderRadius: 14,
        borderWidth: 1,
        padding: 8
    }
});