import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../actions/productQuantity';
import greyTshirt from '../images/greytshirt.jpg';
import blackTshirt from '../images/blacktshirt.jpeg';
import blueTshirt from '../images/bluetshirt.jpeg';
import whiteTshirt from '../images/whitetshirt.jpg';

function Cart ({basketProps, productQuantity, clearProduct}) {
  console.log("basketProps");
  console.log(basketProps);
  let productsInCart = [];
  Object.keys(basketProps.products).forEach( function(item) {
    console.log(item);
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item])
    }
  })

  // const productImages = [greyTshirt, blackTshirt, blueTshirt, whiteTshirt];
  const productImages = (product) => {
    if (product.tagName === 'GreyTshirt') {
      return greyTshirt;
    } else if (product.tagName === 'BlackTshirt') {
      return blackTshirt;
    } else if (product.tagName === 'BlueTshirt') {
      return blueTshirt;
    } else if (product.tagName === 'WhiteTshirt') {
      return whiteTshirt;
    }
  }
  
  productsInCart = productsInCart.map((product,index) => {
    console.log("my product is:");
    console.log(product);
    return  (
      <Fragment key={index}>
        <div className="product"><ion-icon onClick={() => clearProduct(product.tagName)} name="close-circle"></ion-icon>
          <img src={productImages(product)} />
          <span className="sm-hide">{product.name}</span>
          <span className="sm-hide">${product.price},00</span>
        </div>
        <div className="quantity">
          <ion-icon onClick={() => productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
          <span>{product.numbers}</span>
          <ion-icon onClick={() => productQuantity('increase', product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
        </div>
        <div className="total">${product.numbers * product.price},00</div>
      </Fragment>
    )
  });
  return (
    <div className="container-products">
      <div className="product-header">
        <h5 className="product-title">PRODUCT</h5>
        <h5 className="price sm-hide">PRICE</h5>
        <h5 className="quantity">QUANTITY</h5>
        <h5 className="total">TOTAL</h5>
      </div>
      <div className="products">
        { productsInCart }
      </div>
      <div className="basketTotalContainer">
        <h4 className="basketTotalTitle">Basket Total</h4>
        <h4 className="basketTotal">${basketProps.cartCost},00</h4>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  basketProps : state.basketState
})

export default connect(mapStateToProps, { productQuantity, clearProduct })(Cart);