import React from 'react'
import {ReactComponent as NavButton} from '../icons/grid.svg'
import {ReactComponent as HomeButton} from '../icons/house-door.svg'
import {ReactComponent as ChartButton} from '../icons/bar-chart.svg'
import {ReactComponent as CalendarButton} from '../icons/calendar-event.svg'
import {ReactComponent as Profile} from '../icons/person-circle.svg'
import {useState} from 'react'

// The Nav component contains Nav button and profile button
const Nav = () => {
    const [showNavBar, setShowNavBar] = useState(true)
    console.log(showNavBar)

    return (
        <div className="nav-group flex space-between">
            {showNavBar ? 
                
                (<div className="nav-bar inactive flex">
                    <NavButton className="nav-icon" onClick={() => setShowNavBar(!showNavBar)}/>
                </div>) 
                : 
                (<div className="nav-bar active flex space-between">
                    <NavButton className="nav-icon" onClick={() => setShowNavBar(!showNavBar)}/>     
                    <HomeButton className="nav-icon"/>     
                    <ChartButton className="nav-icon"/>     
                    <CalendarButton className="nav-icon"/>     
                </div>)}
            <Profile className="profile"/>
        </div>
    )
}

export default Nav
