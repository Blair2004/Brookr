(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/settings/components/settings/settings.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/settings/components/settings/settings.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-layout>\r\n    <div class=\"mb-4 text-gray-800\">\r\n        <span class=\"block text-2xl mb-2\">Brookr Settings</span> \r\n        <p class=\"text-sm\">configure the application.</p>\r\n    </div>\r\n    <div class=\"rounded border border-blue-500 bg-blue-100 p-2 my-2\">\r\n        Here are the available template. A template tag should be used with an opening brace '&#123;' and a closing brace '&#125;'. For example '&#123;pickup_date&#125;'.\r\n\r\n        Tag Reference : &#123;load_id&#125;, &#123;load_reference&#125;, &#123;delivery_city&#125;, &#123;delivery_date&#125;, &#123;pickup_city&#125;, &#123;pickup_date&#125;, &#123;pickup_reference&#125;, &#123;load_trailer&#125;, &#123;drop_trailer&#125;, &#123;empty_trailer&#125;.\r\n    </div>\r\n    <app-tabs [form]=\"form\" *ngIf=\"form\" (submit)=\"handleSubmit( $event )\"></app-tabs>\r\n</app-layout>");

/***/ }),

/***/ "./src/app/settings/components/settings/settings.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/settings/components/settings/settings.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9zZXR0aW5ncy9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/settings/components/settings/settings.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/settings/components/settings/settings.component.ts ***!
  \********************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cloud-breeze/utilities */ "../../dist/cloud-breeze/utilities/fesm5/cloud-breeze-utilities.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(tendoo, snackbar) {
        this.tendoo = tendoo;
        this.snackbar = snackbar;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tendoo.forms.getPublicForm('brookr.settings').subscribe(function (form) {
            _this.form = _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_2__["ValidationGenerator"].buildForm(form);
        });
    };
    SettingsComponent.prototype.handleSubmit = function (event) {
        var _this = this;
        this.tendoo.post(this.tendoo.baseUrl + "brookr/settings", this.form.formGroup.value).subscribe(function (result) {
            _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
        });
    };
    SettingsComponent.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __importDefault(__webpack_require__(/*! raw-loader!./settings.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/settings/components/settings/settings.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/components/settings/settings.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/settings/components/settings/settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{ path: '', component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"] }];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/settings/components/settings/settings.component.ts");
/* harmony import */ var _declarations_declarations_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../declarations/declarations.module */ "./src/app/declarations/declarations.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingsRoutingModule"],
                _declarations_declarations_module__WEBPACK_IMPORTED_MODULE_4__["DeclarationsModule"],
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map