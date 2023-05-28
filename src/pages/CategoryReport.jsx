import { useState, useEffect } from "react";
import { getCategoryData } from "../../apis/api";
import DatePicker from "../components/DatePicker";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Label } from "recharts";

const CategoryChart = ({ }) => {
    const [categoryData, setCategoryData] = useState([]);
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await getCategoryData();
        setCategoryData(response.data);
        // console.log(response.data);
    };

    const calculateCategoryData = () => {
        const categoryMap = new Map();
        categoryData.forEach((expense) => {
            if (categoryMap.has(expense.category)) {
                categoryMap.set(
                    expense.category,
                    categoryMap.get(expense.category) + parseInt(expense.amount)
                );
            } else {
                categoryMap.set(expense.category, parseInt(expense.amount));
            }
        });

        const categoryChartData = Array.from(categoryMap.entries()).map(
            ([category, amount]) => ({
                name: category,
                value: amount,
            })
        );

        return categoryChartData;
    };

    const COLORS = [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#7C4DFF",
        "#4BC0C0",
        "#FF9F40",
        "#3C1874",
    ];

    return (
        <div>
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
                    <div className="w-full">
                        <div className="bg-white border shadow">
                            <div className="border-b p-3">
                                <h5 className="font-bold uppercase text-gray-600">Expenditure Per Category :</h5>
                            </div>
                            <div className="mt-4">
                                <ResponsiveContainer width="100%" height={400}>
                                    <PieChart>
                                        <Pie
                                            data={calculateCategoryData()}
                                            dataKey="value"
                                            nameKey="name"
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={120}
                                            fill="#8884d8"
                                            label
                                        >
                                            {calculateCategoryData().map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                            <Label
                                                value="Spent Per Category"
                                                position="center"
                                                fontSize={12}
                                                fontFamily="sans-serif"
                                                fontWeight="bold"
                                            />
                                        </Pie>
                                        <Legend verticalAlign="top" height={36}  />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="absolute lg:flex flex-col hidden bottom-20 left-20">
                <h3>Category Indicator:</h3>
                {calculateCategoryData().map((entry, index) => (
                    <div key={`indicator-${index}`}>
                        <span
                            style={{
                                display: "inline-block",
                                width: "12px",
                                height: "12px",
                                backgroundColor: COLORS[index % COLORS.length],
                                marginRight: "5px",
                            }}
                        />
                        {entry.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryChart;