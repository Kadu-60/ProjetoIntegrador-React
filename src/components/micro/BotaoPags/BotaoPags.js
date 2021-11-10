import React from 'react'
import './BotaoPags.css'


function BotaoPags(props) {

  return (
    <>
        
        <div class="col pt-4">
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                      <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Anterior</a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#">Proxima</a>
                      </li>
                    </ul>
                </nav>
            </div>

        
    </>
  );
}

export default BotaoPags;