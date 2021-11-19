import React, { Component } from 'react'
import { Accordion, Container, Icon } from 'semantic-ui-react'



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
              <p className="title-dash">Informações</p>
              <hr/>
             <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='beer' />
          Descrição do Produto
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
         
          {this.props.descricaoProd}
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='glass martini' />
          Descrição Técnica
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
          <ul>
                            <label className='labelproduto'> <strong>Familia da Cerveja:</strong></label>
                            <li>{this.props.familia}</li>
                            <label className='labelproduto'> <strong>Estilo ou Família:</strong></label>
                            <li>{this.props.estilo}</li>
                            <label className='labelproduto'> <strong>IBU:</strong></label>
                            <li>{this.props.ibu}</li>
                            <label className='labelproduto'> <strong>Cor da Cerveja:</strong></label>
                            <li>{this.props.cor}</li>
                            <label className='labelproduto'> <strong>Teor Alcoólico:</strong></label>
                            <li>{this.props.teor}00%</li>
                        </ul>
         
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='utensils' />
        Harmonização
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
          {this.props.harmonizacao}
       
          </p>
          
        </Accordion.Content>
      
        

        <br/> <br/>

      </Accordion>
      
        

      <br/> <br/> <br/>


        </Container>
     
    )
  }
}