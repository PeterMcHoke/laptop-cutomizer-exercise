import React, { Component } from 'react';
import './CartSection.css';
import CartList from '../CartList/CartList'
import CartTotal from'../CartTotal/CartTotal'


class CartSection extends Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <CartList
          selectedFeatures={this.props.selectedFeatures}
        />
        <CartTotal
          selectedFeatures={this.props.selectedFeatures}
        />

      </section>
    )
  }
}

export default CartSection;
