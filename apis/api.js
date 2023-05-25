import axios from "axios";

const URL = '';

export const addExpense = async (expenseData) => {
    try{
        const data =  await axios.post(`${url}`, expenseData)
    }catch(error) {
        console.log(error.message)
    }
}