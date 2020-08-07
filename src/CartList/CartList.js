import React, { Component } from 'react';
import './CartList.css';
import CartItem from '../CartItem/CartItem'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class CartList extends Component {

  render() {

    const total = Object.keys(this.props.selectedFeatures).reduce(
      (acc, curr) => acc + this.props.selectedFeatures[curr].cost,
      0
    );

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
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(total)}
        </div>
      </div>
      </>
    )
  }
}

  export default CartList;
