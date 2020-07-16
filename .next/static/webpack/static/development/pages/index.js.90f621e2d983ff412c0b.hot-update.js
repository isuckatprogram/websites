webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/home/runner/jdaniels/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var HomePage = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HomePage, _React$Component);

  function HomePage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomePage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HomePage).call(this, props));
    _this.state = {
      'startedTypeWriter': false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HomePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.startedTypeWriter == false) {
        var things = ['Developer', '"Youtuber"', "Artist", "Repler"];
        var thing = things[Math.floor(Math.random() * things.length)];
        console.log(thing);
        var text = "PDanielY - Professional ".concat(thing);
        var dom = document.getElementById('name');
        var i = 0;
        var a = setInterval(function () {
          if (text[i] == undefined) {
            clearInterval(a);
            return;
          }

          dom.innerHTML = dom.innerHTML + text.charAt(i);
          i++;
        }, 50);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-1091522887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "JDanielS")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1091522887",
        __self: this
      }, "*.jsx-1091522887{font-family:'Arial';text-align:center;}.social.jsx-1091522887{margin:auto;}.social.jsx-1091522887 *.jsx-1091522887{display:inline-block;}.social.jsx-1091522887 img.jsx-1091522887{border:0px solid;border-radius:10px 10px;width:25px;height:25px;cursor:pointer;padding-right:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci9qZGFuaWVscy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ29CLEFBR2lDLEFBSVIsQUFHUyxBQUdKLFlBTG5CLEtBTTBCLEdBVk4sQ0FPcEIsaUJBTkEsR0FVYSxXQUNDLFlBQ0csZUFDRyxrQkFDcEIiLCJmaWxlIjoiL2hvbWUvcnVubmVyL2pkYW5pZWxzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5cbmNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICdzdGFydGVkVHlwZVdyaXRlcic6IGZhbHNlXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgaWYodGhpcy5zdGF0ZS5zdGFydGVkVHlwZVdyaXRlciA9PSBmYWxzZSl7XG4gICAgICB2YXIgdGhpbmdzID0gWydEZXZlbG9wZXInLCAnXCJZb3V0dWJlclwiJywgYEFydGlzdGAsYFJlcGxlcmBdXG4gICAgICB2YXIgdGhpbmcgPSB0aGluZ3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpbmdzLmxlbmd0aCldXG4gICAgICBjb25zb2xlLmxvZyh0aGluZylcbiAgICAgIHZhciB0ZXh0ID0gYFBEYW5pZWxZIC0gUHJvZmVzc2lvbmFsICR7dGhpbmd9YFxuICAgICAgdmFyIGRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJylcbiAgICAgIHZhciBpID0gMFxuICAgICAgdmFyIGEgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICBpZih0ZXh0W2ldID09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChhKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGRvbS5pbm5lckhUTUwgPSBkb20uaW5uZXJIVE1MICsgdGV4dC5jaGFyQXQoaSlcbiAgICAgICAgaSsrXG4gICAgICB9LDUwKVxuICAgIH1cbiAgfVxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD4gXG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5KRGFuaWVsUzwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICp7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNvY2lhbHtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNvY2lhbCAqe1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc29jaWFsIGltZ3tcbiAgICAgICAgICAgIGJvcmRlcjogMHB4IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+PGJyLz48YnIvPlxuICAgICAgICA8aDEgaWQ9XCJuYW1lXCI+PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxcIj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yZXBsLml0L0BQRGFuaWVsWVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9yZXBsLml0L3B1YmxpYy9pbWFnZXMvZmF2aWNvbi5pY29cIi8+PC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3Bsb3BfZGFuaWVsXCI+PGltZyBzcmM9XCJodHRwczovL3R3aXR0ZXIuY29tL2Zhdmljb24uaWNvXCIvPjwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ0ZpNHhqaEhTWDZWMXZhb3pGaVFVMnc/dmlld19hcz1zdWJzY3JpYmVyXCI+PGltZyBzcmM9XCJodHRwczovL3lvdXR1YmUuY29tL2Zhdmljb24uaWNvXCIvPjwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2lzdWNrYXRwcm9ncmFtXCI+PGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vZmF2aWNvbi5pY29cIi8+PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+VXNlIHRoZSBzaWRlYmFyIHRvIG5hdmlnYXRlIHRoZSBwYWdlPC9wPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl19 */\n/*@ sourceURL=/home/runner/jdaniels/pages/index.js */"), __jsx("br", {
        className: "jsx-1091522887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-1091522887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), __jsx("h1", {
        id: "name",
        className: "jsx-1091522887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-1091522887" + " " + "social",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("a", {
        href: "https://repl.it/@PDanielY",
        className: "jsx-1091522887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("img", {
        src: "https://repl.it/public/images/favicon.ico",
        className: "jsx-1091522887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), __jsx("a", {
        href: "https://twitter.com/plop_daniel",
        className: "jsx-1091522887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("img", {
        src: "https://twitter.com/favicon.ico",
        className: "jsx-1091522887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), __jsx("a", {
        href: "https://www.youtube.com/channel/UCFi4xjhHSX6V1vaozFiQU2w?view_as=subscriber",
        className: "jsx-1091522887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("img", {
        src: "https://youtube.com/favicon.ico",
        className: "jsx-1091522887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), __jsx("a", {
        href: "https://github.com/isuckatprogram",
        className: "jsx-1091522887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("img", {
        src: "https://github.com/favicon.ico",
        className: "jsx-1091522887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }))), __jsx("p", {
        className: "jsx-1091522887",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Use the sidebar to navigate the page"));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.90f621e2d983ff412c0b.hot-update.js.map