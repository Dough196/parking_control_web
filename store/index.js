export const getters = {
  loggedIn(state) {
    return state.auth.loggedIn
  },
  user(state) {
    return state.auth.user
  },
  strategy(state) {
    return state.auth.strategy
  }
}
