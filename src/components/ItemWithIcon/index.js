import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ItemWithIcon = ({
    backgroundColor = 'white',
    textColor = 'black',
    text,
    iconName,
    onPress
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ ...styles.containerStyle, backgroundColor: backgroundColor }}>
                <Text style={{ ...styles.text14Style, color: textColor }}>{text}</Text>
                <Icon
                    name={iconName}
                    size={24}
                    color={textColor} />
            </View>
        </TouchableOpacity>
    );
};

export default ItemWithIcon;

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
        marginVertical: 8
    }
});