import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: []
};

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        fetchUsers: (state, action) => { },
        setUsers: (state, action) => {
            state.users = action.payload;
        }
    }
});

export const { fetchUsers, setUsers } = usersSlice.actions;

export default usersSlice.reducer;