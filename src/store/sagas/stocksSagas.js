import {call, put, select} from 'redux-saga/effects';
import * as actions from '../actions';
import { selectStartDate, selectEndDate } from "../selectors/dates";
import { selectSelectedStocks } from "../selectors/stocks";

const getStocks = async () => {
    const stocksLink = "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c6ck9eiad3i95gi9dn2g";
    return await fetch(stocksLink)
        .then(res => res.json());
}

export function* fetchStocksSaga() {
    try {
        const stocks = yield call(getStocks)
        yield put(actions.fetchStocksSuccess(stocks));
    } catch (error) {
        yield put(actions.fetchUsersFailure(error));
    }
}

const getSpecificStock = async (startDate, endDate, symbol) => {
    const stockLink = `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=1&from=${startDate}&to=${endDate}&token=c6ck9eiad3i95gi9dn2g`
    return await fetch(stockLink)
        .then(res => res.json());
}

export function* fetchSpecificStocksSaga() {
    try {
        const startDate = yield select(selectStartDate);
        const endDate = yield select(selectEndDate);
        const allStocks = yield select(selectSelectedStocks);
        const chartData = [];
        for(let i = 0; i < allStocks.length; i++) {
            const currentStock = yield call(getSpecificStock, startDate, endDate, allStocks[i]);
            chartData.push(currentStock);
        }
        yield put(actions.addSelectedStockData(chartData));
    } catch (error) {
        console.log(error);
    }
}