import { View, Text, SafeAreaView } from 'react-native';
import globalStyles from '../../constants/globalStyles';
import IconicItemWithArrow from '../../components/IconicItemWithArrow';
import IconicItemWithText from '../../components/IconicItemWithText';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const MoreScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const { t } = useTranslation();
    return (
        <SafeAreaView>
            <View style={globalStyles.containerPadding16Style}>
                <View style={globalStyles.headerStyle}>
                    <Icon name='apps' size={24} color={colors.text} />
                    <Text style={{ ...globalStyles.headerTextStyle, color: colors.text }}>{t('more')}</Text>
                </View>
                <IconicItemWithArrow
                    backgroundColor={colors.card}
                    textColor={colors.text}
                    leftIconName='settings-outline'
                    text={t('settings')}
                    rightIconName='chevron-forward'
                    onPress={() => { navigation.navigate('SettingsStack') }} />
                <IconicItemWithArrow
                    backgroundColor={colors.card}
                    textColor={colors.text}
                    leftIconName='newspaper-outline'
                    text={t('feedback')}
                    rightIconName='chevron-forward'
                    onPress={() => { navigation.navigate('Feedback') }} />
                <IconicItemWithArrow
                    backgroundColor={colors.card}
                    textColor={colors.text}
                    leftIconName='document-text-outline'
                    text={t('privacy_policy')}
                    rightIconName='chevron-forward' />
                <IconicItemWithArrow
                    backgroundColor={colors.card}
                    textColor={colors.text}
                    leftIconName='share-outline'
                    text={t('share')}
                    rightIconName='chevron-forward' />
                <IconicItemWithArrow
                    backgroundColor={colors.card}
                    textColor={colors.text}
                    leftIconName='star-outline'
                    text={t('rate_us')}
                    rightIconName='chevron-forward' />
                <IconicItemWithArrow
                    backgroundColor={colors.card}
                    textColor={colors.text}
                    leftIconName='apps-outline'
                    text={t('more_apps')}
                    rightIconName='chevron-forward' />
                <IconicItemWithText
                    backgroundColor={colors.card}
                    textColor={colors.text}
                    leftIconName='build-outline'
                    keyText={t('version')}
                    valueText='1.0.0' />
            </View>
        </SafeAreaView>
    )
};

export default MoreScreen;