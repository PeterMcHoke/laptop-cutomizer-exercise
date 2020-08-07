import React, { Component } from 'react';
import CustomizeOption from '../CustomizeOption/CustomizeOption'
import './CustomizeList.css'
import slugify from 'slugify';


class CustomizeList extends Component {
  render() {
    return Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <CustomizeOption
            key={itemHash}
            id={itemHash}
            className="feature__item"
            feature={feature}
            item={item}
            featureHash={featureHash}
            options={options}
            handleUpdated={this.props.handleUpdated}
            selectedFeature={this.props.selectedFeatures[feature].name}
          />
        );
      });
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>)
})
}
}
export default CustomizeList;
