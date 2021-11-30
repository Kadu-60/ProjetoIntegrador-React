import React from 'react';
import { Link } from 'react-router-dom';
import './404.css'


const NotFound = () => (
  <div class="card-404">
      <h2>404 - Cerveja Não Encontrada </h2>
    <img class="img-404" src="https://res.cloudinary.com/teepublic/image/private/s--TsohP-Cw--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_191919,e_outline:48/co_191919,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1513360267/production/designs/2182073_1.jpg" />
    <br/>
    {/* <Link to="/">Voltar para Home</Link> */}
  </div>
);

export default NotFound;