import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const UserCard = ({
    backgroundColor = 'white',
    textColor = 'black',
    props,
    onPress
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ ...styles.containerStyle, backgroundColor: backgroundColor }}>
                <Image style={styles.userImageStyle} source={{ uri: props.picture.large }} />
                <View style={styles.userDetailsStyle}>
                    <Text style={{ ...styles.text14Style, color: textColor }}>{props.name.title} {props.name.first} {props.name.last}</Text>
                    <Text style={{ ...styles.text14Style, color: textColor }}>{props.email}</Text>
                    <Text style={{ ...styles.text14Style, color: textColor }}>{props.cell}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default UserCard;

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        marginVertical: 8,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 8
    },
    userImageStyle: {
        width: 50,
        height: 50,
        margin: 8,
        borderRadius: 25,
        borderWidth: 0.5,
        overflow: 'hidden',
        resizeMode: 'contain',
    },
    userDetailsStyle: {
        marginLeft: 8,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    text14Style: {
        color: 'black',
        fontSize: 14
    }
});