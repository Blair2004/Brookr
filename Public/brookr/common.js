(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/drivers.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/drivers.service.ts ***!
  \*********************************************/
/*! exports provided: DriversService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversService", function() { return DriversService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DriversService = /** @class */ (function () {
    function DriversService(tendoo) {
        this.tendoo = tendoo;
        this.baseUrl = this.tendoo.baseUrl;
        console.log(this.baseUrl);
    }
    DriversService.prototype.setDriver = function (form, identifier) {
        if (identifier === void 0) { identifier = null; }
        return this.tendoo[identifier === null ? 'post' : 'put'](this.baseUrl + ("brookr/drivers" + (identifier !== null ? '/' + identifier : '')), form);
    };
    DriversService.prototype.deleteDriver = function (id) {
        return this.tendoo.delete(this.baseUrl + 'brookr/drivers/' + id);
    };
    DriversService.prototype.getDrivers = function () {
        return this.tendoo.get(this.baseUrl + 'brookr/drivers');
    };
    DriversService.prototype.getByMedicalCard = function () {
        return this.tendoo.get(this.baseUrl + 'brookr/drivers/medical-expiration');
    };
    DriversService.prototype.getByDriverCard = function () {
        return this.tendoo.get(this.baseUrl + 'brookr/drivers/driver-expiration');
    };
    DriversService.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"] }
    ]; };
    DriversService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"]])
    ], DriversService);
    return DriversService;
}());



/***/ }),

/***/ "./src/app/services/loads.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/loads.service.ts ***!
  \*******************************************/
/*! exports provided: LoadsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadsService", function() { return LoadsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadsService = /** @class */ (function () {
    function LoadsService(tendoo) {
        this.tendoo = tendoo;
        this.baseUrl = this.tendoo.baseUrl;
    }
    LoadsService.prototype.registerLoads = function (fields, index) {
        if (index === void 0) { index = undefined; }
        return this.tendoo[index === undefined ? 'post' : 'post'](this.baseUrl + "brookr/loads" + (index !== undefined ? '/edit/' + index : ''), fields);
    };
    LoadsService.prototype.getUnassignedLoads = function () {
        return this.tendoo.get(this.baseUrl + "brookr/loads/unassigned");
    };
    LoadsService.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"] }
    ]; };
    LoadsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"]])
    ], LoadsService);
    return LoadsService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map