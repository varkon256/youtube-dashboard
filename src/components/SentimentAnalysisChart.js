import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class SentimentAnalysisChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                // label: '# of Comments',
                datasets: [
                    {
                        label:  'Positive',
                        stack: '1',
                        data: [100],  // *** replace this with data from API ***
                        backgroundColor: [
                            // '#F0C0C0',  this is the full color palette if we use 5 categories
                            // '#F0A8A8',
                            // '#F09090',
                            // '#F06060',
                            '#F03030',
                        ]
                    },
                    {
                        label: 'Neutral',
                        stack: '1',
                        data: [250],  // *** replace this with data from API ***
                        backgroundColor: [
                            '#F09090',
                        ]
                    },
                    {
                        label:  'Negative',
                        stack: '1',
                        data: [25],  // *** replace this with data from API ***
                        backgroundColor: [
                            '#F0C0C0',
                        ]
                    },
                ]
            }
        }
    }

    render () {
        return (
            <div className="chart">
                <HorizontalBar
                    data={this.state.chartData}
                    height={40}
                    options={{
                        scales: {
                            xAxes: [{
                                display: false,
                                stacked: true,
                                barPercentage: 1

                            }],
                            yAxes: [{
                                display: false,
                                stacked: true,
                                barPercentage: 0.8
                            }],
                        }, 
                        maintainAspectRatio: false,
                        title: {
                            text: 'Comment Sentiment Analysis',
                            fontSize: 18,
                            display: false
                        },
                        legend: {
                            position: 'bottom',
                            display: false
                        }
                    }}
                />
            </div>
        )
    }
}

export default SentimentAnalysisChart;







// ______In case we use the image that the python script generates________

// const SentimentAnalysis = () => {

//     return(
//         <div className="Card">
//             <h2>Comments Analysis</h2>
//             <img 
//                 src={require('../images/sent_analysis.png')}
//                 alt="sentiment analysis plot"/>
//         </div>
//     )
// }

// export default SentimentAnalysis;