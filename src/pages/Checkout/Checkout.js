import React from 'react'
import './Checkout.css'
//import 'bootstrap/dist/css'
import FormDefault from '../../components/macro/Forms/FormDefault/FormDefault'
import Button from '../../components/micro/Button/Button'
import { Container, Form, Row, Col, Accordion } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'
import Produto1 from '../../assets/imgs/teste/cerveja.png'

function Checkout(props) {

 

    return (
        <>
        <body className="body-cart">
        <p className="title-dash finalizar-titulo" > Finalizar Compra</p>

        <hr/>
        <a class="keep-shopping continuar-comprando-pedido" href="/produtos">
                    <Icon className="icone-comprando " name="angle left"/> Continuar comprando 
                </a>
               
                <br/>
            <Container>
            <div className="div-checkout" id="">
                <div className="div-pessoais " >
                    
                        <ul className="lista-carrinho-total">
                            
                            <p> <Icon className="icone-resumo" name="user"/><b> Dados Pessoais</b></p>
                            <p>Solicitamos apenas as informações essenciais para a realização da compra.</p>
                            <li className="sub-global">
                               
                                <span>E-mail: teste@email.com{props.email}</span>
                                <label>Primeiro nome</label>
                                <input type="text" class="form-control" placeholder=""/>
                                <label>Último nome</label>
                                <input type="text" class="form-control" placeholder=""/>
                                <label>CPF</label>
                                <input type="text" class="form-control" placeholder="999.999.999-99"/>
                                <label>Telefone</label>
                                <input type="text" class="form-control" placeholder="11 99999-9999"/>
                              
                            </li>
                        
                            
                    
                            <br/>
                        </ul>
                    
                </div>
            
        
                <div className="div-entrega" >
                        <ul className="lista-carrinho-total">
                            
                            <p> <Icon className="icone-resumo" name="home"/><b>Entrega</b></p>
                            <label>CEP *</label> 
                            <input type="text" class="form-control input-cep" data-js="cep" placeholder="00000-000"/>
                            <label>Rua *</label>
                            <input type="text" class="form-control input-endereco" placeholder="Rua das flores"/>
                            <label>Número *</label>
                            <input type="text" class="form-control input-numero" placeholder=""/>
                            <label>Complemento *</label>
                            <input type="text" class="form-control input-comp" placeholder="Ex. apto 200"/>
                            <label>Bairro *</label>
                            <input type="text" class="form-control input-bairro" placeholder=""/>
                            <label>Cidade *</label>
                            <input type="text" class="form-control input-cidade" placeholder=""/>
                            <label>Estado *</label>
                            <input type="text" class="form-control input-estado" placeholder=""/>

                            <button class=" btn-default form-control ok-cep btn-ir-pag" onClick={verMais} id="btnPagamento" type="button">Ir para o pagamento</button>
                            <br/>
                            <br/>


                            <span id="pontos">
                            </span>


                            <div className="div-fundo" id="div-fundo">                    
                       
                            
                                <p> <Icon className="icone-resumo" name="credit card outline"/><b>Pagamento</b></p>
                                <label>Número do cartão *</label>
                                <input type="text" class="form-control input-endereco" placeholder="0000.0000.0000.0000" required/>
                                <label>Nome impresso no cartão *</label>
                                <input type="text" class="form-control input-endereco" placeholder=""/>
                                <label>Validade *</label>
                                <input type="text" class="form-control input-validade" placeholder="Ex: 12/28"/>
                                <label>Código de Segurança *</label>
                                <input type="text" class="form-control input-cod-seg" placeholder="000"/>
                                <label>Parcelar*</label>
                                <select type="text" class="form-control input-bairro" placeholder="Em quantas parcelas deseja pagar?"/>
                            

                                
                                <br/>
                                <br/>
                            </div>
                        </ul>
                    
                
                    
                </div>

                <div className="div-resumo-pedido" >
                        <ul className="lista-carrinho-total">
                            
                            <p> <Icon className="icone-resumo" name="file alternate outline"/><b>Resumo do Pedido</b></p>


                        <tbody className="conteudo-cart-pedido" id="conteudo-cart-pedido">




                        <tr className="product-item">
                        <td className="product-image"> <a href="/produto">
                            <img src={Produto1} class="ui tiny middle aligned image"/> </a> 
                            </td>
                            
                            <td className="product-name product-cart"> 
                            <a href="/produto"><span className="titulo-cerveja-cart">Cerveja Madalena Double IPA 600ml  </span></a>
                            </td>

                            <td className="shipping-date">  
                            <span className="titulo-entrega-cart">Em até 6 dias úteis</span>
                            </td>
                            

                            <td className="product-price"> 
                            <span>R$ 4,99</span>
                            </td>
                            

                        </tr>


                        <tr className="product-item">
                        <td className="product-image"> <a href="/produto">
                            <img src={props.img} class="ui tiny middle aligned image"/> </a> 
                            </td>
                            
                            <td className="product-name product-cart"> 
                            <a href="/produto"><span className="titulo-cerveja-cart">{props.nome}  </span></a>
                            </td>

                            <td className="shipping-date">  
                            <span className="titulo-entrega-cart">{props.frete}</span>
                            </td>
                            

                            <td className="product-price"> 
                            <span>{props.preco}</span>
                            </td>
                            


                        </tr>



                        </tbody>



                            <div className="resumo-pedido-sub">

                            <li className="sub-global"><b>Subtotal</b> <span className="texto-total-frete-sub"> R$ 20,00 {props.subtotal}</span>   </li>
                            <li className="sub-global"><b>Frete </b>  <span className="texto-total-frete">  R$ 10,00{props.frete}</span>   </li>
                            
                            <li className="sub-global borda-total"><b>Total </b> <span className="texto-total-frete-total-pedido">  R$ 30,00{props.total}</span>   </li>
                            <button class="btn-finalizar-compra botao-pedido-finalizar"  type="button"><a className="finalizar-compra-cor" href="/pedidofinalizado">Finalizar Compra</a> <Icon className="icone-finalizar-compra" name="angle right"/></button>
                            <br/>
                            <br/>
                            </div>
                        </ul>
                    
                </div>


               




            </div> 
    
            </Container>
            <br />


        </body>
          
        </>
    )
}


function  verMais ()  {
    var pontos = document.getElementById("pontos");
    var meusPedidos = document.getElementById("div-fundo");
    var btnPagamento = document.getElementById("btnPagamento");
  
    if(pontos.style.display === "none"){
        pontos.style.display = "inline";
        meusPedidos.style.display = "none";
        btnPagamento.innerHTML="Ir para o pagamento";
    }else{
        pontos.style.display="none";
        meusPedidos.style.display = "inline";
       
  
    }
  }

  const masks = {
      cep(value){
          console.log()
          return value
      }
  }

  document.querySelectorAll('input').forEach(($input) =>{
      const field = $input.dataset.js

      $input.addEventListener('input', (e) => {
          e.target.value= masks.cep(e.target.value)
      }, false)
  })
  


export default Checkout