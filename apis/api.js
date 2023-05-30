import axios from "axios";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const URL = 'http://localhost:8000';

const notify = (message, type) => {
    toast[type](message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
};

//post data 
export const addExpense = async (expenseData) => {
    try {
        return await axios.post(`${URL}/`, expenseData);
    } catch (error) {
        console.log(error.message);
        notify(error.response.data.message, "error");
    }
}
// get all expenses
export const getExpenses = async (expensesData) => {
    try {
        return await axios.get(`${URL}/expense-list`, expensesData);
    } catch (error) {
        console.log(error.message);
        notify(error.response.data.message, "error");
        
    }
}

//post edit expense (single) data
export const editExpense = async (expense, expenseId) => {
    try {
        return await axios.post(`${URL}/expense-list/${expenseId}`, expense);
    } catch (error) {
        console.log(error.message);
        notify(error.response.data.message, "error");
    }
}

//get single expense data using expenseId
export const getExpense = async (expenseId) => {
    try {
        return await axios.get(`${URL}/expense-list/${expenseId}`);
    } catch (error) {
        console.log(error.message);
        notify(error.response.data.message, "error");
        
    }
}


//get date wise expenses
export const getDateWiseExpenses = async (expenseReport) => {
    try {
        return await axios.get(`${URL}/expense-report`, expenseReport);
    } catch (error) {
        console.log(error.message)
    }
}

//get expenses by category
export const getCategoryData = async (categoryReport) => {
    try {
        return await axios.get(`${URL}/category-report`, categoryReport);
    } catch (error) {
        console.log(error.message);
        notify(error.response.data.message, "error");
    }
};

//get expenses by category
export const getAmountExpenses = async (forecastReport) => {
    try {
        return await axios.get(`${URL}/forecasted-expenses`, forecastReport);
    } catch (error) {
        console.log(error.message);
    }
};
