import { ACTIONS } from "../actions";

export const questions = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };
    case ACTIONS.RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ACTIONS.RECEIVE_SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };
    case ACTIONS.RECEIVE_SAVE_QUESTION_ANSWER: {
      const { qid, answer, authedUser } = action.answer;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      };
    }
    default:
      return state;
  }
};
