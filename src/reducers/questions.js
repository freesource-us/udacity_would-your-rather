import {
  RECEIVE_QUESTION,
  RECEIVE_QUESTIONS,
  RECEIVE_SAVE_QUESTION,
  RECEIVE_SAVE_QUESTION_ANSWER
} from "../actions/questions";

export const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case RECEIVE_SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };
    case RECEIVE_SAVE_QUESTION_ANSWER: {
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
