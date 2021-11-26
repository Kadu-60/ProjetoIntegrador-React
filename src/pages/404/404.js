import React from 'react';
import { Link } from 'react-router-dom';
import './404.css'


const NotFound = () => (
  <div class="img-404">
    <img  src="https://image.spreadshirtmedia.net/image-server/v1/mp/compositions/T31A1MPA29PT10X1Y0D156673566FS2035/views/1,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/error-404-beer-not-found-mug.jpg" />
    <br/>
    {/* <Link to="/">Voltar para Home</Link> */}
  </div>
);

export default NotFound;