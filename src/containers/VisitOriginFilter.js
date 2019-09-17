import {connect} from 'react-redux'
import {toggleVisitOriginFilter} from "../actions/visitFilterActions";
import SideCheckboxItem from "../components/SideCheckboxItem";

const mapStateToProps = (state, ownProps) => ({
    icon: ownProps.icon,
    label: ownProps.label,
    checked: state.visitFilter.origins[ownProps.origin]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: () => dispatch(toggleVisitOriginFilter(ownProps.origin))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideCheckboxItem)
