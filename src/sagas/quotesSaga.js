import { all, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* _fetchQuotes() {
    try {
        const url = `https://api.quotable.io/random`;
        const response = yield call(() => axios.get(url));
        console.log(response);
    }
    catch (e) {
        console.log(e);
    }
}

export function* fetchQuotes() {
    yield takeEvery('INCREMENT', _fetchQuotes);
}

export default function* quotesSaga() {
    yield all([
        fetchQuotes(),
    ])
}
