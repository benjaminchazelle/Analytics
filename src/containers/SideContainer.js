import {connect} from 'react-redux'
import Side from '../components/Side'

const mapStateToProps = (state) => ({
    open: state.showDrawer,
});


const SideContainer = connect(
    mapStateToProps,
)(Side);

export default SideContainer