import React from 'react'
import { MinHeight } from '../Core/layout'

const Hint = ({ setField, game: { step, hint, hintIndex, showHint } }) => (
  <div className='container'>
    <div className='row'>
      <MinHeight className='col-12'>
        <h1 className='my-3'>
          คำใบ้
        </h1>
        {
          showHint && showHint.map((data, i) => {
            return (
              <button
                key={i}
                className='btn btn-light col-12 btn-lg my-2'
                onClick={() => {
                  setField('hintCode', data.hintCode)
                  setField('step', 4)
                }}
              >
                { data.hintName }
              </button>
            )
          })
        }
      </MinHeight>
    </div>
  </div>
)

export default Hint
