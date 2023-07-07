import { FlatList, StyleSheet } from "react-native";
import React from "react";
import RenderItemTask from "./RenderItemTask ";

const TaskList = ({
    tasks,
    handleCompleteTask,
    handleDeleteTask
}) => {
    return (
        <FlatList
            data={tasks}
            renderItem={({ item }) =>
                <RenderItemTask
                    task={item}
                    handleCompleteTask={handleCompleteTask}
                    handleDeleteTask={handleDeleteTask}
                />
            }
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.taskList}
        />
    );
};

export default TaskList;

const styles = StyleSheet.create({
    taskList: {
        flexGrow: 1,
        paddingHorizontal: 18,
        paddingVertical: 12
    }
})