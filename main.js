/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Api": () => (/* binding */ Api)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Api = /*#__PURE__*/function () {
  function Api(options) {
    _classCallCheck(this, Api);
    this._url = options.url;
    this._header = options.headers;
    this._body = options.body;
  }

  // Получаем начальный массив карточек с сервера
  _createClass(Api, [{
    key: "getInitialCards",
    value: function () {
      var _getInitialCards = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("".concat(this._url, "/cards"), {
                  headers: this._header
                });
              case 2:
                res = _context.sent;
                return _context.abrupt("return", this._getResponse(res));
              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function getInitialCards() {
        return _getInitialCards.apply(this, arguments);
      }
      return getInitialCards;
    }() // Создаем карточку на сервере
  }, {
    key: "createCardApi",
    value: function () {
      var _createCardApi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(link, name) {
        var res;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch("".concat(this._url, "/cards"), {
                  method: "POST",
                  headers: this._header,
                  body: JSON.stringify({
                    link: link,
                    name: name
                  })
                });
              case 2:
                res = _context2.sent;
                return _context2.abrupt("return", this._getResponse(res));
              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function createCardApi(_x, _x2) {
        return _createCardApi.apply(this, arguments);
      }
      return createCardApi;
    }() // Удаляем карточку на сервере
  }, {
    key: "deleteCard",
    value: function () {
      var _deleteCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id) {
        var res;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch("".concat(this._url, "/cards/").concat(id), {
                  method: "DELETE",
                  headers: this._header
                });
              case 2:
                res = _context3.sent;
                return _context3.abrupt("return", this._getResponse(res));
              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function deleteCard(_x3) {
        return _deleteCard.apply(this, arguments);
      }
      return deleteCard;
    }()
  }, {
    key: "_getResponse",
    value: function _getResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
    }
  }, {
    key: "newAvatarLoad",
    value: function () {
      var _newAvatarLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(avatar) {
        var res;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return fetch("".concat(this._url, "/users/me/avatar"), {
                  method: "PATCH",
                  headers: this._header,
                  body: JSON.stringify({
                    avatar: avatar
                  })
                });
              case 2:
                res = _context4.sent;
                return _context4.abrupt("return", this._getResponse(res));
              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function newAvatarLoad(_x4) {
        return _newAvatarLoad.apply(this, arguments);
      }
      return newAvatarLoad;
    }() // Передаём данные о пользователе
  }, {
    key: "setProfileData",
    value: function () {
      var _setProfileData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(dataInputs) {
        var res;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return fetch("".concat(this._url, "/users/me"), {
                  method: "PATCH",
                  headers: this._header,
                  body: JSON.stringify({
                    name: dataInputs.name,
                    about: dataInputs.about
                  })
                });
              case 2:
                res = _context5.sent;
                return _context5.abrupt("return", this._getResponse(res));
              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function setProfileData(_x5) {
        return _setProfileData.apply(this, arguments);
      }
      return setProfileData;
    }() // Получаем данные о пользователе
  }, {
    key: "getProfileData",
    value: function () {
      var _getProfileData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var res;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return fetch("".concat(this._url, "/users/me"), {
                  headers: this._header
                });
              case 2:
                res = _context6.sent;
                return _context6.abrupt("return", this._getResponse(res).then(function (data) {
                  return data;
                }));
              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function getProfileData() {
        return _getProfileData.apply(this, arguments);
      }
      return getProfileData;
    }() // Устанавливаем лайк карточке
  }, {
    key: "setCardLike",
    value: function () {
      var _setCardLike = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(cardId) {
        var res;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return fetch("".concat(this._url, "/cards/").concat(cardId, "/likes"), {
                  method: "PUT",
                  headers: this._header
                });
              case 2:
                res = _context7.sent;
                return _context7.abrupt("return", this._getResponse(res));
              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
      function setCardLike(_x6) {
        return _setCardLike.apply(this, arguments);
      }
      return setCardLike;
    }() // Удаляем лайк карточки
  }, {
    key: "delCardLike",
    value: function () {
      var _delCardLike = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(cardId) {
        var res;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return fetch("".concat(this._url, "/cards/").concat(cardId, "/likes"), {
                  method: "DELETE",
                  headers: this._header
                });
              case 2:
                res = _context8.sent;
                return _context8.abrupt("return", this._getResponse(res));
              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
      function delCardLike(_x7) {
        return _delCardLike.apply(this, arguments);
      }
      return delCardLike;
    }()
  }]);
  return Api;
}();

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Card = /*#__PURE__*/function () {
  function Card(data, userId, templateSelector, _ref) {
    var handleCardClick = _ref.handleCardClick,
      handleAddLike = _ref.handleAddLike,
      handleRemoveLike = _ref.handleRemoveLike,
      handleCardDel = _ref.handleCardDel;
    _classCallCheck(this, Card);
    this._data = data;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;
    this._handleCardDel = handleCardDel;
    this._likes = data.likes;
    this._owner = data.owner;
  }

  // Метод получения шаблона
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(true);
      return cardElement;
    }

    //Открываем большую картинку
  }, {
    key: "_openBigImage",
    value: function _openBigImage() {
      this._handleCardClick(this._data);
    }

    // Удаляем карточку
  }, {
    key: "handleCardDelete",
    value: function handleCardDelete() {
      this._element.remove();
      this._element = null;
    }

    // Ставим/снимаем лайк
  }, {
    key: "_handleClickLike",
    value: function _handleClickLike() {
      if (this._like.classList.contains("card__like_state_active")) {
        this._handleRemoveLike(this);
      } else {
        this._handleAddLike(this);
      }
    }

    // Проставляем лайки в массиве
  }, {
    key: "_setCardsLike",
    value: function _setCardsLike(likes) {
      var _this = this;
      if (likes.some(function (like) {
        return like._id === _this._userId;
      })) {
        this._like.classList.add("card__like_state_active");
      } else {
        this._like.classList.remove("card__like_state_active");
      }
    }
  }, {
    key: "setLikeData",
    value: function setLikeData(likes) {
      this._likes = likes;
      this.countLikes.textContent = this._likes.length;
      this._setCardsLike(this._likes);
    }

    // Метод установки слушателей
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;
      this.cardImage.addEventListener("click", function () {
        _this2._openBigImage();
      });

      // Слушатель лайк
      this._element.querySelector(".card__like").addEventListener("click", function () {
        _this2._handleClickLike();
      });
      //Слушатель корзина
      this._trash.addEventListener("click", function () {
        _this2._handleCardDel();
      });
    }

    // Метод создания карточки (публичный)
  }, {
    key: "createCard",
    value: function createCard() {
      this._element = this._getTemplate();
      this._like = this._element.querySelector(".card__like");
      this._trash = this._element.querySelector(".card__trash");
      this.cardImage = this._element.querySelector(".card__image");
      this.countLikes = this._element.querySelector(".card__amount-oflike");
      this.cardImage.src = this._data.link;
      this.cardImage.alt = this._data.name;
      this.setLikeData(this._likes);
      this._element.querySelector(".card__location").textContent = this._data.name;
      this._setEventListeners();
      if (this._userId !== this._owner._id) {
        this._trash.remove();
      }
      return this._element;
    }
  }]);
  return Card;
}();

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormValidator": () => (/* binding */ FormValidator)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(settings, element) {
    _classCallCheck(this, FormValidator);
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._element = element;
    this._button = this._element.querySelector(this._submitButtonSelector);
    this._inputs = Array.from(this._element.querySelectorAll(this._inputSelector));
  }

  // Метод валидации инпутов
  _createClass(FormValidator, [{
    key: "_validationInput",
    value: function _validationInput(input) {
      if (!input.validity.valid) {
        this._showError(input);
      } else {
        this._hideError(input);
      }
    }
  }, {
    key: "_hasInvalidInput",
    value:
    // Если поле не валидное

    function _hasInvalidInput(inputs) {
      return inputs.some(function (input) {
        return !input.validity.valid;
      });
    }
  }, {
    key: "_showError",
    value:
    // Метод показа ошибки

    function _showError(input) {
      var error = this._element.querySelector(".".concat(input.id, "-error"));
      input.classList.add(this._inputErrorClass);
      error.textContent = input.validationMessage;
      error.classList.add(this._errorClass);
    }
  }, {
    key: "_hideError",
    value:
    // Метод скрытия ошибки

    function _hideError(input) {
      var error = this._element.querySelector(".".concat(input.id, "-error"));
      input.classList.remove(this._inputErrorClass);
      error.textContent = '';
      error.classList.remove(this._errorClass);
    }
  }, {
    key: "toggleButtonState",
    value:
    // Метод изменения состояния кнопки submit

    function toggleButtonState() {
      if (this._hasInvalidInput(this._inputs)) {
        this._button.classList.add(this._inactiveButtonClass);
        this._button.disabled = true;
        this._button.value = 'Disabled';
      } else {
        this._button.classList.remove(this._inactiveButtonClass);
        this._button.disabled = false;
        this._button.value = 'Enabled';
      }
    }
  }, {
    key: "_setEventListeners",
    value:
    // Метод установки слушателя на инпуты

    function _setEventListeners() {
      var _this = this;
      this._inputs.forEach(function (input) {
        input.addEventListener('input', function () {
          _this._validationInput(input);
          _this.toggleButtonState();
        });
      });
    }
  }, {
    key: "enableValidation",
    value:
    // Метод вызова валидации (публичный)

    function enableValidation() {
      this._element.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      this._setEventListeners();
    }
  }]);
  return FormValidator;
}();
;

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popup": () => (/* binding */ Popup)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    var _this = this;
    _classCallCheck(this, Popup);
    _defineProperty(this, "_handleEscClose", function (event) {
      if (event.key === 'Escape') {
        _this.closePopup();
      }
    });
    _defineProperty(this, "_handleMousedownClose", function (event) {
      if (event.target.classList.contains('popup_opened') || event.target.classList.contains('popup__button-close')) {
        _this.closePopup();
      }
    });
    this._popup = document.querySelector(popupSelector);
  }
  _createClass(Popup, [{
    key: "closePopup",
    value: function closePopup() {
      this._popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "openPopup",
    value: function openPopup() {
      this._popup.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      this._popup.addEventListener('mousedown', this._handleMousedownClose);
    }
  }]);
  return Popup;
}();

/***/ }),

/***/ "./src/components/PopupWithConfirmation.js":
/*!*************************************************!*\
  !*** ./src/components/PopupWithConfirmation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupWithConfirmation": () => (/* binding */ PopupWithConfirmation)
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithConfirmation = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithConfirmation, _Popup);
  var _super = _createSuper(PopupWithConfirmation);
  function PopupWithConfirmation(popupSelector, _ref) {
    var _this;
    var handleSubmitForm = _ref.handleSubmitForm;
    _classCallCheck(this, PopupWithConfirmation);
    _this = _super.call(this, popupSelector);
    _this._handleSubmitForm = handleSubmitForm;
    return _this;
  }
  _createClass(PopupWithConfirmation, [{
    key: "openPopup",
    value: function openPopup() {
      _get(_getPrototypeOf(PopupWithConfirmation.prototype), "openPopup", this).call(this);
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      _get(_getPrototypeOf(PopupWithConfirmation.prototype), "closePopup", this).call(this);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _get(_getPrototypeOf(PopupWithConfirmation.prototype), "setEventListeners", this).call(this);
      this._popup.querySelector(".popup__button-submit_section_confirmation").addEventListener("click", function () {
        _this2._handleSubmitForm();
      });
    }
  }]);
  return PopupWithConfirmation;
}(_Popup__WEBPACK_IMPORTED_MODULE_0__.Popup);

/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupWithForm": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(_ref) {
    var _this;
    var popupSelector = _ref.popupSelector,
      handleSubmitForm = _ref.handleSubmitForm;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popupSelector);
    _defineProperty(_assertThisInitialized(_this), "_handleSubmitButton", function (evt) {
      evt.preventDefault();
      _this._handleSubmitForm(_this._getInputValues());
      _this.closePopup();
    });
    _this._handleSubmitForm = handleSubmitForm;
    _this._form = _this._popup.querySelector(".popup__form");
    _this._inputsList = Array.from(_this._form.querySelectorAll(".popup__input"));
    _this._submitButton = _this._form.querySelector(".popup__button-submit");
    _this._submitButtonText = _this._submitButton.textContent;
    return _this;
  }
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;
      this._values = {};
      this._inputsList.forEach(function (input) {
        return _this2._values[input.name] = input.value;
      });
      return this._values;
    }
  }, {
    key: "setInputValues",
    value: function setInputValues(el) {
      this._inputsList.forEach(function (input) {
        return input.value = el[input.name];
      });
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      this._form.addEventListener("submit", function (evt) {
        evt.preventDefault();
        _this3._submitButton.textContent = "Сохранение...";
        _this3._handleSubmitForm(_this3._getInputValues()).then(function () {
          _this3.closePopup();
        }).finally(function () {
          _this3._submitButton.textContent = _this3._submitButtonText;
        });
      });
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "closePopup", this).call(this);
      this._form.reset();
    }
  }]);
  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.Popup);

/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupWithImage": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _components_Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(popupSelector) {
    var _thisSuper, _this;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popupSelector);
    _this._image = _this._popup.querySelector(".popup__image");
    _this._titleImage = _this._popup.querySelector(".popup__title-image");
    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(PopupWithImage.prototype)), "setEventListeners", _thisSuper).call(_thisSuper);
    return _this;
  }
  _createClass(PopupWithImage, [{
    key: "openPopup",
    value: function openPopup(data) {
      this._image.src = data.link;
      this._image.alt = data.name;
      this._titleImage.textContent = data.name;
      _get(_getPrototypeOf(PopupWithImage.prototype), "openPopup", this).call(this);
    }
  }]);
  return PopupWithImage;
}(_components_Popup_js__WEBPACK_IMPORTED_MODULE_0__.Popup);

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": () => (/* binding */ Section)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Section = /*#__PURE__*/function () {
  function Section(_ref, container) {
    var items = _ref.items,
      renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }
  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems(res) {
      var _this = this;
      res.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(cardElement) {
      this._container.prepend(cardElement);
    }
  }]);
  return Section;
}();

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInfo": () => (/* binding */ UserInfo)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(selectors) {
    _classCallCheck(this, UserInfo);
    this._title = document.querySelector(selectors.title);
    this._subtitle = document.querySelector(selectors.subtitle);
    this._avatar = document.querySelector(selectors.avatar);
  }
  _createClass(UserInfo, [{
    key: "setUserInfo",
    value: function setUserInfo(dataInputs) {
      this._title.textContent = dataInputs.name;
      this._subtitle.textContent = dataInputs.about;
      this._avatar.src = dataInputs.avatar;
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      var userData = {
        titleData: this._title.textContent,
        subtitleData: this._subtitle.textContent
      };
      return userData;
    }
  }]);
  return UserInfo;
}();

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_OPTIONS": () => (/* binding */ API_OPTIONS),
/* harmony export */   "addButton": () => (/* binding */ addButton),
/* harmony export */   "avatarButton": () => (/* binding */ avatarButton),
/* harmony export */   "editButton": () => (/* binding */ editButton),
/* harmony export */   "formAvatarLoad": () => (/* binding */ formAvatarLoad),
/* harmony export */   "formElementsAdd": () => (/* binding */ formElementsAdd),
/* harmony export */   "formProfileAdd": () => (/* binding */ formProfileAdd),
/* harmony export */   "formsArray": () => (/* binding */ formsArray),
/* harmony export */   "imageInPopup": () => (/* binding */ imageInPopup),
/* harmony export */   "inputAbout": () => (/* binding */ inputAbout),
/* harmony export */   "inputLink": () => (/* binding */ inputLink),
/* harmony export */   "inputName": () => (/* binding */ inputName),
/* harmony export */   "inputTitle": () => (/* binding */ inputTitle),
/* harmony export */   "listElement": () => (/* binding */ listElement),
/* harmony export */   "popupElements": () => (/* binding */ popupElements),
/* harmony export */   "popupImage": () => (/* binding */ popupImage),
/* harmony export */   "popupProfile": () => (/* binding */ popupProfile),
/* harmony export */   "popups": () => (/* binding */ popups),
/* harmony export */   "selectors": () => (/* binding */ selectors),
/* harmony export */   "settings": () => (/* binding */ settings),
/* harmony export */   "subtitleText": () => (/* binding */ subtitleText),
/* harmony export */   "titlePopupImage": () => (/* binding */ titlePopupImage),
/* harmony export */   "titleText": () => (/* binding */ titleText)
/* harmony export */ });
var settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button-submit_disable",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible"
};
var API_OPTIONS = {
  url: "https://mesto.nomoreparties.co/v1/cohort-57",
  headers: {
    authorization: "81f64b2f-a6ad-4fe1-8a92-55e31bb6281c",
    "Content-Type": "application/json"
  }
};
var selectors = {
  title: ".profile__title",
  subtitle: ".profile__subtitle",
  avatar: ".profile__avatar"
};

//Button
var editButton = document.querySelector(".profile__edit-button");
var addButton = document.querySelector(".profile__button");
var avatarButton = document.querySelector(".profile__avatar-button");

//Popup
var popupProfile = document.querySelector(".popup_section_profile");
var popupElements = document.querySelector(".popup_section_elements");
var popupImage = document.querySelector(".popup_section_image");
var imageInPopup = popupImage.querySelector(".popup__image");
var titlePopupImage = popupImage.querySelector(".popup__title-image");
var popups = Array.from(document.querySelectorAll(".popup"));

//Title
var titleText = document.querySelector(".profile__title");
var subtitleText = document.querySelector(".profile__subtitle");

//Form

var formsArray = Array.from(document.querySelectorAll(".popup__form"));
var formPopup = document.querySelector(".popup__form");
var formProfileAdd = document.querySelector(".popup__form_section_profile");
var formElementsAdd = document.querySelector(".popup__form_section_elements");
var formAvatarLoad = document.querySelector(".popup__form_section_avatar-load");

//Input
var inputName = formProfileAdd.querySelector(".popup__input_field_name");
var inputAbout = formProfileAdd.querySelector(".popup__input_field_about");
var inputTitle = formElementsAdd.querySelector(".popup__input_field_title");
var inputLink = formElementsAdd.querySelector(".popup__input_field_link");
var listElement = document.querySelector(".elements");
var template = document.querySelector(".template");


/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ "./src/pages/index.css");
/* harmony import */ var _components_FormValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormValidator */ "./src/components/FormValidator.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserInfo */ "./src/components/UserInfo.js");
/* harmony import */ var _components_PopupWithImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PopupWithImage */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithConfirmation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PopupWithConfirmation */ "./src/components/PopupWithConfirmation.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











// Передаем URL и Token для API
var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_9__.Api(_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.API_OPTIONS);

// Глобальная переменная для User ID
var userId = "";
var cardId = "";
var cardForTrash = "";
Promise.all([api.getInitialCards(), api.getProfileData()]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    cardData = _ref2[0],
    userData = _ref2[1];
  userId = userData._id;
  cardList.renderItems(cardData);
  newProfile.setUserInfo(userData);
}).catch(function (error) {
  console.error(error);
});

// Слой добавления карточек в разметку
var items = [];
var cardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__.Section({
  items: items,
  renderer: function renderer(data) {
    cardList.addItem(createNewCard(data));
  }
}, ".elements");

// Функция валидации
function enableValidator() {
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.formsArray.forEach(function (form) {
    var validatorFormsArray = new _components_FormValidator__WEBPACK_IMPORTED_MODULE_1__.FormValidator(_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.settings, form);
    validatorFormsArray.enableValidation();
    validatorFormsArray.toggleButtonState();
  });
}

// Попап редактирования профиля
var newProfile = new _components_UserInfo__WEBPACK_IMPORTED_MODULE_6__.UserInfo(_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.selectors);
var addUserData = function addUserData() {
  var _newProfile$getUserIn = newProfile.getUserInfo(),
    subtitleData = _newProfile$getUserIn.subtitleData,
    titleData = _newProfile$getUserIn.titleData;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.inputName.value = titleData;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.inputAbout.value = subtitleData;
};
var popupAddProfile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__.PopupWithForm({
  popupSelector: ".popup_section_profile",
  handleSubmitForm: function handleSubmitForm(dataInputs) {
    return api.setProfileData(dataInputs).then(function (res) {
      newProfile.setUserInfo(res);
    }).catch(function (err) {
      return console.log(err);
    });
  }
});
popupAddProfile.setEventListeners();

//Попап обновления аватарки
var popupAvatarLoad = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__.PopupWithForm({
  popupSelector: ".popup_section_avatar-load",
  handleSubmitForm: function handleSubmitForm(dataInputs) {
    return api.newAvatarLoad(dataInputs.link).then(function (data) {
      newProfile.setUserInfo(data);
    }).catch(function (err) {
      return console.log(err);
    });
  }
});
popupAvatarLoad.setEventListeners();

//Попап подтверждения

var popupConfirm = new _components_PopupWithConfirmation__WEBPACK_IMPORTED_MODULE_8__.PopupWithConfirmation(".popup_confirmation", {
  handleSubmitForm: function () {
    var _handleSubmitForm = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return api.deleteCard(cardId);
            case 3:
              popupConfirm.closePopup();
              cardForTrash.handleCardDelete();
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log("Ошибка при подтверждении удаления карточки", _context.t0);
            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));
    function handleSubmitForm() {
      return _handleSubmitForm.apply(this, arguments);
    }
    return handleSubmitForm;
  }()
});
popupConfirm.setEventListeners();

// Попап добавления карточек
var popupAddCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__.PopupWithForm({
  popupSelector: ".popup_section_elements",
  handleSubmitForm: function handleSubmitForm(dataInputs) {
    return api.createCardApi(dataInputs.link, dataInputs.name).then(function (res) {
      cardList.addItem(createNewCard(res));
    }).catch(function (err) {
      return console.log(err);
    });
  }
});
popupAddCard.setEventListeners();

// Попап с картинкой
var popupWithImage = new _components_PopupWithImage__WEBPACK_IMPORTED_MODULE_7__.PopupWithImage(".popup_section_image");
popupWithImage.setEventListeners();

// Кнопка вызова попапа добавления карточки
_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.addButton.addEventListener("click", function () {
  enableValidator();
  popupAddCard.openPopup();
});

// Кнопка открытия попапа загрузки аватара
_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.avatarButton.addEventListener("click", function () {
  enableValidator();
  popupAvatarLoad.openPopup();
});

// Кнопка редактирования профиля
_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.editButton.addEventListener("click", function () {
  enableValidator();
  popupAddProfile.openPopup();
  addUserData();
});
function createNewCard(data) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_3__.Card(data, userId, ".template", {
    handleCardClick: function handleCardClick() {
      popupWithImage.openPopup(data);
    },
    handleAddLike: function handleAddLike() {
      api.setCardLike(data._id).then(function (obj) {
        card.setLikeData(obj.likes);
      }).catch(function (err) {
        return console.log(err);
      });
    },
    handleRemoveLike: function handleRemoveLike() {
      api.delCardLike(data._id).then(function (obj) {
        card.setLikeData(obj.likes);
      }).catch(function (err) {
        return console.log(err);
      });
    },
    handleCardDel: function handleCardDel() {
      popupConfirm.openPopup(data);
      cardId = data._id;
      cardForTrash = card;
    }
  });
  var cardReady = card.createCard();
  return cardReady;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLENBQUNELEdBQUcsQ0FBQztNQUFBLEVBQUM7SUFDckMsQ0FBQztJQUVEeEssZ0JBQWdCLEVBQUUsNEJBQU07TUFDdEJrSixHQUFHLENBQ0FxQyxXQUFXLENBQUM5TCxJQUFJLENBQUNnQyxHQUFHLENBQUMsQ0FDckJqQyxJQUFJLENBQUMsVUFBQzhMLEdBQUcsRUFBSztRQUNiRixJQUFJLENBQUM3SSxXQUFXLENBQUMrSSxHQUFHLENBQUM1SyxLQUFLLENBQUM7TUFDN0IsQ0FBQyxDQUFDLENBQ0RrSixLQUFLLENBQUMsVUFBQ1ksR0FBRztRQUFBLE9BQUtYLE9BQU8sQ0FBQ1ksR0FBRyxDQUFDRCxHQUFHLENBQUM7TUFBQSxFQUFDO0lBQ3JDLENBQUM7SUFFRHZLLGFBQWEsRUFBRSx5QkFBTTtNQUNuQjRLLFlBQVksQ0FBQ00sU0FBUyxDQUFDMUwsSUFBSSxDQUFDO01BQzVCQyxNQUFNLEdBQUdELElBQUksQ0FBQ2dDLEdBQUc7TUFDakIwSCxZQUFZLEdBQUdpQyxJQUFJO0lBQ3JCO0VBQ0YsQ0FBQyxDQUFDO0VBQ0YsSUFBTUksU0FBUyxHQUFHSixJQUFJLENBQUNLLFVBQVUsRUFBRTtFQUVuQyxPQUFPRCxTQUFTO0FBQ2xCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhDb25maXJtYXRpb24uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcGkge1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHRoaXMuX3VybCA9IG9wdGlvbnMudXJsO1xyXG4gICAgdGhpcy5faGVhZGVyID0gb3B0aW9ucy5oZWFkZXJzO1xyXG4gICAgdGhpcy5fYm9keSA9IG9wdGlvbnMuYm9keTtcclxuICB9XHJcblxyXG4gIC8vINCf0L7Qu9GD0YfQsNC10Lwg0L3QsNGH0LDQu9GM0L3Ri9C5INC80LDRgdGB0LjQsiDQutCw0YDRgtC+0YfQtdC6INGBINGB0LXRgNCy0LXRgNCwXHJcbiAgYXN5bmMgZ2V0SW5pdGlhbENhcmRzKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5fdXJsfS9jYXJkc2AsIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0UmVzcG9uc2UocmVzKTtcclxuICB9XHJcblxyXG4gIC8vINCh0L7Qt9C00LDQtdC8INC60LDRgNGC0L7Rh9C60YMg0L3QsCDRgdC10YDQstC10YDQtVxyXG4gIGFzeW5jIGNyZWF0ZUNhcmRBcGkobGluaywgbmFtZSkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5fdXJsfS9jYXJkc2AsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGxpbmssIG5hbWUgfSksXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzLl9nZXRSZXNwb25zZShyZXMpO1xyXG4gIH1cclxuXHJcbiAgLy8g0KPQtNCw0LvRj9C10Lwg0LrQsNGA0YLQvtGH0LrRgyDQvdCwINGB0LXRgNCy0LXRgNC1XHJcbiAgYXN5bmMgZGVsZXRlQ2FyZChpZCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5fdXJsfS9jYXJkcy8ke2lkfWAsIHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXIsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzLl9nZXRSZXNwb25zZShyZXMpO1xyXG4gIH1cclxuXHJcbiAgX2dldFJlc3BvbnNlKHJlcykge1xyXG4gICAgaWYgKHJlcy5vaykge1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChg0J7RiNC40LHQutCwOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBuZXdBdmF0YXJMb2FkKGF2YXRhcikge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5fdXJsfS91c2Vycy9tZS9hdmF0YXJgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYXZhdGFyIH0pLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0UmVzcG9uc2UocmVzKTtcclxuICB9XHJcblxyXG4gIC8vINCf0LXRgNC10LTQsNGR0Lwg0LTQsNC90L3Ri9C1INC+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtVxyXG4gIGFzeW5jIHNldFByb2ZpbGVEYXRhKGRhdGFJbnB1dHMpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3RoaXMuX3VybH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBuYW1lOiBkYXRhSW5wdXRzLm5hbWUsXHJcbiAgICAgICAgYWJvdXQ6IGRhdGFJbnB1dHMuYWJvdXQsXHJcbiAgICAgIH0pLFxyXG4gICAgfSk7XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9nZXRSZXNwb25zZShyZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0J/QvtC70YPRh9Cw0LXQvCDQtNCw0L3QvdGL0LUg0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C1XHJcbiAgYXN5bmMgZ2V0UHJvZmlsZURhdGEoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHt0aGlzLl91cmx9L3VzZXJzL21lYCwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXIsXHJcbiAgICB9KTtcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2dldFJlc3BvbnNlKHJlcykudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8g0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0LvQsNC50Log0LrQsNGA0YLQvtGH0LrQtVxyXG4gIGFzeW5jIHNldENhcmRMaWtlKGNhcmRJZCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5fdXJsfS9jYXJkcy8ke2NhcmRJZH0vbGlrZXNgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyLFxyXG4gICAgfSk7XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9nZXRSZXNwb25zZShyZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0KPQtNCw0LvRj9C10Lwg0LvQsNC50Log0LrQsNGA0YLQvtGH0LrQuFxyXG4gIGFzeW5jIGRlbENhcmRMaWtlKGNhcmRJZCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5fdXJsfS9jYXJkcy8ke2NhcmRJZH0vbGlrZXNgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyLFxyXG4gICAgfSk7XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9nZXRSZXNwb25zZShyZXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBkYXRhLFxyXG4gICAgdXNlcklkLFxyXG4gICAgdGVtcGxhdGVTZWxlY3RvcixcclxuICAgIHsgaGFuZGxlQ2FyZENsaWNrLCBoYW5kbGVBZGRMaWtlLCBoYW5kbGVSZW1vdmVMaWtlLCBoYW5kbGVDYXJkRGVsIH1cclxuICApIHtcclxuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5fdXNlcklkID0gdXNlcklkO1xyXG4gICAgdGhpcy5fdGVtcGxhdGVTZWxlY3RvciA9IHRlbXBsYXRlU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XHJcbiAgICB0aGlzLl9oYW5kbGVBZGRMaWtlID0gaGFuZGxlQWRkTGlrZTtcclxuICAgIHRoaXMuX2hhbmRsZVJlbW92ZUxpa2UgPSBoYW5kbGVSZW1vdmVMaWtlO1xyXG4gICAgdGhpcy5faGFuZGxlQ2FyZERlbCA9IGhhbmRsZUNhcmREZWw7XHJcbiAgICB0aGlzLl9saWtlcyA9IGRhdGEubGlrZXM7XHJcbiAgICB0aGlzLl9vd25lciA9IGRhdGEub3duZXI7XHJcbiAgfVxyXG5cclxuICAvLyDQnNC10YLQvtC0INC/0L7Qu9GD0YfQtdC90LjRjyDRiNCw0LHQu9C+0L3QsFxyXG4gIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fdGVtcGxhdGVTZWxlY3RvcilcclxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpXHJcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvL9Ce0YLQutGA0YvQstCw0LXQvCDQsdC+0LvRjNGI0YPRjiDQutCw0YDRgtC40L3QutGDXHJcbiAgX29wZW5CaWdJbWFnZSgpIHtcclxuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl9kYXRhKTtcclxuICB9XHJcblxyXG4gIC8vINCj0LTQsNC70Y/QtdC8INC60LDRgNGC0L7Rh9C60YNcclxuICBoYW5kbGVDYXJkRGVsZXRlKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8g0KHRgtCw0LLQuNC8L9GB0L3QuNC80LDQtdC8INC70LDQudC6XHJcbiAgX2hhbmRsZUNsaWNrTGlrZSgpIHtcclxuICAgIGlmICh0aGlzLl9saWtlLmNsYXNzTGlzdC5jb250YWlucyhcImNhcmRfX2xpa2Vfc3RhdGVfYWN0aXZlXCIpKSB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZVJlbW92ZUxpa2UodGhpcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9oYW5kbGVBZGRMaWtlKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0J/RgNC+0YHRgtCw0LLQu9GP0LXQvCDQu9Cw0LnQutC4INCyINC80LDRgdGB0LjQstC1XHJcblxyXG4gIF9zZXRDYXJkc0xpa2UobGlrZXMpIHtcclxuICAgIGlmIChsaWtlcy5zb21lKChsaWtlKSA9PiBsaWtlLl9pZCA9PT0gdGhpcy5fdXNlcklkKSkge1xyXG4gICAgICB0aGlzLl9saWtlLmNsYXNzTGlzdC5hZGQoXCJjYXJkX19saWtlX3N0YXRlX2FjdGl2ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xpa2UuY2xhc3NMaXN0LnJlbW92ZShcImNhcmRfX2xpa2Vfc3RhdGVfYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0TGlrZURhdGEobGlrZXMpIHtcclxuICAgIHRoaXMuX2xpa2VzID0gbGlrZXM7XHJcbiAgICB0aGlzLmNvdW50TGlrZXMudGV4dENvbnRlbnQgPSB0aGlzLl9saWtlcy5sZW5ndGg7XHJcbiAgICB0aGlzLl9zZXRDYXJkc0xpa2UodGhpcy5fbGlrZXMpO1xyXG4gIH1cclxuXHJcbiAgLy8g0JzQtdGC0L7QtCDRg9GB0YLQsNC90L7QstC60Lgg0YHQu9GD0YjQsNGC0LXQu9C10LlcclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmNhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9vcGVuQmlnSW1hZ2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCh0LvRg9GI0LDRgtC10LvRjCDQu9Cw0LnQulxyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2xpa2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlQ2xpY2tMaWtlKCk7XHJcbiAgICB9KTtcclxuICAgIC8v0KHQu9GD0YjQsNGC0LXQu9GMINC60L7RgNC30LjQvdCwXHJcbiAgICB0aGlzLl90cmFzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVDYXJkRGVsKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vINCc0LXRgtC+0LQg0YHQvtC30LTQsNC90LjRjyDQutCw0YDRgtC+0YfQutC4ICjQv9GD0LHQu9C40YfQvdGL0LkpXHJcbiAgY3JlYXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xyXG4gICAgdGhpcy5fbGlrZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlXCIpO1xyXG4gICAgdGhpcy5fdHJhc2ggPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdHJhc2hcIik7XHJcbiAgICB0aGlzLmNhcmRJbWFnZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKTtcclxuICAgIHRoaXMuY291bnRMaWtlcyA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19hbW91bnQtb2ZsaWtlXCIpO1xyXG4gICAgdGhpcy5jYXJkSW1hZ2Uuc3JjID0gdGhpcy5fZGF0YS5saW5rO1xyXG4gICAgdGhpcy5jYXJkSW1hZ2UuYWx0ID0gdGhpcy5fZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5zZXRMaWtlRGF0YSh0aGlzLl9saWtlcyk7XHJcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbG9jYXRpb25cIikudGV4dENvbnRlbnQgPVxyXG4gICAgICB0aGlzLl9kYXRhLm5hbWU7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIGlmICh0aGlzLl91c2VySWQgIT09IHRoaXMuX293bmVyLl9pZCkge1xyXG4gICAgICB0aGlzLl90cmFzaC5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBlbGVtZW50KSB7XHJcbiAgICB0aGlzLl9mb3JtU2VsZWN0b3IgPSBzZXR0aW5ncy5mb3JtU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3MuaW5wdXRTZWxlY3RvcjtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcclxuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcztcclxuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBzZXR0aW5ncy5lcnJvckNsYXNzO1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLl9idXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5faW5wdXRzID0gQXJyYXkuZnJvbSh0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcikpO1xyXG4gIH1cclxuXHJcbiAgLy8g0JzQtdGC0L7QtCDQstCw0LvQuNC00LDRhtC40Lgg0LjQvdC/0YPRgtC+0LJcclxuXHJcbl92YWxpZGF0aW9uSW5wdXQoaW5wdXQpIHtcclxuICBpZiAoIWlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICB0aGlzLl9zaG93RXJyb3IoaW5wdXQpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHRoaXMuX2hpZGVFcnJvcihpbnB1dCk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8g0JXRgdC70Lgg0L/QvtC70LUg0L3QtSDQstCw0LvQuNC00L3QvtC1XHJcblxyXG5faGFzSW52YWxpZElucHV0KGlucHV0cykge1xyXG4gIHJldHVybiBpbnB1dHMuc29tZSgoaW5wdXQpID0+IHtcclxuICAgIHJldHVybiAhaW5wdXQudmFsaWRpdHkudmFsaWQ7XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyDQnNC10YLQvtC0INC/0L7QutCw0LfQsCDQvtGI0LjQsdC60LhcclxuXHJcbl9zaG93RXJyb3IoaW5wdXQpIHtcclxuICBjb25zdCBlcnJvciA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aW5wdXQuaWR9LWVycm9yYCk7XHJcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gIGVycm9yLnRleHRDb250ZW50ID0gaW5wdXQudmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgZXJyb3IuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcclxufTtcclxuXHJcbi8vINCc0LXRgtC+0LQg0YHQutGA0YvRgtC40Y8g0L7RiNC40LHQutC4XHJcblxyXG5faGlkZUVycm9yKGlucHV0KSB7XHJcbiAgY29uc3QgZXJyb3IgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0LmlkfS1lcnJvcmApO1xyXG4gIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICBlcnJvci50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGVycm9yLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XHJcbn07XHJcblxyXG4vLyDQnNC10YLQvtC0INC40LfQvNC10L3QtdC90LjRjyDRgdC+0YHRgtC+0Y/QvdC40Y8g0LrQvdC+0L/QutC4IHN1Ym1pdFxyXG5cclxudG9nZ2xlQnV0dG9uU3RhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KHRoaXMuX2lucHV0cykpIHtcclxuICAgICAgXHJcbiAgICB0aGlzLl9idXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgIHRoaXMuX2J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB0aGlzLl9idXR0b24udmFsdWUgPSAnRGlzYWJsZWQnO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHRoaXMuX2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgdGhpcy5fYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLl9idXR0b24udmFsdWUgPSAnRW5hYmxlZCc7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8g0JzQtdGC0L7QtCDRg9GB0YLQsNC90L7QstC60Lgg0YHQu9GD0YjQsNGC0LXQu9GPINC90LAg0LjQvdC/0YPRgtGLXHJcblxyXG5fc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3ZhbGlkYXRpb25JbnB1dChpbnB1dCk7XHJcbiAgICAgIHRoaXMudG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyDQnNC10YLQvtC0INCy0YvQt9C+0LLQsCDQstCw0LvQuNC00LDRhtC40LggKNC/0YPQsdC70LjRh9C90YvQuSlcclxuXHJcbmVuYWJsZVZhbGlkYXRpb24oKXtcclxuICAgICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG59O1xyXG5cclxufTtcclxuXHJcbiIsImV4cG9ydCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VQb3B1cCgpIHtcclxuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwX29wZW5lZCcpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKVxyXG4gIH1cclxuXHJcbiAgb3BlblBvcHVwKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXBfb3BlbmVkJyk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpXHJcbiAgfVxyXG5cclxuICBfaGFuZGxlRXNjQ2xvc2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2hhbmRsZU1vdXNlZG93bkNsb3NlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXBfb3BlbmVkJylcclxuICAgICAgfHxcclxuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXBfX2J1dHRvbi1jbG9zZScpKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VQb3B1cCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX2hhbmRsZU1vdXNlZG93bkNsb3NlKVxyXG4gIH1cclxufSIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4vUG9wdXBcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhDb25maXJtYXRpb24gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvciwgeyBoYW5kbGVTdWJtaXRGb3JtIH0pIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5faGFuZGxlU3VibWl0Rm9ybSA9IGhhbmRsZVN1Ym1pdEZvcm07XHJcbiAgfVxyXG5cclxuICBvcGVuUG9wdXAoKSB7XHJcbiAgICBzdXBlci5vcGVuUG9wdXAoKTtcclxuICB9XHJcbiAgY2xvc2VQb3B1cCgpIHtcclxuICAgIHN1cGVyLmNsb3NlUG9wdXAoKTtcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuX3BvcHVwXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19idXR0b24tc3VibWl0X3NlY3Rpb25fY29uZmlybWF0aW9uXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZVN1Ym1pdEZvcm0oKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciwgaGFuZGxlU3VibWl0Rm9ybSB9KSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2hhbmRsZVN1Ym1pdEZvcm0gPSBoYW5kbGVTdWJtaXRGb3JtO1xyXG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XHJcbiAgICB0aGlzLl9pbnB1dHNMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX2lucHV0XCIpKTtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbiA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fYnV0dG9uLXN1Ym1pdFwiKTtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblRleHQgPSB0aGlzLl9zdWJtaXRCdXR0b24udGV4dENvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICB0aGlzLl92YWx1ZXMgPSB7fTtcclxuICAgIHRoaXMuX2lucHV0c0xpc3QuZm9yRWFjaChcclxuICAgICAgKGlucHV0KSA9PiAodGhpcy5fdmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWUpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl92YWx1ZXM7XHJcbiAgfVxyXG4gIHNldElucHV0VmFsdWVzKGVsKSB7XHJcbiAgICB0aGlzLl9pbnB1dHNMaXN0LmZvckVhY2goKGlucHV0KSA9PiAoaW5wdXQudmFsdWUgPSBlbFtpbnB1dC5uYW1lXSkpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZVN1Ym1pdEJ1dHRvbiA9IChldnQpID0+IHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5faGFuZGxlU3VibWl0Rm9ybSh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcclxuICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xyXG4gIH07XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcItCh0L7RhdGA0LDQvdC10L3QuNC1Li4uXCI7XHJcbiAgICAgIHRoaXMuX2hhbmRsZVN1Ym1pdEZvcm0odGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IHRoaXMuX3N1Ym1pdEJ1dHRvblRleHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlUG9wdXAoKSB7XHJcbiAgICBzdXBlci5jbG9zZVBvcHVwKCk7XHJcbiAgICB0aGlzLl9mb3JtLnJlc2V0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2ltYWdlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2VcIik7XHJcbiAgICB0aGlzLl90aXRsZUltYWdlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fdGl0bGUtaW1hZ2VcIik7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgb3BlblBvcHVwKGRhdGEpIHtcclxuICAgIHRoaXMuX2ltYWdlLnNyYyA9IGRhdGEubGluaztcclxuICAgIHRoaXMuX2ltYWdlLmFsdCA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuX3RpdGxlSW1hZ2UudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XHJcbiAgICBzdXBlci5vcGVuUG9wdXAoKTtcclxuICB9XHJcbn1cclxuIiwiXHJcbmV4cG9ydCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9LCBjb250YWluZXIpIHtcclxuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpO1xyXG5cclxuICB9XHJcblxyXG5cclxuICByZW5kZXJJdGVtcyhyZXMpIHtcclxuICAgIHJlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBhZGRJdGVtKGNhcmRFbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChjYXJkRWxlbWVudCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVXNlckluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9ycykge1xyXG4gICAgdGhpcy5fdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy50aXRsZSk7XHJcbiAgICB0aGlzLl9zdWJ0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLnN1YnRpdGxlKTtcclxuICAgIHRoaXMuX2F2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLmF2YXRhcik7XHJcbiAgfVxyXG5cclxuICBzZXRVc2VySW5mbyhkYXRhSW5wdXRzKSB7XHJcbiAgICB0aGlzLl90aXRsZS50ZXh0Q29udGVudCA9IGRhdGFJbnB1dHMubmFtZTtcclxuICAgIHRoaXMuX3N1YnRpdGxlLnRleHRDb250ZW50ID0gZGF0YUlucHV0cy5hYm91dDtcclxuICAgIHRoaXMuX2F2YXRhci5zcmMgPSBkYXRhSW5wdXRzLmF2YXRhcjtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSB7XHJcbiAgICAgIHRpdGxlRGF0YTogdGhpcy5fdGl0bGUudGV4dENvbnRlbnQsXHJcbiAgICAgIHN1YnRpdGxlRGF0YTogdGhpcy5fc3VidGl0bGUudGV4dENvbnRlbnQsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHVzZXJEYXRhO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBzZXR0aW5ncyA9IHtcclxuICBmb3JtU2VsZWN0b3I6IFwiLnBvcHVwX19mb3JtXCIsXHJcbiAgaW5wdXRTZWxlY3RvcjogXCIucG9wdXBfX2lucHV0XCIsXHJcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLnBvcHVwX19idXR0b24tc3VibWl0XCIsXHJcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJwb3B1cF9fYnV0dG9uLXN1Ym1pdF9kaXNhYmxlXCIsXHJcbiAgaW5wdXRFcnJvckNsYXNzOiBcInBvcHVwX19pbnB1dF90eXBlX2Vycm9yXCIsXHJcbiAgZXJyb3JDbGFzczogXCJwb3B1cF9faW5wdXQtZXJyb3JfdmlzaWJsZVwiLFxyXG59O1xyXG5cclxuY29uc3QgQVBJX09QVElPTlMgPSB7XHJcbiAgdXJsOiBcImh0dHBzOi8vbWVzdG8ubm9tb3JlcGFydGllcy5jby92MS9jb2hvcnQtNTdcIixcclxuXHJcbiAgaGVhZGVyczoge1xyXG4gICAgYXV0aG9yaXphdGlvbjogXCI4MWY2NGIyZi1hNmFkLTRmZTEtOGE5Mi01NWUzMWJiNjI4MWNcIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBzZWxlY3RvcnMgPSB7XHJcbiAgdGl0bGU6IFwiLnByb2ZpbGVfX3RpdGxlXCIsXHJcbiAgc3VidGl0bGU6IFwiLnByb2ZpbGVfX3N1YnRpdGxlXCIsXHJcbiAgYXZhdGFyOiBcIi5wcm9maWxlX19hdmF0YXJcIixcclxufTtcclxuXHJcbi8vQnV0dG9uXHJcbmNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xyXG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2J1dHRvblwiKTtcclxuY29uc3QgYXZhdGFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hdmF0YXItYnV0dG9uXCIpO1xyXG5cclxuLy9Qb3B1cFxyXG5jb25zdCBwb3B1cFByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX3NlY3Rpb25fcHJvZmlsZVwiKTtcclxuY29uc3QgcG9wdXBFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfc2VjdGlvbl9lbGVtZW50c1wiKTtcclxuY29uc3QgcG9wdXBJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfc2VjdGlvbl9pbWFnZVwiKTtcclxuY29uc3QgaW1hZ2VJblBvcHVwID0gcG9wdXBJbWFnZS5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZVwiKTtcclxuY29uc3QgdGl0bGVQb3B1cEltYWdlID0gcG9wdXBJbWFnZS5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX190aXRsZS1pbWFnZVwiKTtcclxuY29uc3QgcG9wdXBzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwXCIpKTtcclxuXHJcbi8vVGl0bGVcclxuY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX190aXRsZVwiKTtcclxuY29uc3Qgc3VidGl0bGVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19zdWJ0aXRsZVwiKTtcclxuXHJcbi8vRm9ybVxyXG5cclxuY29uc3QgZm9ybXNBcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9fZm9ybVwiKSk7XHJcbmNvbnN0IGZvcm1Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XHJcbmNvbnN0IGZvcm1Qcm9maWxlQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybV9zZWN0aW9uX3Byb2ZpbGVcIik7XHJcbmNvbnN0IGZvcm1FbGVtZW50c0FkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1fc2VjdGlvbl9lbGVtZW50c1wiKTtcclxuY29uc3QgZm9ybUF2YXRhckxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLnBvcHVwX19mb3JtX3NlY3Rpb25fYXZhdGFyLWxvYWRcIlxyXG4pO1xyXG5cclxuLy9JbnB1dFxyXG5jb25zdCBpbnB1dE5hbWUgPSBmb3JtUHJvZmlsZUFkZC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbnB1dF9maWVsZF9uYW1lXCIpO1xyXG5jb25zdCBpbnB1dEFib3V0ID0gZm9ybVByb2ZpbGVBZGQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXRfZmllbGRfYWJvdXRcIik7XHJcbmNvbnN0IGlucHV0VGl0bGUgPSBmb3JtRWxlbWVudHNBZGQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXRfZmllbGRfdGl0bGVcIik7XHJcbmNvbnN0IGlucHV0TGluayA9IGZvcm1FbGVtZW50c0FkZC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbnB1dF9maWVsZF9saW5rXCIpO1xyXG5cclxuY29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzXCIpO1xyXG5jb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGxhdGVcIik7XHJcblxyXG5leHBvcnQge1xyXG4gIGZvcm1zQXJyYXksXHJcbiAgc2VsZWN0b3JzLFxyXG4gIEFQSV9PUFRJT05TLFxyXG4gIGZvcm1BdmF0YXJMb2FkLFxyXG4gIGF2YXRhckJ1dHRvbixcclxuICBzZXR0aW5ncyxcclxuICBlZGl0QnV0dG9uLFxyXG4gIGFkZEJ1dHRvbixcclxuICBwb3B1cFByb2ZpbGUsXHJcbiAgcG9wdXBFbGVtZW50cyxcclxuICBwb3B1cEltYWdlLFxyXG4gIGltYWdlSW5Qb3B1cCxcclxuICB0aXRsZVBvcHVwSW1hZ2UsXHJcbiAgcG9wdXBzLFxyXG4gIHRpdGxlVGV4dCxcclxuICBzdWJ0aXRsZVRleHQsXHJcbiAgZm9ybVByb2ZpbGVBZGQsXHJcbiAgZm9ybUVsZW1lbnRzQWRkLFxyXG4gIGlucHV0TmFtZSxcclxuICBpbnB1dEFib3V0LFxyXG4gIGlucHV0VGl0bGUsXHJcbiAgaW5wdXRMaW5rLFxyXG4gIGxpc3RFbGVtZW50LFxyXG59O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgeyBGb3JtVmFsaWRhdG9yIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvclwiO1xyXG5pbXBvcnQge1xyXG4gIHNlbGVjdG9ycyxcclxuICBBUElfT1BUSU9OUyxcclxuICBzZXR0aW5ncyxcclxuICBhdmF0YXJCdXR0b24sXHJcbiAgZWRpdEJ1dHRvbixcclxuICBhZGRCdXR0b24sXHJcbiAgaW5wdXROYW1lLFxyXG4gIGlucHV0QWJvdXQsXHJcbiAgZm9ybXNBcnJheSxcclxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XHJcblxyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQgeyBQb3B1cFdpdGhGb3JtIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvXCI7XHJcbmltcG9ydCB7IFBvcHVwV2l0aEltYWdlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2VcIjtcclxuaW1wb3J0IHsgUG9wdXBXaXRoQ29uZmlybWF0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoQ29uZmlybWF0aW9uXCI7XHJcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0FwaS5qc1wiO1xyXG5cclxuLy8g0J/QtdGA0LXQtNCw0LXQvCBVUkwg0LggVG9rZW4g0LTQu9GPIEFQSVxyXG5jb25zdCBhcGkgPSBuZXcgQXBpKEFQSV9PUFRJT05TKTtcclxuXHJcbi8vINCT0LvQvtCx0LDQu9GM0L3QsNGPINC/0LXRgNC10LzQtdC90L3QsNGPINC00LvRjyBVc2VyIElEXHJcbmxldCB1c2VySWQgPSBcIlwiO1xyXG5sZXQgY2FyZElkID0gXCJcIjtcclxubGV0IGNhcmRGb3JUcmFzaCA9IFwiXCI7XHJcblxyXG5Qcm9taXNlLmFsbChbYXBpLmdldEluaXRpYWxDYXJkcygpLCBhcGkuZ2V0UHJvZmlsZURhdGEoKV0pXHJcbiAgLnRoZW4oKFtjYXJkRGF0YSwgdXNlckRhdGFdKSA9PiB7XHJcbiAgICB1c2VySWQgPSB1c2VyRGF0YS5faWQ7XHJcbiAgICBjYXJkTGlzdC5yZW5kZXJJdGVtcyhjYXJkRGF0YSk7XHJcbiAgICBuZXdQcm9maWxlLnNldFVzZXJJbmZvKHVzZXJEYXRhKTtcclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIH0pO1xyXG5cclxuLy8g0KHQu9C+0Lkg0LTQvtCx0LDQstC70LXQvdC40Y8g0LrQsNGA0YLQvtGH0LXQuiDQsiDRgNCw0LfQvNC10YLQutGDXHJcbmNvbnN0IGl0ZW1zID0gW107XHJcbmNvbnN0IGNhcmRMaXN0ID0gbmV3IFNlY3Rpb24oXHJcbiAge1xyXG4gICAgaXRlbXM6IGl0ZW1zLFxyXG4gICAgcmVuZGVyZXI6IChkYXRhKSA9PiB7XHJcbiAgICAgIGNhcmRMaXN0LmFkZEl0ZW0oY3JlYXRlTmV3Q2FyZChkYXRhKSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgXCIuZWxlbWVudHNcIlxyXG4pO1xyXG5cclxuLy8g0KTRg9C90LrRhtC40Y8g0LLQsNC70LjQtNCw0YbQuNC4XHJcbmZ1bmN0aW9uIGVuYWJsZVZhbGlkYXRvcigpIHtcclxuICBmb3Jtc0FycmF5LmZvckVhY2goKGZvcm0pID0+IHtcclxuICAgIGNvbnN0IHZhbGlkYXRvckZvcm1zQXJyYXkgPSBuZXcgRm9ybVZhbGlkYXRvcihzZXR0aW5ncywgZm9ybSk7XHJcbiAgICB2YWxpZGF0b3JGb3Jtc0FycmF5LmVuYWJsZVZhbGlkYXRpb24oKTtcclxuICAgIHZhbGlkYXRvckZvcm1zQXJyYXkudG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICB9KTtcclxufVxyXG5cclxuLy8g0J/QvtC/0LDQvyDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINC/0YDQvtGE0LjQu9GPXHJcbmNvbnN0IG5ld1Byb2ZpbGUgPSBuZXcgVXNlckluZm8oc2VsZWN0b3JzKTtcclxuXHJcbmNvbnN0IGFkZFVzZXJEYXRhID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc3VidGl0bGVEYXRhLCB0aXRsZURhdGEgfSA9IG5ld1Byb2ZpbGUuZ2V0VXNlckluZm8oKTtcclxuICBpbnB1dE5hbWUudmFsdWUgPSB0aXRsZURhdGE7XHJcbiAgaW5wdXRBYm91dC52YWx1ZSA9IHN1YnRpdGxlRGF0YTtcclxufTtcclxuXHJcbmNvbnN0IHBvcHVwQWRkUHJvZmlsZSA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcclxuICBwb3B1cFNlbGVjdG9yOiBcIi5wb3B1cF9zZWN0aW9uX3Byb2ZpbGVcIixcclxuICBoYW5kbGVTdWJtaXRGb3JtOiAoZGF0YUlucHV0cykgPT4ge1xyXG4gICAgcmV0dXJuIGFwaVxyXG4gICAgICAuc2V0UHJvZmlsZURhdGEoZGF0YUlucHV0cylcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIG5ld1Byb2ZpbGUuc2V0VXNlckluZm8ocmVzKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH0sXHJcbn0pO1xyXG5wb3B1cEFkZFByb2ZpbGUuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8v0J/QvtC/0LDQvyDQvtCx0L3QvtCy0LvQtdC90LjRjyDQsNCy0LDRgtCw0YDQutC4XHJcbmNvbnN0IHBvcHVwQXZhdGFyTG9hZCA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcclxuICBwb3B1cFNlbGVjdG9yOiBcIi5wb3B1cF9zZWN0aW9uX2F2YXRhci1sb2FkXCIsXHJcbiAgaGFuZGxlU3VibWl0Rm9ybTogKGRhdGFJbnB1dHMpID0+IHtcclxuICAgIHJldHVybiBhcGlcclxuICAgICAgLm5ld0F2YXRhckxvYWQoZGF0YUlucHV0cy5saW5rKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIG5ld1Byb2ZpbGUuc2V0VXNlckluZm8oZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9LFxyXG59KTtcclxucG9wdXBBdmF0YXJMb2FkLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vL9Cf0L7Qv9Cw0L8g0L/QvtC00YLQstC10YDQttC00LXQvdC40Y9cclxuXHJcbmNvbnN0IHBvcHVwQ29uZmlybSA9IG5ldyBQb3B1cFdpdGhDb25maXJtYXRpb24oXCIucG9wdXBfY29uZmlybWF0aW9uXCIsIHtcclxuICBoYW5kbGVTdWJtaXRGb3JtOiBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGkuZGVsZXRlQ2FyZChjYXJkSWQpO1xyXG4gICAgICBwb3B1cENvbmZpcm0uY2xvc2VQb3B1cCgpO1xyXG4gICAgICBjYXJkRm9yVHJhc2guaGFuZGxlQ2FyZERlbGV0ZSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwi0J7RiNC40LHQutCwINC/0YDQuCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjQuCDRg9C00LDQu9C10L3QuNGPINC60LDRgNGC0L7Rh9C60LhcIiwgZXJyKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxucG9wdXBDb25maXJtLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vLyDQn9C+0L/QsNC/INC00L7QsdCw0LLQu9C10L3QuNGPINC60LDRgNGC0L7Rh9C10LpcclxuY29uc3QgcG9wdXBBZGRDYXJkID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xyXG4gIHBvcHVwU2VsZWN0b3I6IFwiLnBvcHVwX3NlY3Rpb25fZWxlbWVudHNcIixcclxuICBoYW5kbGVTdWJtaXRGb3JtOiAoZGF0YUlucHV0cykgPT4ge1xyXG4gICAgcmV0dXJuIGFwaVxyXG4gICAgICAuY3JlYXRlQ2FyZEFwaShkYXRhSW5wdXRzLmxpbmssIGRhdGFJbnB1dHMubmFtZSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNhcmRMaXN0LmFkZEl0ZW0oY3JlYXRlTmV3Q2FyZChyZXMpKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH0sXHJcbn0pO1xyXG5wb3B1cEFkZENhcmQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8vINCf0L7Qv9Cw0L8g0YEg0LrQsNGA0YLQuNC90LrQvtC5XHJcbmNvbnN0IHBvcHVwV2l0aEltYWdlID0gbmV3IFBvcHVwV2l0aEltYWdlKFwiLnBvcHVwX3NlY3Rpb25faW1hZ2VcIik7XHJcbnBvcHVwV2l0aEltYWdlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vLyDQmtC90L7Qv9C60LAg0LLRi9C30L7QstCwINC/0L7Qv9Cw0L/QsCDQtNC+0LHQsNCy0LvQtdC90LjRjyDQutCw0YDRgtC+0YfQutC4XHJcbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGVuYWJsZVZhbGlkYXRvcigpO1xyXG4gIHBvcHVwQWRkQ2FyZC5vcGVuUG9wdXAoKTtcclxufSk7XHJcblxyXG4vLyDQmtC90L7Qv9C60LAg0L7RgtC60YDRi9GC0LjRjyDQv9C+0L/QsNC/0LAg0LfQsNCz0YDRg9C30LrQuCDQsNCy0LDRgtCw0YDQsFxyXG5hdmF0YXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBlbmFibGVWYWxpZGF0b3IoKTtcclxuICBwb3B1cEF2YXRhckxvYWQub3BlblBvcHVwKCk7XHJcbn0pO1xyXG5cclxuLy8g0JrQvdC+0L/QutCwINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0L/RgNC+0YTQuNC70Y9cclxuZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGVuYWJsZVZhbGlkYXRvcigpO1xyXG4gIHBvcHVwQWRkUHJvZmlsZS5vcGVuUG9wdXAoKTtcclxuICBhZGRVc2VyRGF0YSgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld0NhcmQoZGF0YSkge1xyXG4gIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChkYXRhLCB1c2VySWQsIFwiLnRlbXBsYXRlXCIsIHtcclxuICAgIGhhbmRsZUNhcmRDbGljazogKCkgPT4ge1xyXG4gICAgICBwb3B1cFdpdGhJbWFnZS5vcGVuUG9wdXAoZGF0YSk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlQWRkTGlrZTogKCkgPT4ge1xyXG4gICAgICBhcGlcclxuICAgICAgICAuc2V0Q2FyZExpa2UoZGF0YS5faWQpXHJcbiAgICAgICAgLnRoZW4oKG9iaikgPT4ge1xyXG4gICAgICAgICAgY2FyZC5zZXRMaWtlRGF0YShvYmoubGlrZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVSZW1vdmVMaWtlOiAoKSA9PiB7XHJcbiAgICAgIGFwaVxyXG4gICAgICAgIC5kZWxDYXJkTGlrZShkYXRhLl9pZClcclxuICAgICAgICAudGhlbigob2JqKSA9PiB7XHJcbiAgICAgICAgICBjYXJkLnNldExpa2VEYXRhKG9iai5saWtlcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZUNhcmREZWw6ICgpID0+IHtcclxuICAgICAgcG9wdXBDb25maXJtLm9wZW5Qb3B1cChkYXRhKTtcclxuICAgICAgY2FyZElkID0gZGF0YS5faWQ7XHJcbiAgICAgIGNhcmRGb3JUcmFzaCA9IGNhcmQ7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IGNhcmRSZWFkeSA9IGNhcmQuY3JlYXRlQ2FyZCgpO1xyXG5cclxuICByZXR1cm4gY2FyZFJlYWR5O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJBcGkiLCJvcHRpb25zIiwiX3VybCIsInVybCIsIl9oZWFkZXIiLCJoZWFkZXJzIiwiX2JvZHkiLCJib2R5IiwiZmV0Y2giLCJyZXMiLCJfZ2V0UmVzcG9uc2UiLCJsaW5rIiwibmFtZSIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJzdGF0dXMiLCJhdmF0YXIiLCJkYXRhSW5wdXRzIiwiYWJvdXQiLCJ0aGVuIiwiZGF0YSIsImNhcmRJZCIsIkNhcmQiLCJ1c2VySWQiLCJ0ZW1wbGF0ZVNlbGVjdG9yIiwiaGFuZGxlQ2FyZENsaWNrIiwiaGFuZGxlQWRkTGlrZSIsImhhbmRsZVJlbW92ZUxpa2UiLCJoYW5kbGVDYXJkRGVsIiwiX2RhdGEiLCJfdXNlcklkIiwiX3RlbXBsYXRlU2VsZWN0b3IiLCJfaGFuZGxlQ2FyZENsaWNrIiwiX2hhbmRsZUFkZExpa2UiLCJfaGFuZGxlUmVtb3ZlTGlrZSIsIl9oYW5kbGVDYXJkRGVsIiwiX2xpa2VzIiwibGlrZXMiLCJfb3duZXIiLCJvd25lciIsImNhcmRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50IiwicmVtb3ZlIiwiX2xpa2UiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInNvbWUiLCJsaWtlIiwiX2lkIiwiYWRkIiwiY291bnRMaWtlcyIsInRleHRDb250ZW50IiwibGVuZ3RoIiwiX3NldENhcmRzTGlrZSIsImNhcmRJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfb3BlbkJpZ0ltYWdlIiwiX2hhbmRsZUNsaWNrTGlrZSIsIl90cmFzaCIsIl9nZXRUZW1wbGF0ZSIsInNyYyIsImFsdCIsInNldExpa2VEYXRhIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiRm9ybVZhbGlkYXRvciIsInNldHRpbmdzIiwiZWxlbWVudCIsIl9mb3JtU2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfYnV0dG9uIiwiX2lucHV0cyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dCIsInZhbGlkaXR5IiwidmFsaWQiLCJfc2hvd0Vycm9yIiwiX2hpZGVFcnJvciIsImlucHV0cyIsImVycm9yIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGFzSW52YWxpZElucHV0IiwiZGlzYWJsZWQiLCJ2YWx1ZSIsImZvckVhY2giLCJfdmFsaWRhdGlvbklucHV0IiwidG9nZ2xlQnV0dG9uU3RhdGUiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsImV2ZW50Iiwia2V5IiwiY2xvc2VQb3B1cCIsInRhcmdldCIsIl9wb3B1cCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlRXNjQ2xvc2UiLCJfaGFuZGxlTW91c2Vkb3duQ2xvc2UiLCJQb3B1cFdpdGhDb25maXJtYXRpb24iLCJoYW5kbGVTdWJtaXRGb3JtIiwiX2hhbmRsZVN1Ym1pdEZvcm0iLCJQb3B1cFdpdGhGb3JtIiwiX2dldElucHV0VmFsdWVzIiwiX2Zvcm0iLCJfaW5wdXRzTGlzdCIsIl9zdWJtaXRCdXR0b24iLCJfc3VibWl0QnV0dG9uVGV4dCIsIl92YWx1ZXMiLCJlbCIsImZpbmFsbHkiLCJyZXNldCIsIlBvcHVwV2l0aEltYWdlIiwiX2ltYWdlIiwiX3RpdGxlSW1hZ2UiLCJTZWN0aW9uIiwiY29udGFpbmVyIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9pdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJpdGVtIiwicHJlcGVuZCIsIlVzZXJJbmZvIiwic2VsZWN0b3JzIiwiX3RpdGxlIiwidGl0bGUiLCJfc3VidGl0bGUiLCJzdWJ0aXRsZSIsIl9hdmF0YXIiLCJ1c2VyRGF0YSIsInRpdGxlRGF0YSIsInN1YnRpdGxlRGF0YSIsIkFQSV9PUFRJT05TIiwiYXV0aG9yaXphdGlvbiIsImVkaXRCdXR0b24iLCJhZGRCdXR0b24iLCJhdmF0YXJCdXR0b24iLCJwb3B1cFByb2ZpbGUiLCJwb3B1cEVsZW1lbnRzIiwicG9wdXBJbWFnZSIsImltYWdlSW5Qb3B1cCIsInRpdGxlUG9wdXBJbWFnZSIsInBvcHVwcyIsInRpdGxlVGV4dCIsInN1YnRpdGxlVGV4dCIsImZvcm1zQXJyYXkiLCJmb3JtUG9wdXAiLCJmb3JtUHJvZmlsZUFkZCIsImZvcm1FbGVtZW50c0FkZCIsImZvcm1BdmF0YXJMb2FkIiwiaW5wdXROYW1lIiwiaW5wdXRBYm91dCIsImlucHV0VGl0bGUiLCJpbnB1dExpbmsiLCJsaXN0RWxlbWVudCIsInRlbXBsYXRlIiwiYXBpIiwiY2FyZEZvclRyYXNoIiwiYWxsIiwiZ2V0SW5pdGlhbENhcmRzIiwiZ2V0UHJvZmlsZURhdGEiLCJjYXJkRGF0YSIsImNhcmRMaXN0IiwicmVuZGVySXRlbXMiLCJuZXdQcm9maWxlIiwic2V0VXNlckluZm8iLCJjYXRjaCIsImNvbnNvbGUiLCJhZGRJdGVtIiwiY3JlYXRlTmV3Q2FyZCIsImVuYWJsZVZhbGlkYXRvciIsImZvcm0iLCJ2YWxpZGF0b3JGb3Jtc0FycmF5IiwiZW5hYmxlVmFsaWRhdGlvbiIsImFkZFVzZXJEYXRhIiwiZ2V0VXNlckluZm8iLCJwb3B1cEFkZFByb2ZpbGUiLCJzZXRQcm9maWxlRGF0YSIsImVyciIsImxvZyIsInNldEV2ZW50TGlzdGVuZXJzIiwicG9wdXBBdmF0YXJMb2FkIiwibmV3QXZhdGFyTG9hZCIsInBvcHVwQ29uZmlybSIsImRlbGV0ZUNhcmQiLCJoYW5kbGVDYXJkRGVsZXRlIiwicG9wdXBBZGRDYXJkIiwiY3JlYXRlQ2FyZEFwaSIsInBvcHVwV2l0aEltYWdlIiwib3BlblBvcHVwIiwiY2FyZCIsInNldENhcmRMaWtlIiwib2JqIiwiZGVsQ2FyZExpa2UiLCJjYXJkUmVhZHkiLCJjcmVhdGVDYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==