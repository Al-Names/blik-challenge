
import React from 'react';
import moment from 'moment';
import { Line } from 'react-chartjs-2';

const template = {
    labels: [],
    datasets: [
        {
            label: 'Deliveries',
            backgroundColor: 'grey',
            borderColor: 'black',
            fill: false,
            data: []
        }
    ]
};

function transformData(template, arrayOfData) {
    let templateCopy = JSON.parse(JSON.stringify(template));

    arrayOfData.forEach(data => {
        templateCopy.labels.push(moment(data.timestamp).format("ddd, D MMM YY"))
        templateCopy.datasets[0].data.push(data.value)
    });
    return templateCopy
}

export default function Delivery(props) {
    let data;
    if (props.data) {
        data = transformData(template, [].concat(props.data).reverse())
    } else {
        data = {}
    }

    return (
        <Line data={data} />
    )
}