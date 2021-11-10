import React from 'react'


function ListarProdutos(props) {

  return (
    <>
        
            <div class="row d-flex justify-content-center pt-4">
                    <div class="row d-flex listaProdutos">
                        {props.children}
                    </div>
            </div>
            

        
    </>
  );
}

export default ListarProdutos;
