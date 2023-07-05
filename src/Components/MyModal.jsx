import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'

const MyModal = ({
    visible,
    title,
    content,
    primaryButtonLabel,
    secondaryButtonLabel,
    onPrimaryButtonPress,
    onSecondaryButtonPress
}) => {
    return (
        <Modal visible={visible} animationType='fade' transparent>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>{title}</Text>
                    {content && <Text style={styles.content}>{content}</Text>}
                    <View style={styles.buttonContainer}>
                        <Button title={primaryButtonLabel} onPress={onPrimaryButtonPress} />
                        {secondaryButtonLabel && (
                            <Button title={secondaryButtonLabel} onPress={onSecondaryButtonPress} />
                        )}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default MyModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'column',
    },
})