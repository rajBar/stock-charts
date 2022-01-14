import React, {Component} from 'react';
import {isMobile, mobileVendor, mobileModel} from 'react-device-detect';
import DateAndStock from "../../containers/DateAndStocks";
import Charting from "../../containers/Charting";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alerted: false,
            dataType: "c",
        };

        this.changeDataType = this.changeDataType.bind(this);
    }

    async notifyPhone() {
        const publicIp = require('public-ip');
        const ipv4 = await publicIp.v4();
        const platform = isMobile ? `${mobileVendor} ${mobileModel}` : navigator.platform;

        // const url = 'https://raj.bariah.com:2010/location?ipAddress=' + ipv4 + "&device=" + platform + "&site=Stocks";
        const url = 'https://maker.ifttt.com/trigger/site_visited/with/key/b_Yu8_AU_JIDYDYR_WXF5-?value1=' + ipv4 + "&value2=" + platform + "&value3=Stocks";
        if(!this.state.alerted) {
            fetch(url, {
                method: 'post'
            });
            this.setState({
                ...this.state,
                alerted: true,
            });
        }
    }

    componentDidMount() {
        const { fetchAllStocks } = this.props;
        fetchAllStocks();
    }

    changeDataType(event) {
        this.setState({
            ...this.state,
            dataType: event.target.value
        });
    }

    render() {
        // this.notifyPhone();
        const { dataType } = this.state;

        return (
            <div>
                <h3>Select up to 3 stocks and a Date Range</h3>
                <DateAndStock />
                <select value={dataType} onChange={this.changeDataType}>
                    <option value={'c'}>Close Price</option>
                    <option value={'h'}>High Price</option>
                    <option value={'l'}>Low Price</option>
                    <option value={'o'}>Open Price</option>
                </select>
                <Charting dataType={dataType} />
            </div>
        )
    }
}

export default Home;
