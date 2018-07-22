import axios from 'axios'

function createApiInstance (headers) {
  return axios.create({
    baseURL: '/api',
    headers
  })
}

function handleResponse (response) {
  if (response.data) {
    return response
  }
  return Promise.reject(response.error)
}

function catchError (e) {
  return Promise.reject(e.response)
}

export default {
  get: (path, headers = {}) => (
    createApiInstance(headers)
      .get(path)
      .then(handleResponse)
      .catch(catchError)
  ),
  post: (path, body = {}, headers = {}) => (
    createApiInstance()
      .request({
        url: path,
        method: 'POST',
        headers,
        data: body
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  put: (path, body = {}) => (
    createApiInstance()
      .request({
        url: path,
        method: 'PUT',
        data: body
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  delete: (path, body = {}) => (
    createApiInstance()
      .request({
        url: path,
        method: 'DELETE',
        data: body
      })
      .then(handleResponse)
      .catch(catchError)
  )
}
