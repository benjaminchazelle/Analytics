import React from 'react';
import PropTypes from "prop-types";
import {Line} from 'react-chartjs-2';


const VisitsChart = (props) => {

    const counter = {};

    for (let visit of props.data) {
        let date = parseInt(visit.start);
        date -= date % (60 * 60 * 24 * 1000);
        counter[date] = (date in counter) ? counter[date] + 1 : 1;
    }

    const data = [];
    for (const date in counter) {
        if (counter.hasOwnProperty(date)) {
            data.push({
                x: new Date(parseInt(date)),
                y: counter[date],
            });
        }
    }

    const chart = {
        datasets: [
            {
                label: 'Visits',
                fill: false,
                lineTension: 0,
                backgroundColor: 'rgb(33, 150, 243)',
                borderColor: 'rgb(33, 150, 243)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(33, 150, 243)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgb(33, 150, 243)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 11,
                data,

            },
        ],
    };

    const options = {
        scales: {
            xAxes: [{
                type: 'time',
                distribution: 'linear',
                time: {
                    min: new Date(0),
                    displayFormats: {
                        day: 'MMM D',
                    },
                },
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    stepSize: 1,
                },
            }],
        },
    };

    return (
        <>
            <h2>
                {'History of ' + data.length + ' visits'}
            </h2>
            <Line data={chart} options={options}/>
        </>
    );
};

VisitsChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default VisitsChart;
