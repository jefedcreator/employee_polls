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

export function addAnswerUser(authedUser, qid, voteId) {
    return {
        type: ADD_ANSWER_USER,
        authedUser,
        qid,
        answer : voteId === 1 ? "optionOne" : "optionTwo",
    };
}


export function addQuestionUser({author, id}) {
    return {
        type: ADD_QUESTION_USER,
        author,
        qid: id,
    };
}
