const ExpenseForm = ({ expenseData, setExpenseData }) => {
    return (
        <>
            <div className="mb-5">
                <h2 className="text-gray-900 text-lg text-center font-medium title-font pb-5 border-b">
                    Add Expense
                </h2>
            </div>
            <div className="relative mb-1">
                <label htmlFor="item-name" className="leading-7 text-sm  text-gray-600">
                    Item Name
                </label>
                <input
                    type="text"
                    required
                    value={expenseData.itemName}
                    onChange={(e) =>
                        setExpenseData({ ...expenseData, itemName: e.target.value })
                    }
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <span></span>
            </div>
            <div className="relative mb-1">
                <label htmlFor="Amount" className="leading-7 text-sm  text-gray-600">
                    Amount (Tk.)
                </label>
                <input
                    type="number"
                    required
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
                    required={true}
                    value={expenseData.category}
                    onChange={(e) =>
                        setExpenseData({ ...expenseData, category: e.target.value })
                    }
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-0 transition-colors duration-200 ease-in-out"
                >
                    <option value=""defaultValue>
                        Select
                    </option>
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
                    required
                    value={expenseData.dateTime}
                    onChange={(e) =>
                        setExpenseData({ ...expenseData, dateTime: e.target.value })
                    }
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
        </>
    );
};

export default ExpenseForm;
