import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    themes: [
        { id: 1, name: 'System Default', code: 'system_default', selected: true },
        { id: 2, name: 'Light Mode', code: 'light', selected: false },
        { id: 3, name: 'Dark Mode', code: 'dark', selected: false }
    ],
    languages: [
        { id: 1, name: 'System Default', code: 'system_default', selected: true },
        { id: 2, name: 'English', code: 'en', selected: false },
        { id: 3, name: 'Netherlands (Dutch)', code: 'nl', selected: false }
    ]
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState: initialState,
    reducers: {
        setTheme: (state, action) => {
            let payload = action.payload;
            if (!payload) {
                payload = 'system_default';
            }
            let themes = state.themes;
            themes.forEach((item) => {
                item.selected = item.code === payload;
            });
        },
        setLanguage: (state, action) => {
            let payload = action.payload;
            if (!payload) {
                payload = 'system_default';
            }
            let languages = state.languages;
            languages.forEach((item) => {
                item.selected = item.code === payload;
            });
        }
    }
}
);

export const { setTheme, setLanguage } = settingsSlice.actions;

export default settingsSlice.reducer;