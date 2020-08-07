import React, { Component } from 'react';
import './CustomizeOption.css';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class CustomizeOptions extends Component {
  render(){
    return (
      <>
      <input
        type="radio"
        id={this.props.id}
        className="feature__option"
        name={slugify(this.props.feature)}
        checked={this.props.item.name === this.props.selectedFeature}
        onChange={e => this.props.handleUpdated(this.props.feature, this.props.item)}
      />
      <label htmlFor={this.props.id} className="feature__label">
        {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
      </label>
      </>
    )
  }
}

export default CustomizeOptions;
