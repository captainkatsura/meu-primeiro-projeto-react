import React from 'react';
import HeaderComponent from './Header';
import BannerComponent from './Banner';
import ProdutoComponent from './Produto';
import FooterComponent from './Footer';

function Web(){
  return (
    <div className="container">
     <HeaderComponent />
     <BannerComponent />
     <ProdutoComponent />
     <FooterComponent />
    </div>
  )

}
export default Web;