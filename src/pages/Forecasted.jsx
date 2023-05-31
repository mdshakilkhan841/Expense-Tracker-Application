import { useState, useEffect } from "react";
import { getAmountExpenses } from "../../apis/api";
import { addDays, format } from "date-fns";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, Label } from "recharts";

const ForecastChart = () => {
    const [forecastData, setForecastData] = useState([]);
    // console.log(forecastData.length)
    useEffect(() => {
        getData();
    }, []);

    //API call for get expenses data 
    const getData = async () => {
        try {
            const response = await getAmountExpenses();
            setForecastData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching category data:", error);
        }
    }; forecastData

    const getNext7DaysTotalExpense = () => {
        const currentDate = new Date();
        const next7Days = [];

        if (forecastData.length === 0) {
            return next7Days; // Return empty array if forecastData is empty
        }

        for (let i = 0; i < 7; i++) {
            const date = addDays(currentDate, i);
            const formattedDateDDMMYY = format(date, "dd/MM/yyyy");
            const dayOfWeek = format(date, "EEE"); // Get day of the week (e.g., Mon)
            const dayOfMonth = format(date, "dd"); // Get day of the month (e.g., 29)
            const month = format(date, "MM"); // Get month (e.g., 05)
            const formattedDate = `${dayOfWeek} ${dayOfMonth}/${month}`; // Format the date as "Mon 29/05"

            const DailyExpense = forecastData
                .filter((expense) => expense.date === formattedDateDDMMYY)
                .reduce((total, expense) => total + parseInt(expense.amount), 0);

            next7Days.push({ date: formattedDate, DailyExpense });
        }

        // console.log(next7Days);
        return next7Days;
    };

    return (
        <div>
            <section className="text-black body-font flex items-center justify-center md:mt-32 mt-20">
                <div className="w-full container mx-auto py-3 px-5 max-w-3xl space-y-2">
                    <div className="text-base font-medium mb-10 flex justify-between items-center">
                    </div>
                    <div className="w-full">
                        <div className="bg-white border shadow">
                            <div className="border-b p-3">
                                <h5 className="font-bold uppercase">
                                    Forecasted Expenses For The Next 7 Days
                                </h5>
                            </div>
                            <div className="mt-4 p-5">
                                <ResponsiveContainer width="100%" height={400}>
                                    <BarChart data={getNext7DaysTotalExpense()}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="date" />
                                        <Tooltip />
                                        <Bar dataKey="DailyExpense" fill="#8884d8" label={{ fill: 'black', fontSize: 15, position :'top' }}>
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ForecastChart;
