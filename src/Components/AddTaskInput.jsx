import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const AddTaskInput = ({
    handleAddTask
}) => {
    const [taskTitle, setTaskTitle] = useState('')
    return (
        <View style={styles.addTaskContainer}>
            <TextInput
                value={taskTitle}
                placeholder='Ingrese una tarea...'
                onChangeText={setTaskTitle}
                style={styles.addTaskInput}
            />
            <TouchableOpacity
                onPress={() => { handleAddTask(taskTitle); setTaskTitle('') }}
                style={styles.addTaskButton}
            >
                <Text>
                    Agregar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddTaskInput

const styles = StyleSheet.create({
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
})