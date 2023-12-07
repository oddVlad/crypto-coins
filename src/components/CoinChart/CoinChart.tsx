import React, { useEffect, useRef } from 'react';
import { Chart } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    ChartData,
    ChartOptions,
    registerables,
} from 'chart.js';
import { ICoinHistory } from '../../types/coinHistory';
import { CHART_LABELS_FORMATS, DATE_FORMAT, GRAPH_COLOR_SHEMA, GRAPH_STATE, HISTORY_INTERVALS, MAX_TICKS_LIMIT } from '../../constans/values';
import moment from 'moment';

interface ICoinChartProps {
    data: ICoinHistory[],
    interval?: string,
    isPositive: boolean,
}

ChartJS.register(...registerables);

const CoinChart: React.FC<ICoinChartProps> = ({ data, isPositive, interval = HISTORY_INTERVALS.DAY }) => {
    const chartRef = useRef<ChartJS>(null);
    const labels = data.map(item => item.date);
    const chartData: ChartData = {
        labels: labels,
        datasets: [{
            fill: true,
            pointStyle: false,
            data: data.map(item => +item.priceUsd),
        }],
    };

    const chartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        ...GRAPH_COLOR_SHEMA[isPositive ? GRAPH_STATE.POSITIVE : GRAPH_STATE.NEGATIVE],
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    maxTicksLimit: MAX_TICKS_LIMIT,
                    callback: (tickValue, index) => {
                        return moment(labels[index]).format(CHART_LABELS_FORMATS[interval]);
                    },
                },
            },
            y: {
                position: 'right',
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context: any) => `${context.formattedValue} $`,
                    title: (context: any) => moment(context[0].label).format(DATE_FORMAT.CHART_TOOLTIP_TITLE),
                }
            },
            legend: {
                display: false,
            }
        },
    };

    const chartResize = () => {
        chartRef.current?.resize();
    };

    useEffect(() => {

        window.addEventListener('resize', chartResize);

        return () => {
            window.removeEventListener('resize', chartResize);
        }
    }, []);

    return (
        <Chart
            type='line'
            ref={chartRef}
            data={chartData}
            options={chartOptions}
            className='cursor-pointer'
        />
    )
}

export default CoinChart