import React from 'react'
import { PaginationItem } from 'semantic-ui-react';
import './BotaoPags.css'


function BotaoPags({prodsPorPagina, totalProd, paginate}) {

  const numeroPags = []
  for(let i = 1; i <= Math.ceil(totalProd / prodsPorPagina); i++){
    numeroPags.push(i)
  }

  return (
    <>
        
        <div class="col pt-4">
                <nav aria-label="Page navigation example migalhas">
                    <ul class="pagination  migalhas justify-content-center">
                      {numeroPags.map(numero =>(
                        <li key={numero} className="page-item">
                          <a onClick={() => paginate(numero)} className="page-link" href="#">
                            {numero}
                          </a>
                        </li>

                      ))}
                    </ul>
                </nav>
            </div>

        
    </>
  );
}

export default BotaoPags;