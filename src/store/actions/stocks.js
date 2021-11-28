import * as actionTypes from "../actionTypes/stocks";

export const fetchAllStocks = () => ({
    type: actionTypes.FETCH_STOCKS,
});

export const fetchStocksSuccess = stocks => ({
    type: actionTypes.FETCH_STOCKS_SUCCESS,
    payload: { stocks },
});

export const fetchUsersFailure = error => ({
    type: actionTypes.FETCH_STOCKS_FAILURE,
    payload: { error },
});

export const updateSelectedStocks = stocks => ({
    type: actionTypes.UPDATE_SELECTED_STOCKS,
    payload: { stocks },
})

export const addSelectedStockData = data => ({
    type: actionTypes.ADD_SELECTED_STOCK_DATE,
    payload: { data },
})