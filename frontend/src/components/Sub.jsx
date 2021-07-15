import React from 'react'
import {ReactComponent as YoutubeLogo} from '../icons/youtube-logo.svg'
import {ReactComponent as PieChart} from '../icons/pie-chart.svg'


const Sub = (props) => {
    return (
        <div className="sub-item flex space-between">
            <div className="sub-icon-background flex">
                {props.subIcon}
            </div>
            <div className="sub-description flex">
                <div className="textarea">
                    <p className="f3">{props.subName}</p>
                    <span className="f5 bold">{props.subPrice}</span><span className="f2 gray"> /per {props.subTimePeriod}</span>
                </div>
                
            </div>
            <div className="sub-time-left-icon-background flex">
                {props.subTimeLeftIcon}
            </div>
        </div>
    )
}

export default Sub
