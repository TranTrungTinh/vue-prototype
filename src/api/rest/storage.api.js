import { Storage } from 'aws-amplify'

export default {
  get (attachment) {
    const { key, level, userId } = attachment
    return new Promise((resolve, reject) => {
      Storage.get(key, {
        level,
        identityId: userId,
        download: true
      })
        .then(rs => {
          resolve(rs)
        })
        .catch(() => reject(new Error('Cannot download file')))
    })
  },

  upload (key, file, config) {
    return new Promise((resolve, reject) => {
      Storage.put(key, file, config)
        .then(res => {
          resolve(res)
        })
        .catch(err => reject(err))
    })
  }
}
