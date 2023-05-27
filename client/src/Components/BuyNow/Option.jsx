import React from 'react'

const Option = ({ val, index, cngqty, deletitem }) => {
  return (
    <div className='add_remove_select'>
      <select onChange={(e) => {
        let value = e.target.value;
        cngqty(index, value);
      }} name="" id="">
        <option value={val} hidden>{val}</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      <p style={{ "cursor": "pointer" }} onClick={()=>{deletitem(index)}} >Delete</p><span>|</span>
      <p style={{ "cursor": "pointer" }} onClick={()=>{deletitem(index)}} className='forremovemedia'>Save for Later</p><span>|</span>
      <p style={{ "cursor": "pointer" }} className='forremovemedia'>See More like this</p><span>|</span>
    </div>
  )
}

export default Option
