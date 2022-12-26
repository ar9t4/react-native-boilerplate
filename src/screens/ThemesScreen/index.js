import { SafeAreaView, View, FlatList } from "react-native";
import globalStyles from '../../constants/globalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../SettingsScreen/slice';
import ItemWithIcon from '../../components/ItemWithIcon';
import { useTranslation } from 'react-i18next';
import { setValueInAsyncStorage } from '../../utils/asyncStorage';
import { useTheme } from '@react-navigation/native';

const ThemesScreen = ({ navigation }) => {

    const { colors } = useTheme();

    const dispatch = useDispatch();
    const { themes } = useSelector(state => state.settings);

    const { i18n } = useTranslation();

    return (
        <SafeAreaView>
            <View style={globalStyles.containerPadding16Style}>
                <FlatList
                    keyExtractor={(item, index) => index}
                    data={themes}
                    renderItem={({ item, index }) =>
                        <ItemWithIcon
                            backgroundColor={colors.card}
                            textColor={colors.text}
                            text={item.name}
                            iconName={item.selected ? 'checkmark-circle' : 'checkmark-circle-outline'}
                            onPress={() => {
                                // change language in i18n
                                // i18n.changeLanguage(item.code);
                                // change theme in store
                                dispatch(setTheme(item.code));
                                // save selected language in AsyncStorage
                                setValueInAsyncStorage('selected_theme', item.code);
                            }} />
                    }
                />
            </View>
        </SafeAreaView>
    );
};

export default ThemesScreen;