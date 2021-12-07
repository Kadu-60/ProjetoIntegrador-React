import React from 'react'
import './Footer.css'
import Telefone from '../../../assets/imgs/footer/telefone.png'
import Boleto from '../../../assets/imgs/teste/boleto.png'

function Footer(props) {

    return (
        <>
            <body>

                <footer>
                    {/* Inicio frete grátis */}

                    <div className="topBar">
                        <div id="tpl-center" className="tpl-center">
                            <section className="cadastroNew" id="cadastroNew">
                                <div className="texto" id="texto">
                                    
                                    <strong className="freteFixo">Entregas somente para São Paulo e Grande SP<br /></strong> <br />

                                </div>


                            </section>
                        </div>
                    </div>
                    {/* Fim frete grátis */}

                    {/* Inicio Footer */}


                    <div className="container-fluid middleArea">
                        <div id="tpl-center" className="row justify-content-center tpl-center">

                            <div className="coluna atendimento col-md-2 col-12 contact-box">
                                <h3 className="titulo-footer"> <b>Atendimento </b> </h3>
                                <span className="cellphone"><img id="cellphone" src={Telefone} alt="" width="60px"
                                    height="60px" /></span>
                                <div className="left">
                                    <strong className="texto-footer" id="telefone">(11) 99653-6532 </strong>
                                    <a className="link-footer" href="contato@devbrew.com.br">contato@devbrew.com.br</a>
                                    <span>Segunda a Sexta das 9h ás 18h</span>
                                </div>
                                <strong className="texto-footer" id="idade18">
                                    PRODUTOS DESTINADOS A <br />
                                    MAIORES DE 18 ANOS
                                </strong>
                            </div>


                            <div className="coluna ajuda col-md-2 col-12 contact-box">
                                <h3 className="titulo-footer"><b> Ajuda e Suporte</b></h3>
                                <ul className="itensPerguntas">
                                    <li className="item">
                                        <a className="link-footer" href="/faq">Perguntas Frequentes</a>
                                    </li>
                                    <li className="item">
                                        <a className="link-footer" id="/faq#pagamento">Forma de Pagamento</a>
                                        {/* <HashLink to="/faq#pagamento">Forma de Pagamento</HashLink> */}
                                    </li>
                                    <li className="item">
                                        <a className="link-footer" href="/faq#taxa">Taxas de Entrega</a>
                                    </li>
                                    <li className="item">
                                        <a className="link-footer" href="/faq#prazo">Prazo de Entrega</a>
                                    </li>
                                    <li className="item">
                                        <a className="link-footer" href="/faq#troca">Troca e Devolução</a>
                                    </li>
                                </ul>
                            </div>


                            <div className="coluna forma col-md-2 col-12 contact-box">
                                <h3 className="titulo-footer"><b>Formas de Pagamentos </b></h3>


                                <div className='pagamento' >
                                    
                                        <div className='col-3 fab fa-cc-visa' ></div>
                                        <div className='col-3 fab fa-cc-mastercard' ></div>
                                        <div className='col-4 fab fa-cc-discover' ></div>
                                    
                                    
                                        <div className='col-3 fab fa-cc-amex' ></div>
                                        <div className='col-3 fab fa-cc-diners-club' ></div>
                                        <div className='col-3 fab fa-cc-paypal' ></div>
                                        <div className='col-5'><img src={Boleto} width="35px"/> <svg className="pix" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="30px">
                                            <defs/>
                                            <g fill="white" fill-rule="evenodd" >
                                                <path d="M112.57 391.19c20.056 0 38.928-7.808 53.12-22l76.693-76.692c5.385-5.404 14.765-5.384 20.15 0l76.989 76.989c14.191 14.172 33.045 21.98 53.12 21.98h15.098l-97.138 97.139c-30.326 30.344-79.505 30.344-109.85 0l-97.415-97.416h9.232zm280.068-271.294c-20.056 0-38.929 7.809-53.12 22l-76.97 76.99c-5.551 5.53-14.6 5.568-20.15-.02l-76.711-76.693c-14.192-14.191-33.046-21.999-53.12-21.999h-9.234l97.416-97.416c30.344-30.344 79.523-30.344 109.867 0l97.138 97.138h-15.116z"/>
                                                <path d="M22.758 200.753l58.024-58.024h31.787c13.84 0 27.384 5.605 37.172 15.394l76.694 76.693c7.178 7.179 16.596 10.768 26.033 10.768 9.417 0 18.854-3.59 26.014-10.75l76.989-76.99c9.787-9.787 23.331-15.393 37.171-15.393h37.654l58.3 58.302c30.343 30.344 30.343 79.523 0 109.867l-58.3 58.303H392.64c-13.84 0-27.384-5.605-37.171-15.394l-76.97-76.99c-13.914-13.894-38.172-13.894-52.066.02l-76.694 76.674c-9.788 9.788-23.332 15.413-37.172 15.413H80.782L22.758 310.62c-30.344-30.345-30.344-79.524 0-109.868"/>
                                            </g>
                                            </svg></div>
                                    
                                    


                                </div>

                            </div>

                            <div className="coluna redes">
                                <h3 className="titulo-footer"><b> Redes Sociais</b></h3>
                                <div className='redesSocias d-flex justify-content-around'>
                                <a  href="https://www.facebook.com/devbrewcervejaria/?ref=pages_you_manage"> <div className="fab fa-facebook"></div> </a>
                                <a  href="https://www.instagram.com/devbrewcervejaria/"> <div className="fab fa-instagram"></div> </a>
                                </div>
                                
                            </div>



                        </div>

                    </div>


                    <div className="bottom">
                        <div className="tpl-center">
                            <small> Avenida Paulista, 10767 - Paulista - CEP: 00000-000 - São Paulo - SP - CNPJ 70.020.745/0001-14
                                <br />
                                Copyright © 2021, TODOS OS DIREITOS RESERVADOS.</small>
                        </div>
                    </div>

                </footer>

            </body>

            {/* Fim Footer */}
        </>
    )
}

export default Footer