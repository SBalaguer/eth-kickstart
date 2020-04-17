"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/santiagoebalaguer/ironhack/continuos-learning/eth-solidity/kickstart/components/Header.js";
function Header() {
  return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: "10px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_routes.Link, { route: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement("a", { className: "item", __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Crowd Coin")), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: "right", __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_routes.Link, { route: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement("a", { className: "item", __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Campaigns")), _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement("a", { className: "item", __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "+"))));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIkxpbmsiLCJIZWFkZXIiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTLEFBQVksQUFFckI7Ozs7O0FBQWUsU0FBQSxBQUFTLFNBQVMsQUFDL0I7eUJBQ0UsQUFBQyx1Q0FBSyxPQUFPLEVBQUUsV0FBZixBQUFhLEFBQWE7Z0JBQTFCO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO2dCQUFiO2tCQUFBO0FBQUE7S0FGSixBQUNFLEFBQ0UsQUFFRixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxVQUFYLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyw4QkFBSyxPQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7Z0JBQWI7a0JBQUE7QUFBQTtLQUZKLEFBQ0UsQUFDRSxBQUVGLCtCQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO2dCQUFiO2tCQUFBO0FBQUE7S0FWUixBQUNFLEFBSUUsQUFJRSxBQUNFLEFBS1QiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW50aWFnb2ViYWxhZ3Vlci9pcm9uaGFjay9jb250aW51b3MtbGVhcm5pbmcvZXRoLXNvbGlkaXR5L2tpY2tzdGFydCJ9