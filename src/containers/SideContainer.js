import {connect} from 'react-redux'
import Side from '../components/Side'
import {toggleDrawer} from "../actions/drawerActions";

const mapStateToProps = (state) => ({
    open: state.showDrawer,
});

const mapDispatchToProps = (dispatch) => ({
    onToggle: () => dispatch(toggleDrawer())
});

const SideContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Side);

export default SideContainer