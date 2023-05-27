import axios from "axios";

const URL = 'http://localhost:8000';

export const addExpense = async (expenseData) => {
    try {
        return await axios.post(`${URL}/`, expenseData);
    } catch (error) {
        console.log(error.message)
    }
}

// export const getExpense = async (expenseData) => {
//     try{
//         return  await axios.get(`${URL}/expense-list`, expenseData);
//     } catch(error) {
//         console.log(error.message)
//     }
// }

export const getExpense = async (expenseType) => {
    try {
      let endpoint = `${URL}/expense-list`;
  
      if (expenseType === 'report') {
        endpoint = `${URL}/expense-report`;
      } else if (expenseType === 'category') {
        endpoint = `${URL}/category-report`;
      } else if (expenseType === 'forecast') {
        endpoint = `${URL}/forecasted-expenses`;
      }
  
      return await axios.get(endpoint);
    } catch (error) {
      console.log(error.message);
    }
  };
  
