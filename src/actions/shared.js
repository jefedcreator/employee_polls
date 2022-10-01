import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { getInitialData } from '../utils/api'
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
    return(dispatch) => {
        dispatch(showLoading())
        return getInitialData().then(({questions, users}) =>{
            dispatch(receiveQuestions(questions))
            dispatch(receiveUsers(users))
            // dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
        })
    }
}
