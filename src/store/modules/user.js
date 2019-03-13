import axios from 'axios';

const state =  {
    user: {
        todoTasks: [],
        completeTasks: []
    }
}

const getters = {
    user: state => state.user,
    todoTasks: state => state.user.todoTasks,
    completeTasks: state => state.user.completeTasks,
}

const mutations =  {
    setUser: (state, payload) => {
        state.user = { ...state.user, ...payload };
    },
    addTask: (state, task) => {
        state.user = {
            ...state.user,
            todoTasks: [...state.user.todoTasks, task]
        }
    },
    completeTask: (state, task) => {
        state.user = {
            ...state.user,
            todoTasks: state.user.todoTasks.filter(e => e.id !== task.id),
            completeTasks: [...state.user.completeTasks, task]
        }
    }
}

const actions = {
    getUser: ({ commit }) => {
        axios.get('https://jsonplaceholder.typicode.com/users/9')
        .then(({ data }) => commit('setUser', data))
        .catch(err => console.log(err))
    },
    pickupTask: ({ commit }, task) => {
        commit('addTask', task)
    },
    doneTask: ({ commit }, task) => {
        commit('completeTask', task)
    }
}

export default { state, getters, mutations, actions }