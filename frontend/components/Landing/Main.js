import React from 'react'

const Landing = ({ setField }) => (
  <div>
    <form onSubmit={() => setField('step', 2)} action='/'>
      Enter Key
      <input value={100} />
      <button type='button'>Confirm</button>
    </form>
  </div>
)

export default Landing
