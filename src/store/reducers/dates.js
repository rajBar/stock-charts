import * as actionTypes from '../actionTypes/dates';

const currentDate = new Date();

const initialState = {
    startDate: Math.round((currentDate.getTime() / 1000) - 604800),
    endDate: Math.round(currentDate.getTime() / 1000),
};

const updateStartDate = (state, action) => ({
    ...state,
    startDate: action.payload.date,
});

const updateEndDate = (state, action) => ({
    ...state,
    endDate: action.payload.date,
});


export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_START_DATE:
            return updateStartDate(state, action);
        case actionTypes.UPDATE_END_DATE:
            return updateEndDate(state, action);
        default:
            return state;
    }
};