webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by cclt_1 on 2017/4/25.
 */
var ObServer = function () {
    /**
     * @param events {Array}
     * */
    function ObServer() {
        var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, ObServer);

        var EVENTS = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var e = _step.value;

                e = e.replace(new RegExp(/\s/, "g"), "");
                if (e != "") {
                    EVENTS[e] = [];
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        Object.defineProperty(this, "events", {
            value: EVENTS,
            writable: true
        });
    }
    /**
     * @param eventType {String}
     * @param handler {Function}
     * */


    _createClass(ObServer, [{
        key: "on",
        value: function on(eventType, handler) {
            if (this.events[eventType] != undefined) {
                this.events[eventType].push(handler);
            } else {
                new Error("no such event");
            }
        }
        /**
         * @param eventType {String}
         * @param data {Object}
         * */

    }, {
        key: "emit",
        value: function emit(eventType, data) {
            if (this.events[eventType] != undefined) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = this.events[eventType][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var handler = _step2.value;

                        handler(data);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            } else {
                new Error("no such event");
            }
        }
    }]);

    return ObServer;
}();

var Reader = function (_ObServer) {
    _inherits(Reader, _ObServer);

    /**
     * @param dom {Object}
     * @param cataloguePage {Number}
     * @param startPage {Number}
     * @param  pageCount {Number}
     * */
    function Reader(dom) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref$cataloguePage = _ref.cataloguePage,
            cataloguePage = _ref$cataloguePage === undefined ? 0 : _ref$cataloguePage,
            _ref$startPage = _ref.startPage,
            startPage = _ref$startPage === undefined ? 0 : _ref$startPage,
            _ref$pageCount = _ref.pageCount,
            pageCount = _ref$pageCount === undefined ? 0 : _ref$pageCount;

        _classCallCheck(this, Reader);

        var _this = _possibleConstructorReturn(this, (Reader.__proto__ || Object.getPrototypeOf(Reader)).call(this, ["intoAD", "intoCatalogue", "intoContent", "firstPage", "lastPage"]));

        _this.book = { index: 0, cataloguePage: cataloguePage, startPage: startPage, pageCount: pageCount };
        _this.swiper = new Swiper(dom, {
            lazyLoading: true,
            onSlideChangeStart: function onSlideChangeStart(s) {
                if (s.realIndex < _this.book.cataloguePage && _this.book.index >= _this.book.cataloguePage) {
                    _this.emit("intoAD", _this.swiper);
                }
                if (_this.book.index < s.realIndex && s.realIndex == _this.book.cataloguePage || _this.book.index > s.realIndex && s.realIndex == _this.book.startPage - 1) {
                    _this.emit("intoCatalogue", _this.swiper);
                }
                if (s.realIndex >= _this.book.startPage && _this.book.index < _this.book.startPage) {
                    _this.emit("intoContent", _this.swiper);
                }
                if (s.realIndex == 0) {
                    _this.emit("firstPage", _this.swiper);
                }
                if (s.realIndex == _this.book.pageCount - 1) {
                    _this.emit("lastPage", _this.swiper);
                }
                _this.book.index = s.realIndex;
            }
        });
        return _this;
    }

    return Reader;
}(ObServer);

window.Reader = Reader;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(1);

__webpack_require__(2);

/***/ })
],[3]);