import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function QuantityHistoryGraph({ quantityHistory, quantityHistoryDate }) {
    const [quantity1,quantity2,quantity3,quantity4,quantity5] = [...quantityHistory.slice(-5)];
    const [date1,date2,date3,date4,date5] = [...quantityHistoryDate.slice(-5)];

    const options = {
        title: {
            text: "Quantity history"
        },
        credits: {
            enabled: false
        },
        yAxis: { 
            title: { 
                text: "Quantity" 
            } 
        },
        legend: {
            enabled: false
        },
        tooltip: {
            valueSuffix: "vnt",
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
                data: [Number(quantity1), Number(quantity2), Number(quantity3), Number(quantity4), Number(quantity5)]
            }
        ]
    }

    return (
        <div id="quantityGraph" className="col-5">
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                constructorType={'chart'}
            />
        </div>
    )
}

export default QuantityHistoryGraph;