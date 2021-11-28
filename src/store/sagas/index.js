import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';
import * as stocksSagas from './stocksSagas';

export function* stocksWatcher() {
    yield takeEvery(actionTypes.FETCH_STOCKS, stocksSagas.fetchStocksSaga);
    yield takeEvery(actionTypes.UPDATE_SELECTED_STOCKS, stocksSagas.fetchSpecificStocksSaga);
    yield takeEvery(actionTypes.UPDATE_START_DATE, stocksSagas.fetchSpecificStocksSaga);
    yield takeEvery(actionTypes.UPDATE_END_DATE, stocksSagas.fetchSpecificStocksSaga);
}