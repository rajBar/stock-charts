import { connect } from 'react-redux';
import Charting from '../components/Charting/Charting';
import {selectChartData} from '../store/selectors/stocks';

const mapStateToProps = (state, ownProps) => {
    const { dataType } = ownProps;
    return {
        chartData: selectChartData(state, dataType),
    };
}

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Charting);