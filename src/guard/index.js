import { Auth } from 'aws-amplify'

const mustBeUser = async (to, from, next) => {
  const currentUser = await Auth.currentUserInfo()
  if (currentUser) {
    return next({
      path: '/app',
      params: { nextUrl: to.fullPath }
    })
  }
  return next()
}

const mustBeSignIn = async (to, from, next) => {
  try {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      const currentUser = await Auth.currentUserInfo()
      if (currentUser) {
        return next()
      }
      return next({
        path: '/auth',
        params: { nextUrl: to.fullPath }
      })
    }

    return next()
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

export { mustBeUser, mustBeSignIn }
