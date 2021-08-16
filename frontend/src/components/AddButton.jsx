import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


const AddButton = (props) => {
    return (

        <Link to='/Add'>
            <div className="button-background flex column space-around">
                {props.buttonIcon}
                <div className="button-message">

                <p>{props.buttonMessage}</p>
                </div>
            </div>
         </Link>
       
     )
 }


export default AddButton
