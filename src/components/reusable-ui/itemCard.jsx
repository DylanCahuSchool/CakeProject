import React from 'react';
import {formatPrice} from '../../utils/maths';

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '15px',
        padding: '10px',
        marginBottom: '10px',
        width: '200px',
        boxShadow: '-8px 8px 20px 0px rgb(0 0 0 / 20%)',
    },
    image: {
        width: '100%',
    },
    price: {
        color: '#5acaca', // Make the price have the same color as the button
    },
    button: {
        backgroundColor: '#5acaca',
        color: 'white',
        padding: '10px 24px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
        borderRadius: '12px', 
        border: 'none', 
    },
    bottomRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
};

const ItemCard = ({ product }) => {
    return (
        <div style={styles.card}>
            <img style={styles.image} src={product.imageSource} alt={product.title} />
            <h3>{product.title}</h3>
            <div style={styles.bottomRow}>
                <p style={styles.price}>{formatPrice(product.price)}</p>
                <button style={styles.button}>Ajouter</button>
            </div>
        </div>
    );
};

export default ItemCard;