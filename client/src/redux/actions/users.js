import * as api from "../../api";
import { ACTIONS } from "../../constants/actionTypes";

export const getUsers = () => async (dispatch) => {
    try {
        const {data} = await api.fetchUsers()
        dispatch({type: ACTIONS.FETCH_USERS, payload: data});
    } catch (error) {
        console.error(error.message)
    }
}