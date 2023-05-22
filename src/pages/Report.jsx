import DatePicker from '../components/DatePicker'
import './report.css'

const Report = () => {
    return (
        <section className="text-black body-font flex items-center justify-center md:mt-32 mt-20">
            <div className="w-full container mx-auto py-3 px-5 max-w-3xl space-y-2">
                <div className="text-base font-medium mb-10 flex justify-between items-center">
                    <span>Expenditure Report:</span>
                    <DatePicker />
                    <button className="shadow font-bold rounded-xl px-3 py-1 bg-green-500  hover:bg-green-600 cursor-pointer">Go</button>
                </div>
                {/* <!-- The First FAQ --> */}
                <details className="bg-cyan-400 open:bg-cyan-300 duration-300">
                    <summary className="relative bg-inherit pl-5 pr-14 py-2 text-lg cursor-pointer list-none flex justify-between font-semibold">
                        <span>Total Expense of {`02/05/2023`}</span>
                        <span className='text-purple-600 font-bold'>{`250`} Tk</span>
                    </summary>
                    <div className="bg-white px-1.5 border border-gray-300 text-sm font-light">
                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-3 lg:-mx-5">
                                <div className="inline-block min-w-full sm:px-3 lg:px-5">
                                    <div className="overflow-hidden">
                                        <div className='text-lg text-center font-semibold p-1'>
                                            <p>Expense List</p> 
                                        </div>
                                        <table className="min-w-full text-left text-sm font-light table-auto border-separate border-spacing-x-1 border-spacing-y-0.5">
                                            <thead
                                                className="border-b bg-indigo-100 text-indigo-700 font-bold dark:border-neutral-500 dark:bg-neutral-600">
                                                <tr className='text-center'>
                                                    <th scope="col" className="px-4 py-3">Category</th>
                                                    <th scope="col" className="px-4 py-3">Item Name</th>
                                                    <th scope="col" className="px-4 py-3">Cost</th>
                                                    <th scope="col" className="px-4 py-3">Update</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr
                                                    className="border-b odd:bg-neutral-100 even:bg-neutral-200 dark:border-neutral-500 dark:bg-neutral-700 font-medium sm:text-center">
                                                    <td className="whitespace-nowrap px-4 py-2">Eat Outs</td>
                                                    <td className="whitespace-nowrap px-4 py-2">Helvetia Eat Out</td>
                                                    <td className="whitespace-nowrap px-4 py-2 text-center">250 Tk</td>
                                                    <td className="whitespace-nowrap px-4 py-2 text-center space-x-2">
                                                        <button className="font-semibold py-1 px-3 rounded text-xs bg-green-500  hover:bg-green-600 cursor-pointer">Edit</button>
                                                        <button className="text-white font-semibold py-1 px-3 rounded text-xs bg-red-500 hover:bg-red-600 cursor-pointer">Delete</button>
                                                    </td>
                                                </tr>
                                                <tr
                                                    className="border-b odd:bg-neutral-100 even:bg-neutral-200 dark:border-neutral-500 dark:bg-neutral-700 font-medium sm:text-center">
                                                    <td className="whitespace-nowrap px-4 py-2">Eat Outs</td>
                                                    <td className="whitespace-nowrap px-4 py-2">Helvetia Eat Out</td>
                                                    <td className="whitespace-nowrap px-4 py-2 text-center">250 Tk</td>
                                                    <td className="whitespace-nowrap px-4 py-2 text-center space-x-2">
                                                        <button className="font-semibold py-1 px-3 rounded text-xs bg-green-500  hover:bg-green-600 cursor-pointer">Edit</button>
                                                        <button className="text-white font-semibold py-1 px-3 rounded text-xs bg-red-500 hover:bg-red-600 cursor-pointer">Delete</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </details>
                <div className="bg-cyan-200 border border-black">
                    <div className=" pl-5 pr-14 py-2 text-xl list-none flex justify-between font-bold">
                        <span>Total Expenses</span>
                        <span className='text-red-600 font-bold'>{`250`} Tk</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Report