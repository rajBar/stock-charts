import { connect } from 'react-redux';
import DateAndStocks from '../components/DateAndStock/DateAndStock';
import * as actions from "../store/actions";
import { selectStockNamesAndSymbols } from '../store/selectors/stocks';

const mapStateToProps = state => ({
    allStockNames: selectStockNamesAndSymbols(state),
});

const mapDispatchToProps = dispatch => ({
    updateSelectedStocks: stocks => dispatch(actions.updateSelectedStocks(stocks)),
    updateStartDate: date => dispatch(actions.updateStartDate(date)),
    updateEndDate: date => dispatch(actions.updateEndDate(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DateAndStocks);