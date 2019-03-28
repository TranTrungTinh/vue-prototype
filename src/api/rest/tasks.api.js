import { API } from 'aws-amplify'

export default {
  get ({ status, workerId }) {
    return new Promise((resolve, reject) => {
      API.get('TDSApi', '/tasks', {
        queryStringParameters: {
          status: status || '0',
          ...(workerId && { workerId })
        }
      }).then(rs => {
        const { status, results } = rs
        if (status) {
          resolve(JSON.parse(results))
        } else {
          reject(new Error('Load data failed, please try again later.'))
        }
      })
    })
  },

  updateTask (task) {
    const { id, status } = task

    return new Promise((resolve, reject) => {
      API.put('TDSApi', `/tasks/${id}`, {
        body: {
          id,
          status
        }
      }).then(rs => {
        const { status, results } = rs
        if (status) {
          const newTask = JSON.parse(results)
          resolve(Object.assign(task, newTask))
        } else {
          reject(new Error('Load data failed, please try again later.'))
        }
      })
    })
  }
}
