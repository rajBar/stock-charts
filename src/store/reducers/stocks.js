import * as actionTypes from '../actionTypes/stocks';

const initialState = {
    stocks: [],
    selectedStocks: ["", "", ""],
    selectedStockData: [],
    error: null,
};

const fetchStocksSuccess = (state, action) => ({
    ...state,
    stocks: action.payload.stocks,
});

const fetchStocksFailure = (state, action) => ({
    ...state,
    error: action.payload.error,
});

const updateSelectedStocks = (state, action) => ({
    ...state,
    selectedStocks: action.payload.stocks,
});

const addSelectedStockData = (state, action) => ({
    ...state,
    selectedStockData: action.payload.data,
});

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_STOCKS_SUCCESS:
            return fetchStocksSuccess(state, action);
        case actionTypes.FETCH_STOCKS_FAILURE:
            return fetchStocksFailure(state, action);
        case actionTypes.UPDATE_SELECTED_STOCKS:
            return updateSelectedStocks(state, action);
        case actionTypes.ADD_SELECTED_STOCK_DATE:
            return addSelectedStockData(state, action);
        default:
            return state;
    }
};