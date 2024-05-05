import React , {useState} from 'react'
import { useSelector } from 'react-redux'

function IncomeSec() {
  const State=useSelector((store)=>store.expenseTracker)

  return (
    <div className='border w-[400px]'>
      <h1 className='text-xl text-center font-bold'>Income</h1>
      {
        
        State.income.map((ele,i)=>{
          return(
            <div key={i} className='text-center'>
            <p  >{ele.category} - {ele.id}</p>
            <p className='font-bold' >Rs. {ele.amount}</p>
            </div>
          )
        })

      }
    </div>
  )
}

export default IncomeSec