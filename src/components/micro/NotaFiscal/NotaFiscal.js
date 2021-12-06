
import './NotaFiscal.css'
import BarCode from '../../../assets/imgs/teste/barcode.png'
import LogoDev from '../../../assets/imgs/teste/nfe.png'
import { Container } from 'semantic-ui-react'
import { Table } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function NotaFiscal(props){


  const [notaFiscal , setNotaFiscal] = useState([])

      


  useEffect(() =>{
      axios.get("http://localhost:8080/Pedido/gerarNF")
      .then((response) => {
        setNotaFiscal(response.data)
      })
      .catch(() => {

      })
  
  },[])
 
    

    return(
     
     <>
    
     <div className="page nfeArea" id="dados">
        <div className="boxFields" style={{ paddingTop: 20 }}>
            <Table cellPadding="0" cellSpacing="0" border="1" striped bordered hover>
            <tbody>
                <tr>
                <td colSpan="2" className="txt-upper">
                    Recebemos de DevBrew os produtos e serviços constantes na nota
                    fiscal indicada ao lado
                </td>
                <td rowSpan="2" className="tserie txt-center">
                    <span className="font-12" style={{ marginBottom: 5 }}>
                    NF-e
                    </span>
                    <span>
                    Nº {notaFiscal.id_nf}
                    </span>
                    <span>
                    Série {notaFiscal.serie}
                    </span>
                </td>
                </tr>
                <tr>
                <td style={{ width: "32mm" }}>
                    <span className="nf-label">Data de recebimento</span>
                
                </td>
                <td style={{ width: "124.6mm" }}>
                    <span className="nf-label">
                    Identificação de assinatura do Recebedor
                    </span>
                </td>
                </tr>
            </tbody>
            </Table>

            <hr className="hr-dashed" />
     <Table cellPadding="0" cellSpacing="0" border="1" striped bordered hover>
      <tbody>
        <tr>
          <td rowSpan={3} style={{ width: "30mm" }}>
            <img
              className="client_logo"
              src={LogoDev}
              alt
              onerror=" javascript:this.src='data:image/png;base64,"
            />
          </td>
          <td
            rowSpan={3}
            style={{ width: "46mm", fontSize: "7pt" }}
            className="txt-center"
          >
            <span className="mb2 bold block">DevBrew LTDA</span>
            <span className="block">Avenida Paulista, 10767</span>
            <span className="block">Paulista</span>
            <span className="block">São Paulo - SP</span>
          </td>
          <td
            rowSpan={3}
            className="txtc txt-upper"
            style={{ width: "34mm", height: "29.5mm" }}
          >
            <h3 className="title">Danfe</h3>
            <p className="mb2">Documento auxiliar da Nota Fiscal Eletrônica </p>
            <p className="entradaSaida mb2">
              <span className="identificacao">
                <span>1</span>
              </span>
              <span className="legenda">
                <span>0 - Entrada</span>
                <span>1 - Saída</span>
              </span>
            </p>
            <p>
              <span className="block bold">
                <span>Nº</span>
                <span>
                  {props.id_nf}
                </span>
              </span>
              <span className="block bold">
                <span>SÉRIE:</span>
                <span>1</span>
              </span>
              <span className="block">
                <span>Página</span>
                <span>1</span>
                <span>de</span>
                <span>1</span>
              </span>
            </p>
          </td>
          <td className="txt-upper" style={{ width: "85mm" }}>
            <span className="nf-label">Controle do Fisco</span>
            <span className="codigo">
              <img src={BarCode} width="150px"/>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <span className="nf-label">CHAVE DE ACESSO</span>
            <span className="bold block txt-center info">
              3519 1007 6100 3000 0169 5500 2000 0000 00216 8601 5830
            </span>
          </td>
        </tr>
        <tr>
          <td className="txt-center valign-middle">
            <span className="block">
              Consulta de autenticidade no portal nacional da NF-e{" "}
            </span>{" "}
            www.nfe.fazenda.gov.br/portal ou no site da Sefaz Autorizada.
          </td>
        </tr>
      </tbody>
    </Table>


    {/* Natureza da Operação */}
    <Table  cellPadding="0" cellSpacing="0" border="1" striped bordered hover className="boxNaturezaOperacao no-top" >
      <tbody>
        <tr>
          <td>
            <span className="nf-label">NATUREZA DA OPERAÇÃO</span>
            <span className="info">DEVBREW CERVEJARIA ARTESANAL</span>
          </td>
          <td style={{ width: "84.7mm" }}>
            <span className="nf-label">PROTOCOLO</span>
            <span className="info">14160047613988</span>
          </td>
        </tr>
      </tbody>
    </Table>

     {/* Inscrição */}
     <Table cellPadding="0" cellSpacing="0" border="1" striped bordered hover className="boxInscricao no-top"  >
      <tbody>
        <tr>
          <td>
            <span className="nf-label">INSCRIÇÃO ESTADUAL</span>
            <span className="info">808.356.567.200</span>
          </td>
          <td style={{ width: "67.5mm" }}>
            <span className="nf-label">INSCRIÇÃO ESTADUAL DO SUBST. TRIB.</span>
            <span className="info">808.356.567.200</span>
          </td>
          <td style={{ width: "64.3mm" }}>
            <span className="nf-label">CNPJ</span>
            <span className="info">70.020.745/0001-14</span>
          </td>
        </tr>
      </tbody>
    </Table>

    {/* Destinatário/Emitente */}
    <p className="area-name">Destinatário/Emitente</p>
    <Table cellPadding="0" cellSpacing="0" border="1" striped bordered hover  className="boxDestinatario" >
      <tbody>
        <tr>
          <td className="pd-0">
            <Table cellPadding="0" cellSpacing="0" border="1" striped bordered hover >
              <tbody>
                <tr>
                  <td>
                    <span className="nf-label">NOME/RAZÃO SOCIAL</span>
                    <span className="info">
                      {notaFiscal.nome} 
                    </span>
                  </td>
                  <td style={{ width: "40mm" }}>
                    <span className="nf-label">CNPJ/CPF</span>
                    <span className="info">
                      {notaFiscal.cpf}
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </td>
          <td style={{ width: "22mm" }}>
            <span className="nf-label">DATA DE EMISSÃO</span>
            <span className="info">
              {notaFiscal.emissao}
            </span>
          </td>
        </tr>
        <tr>
          <td className="pd-0">
            <Table cellPadding="0" cellSpacing="0" border="1" striped bordered hover >
              <tbody>
                <tr>
                  <td>
                    <span className="nf-label">ENDEREÇO</span>
                    <span className="info">
                      {notaFiscal.rua} 
                    </span>
                  </td>
                  <td style={{ width: "47mm" }}>
                    <span className="nf-label">BAIRRO/DISTRITO</span>
                    <span className="info">
                      {notaFiscal.bairro} 
                    </span>
                  </td>
                  <td style={{ width: "47.2mm" }}>
                    <span className="nf-label">CEP</span>
                    <span className="info">
                      {notaFiscal.cep}
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </td>
          <td style={{ width: "17.2mm" }}>
            <span className="nf-label">DATA DE ENTR./SAÍDA</span>
            <span className="info">
              {notaFiscal.emissao} 
            </span>
          </td>
        </tr>
        <tr>
          <td className="pd-0">
            <Table cellPadding="0" cellSpacing="0" border="1" striped bordered hover  style={{ marginBottom: "-1px" }} >
              <tbody>
                <tr>
                  <td>
                    <span className="nf-label">MUNICÍPIO</span>
                    <span className="info">
                      {notaFiscal.cidade} 
                    </span>
                  </td>
                  <td style={{ width: "44mm" }}>
                    <span className="nf-label">FONE/FAX</span>
                    <span className="info">
                      {notaFiscal.telefone} 
                    </span>
                  </td>
                  <td style={{ width: "28mm" }}>
                    <span className="nf-label">UF</span>
                    <span className="info">
                      {notaFiscal.estado}
                    </span>
                  </td>
                  <td style={{ width: "51mm" }}>
                    <span className="nf-label">INSCRIÇÃO ESTADUAL</span>
                    <span className="info" />
                  </td>
                </tr>
              </tbody>
            </Table>
          </td>
          <td>
            <span className="nf-label">HORA ENTR./SAÍDA</span>
            <span id="info">
              {notaFiscal.emissao} 
            </span>
          </td>
        </tr>
      </tbody>
    </Table>


      {/* Fatura */}
      <div className="boxFatura">
      <p className="area-name">Fatura</p>
    </div>
    {/* Calculo do Imposto */}
    <p className="area-name">Calculo do imposto</p>
    <div className="wrapper-table">
      <Table cellPadding="0" cellSpacing="0" border="1" striped bordered hover className="boxImposto">
        <tbody>
          <tr>
            <td>
              <span className="nf-label label-small">
                BASE DE CÁLC. DO ICMS
              </span>
              <span className="info">[tot_bc_icms]</span>
            </td>
            <td>
              <span className="nf-label">VALOR DO ICMS</span>
              <span className="info">[tot_icms]</span>
            </td>
            <td>
              <span
                className="nf-label label-small"
                style={{ fontSize: "4pt" }}
              >
                BASE DE CÁLC. DO ICMS ST
              </span>
              <span className="info">0,00</span>
            </td>
            <td>
              <span className="nf-label">VALOR DO ICMS ST</span>
              <span className="info">0,00</span>
            </td>
            <td>
              <span className="nf-label label-small">
                VALOR TOTAL DOS PRODUTOS
              </span>
              <span className="info">
               {notaFiscal.total}
              </span>
            </td>
            <td>
              <span className="nf-label label-small">Valor do frete</span>
              <span className="info">
                {notaFiscal.frete}
              </span>
            </td>
            <td>
              <span className="nf-label">VALOR DO FCP</span>
              <span className="info">0,00</span>
            </td>
            <td>
              <span className="nf-label">VALOR DO PIS</span>
              <span className="info">0,00</span>
            </td>
            <td>
              <span className="nf-label label-small">V. TOTAL DE PRODUTOS</span>
              <span className="info">
                {notaFiscal.total}
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span className="nf-label">VALOR DO FRETE</span>
              <span className="info">
                {notaFiscal.frete}
              </span>
            </td>
            <td>
              <span className="nf-label">VALOR DO SEGURO</span>
              <span className="info">0,00</span>
            </td>
            <td>
              <span className="nf-label">DESCONTO</span>
              <span className="info">0,00</span>
            </td>
            <td>
              <span className="nf-label">OUTRAS DESP.</span>
              <span className="info">0,00</span>
            </td>
            <td>
              <span className="nf-label">VALOR DO IPI</span>
              <span className="info">0,00</span>
            </td>
            <td>
              <span className="nf-label">V. ICMS UF DEST.</span>
              <span className="info">0,00</span>
            </td>
            <td>
              <span className="nf-label label-small">V. APROX. DO TRIBUTO</span>
              <span className="info">0,00</span>
            </td>
            <td>
              <span className="nf-label label-small">VALOR DA CONFINS</span>
              <span className="info">0,00</span>
            </td>
            <td>
              <span className="nf-label label-small">V. TOTAL DA NOTA</span>
              <span className="info">
                {notaFiscal.total}
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    {/* Transportador/Volumes transportados */}
    <p className="area-name">Transportador/volumes transportados</p>
    <Table cellPadding="0" cellSpacing="0" border="1" striped bordered hover>
      <tbody>
        <tr>
          <td>
            <span className="nf-label">RAZÃO SOCIAL</span>
            <span className="info">Transportes Cervejas</span>
          </td>
          <td className="freteConta" style={{ width: "32mm" }}>
            <span className="nf-label">FRETE POR CONTA</span>
            <div className="border">
              <span className="info">1</span>
            </div>
            <p>0 - Emitente</p>
            <p>1 - Destinatário</p>
          </td>
          <td style={{ width: "17.3mm" }}>
            <span className="nf-label">CÓDIGO ANTT</span>
            <span className="info" />
          </td>
          <td style={{ width: "24.5mm" }}>
            <span className="nf-label">PLACA</span>
            <span className="info">IHL-7746</span>
          </td>
          <td style={{ width: "11.3mm" }}>
            <span className="nf-label">UF</span>
            <span className="info">SP</span>
          </td>
          <td style={{ width: "29.5mm" }}>
            <span className="nf-label">CNPJ/CPF</span>
            <span className="info">47.661.461/0001-79</span>
          </td>
        </tr>
      </tbody>
    </Table>
    <Table cellPadding="0" cellSpacing="0" border="1" striped bordered hover className="no-top">
      <tbody>
        <tr>
          <td className="field endereco">
            <span className="nf-label">ENDEREÇO</span>
            <span className="content-spacer info">
              Av. Corifeu de Azevedo Marques, 3097{" "}
            </span>
          </td>
          <td style={{ width: "32mm" }}>
            <span className="nf-label">MUNICÍPIO</span>
            <span className="info">São Paulo</span>
          </td>
          <td style={{ width: "31mm" }}>
            <span className="nf-label">UF</span>
            <span className="info">SP</span>
          </td>
          <td style={{ width: "51.4mm" }}>
            <span className="nf-label">INSC. ESTADUAL</span>
            <span className="info">355.853.995.129</span>
          </td>
        </tr>
      </tbody>
    </Table>
    <Table cellPadding="0" cellSpacing="0" border="1" striped bordered hover className="no-top">
      <tbody>
        <tr>
          <td className="field quantidade">
            <span className="nf-label">QUANTIDADE</span>
            <span className="content-spacer info">3</span>
          </td>
          <td style={{ width: "31.4mm" }}>
            <span className="nf-label">ESPÉCIE</span>
            <span className="info">CAIXAS</span>
          </td>
          <td style={{ width: "31mm" }}>
            <span className="nf-label">MARCA</span>
            <span className="info" />
          </td>
          <td style={{ width: "31.5mm" }}>
            <span className="nf-label">NUMERAÇÃO</span>
            <span className="info" />
          </td>
          <td style={{ width: "31.5mm" }}>
            <span className="nf-label">PESO BRUTO</span>
            <span className="info">20,00</span>
          </td>
          <td style={{ width: "32.5mm" }}>
            <span className="nf-label">PESO LÍQUIDO</span>
            <span className="info">19,00</span>
          </td>
        </tr>
      </tbody>
    </Table>
    {/* Dados do produto/serviço */}
    <p className="area-name">Dados do produto/serviço</p>
    <div className="wrapper-border">
    
      <Table cellPadding="0" cellSpacing="0" border="1" striped bordered hover
        className="boxProdutoServico"
      >
        <thead className="listProdutoServico" id="table">
          <tr className="titles">
            <th className="cod" style={{ width: "15.5mm" }}>
              CÓDIGO
            </th>
            <th className="descrit" style={{ width: "66.1mm" }}>
              DESCRIÇÃO DO PRODUTO/SERVIÇO
            </th>
            <th className="ncmsh">NCMSH</th>
            <th className="cst">CST</th>
            <th className="cfop">CFOP</th>
            <th className="un">UN</th>
            <th className="amount">QTD.</th>
            <th className="valUnit">VLR.UNIT</th>
            <th className="valTotal">VLR.TOTAL</th>
            <th className="bcIcms">BC ICMS</th>
            <th className="valIcms">VLR.ICMS</th>
            <th className="valIpi">VLR.IPI</th>
            <th className="aliqIcms">ALIQ.ICMS</th>
            <th className="aliqIpi">ALIQ.IPI</th>
          </tr>
        </thead>
        <tbody >
        <tr className="titles">
            <th className="item" style={{ width: "15.5mm" }}>
              {props.id_produto} 12
            </th>
            <th className="item" style={{ width: "66.1mm" }}>
            {props.nome_produto} Cerveja Baden
            </th>
            <th className="ncmsh">0,00</th>
            <th className="cst">0,00</th>
            <th className="cfop">0,00</th>
            <th className="un">1</th>
            <th className="amount">1</th>
            <th className="valUnit">19,99</th>
            <th className="valTotal">19,99</th>
            <th className="bcIcms">0,00</th>
            <th className="valIcms">0,00</th>
            <th className="valIpi">0,00</th>
            <th className="aliqIcms">0,00</th>
            <th className="aliqIpi">0,00</th>
          </tr>


        </tbody > 
      </Table>
    </div>
    {/* Calculo de ISSQN */}
    <p className="area-name">Calculo do issqn</p>
    <Table cellPadding="0" cellSpacing="0" border="1" striped bordered hover className="boxIssqn">
      <tbody>
        <tr>
          <td className="field inscrMunicipal">
            <span className="nf-label">INSCRIÇÃO MUNICIPAL</span>
            <span className="info txt-center" />
          </td>
          <td className="field valorTotal">
            <span className="nf-label">VALOR TOTAL DOS SERVIÇOS</span>
            <span className="info txt-right">0,00</span>
          </td>
          <td className="field baseCalculo">
            <span className="nf-label">BASE DE CÁLCULO DO ISSQN</span>
            <span className="info txt-right">0,00</span>
          </td>
          <td className="field valorIssqn">
            <span className="nf-label">VALOR DO ISSQN</span>
            <span className="info txt-right">0,00</span>
          </td>
        </tr>
      </tbody>
    </Table>
    {/* Dados adicionais */}
    <p className="area-name">Dados adicionais</p>
    <Table cellPadding="0" cellSpacing="0" border="1" striped bordered hover
      className="boxDadosAdicionais"
    >
      <tbody>
        <tr>
          <td className="field infoComplementar">
            <span className="nf-label">INFORMAÇÕES COMPLEMENTARES</span>
            <span>EXEMPLO</span>
          </td>
          <td
            className="field reservaFisco"
            style={{ width: "85mm", height: "24mm" }}
          >
            <span className="nf-label">RESERVA AO FISCO</span>
            <span />
          </td>
        </tr>
      </tbody>
    </Table>
    <footer>
      <Table cellPadding="0" cellSpacing="0" >
        <tbody>
          <tr>
            <td style={{ textAlign: "right" }}>
              <strong>Empresa de Cervejaria Artenasal</strong>
            </td>
          </tr>
        </tbody>
      </Table>
    </footer>


    </div>
    </div>
 

      
    </>

  

   
           

     
    )
}

export default NotaFiscal