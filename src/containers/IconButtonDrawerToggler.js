import {connect} from 'react-redux'
import {toggleDrawer} from '../actions/drawerActions'
import IconButton from '@material-ui/core/IconButton';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps
});

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(toggleDrawer())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IconButton)
