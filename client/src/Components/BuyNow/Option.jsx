import React from 'react'

const Option = () => {
  return (
    <div className='add_remove_select'>
      <select name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p style={{"cursor":"pointer"}}>Delete</p><span>|</span>
      <p style={{"cursor":"pointer"}} className='forremovemedia'>Save for Later</p><span>|</span>
      <p style={{"cursor":"pointer"}} className='forremovemedia'>See More like this</p><span>|</span>
    </div>
  )
}

export default Option
