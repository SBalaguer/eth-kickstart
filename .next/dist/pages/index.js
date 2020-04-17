"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _factory = require("../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _routes = require("../routes");

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/santiagoebalaguer/ironhack/continuos-learning/eth-solidity/kickstart/pages/index.js?entry";


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex(props) {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).call(this, props));

    _this.state = {
      campaigns: []
    };
    return _this;
  }

  // static async getInitialProps() {
  //   const campaigns = await factory.methods.getCampaigns().call();
  //   // console.log(campaigns);
  //   return { campaigns };
  // }


  (0, _createClass3.default)(CampaignIndex, [{
    key: "componentDidMount",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getCampaigns().call();

              case 2:
                campaigns = _context.sent;

                // console.log(campaigns);
                this.setState({ campaigns: campaigns });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "renderCampaigns",
    value: function renderCampaigns() {
      var items = this.state.campaigns.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: "/campaigns/" + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          }, _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          }, "View Campaigns")),
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Open Campaigns "), _react2.default.createElement(_routes.Link, { route: "campaigns/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { floated: "right", content: "Create Campaign", icon: "add circle", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }))), this.renderCampaigns()));
    }
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImZhY3RvcnkiLCJMaW5rIiwiTGF5b3V0IiwiQ2FtcGFpZ25JbmRleCIsInByb3BzIiwic3RhdGUiLCJjYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0Q2FtcGFpZ25zIiwiY2FsbCIsInNldFN0YXRlIiwiaXRlbXMiLCJtYXAiLCJhZGRyZXNzIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWducyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFhOzs7O0FBRXBCLEFBQVMsQUFBWTs7QUFFckIsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFFYixBO3lDQUNKOzt5QkFBQSxBQUFZLE9BQU87d0NBQUE7O29KQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO2lCQUZZLEFBRWpCLEFBQWEsQUFDQTtBQURBLEFBQ1g7V0FFSDtBQUVEOztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozt1QkFFMEIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLGUsQUFBaEIsQUFBK0I7O21CQUFqRDtBLHFDQUNOOztBQUNBO3FCQUFBLEFBQUssU0FBUyxFQUFFLFdBQWhCLEFBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHRSxBQUNoQjtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLFVBQUEsQUFBQyxTQUFZLEFBQ2xEOztrQkFBTyxBQUNHLEFBQ1I7dUNBQ0UsQUFBQyw4QkFBSyx1QkFBTixBQUEyQjt3QkFBM0I7MEJBQUEsQUFDRTtBQURGO1dBQUEsa0JBQ0UsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBSkMsQUFHSCxBQUNFLEFBR0o7aUJBUEYsQUFBTyxBQU9FLEFBRVY7QUFUUSxBQUNMO0FBRkosQUFBYyxBQVdkLE9BWGM7MkNBV1AsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLG9DQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IsU0FBUSxTQUF4QixBQUFnQyxtQkFBa0IsTUFBbEQsQUFBdUQsY0FBYSxTQUFwRTtvQkFBQTtzQkFKTixBQUVFLEFBQ0UsQUFDRSxBQUdIO0FBSEc7aUJBTlYsQUFDRSxBQUNFLEFBT0csQUFBSyxBQUliOzs7OztBQWhEeUIsQSxBQW1ENUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbnRpYWdvZWJhbGFndWVyL2lyb25oYWNrL2NvbnRpbnVvcy1sZWFybmluZy9ldGgtc29saWRpdHkva2lja3N0YXJ0In0=