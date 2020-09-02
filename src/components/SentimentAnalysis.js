import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class SentimentAnalysis extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Negative', '', 'Neutral', '', 'Positive'],
                datasets: [{
                    label: 'Number of comments',
                    data: [173, 189, 220, 160, 199], // *** replace this with data from API ***
                    backgroundColor: [
                        '#F0C0C0',
                        '#F0A8A8',
                        '#F09090',
                        '#F06060',
                        '#F03030',
                    ]}
                ]
            }
        }
    }

    render () {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    // width={50}
                    // height={200}
                    options={{
                        maintainAspectRatio: true,
                        title: {
                            text: 'Comment Sentiment Analysis',
                            fontSize: 20,
                            display: true
                        },
                        legend: {
                            position: 'bottom',
                            display: true
                        }
                    }}
                />
            </div>
        )
    }
}

export default SentimentAnalysis;







// ______Graveyard________

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