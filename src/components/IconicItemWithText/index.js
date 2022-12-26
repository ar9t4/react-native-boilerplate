import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const IconicItemWithText = ({
    backgroundColor = 'white',
    textColor = 'black',
    leftIconName,
    keyText,
    valueText,
    onPress
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{...styles.containerStyle, backgroundColor: backgroundColor}}>
                <Icon
                    name={leftIconName}
                    size={24}
                    color={textColor} />
                <Text style={{...styles.text14Style, color: textColor}}>{keyText}</Text>
                <Text style={{ color: textColor, fontSize: 14, marginHorizontal: 4 }}>{valueText}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default IconicItemWithText;

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