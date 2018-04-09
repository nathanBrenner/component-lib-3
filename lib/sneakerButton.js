"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SneakerButton = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SneakerButton = function SneakerButton(_ref) {
  var title = _ref.title,
      onClick = _ref.onClick;

  var styles = {
    backgroundColor: "#007dff",
    color: "white",
    padding: "4px 10px",
    fontSize: "14px",
    border: "1px solid red",
    borderRadius: "4px"
  };
  return _react2.default.createElement(
    "button",
    { className: "SneakerBtn", onClick: onClick, style: styles },
    title
  );
};

exports.SneakerButton = SneakerButton;