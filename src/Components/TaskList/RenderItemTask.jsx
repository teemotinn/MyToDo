import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RenderItemTask = ({ task, handleCompleteTask, handleDeleteTask }) => {
    return (
        <View style={styles.task}>
            <Text style={[styles.title, task.completed && styles.completedTask]}>
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
                    onPress={() => { handleDeleteTask(task) }}
                >
                    <MaterialCommunityIcons
                        name={'delete'}
                        size={24}
                        color={'#b71c1c'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RenderItemTask

const styles = StyleSheet.create({
    task: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
        borderRadius: 10,
        paddingVertical: 8,
        paddingLeft: 14,
        paddingRight: 6,
        shadowColor: "#000",
        backgroundColor: '#FFF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    title: {
        flexShrink: 1
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