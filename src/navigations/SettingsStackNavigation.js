import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../screens/SettingsScreen';
import ThemesScreen from '../screens/ThemesScreen';
import LanguagesScreen from '../screens/LanguagesScreen';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator();

const SettingsStackNavigation = () => {
    const {t} = useTranslation();
    return (
        <Stack.Navigator id='SettingsNavigation'
            initialRouteName='Settings'
            screenOptions={({ route, navigation }) => {
                ({ headerShown: false })
            }}>
            <Stack.Screen
                name='Settings'
                component={SettingsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Themes'
                component={ThemesScreen}
                options={{ headerShown: true, title: t('themes') }}
            />
            <Stack.Screen
                name='Languages'
                component={LanguagesScreen}
                options={{ headerShown: true, title: t('languages') }}
            />
        </Stack.Navigator>
    );
};

export default SettingsStackNavigation;