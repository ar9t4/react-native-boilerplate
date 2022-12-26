import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const IconicItemWithArrow = ({
    backgroundColor = 'white',
    textColor = 'black',
    leftIconName,
    text,
    rightIconName,
    onPress
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ ...styles.containerStyle, backgroundColor: backgroundColor }}>
                <Icon
                    name={leftIconName}
                    size={24}
                    color={textColor} />
                <Text style={{ ...styles.text14Style, color: textColor }}>{text}</Text>
                <Icon
                    style={{ alignContent: 'flex-end' }}
                    name={rightIconName}
                    size={24}
                    color={textColor} />
            </View>
        </TouchableOpacity>
    );
};

export default IconicItemWithArrow;

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: 'white',
    },
    text14Style: {
        flex: 1,
        color: 'black',
        fontSize: 14,
        marginHorizontal: 12,
        marginVertical: 8
    }
});