import { connect } from 'react-redux';
import Home from '../components/Home/Home';
import * as actions from "../store/actions";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    fetchAllStocks: () => dispatch(actions.fetchAllStocks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);