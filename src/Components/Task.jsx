import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Task = ({ task, handleCompleteTask, handleDeleteTask }) => {
    return (
        <View style={styles.tasktask}>
            <Text style={[task.completed && styles.completedTask]}>
                {task.title}
            </Text>
            <View style={styles.taskMenu}>
                <TouchableOpacity
                    onPress={() => handleCompleteTask(task.id)}
                >
                    <MaterialCommunityIcons
                        name={task.completed ? 'checkbox-marked' : 'checkbox-blank-outline'}
                        size={24}
                        color={task.completed ? '#4CAF50' : '#757575'}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { handleDeleteTask(task.id) }}
                >
                    <MaterialCommunityIcons
                        name={'delete'}
                        size={24}
                        color={'red'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    tasktask: {
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
})