import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import {fetchVisitData} from '../actions/visitDataActions'
import {getVisibleVisitData} from '../selectors'
import Dashboard from '../components/Dashboard'
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import red from '@material-ui/core/colors/red';

class DashboardContainer extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchVisitData());
    }

    render() {


        const {error, loading, data} = this.props;

        if (error) {
            const alert = {
                backgroundColor: red[500],
                color: "white",
                padding: "10px",
                textAlign: "center",
                fontWeight : "bold",
                fontSize: "18px",
                marginTop: "20px"
            };

            return <>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper style={alert}>
                                Error !  {error !== null && error.message}
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </>
        }

        if (loading) {
            const centerStyle = {
                textAlign: "center",
                marginTop: "20px"
            };
            return <div style={centerStyle}><CircularProgress/></div>;
        }

        return (
            <Dashboard data={data}/>
        );
    }
}

const mapStateToProps = state => ({
    data: getVisibleVisitData(state),
    loading: state.visitData.loading,
    error: state.visitData.error
});

DashboardContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(DashboardContainer);
