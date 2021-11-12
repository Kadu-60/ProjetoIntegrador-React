import React from 'react'
import './BuscaAvan.css'
import Select from '../../micro/Forms/Select/Select';
import SelectBusca from '../../micro/Forms/Select/SelectBusca';
import BotaoBuscaAvan from '../../micro/BotaoBuscaAvan/BotaoBuscaAvan';

function BuscaAvan(props) {

  return (
    <>
        
        <div class="busca-ava container">
        <br/>
            <form>
                <div class="row d-flex justify-content-center">
                   
                    <div class="titulo-pesq col-12 d-flex justify-content-center">
                    <p className="title-dash bsc-avan">Busca Avançada</p>
                    </div>
                    <div class="col-6 d-flex justify-content-center">
                        <div class="row seletores">
                            <div class="col-12 d-flex flex-column align-items-center">
                            <p> Marca:</p>
                                <SelectBusca/>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 d-flex justify-content-center">
                        <div class="row seletores">
                            <div class="col-12 d-flex flex-column align-items-center">
                            <p> Familia:</p>
                            <SelectBusca/>

                               
                            </div>
                        </div>
                    </div>
                    <div class="col-6 d-flex justify-content-center">
                        <div class="row seletores">
                        <div class="col-12 d-flex flex-column align-items-center">
                        <p> Prato:</p>
                        <SelectBusca/>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 d-flex justify-content-center">
                        <div class="row seletores">
                        <div class="col-12 d-flex flex-column align-items-center">
                            <p> Categoria:</p>
                            <SelectBusca/>
                            </div>
                        </div>
                    </div>
                    
                    <BotaoBuscaAvan type='submit' texto='Buscar'/>
                    
                </div>
            </form>
        </div>
            
    </>
  );
}

export default BuscaAvan;
