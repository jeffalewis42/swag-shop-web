import React from 'react';
import './product-condensed.css';
import DataService from "../services/data-service";

let ds = new DataService();
class ProductCondensed extends React.Component{
    
    constructor(props){
        super(props);
        //Bindings
        this.removeProduct = this.removeProduct.bind(this);
        
    }
    
    removeProduct = () => {
        ds.removeWishListItem(this.props.product);
    }
    
    
    render() {
        return ( 
           <li className="list-group-item productcondensedlistitem">
                <div className="row no-gutters">
                <div className="col-2">
                    <a className="btn btn-outline-danger btn-small wishlistremove" onClick={() => this.removeProduct()}>X</a>
                    </div>
                    <div className="col-10">
                <p className="productcondenseditem">{this.props.product.title} | <b>${this.props.product.price}</b>
                </p>
                    </div>
                </div>    
            </li> 
           
        );
    }
}

export default ProductCondensed;