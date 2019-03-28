import Vue from 'vue'
import { tasksApi } from '@/api'
import { TASK_STATUS } from '@/utils'

const initialState = () => {
  return {
    entities: {},
    ids: []
  }
}

// initial state
const state = initialState()

// getters
const getters = {
  taskIds: state => {
    return state.ids
  },
  tasks: (state, getters) => {
    return getters.taskIds.map(id => state.entities[id])
  },
  taskById: state => id => {
    return state.entities[id]
  },

  newTasks: (_, getters) => {
    return getters.tasks.filter(task => {
      return task.status === TASK_STATUS.NEW
    })
  },
  tasksByWorkerId: (_, getters) => workerId => {
    return getters.tasks.filter(task => {
      return task.workerId === workerId
    })
  },

  // TODO it shoudl be filder by worker ID again
  todoTasks: (_, getters) => {
    return getters.tasks.filter(task => {
      return task.status === TASK_STATUS.IN_PROGRESS
    })
  },

  completedTasks: (_, getters) => {
    return getters.tasks.filter(task => {
      return task.status === TASK_STATUS.FINISHED
    })
  },

  // completedTasks: (_, getters) => workerId => {
  //   return getters.tasksByWorkerId(workerId).filter(task => {
  //     return task.status === '2'
  //   })
  // },

  seachByMessage: (_, getters) => message => {
    const re = new RegExp(message, 'i')
    return getters.tasks.filter(task => {
      return task.message.match(re)
    })
  }
}

// actions
const actions = {
  /**
   * get all task has status with specify status
   * @param {*} param
   */
  get ({ commit }, { type }) {
    let status = TASK_STATUS.NEW
    if (type === 'todo') status = TASK_STATUS.IN_PROGRESS
    if (type === 'completed') status = TASK_STATUS.FINISHED

    return tasksApi
      .get({
        status
      })
      .then(tasks => {
        return commit('set', { payload: tasks })
      })
  },

  updateStatus ({ commit }, task) {
    return tasksApi.updateTask(task).then(rs => {
      return commit('set', { payload: rs })
    })
  }
}

// mutations
const mutations = {
  set (state, { payload, meta }) {
    if (meta && meta.resetStore) {
      // reset global state
      state = initialState()
    }
    if (Array.isArray(payload)) {
      let newIds = [...state.ids]
      let newEntities = Object.assign({}, state.entities)
      for (let value of payload) {
        newIds = [...newIds, value.id]
        newEntities[value.id] = Object.assign({}, newEntities[value.id], value)
      }

      Vue.set(state, 'ids', Array.from(new Set(newIds)))
      Vue.set(state, 'entities', Object.assign({}, newEntities))
    } else {
      Vue.set(state, 'ids', Array.from(new Set([...state.ids, payload.id])))
      Vue.set(
        state,
        'entities',
        Object.assign({}, state.entities, {
          [payload.id]: Object.assign({}, state.entities[payload.id], payload)
        })
      )
    }
  },

  deleteById (state, { id }) {
    throw new Error('not yet implemented')
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
