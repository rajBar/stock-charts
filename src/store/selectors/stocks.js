export const selectStockNamesAndSymbols = state => {
    const names = []
    const size = 100;
    const stocks = state.stocks.stocks.slice(0, size);
    stocks.forEach(stock => names.push({name: stock.description, symbol: stock.symbol}));
    return names;
}

export const selectSelectedStocks = state => state.stocks.selectedStocks;

export const selectSelectedStockData = state => state.stocks.selectedStockData;


export const selectChartData = (state, type) => {
    const allStockNames = selectStockNamesAndSymbols(state)
    const selectedStockData = selectSelectedStockData(state);
    const stockData = [];
    selectedStockData.forEach((stock,j) => {
        if (stock?.t) {
            const timeSeriesData = [];
            for (let i = 0; i < stock.t.length; i++) {
                if (type === "c") timeSeriesData.push([new Date().setUTCSeconds(stock.t[i]), stock.c[i]]);
                else if (type === "h") timeSeriesData.push([new Date().setUTCSeconds(stock.t[i]), stock.h[i]]);
                else if (type === "l") timeSeriesData.push([new Date().setUTCSeconds(stock.t[i]), stock.l[i]]);
                else if (type === "o") timeSeriesData.push([new Date().setUTCSeconds(stock.t[i]), stock.o[i]]);
            }
            stockData.push({
                label: allStockNames[j].name,
                data: timeSeriesData
            })
        }
    })
    return stockData;
}

