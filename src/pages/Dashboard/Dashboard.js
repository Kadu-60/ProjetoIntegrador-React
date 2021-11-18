import React from 'react'
import './Dashboard.css'

import MenuCentral from '../../components/macro/MenuCentral/MenuCentral'
import TituloDash from '../../components/micro/Titulo/TituloDash'



function Dashboard(props){

    return(
     <> 

            <div className="container">
                <TituloDash nome={props.nome} />
                <MenuCentral />
                <br/>
                <br/>
            </div>

           
            
        
            
          
     </>
    )
}

export default Dashboard