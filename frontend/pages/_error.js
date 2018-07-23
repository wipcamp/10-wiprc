import React from 'react'
import ErrorContainer from '../components/Error/Main'

class ErrorPage extends React.Component {
  static getInitialProps ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render () {
    return (
      <ErrorContainer {...this.props} />
    )
  }
}

export default ErrorPage
