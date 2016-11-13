import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';
import Search from './Search';
import products from './data/products';
import CartSummary from './CartSummary';

class App extends Component {
	constructor(props)
	{
		super(props);
        this.updateState=this.updateState.bind(this);
		this.state={
			productList:products,
			cartItems:[],
			filter:''
		}
	}
	updateState(e)
     {
     	this.setState({
          filter:e.target.value
        });

     }
     

  render() {
    return (
        <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1>{this.props.headerText}</h1>
               </div>
               <div className="col-md-8">
                 <Search 
                 updateState={this.updateState}/>
               </div>
            </div>
            <div className="row">
              <ProductList productList={this.state.productList}
                           filter={this.state.filter} />
              <CartSummary cartItems={this.state.cartItems}/>
            </div>
       </div>
    );
  }
}

export default App;
