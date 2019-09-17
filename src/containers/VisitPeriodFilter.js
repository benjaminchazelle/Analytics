import {connect} from 'react-redux'
import {setVisitPeriodFilter} from "../actions/visitFilterActions";
import SideDatepickerItem from "../components/SideDatepickerItem";

const mapStateToProps = (state, ownProps) => ({
    label: ownProps.bound === "from" ? "From" : "To",
    date: ownProps.bound === "from" ? state.visitFilter.period.from : state.visitFilter.period.to,
    minDate: ownProps.bound === "from" ? new Date(0) : state.visitFilter.period.from,
    maxDate: ownProps.bound === "from" ? state.visitFilter.period.to : new Date()
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (date) => dispatch(setVisitPeriodFilter(ownProps.bound, date))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideDatepickerItem)
