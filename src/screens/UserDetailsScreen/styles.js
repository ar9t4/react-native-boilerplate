import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    userImageStyle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 0.5,
        overflow: 'hidden',
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 24
    },
    iconicTextStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8
    },
    iconStyle: {
        marginHorizontal: 14,
        marginVertical: 8
    }
});

export default styles;