
import { useSelector } from 'react-redux'

function IncomeSec() {
  
  const State=useSelector((store)=>store.expenseTracker)

  return (
    <div className='border w-[400px]'>
      <h1 className='text-xl text-center font-bold'>Income</h1>
      {
        State.income.map((ele,i)=>{
          return(
            <div key={i} className='border bg-gray-100 rounded mx-3 my-2 text-center'>
            <p  >{ele.category}</p>
            <p className='font-bold text-green-500' >Rs. {ele.amount}</p>
            </div>
          )
        })

      }
    </div>
  )
}

export default IncomeSec