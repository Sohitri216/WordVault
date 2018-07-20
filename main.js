(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quiz_component_activity_activity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz/component/activity/activity.component */ "./src/app/quiz/component/activity/activity.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: '/quiz',
        pathMatch: 'full'
    }, {
        path: 'quiz',
        component: _quiz_component_activity_activity_component__WEBPACK_IMPORTED_MODULE_2__["ActivityComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quiz_quiz_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz/quiz.module */ "./src/app/quiz/quiz.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _quiz_quiz_module__WEBPACK_IMPORTED_MODULE_4__["QuizModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/quiz/component/activity/activity.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/quiz/component/activity/activity.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper container-fluid\">\n\n  <div class=\"header row\">\n    <div class=\"col-md-10 col-sm-10\">\n      <h1 class=\"main-heading\">Your Turn: Vocabulary</h1>\n    </div>\n    <div class=\"nav-button col-md-2 col-sm-2\">\n      <button class=\"help-button\" aria-label=\"help\">\n        <i class=\"fa fa-question\"></i>\n      </button>\n      <button class=\"close-button\" aria-label=\"close\">\n        <i class=\"fa fa-times\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <app-mcq (messageEvent)=\"receiveMessage($event)\" (vaultAnimData)=\"receiveAnimData($event)\" (initVault)=initVault($event)></app-mcq>\n    <app-vault (rotationComplete)=\"rotationStatus($event)\"></app-vault>\n  </div>\n  <div class=\"footer row\">\n    <div class=\"footer-elements\" #footerRounds>\n      <div aria-label=\"set1 quiz\" class=\"round-incomplete\"></div>\n      <div aria-label=\"set2 quiz\" class=\"round-incomplete\"></div>\n      <div aria-label=\"set3 quiz\" class=\"round-incomplete\"></div>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/quiz/component/activity/activity.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/quiz/component/activity/activity.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  padding: 13px 20px;\n  background-color: #ed1c24;\n  border-bottom: 5px solid #fabf0f; }\n  .header .main-heading {\n    font-size: 20px;\n    margin: 6px !important; }\n  .header button:hover {\n    background-color: #060a3f; }\n  .header .help-button, .header .close-button {\n    margin-right: 5px;\n    border-radius: 44px;\n    height: 35px;\n    width: 35px;\n    border: 2px solid #fff;\n    background-color: #2475e8;\n    font-size: 18px;\n    color: #fff;\n    cursor: pointer;\n    padding-top: 2px; }\n  .header .close-button {\n    margin-left: 5px; }\n  .header .nav-button {\n    text-align: center; }\n  .footer {\n  background-color: #ed1c24;\n  border-top: 5px solid #fabf0f; }\n  .footer .footer-elements {\n    text-align: center;\n    padding-top: 14px;\n    padding-bottom: 3px; }\n  .footer .footer-elements div {\n      display: inline-block; }\n  .footer .footer-elements .round-incomplete {\n      width: 15px;\n      height: 15px;\n      background-color: #fff;\n      border-radius: 10px;\n      margin: 5px; }\n  .footer .footer-elements .current-round {\n      width: 15px;\n      height: 15px;\n      background-color: #fabf0f;\n      border-radius: 10px;\n      margin: 5px; }\n"

/***/ }),

/***/ "./src/app/quiz/component/activity/activity.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/quiz/component/activity/activity.component.ts ***!
  \***************************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vault_vault_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vault/vault.component */ "./src/app/quiz/component/activity/vault/vault.component.ts");
/* harmony import */ var _mcq_mcq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mcq/mcq.component */ "./src/app/quiz/component/activity/mcq/mcq.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivityComponent = /** @class */ (function () {
    function ActivityComponent() {
    }
    ActivityComponent.prototype.ngOnInit = function () {
        this.footerElements = this.footerRounds.nativeElement.childNodes;
    };
    /**
     * change background color on each round completion
    */
    ActivityComponent.prototype.footerRoundCompletion = function () {
        this.footerElements[this.roundVal - 1].style = 'background-color: #fabf0f';
        for (var i = 0; i < this.footerElements.length; i++) {
            if (i !== (this.roundVal - 1)) {
                this.footerElements[i].style = 'background-color: #fff';
            }
        }
    };
    /**
     *
     * @param  $event to check for round completion and trigger mcq component
     */
    ActivityComponent.prototype.rotationStatus = function ($event) {
        if ($event) {
            this.mcq.checkForRepeat();
        }
    };
    /**
     *
     * @param  $event to check for round completion
     */
    ActivityComponent.prototype.receiveMessage = function ($event) {
        this.roundVal = $event;
        this.footerRoundCompletion();
    };
    /**
     *
     * @param  $event vault opening animation object stating start and stop of the vault images to trigger child vault component src
     */
    ActivityComponent.prototype.receiveAnimData = function ($event) {
        this.vault.srcValue = $event.start;
        this.vault.stopRange = $event.stop;
        this.vault.changeSrc();
    };
    /**
     *
     * @param  $event initialize vault image
     */
    ActivityComponent.prototype.initVault = function ($event) {
        this.vault.initVaultImage();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('footerRounds'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ActivityComponent.prototype, "footerRounds", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_vault_vault_component__WEBPACK_IMPORTED_MODULE_1__["VaultComponent"]),
        __metadata("design:type", _vault_vault_component__WEBPACK_IMPORTED_MODULE_1__["VaultComponent"])
    ], ActivityComponent.prototype, "vault", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_2__["McqComponent"]),
        __metadata("design:type", _mcq_mcq_component__WEBPACK_IMPORTED_MODULE_2__["McqComponent"])
    ], ActivityComponent.prototype, "mcq", void 0);
    ActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! ./activity.component.html */ "./src/app/quiz/component/activity/activity.component.html"),
            styles: [__webpack_require__(/*! ./activity.component.scss */ "./src/app/quiz/component/activity/activity.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./src/app/quiz/component/activity/mcq/data.ts":
/*!*****************************************************!*\
  !*** ./src/app/quiz/component/activity/mcq/data.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var QuizData = /** @class */ (function () {
    function QuizData() {
    }
    QuizData.quizData = [{
            questionText: "The little lost sheep are in _____.",
            options: ["partner", "special", "danger", "splendid"],
            answer: 2,
            set: 1,
            animationStartRange: 1,
            animationStopRange: 51
        }, {
            questionText: "Meg is my ____ in math.",
            options: ["partner", "special", "danger", "splendid"],
            answer: 0,
            set: 1,
            animationStartRange: 52,
            animationStopRange: 138
        }, {
            questionText: "The queen lives in a ___ castle.",
            options: ["partner", "special", "danger", "splendid"],
            answer: 3,
            set: 2,
            animationStartRange: 139,
            animationStopRange: 168
        }, {
            questionText: "My ___ and I will work together as a team.",
            options: ["partner", "special", "danger", "splendid"],
            answer: 0,
            set: 2,
            animationStartRange: 169,
            animationStopRange: 193
        }, {
            questionText: "The hat is ___ because Gran gave it to me.",
            options: ["partner", "special", "danger", "splendid"],
            answer: 1,
            set: 2,
            animationStartRange: 194,
            animationStopRange: 276
        }, {
            questionText: "Small fish may face ____ in the sea.",
            options: ["partner", "special", "danger", "splendid"],
            answer: 2,
            set: 3,
            animationStartRange: 277,
            animationStopRange: 322
        }, {
            questionText: "I thanked my host for a ____ meal.",
            options: ["partner", "special", "danger", "splendid"],
            answer: 3,
            set: 3,
            animationStartRange: 323,
            animationStopRange: 377
        }, {
            questionText: "He will get ____ glasses to help him see.",
            options: ["partner", "special", "danger", "splendid"],
            answer: 1,
            set: 3,
            animationStartRange: 378,
            animationStopRange: 456
        }];
    return QuizData;
}());
/* harmony default export */ __webpack_exports__["default"] = (QuizData);


/***/ }),

/***/ "./src/app/quiz/component/activity/mcq/mcq.component.html":
/*!****************************************************************!*\
  !*** ./src/app/quiz/component/activity/mcq/mcq.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-wrapper \">\r\n  <div class=\"body-header col-md-12 col-sm-12\">\r\n    <button aria-label=\"read vocabulary\"><i class=\"fa fa-volume-up\"></i></button>\r\n    <h2>Read each sentence. Choose the vocabulary word that completes each sentence.</h2>\r\n  </div>\r\n  <div class=\"mcq-container col-md-12 col-sm-12\">\r\n    <div class=\"question-text\">\r\n      <span>{{currentPageData.questionText}}</span>\r\n    </div>\r\n    <div class=\"option-container col-md-6 col-sm-6\">\r\n      <div class=\"each-option\" #optionText *ngFor=\"let page of currentPageData.options;let i = index\">\r\n        <div (click)=\"selectAnswer(page,i)\">{{page}}</div>\r\n        <button attr.aria-label=\"option{{i+1}}\" #option (click)=\"selectAnswer(page,i)\"><i class=\"fa fa-play\"></i></button>\r\n      </div>\r\n      <div class=\"submit-portion\">\r\n        <button class=\"reset-button\" (click)=\"resetQuiz()\">Reset</button>\r\n        <button class=\"ok-button width-75\" (click)=\"submit()\" [disabled]=\"disableSubmit\">OK</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/quiz/component/activity/mcq/mcq.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/quiz/component/activity/mcq/mcq.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body-wrapper {\n  height: 560px;\n  background-color: #a7aaac; }\n  .body-wrapper .body-header button {\n    border-radius: 50px;\n    width: 30px;\n    height: 30px;\n    border: 1px solid #dcdcdc; }\n  .body-wrapper .body-header button i {\n      color: #2a89e2;\n      font-size: 20px; }\n  .body-wrapper .body-header h2 {\n    display: inline-block;\n    width: 90%;\n    margin-left: 12px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    font-size: 20px; }\n  .body-wrapper .question-text {\n    padding: 20px;\n    border: 5px solid #646464;\n    margin: 10px 26px;\n    background-color: #fff; }\n  .body-wrapper .question-text span {\n      font-size: 17px; }\n  .body-wrapper .option-container {\n    float: right;\n    margin-top: 50px; }\n  .body-wrapper .option-container .each-option {\n      width: 405px;\n      padding: 10px 10px 10px 52px;\n      background-color: #fff;\n      border: 1px solid #111;\n      border-radius: 54px;\n      font-size: 16px;\n      margin: 15px auto;\n      position: relative;\n      cursor: pointer; }\n  .body-wrapper .option-container .each-option button {\n        width: 50px;\n        height: 50px;\n        position: absolute;\n        border-radius: 30px;\n        border: 1px solid #111;\n        top: -5px;\n        left: -4px;\n        background-color: #ededed;\n        cursor: pointer; }\n  .body-wrapper .option-container .each-option button i {\n          color: #2b8de7;\n          font-size: 20px; }\n  .body-wrapper .option-container .each-option .ok-button:disabled {\n        color: #111 !important;\n        cursor: default !important; }\n  .body-wrapper .option-container .submit-portion {\n      text-align: right;\n      margin-top: 65px;\n      margin-right: 65px; }\n  .body-wrapper .option-container .submit-portion button {\n        cursor: pointer; }\n  .body-wrapper .option-container .submit-portion button:hover {\n        background-color: #060a3f; }\n  .body-wrapper .option-container .submit-portion .reset-button, .body-wrapper .option-container .submit-portion .ok-button {\n        margin-right: 20px;\n        padding: 7px 13px 5px 13px;\n        border-radius: 17px;\n        border: 2px solid #fff;\n        background-color: #2475e8;\n        font-size: 18px;\n        color: #fff;\n        cursor: pointer; }\n  .width-75 {\n  width: 75px; }\n  @media (max-width: 768px) {\n  .body-wrapper\n.body-header h2 {\n    font-size: 18px !important; }\n  .option-container {\n    margin-top: 50px !important; }\n    .option-container .each-option {\n      width: 300px !important; } }\n  @media (max-width: 1024px) {\n  .option-container .each-option {\n    width: 355px !important; } }\n"

/***/ }),

/***/ "./src/app/quiz/component/activity/mcq/mcq.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/quiz/component/activity/mcq/mcq.component.ts ***!
  \**************************************************************/
/*! exports provided: McqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McqComponent", function() { return McqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/app/quiz/component/activity/mcq/data.ts");
/* harmony import */ var _service_sound_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/sound.service */ "./src/app/quiz/service/sound.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ASSETS = 'assets/audio/';
var McqComponent = /** @class */ (function () {
    function McqComponent(soundService) {
        this.soundService = soundService;
        this.currentPageNo = 1;
        this.subRoundPageNumber = 1;
        this.attempNo = 0;
        this.quizData = _data__WEBPACK_IMPORTED_MODULE_1__["default"].quizData;
        this.repeatQs = false;
        this.lastSet = false;
        this.questionInQueue = [];
        this.roundLevel = 1;
        this.nextQsBlock = false;
        this.repeatQsBlock = false;
        this.vaultRoundDone = false;
        this.disableSubmit = true;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.vaultAnimData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initVault = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    McqComponent.prototype.ngOnInit = function () {
        this.messageEvent.emit(this.roundLevel);
        this.setAttemptedState();
        this.goToNextQuestion();
        this.highestSetValue = this.quizData[this.quizData.length - 1].set;
    };
    ;
    McqComponent.prototype.resetQuiz = function () {
        // initialize the values for reset
        this.currentPageNo = 1;
        this.subRoundPageNumber = 1;
        this.attempNo = 0;
        this.repeatQs = false;
        this.lastSet = false;
        this.questionInQueue = [];
        this.roundLevel = 1;
        this.disableSubmit = true;
        this.messageEvent.emit(this.roundLevel);
        //load the first page
        this.currentPageData = this.randomizeOptions(this.quizData[this.currentPageNo - 1], this.quizData[this.currentPageNo - 1].answer);
        this.currentSet = this.quizData[this.currentPageNo - 1].set;
        this.nextSet = this.quizData[this.currentPageNo].set;
        this.nextSetIndex = this.currentSet + 1;
        console.log(this.currentPageData);
        this.setAttemptedState();
        this.clearSelectedOption();
        this.initVault.emit();
    };
    /**
     * Initializes the states as not attempted
    */
    McqComponent.prototype.setAttemptedState = function () {
        this.quizData.map(function (each, index) {
            each.attemptState = "Not attempted";
        });
    };
    /**
     * checks for last question in last set
    */
    McqComponent.prototype.checkLastSet = function () {
        if ((this.currentPageData.questionText.trim() === this.quizData[this.quizData.length - 1].questionText.trim()) && (this.currentSet === this.highestSetValue)) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * fetches the option selected by user
     * @param selectedOption selected option
     * @param idx index of the selected answer
     */
    McqComponent.prototype.selectAnswer = function (selectedOption, idx) {
        this.disableSubmit = false;
        this.currentSelectedOption = selectedOption;
        var option = this.option['_results'];
        option[idx].nativeElement.style = 'background-color:#fefe00';
        option.map(function (each, index) {
            if (index !== idx) {
                option[index].nativeElement.style = 'background-color: #ededed';
            }
        });
    };
    ;
    /**
     * repeat questions from present round, before moving to next round
    */
    McqComponent.prototype.repeatQuestion = function () {
        this.attempNo = 0;
        this.disableSubmit = true;
        this.currentPageData = this.randomizeOptions(this.questionInQueue[this.subRoundPageNumber - 1], this.questionInQueue[this.subRoundPageNumber - 1].answer);
        if (this.questionInQueue.length > 1) {
            this.currentSet = this.questionInQueue[this.subRoundPageNumber - 1].set;
            // for last element in question queue, nextset becomes nextsetindex
            if (this.subRoundPageNumber === this.questionInQueue.length) {
                this.nextSet = this.nextSetIndex;
            }
            else {
                this.nextSet = this.questionInQueue[this.subRoundPageNumber].set;
            }
        }
        else {
            this.currentSet = this.questionInQueue[this.subRoundPageNumber - 1].set;
            this.nextSet = this.nextSetIndex;
        }
    };
    /**
     * Completion of current round
    */
    McqComponent.prototype.roundComplete = function () {
        this.roundLevel++;
        this.messageEvent.emit(this.roundLevel);
    };
    /**
     * Show next question
    */
    McqComponent.prototype.goToNextQuestion = function () {
        // Check for last question
        if (this.lastSet) {
            return;
        }
        this.disableSubmit = true;
        this.attempNo = 0;
        this.currentPageData = this.randomizeOptions(this.quizData[this.currentPageNo - 1], this.quizData[this.currentPageNo - 1].answer);
        this.currentSet = this.quizData[this.currentPageNo - 1].set;
        if (this.currentSet === this.nextSetIndex) {
            this.roundComplete();
        }
        if (this.checkLastSet()) {
            this.lastSet = true;
            this.nextSet = 0;
        }
        else {
            this.nextSet = this.quizData[this.currentPageNo].set;
        }
        this.nextSetIndex = this.currentSet + 1;
    };
    ;
    /**
     * Clear selected option after each attempt
    */
    McqComponent.prototype.clearSelectedOption = function () {
        var option = this.option['_results'];
        option.map(function (each, index) {
            option[index].nativeElement.style = 'background-color:#ededed';
        });
    };
    ;
    /**
     * Clear selected text color for incorrect
    */
    McqComponent.prototype.clearSelectedText = function () {
        var optionText = this.optionText['_results'];
        optionText.map(function (each, index) {
            optionText[index].nativeElement.style = 'color:#111';
        });
    };
    ;
    /**
     * Show correct answer for incorrect attempts
     */
    McqComponent.prototype.showCorrectAnswer = function () {
        var _this = this;
        var correctAns = this.currentPageData.options[this.currentPageData.answer];
        var optionText = this.optionText['_results'];
        optionText.map(function (each, index) {
            if (each.nativeElement.innerText.toString().trim() === correctAns.toString().trim()) {
                optionText[index].nativeElement.style = 'color:#58ff00';
            }
            if (each.nativeElement.innerText.toString().trim() === _this.currentSelectedOption.toString().trim()) {
                optionText[index].nativeElement.style = 'color:#ed1c24';
            }
        });
        setTimeout(function () {
            _this.clearSelectedText();
        }, 600);
        this.checkQuestionSet();
    };
    /**
     * Check for repeat round or next question
    */
    McqComponent.prototype.checkForRepeat = function () {
        if (this.nextQsBlock) {
            this.goToNextQuestion();
        }
        else if (this.repeatQsBlock) {
            this.repeatQuestion();
        }
    };
    /**
     * check for set, round, vault animation
    */
    McqComponent.prototype.checkQuestionSet = function () {
        var _this = this;
        var prevIndex;
        // For same set question
        if (this.currentSet === this.nextSet) {
            // for repeat question set 
            if (this.repeatQs) {
                if (this.subRoundPageNumber < this.questionInQueue.length) {
                    this.subRoundPageNumber++;
                }
                else if (this.subRoundPageNumber === this.questionInQueue.length) {
                    this.subRoundPageNumber = 1;
                }
                this.repeatQsBlock = true;
                this.nextQsBlock = false;
                if (this.currentPageData.attemptState === 'correct' && !this.checkLastSet() && (this.currentSet !== this.nextSetIndex)) {
                    this.vaultAnimData.emit({
                        start: this.currentPageData.animationStartRange,
                        stop: this.currentPageData.animationStopRange
                    });
                }
                else {
                    this.currentPageData.attemptState === 'incorrect';
                    setTimeout(function () {
                        _this.checkForRepeat();
                    }, 1200);
                }
            }
            else {
                //repeat for wrong answers
                this.currentPageNo++;
                if (this.currentPageData.attemptState === 'correct' && !this.checkLastSet() && (this.currentSet !== this.nextSetIndex)) {
                    this.nextQsBlock = true;
                    this.repeatQsBlock = false;
                    this.vaultAnimData.emit({
                        start: this.currentPageData.animationStartRange,
                        stop: this.currentPageData.animationStopRange
                    });
                }
                else {
                    this.currentPageData.attemptState === 'incorrect';
                    this.nextQsBlock = true;
                    this.repeatQsBlock = false;
                    setTimeout(function () {
                        _this.checkForRepeat();
                    }, 1200);
                }
            }
        }
        else {
            // For correct all correct set
            if (this.questionInQueue.length === 0) {
                this.currentPageNo++;
                if (this.currentPageData.attemptState === 'correct' && !this.checkLastSet() && (this.currentSet !== this.nextSetIndex)) {
                    if (this.currentSet + 1 !== this.nextSetIndex) {
                        //for round complete repeatation not last question
                        this.repeatQsBlock = false;
                        this.nextQsBlock = true;
                        this.vaultRoundDone = true;
                        this.vaultAnimData.emit({
                            start: this.currentPageData.animationStartRange,
                            stop: this.currentPageData.animationStopRange
                        });
                    }
                    else {
                        this.repeatQsBlock = false;
                        this.nextQsBlock = true;
                        this.vaultRoundDone = false;
                        this.vaultAnimData.emit({
                            start: this.quizData[this.currentPageNo - 2].animationStartRange,
                            stop: this.quizData[this.currentPageNo - 2].animationStopRange
                        });
                    }
                }
                else if (this.currentPageData.attemptState === 'correct' && this.checkLastSet()) {
                    this.vaultAnimData.emit({
                        start: this.quizData[this.quizData.length - 1].animationStartRange,
                        stop: this.quizData[this.quizData.length - 1].animationStopRange
                    });
                }
                //increase footer color count
            }
            else {
                this.subRoundPageNumber = 1;
                if (this.currentPageData.attemptState === 'correct') {
                    this.quizData.map(function (each, idx) {
                        if (each.questionText.trim() === _this.currentPageData.questionText.trim()) {
                            prevIndex = idx - 1;
                        }
                    });
                    this.repeatQsBlock = true;
                    this.vaultRoundDone = false;
                    this.nextQsBlock = false;
                    this.vaultAnimData.emit({
                        start: this.quizData[prevIndex].animationStartRange,
                        stop: this.quizData[prevIndex].animationStopRange
                    });
                }
                else if (this.currentPageData.attemptState === 'incorrect') {
                    this.repeatQsBlock = true;
                    this.nextQsBlock = false;
                    setTimeout(function () {
                        _this.checkForRepeat();
                    }, 1200);
                }
                //again go to same set question one after one
            }
        }
    };
    /**
     * submit selected option as answer
    */
    McqComponent.prototype.submit = function () {
        var _this = this;
        var prevIndex;
        var matchedFLag = false;
        this.disableSubmit = true;
        if (this.currentSelectedOption === this.currentPageData.options[this.currentPageData.answer]) {
            this.soundService.playSound(ASSETS + 'Correct.mp3');
            // when secondd time correct
            if (this.currentPageData.attemptState === 'incorrect') {
                this.currentPageData.attemptState = "correct";
                this.questionInQueue.map(function (each, idx) {
                    if (each.questionText === _this.currentPageData.questionText) {
                        _this.spliceIndex = idx;
                    }
                });
                this.questionInQueue.splice(this.spliceIndex, 1);
                this.subRoundPageNumber--; //subround count decreased for mid element correct
                console.log(this.questionInQueue);
                if (this.questionInQueue.length === 0) {
                    this.repeatQs = false;
                    this.subRoundPageNumber = 1;
                }
                else {
                    this.repeatQs = true;
                }
                this.checkQuestionSet();
            }
            else {
                this.currentPageData.attemptState = "correct";
                this.checkQuestionSet();
            }
        }
        else {
            this.soundService.playSound(ASSETS + 'Incorrect.mp3');
            if (this.attempNo < 2) {
                this.attempNo++;
                if (this.attempNo === 2) {
                    if (this.currentPageData.attemptState === "Not attempted") {
                        this.currentPageData.attemptState = "incorrect";
                        this.questionInQueue.push(this.currentPageData);
                        this.repeatQs = false;
                    }
                    else {
                        this.repeatQs = true;
                    }
                    this.showCorrectAnswer();
                }
            }
            else {
                this.goToNextQuestion();
            }
        }
        this.clearSelectedOption();
    };
    ;
    /**
     *
     * @param eachObj each question object
     * @param correctOption correct option answer
     */
    McqComponent.prototype.randomizeOptions = function (eachObj, correctOption) {
        var correctIndex;
        var optionArray = eachObj.options;
        var correctAns = eachObj.options[correctOption];
        var currentIndex = optionArray.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = optionArray[currentIndex];
            optionArray[currentIndex] = optionArray[randomIndex];
            optionArray[randomIndex] = temporaryValue;
        }
        eachObj.options.map(function (each, idx) {
            if (each === correctAns) {
                correctIndex = idx;
            }
        });
        eachObj.answer = correctIndex;
        eachObj.options = optionArray;
        return eachObj;
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('option'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], McqComponent.prototype, "option", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('optionText'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], McqComponent.prototype, "optionText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], McqComponent.prototype, "messageEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], McqComponent.prototype, "vaultAnimData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], McqComponent.prototype, "initVault", void 0);
    McqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mcq',
            template: __webpack_require__(/*! ./mcq.component.html */ "./src/app/quiz/component/activity/mcq/mcq.component.html"),
            styles: [__webpack_require__(/*! ./mcq.component.scss */ "./src/app/quiz/component/activity/mcq/mcq.component.scss")],
            providers: [_service_sound_service__WEBPACK_IMPORTED_MODULE_2__["SoundService"]]
        }),
        __metadata("design:paramtypes", [_service_sound_service__WEBPACK_IMPORTED_MODULE_2__["SoundService"]])
    ], McqComponent);
    return McqComponent;
}());



/***/ }),

/***/ "./src/app/quiz/component/activity/vault/vault.component.html":
/*!********************************************************************!*\
  !*** ./src/app/quiz/component/activity/vault/vault.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vault-container col-md-6 col-sm-6\">\n      <img class=\"ipad-adjust\" [src]=\"imgSrc\" alt=\"vault image\">\n      <!-- <div> -->\n            <!-- <img src=\"assets/img/reward.jpg\" alt=\"reward\"> -->\n      <!-- </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/quiz/component/activity/vault/vault.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/quiz/component/activity/vault/vault.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vault-container {\n  margin-left: 26px;\n  position: absolute;\n  top: 199px; }\n\n@media (max-width: 768px) {\n  .ipad-adjust {\n    width: 90%;\n    margin-top: 50px; } }\n"

/***/ }),

/***/ "./src/app/quiz/component/activity/vault/vault.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/quiz/component/activity/vault/vault.component.ts ***!
  \******************************************************************/
/*! exports provided: VaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaultComponent", function() { return VaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ASSETS = "assests/sprite";
var VaultComponent = /** @class */ (function () {
    function VaultComponent() {
        this.count = 1;
        this.rotateDone = false;
        this.rotationComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Initialize function
    */
    VaultComponent.prototype.ngOnInit = function () {
        this.initVaultImage();
    };
    /**
     * Initialize vault image
    */
    VaultComponent.prototype.initVaultImage = function () {
        this.imgSrc = 'assets/sprite/lock0001.png';
    };
    /**
     * change image src for vault rotation
    */
    VaultComponent.prototype.changeSrc = function () {
        var _this = this;
        var sourceVal;
        var handle = setInterval(function () {
            sourceVal = _this.appendSrc();
            _this.imgSrc = 'assets/sprite/lock' + sourceVal + '.png';
            _this.srcValue++;
            if (_this.srcValue > _this.stopRange) {
                _this.rotateDone = true;
                _this.rotationComplete.emit(_this.rotateDone);
                clearInterval(handle);
            }
        }, 100);
    };
    /**
     * form the image src structure
    */
    VaultComponent.prototype.appendSrc = function () {
        var source;
        source = this.srcValue.toString();
        while (this.count < 4) {
            source = '0' + source;
            if (source.length === 4)
                break;
        }
        return source;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VaultComponent.prototype, "rotationComplete", void 0);
    VaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vault',
            template: __webpack_require__(/*! ./vault.component.html */ "./src/app/quiz/component/activity/vault/vault.component.html"),
            styles: [__webpack_require__(/*! ./vault.component.scss */ "./src/app/quiz/component/activity/vault/vault.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], VaultComponent);
    return VaultComponent;
}());



/***/ }),

/***/ "./src/app/quiz/quiz.module.ts":
/*!*************************************!*\
  !*** ./src/app/quiz/quiz.module.ts ***!
  \*************************************/
/*! exports provided: QuizModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizModule", function() { return QuizModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _component_activity_activity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/activity/activity.component */ "./src/app/quiz/component/activity/activity.component.ts");
/* harmony import */ var _component_activity_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/activity/mcq/mcq.component */ "./src/app/quiz/component/activity/mcq/mcq.component.ts");
/* harmony import */ var _component_activity_vault_vault_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/activity/vault/vault.component */ "./src/app/quiz/component/activity/vault/vault.component.ts");
/* harmony import */ var _service_sound_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/sound.service */ "./src/app/quiz/service/sound.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var QuizModule = /** @class */ (function () {
    function QuizModule() {
    }
    QuizModule_1 = QuizModule;
    QuizModule.forRoot = function () {
        return {
            ngModule: QuizModule_1,
            providers: []
        };
    };
    QuizModule = QuizModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_component_activity_activity_component__WEBPACK_IMPORTED_MODULE_2__["ActivityComponent"], _component_activity_mcq_mcq_component__WEBPACK_IMPORTED_MODULE_3__["McqComponent"], _component_activity_vault_vault_component__WEBPACK_IMPORTED_MODULE_4__["VaultComponent"]],
            providers: [_service_sound_service__WEBPACK_IMPORTED_MODULE_5__["SoundService"]]
        })
    ], QuizModule);
    return QuizModule;
    var QuizModule_1;
}());



/***/ }),

/***/ "./src/app/quiz/service/sound.service.ts":
/*!***********************************************!*\
  !*** ./src/app/quiz/service/sound.service.ts ***!
  \***********************************************/
/*! exports provided: SoundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundService", function() { return SoundService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SoundService = /** @class */ (function () {
    function SoundService() {
    }
    SoundService.prototype.playSound = function (src) {
        var audio = new Audio(src);
        audio.play();
    };
    SoundService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SoundService);
    return SoundService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WordVault\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map