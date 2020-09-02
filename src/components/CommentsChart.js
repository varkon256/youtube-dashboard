import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {line, Line} from 'react-chartjs-2';
const StyledCommentsChart = styled.div`
    width: 100%;
`;

function CommentsChart(props) {
    const [chartData, setChartData] = useState({});
    const canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    let gradientFill = ctx.createLinearGradient(0, 400, 0, 0);
    gradientFill.addColorStop(1, "rgba(233, 158, 158, 1)");
    gradientFill.addColorStop(0, "rgba(255, 215, 215, 0.31)");
    let chart = ()=>{
        console.log("Chart init");
        setChartData({
            labels: ["0:00",'1:30','2:00','2:30','3:00'],
            datasets: [
            {
                label: "Comments",
                data: [10,20,0,30,80],
                backgroundColor: gradientFill,
                borderColor:  ["rgba(207, 42, 42, 0.79)"],
                pointBorderColor: "rgba(207, 42, 42, 0.79)",
                pointBackgroundColor: "#ffffff",
                pointHoverBackgroundColor: "rgba(207, 42, 42, 0.79)",
                pointHoverBorderColor: "rgba(207, 42, 42, 0.79)#80b6f4",
                pointBorderWidth: 5,
                pointHoverRadius: 6,
                pointHoverBorderWidth: 1,
                pointRadius: 2,
                borderWidth: 2
            }
            ]
        });
    }
    useEffect(()=>{
        chart();
    },[])
    
  return (
        <StyledCommentsChart>
            <div>
                <Line 
                    data={ chartData }
                    options= {
                        {
                            responsive: true
                        }
                    }
                    />
            </div>
        </StyledCommentsChart>
  );
}

export default CommentsChart;