import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

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

        const { products } = this.state;

        return (
            <div className = "product-list">
                {products.map(product =>(
                    <article key={product.id}>
                        <strong>{product.nome}</strong>
                        <p>{product.descricao}</p>

                        <a href="">Acessar</a>                     
                    </article>
                ))}
            </div>
        )
    }
}