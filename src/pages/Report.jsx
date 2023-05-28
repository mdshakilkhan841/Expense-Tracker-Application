import { useState, useEffect } from "react";
import { getDateWiseExpense } from "../../apis/api";
import DatePicker from "../components/DatePicker";
import "./report.css";

const Report = () => {
    const [expenses, setExpenses] = useState([]);
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    let totalExpenses = 0; // Initialize totalExpenses variable

    useEffect(() => {
        getAllExpense();
    },[]);

    const getAllExpense = async () => {
        const response = await getDateWiseExpense();
        setExpenses(response.data);
        // console.log(response.data);
    };

    const renderExpenseDetails = () => {
        const uniqueDates = [...new Set(expenses.map((expense) => expense.date))];
        return uniqueDates.map((date) => {
            const dateExpenses = expenses.filter((expense) => expense.date === date);
            const totalAmount = dateExpenses.reduce((sum, expense) => sum + parseInt(expense.amount), 0);
            totalExpenses += totalAmount;
            return (
                <details key={date} className="bg-[rgba(75,192,192,0.2)] open:bg-[rgba(54,162,235,0.2)] duration-300 border border-[rgb(75,192,192)] open:border-[rgb(54,162,235)]">
                    <summary className="relative bg-inherit pl-5 pr-14 py-2 text-lg cursor-pointer list-none flex justify-between font-semibold">
                        <span>Total Expense of {date}</span>
                        <span className="text-green-700 font-bold">{totalAmount} Tk</span>
                    </summary>
                    <div className="bg-white px-1.5 border-t border-[rgb(54,162,235)] text-sm font-light">
                        <div className="flex flex-col">
                            <div className="overflow-x-auto">
                                <div className="inline-block min-w-full">
                                    <div className="overflow-hidden">
                                        <div className="text-lg text-center font-semibold p-1">
                                            <p>Expense List</p>
                                        </div>
                                        <table className="min-w-full text-left text-sm font-light ">
                                            <thead className="bg-[rgba(153,102,255,0.2)] text-indigo-700 font-bold">
                                                <tr className="text-center">
                                                    <th scope="col" className="px-4 py-3">
                                                        Category
                                                    </th>
                                                    <th scope="col" className="px-4 py-3">
                                                        Item Name
                                                    </th>
                                                    <th scope="col" className="px-4 py-3">
                                                        Cost
                                                    </th>
                                                    <th scope="col" className="px-4 py-3">
                                                        Update
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {dateExpenses.map((expense, index) => (
                                                    <tr key={index} className="odd:bg-neutral-100 even:bg-neutral-200 font-medium sm:text-center">
                                                        <td className="whitespace-nowrap px-4 py-2">{expense.category}</td>
                                                        <td className="whitespace-nowrap px-4 py-2">{expense.itemName}</td>
                                                        <td className="whitespace-nowrap px-4 py-2 text-center">{expense.amount}</td>
                                                        <td className="whitespace-nowrap px-4 py-2 text-center space-x-2">
                                                            <button className="font-semibold py-1 px-3 rounded text-xs bg-green-400 hover:bg-green-500 cursor-pointer">
                                                                Edit
                                                            </button>
                                                            <button className="text-white font-semibold py-1 px-3 rounded text-xs bg-red-500 hover:bg-red-600 cursor-pointer">
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </details>
            );
        });
    };

    // const totalExpenses = expenses.reduce((sum, expense) => sum + parseInt(expense.amount), 0);

    return (
        <section className="text-black body-font flex items-center justify-center md:mt-32 mt-20">
            <div className="w-full container mx-auto py-3 px-5 max-w-3xl space-y-2">
                <div className="text-base font-medium mb-10 flex justify-between items-center">
                    <span>Expenditure Report: </span>
                    <DatePicker
                        dateFrom={dateFrom}
                        setDateFrom={setDateFrom}
                        dateTo={dateTo}
                        setDateTo={setDateTo}
                    />
                    <button className="shadow font-bold rounded-xl px-3 py-1 bg-green-500  hover:bg-green-600 cursor-pointer">
                        Go
                    </button>
                </div>
                {renderExpenseDetails()}
                <div className="bg-[rgba(255,99,132,0.2)] border border-[rgb(255,99,132)]">
                    <div className="pl-5 pr-14 py-2 text-xl list-none flex justify-between font-bold">
                        <span>Total Expenses</span>
                        <span className="text-red-600 font-bold">{totalExpenses} Tk</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Report;

