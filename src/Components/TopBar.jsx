import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const TopBar = ({
    handleAddTask
}) => {
    const [taskTitle, setTaskTitle] = useState('')

    const isAddTaskButtonDisabled = () => {
        return (taskTitle.trim() === '')
    }

    const handleAddTaskAndResetInput = () => {
        handleAddTask(taskTitle)
        setTaskTitle('')
    }

    return (
        <View style={styles.addTaskContainer}>
            <TextInput
                value={taskTitle}
                placeholder='Ingrese una tarea...'
                onChangeText={setTaskTitle}
                style={styles.addTaskInput}
                placeholderTextColor={'#FFF'}
                enablesReturnKeyAutomatically
                onSubmitEditing={handleAddTaskAndResetInput}
            />
            <TouchableOpacity
                onPress={handleAddTaskAndResetInput}
                style={[styles.addTaskButton, isAddTaskButtonDisabled() && styles.addTaskButtonDisabled]}
                disabled={isAddTaskButtonDisabled()}
            >
                <MaterialCommunityIcons
                    name={'plus'}
                    size={24}
                    color={!isAddTaskButtonDisabled() ? '#FFF' : '#616161'}
                />
            </TouchableOpacity>
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    addTaskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 18,
        borderBottomWidth: 0.4,
        borderBottomColor: '#00695C'
    },
    addTaskInput: {
        flex: 1,
        marginRight: 6,
        backgroundColor: '#00695C',
        color: '#FFF',
        borderRadius: 14,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    addTaskButton: {
        backgroundColor: '#2E7D32',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        paddingVertical: 6,
        aspectRatio: 1
    },
    addTaskButtonDisabled: {
        backgroundColor: '#9E9E9E'
    },
})