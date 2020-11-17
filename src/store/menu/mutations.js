export function toggleLeftDrawerState(state) {
  state.leftDrawerState = !state.leftDrawerState;
}

export function setMenuOption(state, payload) {
  state.menuOption = payload;
}
