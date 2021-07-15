import React from 'react'
import {ReactComponent as YoutubeLogo} from '../icons/youtube-logo.svg'
import {ReactComponent as PieChart} from '../icons/pie-chart.svg'


const Sub = ({name, price, period}) => {
    console.log(name)
    return (
        <div className="sub-item flex space-between">
            <div className="sub-icon-background flex">
            
            </div>
            <div className="sub-description flex">
                <div className="textarea">
                    <p className="f3">{name}</p>
                    <span className="f5 bold">{price}</span><span className="f2 gray"> /per {period}</span>
                </div>
                
            </div>
            <div className="sub-time-left-icon-background flex">
                {}
            </div>
            <div>
            <p>
            {name}

            </p>
        </div>
        </div>
        
    )
}

export default Sub
