import { StyleSheet, Modal, View, Text, ActivityIndicator } from 'react-native';

const Loader = ({ visible }) => {
    return (
        <Modal
            animationType='none'
            transparent={true}
            visible={visible}>
            <View style={styles.centeredStyle}>
                <View style={styles.modalStyle}>
                    <ActivityIndicator size={'large'} color='black' />
                    <Text style={styles.textStyle}>Loading</Text>
                </View>
            </View>
        </Modal>
    );
};

export default Loader;

const styles = StyleSheet.create({
    centeredStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    modalStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8
    },
    textStyle: {
        marginTop: 8,
        fontSize: 16,
        color: 'black'
    }
});