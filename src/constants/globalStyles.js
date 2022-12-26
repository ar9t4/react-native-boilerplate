import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    containerStyle: {
        flex: 1
    },
    containerPadding16Style: {
        padding: 16
    },
    centeredStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerStyle: {
        flexDirection: 'row',
        margin: 16
    },
    headerTextStyle: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 8
    },
    text12Style: {
        color: 'black',
        fontSize: 12
    },
    text14Style: {
        color: 'black',
        fontSize: 14
    },
    text16Style: {
        color: 'black',
        fontSize: 16
    },
    text18Style: {
        color: 'black',
        fontSize: 18
    },
    text20Style: {
        color: 'black',
        fontSize: 20,
    },
    textInputStyle: {
        color: 'black',
        height: 200,
        paddingHorizontal: 16,
        marginHorizontal: 0,
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 0.25
    }
});

export default globalStyles;