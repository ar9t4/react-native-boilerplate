import { useColorScheme } from "react-native";

export const isDarkMode = () => {
    return useColorScheme() === 'dark';
};

export const getColor = () => {
    return isDarkMode() ? 'gray' : 'white';
};

export const getStatusBarStyle = () => {
    return isDarkMode() ? 'light-content' : 'dark-content';
};