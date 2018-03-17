'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var classnames = require('classnames');

var MainButton = function (_React$Component) {
  _inherits(MainButton, _React$Component);

  function MainButton() {
    _classCallCheck(this, MainButton);

    return _possibleConstructorReturn(this, (MainButton.__proto__ || Object.getPrototypeOf(MainButton)).apply(this, arguments));
  }

  _createClass(MainButton, [{
    key: 'render',
    value: function render() {
      var iconResting = classnames('mfb-component__main-icon--resting', this.props.iconResting);
      var iconActive = classnames('mfb-component__main-icon--active', this.props.iconActive);
      var mainClass = classnames('mfb-component__button--main', this.props.className);
      var children = this.props.children || [React.createElement('i', { className: iconResting }), React.createElement('i', { className: iconActive })];

      if (this.props.label) {
        return React.createElement(
          'a',
          { href: this.props.href, className: mainClass, onClick: this.props.onClick, 'data-mfb-label': this.props.label },
          children
        );
      } else {
        return React.createElement(
          'a',
          { href: this.props.href, className: mainClass, onClick: this.props.onClick },
          children
        );
      }
    }
  }]);

  return MainButton;
}(React.Component);

MainButton.defaultProps = {
  href: '#',
  onClick: function onClick() {},
  iconResting: '',
  iconActive: '',
  label: null
};


module.exports = MainButton;