import React from 'react'
import Nav from '../components/Nav'
import TotalSubs from '../components/TotalSubs'
import Sub from "../components/Sub"

/* TEMPORARY, FOR TESTING PURPOSES */
import {ReactComponent as YoutubeLogo} from '../icons/youtube-logo.svg'
import {ReactComponent as PieChart} from '../icons/pie-chart.svg'


const HomePage = () => {
    return (
        <div className="container">
            Home Page
            <Nav/>
            <TotalSubs />
            <Sub 
                subIcon={<YoutubeLogo className="sub-icon"/>}
                subName="Youtube Premium"
                subPrice="$99.99"
                subTimePeriod="month"
                subTimeLeftIcon={<PieChart className="sub-time-left-icon"/>}
            />
            <Sub 
                subIcon={<YoutubeLogo className="sub-icon"/>}
                subName="Netflix"
                subPrice="$32.50"
                subTimePeriod="week"
                subTimeLeftIcon={<PieChart className="sub-time-left-icon"/>}
            />
            <Sub 
                subIcon={<YoutubeLogo className="sub-icon"/>}
                subName="Figma"
                subPrice="$100"
                subTimePeriod="year"
                subTimeLeftIcon={<PieChart className="sub-time-left-icon"/>}
            />
            <Sub 
                subIcon={<YoutubeLogo className="sub-icon"/>}
                subName="Monash University"
                subPrice="$10000"
                subTimePeriod="year"
                subTimeLeftIcon={<PieChart className="sub-time-left-icon"/>}
            />
        </div>
    )
}

export default HomePage
