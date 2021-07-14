import React from 'react'
import {useState} from 'react'
import {ReactComponent as DownButton} from '../icons/chevron-down.svg'

const TotalSubs = () => {
    const [showDetail, setShowDetail] = useState(false)
    const onClick = () =>{
        setShowDetail(!showDetail)
        console.log(showDetail)
    }
    return (
        <div className={showDetail? "total-subs expand" : "total-subs"}>
            <div className="total flex space-between">
                <div className="textarea">
                    <p className="f3">Total for you subscriptions:</p>
                    <span className="f5 bold">$156.9</span><span className="f2 gray"> /per month</span>
                </div>
                <DownButton className={showDetail? "rotate down" : "rotate" }onClick={onClick}/>
            </div>
        {showDetail ? 
            (<div className="">
                <hr/>
                <ul className="detail textarea f2">
                    <li className="flex space-between">
                        <span>Entertainment:</span><span>$52.6</span>
                    </li>
                    <li className="flex space-between">
                        <span>Utilities:</span><span>$52.6</span>
                    </li>
                    <li className="flex space-between">
                        <span>Work:</span><span>$52.6</span>
                    </li>
                    <li className="flex space-between">
                        <span>Other:</span><span>$52.6</span>
                    </li>
                </ul>
            </div>):(null)
        }
        
        </div>
    )
}

export default TotalSubs
