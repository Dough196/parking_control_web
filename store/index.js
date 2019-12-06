export const getters = {
  loggedIn(state) {
    return state.auth.loggedIn
  },
  user(state) {
    return state.auth.user
  },
  isAdmin(state) {
    return state.auth.user.rol_id === 1
  },
  isVigilant(state) {
    return state.auth.user.rol_id === 5
  },
  strategy(state) {
    return state.auth.strategy
  }
}
