
import React from 'react';
import moment from 'moment';
import { Line } from 'react-chartjs-2';


const template = {
    labels: [],
    datasets: [
        {
            label: 'Maximum',
            backgroundColor: 'black',
            borderColor: 'black',
            fill: false,
            data: []
        },
        {
            label: 'Average',
            backgroundColor: 'grey',
            borderColor: 'grey',
            fill: false,
            data: []
        },
        {
            label: 'Minimum',
            backgroundColor: 'silver',
            borderColor: 'silver',
            fill: false,
            data: []
        }
    ]
};

function transformData(template, arrayOfData) {
    
    let templateCopy = JSON.parse(JSON.stringify(template));

    arrayOfData.forEach(data => {
        templateCopy.labels.push(moment(data.week).format("ddd, D MMM YY"))
        templateCopy.datasets[0].data.push(data.max)
        templateCopy.datasets[1].data.push(data.avg)
        templateCopy.datasets[2].data.push(data.min)
    });
    return templateCopy
    
}

export default function Throughput(props) {
    
   
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