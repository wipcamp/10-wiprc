export default () => next => (action) => {
  if (!action.promise) {
    return next(action)
  }
  next({
    ...action,
    type: action.type.PENDING
  })
  const actionPromise = new Promise((resolve, reject) =>
    action.promise
      .then(async querySnapshot => {
        return resolve(
          next({ ...action, type: action.type.RESOLVED, data: querySnapshot })
        )
      }
      )
      .catch(error => {
        return reject(
          next({ ...action, type: action.type.REJECTED, error })
        )
      })
  )
  return actionPromise
}
