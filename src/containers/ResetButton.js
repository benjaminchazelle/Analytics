import {connect} from 'react-redux'
import {resetFilters} from '../actions/visitFilterActions'
import Button from '@material-ui/core/Button';

const mapStateToProps = () => ({
    variant: "contained",
    color: "primary",
    children: "Reset"
});

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(resetFilters())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)
