import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";

const AddExpense = () => {

    const [expenseData, setExpenseData] = useState({
        itemName: "",
        amount: "",
        category: "",
        dateTime: "",
        notes: "",
    });

    return (
        <ExpenseForm expenseData={expenseData} setExpenseData={setExpenseData}/>
    );
};

export default AddExpense;
