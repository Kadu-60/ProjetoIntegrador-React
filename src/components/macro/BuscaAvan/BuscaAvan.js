import React, { useState, useEffect } from "react"
import './BuscaAvan.css'
import Select from '../../micro/Forms/Select/Select';
import SelectBusca from '../../micro/Forms/Select/SelectBusca';
import SelectPrato from '../../micro/Forms/Select/SelectPrato';
import SelectCategoria from '../../micro/Forms/Select/SelectCategoria';
import SelectFamilia from '../../micro/Forms/Select/SelectFamilia';
import BotaoBuscaAvan from '../../micro/BotaoBuscaAvan/BotaoBuscaAvan';
import { useHistory } from "react-router-dom"
import IrPara from "./IrPara";


const initialValue = {
    marca: -1,
    familia: -1,
    categoria: -1,
    prato: -1
}

function BuscaAvan(props) {

    const [values, setValues] = useState(initialValue);
    const [url, setUrl] = useState('teste');
    const final = '/buscaAvancada/' + values.categoria + '/' + values.marca + '/' + values.familia + '/' + values.prato + '/'
    const history = useHistory();



    function onChange(ev) {
        const { name, value } = ev.target;

        setValues({ ...values, [name]: value })


        setUrl('/buscaAvancada/' + values.marca + '/' + values.familia + '/' + values.marca + '/' + values.marca + '/')


        console.log(final)


    }






    return (
        <>

            <div class="busca-ava container">
                <br />
                <form>
                    <div class="row d-flex justify-content-center">

                        <div class="titulo-pesq col-12 d-flex justify-content-center">
                            <p className="title-dash bsc-avan">Busca Avançada</p>
                        </div>
                        <div class="col-12 col-md-6 d-flex justify-content-center">
                            <div class="row seletores">
                                <div class="col-12 d-flex flex-column align-items-center">
                                    <p className="busc-avanc"> Marca:</p>
                                    <div className='divSelect' >
                                        <select className="selectBuscaAvancada" required name="marca" id="marca" onChange={onChange} >
                                            <option value="-1" onChange={onChange} selected>Selecione</option>
                                            <option value="1" onChange={onChange}>Baden</option>
                                            <option value="2" onChange={onChange}>Colorado</option>
                                            <option value="3" onChange={onChange}>Hoegaarden</option>
                                            <option value="4" onChange={onChange}>Patagonia</option>
                                            <option value="5" onChange={onChange}>Michelob</option>
                                            <option value="6" onChange={onChange}>Madalena</option>
                                            <option value="7" onChange={onChange}>Weltenburger</option>
                                            <option value="8" onChange={onChange}>Blumenau</option>


                                        </select>
                                        <span className='selectBuscaAvancadaSeta'></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 d-flex justify-content-center">
                            <div class="row seletores">
                                <div class="col-12 d-flex flex-column align-items-center">
                                    <p className="busc-avanc"> Familia:</p>
                                    <div className='divSelect' >
                                        <select className="selectBuscaAvancada" required name="familia" id="familia" onChange={onChange} >
                                            <option value="-1" onChange={onChange} selected>Selecione</option>
                                            <option value="1" onChange={onChange}>American IPA</option>
                                            <option value="2" onChange={onChange}>Weiss</option>
                                            <option value="3" onChange={onChange}>Pilsen</option>
                                            <option value="4" onChange={onChange}>Bock</option>
                                            <option value="5" onChange={onChange}>India Pale Ale</option>
                                            <option value="6" onChange={onChange}>Witbier</option>
                                            <option value="7" onChange={onChange}>Cristal</option>
                                            <option value="8" onChange={onChange}>Golden</option>
                                            <option value="9" onChange={onChange}>Pale Ale</option>
                                            <option value="10" onChange={onChange}>Red Ale</option>
                                            <option value="11" onChange={onChange}>Lager</option>
                                            <option value="12" onChange={onChange}>Fruit Beer</option>

                                        </select>
                                        <span className='selectBuscaAvancadaSeta'></span>
                                    </div>



                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 d-flex justify-content-center">
                            <div class="row seletores">
                                <div class="col-12 d-flex flex-column align-items-center">
                                    <p className="busc-avanc"> Prato:</p>
                                    <div className='divSelect' >
                                        <select className="selectBuscaAvancada" required name="familia" id="familia" onChange={onChange} >
                                            <option value="-1" onChange={onChange} selected>Selecione</option>
                                            <option value="1" onChange={onChange}>Aves</option>
                                            <option value="2" onChange={onChange}>Carnes vermelhas</option>
                                            <option value="3" onChange={onChange}>Peixes e frutos do mar</option>
                                            <option value="4" onChange={onChange}>Chocolate</option>
                                            <option value="5" onChange={onChange}>Frutas vermelhas</option>
                                            <option value="6" onChange={onChange}>Massa com molho ao sugo ou bolonhesa</option>
                                            <option value="7" onChange={onChange}>Massa com molho bechamel ou alfredo</option>
                                            <option value="8" onChange={onChange}>Queijos</option>
                                            <option value="9" onChange={onChange}>Torta de limão</option>

                                        </select>
                                        <span className='selectBuscaAvancadaSeta'></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 d-flex justify-content-center">
                            <div class="row seletores">
                                <div class="col-12 d-flex flex-column align-items-center">
                                    <p className="busc-avanc"> Categoria:</p>

                                    <div className='divSelect' >


                                        <select className="selectBuscaAvancada" required name="familia" id="familia" onChange={onChange} >
                                            <option value="-1" onChange={onChange} selected>Selecione</option>
                                            <option value="1" onChange={onChange}>Lager</option>
                                            <option value="2" onChange={onChange}>Weiss</option>
                                            <option value="3" onChange={onChange}>Ipa</option>
                                            <option value="4" onChange={onChange}>Pale Ale</option>
                                            <option value="5" onChange={onChange}>Stout</option>
                                            <option value="6" onChange={onChange}>Pilsen</option>
                                            <option value="7" onChange={onChange}>Amber Lager</option>
                                            <option value="8" onChange={onChange}>Trigo</option>
                                            <option value="9" onChange={onChange}>Sazonal</option>
                                            <option value="10" onChange={onChange}>American IPA</option>
                                            <option value="11" onChange={onChange}>Fruit Beer</option>

                                        </select>
                                        <span className='selectBuscaAvancadaSeta'></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <IrPara url={final} />

                    </div>
                </form>
            </div>

        </>
    );
}

export default BuscaAvan;
