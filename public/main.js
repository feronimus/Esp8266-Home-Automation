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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><app-navbar></app-navbar></div>\r\n<br>\r\n<br>\r\n<br>\r\n<div class=\"container\">\r\n  <flash-messages></flash-messages> \r\n</div>\r\n<div class=\"container\">\r\n   <router-outlet></router-outlet> \r\n</div>\r\n\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-src';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_Basic_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Basic/navbar/navbar.component */ "./src/app/components/Basic/navbar/navbar.component.ts");
/* harmony import */ var _components_Basic_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Basic/login/login.component */ "./src/app/components/Basic/login/login.component.ts");
/* harmony import */ var _components_Basic_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Basic/register/register.component */ "./src/app/components/Basic/register/register.component.ts");
/* harmony import */ var _components_Basic_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Basic/home/home.component */ "./src/app/components/Basic/home/home.component.ts");
/* harmony import */ var _components_Basic_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Basic/dashboard/dashboard.component */ "./src/app/components/Basic/dashboard/dashboard.component.ts");
/* harmony import */ var _components_Basic_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Basic/profile/profile.component */ "./src/app/components/Basic/profile/profile.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_logged_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/logged.guard */ "./src/app/guards/logged.guard.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_Controlls_overview_overview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/Controlls/overview/overview.component */ "./src/app/components/Controlls/overview/overview.component.ts");
/* harmony import */ var _components_Controlls_iot_automation_iot_automation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/Controlls/iot-automation/iot-automation.component */ "./src/app/components/Controlls/iot-automation/iot-automation.component.ts");
/* harmony import */ var _components_ManageEsps_manage_manage_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/ManageEsps/manage/manage.component */ "./src/app/components/ManageEsps/manage/manage.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_ManageEsps_upload_code_upload_code_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/ManageEsps/upload-code/upload-code.component */ "./src/app/components/ManageEsps/upload-code/upload-code.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_26__);






















//import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule , MatSliderModule} from '@angular/material';





var appRoutes = [
    { path: '', component: _components_Basic_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], canActivate: [_guards_logged_guard__WEBPACK_IMPORTED_MODULE_17__["LoggedGuard"]] },
    { path: 'register', component: _components_Basic_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'login', component: _components_Basic_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'dashboard', component: _components_Basic_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'profile', component: _components_Basic_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'manage', component: _components_ManageEsps_manage_manage_component__WEBPACK_IMPORTED_MODULE_21__["ManageComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_Basic_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_Basic_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_Basic_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _components_Basic_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_Basic_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _components_Basic_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _components_Controlls_overview_overview_component__WEBPACK_IMPORTED_MODULE_19__["OverviewComponent"],
                _components_Controlls_iot_automation_iot_automation_component__WEBPACK_IMPORTED_MODULE_20__["IotAutomationComponent"],
                _components_ManageEsps_manage_manage_component__WEBPACK_IMPORTED_MODULE_21__["ManageComponent"],
                _components_ManageEsps_upload_code_upload_code_component__WEBPACK_IMPORTED_MODULE_25__["UploadCodeComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_26__["FileUploadModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(appRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__["FlashMessagesModule"].forRoot(),
                _material_module__WEBPACK_IMPORTED_MODULE_23__["DemoMaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
                //MatButtonModule,MatFormFieldModule,MatInputModule, MatRippleModule,MatSliderModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"]
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_12__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"], _guards_logged_guard__WEBPACK_IMPORTED_MODULE_17__["LoggedGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/Basic/dashboard/dashboard.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/Basic/dashboard/dashboard.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h1 { display: inline; }\r\n.p { display: inline; }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9CYXNpYy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxlQUFlLEVBQUU7QUFDdkIsS0FBSyxlQUFlLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL0Jhc2ljL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oMSB7IGRpc3BsYXk6IGlubGluZTsgfVxyXG4ucCB7IGRpc3BsYXk6IGlubGluZTsgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/Basic/dashboard/dashboard.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/Basic/dashboard/dashboard.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <h1 >Welcome </h1>\r\n  \r\n    <p>Home automation.</p>    \r\n    \r\n<!-- <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"changeView()\" >Different view</button>-->\r\n</div>\r\n<app-upload-code></app-upload-code>\r\n<app-iot-automation></app-iot-automation>"

/***/ }),

/***/ "./src/app/components/Basic/dashboard/dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/Basic/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.coinwallet = ['Εισαγωγή Πολυκατοικίας', 'Εισαγωγή Διαμερίσματος'];
        this.selectedwallet = this.coinwallet[0];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/Basic/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/Basic/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/Basic/home/home.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/Basic/home/home.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQmFzaWMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/Basic/home/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/Basic/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"jumbotron text-center\">\r\n  <h1>Welcome</h1>\r\n  \r\n  <p class=\"lead\">Home automation Alex 0.1  </p>\r\n  <div *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n      <button  type=\"button\" class=\"btn btn-outline-primary\" [routerLink]=\"['/register']\">Εγγραφη</button> \r\n      <button type=\"button\" class=\"btn btn-outline-info\" [routerLink]=\"['/login']\">Συνδεση</button> \r\n  </div>\r\n  <div *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n      <button  type=\"button\" class=\"btn btn-outline-primary\" [routerLink]=\"['/dashboard']\">Ας ξεκινήσουμε</button> \r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/Basic/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/Basic/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/Basic/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/Basic/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/Basic/login/login.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/Basic/login/login.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQmFzaWMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/Basic/login/login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/Basic/login/login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container jumbotron\">\r\n    <h2 class=\"page-header\">Login</h2>\r\n<form (submit)=\"onLoginSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label>Password</label>\r\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n  </div>\r\n<input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\r\n</form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/Basic/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/Basic/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/Basic/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/Basic/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/Basic/navbar/navbar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/Basic/navbar/navbar.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQmFzaWMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/Basic/navbar/navbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/Basic/navbar/navbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<nav  class=\"navbar navbar-expand-lg fixed-top navbar-dark bg-dark\">\r\n    <div class=\"container\">\r\n    <a class=\"navbar-brand\" href=\"#\">Make It Smart</a>\r\n    <button class=\"navbar-toggler collapsed\" type=\"button\" \r\n    data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" \r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\"\r\n    (click)=\"toggleNavbar()\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse collapse\" [ngClass]=\"{ 'show': navbarOpen }\" id=\"navbarColor01\" style=\"\">\r\n      <ul class=\"nav navbar-nav mr-auto\">\r\n          <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/']\">Αρχικη</a>\r\n          </li>\r\n          \r\n          <li  class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n          </li>\r\n          <li  class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/manage']\">Manage</a>\r\n        </li>\r\n        <li  class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\r\n          </li>\r\n      </ul>    \r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n         \r\n      \r\n  \r\n  \r\n          <li  class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">Log IN</a>\r\n          </li>\r\n          <li  class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/register']\">Sign Up</a>\r\n          </li>\r\n         \r\n          <li  class=\"nav-item\" *ngIf=\"authService.loggedIn()\" >\r\n            <a class=\"nav-link\" (click)=\"onLogoutClick()\"href=\"#\">Log Off</a>\r\n          </li>\r\n      </ul>  \r\n    </div>  \r\n    </div>\r\n  </nav>\r\n"

/***/ }),

/***/ "./src/app/components/Basic/navbar/navbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/Basic/navbar/navbar.component.ts ***!
  \*************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.navbarOpen = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // if(this.authService.loggedIn) this.authService.getProfile();
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    NavbarComponent.prototype.TurnLedOnOROFF = function () {
        console.log("start led");
        var Http = new XMLHttpRequest();
        var url2 = 'http://192.168.1.33:301/OFF1';
        var url = 'http://feronimus.myftp.org:6565';
        Http.open("GET", url2);
        Http.send();
        Http.onreadystatechange = function (e) {
            console.log(Http.responseText);
        };
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/Basic/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/Basic/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/Basic/profile/profile.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/Basic/profile/profile.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQmFzaWMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/Basic/profile/profile.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/Basic/profile/profile.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"user\" class=\"container jumbotron\">\r\n  <h2 class=\"page-header\">{{user.name}}</h2>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\r\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/components/Basic/profile/profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/Basic/profile/profile.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/Basic/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/Basic/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/Basic/register/register.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/Basic/register/register.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQmFzaWMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/Basic/register/register.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/Basic/register/register.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container jumbotron\">\r\n<h2 class=\"page-header\">Register</h2>\r\n<form (submit)=\"onRegisterSubmit()\">\r\n  <div class=\"form-group\">    \r\n    <label>Name</label>\r\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n      <label for=\"exampleInputEmail1\">Email address</label>\r\n      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" >\r\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n    </div>\r\n  <div class=\"form-group\">\r\n      <label for=\"exampleInputPassword1\">Password</label>\r\n      <input type=\"password\" class=\"form-control\"  [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\" >\r\n    </div>\r\n\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/Basic/register/register.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/Basic/register/register.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/Basic/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/Basic/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/Controlls/iot-automation/iot-automation.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/Controlls/iot-automation/iot-automation.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-slider {\r\n  width: 100%;\r\n}\r\nmat-card {      \r\n  width: 95%;\r\n  height: 95%;\r\n}\r\nmat-grid-tile{\r\n    border: 1px;\r\n}\r\nbutton {      \r\n  width: 95%;\r\n  height: 95%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Db250cm9sbHMvaW90LWF1dG9tYXRpb24vaW90LWF1dG9tYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9Db250cm9sbHMvaW90LWF1dG9tYXRpb24vaW90LWF1dG9tYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zbGlkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbm1hdC1jYXJkIHsgICAgICBcclxuICB3aWR0aDogOTUlO1xyXG4gIGhlaWdodDogOTUlO1xyXG59XHJcbm1hdC1ncmlkLXRpbGV7XHJcbiAgICBib3JkZXI6IDFweDtcclxufVxyXG5idXR0b24geyAgICAgIFxyXG4gIHdpZHRoOiA5NSU7XHJcbiAgaGVpZ2h0OiA5NSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/Controlls/iot-automation/iot-automation.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/Controlls/iot-automation/iot-automation.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- \r\n<div *ngIf=\"value\">\r\n\r\n<mat-accordion multi=\"true\">\r\n    <mat-expansion-panel  *ngFor=\"let esp of EspList\">\r\n        <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              {{esp.name}}\r\n            </mat-panel-title>            \r\n        </mat-expansion-panel-header>\r\n        <mat-card>{{esp.description}}</mat-card>\r\n\r\n        <mat-grid-list cols=\"4\" rowHeight=\"2:1\">          \r\n          <mat-grid-tile *ngIf=\"esp.D0.InUse\">\r\n            <mat-card>\r\n              <button type=\"button\" *ngIf=\"esp.D0.InUse && !esp.D0.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D0', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D0</button>\r\n              <button type=\"button\" *ngIf=\"esp.D0.InUse && esp.D0.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D0', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D0</button>\r\n            </mat-card>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile *ngIf=\"esp.D1.InUse\">\r\n            <mat-card>\r\n              <button type=\"button\" *ngIf=\"esp.D1.InUse && !esp.D1.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D1', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D1</button>\r\n              <button type=\"button\" *ngIf=\"esp.D1.InUse && esp.D1.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D1', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D1</button>\r\n            </mat-card>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile *ngIf=\"esp.D2.InUse\">\r\n            <mat-card>\r\n              <button type=\"button\" *ngIf=\"esp.D2.InUse && !esp.D2.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D2', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D2</button>\r\n              <button type=\"button\" *ngIf=\"esp.D2.InUse && esp.D2.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D2', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D2</button>\r\n            </mat-card>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile *ngIf=\"esp.D3.InUse\">\r\n            <mat-card>\r\n              <button type=\"button\" *ngIf=\"esp.D3.InUse && !esp.D3.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D3', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D3</button>\r\n              <button type=\"button\" *ngIf=\"esp.D3.InUse && esp.D3.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D3', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D3</button>\r\n            </mat-card>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile *ngIf=\"esp.D4.InUse\">\r\n            <mat-card>\r\n              <button type=\"button\" *ngIf=\"esp.D4.InUse && !esp.D4.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D4', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D4</button>\r\n              <button type=\"button\" *ngIf=\"esp.D4.InUse && esp.D4.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D4', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D4</button>\r\n            </mat-card>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile *ngIf=\"esp.D5.InUse\">\r\n            <mat-card>\r\n              <button type=\"button\" *ngIf=\"esp.D5.InUse && !esp.D5.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D5', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D5</button>\r\n              <button type=\"button\" *ngIf=\"esp.D5.InUse && esp.D5.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D5', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D5</button>\r\n            </mat-card>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile *ngIf=\"esp.D6.InUse\">\r\n            <mat-card>\r\n              <button type=\"button\" *ngIf=\"esp.D6.InUse && !esp.D6.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D6', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D6</button>\r\n              <button type=\"button\" *ngIf=\"esp.D6.InUse && esp.D6.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D6', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D6</button>\r\n            </mat-card>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile *ngIf=\"esp.D7.InUse\">\r\n            <mat-card>\r\n              <button type=\"button\" *ngIf=\"esp.D7.InUse && !esp.D7.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D7', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D7</button>\r\n              <button type=\"button\" *ngIf=\"esp.D7.InUse && esp.D7.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D7', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D7</button>\r\n            </mat-card>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile *ngIf=\"esp.D8.InUse\">\r\n            <mat-card>\r\n              <button type=\"button\" *ngIf=\"esp.D8.InUse && !esp.D8.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D8', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D8</button>\r\n              <button type=\"button\" *ngIf=\"esp.D8.InUse && esp.D8.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D8', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D8</button>\r\n            </mat-card>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile *ngIf=\"esp.D9.InUse\">\r\n            <mat-card>\r\n              <button type=\"button\" *ngIf=\"esp.D9.InUse && !esp.D9.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D9', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D9</button>\r\n              <button type=\"button\" *ngIf=\"esp.D9.InUse && esp.D9.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D9', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D9</button>\r\n            </mat-card>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile *ngIf=\"esp.D10.InUse\">\r\n            <mat-card>\r\n              <button type=\"button\" *ngIf=\"esp.D10.InUse && !esp.D10.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D10', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D10</button>\r\n              <button type=\"button\" *ngIf=\"esp.D10.InUse && esp.D10.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D10', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D10</button>\r\n            </mat-card>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile *ngIf=\"esp.A0.InUse\">\r\n            <mat-card>\r\n                <h5 class=\"aria-label\">A0 analog Pin At: {{esp.A0.value}}</h5>         \r\n                <mat-slider *ngIf=\"esp.A0.InUse\" [value]=\"esp.A0.value\" (change)=\"eventOnChange({key:'A0',value:$event, espItem: esp})\" id=\"sliderA0\" thumbLabel  [displayWith]=\"formatLabel\" tickInterval=\"auto \" min=\"1\" max=\"1000\" >></mat-slider>             \r\n             </mat-card>\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n    </mat-expansion-panel>\r\n</mat-accordion>\r\n</div>\r\n\r\n<div *ngIf=\"!value\">\r\n\r\n    <mat-grid-list cols=\"3\" >\r\n      <div *ngFor=\"let esp of EspList\">            \r\n        <mat-grid-tile>\r\n            <mat-card>\r\n                <mat-card-title>\r\n                    {{esp.name}}\r\n                </mat-card-title>\r\n                <mat-card-subtitle>\r\n                    {{esp.description}}\r\n                </mat-card-subtitle>\r\n                <mat-card-content>\r\n                    <mat-grid-list cols=\"2\" rowHeight=\"fit\"> \r\n                        <mat-card>        \r\n                        <mat-grid-tile *ngIf=\"esp.D0.InUse\">\r\n                          <mat-card>\r\n                            <button type=\"button\" *ngIf=\"esp.D0.InUse && !esp.D0.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D0', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D0</button>\r\n                            <button type=\"button\" *ngIf=\"esp.D0.InUse && esp.D0.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D0', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D0</button>\r\n                          </mat-card>\r\n                        </mat-grid-tile>\r\n                        <mat-grid-tile *ngIf=\"esp.D1.InUse\">\r\n                          <mat-card>\r\n                            <button type=\"button\" *ngIf=\"esp.D1.InUse && !esp.D1.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D1', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D1</button>\r\n                            <button type=\"button\" *ngIf=\"esp.D1.InUse && esp.D1.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D1', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D1</button>\r\n                          </mat-card>\r\n                        </mat-grid-tile>\r\n                        <mat-grid-tile *ngIf=\"esp.D2.InUse\">\r\n                          <mat-card>\r\n                            <button type=\"button\" *ngIf=\"esp.D2.InUse && !esp.D2.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D2', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D2</button>\r\n                            <button type=\"button\" *ngIf=\"esp.D2.InUse && esp.D2.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D2', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D2</button>\r\n                          </mat-card>\r\n                        </mat-grid-tile>\r\n                        <mat-grid-tile *ngIf=\"esp.D3.InUse\">\r\n                          <mat-card>\r\n                            <button type=\"button\" *ngIf=\"esp.D3.InUse && !esp.D3.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D3', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D3</button>\r\n                            <button type=\"button\" *ngIf=\"esp.D3.InUse && esp.D3.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D3', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D3</button>\r\n                          </mat-card>\r\n                        </mat-grid-tile>\r\n                        <mat-grid-tile *ngIf=\"esp.D4.InUse\">\r\n                          <mat-card>\r\n                            <button type=\"button\" *ngIf=\"esp.D4.InUse && !esp.D4.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D4', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D4</button>\r\n                            <button type=\"button\" *ngIf=\"esp.D4.InUse && esp.D4.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D4', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D4</button>\r\n                          </mat-card>\r\n                        </mat-grid-tile>\r\n                        <mat-grid-tile *ngIf=\"esp.D5.InUse\">\r\n                          <mat-card>\r\n                            <button type=\"button\" *ngIf=\"esp.D5.InUse && !esp.D5.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D5', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D5</button>\r\n                            <button type=\"button\" *ngIf=\"esp.D5.InUse && esp.D5.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D5', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D5</button>\r\n                          </mat-card>\r\n                        </mat-grid-tile>\r\n                        <mat-grid-tile *ngIf=\"esp.D6.InUse\">\r\n                          <mat-card>\r\n                            <button type=\"button\" *ngIf=\"esp.D6.InUse && !esp.D6.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D6', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D6</button>\r\n                            <button type=\"button\" *ngIf=\"esp.D6.InUse && esp.D6.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D6', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D6</button>\r\n                          </mat-card>\r\n                        </mat-grid-tile>\r\n                        <mat-grid-tile *ngIf=\"esp.D7.InUse\">\r\n                          <mat-card>\r\n                            <button type=\"button\" *ngIf=\"esp.D7.InUse && !esp.D7.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D7', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D7</button>\r\n                            <button type=\"button\" *ngIf=\"esp.D7.InUse && esp.D7.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D7', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D7</button>\r\n                          </mat-card>\r\n                        </mat-grid-tile>\r\n                        <mat-grid-tile *ngIf=\"esp.D8.InUse\">\r\n                          <mat-card>\r\n                            <button type=\"button\" *ngIf=\"esp.D8.InUse && !esp.D8.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D8', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D8</button>\r\n                            <button type=\"button\" *ngIf=\"esp.D8.InUse && esp.D8.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D8', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D8</button>\r\n                          </mat-card>\r\n                        </mat-grid-tile>\r\n                        <mat-grid-tile *ngIf=\"esp.D9.InUse\">\r\n                          <mat-card>\r\n                            <button type=\"button\" *ngIf=\"esp.D9.InUse && !esp.D9.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D9', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D9</button>\r\n                            <button type=\"button\" *ngIf=\"esp.D9.InUse && esp.D9.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D9', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D9</button>\r\n                          </mat-card>\r\n                        </mat-grid-tile>\r\n                        <mat-grid-tile *ngIf=\"esp.D10.InUse\">\r\n                          <mat-card>\r\n                            <button type=\"button\" *ngIf=\"esp.D10.InUse && !esp.D10.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D10', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D10</button>\r\n                            <button type=\"button\" *ngIf=\"esp.D10.InUse && esp.D10.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D10', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D10</button>\r\n                          </mat-card>\r\n                        </mat-grid-tile>\r\n                        <mat-grid-tile *ngIf=\"esp.A0.InUse\">\r\n                          <mat-card>\r\n                              <h5 class=\"aria-label\">A0 analog Pin At: {{esp.A0.value}}</h5>         \r\n                              <mat-slider *ngIf=\"esp.A0.InUse\" [value]=\"esp.A0.value\" (change)=\"eventOnChange({key:'A0',value:$event, espItem: esp})\" id=\"sliderA0\" thumbLabel  [displayWith]=\"formatLabel\" tickInterval=\"auto \" min=\"1\" max=\"1000\" >></mat-slider>             \r\n                           </mat-card>\r\n                        </mat-grid-tile>\r\n                      </mat-card> \r\n                      </mat-grid-list>\r\n                </mat-card-content>\r\n            </mat-card>\r\n        </mat-grid-tile>\r\n      </div> \r\n    </mat-grid-list> \r\n\r\n-->\r\n\r\n\r\n<div class=\"row itemsBlock\" >\r\n  <div class=\"col-md-4 col-sm-6 col-12-\" *ngFor=\"let esp of EspList\">\r\n    <div    class=\"card bg-light mb-3\" style=\"max-width: 20rem;\">\r\n      <div class=\"card-header\"></div>\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title\">{{esp.name}}</h4>\r\n        <p class=\"card-text\">{{esp.description}}</p>       \r\n        <ul class=\"list-group\">\r\n          <hr class=\"my-1\" >\r\n          <ul class=\"list-group list-group-flush\">\r\n            <li class=\"list-group-item bg-light\" *ngIf=\"esp.D0.InUse\">\r\n              <button type=\"button\" *ngIf=\"esp.D0.InUse && !esp.D0.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D0', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D0</button>\r\n              <button type=\"button\" *ngIf=\"esp.D0.InUse && esp.D0.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D0', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D0</button>\r\n            </li>\r\n            <li class=\"list-group-item bg-light\" *ngIf=\"esp.D1.InUse\">\r\n              <button type=\"button\" *ngIf=\"esp.D1.InUse && !esp.D1.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D1', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D1</button>\r\n              <button type=\"button\" *ngIf=\"esp.D1.InUse && esp.D1.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D1', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D1</button>\r\n            </li>\r\n            <li class=\"list-group-item bg-light\" *ngIf=\"esp.D2.InUse\"> \r\n              <button type=\"button\" *ngIf=\"esp.D2.InUse && !esp.D2.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D2', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D2</button>\r\n              <button type=\"button\" *ngIf=\"esp.D2.InUse && esp.D2.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D2', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D2</button>\r\n            </li>\r\n            <li class=\"list-group-item bg-light\" *ngIf=\"esp.D3.InUse\">\r\n              <button type=\"button\" *ngIf=\"esp.D3.InUse && !esp.D3.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D3', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D3</button>\r\n              <button type=\"button\" *ngIf=\"esp.D3.InUse && esp.D3.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D3', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D3</button>\r\n            </li>\r\n            <li class=\"list-group-item bg-light\" *ngIf=\"esp.D4.InUse\">\r\n              <button type=\"button\" *ngIf=\"esp.D4.InUse && !esp.D4.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D4', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D4</button>\r\n              <button type=\"button\" *ngIf=\"esp.D4.InUse && esp.D4.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D4', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D4</button>\r\n            </li>\r\n            <li class=\"list-group-item bg-light\" *ngIf=\"esp.D5.InUse\">\r\n              <button type=\"button\" *ngIf=\"esp.D5.InUse && !esp.D5.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D5', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D5</button>\r\n              <button type=\"button\" *ngIf=\"esp.D5.InUse && esp.D5.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D5', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D5</button>\r\n            </li>\r\n            <li class=\"list-group-item bg-light\" *ngIf=\"esp.D6.InUse\">\r\n              <button type=\"button\" *ngIf=\"esp.D6.InUse && !esp.D6.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D6', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D6</button>\r\n              <button type=\"button\" *ngIf=\"esp.D6.InUse && esp.D6.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D6', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D6</button>\r\n            </li>\r\n            <li class=\"list-group-item bg-light\" *ngIf=\"esp.D7.InUse\">\r\n              <button type=\"button\" *ngIf=\"esp.D7.InUse && !esp.D7.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D7', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D7</button>\r\n              <button type=\"button\" *ngIf=\"esp.D7.InUse && esp.D7.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D7', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D7</button>\r\n            </li>\r\n            <li class=\"list-group-item bg-light\" *ngIf=\"esp.D8.InUse\">\r\n              <button type=\"button\" *ngIf=\"esp.D8.InUse && !esp.D8.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D8', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D8</button>\r\n              <button type=\"button\" *ngIf=\"esp.D8.InUse && esp.D8.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D8', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D8</button>\r\n            </li>\r\n            <li class=\"list-group-item bg-light\" *ngIf=\"esp.D9.InUse\">\r\n              <button type=\"button\" *ngIf=\"esp.D9.InUse && !esp.D9.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D9', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D9</button>\r\n              <button type=\"button\" *ngIf=\"esp.D9.InUse && esp.D9.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D9', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D9</button>\r\n            </li>\r\n            <li class=\"list-group-item bg-light\" *ngIf=\"esp.D10.InUse\">\r\n              <button type=\"button\" *ngIf=\"esp.D10.InUse && !esp.D10.IsHight\" class=\"btn btn-success btn-lg\" (click)=\"eventOnClick({key:'D10', value:true, espItem: esp})\" >ΕΝΕΡΓΟΠΟΙΗΣΗ D10</button>\r\n              <button type=\"button\" *ngIf=\"esp.D10.InUse && esp.D10.IsHight\" class=\"btn btn-danger btn-lg\"  (click)=\"eventOnClick({key:'D10', value:false, espItem: esp})\" >ΑΠΕΝΕΡΓΟΠΟΙΗΣΗ D10</button>\r\n            </li>\r\n            <li class=\"list-group-item bg-light\" *ngIf=\"esp.A0.InUse\">             \r\n              <h5 class=\"aria-label\">A0 analog Pin At: {{esp.A0.value}}</h5>         \r\n              <mat-slider *ngIf=\"esp.A0.InUse\" [value]=\"esp.A0.value\" (change)=\"eventOnChange({key:'A0',value:$event, espItem: esp})\" id=\"sliderA0\" thumbLabel  [displayWith]=\"formatLabel\" tickInterval=\"auto \" min=\"1\" max=\"1000\" >></mat-slider>             \r\n            </li>\r\n          </ul>\r\n          <hr class=\"my-1\" *ngIf=\"esp.A0.InUse\">\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/app/components/Controlls/iot-automation/iot-automation.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/Controlls/iot-automation/iot-automation.component.ts ***!
  \*********************************************************************************/
/*! exports provided: IotAutomationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IotAutomationComponent", function() { return IotAutomationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);




var IotAutomationComponent = /** @class */ (function () {
    //value = false;
    function IotAutomationComponent(flashMessage, authService) {
        this.flashMessage = flashMessage;
        this.authService = authService;
    }
    /*
    changeView(){
      this.value = !this.value;
    }
    
    */
    IotAutomationComponent.prototype.ngOnInit = function () {
        this.UpdateEsoList();
    };
    IotAutomationComponent.prototype.UpdateEsoList = function () {
        var _this = this;
        this.authService.getEspByUser().subscribe(function (esps) {
            _this.EspList = esps.esps.esp;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    IotAutomationComponent.prototype.eventOnChange = function (object) {
        var _this = this;
        this.EspList.forEach(function (esp) {
            if (esp._id == object.espItem._id) {
                esp[object.key].value = object.value.value;
                _this.authService.updateEsp(esp).subscribe(function (data) {
                    if (data.success) {
                        _this.UpdateEsoListValues();
                    }
                    else {
                        _this.UpdateEsoListValues();
                    }
                });
            }
        });
    };
    IotAutomationComponent.prototype.UpdateEsoListValues = function () {
        var _this = this;
        this.authService.getEspByUser().subscribe(function (esps) {
            //for each change values
            _this.EspList.forEach(function (part, index, theArray) {
                theArray[index].D0.IsHight = esps.esps.esp[index].D0.IsHight;
                theArray[index].D1.IsHight = esps.esps.esp[index].D1.IsHight;
                theArray[index].D2.IsHight = esps.esps.esp[index].D2.IsHight;
                theArray[index].D3.IsHight = esps.esps.esp[index].D3.IsHight;
                theArray[index].D4.IsHight = esps.esps.esp[index].D4.IsHight;
                theArray[index].D5.IsHight = esps.esps.esp[index].D5.IsHight;
                theArray[index].D6.IsHight = esps.esps.esp[index].D6.IsHight;
                theArray[index].D7.IsHight = esps.esps.esp[index].D7.IsHight;
                theArray[index].D8.IsHight = esps.esps.esp[index].D8.IsHight;
                theArray[index].D9.IsHight = esps.esps.esp[index].D9.IsHight;
                theArray[index].D10.IsHight = esps.esps.esp[index].D10.IsHight;
                theArray[index].A0.value = esps.esps.esp[index].A0.value;
            });
            //this.EspList = esps.esps.esp ;      
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    IotAutomationComponent.prototype.eventOnClick = function (object) {
        var _this = this;
        this.EspList.forEach(function (esp) {
            if (esp._id == object.espItem._id) {
                esp[object.key].IsHight = object.value;
                _this.authService.updateEsp(esp).subscribe(function (data) {
                    if (data.success) {
                        _this.UpdateEsoListValues();
                    }
                    else {
                        _this.UpdateEsoListValues();
                    }
                });
            }
        });
    };
    IotAutomationComponent.prototype.formatLabel = function (value) {
        if (!value) {
            return 0;
        }
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    };
    IotAutomationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-iot-automation',
            template: __webpack_require__(/*! ./iot-automation.component.html */ "./src/app/components/Controlls/iot-automation/iot-automation.component.html"),
            styles: [__webpack_require__(/*! ./iot-automation.component.css */ "./src/app/components/Controlls/iot-automation/iot-automation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], IotAutomationComponent);
    return IotAutomationComponent;
}());



/***/ }),

/***/ "./src/app/components/Controlls/overview/overview.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/Controlls/overview/overview.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".even { color: red; }\r\n    .odd { color: green; }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Db250cm9sbHMvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLFVBQVUsRUFBRTtJQUNoQixPQUFPLFlBQVksRUFBRSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQ29udHJvbGxzL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXZlbiB7IGNvbG9yOiByZWQ7IH1cclxuICAgIC5vZGQgeyBjb2xvcjogZ3JlZW47IH0iXX0= */"

/***/ }),

/***/ "./src/app/components/Controlls/overview/overview.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/Controlls/overview/overview.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">name</th>\r\n      <th scope=\"col\">age</th>\r\n      <th scope=\"col\">species</th>\r\n      <th scope=\"col\">occupation</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr class=\"table-active\"  *ngFor=\"let item of dummy;let index=index; let odd=odd; let even=even;\"  [ngClass]=\"{ odd: table-active, even: table-success }\">\r\n      <td>{{item.name}}</td>\r\n      <td>{{item.age}}</td>\r\n      <td>{{item.species}}</td>\r\n      <td>{{item.occupation}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/Controlls/overview/overview.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/Controlls/overview/overview.component.ts ***!
  \*********************************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OverviewComponent = /** @class */ (function () {
    function OverviewComponent() {
        this.dummy = [
            {
                name: 'Earl of Lemongrab',
                age: 'Unknown',
                species: 'Lemon Candy',
                occupation: 'Earl, Heir to the Candy Kingdom Throne'
            },
            {
                name: 'Bonnibel Bubblegum',
                age: '19',
                species: 'Gum Person',
                occupation: 'Returned Ruler of the Candy Kingdom'
            },
            {
                name: 'Phoebe',
                age: '16',
                species: 'Flame Person',
                occupation: 'Ruler of the Fire Kingdom'
            },
            {
                name: 'Lumpy Space Princess',
                age: '18',
                species: 'Lumpy Space Person',
                occupation: 'Babysitter'
            },
        ];
    }
    OverviewComponent.prototype.ngOnInit = function () {
        //Read data NOw add dummy
    };
    OverviewComponent.prototype.tableScope = function ($scope) {
        $scope.details = {
            '3': {
                tripcode: 3,
                routelines: "PASAY - CAGAYAN",
                '2015 - 3 - 17': 1,
                '2015 - 3 - 18': 0
            },
            '4': {
                tripcode: 4,
                routelines: "PASAY - CAVITE",
                '2015 - 3 - 17': 0,
                '2015 - 3 - 18': 4
            },
        };
    };
    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/components/Controlls/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.css */ "./src/app/components/Controlls/overview/overview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/components/ManageEsps/manage/manage.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/ManageEsps/manage/manage.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvTWFuYWdlRXNwcy9tYW5hZ2UvbWFuYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/ManageEsps/manage/manage.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/ManageEsps/manage/manage.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-3\">Lets set up your devices!</h1>\n  \n  <p class=\"lead\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div ngbDropdown class=\"d-inline-block\">\n          <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Choose an ESP8266</button>\n          <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n            <div *ngFor=\"let esp of EspList\">\n                <button ngbDropdownItem (click)=\"ChangeFocusEsp(esp)\">{{esp.name}}</button>           \n            </div>\n          </div>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"CreateNewEsp()\">Create New</button>\n      </div>\n    </div>\n</div>\n<hr class=\"my-4\">\n\n\n\n\n<form (submit)=\"onESPSubmit()\">\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n      <h2 class=\"page-header\">ESP Register</h2>\n        <div class=\"form-group\">    \n          <label>Name</label>\n          <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Enter Name\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"Description\">Description</label>\n            <textarea class=\"form-control\" id=\"Description\"  [(ngModel)]=\"description\" name=\"Description\" rows=\"3\" style=\"margin-top: 0px; margin-bottom: 0px; height: 114px;\" placeholder=\"Enter a short Description. What this ESP module will do?\"></textarea>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Secret</label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"secret\" name=\"secret\" placeholder=\"Enter Secret\" >\n          <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your Secret with anyone else.</small>\n        </div>\n\n      \n        <input type=\"submit\" class=\"btn btn-primary\" value=\"{{ isNew == true ? 'Create New Esp8266' : 'Update Esp8266' }}\">\n      </div>\n      <div class=\"col-lg-4\" >\n        <h4>Whitch of those pins would you like to controll?</h4>\n          <div class=\"form-group\">\n          <div class=\"custom-control custom-switch\">\n            <input type=\"checkbox\" [ngModelOptions]=\"{standalone: true}\"  class=\"custom-control-input\" [(ngModel)]=\"D0\" name=\"name\"  id=\"customSwitchD0\">\n            <label class=\"custom-control-label\" for=\"customSwitchD0\">D0/GPIO16</label>\n          </div>   \n          </div>  \n\n          <div class=\"form-group\">     \n          <div class=\"custom-control custom-switch\">\n              <input type=\"checkbox\" [ngModelOptions]=\"{standalone: true}\"  class=\"custom-control-input\" [(ngModel)]=\"D1\" name=\"name\"  id=\"customSwitchD1\">\n              <label class=\"custom-control-label\" for=\"customSwitchD1\">D1/GPIO5</label>\n          </div>   \n          </div> \n\n          <div class=\"form-group\">     \n          <div class=\"custom-control custom-switch\">\n            <input type=\"checkbox\" [ngModelOptions]=\"{standalone: true}\"  class=\"custom-control-input\" [(ngModel)]=\"D2\" name=\"name\"  id=\"customSwitchD2\">\n            <label class=\"custom-control-label\" for=\"customSwitchD2\">D2/GPIO4</label>\n          </div>   \n          </div>  \n\n          <div class=\"form-group\">      \n          <div class=\"custom-control custom-switch\">\n          <input type=\"checkbox\" [ngModelOptions]=\"{standalone: true}\"  class=\"custom-control-input\" [(ngModel)]=\"D3\" name=\"name\"  id=\"customSwitchD3\">\n          <label class=\"custom-control-label\" for=\"customSwitchD3\">D3/GPIO0</label>\n          </div>   \n          </div>  \n          <div class=\"form-group\">       \n          <div class=\"custom-control custom-switch\">\n            <input type=\"checkbox\" [ngModelOptions]=\"{standalone: true}\" disabled=\"\" class=\"custom-control-input\" [(ngModel)]=\"D4\" name=\"name\"  id=\"customSwitchD4\">\n            <label class=\"custom-control-label\" for=\"customSwitchD4\">D4/GPIO2</label>\n          </div>   \n          </div>\n\n          <div class=\"form-group\">        \n          <div class=\"custom-control custom-switch\">\n              <input type=\"checkbox\" [ngModelOptions]=\"{standalone: true}\"  class=\"custom-control-input\" [(ngModel)]=\"D5\" name=\"name\"  id=\"customSwitchD5\">\n              <label class=\"custom-control-label\" for=\"customSwitchD5\">D5/GPIO14</label>\n          </div>   \n          </div>\n\n          <div class=\"form-group\">      \n          <div class=\"custom-control custom-switch\">\n              <input type=\"checkbox\" [ngModelOptions]=\"{standalone: true}\"  class=\"custom-control-input\" [(ngModel)]=\"D6\" name=\"name\"  id=\"customSwitchD6\">\n              <label class=\"custom-control-label\" for=\"customSwitchD6\">D6/GPIO12</label>\n          </div>   \n          </div>\n\n          <div class=\"form-group\">           \n          <div class=\"custom-control custom-switch\">\n              <input type=\"checkbox\" [ngModelOptions]=\"{standalone: true}\"  class=\"custom-control-input\" [(ngModel)]=\"D7\" name=\"name\"  id=\"customSwitchD7\">\n              <label class=\"custom-control-label\" for=\"customSwitchD7\">D7/GPIO13</label>\n          </div>   \n          </div>\n\n          <div class=\"form-group\">            \n          <div class=\"custom-control custom-switch\">\n              <input type=\"checkbox\" [ngModelOptions]=\"{standalone: true}\"  class=\"custom-control-input\" [(ngModel)]=\"D8\" name=\"name\"  id=\"customSwitchD8\">\n              <label class=\"custom-control-label\" for=\"customSwitchD8\">D8/GPIO15</label>\n          </div>   \n          </div>\n\n          <div class=\"form-group\">            \n          <div class=\"custom-control custom-switch\">\n              <input type=\"checkbox\" [ngModelOptions]=\"{standalone: true}\"  class=\"custom-control-input\" [(ngModel)]=\"D9\" name=\"name\"  id=\"customSwitchD9\">\n              <label class=\"custom-control-label\" for=\"customSwitchD9\">D9/GPIO3</label>\n          </div>   \n          </div> \n\n          <div class=\"form-group\">           \n          <div class=\"custom-control custom-switch\">\n              <input type=\"checkbox\" [ngModelOptions]=\"{standalone: true}\" disabled=\"true\" class=\"custom-control-input\" [(ngModel)]=\"D10\" name=\"name\"  id=\"customSwitchD10\">\n              <label class=\"custom-control-label\" for=\"customSwitchD10\">D10/GPIO1</label>\n          </div>   \n          </div>\n\n          <div class=\"form-group\">           \n          <div class=\"custom-control custom-switch\">\n              <input type=\"checkbox\" [ngModelOptions]=\"{standalone: true}\"  class=\"custom-control-input\" [(ngModel)]=\"A0\" name=\"name\"  id=\"customSwitchA0\">\n              <label class=\"custom-control-label\" for=\"customSwitchA0\">A0/GPIO17</label>\n          </div>  \n        \n        </div>\n      </div>\n    </div>  \n</form>\n"

/***/ }),

/***/ "./src/app/components/ManageEsps/manage/manage.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/ManageEsps/manage/manage.component.ts ***!
  \******************************************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");






var ManageComponent = /** @class */ (function () {
    function ManageComponent(flashMessage, authService, router, validateService) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.validateService = validateService;
        this.D0 = false;
        this.D1 = false;
        this.D2 = false;
        this.D3 = false;
        this.D4 = false;
        this.D5 = false;
        this.D6 = false;
        this.D7 = false;
        this.D8 = false;
        this.D9 = false;
        this.D10 = false;
        this.A0 = false;
        this.isNew = true;
    }
    ManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //load esps 
        this.UpdateEsoList();
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ManageComponent.prototype.UpdateEsoList = function () {
        var _this = this;
        this.authService.getEspByUser().subscribe(function (esps) {
            _this.EspList = esps.esps.esp;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ManageComponent.prototype.ChangeFocusEsp = function (esp) {
        this.isNew = false;
        this.focusedESP = esp;
        this.name = this.focusedESP.name;
        this.secret = this.focusedESP.secret;
        this.description = this.focusedESP.description;
        this.D0 = this.focusedESP.D0.InUse;
        this.D1 = this.focusedESP.D1.InUse;
        this.D2 = this.focusedESP.D2.InUse;
        this.D3 = this.focusedESP.D3.InUse;
        this.D4 = this.focusedESP.D4.InUse;
        this.D5 = this.focusedESP.D5.InUse;
        this.D6 = this.focusedESP.D6.InUse;
        this.D7 = this.focusedESP.D7.InUse;
        this.D8 = this.focusedESP.D8.InUse;
        this.D9 = this.focusedESP.D9.InUse;
        this.D10 = this.focusedESP.D10.InUse;
        this.A0 = this.focusedESP.A0.InUse;
    };
    //add esp
    ManageComponent.prototype.onESPSubmit = function () {
        var _this = this;
        //check if secret already exists
        var esp;
        esp = {
            name: this.name,
            description: this.description,
            secret: this.secret,
            D0: this.D0,
            D1: this.D1,
            D2: this.D2,
            D3: this.D3,
            D4: this.D4,
            D5: this.D5,
            D6: this.D6,
            D7: this.D7,
            D8: this.D8,
            D9: this.D9,
            D10: this.D10,
            A0: this.A0,
            owner: this.user._id
        };
        //If its not new add the id 
        if (!this.isNew)
            esp._id = this.focusedESP._id;
        //Required Fields
        if (!this.validateService.validateRegisterESP(esp)) {
            this.flashMessage.show('Please fill in all fields.', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register User
        this.authService.registerEsp(esp).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                //this.router.navigate(['/dashboard']);
                _this.UpdateEsoList();
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                //this.router.navigate(['/dashboard']);
                _this.UpdateEsoList();
            }
        });
    };
    ManageComponent.prototype.CreateNewEsp = function () {
        this.isNew = true;
        this.focusedESP = undefined;
        this.name = undefined;
        this.secret = undefined;
        this.description = undefined;
        this.D0 = false;
        this.D1 = false;
        this.D2 = false;
        this.D3 = false;
        this.D4 = false;
        this.D5 = false;
        this.D6 = false;
        this.D7 = false;
        this.D8 = false;
        this.D9 = false;
        this.D10 = false;
        this.A0 = false;
    };
    ManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage',
            template: __webpack_require__(/*! ./manage.component.html */ "./src/app/components/ManageEsps/manage/manage.component.html"),
            styles: [__webpack_require__(/*! ./manage.component.css */ "./src/app/components/ManageEsps/manage/manage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"]])
    ], ManageComponent);
    return ManageComponent;
}());



/***/ }),

/***/ "./src/app/components/ManageEsps/upload-code/upload-code.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/ManageEsps/upload-code/upload-code.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvTWFuYWdlRXNwcy91cGxvYWQtY29kZS91cGxvYWQtY29kZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/ManageEsps/upload-code/upload-code.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/ManageEsps/upload-code/upload-code.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\">\n            <div class=\"row card\">\n                <div class=\"col-sm-12\">\n                    <h4>Upload Section</h4>\n                    <div id=\"fileSelector\">\n                        <input type=\"file\" name=\"fileUplaod\" id=\"fileUpload\"\n                        multiple ng2FileSelect [uploader]=\"uploader\">\n                    </div>\n                    <div>\n                        <div class=\"row uploadList\" *ngFor=\"let item of uploader.queue\">\n                            <div class=\"col-sm-4\">{{item.file.name}}</div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar bg-success\" \n                                    [ngStyle]=\"{'width':item.progress+'%'}\"></div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                    <button type=\"button\" class=\"btn btn-dark\" (click)=\"item.upload()\">Upload</button>\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">Cancel</button>\n                            </div>\n                        </div>                        \n                    </div>\n                    <div class=\"row\" *ngIf=\"uploader?.queue?.length > 1\">\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"uploader.uploadAll()\">Upload All</button>\n                    </div>\n                </div>                \n            </div>\n\n\n            <!-- \n            <div class=\"row card\">\n                <h4>Download Section</h4>\n\n                <div class=\"row\" *ngFor=\"let item of attachmentList; let i = index\"\n                style=\"margin:10px;padding:5px;background-color:rgb(231, 229, 229); border-radius:5px; line-height:40px;\">\n                    <div class=\"col-sm-7\">{{item.originalname}}</div>\n                    <div class=\"col-sm-5\" style=\"text-align:center;\"><button type=\"button\" class=\"btn btn-primary\" (click)=\"download(i)\">Download</button></div>\n                </div>\n            </div>\n            -->\n\n\n\n        </div>\n        <div class=\"col-md-2\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/ManageEsps/upload-code/upload-code.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/ManageEsps/upload-code/upload-code.component.ts ***!
  \****************************************************************************/
/*! exports provided: UploadCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadCodeComponent", function() { return UploadCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);



//const uri = 'http://localhost:3000/esp/espuploads';
var uri = 'esp/espuploads';
var UploadCodeComponent = /** @class */ (function () {
    function UploadCodeComponent() {
        var _this = this;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: uri });
        this.attachmentList = [];
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.attachmentList.push(JSON.parse(response));
        };
    }
    UploadCodeComponent.prototype.ngOnInit = function () {
    };
    UploadCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-code',
            template: __webpack_require__(/*! ./upload-code.component.html */ "./src/app/components/ManageEsps/upload-code/upload-code.component.html"),
            styles: [__webpack_require__(/*! ./upload-code.component.css */ "./src/app/components/ManageEsps/upload-code/upload-code.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UploadCodeComponent);
    return UploadCodeComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/logged.guard.ts":
/*!****************************************!*\
  !*** ./src/app/guards/logged.guard.ts ***!
  \****************************************/
/*! exports provided: LoggedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedGuard", function() { return LoggedGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var LoggedGuard = /** @class */ (function () {
    function LoggedGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoggedGuard.prototype.canActivate = function () {
        if (!this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/dashboard']);
            return false;
        }
    };
    LoggedGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoggedGuard);
    return LoggedGuard;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        //return this.http.post('http://localhost:3000/users/register', user,{headers: headers}).pipe(map((response: any) => response));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        //return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers}).pipe(map((response: any) => response));
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authToken
        });
        return this.http.get('users/profile', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        //return this.http.get('http://localhost:3000/users/profile',{headers: headers}).pipe(map((response: any) => response));
    };
    AuthService.prototype.userCheck = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/usercheck', user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        //return this.http.post('http://localhost:3000/users/usercheck', user,{headers: headers}).pipe(map((response: any) => response));
    };
    AuthService.prototype.turnLedOnOFF = function (State) {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        var body = { 'led1': State };
        console.log(body);
        return this.http.post('users/updateESPTESTAdmin', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        //return this.http.post('http://localhost:3000/users/updateESPTESTAdmin',body,{headers: headers }).pipe(map((response: any) => response));
    };
    AuthService.prototype.getEspState = function () {
        console.log("getting esp state");
        //this.loadToken();    
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authToken
        });
        return this.http.get('users/espState', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        //return this.http.get('http://localhost:3000/users/espState',{headers: headers}).pipe(map((response: any) => response));
    };
    AuthService.prototype.registerEsp = function (esp) {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authToken
        });
        return this.http.post('esp/register', esp, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        //return this.http.post('http://localhost:3000/esp/register', esp,{headers: headers}).pipe(map((response: any) => response));
    };
    AuthService.prototype.updateEsp = function (esp) {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authToken
        });
        return this.http.post('esp/update', esp, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        //return this.http.post('http://localhost:3000/esp/update', esp,{headers: headers}).pipe(map((response: any) => response));
    };
    AuthService.prototype.getEspByUser = function () {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authToken
        });
        return this.http.get('esp/esps', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        //return this.http.get('http://localhost:3000/esp/esps',{headers: headers}).pipe(map((response: any) => response));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
        var user = JSON.parse(localStorage.getItem('user'));
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        if (localStorage.id_token == undefined) {
            //console.log('true');
            return false;
        }
        else {
            var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
            //console.log(helper.isTokenExpired(localStorage.id_token)); 
            if (!helper.isTokenExpired(localStorage.id_token))
                this.loadToken();
            return !helper.isTokenExpired(localStorage.id_token);
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ValidateService = /** @class */ (function () {
    function ValidateService(http) {
        this.http = http;
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateRegisterESP = function (esp) {
        if (esp.name == undefined || esp.description == undefined || esp.secret == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ValidateService);
    return ValidateService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WebSites\MySecondMeanWebsite\Meanauthapptest\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map