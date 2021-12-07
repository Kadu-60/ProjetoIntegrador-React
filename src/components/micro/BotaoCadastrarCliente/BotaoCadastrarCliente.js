import React from 'react'
import './BotaoCadastrarCliente.css'
import { Link } from 'react-router-dom'

function BotaoCadastrarCliente(props) {

    const typeButton = () => {
        if (props.navigation) {
            return (
                <Link to={props.route} className={"btn-custom-default " + props.class}>
                    {props.label}
                </Link>
                )
        } else {
            return (
                <button onClick={(event) => props.onClick(event)} className={"btn-custom-default " + props.class}>
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

export default BotaoCadastrarCliente