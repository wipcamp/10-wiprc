import firebase from 'firebase'
import config from '../credentials/client.json'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase

export const db = firebase.database()

export const getAll = (ref, attr) => {
  if (attr) {
    return db.ref(`${ref}/${attr}`).once('value').then(async (snapshot) => {
      let data = await snapshot.val()
      return data
    })
  } else {
    return db.ref(`${ref}`).once('value').then(async (snapshot) => {
      let data = await snapshot.val()
      return await data.filter(d => {
        if (d) return d
      })
    })
  }
}
export const getOne = async (ref, attr, whereCause) => {
  return db.ref(`${ref}`).once('value').then(async (snapshot) => {
    let data = snapshot.val()
    return await data.filter(d => {
      if (d[attr] === whereCause) return d
    })
  })
}

export const insert = (ref, value, doc) => db.ref(`${ref}/${doc}`).set({ ...value })
