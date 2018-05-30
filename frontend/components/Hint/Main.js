import React from 'react'
import { MinHeight } from '../Core/layout'

const Hint = ({ setField, game: { hint, hintIndex } }) => (
  <div className='container'>
    <div className='row'>
      <MinHeight className='col-12'>
        <h1 className='my-3'>
          คำใบ้
        </h1>
        {
          hintIndex && hintIndex.map((data, i) => {
            return (
              <button
                key={i}
                className='btn btn-light col-12 btn-lg my-2'
                onClick={() => {
                  console.log(hint[data])
                  setField('hintCode', hint[data].hintCode)
                  setField('step', 4)
                }}
              >
                { hint[data].hintName }
              </button>
            )
          })
        }
      </MinHeight>
    </div>
  </div>
)

export default Hint
