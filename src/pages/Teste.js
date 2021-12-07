import { useState } from "react";
import { Icon } from 'semantic-ui-react'
import Cards from 'react-credit-cards'
import InputMask from "react-input-mask";
import './Teste.css'


function Tabs({parcelas1, parcelamento1, subtotal1}) {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')
    
    const [parcelas, setParcelas] = useState({parcelas1})
    const [parcelamento, setParcelamento] = useState({parcelamento1})
    const [subtotal, setSubtotal] = useState({subtotal1})

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="div-entrega" >
            <ul className="lista-carrinho-total">




                <div className="div-fundo" id="div-fundo">
                    <div className="bloc-tabs">
                        <button
                            className={toggleState === 1 ? "tabs-pagamento active-tabs" : "tabs-pagamento"}
                            onClick={() => toggleTab(1)}
                        >
                            Cartão
                        </button>
                        <button
                            className={toggleState === 2 ? "tabs-pagamento active-tabs" : "tabs-pagamento"}
                            onClick={() => toggleTab(2)}
                        >
                            Tab 2
                        </button>
                        <button
                            className={toggleState === 3 ? "tabs-pagamento active-tabs" : "tabs-pagamento"}
                            onClick={() => toggleTab(3)}
                        >
                            Tab 3
                        </button>

                    </div>
                    <div className="content-tabs">
                        <div
                            className={toggleState === 1 ? "contentPag  active-content" : "contentPag"}
                        >
                            <p> <Icon className="icone-resumo" name="credit card outline" /><b>Pagamento</b></p>
                                                <Cards
                                                    number={number}
                                                    name={name}
                                                    expiry={expiry}
                                                    cvc={cvc}
                                                    focused={focus}

                                                />
                                                <br />

                                                <label>Número do cartão *</label>
                                                <InputMask mask="9999999999999999" type="tel" name="number" value={number} onChange={e => setNumber(e.target.value)} onFocus={e => setFocus(e.target.name)} className="form-control input-endereco" placeholder="0000.0000.0000.0000" required />

                                                <label>Nome impresso no cartão *</label>
                                                <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} onFocus={e => setFocus(e.target.name)} className="form-control input-endereco" placeholder="" />

                                                <label>Validade *</label>
                                                <InputMask mask="99/99" type="text" name="expiry" value={expiry} onChange={e => setExpiry(e.target.value)} onFocus={e => setFocus(e.target.name)} className="form-control input-validade" placeholder="Ex: 12/28" />

                                                <label>Código de Segurança *</label>
                                                <InputMask mask="999" type="tel" name="cvc" value={cvc} onChange={e => setCvc(e.target.value)} onFocus={e => setFocus(e.target.name)} className="form-control input-cod-seg" placeholder="000" />


                                                <label>Parcelar*</label>
                                                <select type="text" onChange={event => { setParcelamento(event.target.value) }} className="form-control input-bairro" required>
                                                    <option value='' selected>Parcelamento</option>
                                                    {
                                                        parcelas1.map((parcela) => (
                                                            <option value={parcela.id_parcelamento} onChange={event => { setParcelamento(event.target.value) }}>{parcela.parcelamento} R$ {((((subtotal1 || 0) + 15) / parcela.qtdParcelas).toFixed(2).replace('.', ','))}  </option>
                                                        )
                                                        )
                                                    }

                                                </select>





                            
                            
                        </div>

                        <div
                            className={toggleState === 2 ? "contentPag  active-content" : "contentPag"}
                        >
                            <h2>Content 2</h2>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                                voluptatum qui adipisci.
                            </p>
                        </div>

                        <div
                            className={toggleState === 3 ? "contentPag  active-content" : "contentPag"}
                        >
                            <h2>Content 3</h2>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                                nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                                Accusamus in quia odit aspernatur provident et ad vel distinctio
                                recusandae totam quidem repudiandae omnis veritatis nostrum
                                laboriosam architecto optio rem, dignissimos voluptatum beatae
                                aperiam voluptatem atque. Beatae rerum dolores sunt.
                            </p>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    );
}

export default Tabs;
