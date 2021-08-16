import { ReactComponent as NavButton } from '../icons/grid.svg';
import { ReactComponent as HomeButton } from '../icons/house-door.svg';
import { ReactComponent as ChartButton } from '../icons/bar-chart.svg';
import { ReactComponent as CalendarButton } from '../icons/calendar-event.svg';
import { ReactComponent as Profile } from '../icons/person-circle.svg';
import React, { useState } from 'react';

import { CSSTransition } from 'react-transition-group';

// The Nav component contains Nav button and profile button
const Nav = () => {
    const [showNavBar, setShowNavBar] = useState(true);
    const [navWidth, setNavWidth] = useState(null);

    function calcWidth(el) {
        const width = el.offsetWidth;
        setNavWidth(width);
    }

    return (
        <div className="nav-group flex space-between" >
            <div className="nav-icons" style={{ width: navWidth, display: !showNavBar }}>
                <CSSTransition
                    in={showNavBar}
                    timeout={500}
                    classNames="nav-closed"
                    unmountOnExit
                    onEnter={calcWidth}>
                    <div className="nav-bar inactive flex" >
                        <NavButton className="nav-icon" onClick={() => setShowNavBar(!showNavBar)} />
                    </div>
                </CSSTransition>


                <CSSTransition
                    in={!showNavBar}
                    timeout={500}
                    classNames="nav-open"
                    unmountOnExit
                    onEnter={calcWidth}>
                    <div className="nav-bar active flex space-between">
                        <NavButton className="nav-icon" onClick={() => setShowNavBar(!showNavBar)} />
                        <HomeButton className="nav-icon" />
                        <ChartButton className="nav-icon" />
                        <CalendarButton className="nav-icon" />
                    </div>
                </CSSTransition>
            </div>

            <Profile className="profile" />
        </div>
    )
}

export default Nav
