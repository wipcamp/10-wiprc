import React from 'react'
import { getAll } from '../../libs/firebaseHelper'

export default class Dashboard extends React.Component {
  state = {
    data: []
  }
  async componentDidMount () {
    let flavors = await getAll(`flavors`)
      .once('value')
      .then((querySnapshot) => {
        return querySnapshot.val()
      })
      .catch((error) => {
        console.log('Error getting documents: ', error)
      })
    console.log(flavors)
  }
  render () {
    return (
      <div className='container'>
        <div className="row">
          <div className="col-12">
            <h1>Flavors</h1>
            <hr />

          </div>
        </div>
      </div>
    )
  }
}
