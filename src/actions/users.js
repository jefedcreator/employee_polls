import { hideLoading, showLoading } from "react-redux-loading-bar";
import { saveUser } from "../utils/_DATA";
import { setAuthedUser } from "./authedUser";
import { VOTE_QUESTIONS } from "./questions";
import { handleInitialData } from "./shared";


export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER = "ADD_USER";
export const ADD_ANSWER_USER = "ADD_ANSWER_USER";
export const ADD_QUESTION_USER = "ADD_QUESTION_USER";

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }   
}

// export function addUser(user) {
//     return{
//         type: ADD_USER,
//         user
//     }
// }

export function addAnswerUser(authedUser, qid, answer) {
    return {
        type: ADD_ANSWER_USER,
        authedUser,
        qid,
        answer,
    };
}


export function addQuestionUser({author, id}) {
    return {
        type: ADD_QUESTION_USER,
        author,
        qid: id,
    };
}

// export function handleAddUser(user){

//     return (dispatch, getState) =>{
//         const { authedUser } = getState();
//         dispatch(showLoading())
//         dispatch(addUser(user));
//         dispatch(setAuthedUser(user.username))
//         // dispatch(setAuthedUser(user.username))
//         console.log("user is:", user);
//         console.log("details are:", saveUser(user));
//         return saveUser(user).
//         then(
//             // dispatch(handleInitialData()),
//             dispatch(() => hideLoading()),
//             ).catch(e =>{
//             console.warn("Error adding user: ", e);
//             // dispatch(voteQuestions(info));
//             console.log("user:",user);
//             alert("The was an login user in. Try again.")
//         })
//     }
// }