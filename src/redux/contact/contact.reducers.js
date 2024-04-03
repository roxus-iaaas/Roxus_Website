import { ContactActionTypes } from "./contact.types";

const INITIAL_STATE = {
  isContactOpen: false,
};

const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContactActionTypes.TOGGLE_OPEN_CONTACT:
      return {
        ...state,
        isContactOpen: !state.isContactOpen,
      };
    default:
      return state;
  }
};

export default contactReducer;
