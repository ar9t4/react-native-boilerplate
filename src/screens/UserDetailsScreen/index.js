import { View, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import globalStyles from '../../constants/globalStyles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const UserDetailsScreen = ({ route, navigation }) => {
    const { colors } = useTheme();
    const { user } = route.params;
    const { t } = useTranslation();
    return (
        <View style={globalStyles.containerStyle}>
            <View style={{ backgroundColor: colors.card }}>
                <Image style={styles.userImageStyle} source={{ uri: user.picture.large }} />
                <Text style={{ ...globalStyles.text16Style, color: colors.text, alignSelf: 'center', margin: 16 }}>{user.name.title} {user.name.first} {user.name.last}</Text>
            </View>

            <Text style={{ ...globalStyles.text18Style, color: colors.text, fontWeight: 'bold', marginHorizontal: 24, marginTop: 32, marginBottom: 16 }}>{t('more_details')}</Text>

            <View style={styles.iconicTextStyle}>
                <Icon style={styles.iconStyle} name='mail-outline' size={24} color={colors.text} />
                <Text style={{...globalStyles.text16Style, color: colors.text}}>{user.email}</Text>
            </View>

            <View style={styles.iconicTextStyle}>
                <Icon style={styles.iconStyle} name='person-outline' size={24} color={colors.text} />
                <Text style={{...globalStyles.text16Style, color: colors.text}}>{user.gender}</Text>
            </View>

            <View style={styles.iconicTextStyle}>
                <Icon style={styles.iconStyle} name='calendar-outline' size={24} color={colors.text} />
                <Text style={{...globalStyles.text16Style, color: colors.text}}>{user.dob.date}</Text>
            </View>

            <View style={styles.iconicTextStyle}>
                <Icon style={styles.iconStyle} name='location-outline' size={24} color={colors.text} />
                <Text style={{...globalStyles.text16Style, color: colors.text}}>{user.location.city}, {user.location.country}</Text>
            </View>

            <View style={styles.iconicTextStyle}>
                <Icon style={styles.iconStyle} name='phone-portrait-outline' size={24} color={colors.text} />
                <Text style={{...globalStyles.text16Style, color: colors.text}}>{user.cell}</Text>
            </View>
        </View>
    )
};

export default UserDetailsScreen;