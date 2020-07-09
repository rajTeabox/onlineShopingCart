import React, { Fragment } from 'react';
import greyTshirt from '../images/greytshirt.jpg';
import blackTshirt from '../images/blacktshirt.jpeg';
import blueTshirt from '../images/bluetshirt.jpeg';
import whiteTshirt from '../images/whitetshirt.jpg';
import { addBasket } from '../actions/addAction';
import { connect } from 'react-redux';

function Products(props) {
    console.log("props....", props);
    let availableProducts = [];
    if(props.data){
      console.log(props.data.products);
      const products = props.data.products;
      Object.keys(products).forEach( function(item) {
        console.log(item);
        availableProducts.push(products[item])
      })
    }

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
    
    availableProducts = availableProducts.map((product,index) => {
        return (
          <Fragment key={index}>
            <div className="image">
              <img src={productImages(product)} alt={product.tagName} />
              <h3>{product.name}</h3>
              <h3>${product.price},00</h3>
              <a onClick={() => addBasket(product.tagName)} className="add-cart cart" href="#">
                  Add to cart
              </a>
            </div>
          </Fragment>
        )
    });

    return (
      <Fragment>
        {availableProducts}
      </Fragment>
    )
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    addBasket: (productName) => dispatch({
      type: 'ADD_PRODUCT_BASKET',
      payload: productName
  })
  }
}

export default connect(null, mapDispatchToProps)(Products);