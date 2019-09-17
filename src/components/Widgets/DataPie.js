import React from 'react';
import PropTypes from "prop-types";
import {Pie} from 'react-chartjs-2';
import blue from '@material-ui/core/colors/blue';


const DataPie = (props) => {


    let counter = {};
    for (const visit of props.data) {
        let criteria = props.filter(visit);
        criteria = "formatter" in props ? props.formatter(criteria) : criteria;
        counter[criteria] = (criteria in counter) ? counter[criteria] + 1 : 1;
    }

    let data = [];
    let labels = [];
    for (let [criteria, count] of Object.entries(counter)) {
        labels.push(criteria);
        data.push(count);
    }

    const chart = {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: Object.values(blue)
        }]
    };

    return (
        <>
            <div>
                <h2>{props.label}</h2>
                <Pie data={chart}/>
            </div>
        </>
    )

};

DataPie.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    label: PropTypes.string.isRequired,
    filter: PropTypes.func.isRequired,
    formatter: PropTypes.func,
};

export default DataPie;