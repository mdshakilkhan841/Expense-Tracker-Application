import { useState, useEffect } from "react";
import { getExpenses } from "../../apis/api";
import { Grid } from "react-loader-spinner";
import EditDeleteExpense from "./EditDeleteExpense";

const ExpenseData = () => {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAllExpense();
    }, []);

    const getAllExpense = async () => {
        setLoading(true);
        const response = await getExpenses();
        setExpenses(response.data);
        setLoading(false);
        // console.log(response.data);
    };

    const handleExpenseUpdate = (updatedExpense) => {
        const updatedExpenses = expenses.map((expense) => {
            if (expense.expenseId === updatedExpense.expenseId) {
                return updatedExpense;
            } else {
                return expense;
            }
        });
        setExpenses(updatedExpenses);
    };

    const handleExpenseDelete = (deletedExpenseId) => {
        const updatedExpenses = expenses.filter(
            (expense) => expense.expenseId !== deletedExpenseId
        );
        setExpenses(updatedExpenses);
    };

    return (
        <div className="bg-white border shadow">
            <div className="border-b p-3 mb-1.5">
                <h5 className="font-bold uppercase text-gray-600 text-center">
                    Expense List
                </h5>
            </div>
            <div className="px-1.5 overflow-auto">
                <div className="inline-block min-w-full">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light table-auto">
                            <thead className="bg-indigo-100 text-indigo-700 font-bold">
                                <tr className="text-center border-b border-black">
                                    <th scope="col" className="px-4 py-3">
                                        SL No.
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        DateTime
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        category
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
                                {loading ? (
                                    <div className="absolute top-[50%] left-[50%]">
                                        <Grid
                                            height="80"
                                            width="80"
                                            color="#4fa94d"
                                            ariaLabel="grid-loading"
                                            radius="12.5"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                        />
                                    </div>
                                ) : (
                                    expenses.map((e, index) => (
                                        <tr
                                            key={index}
                                            className="odd:bg-neutral-100 even:bg-neutral-200 font-medium sm:text-left text-center"
                                        >
                                            <td className="whitespace-nowrap px-2 py-2 text-center">
                                                {index + 1}
                                            </td>
                                            <td className="whitespace-nowrap px-2 py-2">
                                                {e.dateTime}
                                            </td>
                                            <td className="whitespace-nowrap px-2 py-2">
                                                {e.category}
                                            </td>
                                            <td className="whitespace-nowrap px-2 py-2">
                                                {e.itemName}
                                            </td>
                                            <td className="whitespace-nowrap px-2 py-2">
                                                {e.amount}
                                            </td>
                                            <td className="px-2 py-2 ">
                                                <EditDeleteExpense
                                                    expenseId={e.expenseId}
                                                    onExpenseUpdate={handleExpenseUpdate}
                                                    onExpenseDelete={handleExpenseDelete}
                                                />
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpenseData;
