import { authApi } from '@/api'
const initialState = () => {
  return {
    userId: null,
    groups: null,
    user: null
  }
}

// initial state
const state = initialState()

// getters
const getters = {
  authState: state => {
    return state
  },
  userId: state => {
    return state.userId
  },
  currentUser: (_state, getters) => {
    return getters.authState.user
  }
}

// actions
const actions = {
  logout ({ commit }, payload = {}) {
    // dont need commit, it will commit automactic at app level
    return authApi.logout()
  }
}

// mutations
const mutations = {
  set (state, payload) {
    Object.assign(state, payload)
  },
  reset (state) {
    Object.assign(state, initialState())
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
