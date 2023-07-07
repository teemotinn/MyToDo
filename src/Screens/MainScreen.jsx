import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants'
import * as NavigationBar from 'expo-navigation-bar'
import Modal from '../Components/MyModal'
import TopBar from '../Components/TopBar'
import TaskList from "../Components/TaskList"
import NotFoundMessage from '../Components/NotFoundMessage'

export default function MainScreen() {
    const [tasks, setTasks] = useState([])
    const [selectedTask, setSelectedTask] = useState()
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

    const handleDeleteTask = (task) => {
        setSelectedTask(task)
        setIsDeleteModalVisible(true)
    };

    const deleteTask = () => {
        setTasks(tasks.filter((task) => task.id !== (selectedTask?.id ?? '')));
        setIsDeleteModalVisible(false);
    }

    NavigationBar.setBackgroundColorAsync("#E0F2F1");

    return (
        <View style={styles.container}>
            <TopBar
                handleAddTask={handleAddTask}
            />
            {tasks.length !== 0
                ? <TaskList
                    tasks={tasks}
                    handleCompleteTask={handleCompleteTask}
                    handleDeleteTask={handleDeleteTask}
                />
                : <NotFoundMessage />

            }
            <Modal
                visible={isDeleteModalVisible}
                title={'¿Eliminar tarea?'}
                content={'Se borrará la tarea' + (selectedTask?.title && (' "' + selectedTask.title + '"')) + '.'}
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
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#E0F2F1',
        flex: 1
    },
});