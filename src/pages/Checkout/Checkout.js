import React, { useState, useEffect } from 'react'
import './Checkout.css'
import './Checkout2.css'
//import 'bootstrap/dist/css'
import FormDefault from '../../components/macro/Forms/FormDefault/FormDefault'
import Button from '../../components/micro/Button/Button'
import { Container, Form, Row, Col, Accordion, FormControl, InputGroup } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'
import Produto1 from '../../assets/imgs/teste/cerveja.png'
import ProdutoCheckout from '../../components/micro/ProdutoCheckout/ProdutoCheckout'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import InputMask from "react-input-mask";
import axios from 'axios'
import { useHistory } from "react-router-dom"
import { Formik, Field } from 'formik';

import Swal from 'sweetalert2'
import Boleto from '../../assets/imgs/boleto/concessionariacomlegenda.png'

import ListaEnderecos from "../../components/micro/ListaEnderecos/ListaEnderecos"




const Checkout = (props) => {

    const [attComponent, setAttComponent] = useState(0)
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numeroEndereco, setNumeroEndereco] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [parcelas, setParcelas] = useState([])
    const [cliente, setCliente] = useState({})
    const [destinatario, setDestinatario] = useState(null)
    const [parcelamento, setParcelamento] = useState('')
    const [numeroPedido, setNumeroPedido] = useState([])
    const [URLPedidoFinalizado, setURLPedidoFinalizado] = useState([])
    const [frete, setFrete] = useState('')
    const [metodoPag, setMetodoPag] = useState(1)
    const [carregando, setCarregando] = useState(false)
    const [enderecos, setEnderecos] = useState([])
    const [endereco, setEndereco] = useState({
        "id_endereco": 0,
        "estado": "",
        "cidade": "",
        "bairro": "",
        "rua": "",
        "cep": "",
        "numero": "",
        "complemento": "",
        "ponto_referencia": "",
        "destinatario": ""
    })
    const [enderecoCobranca, setEnderecoCobranca] = useState({
        "id_endereco": 0,
        "estado": "",
        "cidade": "",
        "bairro": "",
        "rua": "",
        "cep": "",
        "numero": "",
        "complemento": "",
        "ponto_referencia": "",
        "destinatario": ""
    })
    const [cards, setCards] = useState([])
    const [subtotal, setSubtotal] = useState('')
    const [cartaoPreenchido, setCartaoPreenchido] = useState(false)
    const [cartaoFuturo, setCartaoFuturo] = useState(false)

    const [idCartaoPreenchido, setIdCartaoPreenchido] = useState(1)
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
        setMetodoPag(index);
        gambiarraPagamento(index);
    };

    const gambiarraPagamento = (id) => {
        if (id == 1) {
            setNumber('');
            setName('');
            setExpiry('');
            setCvc('');
        } else if (id == 2) {
            setNumber('9999999999999999');
            setName('BOLETO');
            setExpiry('11/31');
            setCvc('000');
            setParcelamento(1)

        } else if (id == 3) {
            setNumber('9999999999999999');
            setName('PIX');
            setExpiry('11/31');
            setCvc('000');
            setParcelamento(1)
        }


    }


    const history = useHistory();

    // const [values, setValues] = useState(initialValues);

    // function handleChange(event) {
    //     setValues({
    //         ...values,
    //         [event.target.name]: event.target.value
    //     });
    // }
    <>
        <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <FormControl aria-label="Text input with checkbox" />
        </InputGroup>
        <InputGroup>
            <InputGroup.Radio aria-label="Radio button for following text input" />
            <FormControl aria-label="Text input with radio button" />
        </InputGroup>
    </>
    useEffect(() => {
        axios.get('http://localhost:8080/parcelas')
            .then((response) => {
                setParcelas(response.data)
            })
        if (localStorage.getItem('user')) {
            let email = localStorage.getItem('user')
            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios.get('http://localhost:8080/cadastro-cliente/getByEmail/' + email, config)
                .then((response) => {
                    setCliente(response.data)
                    axios.get('http://localhost:8080/clienteEndereco/cliente/' + response.data.id_Cliente)
                        .then((response) => {
                            setEnderecos(response.data)
                            if (response.data.length == 0) {
                                MeusEnderecos()
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Não é possível prosseguir',
                                    text: 'É necessário ao menos um Endereço para finalizar a compra',
                                    confirmButtonText: 'fechar'
                                });
                            }
                            response.data.map((item) => {
                                if (item.enderecoEntrega) {
                                    setEndereco(item.clienteEnderecoKey.endereco)
                                }
                                if (item.enderecoPrincipal) {
                                    setEnderecoCobranca(item.clienteEnderecoKey.endereco)
                                }
                            })

                        })
                    axios.get("http://localhost:8080/clienteCartao/cliente/" + response.data.id_Cliente)
                        .then((response) => {

                            response.data.map((item) => {

                                if (item.principal) {
                                    setIdCartaoPreenchido(item.clienteCartaoKey.cartao.id_Cartao)
                                    setNumber(item.clienteCartaoKey.cartao.numero)
                                    setName(item.clienteCartaoKey.cartao.nome)
                                    setExpiry(item.clienteCartaoKey.cartao.validade)
                                    setCartaoPreenchido(true)
                                }
                            })
                        })
                })

        } else {
            window.location.href = "http://localhost:3000/login"
        }

        let cart = ((localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []))
        if (cart.length != [].length) {
            axios.post('http://localhost:8080/Card/multi', cart)
                .then(response => {
                    setCards(response.data)
                    let acumulador = 0
                    response.data.map((data) => {
                        cart.map((item) => {
                            if (item == data.id_produto) {
                                acumulador += data.valor_preco;
                            }
                        })
                    })
                    setSubtotal(acumulador)
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response)
                    } else if (error.request) {
                        console.log(error.request)
                    } else if (error.message) {
                        console.log(error.message)
                    }
                })
        } else {
            window.location.href = "http://localhost:3000/home"
        }


    }, [attComponent])


    const direcionar = (props) => {
        const URL = '/pedidoFinalizado/' + props.id
        console.log(URL)
        history.push(URL)

    }
    function MeusEnderecos() {
        localStorage.setItem('defaultIndex', JSON.stringify(3))
        window.location.href = "http://localhost:3000/dashboard/" + cliente.id_Cliente
    }

    function meusCartoes() {
        localStorage.setItem('defaultIndex', JSON.stringify(4))
        window.location.href = "http://localhost:3000/dashboard/" + cliente.id_Cliente
    }

    const Finalizar = (event) => {
        event.preventDefault();
        setCarregando(true)
        
        let pedido =
            cartaoPreenchido ?
                {
                    "subtotal": 0,
                    "total": 0,
                    "frete": 0,
                    "finalizado": false,
                    "cliente": cliente,
                    "metodoPag": {
                        "id_metodoPag": metodoPag
                    },
                    "pagamento": {
                        "id_parcelamento": parcelamento
                    },
                    "status":
                    {
                        "id_status_pedido": 1
                    },
                    "endereco":
                    {
                        "estado": endereco.estado,
                        "cidade": endereco.cidade,
                        "bairro": endereco.bairro,
                        "rua": endereco.rua,
                        "cep": endereco.cep,
                        "numero": endereco.numero,
                        "complemento": endereco.complemento,
                        "ponto_referencia": "",
                        "destinatario": endereco.destinatario
                    },
                    "cartao":
                    {
                        "id_Cartao": idCartaoPreenchido,
                        "nome": name,
                        "numero": number,
                        "validade": new Date(expiry.replace('/', "/01/"))
                    }
                }
                :
                {
                    "subtotal": 0,
                    "total": 0,
                    "frete": 0,
                    "finalizado": false,
                    "cliente": cliente,
                    "metodoPag": {
                        "id_metodoPag": metodoPag
                    },
                    "pagamento": {
                        "id_parcelamento": parcelamento
                    },
                    "status":
                    {
                        "id_status_pedido": 1
                    },
                    "endereco":
                    {
                        "estado": endereco.estado,
                        "cidade": endereco.cidade,
                        "bairro": endereco.bairro,
                        "rua": endereco.rua,
                        "cep": endereco.cep,
                        "numero": endereco.numero,
                        "complemento": endereco.complemento,
                        "ponto_referencia": "",
                        "destinatario": endereco.destinatario
                    },
                    "cartao":
                    {
                        "nome": name,
                        "numero": number,
                        "validade": new Date(expiry.replace('/', "/01/"))
                    }
                }
        let arrayItens = [];
        let cart = ((localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []))
        var count = {};
        cart.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
        let contador = 1
        Object.keys(count).forEach((item) => {
            let itemPedido = {
                "item_pedido_key":
                {
                    "item": contador,
                    "pedido":
                    {
                        "id": null
                    }
                },
                "produto":
                {
                    "id_produto": item
                },
                "quantidade_produto": count[item],
                "desconto_unitario": 10,
                "valor_unitario": 10,
                "valor_total": 10
            }
            contador++;
            arrayItens.push(itemPedido)
        });
        const token = localStorage.getItem('token')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.post('http://localhost:8080/finalizarPedido', { "pedido": pedido, "arrayItens": arrayItens }, config)
            .then((response) => {
                setNumeroPedido(response.data.pedido)
                localStorage.setItem('cart', JSON.stringify([]))
                localStorage.setItem('qtyCart', JSON.stringify(0))
                let idPedido = response.data.pedido.id
                if (cartaoFuturo) {
                    let novoCartao = {
                        "clienteCartaoKey": {
                            "cliente": {
                                "id_Cliente": response.data.pedido.cliente.id_Cliente
                            },
                            "cartao": {
                                "id_Cartao": response.data.pedido.cartao.id_Cartao
                            }
                        },
                        "principal": true
                    }
                    console.log(novoCartao)
                    axios.post('http://localhost:8080/clienteCartao/create', novoCartao)
                        .then((response) => {
                            console.log(response.data)
                            setCarregando(false)
                            const URL = '/pedidoFinalizado/' + idPedido
                            history.push(URL)
                        })
                }else{
                    setCarregando(false)
                    const URL = '/pedidoFinalizado/' + idPedido
                    history.push(URL) 
                }


            })
            .catch((err) => {
                
                setCarregando(false)
            })

    }

    function buscaCep(ev, setFieldValue) {
        const { value } = ev.target;

        const cep = value?.replace(/[^0-9]/g, '');

        if (cep?.length !== 8) {
            return;
        }

        switch (true) {
            case (cep > '01000-000' && cep < '09999-999'):
                console.log("Frete R$ 15,00");
                break;
            default:
                Swal.fire({
                    icon: 'error',
                    title: 'Não é possível prosseguir',
                    text: 'Não entregamos para fora de SP',
                    footer: '<a href="\checkout"><b>Digite o CEP novamente</b></a>'
                });
                console.log(cep)
        }


        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                setRua(data.logradouro);
                setBairro(data.bairro);
                setCidade(data.localidade);
                setEstado(data.uf);
            });


    }




    return (

        <div className="App">
            <div className={carregando ? "div-Carregando" : "d-none"}>
                <div class="spinner-border text-warning">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <Formik

                render={({ isValid, setFieldValue }) => (
                    <>
                        <body className="body-cart">
                            <p className="title-dash finalizar-titulo" > Finalizar Compra</p>

                            <hr />
                            <div class="keep-shopping" onClick={() => { history.go(-1) }}>
                                <Icon className="icone-comprando" name="angle left" /> Voltar
                            </div>

                            <br />
                            <Container>
                                <div className="div-checkout" >
                                    <div className="div-pessoais " >

                                        <ul className="lista-checkout-total">

                                            <p> <Icon className="icone-resumo" name="home" /><b>Endereco de Entrega</b></p>


                                            <div className=" ">

                                                <hr />
                                                <ul className="">
                                                    <li className="">{endereco.destinatario}</li>
                                                    <li className="">{endereco.rua} , {endereco.numero} {endereco.complemento},</li>
                                                    <li className="">{endereco.cep} - {endereco.bairro}</li>
                                                    <li className="">{endereco.cidade} - {endereco.estado}</li>
                                                </ul>

                                            </div>
                                            <a className="linkMudarEnderecoEntrega" onClick={() => { MeusEnderecos() }} >Mudar endereço de entrega</a>

                                            <br /><br />
                                            {/* <div className="">
                                                <p><Icon className="icone-resumo" name="money bill alternate outline" /> <b>Endereço Cobrança</b></p>
                                                <hr />
                                                <ul className="">
                                                    <li className="">{enderecoCobranca.destinatario}</li>
                                                    <li className="">{enderecoCobranca.rua} , {enderecoCobranca.numero} {enderecoCobranca.complemento},</li>
                                                    <li className="">{enderecoCobranca.cep} - {enderecoCobranca.bairro}</li>
                                                    <li className="">{enderecoCobranca.cidade} - {enderecoCobranca.estado}</li>
                                                </ul>

                                            </div> */}
                                            {/* <a className="linkMudarEnderecoEntrega" onClick={() => { MeusEnderecos() }} >Mudar endereço de cobrança</a> */}

                                            <br />
                                        </ul>

                                    </div>


                                    <div className="div-entrega" >
                                        <ul className="lista-checkout-total">




                                            <div className="div-fundo" id="div-fundo">
                                                <p><Icon className="icone-resumo" name="money bill alternate " /> <b>Pagamento</b></p>
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
                                                        Boleto
                                                    </button>
                                                    <button
                                                        className={toggleState === 3 ? "tabs-pagamento active-tabs" : "tabs-pagamento"}
                                                        onClick={() => toggleTab(3)}
                                                    >
                                                        Pix
                                                    </button>

                                                </div>
                                                <div className="content-tabs">
                                                    <div
                                                        className={toggleState === 1 ? "contentPag  active-content" : "contentPag"}
                                                    >

                                                        <Cards
                                                            number={!cartaoPreenchido ? number : "000000000000" + number.slice(number.length - 4, number.length)}
                                                            name={name}
                                                            expiry={!cartaoPreenchido ? expiry : expiry.slice(0, 7).split("-")[1] + "/" + expiry.slice(0, 7).split("-")[0]}
                                                            cvc={cvc}
                                                            focused={focus}

                                                        />


                                                        <label>Número do cartão *</label>
                                                        <InputMask mask={"**** **** **** ****"} type="tel" name="number" value={!cartaoPreenchido ? number : "000000000000 " + number.slice(number.length - 4, number.length)} onChange={e => setNumber(e.target.value)} onFocus={e => setFocus(e.target.name)} className="form-control input-endereco" placeholder="0000.0000.0000.0000" disabled={cartaoPreenchido} required />

                                                        <label>Nome impresso no cartão *</label>
                                                        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} onFocus={e => setFocus(e.target.name)} className="form-control input-endereco" placeholder="Nome Impresso no Cartão" disabled={cartaoPreenchido} required/>

                                                        <label>Validade *</label>
                                                        <InputMask mask="99/99" type="text" name="expiry" value={!cartaoPreenchido ? expiry : expiry.slice(0, 7).split("-")[1] + "/" + expiry.slice(0, 7).split("-")[0].slice(2,4)} onChange={e => setExpiry(e.target.value)} onFocus={e => setFocus(e.target.name)} className="form-control input-validade" placeholder="Ex: 12/28" disabled={cartaoPreenchido} />

                                                        <label>Código de Segurança *</label>
                                                        <InputMask mask="999" type="tel" name="cvc" value={cvc} onChange={e => setCvc(e.target.value)} onFocus={e => setFocus(e.target.name)} className="form-control input-cod-seg" placeholder="000" required/>


                                                        <label>Parcelar*</label>
                                                        <select type="text" onChange={event => { setParcelamento(event.target.value) }} className="form-control input-bairro" required>
                                                            <option value='' selected>Parcelamento</option>
                                                            {
                                                                parcelas.map((parcela) => (
                                                                    <option value={parcela.id_parcelamento} onChange={event => { setParcelamento(event.target.value) }}>{parcela.parcelamento} R$ {((((subtotal || 0) + 15) / parcela.qtdParcelas).toFixed(2).replace('.', ','))}  </option>
                                                                )
                                                                )
                                                            }

                                                        </select>
                                                        {cartaoPreenchido ? (
                                                            <>
                                                                <p>
                                                                    * as informações de pagamento foram preenchidas com seu cartão de pagamento principal, <a className="linkMudarEnderecoEntrega" onClick={() => { meusCartoes() }}> clique aqui para alterar seu cartão principal</a>
                                                                </p>

                                                            </>
                                                        ) : (
                                                            <>
                                                                <br />
                                                                <input type="checkbox" value={cartaoFuturo} onChange={(e) => { setCartaoFuturo(cartaoFuturo?false:true) }} /> Deseja utilizar esse cartão em compras futuras?
                                                            </>
                                                        )}









                                                    </div>

                                                    <div
                                                        className={toggleState === 2 ? "contentPag  active-content" : "contentPag"}
                                                    >

                                                        <p>
                                                            Pagamento de R${((subtotal || 0) + 15).toFixed(2).replace('.', ',')} à vista no boleto.


                                                        </p>
                                                        <div className='d-flex justify-content-center'><b>Boleto</b></div>

                                                        <img className='imgBoleto' src={Boleto}></img>
                                                    </div>

                                                    <div
                                                        className={toggleState === 3 ? "contentPag  active-content" : "contentPag"}
                                                    >

                                                        <p>
                                                            Pagamento de R${((subtotal || 0) + 15).toFixed(2).replace('.', ',')} à vista por chave PIX.

                                                        </p><img className='imgPix' src='https://psfonttk.com/wp-content/uploads/2021/08/pix-logo-png.png'></img>

                                                    </div>
                                                </div>

                                            </div>
                                        </ul>
                                    </div>

                                    <div className="div-resumo-pedido-checkout" >
                                        <ul className="lista-checkout-total mt-2">

                                            <p> <Icon className="icone-resumo" name="file alternate outline" /><b>Resumo do Pedido</b></p>

                                            <div className="overflow-resumo-pedido">
                                                <thead>
                                                    <tr className="product-item">
                                                        <th className="product-image">Produto</th>
                                                        <th className="product-name">Nome</th>
                                                        <th className="product-produto-checkout">Quantidade</th>
                                                        <th className="product-checkout-price">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="conteudo-cart-pedido" id="conteudo-cart-pedido">
                                                    {
                                                        cards.map(card => (
                                                            <ProdutoCheckout product={card} />
                                                        ))
                                                    }


                                                </tbody>
                                            </div>

                                            <br />
                                            <div className="div-total" >
                                                <ul className="lista-carrinho-total">

                                                    <p> <Icon className="icone-resumo" name="file alternate outline" /><b>Resumo do Pedido</b></p>
                                                    <li className="sub-global"><b>Subtotal</b> <span className="texto-total-frete-sub" id={"subTotal"}> R$ {(subtotal || 0).toFixed(2).replace('.', ',')}</span>   </li>
                                                    <li className="sub-global"><b>Frete </b>  <span className="texto-total-frete">  R$ 15,00</span>   </li>

                                                    <li className="sub-global borda-total"><b>Total </b> <span className="texto-total-frete-total" id={"total"}>  R$ {((subtotal || 0) + 15).toFixed(2).replace('.', ',')}</span>   </li>
                                                    <button class="btn-finalizar-compra botao-pedido-finalizar" type="submit" onClick={Finalizar}><div className="finalizar-compra-cor" >Finalizar Compra</div> <Icon className="icone-finalizar-compra" name="angle right" /></button>
                                                    <br />
                                                    <br />
                                                </ul>

                                            </div>

                                        </ul>


                                    </div>





                                </div>

                            </Container>

                            <br />
                            <br />
                            <br />

                        </body>

                    </>
                )}
            />
        </div>
    );
}



function verMais() {
    var pontos = document.getElementById("pontos");
    var meusPedidos = document.getElementById("div-fundo");
    var btnPagamento = document.getElementById("btnPagamento");

    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        meusPedidos.style.display = "none";
        btnPagamento.innerHTML = "Ir para o pagamento";
    } else {
        pontos.style.display = "none";
        meusPedidos.style.display = "inline";


    }
}





export default Checkout