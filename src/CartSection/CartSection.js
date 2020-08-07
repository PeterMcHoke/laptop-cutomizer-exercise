import React, { Component } from 'react';
import './CartSection.css';
import CartList from '../CartList/CartList'


class CartSection extends Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <CartList
          selectedFeatures={this.props.selectedFeatures}
        />
      </section>
    )
  }
}

export default CartSection;
