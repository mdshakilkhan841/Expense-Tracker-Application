import { addExpense } from "../../apis/api";


const ExpenseForm = ({expenseData, setExpenseData}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(expenseData);
    };

    const handleClick = async () => {
        //send data to API
        await addExpense(expenseData);
        
        setExpenseData({
            itemName: "",
            amount: "",
            category: "",
            dateTime: "",
            notes: "",
        });
    };


    const handleClickClearData = () => {
        //for clear form data onclick on CLEAR button
        setExpenseData({
            itemName: "",
            amount: "",
            category: "",
            dateTime: "",
            notes: "",
        });
    }

    return (
        <div className="text-gray-600 body-font flex items-center justify-center mt-32 mb-10">
            <form
                className="lg:w-1/3 sm:w-1/2 bg-gray-100 p-5 flex flex-col w-full border shadow"
                onSubmit={handleSubmit}
            >
                <div className="mb-5">
                    <h2 className="text-gray-900 text-lg text-center font-medium title-font pb-5 border-b">
                        Add Expense
                    </h2>
                </div>
                <div className="relative mb-1">
                    <label
                        htmlFor="item-name"
                        className="leading-7 text-sm  text-gray-600"
                    >
                        Item Name
                    </label>
                    <input
                        type="text"
                        value={expenseData.itemName}
                        onChange={(e) =>
                            setExpenseData({ ...expenseData, itemName: e.target.value })
                        }
                        className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-1">
                    <label htmlFor="Amount" className="leading-7 text-sm  text-gray-600">
                        Amount (Tk.)
                    </label>
                    <input
                        type="number"
                        value={expenseData.amount}
                        onChange={(e) =>
                            setExpenseData({ ...expenseData, amount: e.target.value })
                        }
                        className="w-full bg-white rounded border border-gray-300  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-1">
                    <label htmlFor="Amount" className="leading-7 text-sm  text-gray-600">
                        Category
                    </label>
                    <select
                        value={expenseData.category}
                        onChange={(e) =>
                            setExpenseData({ ...expenseData, category: e.target.value })
                        }
                        className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-0 transition-colors duration-200 ease-in-out"
                    >
                        <option defaultValue>Select</option>
                        <option value="Commute">Commute</option>
                        <option value="Eat Outs">Eat Outs</option>
                        <option value="Gardening">Gardening</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Health Care">Health Care</option>
                        <option value="Utilities">Utilities</option>
                    </select>
                </div>
                <div className="relative mb-1">
                    <label htmlFor="Amount" className="leading-7 text-sm  text-gray-600">
                        Incurred on
                    </label>
                    <input
                        type="datetime-local" 
                        value={expenseData.dateTime}
                        onChange={(e) => setExpenseData({...expenseData, dateTime: e.target.value})}
                        className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-1">
                    <label htmlFor="Notes" className="leading-7 text-sm  text-gray-600">
                        Notes
                    </label>
                    <textarea
                        value={expenseData.notes}
                        onChange={(e) =>
                            setExpenseData({ ...expenseData, notes: e.target.value })
                        }
                        className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 h-18 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mt-4 mb-4 flex justify-between">
                    <button
                        type="submit"
                        onClick={handleClick}
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
        </div>
    );
};

export default ExpenseForm;
