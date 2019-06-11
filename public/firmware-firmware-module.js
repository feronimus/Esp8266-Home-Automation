(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firmware-firmware-module"],{

/***/ "./src/app/pages/firmware/firmware-insert/firmware-insert.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/firmware/firmware-insert/firmware-insert.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n    <nb-card-header>{{HtmlMessages.CardDeviceHeader}}</nb-card-header>\n    <nb-card-body>\n        <nb-alert *ngIf=\"errors?.length \" outline=\"danger\" role=\"alert\">\n            <p class=\"alert-title\"><b>Attention!</b></p>\n            <ul class=\"alert-message-list\">\n              <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n            </ul>\n          </nb-alert>\n          \n          <nb-alert *ngIf=\"messages?.length \" outline=\"success\" role=\"alert\">\n            <p class=\"alert-title\"><b>Hooray!</b></p>\n            <ul class=\"alert-message-list\">\n              <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n            </ul>\n          </nb-alert>\n\n          \n      <form >\n        <div class=\"form-group row\">\n          <label for=\"inputName\" class=\"col-sm-3 col-form-label\">Name</label>\n          <div class=\"col-sm-9\">\n              <div class=\"input-group\">\n                  <input type=\"name\" [(ngModel)]=\"name\" class=\"form-control\" id=\"inputName\"  name=\"name\"placeholder=\"Enter Name\"/>\n              </div>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputDescription\" class=\"col-sm-3 col-form-label\">Description</label>\n            <div class=\"col-sm-9\">\n              <ckeditor [config]=\"{ extraPlugins: 'divarea', height: '100' }\" id=\"inputDescription\" name=\"description\" [(ngModel)]=\"description\" fullWidth ></ckeditor> \n            </div>\n          </div>\n\n      \n\n        <!-- Insert upload component-->\n       \n          <div class=\"form-group row\">\n            <label for=\"inputLink\" class=\"col-sm-3 col-form-label\">Link</label>\n            <div class=\"col-sm-9\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon success\">@</span>\n                    <input type=\"link\" [(ngModel)]=\"link\" class=\"form-control\" id=\"inputLink\"  name=\"link\" placeholder=\"Enter uploaded Link\"/>\n                </div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n              <label for=\"group\" class=\"col-sm-3 col-form-label\">Category</label>\n                <div class=\"col-sm-9\">\n                  <div class=\"input-group\">\n                    <input id=\"group\" type=\"group\" class=\"form-control\" name=\"group\" [(ngModel)]=\"group\" [ngbTypeahead]=\"searchCategory\" placeholder=\"In what Category your code will be showing?\"/>\n                  </div>\n                </div>\n          </div>\n\n\n          <div class=\"form-group row\">\n            <label for=\"device\" class=\"col-sm-3 col-form-label\">Device</label>\n              <div class=\"col-sm-9\">\n                <div class=\"input-group\">\n                  <input id=\"device\" type=\"text\" class=\"form-control\" name=\"device\" [(ngModel)]=\"device\" [ngbTypeahead]=\"searchDevice\" placeholder=\"Device that this code wil work\"/>\n                </div>\n              </div>\n          </div>\n          \n        \n          <div class=\"form-group row\">\n              <label for=\"inputVersion\" class=\"col-sm-3 col-form-label\">Version</label>\n              <div class=\"col-sm-9\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-append\">\n                    <input type=\"number\" min=\"0\" [(ngModel)]=\"version.main\" class=\"form-control\"  name=\"versionMain\" placeholder=\"Main\">\n                    <input type=\"number\"  min=\"0\"[(ngModel)]=\"version.secondary\" class=\"form-control\"  name=\"versionSecondary\" placeholder=\"Secondary\">          \n                  </span>\n                </div>\n              </div>\n            </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3\">Options</label>\n          <div class=\"col-sm-9\">\n            <div class=\"form-check\">\n                <nb-checkbox [(ngModel)]=\"isPublic\" name=\"checkbox\" status=\"warning\">\n                  Make it Public.\n                </nb-checkbox>\n            </div>\n            <div class=\"form-group row\">\n            \n            </div>\n          </div>\n        </div> \n\n        <br>\n        <br>\n\n        <div class=\"form-group row\">\n            <label class=\"col-sm-3\">Buttons</label>\n            <div class=\"col-sm-9\">\n                <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (custom)=\"ManageDevice($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\">\n                  </ng2-smart-table>    \n              <div class=\"form-group row\">              \n              </div>\n            </div>\n          </div> \n\n        \n        <br>\n        <br>\n        <br>\n        <br>\n        \n        <div class=\"form-group row\">\n            <label for=\"code\" class=\"col-sm-3 col-form-label\">Code</label>\n            <div class=\"col-sm-9\">  \n              <ckeditor [config]=\"{ extraPlugins: 'divarea', height: '320' }\" id=\"code\" name=\"code\" [(ngModel)]=\"code\" fullWidth ></ckeditor> \n           \n            </div>\n          </div>\n          <div class=\"form-group row\">\n              <div class=\"offset-sm-3 col-sm-9\">\n                  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit()\" >{{HtmlMessages.ButtonSubmit}}</button>\n                </div>              \n            </div>\n      </form>\n    </nb-card-body>\n  </nb-card>\n\n \n"

/***/ }),

/***/ "./src/app/pages/firmware/firmware-insert/firmware-insert.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/firmware/firmware-insert/firmware-insert.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zpcm13YXJlL2Zpcm13YXJlLWluc2VydC9maXJtd2FyZS1pbnNlcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/firmware/firmware-insert/firmware-insert.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/firmware/firmware-insert/firmware-insert.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FirmwareInsertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmwareInsertComponent", function() { return FirmwareInsertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/backend.service */ "./src/app/pages/services/backend.service.ts");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/validation.service */ "./src/app/pages/services/validation.service.ts");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _editors_ckeditor_ckeditor_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../editors/ckeditor/ckeditor.loader */ "./src/app/pages/editors/ckeditor/ckeditor.loader.ts");
/* harmony import */ var _editors_ckeditor_ckeditor_loader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_editors_ckeditor_ckeditor_loader__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ckeditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ckeditor */ "./node_modules/ckeditor/ckeditor.js");
/* harmony import */ var ckeditor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ckeditor__WEBPACK_IMPORTED_MODULE_8__);









;
var FirmwareInsertComponent = /** @class */ (function () {
    function FirmwareInsertComponent(service, validationService, authService) {
        var _this = this;
        this.service = service;
        this.validationService = validationService;
        this.authService = authService;
        //Fields Firmware
        this.newFirmware = {};
        this.name = "";
        this.description = "";
        this.version = { main: 0, secondary: 0 };
        this.isPublic = true;
        this.link = "";
        this.group = "";
        this.device = "";
        this.code = "";
        this.buttons = [{ Name: "", message: "" }];
        this.Sliders = [{ Name: String, message: String, value: Number }];
        //Messages
        this.errors = [];
        this.messages = [];
        this.GroupArray = [];
        this.DeviceArray = [];
        this.firms = [];
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["LocalDataSource"]();
        this.isNew = true;
        this.HtmlMessages = {
            CardDeviceHeader: "",
            ButtonSubmit: "",
        };
        this.colorTypes = [
            { value: 'primary', title: 'primary' },
            { value: 'warning', title: 'warning' },
            { value: 'success', title: 'success' },
            { value: 'info', title: 'info' },
            { value: 'danger', title: 'danger' },
            { value: 'ghost', title: 'ghost' },
        ];
        this.searchCategory = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return term.length < 2 ? []
                : _this.GroupArray.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.searchDevice = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return term.length < 2 ? []
                : _this.DeviceArray.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                messageOn: {
                    title: 'Message At On',
                    type: 'string',
                },
                messageOff: {
                    title: 'Message At Off',
                    type: 'string',
                },
                icon: {
                    title: 'Icon #',
                    type: 'string',
                },
                type: {
                    title: 'Color type',
                    type: 'html',
                    editor: {
                        type: 'list',
                        config: {
                            list: this.colorTypes,
                        },
                    },
                },
            }
        };
    }
    ;
    FirmwareInsertComponent.prototype.ngOnInit = function () {
        //Get Focused ID of Firmware and load it 
        this.FocusedID = this.service.FocusedFirmwareID;
        if (!(this.FocusedID == undefined) && !(this.FocusedID == ""))
            this.isNew = false;
        if (!this.isNew)
            this.handleChange();
        else
            this.handleHtmlChange();
        //Load Cashed data from the server
        this.LoadLists();
    };
    FirmwareInsertComponent.prototype.handleChange = function () {
        var _this = this;
        this.service.getFirmwareByUser().subscribe(function (firm) {
            firm.firmware.forEach(function (element) {
                _this.firms.push(element);
                if (_this.FocusedID == element._id)
                    _this.FocusedFirmwares = element;
            });
            _this.name = _this.FocusedFirmwares.name;
            _this.description = _this.FocusedFirmwares.description;
            _this.link = _this.FocusedFirmwares.link;
            _this.group = _this.FocusedFirmwares.group;
            _this.device = _this.FocusedFirmwares.device;
            _this.version = _this.FocusedFirmwares.version;
            _this.isPublic = _this.FocusedFirmwares.isPublic;
            _this.code = _this.FocusedFirmwares.code;
            _this.source.load(_this.FocusedFirmwares.buttons);
            /*
            this.FocusedFirmwares.buttons.forEach(element => {
              console.log(element)  ;
              this.source.add(element);
            });
            */
            console.log(_this.source);
            _this.handleHtmlChange();
        });
    };
    FirmwareInsertComponent.prototype.handleHtmlChange = function () {
        if (this.isNew) {
            this.HtmlMessages.CardDeviceHeader = "Insert a New Firmware!";
            this.HtmlMessages.ButtonSubmit = "Save This Firmware";
        }
        else {
            this.HtmlMessages.CardDeviceHeader = "Update Firmware " + this.FocusedFirmwares.name;
            this.HtmlMessages.ButtonSubmit = "Update Firmware";
        }
    };
    FirmwareInsertComponent.prototype.CreateNewFirmware = function () {
        var _this = this;
        this.newFirmware.name = this.name;
        this.newFirmware.description = this.description;
        this.newFirmware.version = { main: this.version.main, secondary: this.version.secondary };
        this.newFirmware.isPublic = this.isPublic;
        this.newFirmware.link = this.link;
        this.newFirmware.group = this.group;
        this.newFirmware.device = this.device;
        this.newFirmware.code = this.code;
        this.newFirmware.owner = this.GetUserID();
        this.newFirmware.buttons = [{
                messageOn: "test",
                messageOff: "test",
                icon: "test",
                buttonType: "test",
            }];
        this.newFirmware.buttons.shift();
        this.source.getAll().then(function (dat) {
            if (dat) {
                dat.forEach(function (element) {
                    var temp = {
                        messageOn: element.messageOn,
                        messageOff: element.messageOff,
                        icon: element.icon,
                        buttonType: element.type
                    };
                    _this.newFirmware.buttons.push(temp);
                });
            }
        });
    };
    FirmwareInsertComponent.prototype.UpdateFirmware = function () {
        var _this = this;
        this.UpdatedFirmware = this.FocusedFirmwares;
        this.UpdatedFirmware.name = this.name;
        this.UpdatedFirmware.description = this.description;
        this.UpdatedFirmware.version = { main: this.version.main, secondary: this.version.secondary };
        this.UpdatedFirmware.isPublic = this.isPublic;
        this.UpdatedFirmware.link = this.link;
        this.UpdatedFirmware.group = this.group;
        this.UpdatedFirmware.device = this.device;
        this.UpdatedFirmware.code = this.code;
        this.UpdatedFirmware.owner = this.GetUserID();
        this.UpdatedFirmware.buttons = [{
                messageOn: "test",
                messageOff: "test",
                icon: "test",
                buttonType: "test",
            }];
        this.UpdatedFirmware.buttons.shift();
        this.source.getAll().then(function (dat) {
            if (dat) {
                dat.forEach(function (element) {
                    var temp = {
                        messageOn: element.messageOn,
                        messageOff: element.messageOff,
                        icon: element.icon,
                        buttonType: element.type
                    };
                    _this.UpdatedFirmware.buttons.push(temp);
                });
            }
        });
    };
    FirmwareInsertComponent.prototype.ClearMessages = function () {
        this.errors = [];
        this.messages = [];
    };
    FirmwareInsertComponent.prototype.GetUserID = function () {
        var token;
        token = this.authService.getToken();
        return token.value.payload.user.id;
    };
    FirmwareInsertComponent.prototype.LoadLists = function () {
        var _this = this;
        //load groups
        this.service.getFirmwareGroups({ _id: this.GetUserID() }).subscribe(function (groups) {
            _this.GroupArray = [];
            _this.DeviceArray = [{}];
            _this.GroupArray = groups.groups;
            _this.service.getDevices().subscribe(function (devices) {
                _this.DeviceArray = devices.devices;
            });
        });
    };
    FirmwareInsertComponent.prototype.onSubmit = function () {
        this.messages = [];
        this.errors = [];
        if (this.isNew) {
            this.handleSumbitNew();
        }
        else {
            this.handleSumbitOld();
        }
    };
    FirmwareInsertComponent.prototype.handleSumbitNew = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.CreateNewFirmware()];
                    case 1:
                        _a.sent();
                        if (!this.validationService.validateRegisterFirmware(this.newFirmware)) {
                            this.errors = this.validationService.pickErrorsRegisterFirmware(this.newFirmware);
                            return [2 /*return*/];
                        }
                        this.service.registerFirmware(this.newFirmware).subscribe(function (msg) {
                            if (msg.success)
                                _this.messages.push(msg.msg);
                            else
                                _this.errors.push(msg.msg);
                        }, function (err) {
                            _this.errors.push(err);
                            //console.log(err);
                            return false;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    FirmwareInsertComponent.prototype.handleSumbitOld = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.UpdateFirmware()];
                    case 1:
                        _a.sent();
                        if (!this.validationService.validateRegisterFirmware(this.UpdatedFirmware)) {
                            this.errors = this.validationService.pickErrorsRegisterFirmware(this.UpdatedFirmware);
                            return [2 /*return*/];
                        }
                        this.service.updateFirmware(this.UpdatedFirmware).subscribe(function (msg) {
                            if (msg.success)
                                _this.messages.push(msg.msg);
                            else
                                _this.errors.push(msg.msg);
                        }, function (err) {
                            _this.errors.push(err);
                            //console.log(err);
                            return false;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    FirmwareInsertComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    FirmwareInsertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-firmware-insert',
            template: __webpack_require__(/*! ./firmware-insert.component.html */ "./src/app/pages/firmware/firmware-insert/firmware-insert.component.html"),
            styles: [__webpack_require__(/*! ./firmware-insert.component.scss */ "./src/app/pages/firmware/firmware-insert/firmware-insert.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"],
            _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"]])
    ], FirmwareInsertComponent);
    return FirmwareInsertComponent;
}());



/***/ }),

/***/ "./src/app/pages/firmware/firmware-manage/firmware-manage.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/firmware/firmware-manage/firmware-manage.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n      <div class=\"container-btn\">\n        Manage your Firmwares      \n        <button class=\"btn-primary\" nbButton hero (click)=\"NewFirmware()\">New Firmware</button>\n    </div>\n  </nb-card-header>\n\n  <nb-card-body>\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (custom)=\"ManageFirmware($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\">\n    </ng2-smart-table>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/firmware/firmware-manage/firmware-manage.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/firmware/firmware-manage/firmware-manage.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FirmwareManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmwareManageComponent", function() { return FirmwareManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/backend.service */ "./src/app/pages/services/backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var FirmwareManageComponent = /** @class */ (function () {
    function FirmwareManageComponent(service, router) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this.settings = {
            hideSubHeader: true,
            actions: {
                add: false,
                delete: false,
                edit: false,
                position: "right",
                custom: [
                    {
                        name: 'Edit item',
                        title: '<i class="ion-forward"></i>',
                    },
                ],
            },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                name: {
                    title: 'Name',
                    type: 'string',
                },
                versionReadable: {
                    title: 'Version',
                    type: 'string',
                },
                isPublic: {
                    title: 'Public',
                },
                group: {
                    title: 'Category',
                    type: 'string',
                },
                device: {
                    title: 'Device',
                    type: 'string',
                }
            },
        };
        this.service.getFirmwareByUser().subscribe(function (firms) {
            _this.source.load(firms.firmware);
        }, function (err) {
            console.log(err);
            return false;
        });
    }
    FirmwareManageComponent.prototype.NewFirmware = function () {
        this.service.FocusedDeviceID = "";
        this.router.navigate(['/pages/firmware/input']);
    };
    FirmwareManageComponent.prototype.ManageFirmware = function ($event) {
        this.service.FocusedFirmwareID = $event.data._id;
        this.router.navigate(['/pages/firmware/input']);
    };
    FirmwareManageComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    FirmwareManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-firmware-manage',
            template: __webpack_require__(/*! ./firmware-manage.component.html */ "./src/app/pages/firmware/firmware-manage/firmware-manage.component.html"),
            styles: ["\n  nb-card {\n    transform: translate3d(0, 0, 0);\n  }\n"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FirmwareManageComponent);
    return FirmwareManageComponent;
}());



/***/ }),

/***/ "./src/app/pages/firmware/firmware-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/firmware/firmware-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: FirmwareRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmwareRoutingModule", function() { return FirmwareRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _firmware_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firmware.component */ "./src/app/pages/firmware/firmware.component.ts");
/* harmony import */ var _firmware_insert_firmware_insert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firmware-insert/firmware-insert.component */ "./src/app/pages/firmware/firmware-insert/firmware-insert.component.ts");
/* harmony import */ var _firmware_manage_firmware_manage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./firmware-manage/firmware-manage.component */ "./src/app/pages/firmware/firmware-manage/firmware-manage.component.ts");






var routes = [{
        path: '',
        component: _firmware_component__WEBPACK_IMPORTED_MODULE_3__["FirmwareComponent"],
        children: [
            {
                path: 'input',
                component: _firmware_insert_firmware_insert_component__WEBPACK_IMPORTED_MODULE_4__["FirmwareInsertComponent"],
            },
            {
                path: 'manage',
                component: _firmware_manage_firmware_manage_component__WEBPACK_IMPORTED_MODULE_5__["FirmwareManageComponent"],
            },
        ],
    }];
var FirmwareRoutingModule = /** @class */ (function () {
    function FirmwareRoutingModule() {
    }
    FirmwareRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
        })
    ], FirmwareRoutingModule);
    return FirmwareRoutingModule;
}());

var routedComponents = [
    _firmware_component__WEBPACK_IMPORTED_MODULE_3__["FirmwareComponent"],
    _firmware_insert_firmware_insert_component__WEBPACK_IMPORTED_MODULE_4__["FirmwareInsertComponent"],
    _firmware_manage_firmware_manage_component__WEBPACK_IMPORTED_MODULE_5__["FirmwareManageComponent"],
];


/***/ }),

/***/ "./src/app/pages/firmware/firmware.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/firmware/firmware.component.ts ***!
  \******************************************************/
/*! exports provided: FirmwareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmwareComponent", function() { return FirmwareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FirmwareComponent = /** @class */ (function () {
    function FirmwareComponent() {
    }
    FirmwareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-firmware',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], FirmwareComponent);
    return FirmwareComponent;
}());



/***/ }),

/***/ "./src/app/pages/firmware/firmware.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/firmware/firmware.module.ts ***!
  \***************************************************/
/*! exports provided: FirmwareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmwareModule", function() { return FirmwareModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firmware_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firmware-routing.module */ "./src/app/pages/firmware/firmware-routing.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/pages/services/backend.service.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _firmware_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firmware.component */ "./src/app/pages/firmware/firmware.component.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _firmware_insert_firmware_insert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./firmware-insert/firmware-insert.component */ "./src/app/pages/firmware/firmware-insert/firmware-insert.component.ts");
/* harmony import */ var _firmware_manage_firmware_manage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./firmware-manage/firmware-manage.component */ "./src/app/pages/firmware/firmware-manage/firmware-manage.component.ts");










var FirmwareModule = /** @class */ (function () {
    function FirmwareModule() {
    }
    FirmwareModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_firmware_component__WEBPACK_IMPORTED_MODULE_6__["FirmwareComponent"], _firmware_insert_firmware_insert_component__WEBPACK_IMPORTED_MODULE_8__["FirmwareInsertComponent"], _firmware_manage_firmware_manage_component__WEBPACK_IMPORTED_MODULE_9__["FirmwareManageComponent"]],
            imports: [
                _firmware_routing_module__WEBPACK_IMPORTED_MODULE_2__["FirmwareRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["Ng2SmartTableModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"],
            ],
            providers: [_services_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"]],
        })
    ], FirmwareModule);
    return FirmwareModule;
}());



/***/ })

}]);
//# sourceMappingURL=firmware-firmware-module.js.map