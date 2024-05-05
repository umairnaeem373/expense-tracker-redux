const initialValue={
    income:[],
    expense:[],
    balance:0,
    // currentInp:{
    //     id:'',
    //     type:'',
    //     category:'',
    //     amount:0,
    //     date:'',
    // }
}

const zeroInput={
        id:'',
        type:'',
        category:'',
        amount:0,
        date:'',
}

const expenseTracker=(state=initialValue,action)=>{

    // const {amount}=action.payload

    // console.log(amount,zeroInput,'pp');

    switch (action.type) {
        case 'Add_Income':
            return{...state,
                income:[...state.income,action.payload],
                // currentInp:zeroInput,
                balance:state.balance + Number(action.payload.amount)
            }

        case "Add_Expense":
            return{...state,
                expense:[...state.expense,action.payload],
                // currentInp:zeroInput,
                balance:state.balance - Number(action.payload.amount)
            }

        // case "Set_Inp":
        //     return{...state,
        //         currentInp:{...state.currentInp,...action.payload}
        //     }

                
        default:
            return state;
    }

}

export { expenseTracker }