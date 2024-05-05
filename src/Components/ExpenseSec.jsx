import React from 'react'
import { useSelector } from 'react-redux'

function ExpenseSec() {
  const State=useSelector((store)=>store.expenseTracker)
  return (
    <div className='border w-[400px]'>
      <h1 className='text-xl text-center font-bold'>Expenses</h1>
      {
        
        State.expense.map((ele,i)=>{
          return(
          <div key={i} className='text-center'>
          <p  >{ele.category}</p>
          <p className='font-bold' >Rs. {ele.amount}</p>
          </div>
          )
        })

      }
    </div>
  )
}

export default ExpenseSec