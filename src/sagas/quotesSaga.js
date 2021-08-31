import { all, call, takeEvery, put } from 'redux-saga/effects';
import { getSingleQuote } from '../apis/quotes';
import { setQuote } from '../actions/quoteActions';

function* _fetchQuotes() {
    try {
        const response = yield call(getSingleQuote);
        console.log(response);
        yield put(setQuote(response))
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
