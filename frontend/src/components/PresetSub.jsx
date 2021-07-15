import React from 'react'

import { ReactComponent as Arrow } from "../icons/arrow.svg"


const PresetSub = (props) => {
    return (
        <div className="sub-item flex space-between">
            <div className="sub-icon-background flex">
                {props.subIcon}
            </div>
            <div className="sub-description flex">
                <div className="textarea">
                    <p className="f3">{props.subName}</p>
                </div>
            </div>
            
            <Arrow />
        </div>
    )
}

export default PresetSub
