import React, { useState, useEffect } from 'react'
import './Checkout.css'
//import 'bootstrap/dist/css'
import FormDefault from '../../components/macro/Forms/FormDefault/FormDefault'
import Button from '../../components/micro/Button/Button'
import { Container, Form, Row, Col, Accordion } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'
import Produto1 from '../../assets/imgs/teste/cerveja.png'
import ProdutoCheckout from '../../components/micro/ProdutoCheckout/ProdutoCheckout'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import InputMask from "react-input-mask";
import axios from 'axios'
import { useHistory } from "react-router-dom"
import { Formik, Field } from 'formik';





const Checkout = (props) => {


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
    const [parcelamento, setParcelamento] = useState('')
    const [numeroPedido, setNumeroPedido] = useState([])
    const [URLPedidoFinalizado, setURLPedidoFinalizado] = useState([])

    const [cards, setCards] = useState([])
    const [subtotal, setSubtotal] = useState('')


    const history = useHistory();

    // const [values, setValues] = useState(initialValues);

    // function handleChange(event) {
    //     setValues({
    //         ...values,
    //         [event.target.name]: event.target.value
    //     });
    // }
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
                })
        } else {
            window.location.href = "http://localhost:3000/login"
        }

        let cart = ((localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []))
        if (cart) {
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
        }


    }, [])

    const direcionar = (props) =>{
        const URL = '/pedidoFinalizado/' + props.id
        console.log(URL)
        history.push(URL)
        
    }


    const Finalizar = (event) => {

        event.preventDefault();
        let pedido = {
            "subtotal": 0,
            "total": 0,
            "frete": 0,
            "finalizado": false,
            "cliente": cliente,
            "pagamento": {
                "id_parcelamento": 1
            },
            "status":
            {
                "estado_pedido": "Preparando Pedido"
            },
            "endereco":
            {
                "estado": estado,
                "cidade": cidade,
                "bairro": bairro,
                "rua": rua,
                "cep": cep,
                "numero": numeroEndereco,
                "complemento": complemento,
                "ponto_referencia": ""
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
                const URL = '/pedidoFinalizado/' + response.data.pedido.id
                history.push(URL)
            })
        
        
        


        // window.location.href = "http://localhost:3000/pedidofinalizado"
    }

    function buscaCep(ev, setFieldValue) {
        const { value } = ev.target;

        const cep = value?.replace(/[^0-9]/g, '');

        if (cep?.length !== 8) {
            return;
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
            <Formik
                onSubmit={Finalizar}
                validateOnMount
                initialValues={{
                    cep: '',
                    logradouro: '',
                    numero: '',
                    complemento: '',
                    bairro: '',
                    cidade: '',
                    uf: '',
                }}



                render={({ isValid, setFieldValue }) => (
                    <>
                        <body className="body-cart">
                            <p className="title-dash finalizar-titulo" > Finalizar Compra</p>

                            <hr />
                            <a className="keep-shopping continuar-comprando-pedido" href="/produtos">
                                <Icon className="icone-comprando " name="angle left" /> Continuar comprando
                            </a>

                            <br />
                            <Container>
                                <div className="div-checkout" id="">
                                    <div className="div-pessoais " >

                                        <ul className="lista-checkout-total">

                                            <p> <Icon className="icone-resumo" name="home" /><b>Entrega</b></p>
                                            <p>Solicitamos apenas as informações essenciais para a realização da compra.</p>
                                            <li className="sub-global">



                                                <ul className="lista-carrinho-total">


                                                    <label>* CEP </label>
                                                    <Field type="text" id="cep" name="cep" onBlur={(ev) => buscaCep(ev, setFieldValue)} onChange={(ev) => setCep(ev.target.value)} value={cep} className="form-control input-cep" data-js="cep" placeholder="00000-000" required />
                                                    <label>* Rua </label>
                                                    <Field type="text" className="form-control input-endereco" name="logradouro" id="logradouro" placeholder="Rua das flores" onChange={(event) => { setRua(event.target.value) }} value={rua} required />
                                                    <label>* Número </label>
                                                    <Field type="text" className="form-control input-numero" name="numero" id="numero" placeholder="" onChange={(event) => { setNumeroEndereco(event.target.value) }} value={numeroEndereco} required />
                                                    <label>* Complemento </label>
                                                    <Field type="text" className="form-control input-comp" name="complemento" placeholder="Ex. apto 200" onChange={(event) => { setComplemento(event.target.value) }} value={complemento} />
                                                    <label>* Bairro </label>
                                                    <Field type="text" className="form-control input-bairro" id="bairro" name="bairro" placeholder="Jardim das Flores" onChange={(event) => { setBairro(event.target.value) }} value={bairro} required />
                                                    <label>* Cidade </label>
                                                    <Field type="text" className="form-control input-cidade" id="cidade" name="cidade" placeholder="São Paulo" onChange={(event) => { setCidade(event.target.value) }} value={cidade} required />
                                                    <label>* Estado </label>
                                                    <Field type="text" className="form-control input-estado" name="uf" id="uf" placeholder="São Paulo" onChange={(event) => { setEstado(event.target.value) }} value={estado} required />
                                                    <label>Nome do destinatário </label>
                                                    <input type="text" class="form-control" placeholder="" />

                                                    <br />
                                                    <br />
                                                </ul>


                                            </li>



                                            <br />
                                        </ul>

                                    </div>


                                    <div className="div-entrega" >
                                        <ul className="lista-carrinho-total">




                                            <div className="div-fundo" id="div-fundo">
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
                                                        parcelas.map((parcela) => (
                                                            <option value={parcela.id_parcelamento} onChange={event => { setParcelamento(event.target.value) }}>{parcela.parcelamento} R$ {((((subtotal||0)+15)/parcela.id_parcelamento).toFixed(2).replace('.', ','))}  </option>
                                                        )
                                                        )
                                                    }

                                                </select>



                                                <br />
                                                <br />
                                            </div>
                                        </ul>



                                    </div>

                                    <div className="div-resumo-pedido-checkout" >
                                        <ul className="lista-carrinho-total">

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