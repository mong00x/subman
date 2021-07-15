import React from 'react'
import {ReactComponent as Slack} from '../icons/Slack.svg'


const RecentSubs = () => {
    return (

        <div className="rs-background flex column space-around">
            <Slack className="rs-icon"/>
            <div className="rs-message">
                <p>Recently subscribed</p>
            </div>
         </div>
     )
}

export default RecentSubs
