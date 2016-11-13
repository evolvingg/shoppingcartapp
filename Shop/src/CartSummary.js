import React from 'react';
export default class CartSummary extends React.Component{
    render()
    {
      let v=0;
      var total = this.props.cartItems.map(item => {
      v=v+item.price;
      return  v;

    } );
    console.log(total +"   "+v+"  ");
    var empty =(
        	           <div className="alert alert-info">
                        Cart is empty
                       </div>
        	          );
        console.log(empty); 
        var cart=this.props.cartItems.map(cartItem=>{
            return(
                <li key={cartItem.id} className="cart-item">
                    <span className="cart-item__name">{cartItem.name}</span>
                           <span className="cart-item__price">
                           <span>{cartItem.price}</span>
                           <span> </span>
                           <span>EUR</span>
                           </span>
                        </li>
                );
            }
          )

        var itemsList= (
              <ul>
                 {cart}
              </ul>
        )

    	return(
    		<div className="col-md-4">
               <h3>Shopping Cart</h3>
                <div className="cart">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      {this.props.cartItems.length?itemsList:empty}
                       <ul>
                        {cart}
                       </ul>
                   <div className="cart__total">
                  <span>Total:</span>&nbsp;
                  <span className="cart__total__amount">{v}</span>&nbsp;
                  <span>EUR</span>
                </div>
              </div>
            </div>
          </div>
       </div>
      )
  }
}