import { StyleSheet, Text, View, Modal, Button, TouchableOpacity } from 'react-native'
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
        <Modal visible={visible} animationType='fade' transparent statusBarTranslucent>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>{title}</Text>
                    {content && <Text style={styles.content}>{content}</Text>}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={onPrimaryButtonPress}
                            style={styles.primaryButton}
                        >
                            <Text style={styles.primaryButtonText}>
                                {primaryButtonLabel}
                            </Text>
                        </TouchableOpacity>
                        {secondaryButtonLabel && (
                            <TouchableOpacity
                                onPress={onSecondaryButtonPress}
                                style={styles.secondaryButton}
                            >
                                <Text style={styles.secondaryButtonText}>
                                    {secondaryButtonLabel}
                                </Text>
                            </TouchableOpacity>
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
        width: '100%',
        maxWidth: 300
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    content: {
        textAlign:'center',
        marginBottom: 18,
    },
    buttonContainer: {
        flexDirection: 'column',
    },
    primaryButton: {
        backgroundColor: '#00695C',
        borderRadius: 100,
        paddingHorizontal: 12,
        paddingVertical: 8
    },
    secondaryButton: {
        marginTop: 6,
        borderColor: '#00695C',
        borderWidth: 1,
        borderRadius: 100,
        paddingHorizontal: 12,
        paddingVertical: 8
    },
    primaryButtonText: {
        textAlign: 'center',
        color: '#FFF'
    },
    secondaryButtonText: {
        textAlign: 'center',
        color: '#00695C'
    }
})