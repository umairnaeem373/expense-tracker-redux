const addIncome=(data)=>{
    console.log(data);
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

// const setInp=(data)=>{
//     console.log(data,'kk');
//     return{
//         type:'Set_Income',
//         payload:data
//     }
// }

export {addIncome,addExpense}