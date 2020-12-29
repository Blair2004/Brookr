(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-customers-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customers/list/list.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/customers/list/list.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-layout>\n    <div class=\"mb-4 text-gray-800\">\n        <span class=\"block text-2xl mb-2\">Customers</span> \n        <p class=\"text-sm\">Manage available customers</p>\n    </div>\n    <div class=\"flex w-full\">\n        <cb-table \n            (action)=\"handleAction( $event )\" \n            (sort)=\"handleSort( $event )\" \n            (refresh)=\"handleRefresh( $event )\" \n            (page)=\"handlePagineNavigation( $event )\" \n            (search)=\"handleSearch( $event )\"\n            [is-loading]=\"isLoading\"\n            *ngIf=\"config\" [crud]=\"config\" class=\"w-full\"></cb-table>\n        <!-- <app-table (sort)=\"handleSort( $event )\" (search)=\"handleSearch( $event )\" [config]=\"config\"></app-table> -->\n    </div>   \n</app-layout>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customers/manage/manage.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/customers/manage/manage.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-layout>\n    <div class=\"mb-2\" *ngIf=\"mode === 'create'\">\n        <p class=\"text-2xl mb-2 font-serif text-gray-800\">Create Customer</p>\n        <p class=\"text-gray-700\">Customers provide loads that are assigned to drivers.</p>\n    </div>\n    <div class=\"mb-2\" *ngIf=\"mode === 'edit'\">\n        <p class=\"text-2xl mb-2 font-serif text-gray-800\">Edit Customer</p>\n        <p class=\"text-gray-700\">Customers provide loads that are assigned to drivers.</p>\n    </div>\n    <app-tabs *ngIf=\"form\" [form]=\"form\" (submit)=\"handleSubmit( $event )\"></app-tabs>\n</app-layout>");

/***/ }),

/***/ "./src/app/customers/customers-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/customers/customers-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersRoutingModule", function() { return CustomersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/customers/list/list.component.ts");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage/manage.component */ "./src/app/customers/manage/manage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"] },
    { path: 'create', component: _manage_manage_component__WEBPACK_IMPORTED_MODULE_3__["ManageComponent"] },
    { path: 'edit/:id', component: _manage_manage_component__WEBPACK_IMPORTED_MODULE_3__["ManageComponent"] },
];
var CustomersRoutingModule = /** @class */ (function () {
    function CustomersRoutingModule() {
    }
    CustomersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CustomersRoutingModule);
    return CustomersRoutingModule;
}());



/***/ }),

/***/ "./src/app/customers/customers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers-routing.module */ "./src/app/customers/customers-routing.module.ts");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage/manage.component */ "./src/app/customers/manage/manage.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/customers/list/list.component.ts");
/* harmony import */ var _declarations_declarations_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../declarations/declarations.module */ "./src/app/declarations/declarations.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_manage_manage_component__WEBPACK_IMPORTED_MODULE_3__["ManageComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _customers_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomersRoutingModule"],
                _declarations_declarations_module__WEBPACK_IMPORTED_MODULE_5__["DeclarationsModule"],
            ]
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ }),

/***/ "./src/app/customers/list/list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/customers/list/list.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9jdXN0b21lcnMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/customers/list/list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/list/list.component.ts ***!
  \**************************************************/
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
        this.isLoading = false;
        this.sort = {};
        this.search = {};
        this.page = {};
        this.perPage = {
            per_page: 10
        };
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tendoo.crud.getConfig('brookr.customers', __assign(__assign(__assign(__assign({}, this.page), this.search), this.sort), this.perPage)).subscribe(function (result) {
            _this.config = result;
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
    ListComponent.prototype.handleRefresh = function (event) {
        this.ngOnInit();
    };
    ListComponent.prototype.handlePagineNavigation = function (event) {
        this.perPage = { per_page: event.pageSize };
        this.page = { page: event.pageIndex + 1 };
        this.ngOnInit();
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customers/list/list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./list.component.scss */ "./src/app/customers/list/list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_4__["TendooService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/customers/manage/manage.component.scss":
/*!********************************************************!*\
  !*** ./src/app/customers/manage/manage.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9jdXN0b21lcnMvbWFuYWdlL21hbmFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/customers/manage/manage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/customers/manage/manage.component.ts ***!
  \******************************************************/
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
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/customers.service */ "./src/app/services/customers.service.ts");
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
    function ManageComponent(activatedRoute, tendoo, customerService, snackbar, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.tendoo = tendoo;
        this.customerService = customerService;
        this.snackbar = snackbar;
        this.router = router;
        this.mode = 'create';
        this.activatedRoute.paramMap.subscribe(function (param) {
            if (param.get('id')) {
                _this.mode = 'edit';
                _this.id = param.get('id');
            }
            _this.tendoo.forms.getPublicForm('brookr.customers' + (_this.mode === 'edit' ? '/' + _this.id : '')).subscribe(function (form) {
                _this.form = form;
            });
        });
    }
    ManageComponent.prototype.ngOnInit = function () {
    };
    ManageComponent.prototype.handleSubmit = function (form) {
        var _this = this;
        this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].touchAllFields(s.formGroup); });
        if (this.form.formGroup.invalid) {
            return this.snackbar.open('Unable to prceed the form is not valid', 'OK', { duration: 3000 });
        }
        this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].deactivateFields(s.fields); });
        if (this.id) {
            this.customerService.updateCustomer(this.id, this.form.formGroup.value).subscribe(function (result) {
                _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
                _this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].enableFields(s.fields); });
            }, function (result) {
                _this.snackbar.open(result['error'].message || result['message'], 'OK', { duration: 3000 });
                _this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].enableFields(s.fields); });
            });
        }
        else {
            this.customerService.createCustomer(this.form.formGroup.value).subscribe(function (result) {
                _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
                _this.router.navigateByUrl('/dashboard/customers');
            }, function (result) {
                _this.snackbar.open(result['error'].message || result['message'], 'OK', { duration: 3000 });
                _this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].enableFields(s.fields); });
            });
        }
    };
    ManageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__["TendooService"] },
        { type: _services_customers_service__WEBPACK_IMPORTED_MODULE_5__["CustomersService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    ManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage',
            template: __importDefault(__webpack_require__(/*! raw-loader!./manage.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customers/manage/manage.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./manage.component.scss */ "./src/app/customers/manage/manage.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__["TendooService"],
            _services_customers_service__WEBPACK_IMPORTED_MODULE_5__["CustomersService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ManageComponent);
    return ManageComponent;
}());



/***/ }),

/***/ "./src/app/services/customers.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/customers.service.ts ***!
  \***********************************************/
/*! exports provided: CustomersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return CustomersService; });
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


var CustomersService = /** @class */ (function () {
    function CustomersService(tendoo) {
        this.tendoo = tendoo;
        this.baseUrl = this.tendoo.baseUrl;
    }
    CustomersService.prototype.createCustomer = function (fields) {
        return this.tendoo.post(this.baseUrl + "brookr/customers", fields);
    };
    CustomersService.prototype.updateCustomer = function (id, fields) {
        return this.tendoo.put(this.baseUrl + "brookr/customers/" + id, fields);
    };
    CustomersService.prototype.deleteCustomer = function (id) {
        return this.tendoo.delete(this.baseUrl + "brookr/customers/" + id);
    };
    CustomersService.prototype.getCustomers = function () {
        return this.tendoo.get(this.baseUrl + "brookr/customers");
    };
    CustomersService.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"] }
    ]; };
    CustomersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"]])
    ], CustomersService);
    return CustomersService;
}());



/***/ })

}]);
//# sourceMappingURL=customers-customers-module.js.map