import React from 'react'
import PropTypes from 'prop-types'


const Button = (props) => {
    return (

        <div className="button-background">
             {props.buttonIcon}
            
            <div className="button-icon flex">
               
                {props.buttonMessage}
                </div>
         </div>
     )
 }


export default Button
