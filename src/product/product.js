import React, {Component} from 'react';
import './product.css';

class Product extends React.Component{
    render() {
        return ( 
            <div className = "card h-100 product" >
                <img className = "card-img-top img-fluid" src = {this.props.imgURL} alt = "Product" /> 
                <div className = "card-block" >
                    <h4 className = "card-title" >{this.props.title}</h4> 
                    <p className = "card-text" > Price: ${this.props.price} </p> 
                    <a href = "#" className = "btn btn-primary"> Add to Wishlist </a> 
                </div> 
            </div>
           
        );
    }
}

export default Product;

