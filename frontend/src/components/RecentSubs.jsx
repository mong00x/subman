import React from 'react'

import { ReactComponent as AmazonLogo } from "../icons/subicons/Amazon.svg";
import { ReactComponent as FigmaLogo } from "../icons/subicons/Figma.svg";
import { ReactComponent as NetflixLogo } from "../icons/subicons/Netflix.svg";
import { ReactComponent as SlackLogo } from "../icons/subicons/Slack.svg";
import { ReactComponent as SpotifyLogo } from "../icons/subicons/Spotify.svg";
import { ReactComponent as YoutubeLogo } from "../icons/subicons/Youtube.svg";
import { ReactComponent as Plus } from '../icons/plus.svg';

const RecentSubs = ({name, price, period, start}) => {
    console.log(name)
    const Logo = () => {
        switch (name.toLowerCase()) {
            case 'netflix':
                return <NetflixLogo />
            case 'amazon':
                return <AmazonLogo />
            case 'figma':
                return <FigmaLogo />
            case 'spotify':
                return <SpotifyLogo />
            case 'slack':
                return <SlackLogo />
            case 'youtube':
                return <YoutubeLogo />
            default:
                return <Plus />
        }
    }    

    return (

        <div className="rs-background flex column space-around">
            {Logo()}
            <div className="rs-message">
                <p>Recently subscribed</p>
            </div>
         </div>
     )
}

export default RecentSubs
