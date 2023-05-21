import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AddExpense from "./components/AddExpense";
import Report from "./components/Report";
// import ExpenseRecord from "./components/ExpenseRecord";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddExpense/>} />
        <Route path="/expense-report" element={<Report/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
