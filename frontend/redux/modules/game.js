import actionCreator from '../../libs/actionCreator'
import { getOne, getAll } from '../../libs/firebaseHelper'
import { resolve } from 'uri-js'
import { reject } from 'any-promise'

const gameAction = actionCreator('game')

// const SET_HELLO = gameAction('SET_HELLO', true)
// const GET_HELLO = gameAction('GET_HELLO', true)

const SET_FIELD = gameAction('SET_FIELD')
const GET_FLAVOR = gameAction('GET_FLAVOR', true)
const GET_ALL_QUESTION = gameAction('GET_ALL_QUESTION', true)
const GET_ALL_HINT = gameAction('GET_ALL_HINT', true)

const RANDOM_QUEST = gameAction('RANDOM_QUEST')
const RANDOM_HINT = gameAction('RANDOM_HINT')

let initialState = {
  loading: false,
  step: 1,
  isClick: true,
  index: 0,
  key: '',
  flavorId: '',
  flavor: '',

  score: 0,

  firstQuest: true,
  questions: [],
  question: [],
  delay: 2500,

  hint: [],
  showHint: [],
  hintName: '',
  qrResult: '',

  error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FLAVOR.PENDING:
      return {
        ...state,
        loading: true,
        key: ''
      }
    case GET_FLAVOR.RESOLVED:
      window && window.localStorage.setItem('flavorName', action.data[0].flavorName)
      window && window.localStorage.setItem('flavorId', action.data[0].flavorId)
      return {
        ...state,
        loading: false,
        step: 2,
        flavorId: action.data[0].flavorId,
        flavor: action.data[0].flavorName,
        firstQuest: action.data[0].firstQuest
      }
    case GET_FLAVOR.REJECTED:
      return {
        ...state,
        loading: false,
        error: 'Cant Connection Firebase'
      }
    case GET_ALL_QUESTION.PENDING:
      return {
        ...state,
        loading: true,
        key: ''
      }
    case GET_ALL_QUESTION.RESOLVED:
      window && window.localStorage.setItem('questions', JSON.stringify(action.data))
      console.log(action.data)
      return {
        ...state,
        loading: false,
        question: action.data
      }
    case GET_ALL_QUESTION.REJECTED:
      return {
        ...state,
        loading: false,
        error: 'Cant Connection Firebase'
      }
    case GET_ALL_HINT.PENDING:
      return {
        ...state,
        loading: true,
        key: ''
      }
    case GET_ALL_HINT.RESOLVED:
      window && window.localStorage.setItem('hints', JSON.stringify(action.data))
      return {
        ...state,
        loading: false,
        hint: action.data
      }
    case GET_ALL_HINT.REJECTED:
      return {
        ...state,
        loading: false,
        error: 'Cant Connection Firebase'
      }
    case SET_FIELD:
      return {
        ...state,
        [action.field]: action.value
      }
    case RANDOM_QUEST:
      return {
        ...state,
        [action.field]: action.value
      }
    case RANDOM_HINT:
      return {
        ...state,
        [action.field]: action.value
      }
    default: return state
  }
}

export const actions = {
  getFlavorByFlavorCode: (e, flavorCode) => {
    e && e.preventDefault()
    window && window.localStorage.setItem('flavorKey', flavorCode)
    return ({
      type: GET_FLAVOR,
      promise: getOne(`flavors`, `flavorCode`, flavorCode)
    })
  },
  randomQuestion: (questions, setField) => {
    if (questions.length > 0) {
      const index = Math.floor((Math.random() * questions.length))
      setField('index', index)
      questions.splice(index, 1)
      setField('questions', questions)
      window && window.localStorage.setItem('questions', questions)
    } else {
      setField('step', 5)
    }
    return ({
      type: GET_ALL_HINT,
      promise: new Promise((resolve, reject) => { return null })
    })
  },
  randomHint: (hintAll, setField, showHint) => {
    window && window.localStorage.setItem('hints', JSON.stringify(hintAll))
    let hintIndex = showHint
    if (hintAll.length < 3) {
      hintAll.map((data, i) => hintIndex.push(i))
    } else {
      let index = Math.floor((Math.random() * hintAll.length))
      hintIndex.push(hintAll[index])
      hintAll.splice(index, 1)
      index = Math.floor((Math.random() * hintAll.length))
      hintIndex.push(hintAll[index])
      hintAll.splice(index, 1)
      index = Math.floor((Math.random() * hintAll.length))
      hintIndex.push(hintAll[index])
      hintAll.splice(index, 1)
    }
    setField('showHint', hintIndex)
    setField('hint', hintAll)
    window && window.localStorage.setItem('hintIndex', JSON.stringify(hintIndex))
    return ({
      type: GET_ALL_HINT,
      // promise: null
      promise: new Promise((resolve, reject) => { return null })
    })
  },
  getAllQuestion: () => {
    return ({
      type: GET_ALL_QUESTION,
      promise: getAll(`questions`)
    })
  },
  getAllHint: () => {
    return ({
      type: GET_ALL_HINT,
      promise: getAll(`hints`)
    })
  },
  setField: (field, value) => ({
    type: SET_FIELD,
    field,
    value
  })
}
