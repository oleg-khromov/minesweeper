import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";

import { GameReducer } from "components/store";

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    gameReducer: GameReducer,
  });

export default rootReducer;
