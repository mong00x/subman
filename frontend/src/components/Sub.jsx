import React from 'react'
import Chart from './Chart'
// import {ReactComponent as Netflix} from '../../icons/subicons/Netflix.svg'
import {ReactComponent as Netflix} from '../icons/Netflix.svg'
import {ReactComponent as Amazon} from '../icons/Amazon.svg'
import {ReactComponent as Figma} from '../icons/Figma.svg'
import {ReactComponent as Spotify} from '../icons/Spotify.svg'
import {ReactComponent as Slack} from '../icons/Slack.svg'
import {ReactComponent as Plus} from '../icons/plus.svg'
import {ReactComponent as Youtube} from '../icons/Youtube.svg'

const Sub = ({name, price, period, icon}) => {
    console.log(name)
    console.log(icon)
    const Logo = () => {
        switch (name.toLowerCase()) {
            case 'netflix':
                return <Netflix />
            case 'amazon':
                return <Amazon />
            case 'figma':
                return <Figma />
            case 'spotify':
                return <Spotify />
            case 'slack':
                return <Slack />
            case 'youtube':
                return <Youtube />
            default:
                return <Plus />
        }
    } 

    
    return (
        <div className="sub-item flex space-between">
            <div className="sub-icon-background flex">
                {Logo()}
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
