import React from 'react';
import './CartItem.css'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class CartItem extends React.Component {

  render() {
    return (
      <>
        <div className="summary__option__label">{this.props.feature} </div>
        <div className="summary__option__value">{this.props.selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(this.props.selectedOption.cost)}
        </div>
      </>
    )
  }
}

export default CartItem;
