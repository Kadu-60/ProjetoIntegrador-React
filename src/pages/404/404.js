import React from 'react';
import { Link } from 'react-router-dom';
import './404.css'


const NotFound = () => (
  <div class="img-404">
      <h2>404 - Cerveja Não Encontrada </h2>
    <img  src="https://cdn.vox-cdn.com/thumbor/DaUzF8DoUoxWph7uCpWBeQhe-rE=/0x0:1333x1000/1200x800/filters:focal(593x207:805x419)/cdn.vox-cdn.com/uploads/chorus_image/image/69313139/shutterstock_1193280763_page_001.0.jpg" />
    <br/>
    {/* <Link to="/">Voltar para Home</Link> */}
  </div>
);

export default NotFound;