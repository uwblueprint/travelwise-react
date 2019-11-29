import React, { Component } from 'react';
import DonutChart from 'react-d3-donut';

import './score.css';

class ScoreView extends Component<{},{}> {
    constructor(props: any) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="score-container">
                <div className="section-header">Your Score</div>
                <div className="score-content">
                    <DonutChart
                        innerRadius={45}
                        outerRadius={60}
                        transition={false}
                        svgClass="score"
                        pieClass="score-donut"
                        displayTooltip={false}
                        strokeWidth={3}
                        data={[
                            {
                                count: 7,  
                                color: 'lightgreen'  
                            },
                            {
                                count: 3,
                                color: 'white'
                            }
                        ]} 
                    />
                    <div className="score-num">7/10</div>
                    <div className="company-list">
                        
                    </div>
                    <div className="score-btn-container">
                        <a className="score-btn" href="">View Leaderboards</a>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ScoreView;