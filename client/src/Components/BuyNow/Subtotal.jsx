import React from 'react'

const Subtotal = ({items}) => {
  let totalVal = 0;
  items.data.map((e)=>{
    totalVal += (e.qty * e.product.price.cost);
  })
  return (
    <div className='sub_item'>
      <h3>Subtotal ({items.totalQty} items): <strong style={{"fontWeight":"700", "color":"#111"}}>₹{totalVal}.00</strong> </h3>
    </div>
  )
}

export default Subtotal
