import React from 'react'
import {ReactComponent as Slack} from '../icons/slack.svg'


const RecentSubs = () => {
    return (

        <div className="button-background flex column space-around">
            <Slack className="button-icon"/>
            <div className="button-message">
                <p>Recently subscribed</p>
            </div>
         </div>
     )
}

export default RecentSubs
