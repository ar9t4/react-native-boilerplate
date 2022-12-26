import { SafeAreaView, View, Text, TextInput, Alert, Keyboard } from 'react-native';
import Button from '../../components/Button';
import globalStyles from '../../constants/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const FeedbackScreen = () => {
    const { colors } = useTheme();
    const { t } = useTranslation();
    return (
        <SafeAreaView>
            <View style={globalStyles.containerPadding16Style}>
                <View style={globalStyles.headerStyle}>
                    <Icon name='newspaper' size={24} color={colors.text} />
                    <Text style={{
                        ...globalStyles.headerTextStyle,
                        color: colors.text
                    }}>{t('feedback')}</Text>
                </View>
                <Text
                    style={{
                        ...globalStyles.text16Style,
                        marginHorizontal: 0,
                        marginVertical: 24,
                        color: colors.text
                    }}>
                    {t('briefly_describe_your_feedback')}
                </Text>
                <TextInput
                    multiline={true}
                    style={{
                        ...globalStyles.textInputStyle,
                        color: colors.text,
                        borderColor: colors.text
                    }}
                    cursorColor={colors.text}
                    placeholder={t('type_here')}
                    placeholderTextColor={colors.text} />
                <Button
                    backgroundColor={colors.card}
                    textColor={colors.text}
                    title={t('submit_feedback')}
                    onPress={() => {
                        Keyboard.dismiss();
                        Alert.alert(title = t('feedback_submitted'));
                    }} />
            </View>
        </SafeAreaView>
    )
};

export default FeedbackScreen;