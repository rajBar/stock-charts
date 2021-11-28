import * as actionTypes from "../actionTypes/dates";

export const updateStartDate = date => ({
    type: actionTypes.UPDATE_START_DATE,
    payload: { date }
})

export const updateEndDate = date => ({
    type: actionTypes.UPDATE_END_DATE,
    payload: { date }
})
