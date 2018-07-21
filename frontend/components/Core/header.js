import React from 'react'

const Header = ({ flavor, score }) => (
  <div className='mt-4 d-flex flex-row justify-content-between'>
    <h3>รส: {flavor}</h3>
    <h3>คะแนน: {score}</h3>
  </div>
)

export default Header
