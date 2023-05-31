import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { getExpense, editExpense, deleteExpense } from "../../apis/api";

const EditDeleteExpense = ({ expenseId, onExpenseUpdate, onExpenseDelete }) => {
    const [showModal, setShowModal] = useState(false);

    const [expense, setExpense] = useState({
        itemName: "",
        amount: "",
        category: "",
        dateTime: "",
        notes: "",
    });
    const [isChanged, setIsChanged] = useState(false); // Track changes

    const { itemName, amount, category, dateTime, notes } = expense;

    //React toastify message function
    // const notify = (message, type) => {
    //     toast[type](message, {
    //         position: "bottom-right",
    //     });
    // };

    const handleClick = () => {
        setShowModal(true);
        // Get API data
        const fetchExpense = async () => {
            try {
                const response = await getExpense(expenseId, true); // Pass true for expense-list path
                setExpense(response.data[0]); // Destructure the first object from the array
            } catch (error) {
                console.error("Error fetching expense:", error);
            }
        };
        fetchExpense();
    };


    const handleInputChange = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
        setIsChanged(true);
    };

    const handleEditSubmit = async () => {
        // Validation Check if all required fields are filled
        if (
            expense.itemName.trim() === "" ||
            expense.amount.trim() === "" ||
            expense.category.trim() === "" ||
            expense.dateTime.trim() === ""
        ) {
            // notify("Please fill out all the fields", "error");
            return;
        }

        try {
            // Call the API function
            await editExpense(expense, expenseId, true); // Pass true for expense-list path
            // notify("Expense Updated Successfully", "success");
            console.log("Edited Item", expense);

            setIsChanged(false); // Reset changes flag to false
            onExpenseUpdate(expense); // Call the ExpenseData component's update function
            setShowModal(false);
        } catch (error) {
            // Handle API error and display error message
            console.log(error);
            // notify("An error occurred. Please try again.", "error");
        }
    };



    const handleDeleteExpense = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this expense?");
        if (confirmDelete) {
            try {
                await deleteExpense(expenseId, true); // Pass true for expense-list path
                // notify("Expense Deleted Successfully", "success");
                console.log("Deleted Item", expense);

                onExpenseDelete(expenseId); // Call the ExpenseData component's delete function
            } catch (error) {
                // Handle API error and display error message
                console.log(error);
                // notify("An error occurred. Please try again.", "error");
            }
        }
    };


    return (
        <div className="flex justify-center gap-3">
            <div>
                <button
                    className="font-semibold py-1 px-3 rounded text-xs bg-green-500 hover:bg-green-600 cursor-pointer"
                    type="button"
                    onClick={() => handleClick(expenseId)}
                >
                    Edit
                </button>
                {showModal ? (
                    <>
                        <form className="justify-center items-center text-left flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-sm">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between px-5 py-3 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-2xl font-semibold">Update Expense</h3>
                                    </div>
                                    {/*body*/}
                                    <div className="relative flex-auto">
                                        <div className="body-font flex items-center justify-center">
                                            <div className=" bg-gray-100 p-5 flex flex-col w-full">
                                                <div className="relative mb-1">
                                                    <label
                                                        htmlFor="item-name"
                                                        className="leading-7 text-sm  text-gray-600"
                                                    >
                                                        Item Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        name="itemName"
                                                        value={itemName}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                    />
                                                </div>
                                                <div className="relative mb-1">
                                                    <label
                                                        htmlFor="Amount"
                                                        className="leading-7 text-sm  text-gray-600"
                                                    >
                                                        Amount (Tk.)
                                                    </label>
                                                    <input
                                                        type="number"
                                                        required
                                                        name="amount"
                                                        value={amount}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-white rounded border border-gray-300  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                    />
                                                </div>
                                                <div className="relative mb-1">
                                                    <label
                                                        htmlFor="Amount"
                                                        className="leading-7 text-sm  text-gray-600"
                                                    >
                                                        Category
                                                    </label>
                                                    <select
                                                        required
                                                        name="category"
                                                        value={category}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-0 transition-colors duration-200 ease-in-out"
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="Commute">Commute</option>
                                                        <option value="Eat Outs">Eat Outs</option>
                                                        <option value="Gardening">Gardening</option>
                                                        <option value="Groceries">Groceries</option>
                                                        <option value="Health Care">Health Care</option>
                                                        <option value="Utilities">Utilities</option>
                                                    </select>
                                                </div>
                                                <div className="relative mb-1">
                                                    <label
                                                        htmlFor="Amount"
                                                        className="leading-7 text-sm  text-gray-600"
                                                    >
                                                        Incurred on
                                                    </label>
                                                    <input
                                                        type="datetime-local"
                                                        required
                                                        name="dateTime"
                                                        value={dateTime}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                    />
                                                </div>
                                                <div className="relative mb-1">
                                                    <label
                                                        htmlFor="Notes"
                                                        className="leading-7 text-sm  text-gray-600"
                                                    >
                                                        Notes
                                                    </label>
                                                    <textarea
                                                        name="notes"
                                                        value={notes}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 h-18 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-8 transition-colors duration-200 ease-in-out"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end px-5 py-3 border-t border-solid border-slate-200 rounded-b gap-3">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className={`bg-emerald-500 text-white text-center active:bg-emerald-600 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${isChanged ? "" : "opacity-50 cursor-not-allowed"
                                                }`}
                                            type="button"
                                            onClick={handleEditSubmit}
                                            disabled={!isChanged}
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>
            <div>
                <button
                    onClick={() => handleDeleteExpense(expenseId)}
                    className="text-white font-semibold py-1 px-3 rounded text-xs bg-red-500 hover:bg-red-600 cursor-pointer"
                >
                    Delete
                </button>
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default EditDeleteExpense;
