import React, { useState } from "react";
import { addExpense } from "../Actions/Actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { setInp } from '../Actions/Actions';

function ExpenseForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const State = useSelector((store) => store.expenseTracker);

  const [currentInp, set_Inp] = useState({
    type: "",
    amount: "",
    date: "",
    category: "",
  });

  const { type, amount, date, category } = currentInp;

  console.log(currentInp);

    // const {name,value}=e.target
    // State.currentInp={...State.currentInp,[name]:value}
    // const val={[name]:value}
    // setInp(val)
    // console.log(State,'cr')
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    set_Inp({ ...currentInp, [name]: value });
  };

  return (
    <form>
      <div className="grid md:grid-cols-2 md:gap-6">
        <label htmlFor="underline_select" className="sr-only">
          Underline select
        </label>
        <select
          onChange={(e) => {
            e.target.value === "Income" ? navigate("/") : handleChange(e);
          }}
          id="underline_select"
          name="type"
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option className="hidden">Choose Type</option>
          <option className="text-lg" value="Income">
            Income
          </option>
          <option selected className="text-lg" value="Expense">
            Expense
          </option>
        </select>

        <label for="underline_select" className="sr-only">
          Underline select
        </label>
        <select
          onChange={handleChange}
          name="category"
          id="underline_select"
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option className="hidden" selected>
            Choose Category
          </option>
          <option className="text-lg" value="Car">
            Car
          </option>
          <option className="text-lg" value="Bills">
            Bills
          </option>
          <option className="text-lg" value="Deposit">
            Deposit
          </option>
          <option className="text-lg" value="Others">
            Misc.
          </option>
        </select>
      </div>
      <div className="mt-5 grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            onChange={handleChange}
            type="number"
            name="amount"
            id="amount"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="amount"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Amount
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            onChange={handleChange}
            type="date"
            name="date"
            id="date"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="date"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Date
          </label>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(addExpense(State.currentInp));
        }}
        className="text-white block mx-auto my-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create
      </button>
    </form>
  );
}

export default ExpenseForm;
