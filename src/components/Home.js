import React from 'react';
import greyTshirt from '../images/greytshirt.jpg';
import blackTshirt from '../images/blacktshirt.jpeg';
import blueTshirt from '../images/bluetshirt.jpeg';
import whiteTshirt from '../images/whitetshirt.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

const Home = (props) => {
    console.log(props);
    return(
        <div className="container">
            <div className="image">
                <img src={greyTshirt} alt="greyTshirt" />
                <h3>Grey Tshirt</h3>
                <h3>$15</h3>
                <a onClick={() => props.addBasket('GreyTshirt')} className="add-cart cart1" href="#">
                    Add to cart
                </a>
            </div>
            <div className="image">
                <img src={blackTshirt} alt="blackTshirt" />
                <h3>Black Tshirt</h3>
                <h3>$10</h3>
                <a onClick={() => props.addBasket('BlackTshirt')} className="add-cart cart2" href="#">
                    Add to cart
                </a>
            </div>
            <div className="image">
                <img src={blueTshirt} alt="blueTshirt" />
                <h3>Blue Tshirt</h3>
                <h3>$12</h3>
                <a onClick={() => props.addBasket('BlueTshirt')} className="add-cart cart3" href="#">
                    Add to cart
                </a>
            </div>
            <div className="image">
                <img src={whiteTshirt} alt="whiteTshirt" />
                <h3>White Tshirt</h3>
                <h3>$14</h3>
                <a onClick={() => props.addBasket('WhiteTshirt')} className="add-cart cart4" href="#">
                    Add to cart
                </a>
            </div>
        </div>
    );
}

export default connect(null, { addBasket })(Home);