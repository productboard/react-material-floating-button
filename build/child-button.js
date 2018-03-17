'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var classnames = require('classnames');

var ChildButton = function (_React$Component) {
  _inherits(ChildButton, _React$Component);

  function ChildButton() {
    _classCallCheck(this, ChildButton);

    return _possibleConstructorReturn(this, (ChildButton.__proto__ || Object.getPrototypeOf(ChildButton)).apply(this, arguments));
  }

  _createClass(ChildButton, [{
    key: 'render',
    value: function render() {
      var iconClass = classnames('mfb-component__child-icon', this.props.icon);
      var className = classnames('mfb-component__button--child', this.props.className);
      return React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: this.props.href,
            'data-mfb-label': this.props.label,
            onClick: this.props.onClick,
            className: className },
          this.props.children || React.createElement('i', { className: iconClass })
        )
      );
    }
  }]);

  return ChildButton;
}(React.Component);

module.exports = ChildButton;