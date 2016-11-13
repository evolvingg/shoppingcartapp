import React from 'react';
import Product from './Product';


export default class ProductList extends React.Component
{
	
	render()
	{   
		var products,prod=this.props.filter.toLowerCase(),flag=0;
		if(true)
        {
        flag=0;
		products=this.props.productList.map(product=>{
		if(prod.length<3||(product.name.toLowerCase()).indexOf(prod)>-1)
			{
			flag=1;
			return (
                 <Product
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    currency={product.currency}
                    image={product.image}
                    url={product.url}
                    />
				);
			}
		})
		if(flag===0)
			return(
		        <b>Sorry name not found</b>
		           )
	}
		return (
                <div className="col-md-8">
                    <h3>Products</h3>
                    <div className="products-list">
                       <ul className="clearfix">
                         {products}
                       </ul>
                    </div>
                </div>
			);
	}
} 