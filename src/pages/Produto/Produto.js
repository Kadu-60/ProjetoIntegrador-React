import React, { useState, useEffect } from 'react'
import './Produto.css'
import BotaoAdicionar from '../../components/micro/BotaoConfirmar/BotaoAdicionar';
import BotaoQtd from '../../components/micro/BotaoQtd/BotaoQtd';
import Acordeon from '../../components/macro/Acordeon/Acordeon';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import axios from 'axios'
import AcordeonSemantic from '../../components/macro/Acordeon/AcordeonSemantic';
import { useParams, useHistory } from "react-router-dom"
import { Icon } from 'semantic-ui-react';
import Caneca from '../../assets/imgs/teste/caneca.gif'
import CanecaPreta from '../../assets/imgs/teste/canecapreta.gif'
import Prato from '../../assets/imgs/teste/prato.gif'
import Garrafas from '../../assets/imgs/teste/cervejas.png'
import ListarProdutos from '../../components/macro/ListarProdutos/ListarProdutos';
import NovidadesHome from '../../components/macro/NovidadesHome/NovidadesHome';
import Swal from 'sweetalert2'
import { createSemanticDiagnosticsBuilderProgram } from 'typescript';

function Produto(props) {
    const [produto, setProduto] = useState([])
    const [familia, setFamilia] = useState([])
    const [estilo, setEstilo] = useState([])
    const [harmonizacao, setHarmonizacao] = useState([])
    const [preco1, setPreco1] = useState([])
    const [teste, setTeste] = useState([])
    const [products, setProducts] = useState([])
    const [qtyCart, setQtyCart] = useState(0)

    const [estoque, setEstoque] = useState(50)



    const history = useHistory();


    const params = useParams(":pesq")
    const pesq = params.pesq
    const URL = 'http://localhost:8080/produtos/'
    const final = URL + params.pesq

    const URLPreco = 'http://localhost:8080/preco/'
    const precoFinal = URLPreco + params.pesq

    const URLCard = 'http://localhost:8080/Card/'
    const cardFinal = URLCard + params.pesq

    // verificar estoque

 

    // verificar estoque

    useEffect(() => {
        getProduto()
       
    }, [])

    const getProduto = () => {
        axios.get(final)
            .then((response) => {
                setProduto(response.data)
                setFamilia(response.data.familia)
                setEstilo(response.data.categoria)
                setHarmonizacao(response.data.prato)
                console.log(response.data.familia.descricao)



            })
    }

    useEffect(() => {
        getPreco()
    }, [])

    const getPreco = () => {
        axios.get(precoFinal)
            .then((response) => {
                setPreco1((+response.data.valor_preco).toFixed(2).toString().replace('.', ','))


            })
    }

    useEffect(() => {
        getCard()
    }, [])


    const getCard = () => {
        axios.get(cardFinal)
            .then((response) => {
                setTeste(response.data)
                console.log(teste)
                console.log(response.data)

            })
    }

    
    const [numero, setNumero] = useState(1)

    // const incremento = () =>{
    //     setNumero(+numero + 1)        
    // }

    const incremento = () => {
        if ((numero + 1 <= estoque)) {
            setNumero(numero + 1)
        } else {
            Swal.fire({
                title: 'Erro!',
                text: 'quantidade selecionada acima do estoque',
                icon: 'error',
                confirmButtonText: 'fechar'
              })
        }

    }

    const decremento = () =>{
        if(numero > 1){
            setNumero(numero - 1)
        } else {
            Swal.fire({
                title: 'Erro!',
                text: 'quantidade não pode ser menor que 1',
                icon: 'error',
                confirmButtonText: 'fechar'
              })
        }
        
    }

    // function incremento(){
    //     var atual = document.getElementById("total").value;
    //     var novo = atual - (-1); 
    //     document.getElementById("total").value = novo;
    //   }
      
    //   function decremento(){
    //     var atual = document.getElementById("total").value;
    //     if(atual > 1) { 
    //       var novo = atual - 1;
    //       document.getElementById("total").value = novo;
    //     }
    //   }





    return (
        <>
            <body className="body-produto">

                <main className="class-main-produto">
                    <br />
                    <Breadcrumb className="cor-migalha">
                        <Breadcrumb.Item className="migalha-pao" href="/home"> Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/produtos">
                            Produtos
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active> Produto</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="setando-voltar" onClick={() => { history.go(-1) }}>
                        <Icon name="arrow left" className="seta-voltar" /><div className="voltar-seta"> Voltar</div>
                    </div>

                    <div key={produto.id} class="container container-produto">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="img-produto zoom">
                                    <img src={produto.foto} alt="" srcset="" />
                                </div>
                            </div>
                            <div class="col-12 col-md-6 d-flex align-items-center div-container-produto">
                                <div class="row d-flex justify-content-start info-prod ">
                                    <div class="col-12 nome-produto">
                                        {/* <p>{produto.marca}</p> */}
                                    </div>
                                    <div class="col-12 nome-produto">
                                        <span className="titulo-produto-nome">{produto.nome_produto}</span>
                                    </div>
                                    <div class="col-12 mt-3 align-self-center">
                                        <div class="preco-produto">
                                            <div class="preco-por">

                                                <span className="titulo-produto-preco"><b> por R$ {preco1}</b></span>

                                            </div>
                                            <div>
                                                <span className="titulo-produto-parc"> Ou 3 x de R$ {(parseFloat(preco1) / 3).toFixed(2).replace(".", ",")} sem juros </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 d-flex justify-content-center btn-qtd">
                                        <div class="col btn-mais mt-5">
                                            <div class="btn-group inline">

                                                <div class="contador contador-pag-produto">
                                                    <div onClick={decremento} class="contador-btn btn-success" data-sinal="-1" >-</div>
                                                    <input type="number" className="mostrador" value={numero} onChange={(event)=>{setNumero(event.target.value)}}/> 
                                                    <div onClick={incremento} class="contador-btn btn-danger" data-sinal="1">+</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-8 d-flex mt-4 justify-content-center">
                                        <div class="col-12 d-flex justify-content-center">
                                            <BotaoAdicionar texto='Adicionar' id={produto.id_produto} qtd={+numero}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <br />
                <div className="container-fluid  mb-5" id="acordeon-produto">

                    <p className="sobre" id="sobre"><Icon name="comment alternate" className=" sobre-produto" />Mais sobre</p>
                    <div className="div-total-pag-produto">
                        <div className="dec-prod col-4">
                            <ul>
                                <li>
                                    <img src={Caneca} width="20px" className="caneca-brew" />
                                    <b>Descrição do Produto</b></li>

                                <li>
                                    <div className="desc-produto-text">

                                        {produto.descricao}
                                    </div>
                                </li>

                            </ul>
                        </div>

                        <div className="dec-tec col-4">
                            <ul className="centro-ul ">
                                <li>  <i class="fas fa-wine-bottle"></i>  <img src={CanecaPreta} width="20px" className="caneca-brew" />
                                    <b> Descrição Técnica</b></li>
                                <div className="estilo-familia">
                                    <label className='labelproduto'> <strong>Familia da Cerveja:</strong></label>
                                    <li>{familia.descricao}</li>
                                    <label className='labelproduto'> <strong>Estilo ou Família:</strong></label>
                                    <li>{estilo.nome}</li>
                                    <label className='labelproduto'> <strong>IBU:</strong></label>
                                    <li>{produto.ibu}</li>
                                    <label className='labelproduto'> <strong>Cor da Cerveja:</strong></label>
                                    <li>{produto.cor}</li>
                                    <label className='labelproduto'> <strong>Teor Alcoólico:</strong></label>
                                    <li>{produto.teor}%</li>
                                </div>




                            </ul>
                        </div>
                        <div className="dec-har col-4">
                            <ul>
                                <li>     <img src={Prato} width="25px" className="caneca-brew" />
                                    <b> Harmonização </b></li>

                                <li> <p className="estilo-familia">{harmonizacao.descricao} </p> </li>

                            </ul>
                        </div>


                    </div>



                    {/* <AcordeonSemantic harmonizacao={harmonizacao.descricao} estilo={estilo.nome} familia={familia.descricao} descricaoProd={produto.descricao} ibu={produto.ibu} cor={produto.cor} teor={produto.teor} /> */}

                    <br /> <br />
                </div>
                <div className="container-parc-frete">

                    <div className="global-parc-frete">
                        <div className="parcelamento-produto-pd col-4">
                            <Icon name="credit card outline icon" className="icone-card" />
                            <span className="texto-par-entr-ambi">Parcelamento em até 3x</span>

                        </div>

                        <div className="parcelamento-produto-pd col-4">
                            <Icon name="truck " className="icone-card" />
                            <span className="texto-par-entr-ambi">
                                Entrega Garantida <br/> 
                                <p class="texto-prazo">em até 6 dias úteis</p>
                            </span>

                        </div>

                        <div className="parcelamento-produto-pd col-4">
                            <Icon name="check circle outline" className="icone-card" />
                            <span className="texto-par-entr-ambi">Ambiente 100% seguro</span>

                        </div>

                    </div>
                </div>

                <p className="sobre" id="sobre"><img src={Garrafas} width="22px" /> Quem gostou também comprou</p>
                <div className="list-cards-produtos">
                    <ListarProdutos >
                        <NovidadesHome />
                    </ListarProdutos>
                </div>
            </body>
        </>

    )




}

export default Produto;
