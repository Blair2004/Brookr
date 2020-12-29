(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["companies-companies-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>companies works!</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/companies/list/list.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/companies/list/list.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-layout>\n    <div class=\"mb-4 text-gray-800\">\n        <span class=\"block text-2xl mb-2\">Companies</span> \n        <p class=\"text-sm\">Manage all available companies</p>\n    </div>\n    <div class=\"flex w-full\">\n        <cb-table \n            (action)=\"handleAction( $event )\" \n            (sort)=\"handleSort( $event )\" \n            (refresh)=\"handleRefresh( $event )\" \n            (page)=\"handlePagineNavigation( $event )\" \n            (search)=\"handleSearch( $event )\"\n            [is-loading]=\"isLoading\"\n            *ngIf=\"config\" [crud]=\"config\" class=\"w-full\"></cb-table>\n        <!-- <app-table (sort)=\"handleSort( $event )\" (search)=\"handleSearch( $event )\" [config]=\"config\"></app-table> -->\n    </div>   \n</app-layout>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/companies/manage/manage.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/companies/manage/manage.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-layout>\n    <div class=\"mb-2\" >\n        <p *ngIf=\"mode === 'create'\" class=\"text-2xl mb-2 font-serif text-gray-800\">Create Company</p>\n        <p *ngIf=\"mode === 'edit'\" class=\"text-2xl mb-2 font-serif text-gray-800\">Edit Company</p>\n        <p class=\"text-gray-700\">Company can be used as driver group as driver can be attached to it.</p>\n    </div>\n    <app-tabs *ngIf=\"form\" [form]=\"form\" (submit)=\"handleSubmit( $event )\"></app-tabs>\n</app-layout>");

/***/ }),

/***/ "./src/app/companies/companies-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/companies/companies-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CompaniesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesRoutingModule", function() { return CompaniesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/companies/list/list.component.ts");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage/manage.component */ "./src/app/companies/manage/manage.component.ts");
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
var CompaniesRoutingModule = /** @class */ (function () {
    function CompaniesRoutingModule() {
    }
    CompaniesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CompaniesRoutingModule);
    return CompaniesRoutingModule;
}());



/***/ }),

/***/ "./src/app/companies/companies.component.css":
/*!***************************************************!*\
  !*** ./src/app/companies/companies.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9jb21wYW5pZXMvY29tcGFuaWVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/companies/companies.component.ts":
/*!**************************************************!*\
  !*** ./src/app/companies/companies.component.ts ***!
  \**************************************************/
/*! exports provided: CompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function() { return CompaniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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

var CompaniesComponent = /** @class */ (function () {
    function CompaniesComponent() {
    }
    CompaniesComponent.prototype.ngOnInit = function () {
    };
    CompaniesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-companies',
            template: __importDefault(__webpack_require__(/*! raw-loader!./companies.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./companies.component.css */ "./src/app/companies/companies.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], CompaniesComponent);
    return CompaniesComponent;
}());



/***/ }),

/***/ "./src/app/companies/companies.module.ts":
/*!***********************************************!*\
  !*** ./src/app/companies/companies.module.ts ***!
  \***********************************************/
/*! exports provided: CompaniesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesModule", function() { return CompaniesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _companies_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companies-routing.module */ "./src/app/companies/companies-routing.module.ts");
/* harmony import */ var _companies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./companies.component */ "./src/app/companies/companies.component.ts");
/* harmony import */ var _declarations_declarations_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../declarations/declarations.module */ "./src/app/declarations/declarations.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/companies/list/list.component.ts");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage/manage.component */ "./src/app/companies/manage/manage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CompaniesModule = /** @class */ (function () {
    function CompaniesModule() {
    }
    CompaniesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_companies_component__WEBPACK_IMPORTED_MODULE_3__["CompaniesComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _manage_manage_component__WEBPACK_IMPORTED_MODULE_6__["ManageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _companies_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompaniesRoutingModule"],
                _declarations_declarations_module__WEBPACK_IMPORTED_MODULE_4__["DeclarationsModule"]
            ]
        })
    ], CompaniesModule);
    return CompaniesModule;
}());



/***/ }),

/***/ "./src/app/companies/list/list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/companies/list/list.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9jb21wYW5pZXMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/companies/list/list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/companies/list/list.component.ts ***!
  \**************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _partials_dashboard_popups_drivers_payment_drivers_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/dashboard/popups/drivers-payment/drivers-payment.component */ "./src/app/partials/dashboard/popups/drivers-payment/drivers-payment.component.ts");
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
        this.tendoo.crud.getConfig('brookr.companies', __assign(__assign(__assign(__assign({}, this.sort), this.page), this.perPage), this.sort)).subscribe(function (config) {
            _this.config = config;
        }, function (result) {
            _this.snackbar.open(result['error'].message || result.message, 'TRY AGAIN').afterDismissed().subscribe(function (action) {
                if (action.dismissedByAction) {
                    _this.ngOnInit();
                }
            });
        });
    };
    ListComponent.prototype.handleRefresh = function (event) {
        this.ngOnInit();
    };
    ListComponent.prototype.handleAction = function (event) {
        switch (event.menu.type) {
            case 'GOTO':
                this.router.navigateByUrl(event.url);
                break;
            case 'DELETE':
                this.deleteCompany(event);
                break;
            case 'POPUP':
                this.handlePopup(event);
                break;
        }
    };
    ListComponent.prototype.handlePopup = function (event) {
        if (event.menu.namespace == 'make.payment') {
            this.dialog.open(_partials_dashboard_popups_drivers_payment_drivers_payment_component__WEBPACK_IMPORTED_MODULE_5__["DriversPaymentComponent"], {
                id: 'companies-payment-popup',
                data: {
                    resource: event.row,
                    formNamespace: 'brookr.advance-payment.drivers',
                    postNamespace: 'brookr/companies/payment/'
                },
                width: [
                    this.tendoo.responsive.isLG(),
                    this.tendoo.responsive.isXL(),
                ].includes(true) ? '600px' : '80%',
                height: [
                    this.tendoo.responsive.isLG(),
                    this.tendoo.responsive.isXL(),
                ].includes(true) ? '400px' : '60%',
            });
        }
    };
    ListComponent.prototype.deleteCompany = function (event) {
        var _this = this;
        this.tendoo.delete(event.menu.url).subscribe(function (result) {
            _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
            _this.dialog.getDialogById(event.menu.namespace).close();
        }, function (result) {
            _this.snackbar.open(result.error['message'] || result.message, 'OK', { duration: 6000 });
        });
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
    ListComponent.prototype.handlePagineNavigation = function (event) {
        this.perPage = { per_page: event.pageSize };
        this.page = { page: event.pageIndex + 1 };
        this.ngOnInit();
    };
    ListComponent.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__["TendooService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/companies/list/list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./list.component.scss */ "./src/app/companies/list/list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__["TendooService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/companies/manage/manage.component.scss":
/*!********************************************************!*\
  !*** ./src/app/companies/manage/manage.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9jb21wYW5pZXMvbWFuYWdlL21hbmFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/companies/manage/manage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/companies/manage/manage.component.ts ***!
  \******************************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cloud-breeze/utilities */ "../../dist/cloud-breeze/utilities/fesm5/cloud-breeze-utilities.js");
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
    function ManageComponent(tendoo, snackbar, dialog, snapshot, router) {
        this.tendoo = tendoo;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.snapshot = snapshot;
        this.router = router;
    }
    ManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.snapshot.paramMap.subscribe(function (param) {
            _this.mode = param.get('id') !== null ? 'edit' : 'create';
            _this.id = +param.get('id');
            console.log(param.get('id'));
            _this.tendoo.forms.getPublicForm('brookr.companies', _this.mode === 'edit' ? _this.id : undefined).subscribe(function (form) {
                _this.form = form;
            });
        });
    };
    ManageComponent.prototype.handleSubmit = function (event) {
        var _this = this;
        this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_5__["ValidationGenerator"].touchAllFields(s.formGroup); });
        if (this.form.formGroup.invalid) {
            return this.snackbar.open('Unable to proceed the form is not valid.', 'OK', { duration: 3000 });
        }
        console.log(this.mode);
        this.tendoo[this.mode === 'create' ? 'post' : 'put'](this.tendoo.baseUrl + "brookr/companies" + (this.mode === 'edit' ? "/" + this.id : ''), this.form.formGroup.value).subscribe(function (result) {
            _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
            _this.router.navigateByUrl('/dashboard/companies');
        }, function (result) {
            _this.snackbar.open(result['error'].message || result.message, 'OK', { duration: 6000 });
        });
    };
    ManageComponent.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage',
            template: __importDefault(__webpack_require__(/*! raw-loader!./manage.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/companies/manage/manage.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./manage.component.scss */ "./src/app/companies/manage/manage.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ManageComponent);
    return ManageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=companies-companies-module.js.map