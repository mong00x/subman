import React from 'react'
import {Doughnut} from 'react-chartjs-2'

const Chart = () => {
    return (
        <div style={{position:'relative', width:'15%', height:'auto', display:'flex', alignItems:'center'}}>
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
            <div style={{position:'absolute',width:'100%',height:'100%', textAlign:'center', display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                <p style={{marginTop:'12px'}}>
                3
                </p>
                </div>

        </div>
    )
}

export default Chart
