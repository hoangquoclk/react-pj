import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

const api = axios.create({
  // baseURL: `https://605f2505e96e5c0017408466.mockapi.io/api/products`
  baseURL: `http://localhost:3004/products`
});

class Axios extends Component {
  state = {
    products: []
  }

  constructor() {
    super();
    this.getProduct();
  }

  getProduct = async () => {
    let data = await api.get('/').then(({data}) => data);
      
    this.setState({ products: data });
  }

  // getProduct = async () => {
  //   try {
  //     let data = await axios({
  //       method: "get",
  //       url: "https://605f2505e96e5c0017408466.mockapi.io/api/products"
  //     }).then(({data}) => data);
  //     this.setState({products: data})
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // }

  createProduct = async () => {
    let res = await api.post('/', {
      name: "Samsung X", price: 10000, status: true
    });
    console.log(res);
    this.getProduct();
  }
  
  // createProduct = async () => {
  //   try {
  //     let data = await axios({
  //       method: "post",
  //       url: "https://605f2505e96e5c0017408466.mockapi.io/api/products",
  //       data: {
  //         name: "Samsung galaxy",
  //         price: "10000",
  //         status: "true"
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   this.getProduct();
  // }

  deleteProduct = async (id) => {
    let data = await api.delete(`/${id}`);
    this.getProduct();
  }

  // deleteProduct = async (id) => {
  //   try {
  //     let data = await axios({
  //       method: "delete",
  //       url: `https://605f2505e96e5c0017408466.mockapi.io/api/products/${id}`
  //     }).then(({data}) => data); 
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   this.getProduct();
  // }

  updateProduct = async (id, val) => {
    await api.put(`/${id}`, {
      name: val
    });
    this.getProduct();
  }

  // updateProduct = async (id, val) => {
  //   try {
  //     axios({
  //       method: "put",
  //       url: `https://605f2505e96e5c0017408466.mockapi.io/api/products/${id}`,
  //       data: {
  //         name: val
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   this.getProduct();
  // }

  render() {
    return (
      <div>
        <h2>Hello</h2>
        <button onClick={this.createProduct}>Create product</button>
        {this.state.products.map(product => 
        <h3 key={product.id} >
        <span onClick={() => this.updateProduct(product.id, `${product.name}a`)}>{product.name}</span>
        <button onClick={() => this.deleteProduct(product.id)}>Delete</button></h3>)}
      </div>
    );
  }
}

ReactDOM.render(
  <Axios/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
