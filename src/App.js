// import './App.css';
import ExpenseForm from './Components/ExpenseForm';
import Form from './Components/Form';
import { useSelector } from 'react-redux';
import IncomeSec from './Components/IncomeSec';
import ExpenseSec from './Components/ExpenseSec';
import { Routes , Route } from 'react-router-dom';
function App() {

  const State=useSelector((store)=>store.expenseTracker)
  
  return (
    <div className="App">
      <h1 className='text-3xl text-center font-bold'>Expense Tracker</h1>
      <h1 className='text-3xl text-center p-3 font-bold'>Your current balace is: Rs. {State.balance}</h1>
      <Routes>
        <Route path='/' element={<Form/>} />
        <Route path='/expenseForm' element={<ExpenseForm/>} />
      </Routes>
      <div className='border mx-auto flex justify-evenly w-[80%]'>
        <IncomeSec/>
        <ExpenseSec/>
      </div>
    </div>
  );
}

export default App;
