import React from 'react'
import Button from 'react-bootstrap/Button'
import './BotaoDash.css'
import { Link } from 'react-router-dom'

function BotaoDash(props){
    const typeButton = () => {
        if (props.navigation) {
            return (
                <Link to={props.route} className={"btn-custom-default " + props.class}>
                    {props.label}
                </Link>
                )
        } else {
            return (
                <button onClick={() => props.onclick} className={"btn-custom-default " + props.class}>
                    {props.label}
                </button>

                
            )
        }
        
    }

    return(
        <>
            {typeButton()}
        </>
    )
}

export default BotaoDash