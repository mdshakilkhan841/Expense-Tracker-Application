import { useEffect } from "react";

const Forecasted = () => {
    useEffect(() => {
        const chartConfig = {
            type: "bar",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                        label: "Likes",
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(255, 159, 64, 0.2)",
                            "rgba(255, 205, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(201, 203, 207, 0.2)",
                        ],
                        borderColor: [
                            "rgb(255, 99, 132)",
                            "rgb(255, 159, 64)",
                            "rgb(255, 205, 86)",
                            "rgb(75, 192, 192)",
                            "rgb(54, 162, 235)",
                            "rgb(153, 102, 255)",
                            "rgb(201, 203, 207)",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
        };

        const ctx = document.getElementById("chartjs-1");
        new window.Chart(ctx, chartConfig);
    }, []);

    return (
        <section className="text-black body-font flex items-center justify-center md:mt-32 mt-20">
            <div className="w-full container mx-auto py-3 px-5 max-w-3xl space-y-2">
                <div className="w-full">
                    <div className="bg-white border rounded shadow">
                        <div className="border-b p-3">
                            <h5 className="font-bold uppercase text-gray-600">Forecasted Expenses For The Next 7 Days</h5>
                        </div>
                        <div className="p-5">
                            <canvas id="chartjs-1" className="chartjs" />
                            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Forecasted;
