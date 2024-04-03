import { GreenScreenActionTypes } from "./green-screen.types";
import moment from "moment";

const INITIAL_STATE = {
  isGreenScreen: false,
};

const greenScreenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GreenScreenActionTypes.TOGGLE_GREEN_SCREEN:
      let openGreenScreen = false;
      let previousDate = localStorage.getItem("greenScreenDate");
      if (!previousDate) {
        localStorage.setItem(
          "greenScreenDate",
          moment().format("DD/MM/YYYY HH:mm:ss")
        );
        openGreenScreen = true;
      } else {
        const now = moment();
        const dayDiff = now.diff(
          moment(previousDate, "DD/MM/YYYY HH:mm:ss"),
          "days",
          true
        );
        if (dayDiff >= 1) {
          localStorage.setItem(
            "greenScreenDate",
            moment().format("DD/MM/YYYY HH:mm:ss")
          );
          openGreenScreen = true;
        }
      }
      return {
        ...state,
        isGreenScreen: openGreenScreen,
      };
    default:
      return state;
  }
};

export default greenScreenReducer;
