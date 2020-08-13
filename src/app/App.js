import React from 'react';
import logo from './logo.svg';
import './App.css';


//Components
import Product from '../product/product';
import WishList from '../wishlist/wishlist';
//import ProductCondensed from '../product-condensed/product-condensed';

//Services
import HttpService from '../services/http-service';
const http = new HttpService();




class App extends React.Component {

    constructor(props) {
        super(props);
        //default state; initializing as an empty array to keep from being null.
        
        this.state = {products:[]};
        
        //Bind Functions
        this.loadData = this.loadData.bind(this);

        this.loadData();
        
        this.productList = this.productList.bind(this);
        
    }

    loadData = () => {
       var self= this;
        http.getProducts().then(data => {
            self.setState({products: data});
        }, err => {


        });

    };

    productList = () => {
        const list = this.state.products.map(
        (product)=>
            <div className="col-12 col-md-4" key={product._id}> 
                <Product product={product}/>
            </div>
        );
            
        return (list);    
        
    }

    render() {
        return (
            <div className = "App" >
                <div className = "container-fluide App-header" >
                  <img src = {logo} className = "App-logo" alt = "logo" />
                    <h2>Welcome to The Swag Shop </h2>  
                </div> 
                <div className ="container-fluid App-main">
            
                <div className = "row">
                    <div className ="col-12 col-sm-6 col-md-8">
                  <div className = "row">
                        {this.productList()}
                      </div>
                    </div>
                    <div className ="col-12 col-sm-6 col-md-4">
                    <WishList />
                    </div>

                </div>
                    </div>
            </div>
        );
    }
}

export default App;
