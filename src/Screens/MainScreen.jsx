import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Constants from 'expo-constants';
import * as NavigationBar from 'expo-navigation-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MyModal from '../Components/MyModal';

export default function MainScreen() {
    const [tasks, setTasks] = useState([])
    const [taskTitle, setTaskTitle] = useState('')
    const [selectedTaskId, setSelectedTaskId] = useState('')
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)

    const handleAddTask = () => {
        if (taskTitle.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), title: taskTitle, completed: false }]);
            setTaskTitle('');
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

    const handleDeleteTask = () => {
        setTasks(tasks.filter((task) => task.id !== selectedTaskId));
        setIsDeleteModalVisible(false);
    };

    const renderTask = ({ item }) => (
        <View style={styles.taskItem}>
            <Text style={[item.completed && styles.completedTask]}>
                {item.title}
            </Text>
            <View style={styles.taskMenu}>
                <TouchableOpacity
                    onPress={() => handleCompleteTask(item.id)}
                >
                    <MaterialCommunityIcons
                        name={item.completed ? 'checkbox-marked' : 'checkbox-blank-outline'}
                        size={24}
                        color={item.completed ? '#4CAF50' : '#757575'}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setSelectedTaskId(item.id)
                        setIsDeleteModalVisible(true)
                    }}
                >
                    <MaterialCommunityIcons
                        name={'delete'}
                        size={24}
                        color={'red'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );

    NavigationBar.setBackgroundColorAsync("white");

    return (
        <View style={styles.container}>
            <View style={styles.addTaskContainer}>
                <TextInput
                    value={taskTitle}
                    placeholder='Ingrese una tarea...'
                    onChangeText={setTaskTitle}
                    style={styles.addTaskInput}
                />
                <TouchableOpacity
                    onPress={handleAddTask}
                    style={styles.addTaskButton}
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
            <MyModal
                visible={isDeleteModalVisible}
                title={'¿Eliminar tarea?'}
                primaryButtonLabel={'Sí, eliminar'}
                secondaryButtonLabel={'No, cancelar'}
                onPrimaryButtonPress={handleDeleteTask}
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
    addTaskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    addTaskInput: {
        flex: 1,
        marginRight: 12,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 14,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    addTaskButton: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 100,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    tasksList: {
        flexGrow: 1,
        marginTop: 12
    },
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 4,
        borderColor: 'grey',
        borderRadius: 14,
        borderWidth: 1,
        padding: 8
    },
    taskMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 4,
    },
    completedTask: {
        textDecorationLine: 'line-through',
        color: '#757575',
    },
});