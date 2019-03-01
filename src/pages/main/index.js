import React, { Component } from 'react';
import api from '../../services/api';

export default class main extends Component {
    state = {
        products: [],
    }

    componentDidMount() {
        this.loadProducts();
    }
    
    loadProducts = async () => {
        const response = await api.get('/pontosturisticos/');

        //console.log(response.data);
        this.setState({ products: response.data });
    };

    render() {
        //return <h1>Contagem de pontos turisticos: {this.state.products.length}</h1>;
        return (
            <div className = "product-list">
                {this.state.products.map(product =>(
                    <h2 key={product.id}>{product.nome}</h2>
                ))}
            </div>
        )
    }
}