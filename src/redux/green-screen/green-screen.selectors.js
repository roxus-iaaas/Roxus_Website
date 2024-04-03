import { createSelector } from "reselect";

const selectGreenScreen = (state) => state.greenScreen;

export const selectGreenScreenActive = createSelector(
  [selectGreenScreen],
  (greenScreen) => greenScreen.isGreenScreen
);
