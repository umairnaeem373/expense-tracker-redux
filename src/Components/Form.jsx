import React, { useState } from "react";
import { addIncome } from "../Actions/Actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuid4 } from "uuid";

function Form() {
  const [currentInp, set_Inp] = useState({
    id: uuid4(),
    type: "",
    amount: "",
    date: "",
    category: "",
  });

  const { type, amount, date, category } = currentInp;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const State = useSelector((store) => store.expenseTracker);

  const newID = uuid4();

  const handleChange = (e) => {
    const { name, value } = e.target;
    set_Inp({ ...currentInp, [name]: value });
    console.log(currentInp,'inp val in the change func');
  };

  console.log(type, amount, "Fook LInda");

  console.log(currentInp);

  return (
    <form>
      <div className="grid md:grid-cols-2 md:gap-6">
        <label htmlFor="underline_select" className="sr-only">
          Underline select
        </label>
        <select
          onChange={(e) => {
            e.target.value === "Expense"
              ? navigate("/expenseForm")
              : handleChange(e);
          }}
          id="underline_select"
          value={type}
          name="type"
          className="block py-2.5 px-0 w-full text-sm text-gray-500  border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option className="hidden" value="">
            Choose Type
          </option>
          <option className="text-lg" value="Income">
            Income
          </option>
          <option className="text-lg" value="Expense">
            Expense
          </option>
        </select>

        <label htmlFor="underline_select" className="sr-only">
          Underline select
        </label>
        <select
          onChange={handleChange}
          value={category}
          id="underline_select"
          name="category"
          className="block py-2.5 px-0 w-full text-sm text-gray-500 border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option className="hidden" value="">
            Choose Category
          </option>
          <option className="text-lg" value="Salary">
            Salary
          </option>
          <option className="text-lg" value="Bonus">
            Bonus
          </option>
          <option className="text-lg" value="Extra Income">
            Extra Income
          </option>
          <option className="text-lg" value="Others">
            Other
          </option>
        </select>
      </div>
      <div className="mt-5 grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            onChange={handleChange}
            type="number"
            value={amount}
            name="amount"
            id="amount"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
            value={date}
            type="date"
            name="date"
            id="date"
            className="block py-2.5 text-black px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
          console.log(State, "click");
          dispatch(addIncome({ id: newID, ...currentInp }));
          set_Inp({ type: "", amount: "", date: "", category: "" });
        }}
        className=" my-5 bg-blue-700 block mx-auto hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create
      </button>
    </form>
  );
}

export default Form;
