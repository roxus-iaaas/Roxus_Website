import { combineReducers } from "redux";

import menuReducer from "./menu/menu.reducers";
import contactReducer from "./contact/contact.reducers";
import greenScreenReducer from "./green-screen/green-screen.reducers";

const rootReducer = combineReducers({
  menu: menuReducer,
  contact: contactReducer,
  greenScreen: greenScreenReducer,
});

export default rootReducer;
