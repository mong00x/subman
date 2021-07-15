import React from 'react'
import Chart from './Chart'
import {ReactComponent as YoutubeLogo} from '../icons/subicons/Youtube.svg'


const Sub = ({name, price, period}) => {
    console.log(name)
    const url = 'https://raw.githubusercontent.com/mitchelljphayes/subman/9bd653307b1128bf23fd0cb38bbe74b7e279e2b4/frontend/src/icons/subicons/'
    const iconPath = url+name
    console.log(iconPath)
    return (
        <div className="sub-item flex space-between">
            <div className="sub-icon-background flex">
                <img src={iconPath} alt="" />
            </div>
            <div className="sub-description flex">
                <div className="textarea">
                    <p className="f3">{name}</p>
                    <span className="f5 bold">{price}</span><span className="f2 gray"> /per {period}</span>
                </div>
                
            </div>
            <Chart />
            
        </div>
        
    )
}

export default Sub
