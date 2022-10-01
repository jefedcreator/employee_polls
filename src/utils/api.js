import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from "./_DATA";

export function getInitialData() {
    return Promise.all([_getQuestions(), _getUsers()]).then(
        ([questions,users]) => ({
            questions,
            users
        }))    
}

export function saveQuestion(optionOneText, optionTwoText, author) {
    return _saveQuestion({optionOneText, optionTwoText, author});
}

export function saveQuestionAnswer(authedUser, qid, voteId) {
    return _saveQuestionAnswer(
        authedUser,
        qid,
        voteId
    );
}
