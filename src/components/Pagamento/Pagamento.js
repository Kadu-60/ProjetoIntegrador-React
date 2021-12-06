import React, { useState } from 'react'
import './Pagamento.css'
import ImgCartao from "./images/cartao-de-credito.png"
function Pagamento(props) {

    const idPag = props.metodoPagId
    const final = props.finalCartao
    const parcelas = props.parcelas
    console.log(props)
    console.log(idPag)

    const metodoDePagamento = (props) => {
        if (idPag == '1') {
            return (
                <>
                    <p class="pagamentoCaixa d-flex justify-content-center">
                        <img class="pagamentoCartao" src={ImgCartao} alt="" />
                        (Crédito) **** {final}
                        <br />
                        {parcelas}
                    </p>
                </>
            )
        } else if (idPag == '2') {
            return (
                <>
                    <p class="pagamentoCaixaBoleto d-flex justify-content-center">
                        À VISTA NO BOLETO
                    </p>
                </>
            )
        } else {
            return (
                <>

                    <p class="pagamentoCaixaBoleto d-flex justify-content-center">
                        À VISTA NO PIX
                    </p>

                    
                    <button type="button" class="btn btnQRCode" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Ver QR code
                    </button>

                    
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Seu QR code</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body d-flex flex-column">
                                <p className='d-flex justify-content-center'>
                    Seu QR code para pagamento
                    </p>
                    <img className='imgPIXFinal' src='https://news.comschool.com.br/wp-content/uploads/2016/05/como-gerar-qrcode-comschool.png' />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <p className='textoQRCode'>
                    Seu QR code para pagamento
                    </p>
                    <img className='imgPIXFinal' src='https://news.comschool.com.br/wp-content/uploads/2016/05/como-gerar-qrcode-comschool.png' /> */}

                </>

            )
        }

    }

    return (
        metodoDePagamento()
    )


}

export default Pagamento