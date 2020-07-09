import React from 'react';
import axios from 'axios';
import Products from './Products';

class Home extends React.Component {
    state = {};
    componentDidMount() {
      this.fetchInitialState();
    }
  
    fetchInitialState = () => {
      axios.get('./data/initialBasket.json')
        .then((response)=>{
          this.setState(response);
          console.log(this.state);
        })
        .catch((error)=>{
          console.log(error);
        });
    }
    render(){
        return(
            <div className="container">
                { this.state ? <Products data={this.state.data}/> : null }
            </div>
        );
    }

}

// const mapDispatchToProps = dispatch =>{
//     return {
//         getDefaultProducts : function(){

//         }
//     }
// }
export default Home;