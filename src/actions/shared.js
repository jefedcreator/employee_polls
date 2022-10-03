import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { getInitialData } from '../utils/api'
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
    return(dispatch) => {
        dispatch(showLoading())
        return getInitialData().then(({questions, users}) =>{
            dispatch(receiveQuestions(questions))
            dispatch(receiveUsers(users))
            dispatch(hideLoading())
        })
    }
}
