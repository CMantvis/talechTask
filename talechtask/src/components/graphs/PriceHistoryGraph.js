import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function priceHistoryGraph({ priceHistory, priceHistoryDate }) {
    const [price1, price2, price3, price4, price5] = [...priceHistory.slice(-5)];
    const [date1, date2, date3, date4, date5] = [...priceHistoryDate.slice(-5)];
    const options = {
        title: {
            text: "Price history"
        },
        credits: {
            enabled: false
        },
        yAxis: {
            title: {
                text: "Price",
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            valueSuffix: "$",
            pointFormat: "{series.name}: <b>{point.y}<b></br>"
        },
        xAxis: {
            title: {
                text: "Date"
            },
            labels: {
                enabled: false
            },
            categories: [date1, date2, date3, date4, date5],
        },
        series: [
            {
                name: "Price",
                data: [Number(price1), Number(price2), Number(price3), Number(price4), Number(price5)]
            }
        ]
    }

    return (
        <div id="priceGraph" className="col-5">
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                constructorType={'chart'}
            />
        </div>
    )
}

export default priceHistoryGraph;
