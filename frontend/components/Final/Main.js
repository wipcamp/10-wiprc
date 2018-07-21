import React from 'react'
import { MinHeight } from '../Core/layout'

const Final = ({ game: { score } }) => (
  <div className='container'>
    <div className="row">
      <MinHeight className="col-12 d-flex justify-content-center align-items-center flex-column">
        <h1>
        เสร็จสิ้นการประลอง
        </h1>
        <br />
        <h1 style={{ fontSize: '6em' }}>
          { score }
        </h1>
      </MinHeight>
    </div>
  </div>
)

export default Final
