import React from 'react'
import { Chart } from 'react-charts'

const Charting = props => {
    const { chartData } = props;

    const axes = [
        { primary: true, type: 'time', position: 'bottom' },
        { type: 'linear', position: 'left' }
    ]

    return (
        <div>
            <div style={{height: "600px"}}>
                {chartData.length > 0 && <Chart style={{maxHeight: "500px", maxWidth: "inherit"}} data={chartData} axes={axes} />}
            </div>
        </div>
    )
}

export default Charting;