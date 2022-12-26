import { useColorScheme } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './src/store/store';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Loader from './src/components/Loader';
import HomeScreen from './src/navigations/HomeBottomNavigation';
import i18n from './src/i18n/i18n';
import { getValueFromAsyncStorage } from './src/utils/asyncStorage';
import { setTheme, setLanguage } from './src/screens/SettingsScreen/slice';

const LightModeTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary: '#1D1D1D',
    background: '#E9EEF1',
    card: '#FFFFFF',
    text: '#1D1D1D',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const DarkModeTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    primary: '#FFFFFF',
    background: '#1D1D1D',
    card: '#343434',
    text: '#FFFFFF',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const AppRoot = () => {

  const colorScheme = useColorScheme();

  const dispatch = useDispatch();

  useEffect(() => {
    // get and set user selected theme in store
    async function setSelectedTheme() {
      const selectedTheme = await getValueFromAsyncStorage('selected_theme');
      dispatch(setTheme(selectedTheme));
    }
    // get and set user selected language in store
    async function setSelectedLanguage() {
      const selectedLanguage = await getValueFromAsyncStorage('selected_language');
      dispatch(setLanguage(selectedLanguage));
    }
    setSelectedTheme();
    setSelectedLanguage();
  });

  const { themes } = useSelector(state => state.settings);
  const selectedTheme = themes.find((item) => item.selected === true);
  let themeToSet = selectedTheme.code;
  if (themeToSet === 'system_default') {
    themeToSet = colorScheme;
  }

  const { isLoading } = useSelector(state => state.global);

  return (
    <NavigationContainer theme={themeToSet === 'dark' ? DarkModeTheme : LightModeTheme}>
      <Loader visible={isLoading} />
      <HomeScreen />
    </NavigationContainer>
  );
};

// initialize i18n service
const initI18n = i18n;

const App = () => {
  return (
    <Provider store={store}>
      <AppRoot />
    </Provider>
  );
};

export default App;