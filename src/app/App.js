import React from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';
import Product from '../product/product';

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
            <div className="col mb-3" key={product._id}> 
                <Product title={product.title} price={product.price} imgURL={product.imgUrl}/>
            </div>
        );
            
        return (list);    
        
    }

    render() {
        return (
            <div className = "App" >
                <div className = "App-header" >
                    <img src = {logo} className = "App-logo" alt = "logo" />
                    <h2>Welcome to The Swag Shop </h2>  
                </div> 
                <div className ="container-fluid App-main">
                <div className = "row row-cols-1 row-cols-md-3">
                   {this.productList()}
                    

                </div>
                    </div>
            </div>
        );
    }
}

export default App;
