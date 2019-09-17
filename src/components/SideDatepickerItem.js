import React from 'react';
import PropTypes from 'prop-types'
import ListItem from "@material-ui/core/ListItem";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import {makeStyles} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";

const SideCheckboxItem = (props) => {

    SideCheckboxItem.propTypes = {
        label: PropTypes.string.isRequired,
        onChange: PropTypes.func,
    };

    const useStyles = makeStyles(() => ({
        datepicker: {
            width: "275px"
        }
    }));

    const classes = useStyles();

    return (
        <ListItem>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker className={classes.datepicker}
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label={props.label}
                                    format="MM/dd/yyyy"
                                    value={props.date}
                                    minDate={props.minDate}
                                    maxDate={props.maxDate}
                                    onChange={props.onChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                />
            </MuiPickersUtilsProvider>
        </ListItem>
    )

};

SideCheckboxItem.propTypes = {
    label: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    minDate: PropTypes.instanceOf(Date).isRequired,
    maxDate: PropTypes.instanceOf(Date).isRequired,
};

export default SideCheckboxItem;