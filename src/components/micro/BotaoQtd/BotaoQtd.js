import React from 'react'
import './BotaoQtd.css'

function BotaoQtd(props) {

    return(
        <>
        <div class="col mt-5">
            <div class="btn-group inline">
                <input type="button" class="btn btn-default border" value="+"/>
                <input class="form-control rounded-0" type="number" name="quantidade" onchange="preencheTotalProduto()" min="0" max="<?= $tamanho['estoque'];?>" value="0"/>
                <input type="button" class="btn btn-default border" value="-"/>
            </div>
        </div>
        </>
    )
}

export default BotaoQtd