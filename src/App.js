// import './App.css';
import ExpenseForm from "./Components/ExpenseForm";
import Form from "./Components/Form";
import { useSelector } from "react-redux";
import IncomeSec from "./Components/IncomeSec";
import ExpenseSec from "./Components/ExpenseSec";
import { Routes, Route } from "react-router-dom";
function App() {
  const { balance } = useSelector((store) => store.expenseTracker);

  return (
    <div className="App">
      <h1 className="text-3xl text-center font-bold">Expense Tracker</h1>
      <h1
        className='text-3xl text-center p-3 font-bold'
      >
        Your current balace is: Rs.
        <span
          className={`text-3xl text-center p-2 font-bold ${
            balance < 0 ? "text-red-500" : balance > 0 ? "text-green-300" : 'text-gray-500'
          } `}
        >{balance}
        </span>
      </h1>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/expenseForm" element={<ExpenseForm />} />
      </Routes>
      <div className=" mx-auto flex justify-evenly w-[80%]">
        <IncomeSec />
        <ExpenseSec />
      </div>
    </div>
  );
}

export default App;
