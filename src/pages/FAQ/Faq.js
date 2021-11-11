import React, { Component } from 'react'
import { Accordion, Container, Icon } from 'semantic-ui-react'
import BotaoDash from '../../components/micro/BotaoDash/BotaoDash'
import './Faq.css'

export default class AccordionExampleStandard extends Component {
  
  state = { activeIndex: 0 }
 
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
        <Container>
            <br/> <br/> <br/>
              <p className="title-dash">Perguntas Frequentes</p>
             <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Por que meu pedido esta parado no posto fiscal?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
          Com o Convênio ICMS 93/2015 que entrou em vigor a partir de 01 de Janeiro de 2016, aumentou a fiscalização nas barreiras interestaduais, afetando os pedidos enviados para fora do estado de São Paulo.

        Devido a este motivo, alguns pedidos podem ter o prazo informado de entrega ultrapassado, pois, são retidos na barreira fiscal para verificação. Junto a estes pedidos, enviamos a Nota Fiscal e por nossa empresa estar no SIMPLES Nacional, pagamento um tributo único. No entanto, dependemos do Agente Público para liberação do pedido.

        Caso o Órgão do Governo entre em contato com você solicitando o pagamento de algum imposto, Favor Desconsiderar, pois, tudo é pago antes da saída do produto de nosso Centro de Distribuição.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Onde estamos?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
          A DevBrew Comércio On-line Ltda esta localizada na Av. Paulista, nº 10767 – Paulista/SP, CEP 00.000-000
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Política de privacidade e segurança
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
        Segurança e privacidade são tratadas pela DevBrew de forma séria. 

        Nós defendemos as boas práticas, as políticas de segurança e a privacidade na internet. Não enviamos spam, nem repassamos as suas informações cadastrais.

        O uso desapropriado por parte de algum dos nossos colaboradores, mesmo com acesso restrito às informações cadastrais, será tratado como falha gravíssima e medidas rigorosas serão tomadas.

        Navegue com segurança e tranquilidade. Cuidamos das suas informações em todas as etapas do processo de compra.

        Fornecemos a terceiros contratados os dados do cliente armazenados no DevBrew com a finalidade de concretizar as compras, sendo que o cadastramento no site corresponde ao consentimento expresso quanto a coleta/uso/armazenamento/tratamento dos dados (inclusive pelos terceiros contratados), podendo, inclusive, ser individualizados para fins estatísticos.
          </p>
          
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Possuem loja física?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
          Atualmente não temos loja física, apenas venda pelo nossa loja virtual
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Política de compras
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
          DevBrew On-line Ltda, Av. Paulista, nº 10767, – São Paulo/SP – CEP 00000-000, CNPJ:  70.020.745/0001-14, Inscrição Estadual 457.123.123.123, doravante denominada simplesmente DevBrew, e, de outro lado, o cliente DevBrew, qualificado no momento da compra dos produtos DevBrew, doravante denominado simplesmente Cliente.

            Considerando que a DevBrew realiza venda de produtos e serviços pela internet;

            Considerando o interesse do Cliente na compra dos produtos oferecidos pela DevBrew em seus canais de venda;

            O presente contrato tem por finalidade estabelecer as condições gerais de uso e compra de produtos e serviços do cliente do site DevBrew (www.DevBrew.com.br).

            I. Confidencialidade: é de responsabilidade da DevBrew a preservação da confidencialidade de todos os dados e informações fornecidos pelo Cliente no processo de compra. A segurança do site é auditada diariamente e garantida contra a ação de hackers, através da plataforma digital Vtex.

            II. Serviço de Atendimento DevBrew: O cliente dispõe desse serviço para sanar suas dúvidas, solucionar eventuais solicitações ou reclamações a respeito do seu pedido ou de qualquer conteúdo disponibilizado no site. O SAC poderá ser acionado através do Chat ou por E-mail, todos disponibilizados em nossa "Central de Atendimento".

            III. Política de entrega: o prazo para entrega dos produtos é informado durante o procedimento de compra, contabilizado em dias úteis. As entregas são realizadas de segunda a sexta-feira, das 8h às 18h. Excepcionalmente, algumas entregas podem ocorrer aos sábados, domingos e feriados.

            III.I - A conferência do pedido é de responsabilidade do Cliente, que deve conferi-lo no ato da entrega e se houver alguma inconformidade, não deverá recebê-lo. Será necessário devolver o pedido à transportadora, para que ele possa retornar à DevBrew e ser reenviado corretamente.

            III.II - Caso a primeira tentativa de entrega não seja concluída com sucesso, a DevBrew realizará mais duas tentativas de entrega no local informado. É indispensável que, no endereço solicitado, haja uma pessoa autorizada pelo comprador, maior de 18 anos, e portando documento de identificação para receber a mercadoria e assinar o protocolo de entrega. Se houver três tentativas de entrega sem sucesso, o pedido retornará para a DevBrew.

            III.III - Se houver algum dado incorreto, após a finalização do pedido, como por exemplo a forma de pagamento e/ou endereço de entrega, ou ainda, caso queira solicitar prioridade da entrega, será necessário entrar em contato com o SAC.

            Nesse caso, será cobrado uma nova taxa de entrega para o reenvio dos produtos e o prazo será impactado. 

            III.IV - O prazo de entrega informado durante o procedimento de compra do produto leva em consideração o estoque, a região, o processo de emissão da nota fiscal e o tempo de preparo do pedido.

            As entregas dos pedidos são realizadas por meio de transporte aéreo e terrestre e, em alguns momentos, o prazo poderá variar, dependendo de cancelamento e atrasos de voos, cortes de cargas, acidentes, condições climáticas e interdições ou manifestações. 

            Ressaltamos também que, em algumas regiões, os Correios não realizam a entrega em domicílio. Nesses casos, o cliente receberá um aviso informando que o pedido está disponível para retirada na agência.

            Ao realizar um pedido, enviamos um e-mail com detalhamento das informações no momento em que o pedido é feito no site, na aprovação do pagamento, na saída dos itens do Centro de Distribuição DevBrew e quando a entrega é realizada em seu endereço. Além disso, o acompanhamento da entrega pode ser feito através do site www.cevejabox.com.br. 

            III.V - A taxa de entrega para pedidos no site varia de acordo com as regiões do Brasil. Ela é inserida automaticamente na confirmação do seu pedido. Ressaltamos que esses valores da taxa de entrega podem sofrer alterações por causa de promoções e ofertas.

            III.VI - A DevBrew.com.br não autoriza a transportadora a:

            Entrar no domicílio
            Entregar por meios alternativos (exemplo: içar produto por janela)
            Abrir a embalagem do produto
            Realizar entrega em endereço diferente do que consta no DANFE/ NFE
            Realizar entrega a menor de idade ou sem documento de identificação 
            III.VII - A DevBrew.com.br não se responsabiliza pela retenção de mercadorias na SEFAZ quando esta se dever exclusivamente a pendências do cliente, sendo, portanto, necessário seu comparecimento no posto fiscal para que a mercadoria seja liberada, tendo em vista que nestes casos as informações referentes a liberações e pagamentos só são passadas aos interessados.

            III.VIII - Caso você seja Pessoa Jurídica, mas não revenda os produtos adquiridos na DevBrew em seu estabelecimento, você pode se cadastrar com o CNPJ na DevBrew.com.br e realizar compras para o seu próprio consumo. Vale lembrar que, compras realizadas com o CNPJ só podem ser entregues no endereço cadastrado conforme o registro na Receita Federal.

            IV. Direito de arrependimento: As mercadorias podem ser trocadas ou devolvidas até 7 dias após o recebimento, por motivo de desistência, arrependimento, avaria ou entrega do produto em desacordo com o pedido realizado. Consulte o Código de Defesa do Consumidor

            Para isso, entre em contato com o SAC DevBrew e informe o número do pedido e o código do produto a ser trocado, ambos descritos na nota fiscal, ao lado do nome da mercadoria e qual o motivo da solicitação.

            A troca será realizada somente se o produto estiver em perfeito estado, na sua caixa de envio, com a etiqueta da DevBrew afixada.

            IV.I - Após a chegada do pedido ao Centro de Distribuição DevBrew, a DevBrew.com.br verificará se as condições de devolução recomendadas foram atendidas. Em caso afirmativo, providenciará a restituição no valor total da compra.

            IV.II - Se não desejar mais nenhum dos produtos, iremos estornar os valores pagos. Caso o pagamento tenha sido realizado via boleto bancário, o reembolso será feito através de depósito na conta corrente do titular do cadastro em nosso site. Para isso, vamos precisar que nos informe o seu CPF, nome do banco, número da agência e número da conta corrente. Caso o pagamento tenha sido realizado através do cartão de crédito, solicitaremos o estorno à administradora do seu cartão no prazo de 2 (dois) dias úteis. Esse estorno poderá ocorrer em até duas faturas subsequentes, devido à data de fechamento da sua fatura de cartão de crédito. Lembramos que esse é um procedimento da administradora financeira.

            IV.III - Se você optar por crédito para a realização de um novo pedido, disponibilizaremos um código de crédito, em forma de Cupom, que será enviado por e-mail para que você realize um novo pedido. Esta restituição só é válida para os casos em que não há retorno de mercadoria ao centro de distribuição.

            V. Política de Trocas e Devoluções: todas as ocorrências que envolvam troca ou devolução serão atendidas conforme o previsto no Código de Defesa do Consumidor.

            V.I - O Cliente deverá solicitar a troca ou devolução através do SAC. A coleta dos pedidos ocorrerá por meio de nossas transportadoras parceiras. Eventualmente, para algumas localidades, a devolução ocorrerá por postagem nos Correios e o custo referente à devolução será de responsabilidade da DevBrew. Você receberá um código de postagem e deverá se dirigir a qualquer agência credenciada dos Correios.

            

            V.II - A troca será realizada somente se o produto estiver em perfeito estado, na sua caixa de envio, com a etiqueta da DevBrew afixada.

            V.III - Após a chegada do pedido ao Centro de Distribuição, a DevBrew.com.br verificará se as condições de devolução recomendadas foram atendidas. Em caso afirmativo, providenciará a restituição ou troca do pedido de acordo com a solicitação feita pelo Cliente.

            V.IV - A DevBrew.com.br isenta-se da obrigação de atender às solicitações de troca ou devolução de qualquer produto devolvido sem que o SAC seja comunicado, ou se o contato for realizado fora do prazo ou na ausência de itens/acessórios que o acompanham.

            

            VI. Formas de pagamento aceitas:

            VI.I - Pagamento à vista ou parcelado: você pode efetuar o pagamento do seu pedido com cartão de crédito ou boleto bancário. Aceitamos os cartões Visa, Mastercard, Diners, American Express, ELO e Hipercard. Para o Clube de assinaturas, a única forma de pagamento, atualmente, é por cartão de crédito.

            VI.II - Para pagamentos com cartão de crédito, o pedido estará sujeito à aprovação da administradora do cartão.

            VII. Prazos de entrega e Forma de pagamento:

            VII.I - Para pagamentos em cartão de crédito, o prazo de entrega inicia-se no 1º dia útil, após a confirmação do pagamento do pedido enviada para seu e-mail de cadastro.

            VII.II - Para os pagamentos em boleto bancário, o prazo para confirmação do pagamento pode se estender em até 2 dias úteis, devido ao tempo de processamento junto à instituição financeira. 

            VII.III - No caso dos pedidos dos clubes o prazo é aumentado em 4 dias úteis, devido à grande quantidade de pedidos faturados simultaneamente.

            VIII. Promoções: as promoções podem ser encontradas na página principal do site da DevBrew.com.br, através de envio de e-mails marketing, banners em portais de comunicação e rede de afiliados. Porém, algum produto pode ser sinalizado no site quando o estoque estiver indisponível e não for possível efetuar a reposição com nossos fornecedores.

            VIII.I - O cliente deve ler atentamente o regulamento de cada oferta antes de fechar a compra. Em caso de dúvida, o cliente deverá entrar em contato com o nosso SAC.

            IX. Dos direitos autorais:

            
            IX.I - A estrutura do site DevBrew.com.br, bem como a logomarca, os textos, as imagens, os videos e demais aplicações informáticas que o compõem, são de propriedade da DevBrew e protegidas pela legislação brasileira referente a propriedade intelectual.
            
            IX.II - O Usuário não está autorizado a utilizar, sob qualquer forma ou pretexto, as marcas, conteúdos e serviços propostos pelo site, podendo a DevBrew recorrer às medidas cíveis e penais cabíveis quando da utilização ou reprodução indevida.
            
            IX.III - Conteúdo enviado pelo Cliente DevBrew: ao enviar qualquer conteúdo ao site da DevBrew.com.br, o Cliente e o Sócio retém a titularidade de seus direitos sobre este conteúdo (textos, vídeos, imagens, áudio, entre outros), cedendo à DevBrew.com.br uma licença de caráter gratuito, irrevogável, mundial e não exclusivo para a reprodução, modificação e exibição, sob qualquer meio ou forma, inclusive no site.

            X. Responsabilidades do Cliente

            X.I - O Cliente é responsável pela correta utilização do site e de seus serviços, prezando pelas boas práticas comerciais, sendo proibida a revenda dos produtos aqui vendidos, principalmente, em sites que praticam o MarketPlace.
            
            X.II -  A DevBrew tem o direito de limitar ou recusar pedidos que entender serem de negociadores, revendedores ou distribuidores, podendo também limitar ou cancelar a quantidade dos produtos adquiridos por cada cliente ou por pedido de compra. Além disso, o Cliente responsabiliza-se pelo cumprimento das normas inseridas nesse instrumento e pela proteção dos dados de acesso da sua conta (login e senha).
            
            
            XI. Das sanções
            
            XI.I - Sem prejuízos das demais medidas legais cabíveis, a DevBrew poderá, a qualquer momento, advertir, suspender ou cancelar a conta do Usuário:

            Que descumprir quaisquer dispositivos contidos no presente instrumento;
            Que praticar atos fraudulentos ou dolosos;
            Cujo comportamento constitua ou possa vir a causar ofensa ou danos a terceiros ou ao próprio site.

          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 5}
          index={5}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Como faço para trocar / devolver os produtos?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <p>
          As mercadorias podem ser trocadas ou devolvidas até 7 dias após o recebimento, por motivo de desistência, arrependimento, avaria ou entrega do produto em desacordo com o pedido realizado. 

        Para isso, entre em contato com o SAC, pelo Chat ou por E-mail, e informe o número do pedido e o código do produto a ser trocado, ambos descritos na nota fiscal, ao lado do nome da mercadoria e qual o motivo da solicitação.

        No caso das compras efetuados por cartão de crédito, o valor será ressarcido via estorno no prazo de até 5 dias úteis após o recebimento do mercadoria no centro de distribuição do CervejaBox. A verificação do estorno na fatura depende do prazo de processamento do banco.

        Já quando a compra for efetuado por boleto, o prazo para depósito na conta corrente em nome do comprador será em até 5 dias úteis após o recebimento do mercadoria no centro de distribuição do CervejaBox.

        A troca será realizada somente se o produto estiver em perfeito estado, em sua embalagem de envio, com a etiqueta da CervejaBox afixada.
          </p>
        </Accordion.Content>
        

        <br/> <br/>

      </Accordion>
      <p className="title-dash">Não encontrou o que precisava?</p>
      <p> Visite nossa central de atendimento</p>
      <button  className="btn-botao-faq" id="">
          <a className="chamado" href="/formulariocontato">
                        Criar um chamado</a>
        </button>
  
        

      <br/> <br/> <br/>


        </Container>
     
    )
  }
}