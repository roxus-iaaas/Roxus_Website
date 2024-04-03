import { MenuActionTypes } from './menu.types';

const INITIAL_STATE = {
  isMenuOpen: false,
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MenuActionTypes.TOGGLE_OPEN_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    default:
      return state;
  }
};

export default menuReducer;
