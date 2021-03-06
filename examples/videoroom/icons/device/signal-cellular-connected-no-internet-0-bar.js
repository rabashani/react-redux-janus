'use strict';

var React = require('react/addons');
var PureRenderMixin = React.addons.PureRenderMixin;
var SvgIcon = require('material-ui/lib/svg-icon');

var DeviceSignalCellularConnectedNoInternet0Bar = React.createClass({
  displayName: 'DeviceSignalCellularConnectedNoInternet0Bar',

  mixins: [PureRenderMixin],

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { 'fill-opacity': '.3', d: 'M22 8V2L2 22h16V8z' }),
      React.createElement('path', { d: 'M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z' })
    );
  }

});

module.exports = DeviceSignalCellularConnectedNoInternet0Bar;