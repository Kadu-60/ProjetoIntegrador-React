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
                    <button type="button" class="btn btnBoletoFinal" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Ver Boleto
                    </button>

                    
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Seu Boleto</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body d-flex flex-column">
                                <p className='d-flex justify-content-center'>
                    Seu Boleto code para pagamento
                    </p>
                    <img className='imgBoletoFinal' src='https://1.bp.blogspot.com/-scgadwZ4RDI/XoSif9g1ZdI/AAAAAAADFyo/vfg33DGAzPQidEwEtHG499FwQZbdiS7xACEwYBhgLKs4DAMBZVoBzgVbE0lMJw7ig2LJTt_C-YuFitdIarh-e6ySj_fDwVlrLSIPljj4jzhQ5yD8GUk6FQ40Pctiv1R1DdHaPUyFI07UKG27keEL79FQ23vMnXjMgXsL0PXqkVMOuFP4Jjp-_6SaQUKQhU19L5iNE_OPFLscg8N8MLiPtIa1Hq_Y6D8zMxP2_zklYwxg5WJHUx_JHuICQv4XKzEiFGqgNbXfwxMzqHADBLseryEp5_4H0hA7gXsS2kzlPGtjxV5s1A2s34iiNWjNXsPHzo3wW3NNjsQ3XOFdELGcwbTx-SWyCUEIcAZb5lCf7NqbPN9fXjrCQ0MB0H455SqyvTA0KkzWkFX0ZK3A_gakdjrIyfKzWjspAiSSpnNaBmmGOlmx0rxarcH-v4LxKLrvAeoxcJAAzs8TTR8Yoo2ngA-SZY4cpy2AVLQ_B7ppce9JzgRm0Hk4awZN_jKr9LmjqG02gVgK1DW3yruorCDuIwVJqKu4XQy_lvBVghsu4XdTPoMPjbl_9ckMeTw1mdhAGnvi-rQpd_CQzamEaxFsMqNq3sguHihUuOiG36Trs4f8iMmk_z6L-PH38viAlHICrdYnSfYAxOWjMNYyi_027MPXNkvQF/s1600/Boleto%2BBancario%2B-%2BPadrao%2BBanco%2Bdo%2BBrasil%2B2.png' />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
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