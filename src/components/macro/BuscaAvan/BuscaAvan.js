import React from 'react'
import './BuscaAvan.css'
import Select from '../../micro/Forms/Select/Select';
import SelectOp from '../../micro/Forms/Select/SelectOp';
import BotaoBuscaAvan from '../../micro/BotaoBuscaAvan/BotaoBuscaAvan';

function BuscaAvan(props) {

  return (
    <>
        
        <div class="busca-ava container">
            <form>
                <div class="row d-flex justify-content-center">
                    <div class="titulo-pesq col-12 d-flex justify-content-center">
                        Busca Avançada
                    </div>
                    <div class="col-6 d-flex justify-content-center">
                        <div class="row seletores">
                            <div class="col-12 d-flex flex-column align-items-center">
                                <Select titulo="Marca">
                                    <SelectOp valor="" titulo="--Marca--"/>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 d-flex justify-content-center">
                        <div class="row seletores">
                            <div class="col-12 d-flex flex-column align-items-center">
                               <Select titulo="Familia">
                                    <SelectOp selected="true" valor="" titulo="--Familia--"/>
                                    <SelectOp valor="Pilsen" titulo="Pilsen"/>
                                    <SelectOp valor="Lager" titulo="Lager"/>
                               </Select>

                               
                            </div>
                        </div>
                    </div>
                    <div class="col-6 d-flex justify-content-center">
                        <div class="row seletores">
                        <div class="col-12 d-flex flex-column align-items-center">
                                <Select titulo="Prato">
                                    <SelectOp valor="" titulo="--Prato--"/>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 d-flex justify-content-center">
                        <div class="row seletores">
                        <div class="col-12 d-flex flex-column align-items-center">
                                <Select titulo="Categoria">
                                    <SelectOp valor="" titulo="--Categoria--"/>
                                </Select>
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