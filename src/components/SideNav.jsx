import {MdLibraryAdd} from 'react-icons/md';
import {FaListUl} from 'react-icons/fa';
import {GrNotes} from 'react-icons/gr';
import {AiOutlinePieChart} from 'react-icons/ai';
import {IoStatsChartSharp} from 'react-icons/io5';


const SideNav = () => {
  return (
    <div className="mt-14">
        <ul className="font-semibold space-y-2">
            <li className="flex items-center space-x-4 hover:bg-white p-3 rounded-l-lg cursor-pointer hover:shadow-xl hover:shadow-gray-500/50">
                <MdLibraryAdd />
                <span>Add New Expense</span>
            </li>
            <li className="flex items-center space-x-4 hover:bg-white p-3 rounded-l-lg cursor-pointer hover:shadow-xl hover:shadow-gray-500/50">
                <FaListUl/>
                <span>Expense List</span>
            </li>
            <li className="flex items-center space-x-4 hover:bg-white p-3 rounded-l-lg cursor-pointer hover:shadow-xl hover:shadow-gray-500/50">
                <GrNotes/>
                <span>Expenditure Reports</span>
            </li>
            <li className="flex items-center space-x-4 hover:bg-white p-3 rounded-l-lg cursor-pointer hover:shadow-xl hover:shadow-gray-500/50">
                <AiOutlinePieChart/>
                <span>Expenditure Per Category</span>
            </li>
            <li className="flex items-center space-x-4 hover:bg-white p-3 rounded-l-lg cursor-pointer hover:shadow-xl hover:shadow-gray-500/50">
                <IoStatsChartSharp/>
                <span>Forecasted Expenses</span>
            </li>
        </ul>
    </div>
  )
}

export default SideNav