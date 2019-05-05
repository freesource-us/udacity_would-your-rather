import {
  RECEIVE_USER,
  RECEIVE_USERS,
  RECEIVE_SAVE_QUESTION_ANSWER
} from "../actions";

export const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER: {
      const { id, ...user } = action.user;

      return {
        ...state,
        [id]: user
      };
    }
    case RECEIVE_USERS: {
      return {
        ...state,
        ...action.users
      };
    }
    case RECEIVE_SAVE_QUESTION_ANSWER: {
      const { qid, answer, authedUser } = action.answer;

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      };
    }
    default:
      return state;
  }
};
