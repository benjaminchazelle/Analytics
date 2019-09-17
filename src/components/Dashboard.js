import React from 'react';
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import VisitsMap from "./Widgets/VisitsMap";
import VisitsChart from "./Widgets/VisitsChart";
import ProjectsPopularity from "./Widgets/ProjectsPopularity";
import DataPie from "./Widgets/DataPie";
import VisitsLogs from "./Widgets/VisitsLogs";
import {makeStyles} from "@material-ui/core";

const Dashboard = (props) => {

    const useStyles = makeStyles(theme => ({
        paper: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(0),
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));

    const classes = useStyles();

    return (
        <Container maxWidth="lg">

            <Grid container spacing={3}>


                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <VisitsChart data={props.data}/>
                    </Paper>
                </Grid>


                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <ProjectsPopularity data={props.data}/>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <VisitsMap data={props.data}/>
                    </Paper>
                </Grid>


                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <DataPie data={props.data} filter={(visit) => visit.agent.browser} label="Browsers"/>
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <DataPie data={props.data} filter={(visit) => visit.agent.platform} label="Platforms"/>
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <DataPie data={props.data} filter={(visit) => visit.agent.mobile}
                                 formatter={(isMobile) => isMobile ? "Mobile" : "Desktop"} label="Devices"/>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <VisitsLogs data={props.data}/>
                    </Paper>
                </Grid>

            </Grid>
        </Container>
    )

};

Dashboard.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Dashboard;