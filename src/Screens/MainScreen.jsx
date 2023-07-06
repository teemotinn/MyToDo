import { View, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Constants from 'expo-constants';
import * as NavigationBar from 'expo-navigation-bar';
import MyModal from '../Components/MyModal';
import Task from '../Components/Task';
import AddTaskInput from '../Components/AddTaskInput';

export default function MainScreen() {
    const [tasks, setTasks] = useState([])
    const [selectedTaskId, setSelectedTaskId] = useState('')
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)

    const handleAddTask = (taskTitle) => {
        if (taskTitle.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), title: taskTitle, completed: false }]);
        }
    };

    const handleCompleteTask = (taskId) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === taskId) {
                    return { ...task, completed: !task.completed }
                }
                return task;
            })
        )
    }

    const handleDeleteTask = (taskId) => {
        setSelectedTaskId(taskId)
        setIsDeleteModalVisible(true)
    };

    const deleteTask = () => {
        setTasks(tasks.filter((task) => task.id !== selectedTaskId));
        setIsDeleteModalVisible(false);
    }

    NavigationBar.setBackgroundColorAsync("white");

    return (
        <View style={styles.container}>
            <AddTaskInput
                handleAddTask={handleAddTask}
            />
            <FlatList
                data={tasks}
                renderItem={({ item }) =>
                    <Task
                        task={item}
                        handleCompleteTask={handleCompleteTask}
                        handleDeleteTask={handleDeleteTask}
                    />
                }
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.tasksList}
            />
            <MyModal
                visible={isDeleteModalVisible}
                title={'¿Eliminar tarea?'}
                primaryButtonLabel={'Sí, eliminar'}
                secondaryButtonLabel={'No, cancelar'}
                onPrimaryButtonPress={deleteTask}
                onSecondaryButtonPress={() => setIsDeleteModalVisible(false)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 18,
        marginTop: Constants.statusBarHeight
    },
    tasksList: {
        flexGrow: 1,
        marginTop: 12
    },
});