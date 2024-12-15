import React from "react";
import { Chart } from "react-google-charts";

const data = [
    ["Year", "Sales", "Expenses", "Profits"],
    ["2014", 1000, 400, 300],
    ["2015", 1170, 460, 350],
    ["2016", 660, 1120, 200],
    ["2017", 1030, 540, 250],
    ["2018", 999, 540, 280],
    ["2020", 1200, 1010, 250],
    ["2021", 1100, 540, 300],
];

// Material chart options
const options = {
    chart: {
        title: "Company Performance",
        subtitle: "Sales and Expenses over the Years",
    },
    colors: ["rgb(53,138,148)", "rgb(37,11,165)", "#188310"]
};

export default function Barchart() {
    return (
        <Chart
            // Note the usage of Bar and not BarChart for the material version
            chartType="Bar"
            width="100%"
            height="350px"
            data={data}
            options={options}
        />
    );
}

