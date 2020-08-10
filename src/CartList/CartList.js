import React, { Component } from 'react';
import './CartList.css';
import CartItem from '../CartItem/CartItem'



class CartList extends Component {
  render() {
    const summary = Object.keys(this.props.selectedFeatures).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.selectedFeatures[feature];
      return (
        <CartItem
          className="summary__option"
          key={featureHash}
          feature={feature}
          selectedOption={selectedOption}
        />
      );
    });
    return (
      <>
      {summary}
      </>
    )
  }
}

  export default CartList;
