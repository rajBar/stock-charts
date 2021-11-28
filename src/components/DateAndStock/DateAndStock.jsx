import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const DateAndStock = props => {
    const today = new Date();
    const { allStockNames, updateSelectedStocks, updateStartDate, updateEndDate } = props;
    const [startDate, setStartDate] = useState(new Date(today.getFullYear(), today.getMonth(), today.getDate()-7));
    const [endDate, setEndDate] = useState(today);
    const [selectedStocks, setSelectedStocks] = useState([""])

    const changeFirstStock = event => {
        const newStocks = [...selectedStocks];
        newStocks[0] = event.target.value;
        setSelectedStocks(newStocks);
        updateSelectedStocks(newStocks);
    }

    const changeSecondStock = event => {
        const newStocks = [...selectedStocks];
        newStocks[1] = event.target.value;
        setSelectedStocks(newStocks);
        updateSelectedStocks(newStocks);
    }

    const changeThirdStock = event => {
        const newStocks = [...selectedStocks];
        newStocks[2] = event.target.value;
        setSelectedStocks(newStocks);
        updateSelectedStocks(newStocks);
    }

    const changeNumberOfStocks = add => {
        const newSelectedStocks = [...selectedStocks];
        if (add) {
            newSelectedStocks.push(allStockNames[0].symbol);
            console.log(newSelectedStocks);
            setSelectedStocks(newSelectedStocks);
            updateSelectedStocks(newSelectedStocks);
        } else {
            newSelectedStocks.pop();
            console.log(newSelectedStocks);
            setSelectedStocks(newSelectedStocks);
            updateSelectedStocks(newSelectedStocks);
        }
    }

    const amendStartDate = date => {
        setStartDate(date);
        updateStartDate(Math.round(date.getTime() / 1000));
    }

    const amendEndDate = date => {
        setEndDate(date);
        updateEndDate(Math.round(date.getTime() / 1000));
    }

    return (
        <div>
            <span>
                Start Date: <DatePicker selected={startDate} onChange={(date) => amendStartDate(date)} />
                End Date: <DatePicker selected={endDate} onChange={(date) => amendEndDate(date)} />
            </span>
            <span>
                {selectedStocks.length < 1 && <select value={selectedStocks[0]} onChange={changeFirstStock}>
                    {allStockNames.map(stock => {
                        return <option value={stock.symbol}>{stock.name}</option>
                    })}
                </select>}
                {selectedStocks.length > 1 && <select value={selectedStocks[1]} onChange={changeSecondStock}>
                    {allStockNames.map((stock, i) => {
                        return <option value={stock.symbol}>{stock.name}</option>
                    })}
                </select>}
                {selectedStocks.length > 2 && <select value={selectedStocks[2]} onChange={changeThirdStock}>
                    {allStockNames.map(stock => {
                        return <option value={stock.symbol}>{stock.name}</option>
                    })}
                </select>}
                {selectedStocks.length < 3 && allStockNames.length > 0 && <button onClick={() => changeNumberOfStocks(true)}>Add Stock</button>}
                {selectedStocks.length > 1 && <button onClick={() => changeNumberOfStocks(false)}>Remove Stock</button>}
            </span>
        </div>
    );
}

export default DateAndStock;