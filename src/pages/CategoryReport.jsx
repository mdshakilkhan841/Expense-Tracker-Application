import { useEffect } from "react";
import DatePicker from '../components/DatePicker';

const CategoryReport = () => {

    useEffect(() => {
        const chartConfig = {
            type: "doughnut",
            data: {
                labels: ["P1", "P2", "P3"],
                datasets: [
                    {
                        label: "Issues",
                        data: [300, 50, 100],
                        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
                    },
                ],
            },
        };

        const ctx = document.getElementById("chartjs-4");
        new window.Chart(ctx, chartConfig);
    }, []);


    return (
        <section className="text-black body-font flex items-center justify-center md:mt-32 mt-20">
            <div className="w-full container mx-auto py-3 px-5 max-w-3xl space-y-2">
                <div className="text-base font-medium mb-10 flex justify-between items-center">
                    <span>Expenditure Per Category :</span>
                    <DatePicker />
                    <button className="shadow font-bold rounded-xl px-3 py-1 bg-green-500  hover:bg-green-600 cursor-pointer">Go</button>
                </div>

                <div className="w-full">
                    <div className="bg-white border shadow">
                        <div className="border-b p-3">
                            <h5 className="font-bold uppercase text-gray-600">Chart</h5>
                        </div>
                        <div className="p-5">
                            <canvas id="chartjs-4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoryReport