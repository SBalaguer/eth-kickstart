"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Layout;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

var _semanticUiReact = require("semantic-ui-react");

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/santiagoebalaguer/ironhack/continuos-learning/eth-solidity/kickstart/components/Layout.js";
//this will move it to the head of the html.

function Layout(props) {
  return _react2.default.createElement(_semanticUiReact.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  })), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), props.children);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGVyIiwiQ29udGFpbmVyIiwiSGVhZCIsIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVM7O0FBRVQsQUFBTyxBOzs7Ozs7O0FBQXVCLEFBRTlCOztBQUFlLFNBQUEsQUFBUyxPQUFULEFBQWdCLE9BQU8sQUFDcEM7eUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQTtTQUNFLEFBQ00sQUFDSjtVQUZGLEFBRU87O2dCQUZQO2tCQUZKLEFBQ0UsQUFDRSxBQUtGO0FBTEU7QUFDRSx1QkFJSixBQUFDOztnQkFBRDtrQkFQRixBQU9FLEFBQ0M7QUFERDtBQUFBLFlBUkosQUFDRSxBQVFTLEFBR1oiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW50aWFnb2ViYWxhZ3Vlci9pcm9uaGFjay9jb250aW51b3MtbGVhcm5pbmcvZXRoLXNvbGlkaXR5L2tpY2tzdGFydCJ9