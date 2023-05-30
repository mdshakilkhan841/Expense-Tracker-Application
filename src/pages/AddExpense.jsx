import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addExpense } from "../../apis/api";

const AddExpense = () => {
    const [expenseData, setExpenseData] = useState({
        itemName: "",
        amount: "",
        category: "",
        dateTime: "",
        notes: "",
    });

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        //Validation Check if all required fields are filled
        if (
            expenseData.itemName.trim() === "" ||
            expenseData.amount.trim() === "" ||
            expenseData.category.trim() === "" ||
            expenseData.dateTime.trim() === ""
        ) {
            // Display error message
            return ;
        }

        try {
            // Call the API function
            await addExpense(expenseData);
            notify("Expense Added Successfully", "success");
            console.log(expenseData);
            
            // Clear the form data after successful API call
            setExpenseData({
                itemName: "",
                amount: "",
                category: "",
                dateTime: "",
                notes: "",
            });
        } catch (error) {
            // Handle API error and display error message
            console.log(error);
            notify("An error occurred. Please try again.", "error");
            setExpenseData({
                itemName: "",
                amount: "",
                category: "",
                dateTime: "",
                notes: "",
            });
        }
    };


    const handleClickClearData = () => {
        // Clear form data onClick of CLEAR button
        setExpenseData({
            itemName: "",
            amount: "",
            category: "Select",
            dateTime: "",
            notes: "",
        });
    };

    return (
        <div className="text-gray-600 body-font flex items-center justify-center mt-32 mb-10">
            <form
                className="lg:w-1/3 sm:w-1/2 bg-gray-100 p-5 flex flex-col w-full border shadow"
                onSubmit={handleSubmit}
            >
                <ExpenseForm expenseData={expenseData} setExpenseData={setExpenseData} />
                <div className="relative mt-4 mb-4 flex justify-between">
                    <button
                        type="submit"
                        className="text-white bg-sky-800 border-0 py-2 px-6 focus:outline-none hover:bg-sky-900 rounded text-lg"
                    >
                        SUBMIT
                    </button>
                    <input
                        type="reset"
                        value="CANCEL"
                        onClick={handleClickClearData}
                        className="text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg cursor-pointer"
                    />
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddExpense;
