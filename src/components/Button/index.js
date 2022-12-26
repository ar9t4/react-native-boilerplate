import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({
    backgroundColor = 'black',
    textColor = 'white',
    title,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={{...styles.buttonStyle, backgroundColor: backgroundColor}}
            onPress={onPress}>
            <Text
                style={{...styles.buttonTextStyle, color: textColor}}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    buttonStyle: {
        padding: 16,
        borderRadius: 8,
        marginVertical: 24,
        backgroundColor: 'black'
    },
    buttonTextStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400',
        alignSelf: 'center',
    }
});