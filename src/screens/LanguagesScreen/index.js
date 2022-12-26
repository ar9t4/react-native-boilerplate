import { SafeAreaView, View, FlatList } from "react-native";
import globalStyles from '../../constants/globalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../SettingsScreen/slice';
import ItemWithIcon from '../../components/ItemWithIcon';
import { useTranslation } from 'react-i18next';
import { setValueInAsyncStorage } from '../../utils/asyncStorage';
import { useTheme } from '@react-navigation/native';

const LanguagesScreen = ({ navigation }) => {

    const { colors } = useTheme();

    const dispatch = useDispatch();
    const { languages } = useSelector(state => state.settings);

    const { i18n } = useTranslation();

    return (
        <SafeAreaView>
            <View style={globalStyles.containerPadding16Style}>
                <FlatList
                    keyExtractor={(item, index) => index}
                    data={languages}
                    renderItem={({ item, index }) =>
                        <ItemWithIcon
                            backgroundColor={colors.card}
                            textColor={colors.text}
                            text={item.name}
                            iconName={item.selected ? 'checkmark-circle' : 'checkmark-circle-outline'}
                            onPress={() => {
                                // change language in i18n
                                i18n.changeLanguage(item.code);
                                // change language in store
                                dispatch(setLanguage(item.code));
                                // save selected language in AsyncStorage
                                setValueInAsyncStorage('selected_language', item.code);
                            }} />
                    }
                />
            </View>
        </SafeAreaView>
    );
};

export default LanguagesScreen;