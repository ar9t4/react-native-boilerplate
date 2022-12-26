import { StyleSheet, TouchableOpacity, View, Text, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const IconicItemWithSwitch = ({
    backgroundColor = 'white',
    textColor = 'black',
    leftIconName,
    text
}) => {
    return (
        <TouchableOpacity>
            <View style={{ ...styles.containerStyle, backgroundColor: backgroundColor }}>
                <Icon
                    name={leftIconName}
                    size={24}
                    color={textColor} />
                <Text style={{ ...styles.text14Style, color: textColor }}>{text}</Text>
                <Switch
                    trackColor={{ false: textColor, true: textColor }}
                    thumbColor={backgroundColor}
                    value={true} />
            </View>
        </TouchableOpacity>
    );
};

export default IconicItemWithSwitch;

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