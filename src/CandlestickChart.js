import React, {Component} from 'react';
import './CandlestickChart.css';

export class CandlestickChart extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.options !== this.props.options || nextState !== this.state;
    }

    componentDidUpdate(prevProps, prevState) {
        this.drawChart();
    }

    componentDidMount() {
        this.setChart();
    }

    render() {
        return (
            <div className="CandlestickChart" id="chart-1">
                Loading chart...
            </div>
        );
    }

    setChart() {
        let candlestickChart = new this.props.google.visualization.CandlestickChart(document.getElementById("chart-1"));
        this.setState({chart: candlestickChart});
    }

    drawChart() {
        let data = this.props.google.visualization.arrayToDataTable(this.props.dataTable, true);
        this.state.chart.draw(data, this.props.options);
    }
}
