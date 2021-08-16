import React from 'react'
import Chart from './Chart'
import {ReactComponent as YoutubeLogo} from '../icons/subicons/Youtube.svg'


const Sub = ({name, price, period, start}) => {
    
    console.log(name)
    const url = 'https://raw.githubusercontent.com/mitchelljphayes/subman/4748cdb21442ec0974eb84327c67ff25665ec0e8/frontend/src/icons/subicons/'
    const iconPath = url+name+'.svg'
    console.log(iconPath)
    return (
        <div className="sub-item flex space-between">
            <div className="sub-icon-background flex">
                <img src={iconPath} alt="" />
            </div>
            <div className="sub-description flex">
                <div className="textarea">
                    <p className="f3">{name}</p>
                    <span className="f5 bold">{parseFloat(price).toFixed(2)}</span><span className="f2 gray"> /per {period}</span>
                </div>
                
            </div>
            <Chart 
                period={period}
                start={start}    
            />
            
        </div>
        
    )
}

export default Sub
