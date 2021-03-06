import React from 'react';
import moment from 'moment';
import { Bar } from 'react-chartjs-2';


const template = {
    labels: [],
    datasets: [
        {
            label: 'Consumer',
            backgroundColor: 'black',
            stack: '1',
            data: []
        },
        {
            label: 'Producer',
            backgroundColor: 'grey',
            stack: '1',
            data: []
        },
        {
            label: 'In Transit',
            backgroundColor: 'silver',
            stack: '1',
            data: []
        }
    ]
};

function transformData(template, arrayOfData = {}, distributionOption, barStyle) {
    let templateCopy = JSON.parse(JSON.stringify(template));

    arrayOfData.forEach(data => {
        let value = {};

        switch (distributionOption) {
            case 'alle':
                value.consumer = data.value.consumer.empty + data.value.consumer.full
                value.producer = data.value.producer.empty + data.value.producer.full
                value.transit = data.value.transit.empty + data.value.transit.full
                break;
            case 'leergut':
                value.consumer = data.value.consumer.empty 
                value.producer = data.value.producer.empty
                value.transit = data.value.transit.empty
                break;
            case 'vollgut':
                value.consumer = data.value.consumer.full
                value.producer = data.value.producer.full
                value.transit = data.value.transit.full
                break;
            default:
                break;
        }
        // switch (barStyle) {
        //     case 'stacked':
        //         templateCopy.datasets[1].stack = 1
        //         templateCopy.datasets[2].stack = 1
                
        //         break;
        //     case 'split':
        //         templateCopy.datasets[1].stack = 2
        //         templateCopy.datasets[2].stack = 3
        //         break;
        //     default:
        //         break;
        // }
        
        templateCopy.labels.push(moment(data.timestamp).format("ddd, D MMM YY"))
        templateCopy.datasets[0].data.push(value.consumer)
        templateCopy.datasets[1].data.push(value.producer)
        templateCopy.datasets[2].data.push(value.transit)
        
    });
    return templateCopy
}

export default function Distribution(props) {
    let data = {};
    let templateCopy = JSON.parse(JSON.stringify(template));

    if (props.data) {
        data = transformData(template, [].concat(props.data).reverse(), props.distributionOption)
    } else {
        data = {}
    }
    
    function stackBars(e) {
        e.preventDefault();
        templateCopy.datasets[1].stack = '2'
        templateCopy.datasets[2].stack = '3'
        console.log('The link was clicked.');
        console.log(templateCopy.datasets[0].stack);
      }
      
    return (
        
        <Bar data={data} />

    )
}