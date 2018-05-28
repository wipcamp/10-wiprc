import actionCreator from '../../libs/actionCreator'
import api from '../../libs/api'

const gameAction = actionCreator('game')

const SET_HELLO = gameAction('SET_HELLO', true)
const GET_HELLO = gameAction('GET_HELLO', true)
const SET_FIELD = gameAction('SET_FIELD')

let initialState = {
  loading: false,
  key: '',
  step: 1,
  count: 1,
  score: 0,
  flavor: '',
  question: '',
  answer: '',
  qrResult: 'Result',
  error: 'Error',
  hint: []
  // ,
  // error: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HELLO.PENDING:
      return {
        ...state,
        loading: true
      }
    case SET_HELLO.RESOLVED:
      return {
        ...state,
        loading: false,
        text: action.payload
      }
    case GET_HELLO.PENDING:
      return {
        ...state,
        loading: true
      }
    case GET_HELLO.RESOLVED:
      return {
        ...state,
        loading: false,
        data: action.data
      }
    case GET_HELLO.REJECTED:
      return {
        ...state,
        loading: false,
        err: 'Cant Connection API'
      }
    case SET_FIELD:
      return {
        ...state,
        [action.field]: action.value
      }
    default: return state
  }
}

export const actions = {
  setHello: (text) => ({
    type: SET_HELLO
    // promise: api.post('/hello/', { text }).then(resp => resp.data.text)
  }),
  getHello: () => ({
    type: GET_HELLO,
    promise: api.get('/hello/db')
  }),
  setField: (field, value) => ({
    type: SET_FIELD,
    field,
    value
  })
}
