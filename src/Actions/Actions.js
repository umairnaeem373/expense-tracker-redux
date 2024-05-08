const addIncome=(data)=>{
   return {
        type:"Add_Income",
        payload:data,
    }
}

const addExpense=(data)=>{
   return {
        type:"Add_Expense",
        payload:data    
    }
}


export {addIncome,addExpense}