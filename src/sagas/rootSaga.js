import { all } from 'redux-saga/effects';

import quotesSaga from './quotesSaga';

export default function* rootSaga() {
    yield all([
        quotesSaga()
    ])
}