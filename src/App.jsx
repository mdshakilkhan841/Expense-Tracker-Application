import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AddExpense from "./pages/AddExpense";
import Report from "./pages/Report";
import CategoryReport from "./pages/CategoryReport";
import Forecasted from "./pages/Forecasted";
import ExpenseList from "./pages/ExpenseList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddExpense/>} />
        <Route path="/expense-list" element={<ExpenseList/>} />
        <Route path="/expense-report" element={<Report/>} />
        <Route path="/category-report" element={<CategoryReport/>} />
        <Route path="/forecasted-expenses" element={<Forecasted/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
