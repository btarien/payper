import * as api from "../../api";
import { ACTIONS } from "../../constants/actionTypes";

export const getExpenses = () => async (dispatch) => {
    try {
        const {data} = await api.fetchExpenses()
        dispatch({type: ACTIONS.FETCH_EXPENSES, payload: data});
    } catch (error) {
        console.error(error.message)
    }
}

export const createExpense = (expense) => async (dispatch) => {
    try {
        const {data} = await api.createExpense(expense)
        dispatch({type: ACTIONS.CREATE_EXPENSE, payload: data})
    } catch (error) {
        console.error(error)
    }
}