(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trucks-trucks-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/trucks/components/list/list.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/trucks/components/list/list.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-layout>\r\n    <div class=\"mb-4 text-gray-800\">\r\n        <span class=\"block text-2xl mb-2\">Trucks List</span> \r\n        <p class=\"text-sm\">Manage all the trucks registered on the system</p>\r\n    </div>\r\n    <div class=\"flex w-full\">\r\n        <cb-table \r\n            (action)=\"handleAction( $event )\" \r\n            (sort)=\"handleSort( $event )\" \r\n            (refresh)=\"handleRefresh( $event )\" \r\n            (page)=\"handlePagineNavigation( $event )\" \r\n            (search)=\"handleSearch( $event )\"\r\n            (delete)=\"handleDelete( $event )\"\r\n            [is-loading]=\"isLoading\"\r\n            *ngIf=\"config\" [crud]=\"config\" class=\"w-full\"></cb-table>\r\n        <!-- <app-table (sort)=\"handleSort( $event )\" (search)=\"handleSearch( $event )\" [config]=\"config\"></app-table> -->\r\n    </div>  \r\n</app-layout>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/trucks/components/maintenance-list/maintenance-list.component.html":
/*!************************************************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/trucks/components/maintenance-list/maintenance-list.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-layout>\r\n    <div class=\"mb-4 text-gray-800\">\r\n        <span class=\"block text-2xl mb-2\">Trucks Maintenance</span> \r\n        <p class=\"text-sm\">an history of all trucks maintenance</p>\r\n    </div>\r\n    <div class=\"flex w-full\">\r\n        <cb-table \r\n            (action)=\"handleAction( $event )\" \r\n            (sort)=\"handleSort( $event )\" \r\n            (refresh)=\"handleRefresh( $event )\" \r\n            (page)=\"handlePagineNavigation( $event )\" \r\n            (search)=\"handleSearch( $event )\"\r\n            (delete)=\"handleDelete( $event )\"\r\n            [is-loading]=\"isLoading\"\r\n            *ngIf=\"config\" [crud]=\"config\" class=\"w-full\"></cb-table>\r\n        <!-- <app-table (sort)=\"handleSort( $event )\" (search)=\"handleSearch( $event )\" [config]=\"config\"></app-table> -->\r\n    </div>  \r\n</app-layout>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/trucks/components/maintenance-manage/maintenance-manage.component.html":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/trucks/components/maintenance-manage/maintenance-manage.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-layout>\r\n    <div class=\"mb-2\" *ngIf=\"mode === 'create'\" >\r\n        <p class=\"text-2xl mb-2 font-serif text-gray-800\">Registering Maintenance</p>\r\n        <p class=\"text-gray-700\">Register a maintenance report and attach it to a truck</p>\r\n    </div>\r\n    <div class=\"mb-2\" *ngIf=\"mode === 'edit'\">\r\n        <p class=\"text-2xl mb-2 font-serif text-gray-800\">Edit Maintenance</p>\r\n        <p class=\"text-gray-700\">Edit an existing maintenance report attached to a truck.</p>\r\n    </div>\r\n    <app-tabs *ngIf=\"form\" [form]=\"form\" (submit)=\"handleSubmit( $event )\"></app-tabs>\r\n</app-layout>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/trucks/components/manage/manage.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/trucks/components/manage/manage.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-layout>\r\n    <div class=\"mb-2\" *ngIf=\"mode === 'create'\" >\r\n        <p class=\"text-2xl mb-2 font-serif text-gray-800\">Creating Trucks</p>\r\n        <p class=\"text-gray-700\">Trucks are the vehicules assigned to the drivers for loads transport.</p>\r\n    </div>\r\n    <div class=\"mb-2\" *ngIf=\"mode === 'edit'\">\r\n        <p class=\"text-2xl mb-2 font-serif text-gray-800\">Editing Trucks</p>\r\n        <p class=\"text-gray-700\">Trucks are the vehicules assigned to the drivers for loads transport.</p>\r\n    </div>\r\n    <app-tabs *ngIf=\"form\" [form]=\"form\" (submit)=\"handleSubmit( $event )\"></app-tabs>\r\n</app-layout>");

/***/ }),

/***/ "./src/app/services/trucks-maintenances.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/trucks-maintenances.service.ts ***!
  \*********************************************************/
/*! exports provided: TrucksMaintenancesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrucksMaintenancesService", function() { return TrucksMaintenancesService; });
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


var TrucksMaintenancesService = /** @class */ (function () {
    function TrucksMaintenancesService(tendoo) {
        this.tendoo = tendoo;
        this.baseUrl = this.tendoo.baseUrl;
    }
    TrucksMaintenancesService.prototype.saveMaintenance = function (fields, identifier) {
        if (identifier === void 0) { identifier = null; }
        var method = (['', null].includes(identifier) ? 'post' : 'put');
        return this.tendoo[method](this.tendoo.baseUrl + "brookr/trucks-maintenances" + (identifier ? '/' + identifier : ''), fields);
    };
    TrucksMaintenancesService.prototype.deleteMaintenance = function (id) {
        return this.tendoo.delete(this.baseUrl + "brookr/trucks-maintenances/" + id);
    };
    TrucksMaintenancesService.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"] }
    ]; };
    TrucksMaintenancesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"]])
    ], TrucksMaintenancesService);
    return TrucksMaintenancesService;
}());



/***/ }),

/***/ "./src/app/services/trucks.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/trucks.service.ts ***!
  \********************************************/
/*! exports provided: TrucksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrucksService", function() { return TrucksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrucksService = /** @class */ (function () {
    function TrucksService(http, tendoo) {
        this.http = http;
        this.tendoo = tendoo;
        this.baseUrl = this.tendoo.baseUrl;
    }
    TrucksService.prototype.save = function (fields, identifier) {
        if (identifier === void 0) { identifier = undefined; }
        console.log(identifier);
        var method = identifier !== undefined ? 'put' : 'post';
        return this.tendoo[method](this.baseUrl + ("brookr/trucks" + (identifier === undefined ? '' : '/' + identifier)), fields);
    };
    TrucksService.prototype.delete = function (id) {
        return this.tendoo.delete(this.baseUrl + 'broork/trucks/' + id);
    };
    TrucksService.prototype.get = function () {
        return this.tendoo.get(this.baseUrl + "brookr/trucks");
    };
    TrucksService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_2__["TendooService"] }
    ]; };
    TrucksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_2__["TendooService"]])
    ], TrucksService);
    return TrucksService;
}());



/***/ }),

/***/ "./src/app/trucks/components/list/list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/trucks/components/list/list.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC90cnVja3MvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/trucks/components/list/list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/trucks/components/list/list.component.ts ***!
  \**********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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





var ListComponent = /** @class */ (function () {
    function ListComponent(tendoo, snackbar, dialog, router) {
        this.tendoo = tendoo;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.router = router;
        this.entries = [];
        this.isLoading = false;
        this.sort = {};
        this.search = {};
        this.perPage = {
            per_page: 10
        };
        this.page = {};
        this.searchEnabled = false;
    }
    ListComponent.prototype.handleSort = function (event) {
        this.sort = event;
        this.ngOnInit();
    };
    ListComponent.prototype.handleSearch = function (event) {
        this.search = {
            search: event
        };
        this.ngOnInit();
    };
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.tendoo.crud.getConfig('brookr.trucks', __assign(__assign(__assign(__assign({}, this.sort), this.search), this.page), this.perPage)).subscribe(function (crud) {
            _this.isLoading = false;
            _this.config = crud;
            _this.config.title = 'Trucks List';
        }, function (result) {
            _this.snackbar.open('An error has occured while loading the entries.', 'OK', { duration: 5000 });
        });
    };
    ListComponent.prototype.handleAction = function (event) {
        var _this = this;
        if (event.menu.type === 'DELETE') {
            this.tendoo.crud.delete(event.menu.url.replace('{id}', event.row.id)).subscribe(function (result) {
                _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
                _this.ngOnInit();
                _this.dialog.getDialogById(event.menu.namespace).close();
            }, function (result) {
                _this.snackbar.open(result['error'].message || 'An unexpected error occured', 'OK', { duration: 5000 });
                _this.dialog.getDialogById(event.menu.namespace).close();
            });
        }
        else if (event.menu.type === 'GOTO') {
            this.router.navigateByUrl(event.menu.url.replace('{id}', event.row.id));
        }
    };
    ListComponent.prototype.handleRefresh = function (event) {
        this.ngOnInit();
    };
    ListComponent.prototype.handlePagineNavigation = function (event) {
        this.perPage = { per_page: event.pageSize };
        this.page = { page: event.pageIndex + 1 };
        this.ngOnInit();
    };
    ListComponent.prototype.handleDelete = function (event) {
    };
    ListComponent.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_4__["TendooService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/trucks/components/list/list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./list.component.scss */ "./src/app/trucks/components/list/list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_4__["TendooService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/trucks/components/maintenance-list/maintenance-list.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/trucks/components/maintenance-list/maintenance-list.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC90cnVja3MvY29tcG9uZW50cy9tYWludGVuYW5jZS1saXN0L21haW50ZW5hbmNlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/trucks/components/maintenance-list/maintenance-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/trucks/components/maintenance-list/maintenance-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MaintenanceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceListComponent", function() { return MaintenanceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _services_trucks_maintenances_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/trucks-maintenances.service */ "./src/app/services/trucks-maintenances.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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






var MaintenanceListComponent = /** @class */ (function () {
    function MaintenanceListComponent(snackbar, router, tendoo, snapshot, truckMaintenance, dialog) {
        this.snackbar = snackbar;
        this.router = router;
        this.tendoo = tendoo;
        this.snapshot = snapshot;
        this.truckMaintenance = truckMaintenance;
        this.dialog = dialog;
        this.isLoading = false;
        this.sort = {};
        this.perPage = {};
        this.search = {};
        this.page = {};
    }
    MaintenanceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.tendoo.crud.getConfig('brookr.trucks-maintenance', __assign(__assign(__assign({}, this.sort), this.search), this.page)).subscribe(function (result) {
            _this.isLoading = false;
            _this.config = result;
        });
    };
    MaintenanceListComponent.prototype.handleAction = function (event) {
        var _this = this;
        if (event.menu.type === 'DELETE') {
            this.truckMaintenance.deleteMaintenance(event.row.id).subscribe(function (result) {
                _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
                _this.dialog.getDialogById(event.menu.namespace).close();
                _this.ngOnInit();
            }, function (result) {
                _this.snackbar.open(result['error'].message || result['message'] || 'An unexpected error has occured', 'OK', { duration: 3000 });
            });
        }
        else if (event.menu.type === 'GOTO') {
            this.router.navigateByUrl('/dashboard/trucks/maintenances/manage/' + event.row.id);
        }
    };
    MaintenanceListComponent.prototype.handleSort = function (event) {
        this.sort = event;
        this.ngOnInit();
    };
    MaintenanceListComponent.prototype.handleRefresh = function (event) {
        this.ngOnInit();
    };
    MaintenanceListComponent.prototype.handlePagineNavigation = function (event) {
        this.perPage = { per_page: event.pageSize };
        this.page = { page: event.pageIndex + 1 };
        this.ngOnInit();
    };
    MaintenanceListComponent.prototype.handleSearch = function (event) {
        this.search = {
            search: event
        };
        this.ngOnInit();
    };
    MaintenanceListComponent.prototype.handleDelete = function (event) {
        console.log(event);
    };
    MaintenanceListComponent.ctorParameters = function () { return [
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_4__["TendooService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _services_trucks_maintenances_service__WEBPACK_IMPORTED_MODULE_5__["TrucksMaintenancesService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    MaintenanceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maintenance-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./maintenance-list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/trucks/components/maintenance-list/maintenance-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./maintenance-list.component.scss */ "./src/app/trucks/components/maintenance-list/maintenance-list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_4__["TendooService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_trucks_maintenances_service__WEBPACK_IMPORTED_MODULE_5__["TrucksMaintenancesService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], MaintenanceListComponent);
    return MaintenanceListComponent;
}());



/***/ }),

/***/ "./src/app/trucks/components/maintenance-manage/maintenance-manage.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/trucks/components/maintenance-manage/maintenance-manage.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC90cnVja3MvY29tcG9uZW50cy9tYWludGVuYW5jZS1tYW5hZ2UvbWFpbnRlbmFuY2UtbWFuYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/trucks/components/maintenance-manage/maintenance-manage.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/trucks/components/maintenance-manage/maintenance-manage.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MaintenanceManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceManageComponent", function() { return MaintenanceManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cloud-breeze/utilities */ "../../dist/cloud-breeze/utilities/fesm5/cloud-breeze-utilities.js");
/* harmony import */ var _services_trucks_maintenances_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/trucks-maintenances.service */ "./src/app/services/trucks-maintenances.service.ts");
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






var MaintenanceManageComponent = /** @class */ (function () {
    function MaintenanceManageComponent(trucksMaintenances, snapshot, snackbar, tendoo, router) {
        this.trucksMaintenances = trucksMaintenances;
        this.snapshot = snapshot;
        this.snackbar = snackbar;
        this.tendoo = tendoo;
        this.router = router;
        this.mode = 'create';
        this.identifier = '';
    }
    MaintenanceManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.snapshot.paramMap.subscribe(function (param) {
            if (param.get('id')) {
                _this.mode = 'edit';
                _this.identifier = param.get('id');
            }
            _this.tendoo.forms.getPublicForm('brookr.trucks-maintenances', _this.identifier ? +_this.identifier : undefined).subscribe(function (form) {
                _this.form = _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].buildForm(form);
            });
        });
    };
    MaintenanceManageComponent.prototype.handleSubmit = function (event) {
        var _this = this;
        this.form.sections.forEach(function (section) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].touchAllFields(section.formGroup); });
        if (this.form.formGroup.invalid) {
            return this.snackbar.open('Unable to proceed the form is not valid.', 'OK', { duration: 3000 });
        }
        this.fieldsControl('disable');
        this.trucksMaintenances.saveMaintenance(this.form.formGroup.value, this.identifier || '').subscribe(function (result) {
            _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
            if (!_this.identifier) {
                _this.router.navigateByUrl('/dashboard/trucks/maintenances');
            }
            else {
                _this.fieldsControl('enable');
            }
        }, function (result) {
            _this.fieldsControl('enable');
            _this.form.sections.forEach(function (section) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].enableFields(section.fields); });
            _this.snackbar.open(result['error'].message || 'An unexpected error has occured', 'OK');
        });
    };
    MaintenanceManageComponent.prototype.fieldsControl = function (action) {
        switch (action) {
            case 'disable':
                this.form.sections.forEach(function (section) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].deactivateFields(section.fields); });
                break;
            case 'enable':
                this.form.sections.forEach(function (section) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].enableFields(section.fields); });
                break;
        }
    };
    MaintenanceManageComponent.ctorParameters = function () { return [
        { type: _services_trucks_maintenances_service__WEBPACK_IMPORTED_MODULE_5__["TrucksMaintenancesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__["TendooService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    MaintenanceManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maintenance-manage',
            template: __importDefault(__webpack_require__(/*! raw-loader!./maintenance-manage.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/trucks/components/maintenance-manage/maintenance-manage.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./maintenance-manage.component.scss */ "./src/app/trucks/components/maintenance-manage/maintenance-manage.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_trucks_maintenances_service__WEBPACK_IMPORTED_MODULE_5__["TrucksMaintenancesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__["TendooService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MaintenanceManageComponent);
    return MaintenanceManageComponent;
}());



/***/ }),

/***/ "./src/app/trucks/components/manage/manage.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/trucks/components/manage/manage.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC90cnVja3MvY29tcG9uZW50cy9tYW5hZ2UvbWFuYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/trucks/components/manage/manage.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/trucks/components/manage/manage.component.ts ***!
  \**************************************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cloud-breeze/utilities */ "../../dist/cloud-breeze/utilities/fesm5/cloud-breeze-utilities.js");
/* harmony import */ var _services_trucks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/trucks.service */ "./src/app/services/trucks.service.ts");
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






var ManageComponent = /** @class */ (function () {
    function ManageComponent(tendoo, activeRoute, trucksService, snackbar, router) {
        this.tendoo = tendoo;
        this.activeRoute = activeRoute;
        this.trucksService = trucksService;
        this.snackbar = snackbar;
        this.router = router;
        this.mode = 'create';
    }
    ManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap.subscribe(function (param) {
            if (param.get('id')) {
                _this.mode = 'edit';
                _this.identifier = param.get('id');
            }
            _this.tendoo.forms.getPublicForm('brookr.trucks', _this.identifier).subscribe(function (form) {
                _this.form = form;
            });
        });
    };
    ManageComponent.prototype.handleSubmit = function (form) {
        var _this = this;
        form.sections.forEach(function (section) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].touchAllFields(section.formGroup); });
        if (this.form.formGroup.invalid) {
            return this.snackbar.open('Unable to proceed the form is not valid.', 'OK', { duration: 3000 });
        }
        form.sections.forEach(function (section) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].deactivateFields(section.fields); });
        this.trucksService.save(form.formGroup.value, this.identifier).subscribe(function (result) {
            _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
            if (!_this.identifier) {
                _this.router.navigateByUrl('/dashboard/trucks');
            }
            else {
                form.sections.forEach(function (section) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].enableFields(section.fields); });
            }
        }, function (result) {
            form.sections.forEach(function (section) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].enableFields(section.fields); });
            _this.snackbar.open(result['error'].message || 'An unexpected error has occured.', 'OK', { duration: 3000 });
        });
    };
    ManageComponent.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__["TendooService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _services_trucks_service__WEBPACK_IMPORTED_MODULE_5__["TrucksService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    ManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage',
            template: __importDefault(__webpack_require__(/*! raw-loader!./manage.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/trucks/components/manage/manage.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./manage.component.scss */ "./src/app/trucks/components/manage/manage.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__["TendooService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_trucks_service__WEBPACK_IMPORTED_MODULE_5__["TrucksService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ManageComponent);
    return ManageComponent;
}());



/***/ }),

/***/ "./src/app/trucks/trucks-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/trucks/trucks-routing.module.ts ***!
  \*************************************************/
/*! exports provided: TrucksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrucksRoutingModule", function() { return TrucksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/trucks/components/list/list.component.ts");
/* harmony import */ var _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/manage/manage.component */ "./src/app/trucks/components/manage/manage.component.ts");
/* harmony import */ var _components_maintenance_list_maintenance_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/maintenance-list/maintenance-list.component */ "./src/app/trucks/components/maintenance-list/maintenance-list.component.ts");
/* harmony import */ var _components_maintenance_manage_maintenance_manage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/maintenance-manage/maintenance-manage.component */ "./src/app/trucks/components/maintenance-manage/maintenance-manage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"] },
    { path: 'create', component: _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_3__["ManageComponent"] },
    { path: 'edit/:id', component: _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_3__["ManageComponent"] },
    { path: ':id/maintenances', component: _components_maintenance_list_maintenance_list_component__WEBPACK_IMPORTED_MODULE_4__["MaintenanceListComponent"] },
    { path: ':id/maintenances/edit', component: _components_maintenance_manage_maintenance_manage_component__WEBPACK_IMPORTED_MODULE_5__["MaintenanceManageComponent"] },
    { path: 'maintenances/manage', component: _components_maintenance_manage_maintenance_manage_component__WEBPACK_IMPORTED_MODULE_5__["MaintenanceManageComponent"] },
    { path: 'maintenances/manage/:id', component: _components_maintenance_manage_maintenance_manage_component__WEBPACK_IMPORTED_MODULE_5__["MaintenanceManageComponent"] },
    { path: 'maintenances', component: _components_maintenance_list_maintenance_list_component__WEBPACK_IMPORTED_MODULE_4__["MaintenanceListComponent"] },
];
var TrucksRoutingModule = /** @class */ (function () {
    function TrucksRoutingModule() {
    }
    TrucksRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TrucksRoutingModule);
    return TrucksRoutingModule;
}());



/***/ }),

/***/ "./src/app/trucks/trucks.module.ts":
/*!*****************************************!*\
  !*** ./src/app/trucks/trucks.module.ts ***!
  \*****************************************/
/*! exports provided: TrucksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrucksModule", function() { return TrucksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _trucks_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trucks-routing.module */ "./src/app/trucks/trucks-routing.module.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/trucks/components/list/list.component.ts");
/* harmony import */ var _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/manage/manage.component */ "./src/app/trucks/components/manage/manage.component.ts");
/* harmony import */ var _components_maintenance_list_maintenance_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/maintenance-list/maintenance-list.component */ "./src/app/trucks/components/maintenance-list/maintenance-list.component.ts");
/* harmony import */ var _components_maintenance_manage_maintenance_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/maintenance-manage/maintenance-manage.component */ "./src/app/trucks/components/maintenance-manage/maintenance-manage.component.ts");
/* harmony import */ var _declarations_declarations_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../declarations/declarations.module */ "./src/app/declarations/declarations.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TrucksModule = /** @class */ (function () {
    function TrucksModule() {
    }
    TrucksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_components_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_4__["ManageComponent"], _components_maintenance_list_maintenance_list_component__WEBPACK_IMPORTED_MODULE_5__["MaintenanceListComponent"], _components_maintenance_manage_maintenance_manage_component__WEBPACK_IMPORTED_MODULE_6__["MaintenanceManageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _trucks_routing_module__WEBPACK_IMPORTED_MODULE_2__["TrucksRoutingModule"],
                _declarations_declarations_module__WEBPACK_IMPORTED_MODULE_7__["DeclarationsModule"],
            ]
        })
    ], TrucksModule);
    return TrucksModule;
}());



/***/ })

}]);
//# sourceMappingURL=trucks-trucks-module.js.map