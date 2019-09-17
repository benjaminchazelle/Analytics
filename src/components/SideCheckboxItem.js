import React from 'react';
import PropTypes from 'prop-types'
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import {makeStyles} from "@material-ui/core";

const SideCheckboxItem = (props) => {

    SideCheckboxItem.propTypes = {
        icon: PropTypes.element.isRequired,
        label: PropTypes.string.isRequired,
        checked: PropTypes.bool,
        onChange: PropTypes.func,
    };

    const useStyles = makeStyles(() => ({
        iconography: {
            width: "50px"
        },
        label: {
            width: "180px"
        },
    }));

    const classes = useStyles();

    return (
        <ListItem button onClick={props.onChange}>
            <div className={classes.iconography}>
                {props.icon}
            </div>
            <div className={classes.label}>
                {props.label}
            </div>
            <div>
                <Checkbox checked={props.checked} color="primary"/>
            </div>
        </ListItem>
    )

};

export default SideCheckboxItem;