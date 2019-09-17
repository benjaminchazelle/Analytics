import React from 'react';
import PropTypes from 'prop-types'
import IconButtonDrawerToggler from "../containers/IconButtonDrawerToggler";
import VisitOriginFilter from "../containers/VisitOriginFilter";
import VisitPeriodFilter from "../containers/VisitPeriodFilter";
import ResetButton from "../containers/ResetButton";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import ComputerIcon from '@material-ui/icons/Computer';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import RedditIcon from '@material-ui/icons/Reddit';
import {makeStyles, useTheme} from '@material-ui/core/styles';

const Side = (props) => {

    Side.propTypes = {
        open: PropTypes.bool.isRequired,
        onToggle: PropTypes.func.isRequired
    };

    const useStyles = makeStyles(theme => ({
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: 0,
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        iconography: {
            width: "50px"
        },
        center: {
            textAlign: 'center'
        }
    }));

    const classes = useStyles();
    const theme = useTheme();

    return (
        <Drawer open={props.open} onClose={props.onToggle}>
            <div className={classes.drawerHeader}>
                <b>Analytics on www.chazelle.pro</b>
                <IconButtonDrawerToggler>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </IconButtonDrawerToggler>
            </div>
            <Divider/>
            <List>

                <VisitOriginFilter icon={<ComputerIcon/>} label="Consider desktop visits" origin="desktop"/>
                <VisitOriginFilter icon={<PhoneAndroidIcon/>} label="Consider mobile visits" origin="mobile"/>
                <VisitOriginFilter icon={<RedditIcon/>} label="Consider bot visits" origin="bot"/>
                <VisitOriginFilter icon={<HowToRegIcon/>} label="Consider owner visits" origin="owner"/>

                <VisitPeriodFilter bound="from"/>
                <VisitPeriodFilter bound="to"/>

                <div className={classes.center}>
                    <ResetButton/>
                </div>

            </List>
        </Drawer>

    )
};

export default Side;