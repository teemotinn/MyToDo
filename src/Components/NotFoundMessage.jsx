import { ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const NotFoundMessage = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <MaterialCommunityIcons
                name={'text-box-search-outline'}
                size={76}
            />
            <Text style={styles.message}>¡Nada por acá!</Text>
        </ScrollView>
    )
}

export default NotFoundMessage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    },
    message: {
        textAlign: 'center',
        fontSize: 22
    }
})