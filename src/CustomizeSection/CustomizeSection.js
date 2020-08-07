import React, { Component } from 'react';
import './CustomizeSection.css';
import CustomizeList from '../CustomizeList/CustomizeList'


class CustomizeSection extends Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <CustomizeList
          features={this.props.features}
          handleUpdated={this.props.handleUpdated}
          selectedFeatures={this.props.selectedFeatures}
        />
      </form>
  )
  }
}

export default CustomizeSection;
