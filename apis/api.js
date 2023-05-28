import axios from "axios";

const URL = 'http://localhost:8000';

export const addExpense = async (expenseData) => {
    try {
        return await axios.post(`${URL}/`, expenseData);
    } catch (error) {
        console.log(error.message)
    }
}
// get all expenses
export const getExpense = async (expenseData) => {
    try {
        return await axios.get(`${URL}/expense-list`, expenseData);
    } catch (error) {
        console.log(error.message)
    }
}

//get date wise expenses
export const getDateWiseExpense = async (expenseReport) => {
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