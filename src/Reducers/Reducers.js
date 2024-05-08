const initialValue={
    income:[],
    expense:[],
    balance:0,
}

// const zeroInput={
//         id:'',
//         type:'',
//         category:'',
//         amount:0,
//         date:'',
// }

const expenseTracker=(state=initialValue,action)=>{

    switch (action.type) {
        case 'Add_Income':
            return{...state,
                income:[...state.income,action.payload],
                balance:state.balance + Number(action.payload.amount)
            }

        case "Add_Expense":
            return{...state,
                expense:[...state.expense,action.payload],
                balance:state.balance - Number(action.payload.amount)
            }


                
        default:
            return state;
    }

}

export { expenseTracker }