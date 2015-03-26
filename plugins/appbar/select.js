'use strict';

const React = require('react');


class Select extends React.Component {

  render() {

    var devices = this.props.options;

    var options = devices.map(function(device){
      return (
        <option key={device.comName} value={device.comName}>{device.comName}</option>
      );
    });

    console.log(this.props.value);
    return (
      <select
        value = {this.props.value}
        onChange={this.props.onChange}>
        {options}
      </select>);
  }
}

module.exports = Select;
