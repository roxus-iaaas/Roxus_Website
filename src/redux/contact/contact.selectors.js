import { createSelector } from "reselect";

const selectContact = (state) => state.contact;

export const selectContactOpen = createSelector(
  [selectContact],
  (contact) => contact.isContactOpen
);
