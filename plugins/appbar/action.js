'use strict';

const React = require('react');
const Select = require('./select');

class ActionBar extends React.Component {
  constructor(){
    this.state = {
      devices: [],
      device: null
    };

    this.saveDevice = this.saveDevice.bind(this);
    this.refreshDevices = this.refreshDevices.bind(this);
  }

  loadDevices(){
    this.setState({
      devices: [{
        comName: '/dev/tty.usbmodem1410'
      },
      {
        comName: '/dev/tty.usbmodem1411'
      },
      {
        comName: '/dev/tty.usbmodem1412'
      }]
    });
  }

  componentWillMount(){
    this.loadDevices();
  }

  saveDevice(e) {
    this.setState({
      device: e.target.value
    });
    console.log(e.target.value);
  }

  refreshDevices() {
    console.log('refresh');
    this.loadDevices();
  }

  render() {
    return (
      <div>
        <Select
          value = {this.state.device}
          options = {this.state.devices}
          onChange = {this.saveDevice} />
        <input
          type = 'button'
          value = 'refresh'
          onClick = {this.refreshDevices}/>
        <button>install</button>
        <button>play</button>
      </div>);
  }
}

module.exports = ActionBar;
