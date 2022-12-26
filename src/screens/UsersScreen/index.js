import { SafeAreaView, View, Text, FlatList } from "react-native";
import globalStyles from '../../constants/globalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { fetchUsers } from './slice';
import UserCard from '../../components/UserCard';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { useTheme } from "@react-navigation/native";

const UsersScreen = ({ navigation }) => {

    const { colors } = useTheme();

    const dispatch = useDispatch();
    const { users } = useSelector(state => state.users);

    const { t } = useTranslation();

    useEffect(() => {
        if (users.length === 0) {
            dispatch(fetchUsers(6));
        }
    });

    return (
        <SafeAreaView>
            <View style={globalStyles.containerPadding16Style}>
                <View style={globalStyles.headerStyle}>
                    <Icon name='people' size={24} color={colors.text} />
                    <Text style={{ ...globalStyles.headerTextStyle, color: colors.text }}>{t('users')}</Text>
                </View>
                <FlatList
                    keyExtractor={(item, index) => index}
                    data={users}
                    renderItem={({ item, index }) =>
                        <UserCard
                            backgroundColor={colors.card}
                            textColor={colors.text}
                            props={item}
                            onPress={() => {
                                navigation.navigate('UserDetails', {
                                    user: item
                                });
                            }} />
                    }
                />
            </View>
        </SafeAreaView>
    );
};

export default UsersScreen;