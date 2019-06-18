(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firmware-firmware-module"],{

/***/ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-drop.directive.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-item.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-item.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-like-object.class.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        this.rawFile = fileOrInput;
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-select.directive.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new core_1.EventEmitter();
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return {};
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileSelectDirective.prototype, "onFileSelected", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-type.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-type.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-upload.module.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_drop_directive_1 = __webpack_require__(/*! ./file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js");
var file_select_directive_1 = __webpack_require__(/*! ./file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js");
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-uploader.class.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var file_item_class_1 = __webpack_require__(/*! ./file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js");
var file_type_class_1 = __webpack_require__(/*! ./file-type.class */ "./node_modules/ng2-file-upload/file-upload/file-type.class.js");
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: function (item) { return item._file; },
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new core_1.EventEmitter();
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var that = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            var appendFile = function () { return sendable.append(item.alias, item._file, item.file.name); };
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    var paramVal = _this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                });
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        };
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then(function (result) { return xhr.send(JSON.stringify(result)); });
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
    };
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    FileUploader.prototype._transformResponse = function (response, headers) {
        return response;
    };
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ "./node_modules/ng2-file-upload/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ng2-file-upload/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./file-upload/file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js"));
var file_upload_module_1 = __webpack_require__(/*! ./file-upload/file-upload.module */ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js");
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ "./src/app/pages/firmware/firmware-insert/firmware-insert.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/firmware/firmware-insert/firmware-insert.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n    <nb-card-header>{{HtmlMessages.CardDeviceHeader}}</nb-card-header>\n    <nb-card-body>\n        <nb-alert *ngIf=\"errors?.length \" outline=\"danger\" role=\"alert\">\n            <p class=\"alert-title\"><b>Attention!</b></p>\n            <ul class=\"alert-message-list\">\n              <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n            </ul>\n          </nb-alert>\n          \n          <nb-alert *ngIf=\"messages?.length \" outline=\"success\" role=\"alert\">\n            <p class=\"alert-title\"><b>Hooray!</b></p>\n            <ul class=\"alert-message-list\">\n              <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n            </ul>\n          </nb-alert>\n\n          \n      <form >\n        <div class=\"form-group row\">\n          <label for=\"inputName\" class=\"col-sm-3 col-form-label\">Name</label>\n          <div class=\"col-sm-9\">\n              <div class=\"input-group\">\n                  <input type=\"name\" [(ngModel)]=\"name\" class=\"form-control\" id=\"inputName\"  name=\"name\"placeholder=\"Enter Name\"/>\n              </div>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"inputDescription\" class=\"col-sm-3 col-form-label\">Description</label>\n            <div class=\"col-sm-9\">\n              <ckeditor [config]=\"{ extraPlugins: 'divarea', height: '100' }\" id=\"inputDescription\" name=\"description\" [(ngModel)]=\"description\" fullWidth ></ckeditor> \n            </div>\n          </div>\n\n      \n\n        <!-- Insert upload component-->\n       \n          <div class=\"form-group row\">\n            <label for=\"inputLink\" class=\"col-sm-3 col-form-label\">Link</label>\n            <div class=\"col-sm-9\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon success\">@</span>\n                    <input type=\"link\" [(ngModel)]=\"link\" class=\"form-control\" id=\"inputLink\"  name=\"link\" placeholder=\"Enter uploaded Link\"/>\n                </div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"inputLink\" class=\"col-sm-3 col-form-label\">Link</label>\n            <div class=\"col-sm-9\">\n\n\n\n\n                <div id=\"fileSelector\">\n                    <input type=\"file\" name=\"fileUplaod\" id=\"fileUpload\"\n                    ng2FileSelect accept=\"application/octet-stream\" [uploader]=\"uploader\">\n                </div>\n                <div>\n                    <div class=\"row uploadList\" *ngFor=\"let item of uploader.queue\">\n                        <div class=\"col-sm-4\">{{item.file.name}}</div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"progress\">\n                                <div class=\"progress-bar bg-success\" \n                                [ngStyle]=\"{'width':item.progress+'%'}\"></div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                                <button type=\"button\" class=\"btn btn-dark\" (click)=\"item.upload()\">Upload</button>\n                                <button type=\"button\" class=\"btn btn-danger\" (click)=\"uploader.queue[0].remove()\">Cancel</button>\n                        </div>\n                    </div>                        \n                </div>\n                <div class=\"row\" *ngIf=\"uploader?.queue?.length > 1\">\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"uploader.uploadAll()\">Upload All</button>\n                </div>\n\n\n\n\n            </div>\n          </div>\n\n\n          \n\n\n\n\n\n\n\n          <div class=\"form-group row\">\n              <label for=\"group\" class=\"col-sm-3 col-form-label\">Category</label>\n                <div class=\"col-sm-9\">\n                  <div class=\"input-group\">\n                    <input id=\"group\" type=\"group\" class=\"form-control\" name=\"group\" [(ngModel)]=\"group\" [ngbTypeahead]=\"searchCategory\" placeholder=\"In what Category your code will be showing?\"/>\n                  </div>\n                </div>\n          </div>\n\n\n          <div class=\"form-group row\">\n            <label for=\"device\" class=\"col-sm-3 col-form-label\">Device</label>\n              <div class=\"col-sm-9\">\n                <div class=\"input-group\">\n                  <input id=\"device\" type=\"text\" class=\"form-control\" name=\"device\" [(ngModel)]=\"device\" [ngbTypeahead]=\"searchDevice\" placeholder=\"Device that this code wil work\"/>\n                </div>\n              </div>\n          </div>\n          \n        \n          <div class=\"form-group row\">\n              <label for=\"inputVersion\" class=\"col-sm-3 col-form-label\">Version</label>\n              <div class=\"col-sm-9\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-append\">\n                    <input type=\"number\" min=\"0\" [(ngModel)]=\"version.main\" class=\"form-control\"  name=\"versionMain\" placeholder=\"Main\">\n                    <input type=\"number\"  min=\"0\"[(ngModel)]=\"version.secondary\" class=\"form-control\"  name=\"versionSecondary\" placeholder=\"Secondary\">          \n                  </span>\n                </div>\n              </div>\n            </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3\">Options</label>\n          <div class=\"col-sm-9\">\n            <div class=\"form-check\">\n                <nb-checkbox [(ngModel)]=\"isPublic\" name=\"checkbox\" status=\"warning\">\n                  Make it Public.\n                </nb-checkbox>\n            </div>\n            <div class=\"form-group row\">\n            \n            </div>\n          </div>\n        </div> \n\n        <br>\n        <br>\n\n        <div class=\"form-group row\">\n            <label class=\"col-sm-3\">Buttons</label>\n            <div class=\"col-sm-9\">\n                <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (custom)=\"ManageDevice($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\">\n                  </ng2-smart-table>    \n              <div class=\"form-group row\">              \n              </div>\n            </div>\n          </div> \n\n        \n        <br>\n        <br>\n        <br>\n        <br>\n        \n        <div class=\"form-group row\">\n            <label for=\"code\" class=\"col-sm-3 col-form-label\">Code</label>\n            <div class=\"col-sm-9\">  \n              <ckeditor [config]=\"{ extraPlugins: 'divarea', height: '320' }\" id=\"code\" name=\"code\" [(ngModel)]=\"code\" fullWidth ></ckeditor> \n           \n            </div>\n          </div>\n          <div class=\"form-group row\">\n              <div class=\"offset-sm-3 col-sm-9\">\n                  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit()\" >{{HtmlMessages.ButtonSubmit}}</button>\n                </div>              \n            </div>\n      </form>\n    </nb-card-body>\n  </nb-card>\n\n \n"

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
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__);










var uri = 'esp/espuploads';
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
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__["FileUploader"]({
            url: uri,
            allowedMimeType: ['application/octet-stream'],
            queueLimit: 2
        });
        this.attachmentList = [];
        this.searchCategory = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return term.length < 1 ? []
                : _this.GroupArray.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.searchDevice = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return term.length < 1 ? []
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
                buttonType: {
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
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; _this.onAfterAddingFile(file); };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.attachmentList.push(JSON.parse(response));
            console.log(response);
            _this.link = "http://mqtt.antallaktika-smart.gr/uploads/" + response.substring(1, response.length - 1);
        };
    }
    ;
    FirmwareInsertComponent.prototype.onAfterAddingFile = function (fileItem) {
        var latestFile = this.uploader.queue[this.uploader.queue.length - 1];
        this.uploader.queue = [];
        this.uploader.queue.push(latestFile);
    };
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
    FirmwareInsertComponent.prototype.ngOnDestroy = function () {
        this.service.FocusedFirmwareID == "";
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
                        buttonType: element.buttonType
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
                        buttonType: element.buttonType
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
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__);











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
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"],
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