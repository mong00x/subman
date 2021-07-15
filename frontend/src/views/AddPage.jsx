import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PresetSub from "../components/PresetSub";

import { ReactComponent as BackIcon } from "../icons/back-icon.svg";
import { ReactComponent as AmazonLogo } from "../icons/subicons/Amazon.svg";
import { ReactComponent as FigmaLogo } from "../icons/subicons/Figma.svg";
import { ReactComponent as NetflixLogo } from "../icons/subicons/Netflix.svg";
import { ReactComponent as SlackLogo } from "../icons/subicons/Slack.svg";
import { ReactComponent as SpotifyLogo } from "../icons/subicons/Spotify.svg";
import { ReactComponent as YoutubeLogo } from "../icons/subicons/Youtube.svg";


import { CSSTransition } from 'react-transition-group';


const AddPage = () => {
    const [activeMenu, setActiveMenu] = useState('presets');

    return (
        <div className="container">
            <div className="add-page-header flex">
                <Link to="/">
                    <BackIcon />
                </Link>

                <div className="add-page-title">
                    <h5>Add a new subscription:</h5>
                </div>
            </div>

            <div className="menu-options">
                <button className="popular-button" type="button" onClick={() => { setActiveMenu('presets') }}>Popular</button>
                <button className="custom-button" type="button" onClick={() => { setActiveMenu('custom') }}>Create Custom</button>
            </div>
            <hr />

            <CSSTransition
                in={activeMenu === 'presets'}
                timeout={500}
                classNames="presets-menu"
                unmountOnExit
            >
                <div className="menu">
                    <PresetSub
                        subName="Youtube"
                        subIcon={<YoutubeLogo />}
                    />
                    <PresetSub
                        subName="Netflix"
                        subIcon={<NetflixLogo />}
                    />
                    <PresetSub
                        subName="Amazon"
                        subIcon={<AmazonLogo />}
                    />
                    <PresetSub
                        subName="Spotify"
                        subIcon={<SpotifyLogo />}
                    />
                    <PresetSub
                        subName="Figma"
                        subIcon={<FigmaLogo />}
                    />
                    <PresetSub
                        subName="Slack"
                        subIcon={<SlackLogo />}
                    />
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'custom'}
                timeout={500}
                classNames="custom-menu"
                unmountOnExit
            >
                <div className="menu">
                    <form>
                        <div className="form-group">
                            <label for="custom-name">Name</label>
                            <input id="custom-name" placeholder="i.e. Netflix" type="text" />
                        </div>
                        <div className="form-group">
                            <label for="custom-price">Price (in AUD)</label>
                            <input id="custom-price" placeholder="i.e. $30" type="number" min="0.01" step="any"/>
                        </div>
                        <div className="form-group">
                            <label for="custom-start-date">Start Date</label>
                            <input id="custom-start-date" type="date"/>
                        </div>
                        <div className="form-group">
                            <label for="custom-charge-period">Charge Period</label>
                            <select id="custom-charge-period">
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </div>
                    </form>
                    <button type="submit" className="submit-button">Save</button>
                </div>
            </CSSTransition>
        </div>
    )
}

export default AddPage
