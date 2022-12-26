import { put, takeLatest } from 'redux-saga/effects';
import axios from '../../utils/axios';
import { fetchUsers, setUsers } from './slice';
import { showLoader, hideLoader } from '../../store/globalSlice';

function* fetchUsersData(action) {
    try {
        // show loading
        yield put(showLoader());
        // api call
        const response = yield axios.get('', { params: { results: action.payload } });
        const data = response.data.results;
        console.log('success -> fetchUsersData: ', data);
        yield put(setUsers(data));
        // hide loading
        yield put(hideLoader());
    } catch (error) {
        // hide loading
        yield put(hideLoader());
        console.log('error -> fetchUsersData: ', error);
    }
};

export default function* () {
    yield takeLatest(fetchUsers, fetchUsersData);
};