import { ADD_QUESTIONS, RECEIVE_QUESTIONS,  VOTE_QUESTIONS} from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case ADD_QUESTIONS:
            return{
                ...state,
                [action.question.id] : action.question
            }

        case VOTE_QUESTIONS:
            console.log("qid option", action.voteId);
            return {
                ...state,
                [action.qid] : {
                    ...state[action.qid],
                    optionOne: action.voteId === 1 ?
                    {
                        ...state[action.qid].optionOne,
                        votes: state[action.qid].optionOne.votes.concat([action.authedUser]),
                    } : {
                        ...state[action.qid].optionOne
                    },
                    optionTwo: action.voteId === 2 ?
                    { 
                        ...state[action.qid].optionTwo,
                        votes: state[action.qid].optionTwo.votes.concat([action.authedUser]),
                    } : {
                        ...state[action.qid].optionTwo
                    }

                }

                
            }

        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            }
        
        default:
            return state;
    }
}