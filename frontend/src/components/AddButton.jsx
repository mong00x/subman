import React from 'react'
import PropTypes from 'prop-types'


const AddButton = (props) => {
    return (

        <div className="button-background flex column space-around">
            <div >
                {props.buttonIcon}
            </div>
            <div className="button-message">
                <p>{props.buttonMessage}</p>
            </div>
         </div>
     )
 }


export default AddButton
