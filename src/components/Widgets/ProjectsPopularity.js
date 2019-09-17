import React from 'react';
import PropTypes from 'prop-types';
import {Pie} from "react-chartjs-2";
import blue from "@material-ui/core/colors/blue";

const ProjectPopularity = (props) => {

    let counter = {};
    for (const visit of props.data) {
        if (visit.projects.length === 1) {
            continue;
        }

        for (const project of visit.projects) {
            counter[project.id] = (project.id in counter) ? counter[project.id] + 1 : 1;
        }

    }

    let data = [];
    let labels = [];
    for (let [projectId, count] of Object.entries(counter)) {
        labels.push(projectId);
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
                <h2>Projects popularity</h2>
                <Pie data={chart}/>
            </div>
        </>
    )

};

ProjectPopularity.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProjectPopularity;