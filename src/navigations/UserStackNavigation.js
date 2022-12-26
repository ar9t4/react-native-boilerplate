import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsersScreen from '../screens/UsersScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator();

const UserStackNavigation = () => {
    const { t } = useTranslation();
    return (
        <Stack.Navigator
            id='UserNavigation'
            initialRouteName='Users'
            screenOptions={({ route, navigation }) => {
                ({ headerShown: false })
            }}>
            <Stack.Screen
                name='Users'
                component={UsersScreen}
                options={{ headerShown: false }} />
            <Stack.Screen
                name='UserDetails'
                component={UserDetailsScreen}
                options={{ headerShown: true, title: t('user_details') }} />
        </Stack.Navigator>
    )
};

export default UserStackNavigation;