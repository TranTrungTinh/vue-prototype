const state =  {
    filter: {
        title: '',
        sort: ''
    }
}

const getters = {
    filter: state => state.filter
}

const mutations =  {
    updateFilter: (state, payload) => {
        state.filter = { ...state.filter, ...payload }
    }
}

const actions = {
    searchTitle: ({ commit }, title) => {
        commit('updateFilter', { title });
    },
    sortSelected: ({ commit }, sort) => {
        commit('updateFilter', { sort });
    }
}

export default { state, getters, mutations, actions }