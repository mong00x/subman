import React from 'react'
import {Doughnut} from 'react-chartjs-2'

const Chart = () => {
    return (
        <div style={{position:'relative', width:'15%', height:'auto'}}>
            <Doughnut 
                data={{
                    datasets: [{
                        data: [3, 27],
                        backgroundColor: [
                            '#0b3df2',
                            '#999999',
                        ],
                    }]
                }}
                options={{
                    events:[null], 
                    
                }}
                
            />
        </div>
    )
}

export default Chart
