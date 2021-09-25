import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history }) => (
    cartItems.length ?
    (
        <div className='cart-dropdown'>
            <div classsName='cart-items'>
                {cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))}
            </div>
            <CustomButton onClick={() => history.push('/checkout')}>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    ) :
    (
        <div className='cart-dropdown empty-cart-dropdown'>
            <div className='cart-item'>
                <span className='empty-message'>Your cart is empty</span>
            </div>
        </div>
    )
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);