import React from 'react';
import PropTypes from "prop-types";
import HowToRegIcon from '@material-ui/icons/HowToReg';
import ComputerIcon from '@material-ui/icons/Computer';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import RedditIcon from '@material-ui/icons/Reddit';
import PersonIcon from '@material-ui/icons/Person';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {format, formatDistanceStrict} from 'date-fns'
import {makeStyles} from "@material-ui/core";

const VisitsLogs = (props) => {

    const useStyles = makeStyles(() => ({
        icons : {
            minWidth: "50px"
        }
    }));

    const classes = useStyles();

    return (
        <>
            <h2>Logs</h2>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell/>
                        <TableCell>IP</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Duration</TableCell>
                        <TableCell>Lang</TableCell>
                        <TableCell>Platform</TableCell>
                        <TableCell>Browser</TableCell>
                        <TableCell>Geocode</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    props.data.map((visit, i) => (
                        <TableRow key={i}>
                            <TableCell className={classes.icons}>
                                {visit.agent.mobile ? <PhoneAndroidIcon/> : <ComputerIcon/>}
                                {visit.agent.bot ? <RedditIcon/> : (visit.ip === "82.242.194.92" ? <HowToRegIcon/> :
                                    <PersonIcon/>)}
                            </TableCell>
                            <TableCell>{visit.ip}</TableCell>
                            <TableCell>{format(new Date(parseInt(visit.start)), "EEE d MMM yyyy HH:mm:ss")}</TableCell>
                            <TableCell>{formatDistanceStrict(new Date(parseInt(visit.start)), new Date(parseInt(visit.projects.slice(-1)[0].time)))}</TableCell>
                            <TableCell>{visit.lang}</TableCell>
                            <TableCell>{visit.agent.platform}</TableCell>
                            <TableCell>{visit.agent.browser}</TableCell>
                            <TableCell>{[visit.geocode.city || visit.geocode.country || visit.geocode.continent, visit.geocode.org].join(", ")}</TableCell>
                        </TableRow>
                    ))
                }
                </TableBody>
            </Table>

        </>
    )

};

VisitsLogs.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default VisitsLogs;