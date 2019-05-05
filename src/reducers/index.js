import { combineReducers } from "redux";
import { user } from "./user";
import { users } from "./users";
import { questions } from "./questions";
import { loading } from "./loading";

export default combineReducers({ loading, user, users, questions });
