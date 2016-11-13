import React from 'react';

export default class Product extends React.Component
{
	render()
	{
		return(
			<li>
                <div className="thumbnail">
                  <img alt={this.props.name} src={this.props.image}/>

                  <div className="caption clearfix">
                    <h3><a href={this.props.url}>{this.props.name}</a></h3>

                    <div className="product__price">
                      <span>{this.props.price}</span>
                      <span>{this.props.currency}</span>
                    </div>

                    <div className="product__button-wrap">
                      <button className="btn btn-primary">Add to cart</button>
                    </div>
                  </div>
                </div>
              </li>

             
			);
	}
}