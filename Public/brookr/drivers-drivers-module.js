(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drivers-drivers-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/drivers/components/list/list.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/drivers/components/list/list.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-layout>\r\n    <div class=\"mb-4 text-gray-800\">\r\n        <span class=\"block text-2xl mb-2\">Drivers</span> \r\n        <p class=\"text-sm\">List of all created drivers</p>\r\n    </div>\r\n    <div class=\"flex w-full\">\r\n        <cb-table \r\n            (action)=\"handleAction( $event )\" \r\n            (sort)=\"handleSort( $event )\" \r\n            (refresh)=\"handleRefresh( $event )\" \r\n            (page)=\"handlePagineNavigation( $event )\" \r\n            (search)=\"handleSearch( $event )\"\r\n            [is-loading]=\"isLoading\"\r\n            *ngIf=\"config\" [crud]=\"config\" class=\"w-full\"></cb-table>\r\n        <!-- <app-table (sort)=\"handleSort( $event )\" (search)=\"handleSearch( $event )\" [config]=\"config\"></app-table> -->\r\n    </div>   \r\n</app-layout>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/drivers/components/loads/loads.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/drivers/components/loads/loads.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-layout>\n    <div class=\"mb-4 text-gray-800\">\n        <span class=\"block text-2xl mb-2\">Loads</span> \n        <p class=\"text-sm\">list all loads available for the drivers.</p>\n    </div>\n    <div class=\"flex w-full flex-col\">\n        <div class=\"tab tab-container\">\n            <div class=\"tabs-header flex\" style=\"margin-bottom: -2px;\">\n                <div (click)=\"setTabActive( section )\" [ngClass]=\"{\n                    'bg-gray-100' : section.active,\n                    'bg-gray-300' : ! section.active\n                }\" *ngFor=\"let section of sections\" class=\"tab px-4 py-2 border-2 border-b-0 rounded-t-lg cursor-pointer flex items-center justify center\">\n                    {{ section.title }} \n                </div>\n            </div>\n        </div>\n        <div class=\"bg-gray-100 border-2\">\n            <app-table \n                (action)=\"handleAction( $event )\"\n                *ngIf=\"config\" \n                (refresh)=\"handleRefresh( $event )\"\n                (sort)=\"handleSort( $event )\"\n                (navigate)=\"handleNavigation( $event )\" \n                (search)=\"handleSearch( $event )\" \n                [config]=\"config\"></app-table>\n        </div>\n    </div>   \n</app-layout>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/drivers/components/manage/manage.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/drivers/components/manage/manage.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-layout>\r\n    <div class=\"mb-2\">\r\n        <p *ngIf=\"mode === 'create'\" class=\"text-2xl mb-2 font-serif text-gray-800\">Creating a driver</p>\r\n        <p *ngIf=\"mode === 'edit'\" class=\"text-2xl mb-2\">Editing a driver</p>\r\n        <p class=\"text-gray-700\">Drivers can pickup and deliver loads which are assigned to them or not yet assigned.</p>\r\n    </div>\r\n    <app-tabs *ngIf=\"form\" (changed)=\"handleFieldChange( $event )\" [form]=\"form\" (submit)=\"handleSubmit( $event )\"></app-tabs>\r\n</app-layout>");

/***/ }),

/***/ "./src/app/drivers/components/list/list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/drivers/components/list/list.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9kcml2ZXJzL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/drivers/components/list/list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/drivers/components/list/list.component.ts ***!
  \***********************************************************/
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
/* harmony import */ var _partials_dashboard_popups_drivers_payment_drivers_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../partials/dashboard/popups/drivers-payment/drivers-payment.component */ "./src/app/partials/dashboard/popups/drivers-payment/drivers-payment.component.ts");
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
        this.sort = {
            direction: 'desc',
            active: 'created_at'
        };
        this.search = {};
        this.page = {};
        this.perPage = {
            per_page: 20
        };
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tendoo.crud.getConfig('brookr.drivers', __assign(__assign(__assign(__assign({}, this.page), this.search), this.sort), this.perPage)).subscribe(function (result) {
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
        else if (event.menu.namespace === 'open.payment') {
            this.dialog.open(_partials_dashboard_popups_drivers_payment_drivers_payment_component__WEBPACK_IMPORTED_MODULE_5__["DriversPaymentComponent"], {
                id: 'driver-payment-popup',
                data: {
                    resource: event.row,
                    formNamespace: 'brookr.advance-payment.drivers',
                    postNamespace: 'brookr/drivers/payments/',
                    tabs: [
                        {
                            label: 'Make Payment',
                            identifier: 'new',
                            active: true
                        }, {
                            label: 'History',
                            identifier: 'history',
                            active: false
                        }
                    ],
                    title: 'Payment Managements'
                },
                width: [
                    this.tendoo.responsive.isLG(),
                    this.tendoo.responsive.isXL(),
                ].includes(true) ? '700px' : '80%',
                height: [
                    this.tendoo.responsive.isLG(),
                    this.tendoo.responsive.isXL(),
                ].includes(true) ? '700px' : '80%',
            });
        }
        else if (['personal_card_url', 'medical_card_url'].includes(event.menu.namespace)) {
            this.tendoo.get(this.tendoo.baseUrl + "brookr/drivers/" + event.row.id + "/assets/" + event.menu.namespace).subscribe(function (result) {
                window.open(result['data'].url);
            }, function (result) {
                _this.snackbar.open(result['error'].message || result.message, 'OK', { duration: 3000 });
            });
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/drivers/components/list/list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./list.component.scss */ "./src/app/drivers/components/list/list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_4__["TendooService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/drivers/components/loads/loads.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/drivers/components/loads/loads.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9kcml2ZXJzL2NvbXBvbmVudHMvbG9hZHMvbG9hZHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/drivers/components/loads/loads.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/drivers/components/loads/loads.component.ts ***!
  \*************************************************************/
/*! exports provided: LoadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadsComponent", function() { return LoadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _cloud_breeze_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cloud-breeze/core */ "../../dist/cloud-breeze/core/fesm5/cloud-breeze-core.js");
/* harmony import */ var _partials_dashboard_driver_load_status_driver_load_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../partials/dashboard/driver-load-status/driver-load-status.component */ "./src/app/partials/dashboard/driver-load-status/driver-load-status.component.ts");
/* harmony import */ var _partials_dashboard_popup_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../partials/dashboard/popup/popup.component */ "./src/app/partials/dashboard/popup/popup.component.ts");
/* harmony import */ var _partials_dashboard_popups_load_delivery_load_delivery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../partials/dashboard/popups/load-delivery/load-delivery.component */ "./src/app/partials/dashboard/popups/load-delivery/load-delivery.component.ts");
/* harmony import */ var _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @cloud-breeze/utilities */ "../../dist/cloud-breeze/utilities/fesm5/cloud-breeze-utilities.js");
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









var LoadsComponent = /** @class */ (function () {
    function LoadsComponent(tendoo, snackbar, dialog) {
        var _this = this;
        this.tendoo = tendoo;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.assignedCrudConfig = {
            sort: {
                direction: 'desc',
                active: 'created_at'
            },
            search: {},
            page: {},
            query: {},
            bulkMenus: [],
            perPage: {
                per_page: 30
            }
        };
        this.unassignedCrudConfig = {
            sort: {
                direction: 'desc',
                active: 'created_at'
            },
            search: {},
            page: {},
            query: {},
            bulkMenus: [],
            perPage: {
                per_page: 30
            }
        };
        this.sections = [
            {
                title: 'Assigned Loads',
                namespace: 'assigned.loads',
                description: 'Loads assigned to your account.',
                active: false,
                crud: function () {
                    return _this.tendoo.crud.getConfig('brookr.drivers-loads.assigned', __assign(__assign(__assign(__assign(__assign({}, _this.assignedCrudConfig.page), _this.assignedCrudConfig.perPage), _this.assignedCrudConfig.query), _this.assignedCrudConfig.search), _this.assignedCrudConfig.sort));
                }
            }, {
                title: 'Unassigned Loads',
                namespace: 'unassigned.loads',
                description: 'Pending Loads not assigned to a driver.',
                active: false,
                crud: function () {
                    return _this.tendoo.crud.getConfig('brookr.drivers-loads.unassigned', __assign(__assign(__assign(__assign(__assign({}, _this.unassignedCrudConfig.page), _this.unassignedCrudConfig.perPage), _this.unassignedCrudConfig.query), _this.unassignedCrudConfig.search), _this.unassignedCrudConfig.sort));
                }
            }
        ];
    }
    LoadsComponent.prototype.ngOnInit = function () {
        this.setTabActive(this.sections[0]);
    };
    LoadsComponent.prototype.setTabActive = function (tab) {
        this.sections.forEach(function (s) { return s.active = false; });
        tab.active = true;
        this.loadActiveTabConfiguration();
    };
    LoadsComponent.prototype.loadActiveTabConfiguration = function () {
        var _this = this;
        this.active.crud().subscribe(function (config) {
            _this.config = config;
        }, function (result) {
            _this.config = undefined;
            _this.snackbar.open(result['error'].message || result.error, 'OK', { duration: 3000 });
        });
    };
    Object.defineProperty(LoadsComponent.prototype, "active", {
        get: function () {
            return this.sections.filter(function (s) { return s.active; })[0];
        },
        enumerable: true,
        configurable: true
    });
    LoadsComponent.prototype.handleRefresh = function () {
        this.setTabActive(this.active);
    };
    LoadsComponent.prototype.handleSort = function (event) {
        if (this.active.namespace === 'assigned.loads') {
            this.assignedCrudConfig.sort = event;
        }
        else {
            this.unassignedCrudConfig.sort = event;
        }
        this.loadActiveTabConfiguration();
    };
    LoadsComponent.prototype.handleNavigation = function (page) {
        if (this.active.namespace === 'assigned.loads') {
            this.assignedCrudConfig.page = { page: page };
        }
        else {
            this.unassignedCrudConfig.page = { page: page };
        }
        this.loadActiveTabConfiguration();
    };
    LoadsComponent.prototype.handleAction = function (action) {
        var _this = this;
        console.log(action);
        if (action.menu.namespace === 'handle') {
            this.tendoo.get(this.tendoo.baseUrl + "brookr/drivers/is-available").subscribe(function (response) {
                _this.dialog.open(_partials_dashboard_driver_load_status_driver_load_status_component__WEBPACK_IMPORTED_MODULE_5__["DriverLoadStatus"], {
                    id: 'load-handle',
                    data: {
                        load: action['row']
                    },
                    width: _this.tendoo.responsive.isXL() || _this.tendoo.responsive.isLG() || _this.tendoo.responsive.isMD() ? '600px' : '80%',
                    height: _this.tendoo.responsive.isXL() || _this.tendoo.responsive.isLG() || _this.tendoo.responsive.isMD() ? '400px' : '80%',
                }).afterClosed().subscribe(function (_) {
                    _this.setTabActive(_this.active);
                });
            }, function (result) {
                _this.snackbar.open(result['error'].message || result.message, 'OK', { duration: 6000 });
            });
        }
        else if (['rate_document_url'].includes(action.menu.namespace)) {
            this.tendoo.get(this.tendoo.baseUrl + "brookr/loads/" + action.row.id + "/assets/" + action.menu.namespace).subscribe(function (result) {
                window.open(result['data'].url);
            }, function (result) {
                _this.snackbar.open(result['error'].message || result.message, 'OK', { duration: 3000 });
            });
        }
        else if (action.menu.namespace === 'brookr.start-delivery') {
            this.dialog.open(_partials_dashboard_popup_popup_component__WEBPACK_IMPORTED_MODULE_6__["PopupComponent"], {
                id: 'start-delivery',
                data: {
                    title: 'Starting Delivery',
                    formNamespace: 'brookr.drivers-delivery-start',
                    description: 'Please provide (if possible) the drop and load tailer reference.',
                    cancel: function () {
                        _this.dialog.getDialogById('start-delivery').close();
                    },
                    confirm: function (form) {
                        form.sections.forEach(function (s) {
                            _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_8__["ValidationGenerator"].touchAllFields(s.formGroup);
                        });
                        if (form.formGroup.invalid) {
                            return _this.snackbar.open('Unable to proceed the form is not valid.', 'OK', { duration: 3000 });
                        }
                        _this.tendoo.post(_this.tendoo.baseUrl + "brookr/loads/start/" + action.row.id, form.formGroup.value).subscribe(function (result) {
                            _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
                            _this.dialog.getDialogById('start-delivery').close();
                            _this.handleRefresh();
                        }, function (result) {
                            _this.snackbar.open(result['error'].message || result.message, 'OK', { duration: 5000 });
                        });
                    }
                }
            });
        }
        else if (action.menu.namespace === 'brookr.await-load') {
            this.dialog.open(_cloud_breeze_core__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
                id: 'awaiting-load',
                data: {
                    title: 'Awaiting Load',
                    message: 'Confirm you\'ve reached the delivery location and you\'re awaiting load ?',
                    buttons: [
                        {
                            namespace: 'yes',
                            label: 'Yes',
                            onClick: function () {
                                _this.dialog.getDialogById('awaiting-load').close();
                                _this.tendoo.get((_this.tendoo.baseUrl + "brookr/loads/awaiting/{id}").replace('{id}', action.row.id)).subscribe(function (result) {
                                    _this.setTabActive(_this.active);
                                    _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
                                });
                            }
                        }, {
                            namespace: 'no',
                            label: 'No',
                            onClick: function () {
                                _this.dialog.getDialogById('awaiting-load').close();
                            }
                        }
                    ]
                }
            });
        }
        else if (action.menu.namespace === 'brookr.unassign-load') {
            this.dialog.open(_cloud_breeze_core__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
                id: 'brookr.unassign-load',
                data: {
                    title: 'Unassign Yourself',
                    message: 'Would you like to unassign yourself from this delivery ?',
                    buttons: [
                        {
                            namespace: 'yes',
                            label: 'Yes',
                            onClick: function () {
                                _this.tendoo.get((_this.tendoo.baseUrl + "brookr/loads/unassign/{id}").replace('{id}', action.row.id)).subscribe(function (result) {
                                    _this.setTabActive(_this.active);
                                    _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
                                    _this.dialog.getDialogById('brookr.unassign-load').close();
                                });
                            }
                        }, {
                            namespace: 'no',
                            label: 'No',
                            onClick: function () {
                                _this.dialog.getDialogById('brookr.unassign-load').close();
                            }
                        }
                    ]
                }
            });
        }
        else if (action.menu.namespace === 'brookr.send-delivery-document') {
            this.dialog.open(_partials_dashboard_popups_load_delivery_load_delivery_component__WEBPACK_IMPORTED_MODULE_7__["LoadDeliveryComponent"], {
                id: 'brookr.send-delivery-document',
                data: action.row,
                width: [
                    this.tendoo.responsive.isLG(),
                    this.tendoo.responsive.isMD(),
                    this.tendoo.responsive.isXL(),
                ].includes(true) ? '600px' : '80%',
                height: [
                    this.tendoo.responsive.isLG(),
                    this.tendoo.responsive.isMD(),
                    this.tendoo.responsive.isXL(),
                ].includes(true) ? '600px' : '80%',
                disableClose: true
            }).afterClosed().subscribe(function (_) {
                _this.setTabActive(_this.active);
            });
        }
    };
    LoadsComponent.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    LoadsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loads',
            template: __importDefault(__webpack_require__(/*! raw-loader!./loads.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/drivers/components/loads/loads.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./loads.component.scss */ "./src/app/drivers/components/loads/loads.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], LoadsComponent);
    return LoadsComponent;
}());



/***/ }),

/***/ "./src/app/drivers/components/manage/manage.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/drivers/components/manage/manage.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9kcml2ZXJzL2NvbXBvbmVudHMvbWFuYWdlL21hbmFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/drivers/components/manage/manage.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/drivers/components/manage/manage.component.ts ***!
  \***************************************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @cloud-breeze/utilities */ "../../dist/cloud-breeze/utilities/fesm5/cloud-breeze-utilities.js");
/* harmony import */ var _services_drivers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/drivers.service */ "./src/app/services/drivers.service.ts");
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
    function ManageComponent(routeSnapshot, tendoo, client, driversService, snackbar, router) {
        this.routeSnapshot = routeSnapshot;
        this.tendoo = tendoo;
        this.client = client;
        this.driversService = driversService;
        this.snackbar = snackbar;
        this.router = router;
        this.mode = 'create';
        this.id = '';
    }
    ManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSnapshot.paramMap.subscribe(function (param) {
            if (param.get('id')) {
                _this.mode = 'edit';
                _this.id = param.get('id');
            }
            _this.generateForm();
        });
    };
    ManageComponent.prototype.generateForm = function () {
        var _this = this;
        this.tendoo.forms.getPublicForm('brookr.drivers', +this.id > 0 ? +this.id : undefined).subscribe(function (form) {
            _this.form = form;
        });
    };
    ManageComponent.prototype.selectThis = function (section) {
        this.form.sections.forEach(function (s) { return s['active'] = false; });
        section.active = true;
    };
    ManageComponent.prototype.handleFieldChange = function (field) {
        var _this = this;
        if (field.type === 'file-upload' && field.data && typeof field.data['upload'] !== 'undefined') {
            var formData = new FormData;
            formData.append(field.data['upload'].name || 'file', field.control.value);
            formData.append('field', field.data['upload'].name || 'file');
            field.data['upload'].isUploading = true;
            this.tendoo.post(this.tendoo.baseUrl + "brookr/medias/upload", formData).subscribe(function (result) {
                console.log(result);
                field.control.setValue(result.value);
                field.data['upload'].isUploading = false;
            }, function (result) {
                field.data['upload'].isUploading = false;
                _this.snackbar.open(result['error'].message || result.message, 'OK', { duration: 3000 });
            });
        }
    };
    ManageComponent.prototype.handleSubmit = function (form) {
        var _this = this;
        this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_6__["ValidationGenerator"].touchAllFields(s.formGroup); });
        if (this.form.formGroup.invalid) {
            return this.snackbar.open('Unable to proceed, the form is invalid', 'OK', { duration: 3000 });
        }
        this.form.sections.forEach(function (section) {
            section.fields.forEach(function (field) {
                if (field.type === 'ng-datetime') {
                    var formControl = section.formGroup.get(field.name);
                    if (formControl.value) {
                        formControl.setValue(moment__WEBPACK_IMPORTED_MODULE_4__(formControl.value).format('YYYY-MM-DD HH:mm'));
                    }
                }
            });
        });
        this.setFieldsState('disable');
        this.driversService.setDriver(this.form.formGroup.value, +this.id > 0 ? +this.id : null).subscribe(function (result) {
            _this.setFieldsState('enable');
            _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
            if (!_this.id) {
                _this.router.navigateByUrl('/dashboard/drivers');
            }
        }, function (result) {
            _this.snackbar.open(result['error'].message || result['message'] || 'An unexpected error has occured', 'OK', { duration: 3000 });
            _this.setFieldsState('enable');
        });
    };
    ManageComponent.prototype.setFieldsState = function (state) {
        this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_6__["ValidationGenerator"][state === 'disabled' ? 'deactivateFields' : 'enableFields'](s.fields); });
    };
    ManageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_5__["TendooService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _services_drivers_service__WEBPACK_IMPORTED_MODULE_7__["DriversService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    ManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage',
            template: __importDefault(__webpack_require__(/*! raw-loader!./manage.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/drivers/components/manage/manage.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./manage.component.scss */ "./src/app/drivers/components/manage/manage.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_5__["TendooService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_drivers_service__WEBPACK_IMPORTED_MODULE_7__["DriversService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ManageComponent);
    return ManageComponent;
}());



/***/ }),

/***/ "./src/app/drivers/drivers-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/drivers/drivers-routing.module.ts ***!
  \***************************************************/
/*! exports provided: DriversRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversRoutingModule", function() { return DriversRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/drivers/components/list/list.component.ts");
/* harmony import */ var _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/manage/manage.component */ "./src/app/drivers/components/manage/manage.component.ts");
/* harmony import */ var _components_loads_loads_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/loads/loads.component */ "./src/app/drivers/components/loads/loads.component.ts");
/* harmony import */ var _guards_allow_dispatcher_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guards/allow-dispatcher.guard */ "./src/app/guards/allow-dispatcher.guard.ts");
/* harmony import */ var _guards_allow_driver_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../guards/allow-driver.guard */ "./src/app/guards/allow-driver.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        canActivate: [_guards_allow_dispatcher_guard__WEBPACK_IMPORTED_MODULE_5__["AllowDispatcherGuard"]],
        component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]
    }, {
        path: 'create',
        canActivate: [_guards_allow_dispatcher_guard__WEBPACK_IMPORTED_MODULE_5__["AllowDispatcherGuard"]],
        component: _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_3__["ManageComponent"]
    }, {
        path: 'edit/:id',
        canActivate: [_guards_allow_dispatcher_guard__WEBPACK_IMPORTED_MODULE_5__["AllowDispatcherGuard"]],
        component: _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_3__["ManageComponent"]
    }, {
        path: 'loads',
        canActivate: [_guards_allow_driver_guard__WEBPACK_IMPORTED_MODULE_6__["AllowDriverGuard"]],
        component: _components_loads_loads_component__WEBPACK_IMPORTED_MODULE_4__["LoadsComponent"]
    }
];
var DriversRoutingModule = /** @class */ (function () {
    function DriversRoutingModule() {
    }
    DriversRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DriversRoutingModule);
    return DriversRoutingModule;
}());



/***/ }),

/***/ "./src/app/drivers/drivers.module.ts":
/*!*******************************************!*\
  !*** ./src/app/drivers/drivers.module.ts ***!
  \*******************************************/
/*! exports provided: DriversModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversModule", function() { return DriversModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _drivers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drivers-routing.module */ "./src/app/drivers/drivers-routing.module.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/drivers/components/list/list.component.ts");
/* harmony import */ var _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/manage/manage.component */ "./src/app/drivers/components/manage/manage.component.ts");
/* harmony import */ var _declarations_declarations_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../declarations/declarations.module */ "./src/app/declarations/declarations.module.ts");
/* harmony import */ var _components_loads_loads_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/loads/loads.component */ "./src/app/drivers/components/loads/loads.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DriversModule = /** @class */ (function () {
    function DriversModule() {
    }
    DriversModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_components_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_4__["ManageComponent"], _components_loads_loads_component__WEBPACK_IMPORTED_MODULE_6__["LoadsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _drivers_routing_module__WEBPACK_IMPORTED_MODULE_2__["DriversRoutingModule"],
                _declarations_declarations_module__WEBPACK_IMPORTED_MODULE_5__["DeclarationsModule"]
            ]
        })
    ], DriversModule);
    return DriversModule;
}());



/***/ }),

/***/ "./src/app/guards/allow-driver.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/allow-driver.guard.ts ***!
  \**********************************************/
/*! exports provided: AllowDriverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllowDriverGuard", function() { return AllowDriverGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
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




var AllowDriverGuard = /** @class */ (function () {
    function AllowDriverGuard(tendoo, snackbar, router) {
        this.tendoo = tendoo;
        this.snackbar = snackbar;
        this.router = router;
    }
    AllowDriverGuard.prototype.canActivate = function (next, state) {
        var role = this.tendoo.auth.getUser().role.namespace;
        if (role !== 'brookr.driver') {
            switch (role) {
                case 'brookr.dispatcher':
                case 'admin':
                    this.router.navigateByUrl('/dashboard');
                    this.snackbar.open('You\'re not allowed to see this page', 'OK', { duration: 3000 });
                    break;
            }
            return false;
        }
        return true;
    };
    AllowDriverGuard.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_2__["TendooService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AllowDriverGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_2__["TendooService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AllowDriverGuard);
    return AllowDriverGuard;
}());



/***/ })

}]);
//# sourceMappingURL=drivers-drivers-module.js.map