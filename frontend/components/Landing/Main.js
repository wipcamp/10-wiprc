import React from 'react'
import { MinHeight } from '../Core/layout'

const Landing = ({ setField, getFlavorByFlavorCode, game: { key, error } }) => (
  <div className='container'>
    <div className='row'>
      <MinHeight className='col-12 d-flex justify-content-center align-items-center'>
        <form className='form-group col-12 text-center' onSubmit={(e) => getFlavorByFlavorCode(e, key)} action='/'>
          <h1>กรุณาใส่รหัส</h1>
          <input className='form-control' value={key} onChange={(e) => setField('key', e.target.value)} /> <br />
          <button className='btn btn-primary btn-lg' type='submit' >เล่นเลย !</button>
          {error && <div className="mt-5 alert alert-danger" role="alert">
            <h5>{error}</h5>
          </div>}

        </form>
      </MinHeight>
    </div>
  </div>
)

export default Landing
