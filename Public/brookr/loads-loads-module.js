(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loads-loads-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/loads/components/edit/edit.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/loads/components/edit/edit.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-manage [layout]=\"false\"></app-manage>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/loads/components/list/list.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/loads/components/list/list.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-layout>\r\n    <div class=\"mb-4 text-gray-800\">\r\n        <span class=\"block text-2xl mb-2\">Available Loads</span> \r\n        <p class=\"text-sm\">Manage all assigned loads delivery</p>\r\n    </div>\r\n    <div class=\"w-full overflow-auto shadow flex-auto\">\r\n        <!-- <cb-table \r\n            (action)=\"handleAction( $event )\" \r\n            (sort)=\"handleSort( $event )\" \r\n            (refresh)=\"handleRefresh( $event )\" \r\n            (page)=\"handlePagineNavigation( $event )\" \r\n            (search)=\"handleSearch( $event )\"\r\n            (search-status)=\"handleSearchStatus( $event )\"\r\n            [is-loading]=\"isLoading\"\r\n            *ngIf=\"config\" [crud]=\"config\" class=\"w-full\"></cb-table> -->\r\n        <app-table \r\n            (action)=\"handleAction( $event )\"\r\n            (refresh)=\"handleRefresh( $event )\"  \r\n            (search)=\"handleSearch( $event )\"\r\n            (sort)=\"handleSort( $event )\"\r\n            (search-status)=\"handleSearchStatus( $event )\"\r\n            (query-search)=\"handleQuerySearch( $event )\"\r\n            (close-search)=\"handleCloseSearch( $event )\"\r\n            (pageSize)=\"handlePageSize( $event )\"\r\n            (navigate)=\"handleNavigation( $event )\"\r\n            *ngIf=\"config\" \r\n            [config]=\"config\"\r\n            [bulk]=\"bulkMenus\"\r\n            ></app-table>\r\n        <!-- <app-table (sort)=\"handleSort( $event )\" (search)=\"handleSearch( $event )\" [config]=\"config\"></app-table> -->\r\n    </div>   \r\n</app-layout>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/loads/components/manage/manage.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/loads/components/manage/manage.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-layout *ngIf=\"layout\">\r\n    <div class=\"mb-2\" *ngIf=\"mode === 'create'\">\r\n        <p class=\"text-2xl mb-2 font-serif text-gray-800\">Create Load</p>\r\n        <p class=\"text-gray-700\">Loads are assigned to drivers for delivery.</p>\r\n    </div>\r\n    <div class=\"mb-2\" *ngIf=\"mode === 'edit'\">\r\n        <p class=\"text-2xl mb-2 font-serif text-gray-800\">Edit Load</p>\r\n        <p class=\"text-gray-700\">Loads are assigned to drivers for delivery.</p>\r\n    </div>\r\n    <form *ngIf=\"form\" [formGroup]=\"form.formGroup\">\r\n        <div class=\"mb-4\" *ngFor=\"let field of form.sections[0].fields\">\r\n            <input [formControl]=\"field.control\" type=\"text\" class=\"rounded border border-gray-400 p-2 w-full\" placeholder=\"Load Title\">\r\n            <span class=\"text-gray-600 my-1 text-xs block\">Can automatically be generated.</span>\r\n        </div>\r\n        <app-tabs *ngIf=\"form\" [form]=\"form\" (submit)=\"handleSubmit( $event )\"></app-tabs>\r\n    </form>\r\n</app-layout>\r\n<div *ngIf=\"! layout\" class=\"p-4\">\r\n    <div class=\"mb-2\" *ngIf=\"mode === 'create'\">\r\n        <p class=\"text-2xl mb-2 font-serif text-gray-800\">Create Load</p>\r\n        <p class=\"text-gray-700\">Loads are assigned to drivers for delivery.</p>\r\n    </div>\r\n    <div class=\"mb-2\" *ngIf=\"mode === 'edit'\">\r\n        <p class=\"text-2xl mb-2 font-serif text-gray-800\">Edit Load</p>\r\n        <p class=\"text-gray-700\">Loads are assigned to drivers for delivery.</p>\r\n    </div>\r\n    <form *ngIf=\"form\" [formGroup]=\"form.formGroup\">\r\n        <div class=\"mb-4\" *ngFor=\"let field of form.sections[0].fields\">\r\n            <input [formControl]=\"field.control\" type=\"text\" class=\"rounded border border-gray-400 p-2 w-full\" placeholder=\"Load Title\">\r\n            <span class=\"text-gray-600 my-1 text-xs block\">Can automatically be generated.</span>\r\n        </div>\r\n        <app-tabs *ngIf=\"form\" [form]=\"form\" (submit)=\"handleSubmit( $event )\"></app-tabs>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./src/app/loads/components/edit/edit.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/loads/components/edit/edit.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9sb2Fkcy9jb21wb25lbnRzL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/loads/components/edit/edit.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/loads/components/edit/edit.component.ts ***!
  \*********************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
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

var EditComponent = /** @class */ (function () {
    function EditComponent() {
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/loads/components/edit/edit.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit.component.scss */ "./src/app/loads/components/edit/edit.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/loads/components/list/list.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/loads/components/list/list.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9sb2Fkcy9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/loads/components/list/list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/loads/components/list/list.component.ts ***!
  \*********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cloud_breeze_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cloud-breeze/core */ "../../dist/cloud-breeze/core/fesm5/cloud-breeze-core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _partials_dashboard_load_assignation_load_assignation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../partials/dashboard/load-assignation/load-assignation.component */ "./src/app/partials/dashboard/load-assignation/load-assignation.component.ts");
/* harmony import */ var _partials_dashboard_load_status_load_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../partials/dashboard/load-status/load-status.component */ "./src/app/partials/dashboard/load-status/load-status.component.ts");
/* harmony import */ var _partials_dashboard_load_history_load_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../partials/dashboard/load-history/load-history.component */ "./src/app/partials/dashboard/load-history/load-history.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edit/edit.component */ "./src/app/loads/components/edit/edit.component.ts");
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
        this.query = {};
        this.bulkMenus = [];
        this.perPage = {
            per_page: 100
        };
        this.hasLoaded = false;
    }
    ListComponent.prototype.loadConfiguration = function () {
        var _this = this;
        if (this.hasLoaded === false) {
            this.tendoo.crud.getConfig('brookr.loads', __assign(__assign(__assign(__assign(__assign({}, this.page), this.search), this.sort), this.perPage), this.query)).subscribe(function (result) {
                _this.config = result;
            });
            this.hasLoaded = true;
        }
        else {
            this.tendoo.crud.getEntries('brookr.loads', __assign(__assign(__assign(__assign(__assign({}, this.page), this.search), this.sort), this.perPage), this.query)).subscribe(function (results) {
                _this.config = __assign(__assign({}, _this.config), { results: results });
            });
        }
    };
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadConfiguration();
        this.bulkMenus = [{
                label: 'Delete Selected',
                onClick: function (entries) {
                    if (entries.length === 0) {
                        return _this.snackbar.open('Please select at least one element.', 'OK', { duration: 3000 });
                    }
                    _this.dialog.open(_cloud_breeze_core__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], {
                        id: 'confirm-dialog',
                        data: {
                            title: "Confirm your action",
                            message: "Would you like to delete the selected loads.",
                            buttons: [
                                {
                                    namespace: 'yes',
                                    label: 'Yes',
                                    onClick: function () {
                                        _this.dialog.getDialogById('confirm-dialog').close();
                                        _this.tendoo.crud.deleteBulkEntries('brookr.loads', entries.map(function (e) { return e.id; })).subscribe(function (result) {
                                            _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
                                            _this.loadConfiguration();
                                        }, function (result) {
                                            _this.snackbar.open(result['error'].message || result.message, 'OK', { duration: 3000 });
                                        });
                                    }
                                }, {
                                    namespace: 'no',
                                    label: 'No',
                                    onClick: function () {
                                        _this.dialog.getDialogById('confirm-dialog').close();
                                    }
                                }
                            ]
                        }
                    });
                }
            }];
    };
    ListComponent.prototype.handlePageSize = function (event) {
        this.perPage = { per_page: event };
        this.loadConfiguration();
    };
    ListComponent.prototype.handleNavigation = function (page) {
        this.page = { page: page };
        this.ngOnInit();
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
        else if (event.menu.type === 'OPEN' && event.menu.namespace === 'open.assign_driver') {
            this.openLoadAssignation(event.menu);
        }
        else if (event.menu.type === 'OPEN' && event.menu.namespace === 'edit.loads') {
            this.openLoadEdition(event);
        }
        else if (event.menu.type === 'OPEN' && event.menu.namespace === 'open.change_status') {
            this.openLoadChangeStatus(event.menu);
        }
        else if (['rate_document_url', 'delivery_document_url'].includes(event.menu.namespace)) {
            this.tendoo.get(this.tendoo.baseUrl + "brookr/loads/" + event.row.id + "/assets/" + event.menu.namespace).subscribe(function (result) {
                window.open(result['data'].url);
            }, function (result) {
                _this.snackbar.open(result['error'].message || result.message, 'OK', { duration: 3000 });
            });
        }
        else if (event.menu.namespace === 'open.load_history') {
            this.tendoo.get(this.tendoo.baseUrl + "brookr/loads/" + event.row.id + "/history").subscribe(function (history) {
                if (history.length === 0) {
                    return _this.snackbar.open('This load doesn\'t have any history.', 'OK', { duration: 3000 });
                }
                _this.dialog.open(_partials_dashboard_load_history_load_history_component__WEBPACK_IMPORTED_MODULE_8__["LoadHistoryComponent"], {
                    id: 'load-history',
                    data: { history: history },
                    width: [
                        _this.tendoo.responsive.isLG(),
                        _this.tendoo.responsive.isXL(),
                    ].includes(true) ? '40%' : '90%',
                    height: [
                        _this.tendoo.responsive.isLG(),
                        _this.tendoo.responsive.isXL(),
                    ].includes(true) ? '80%' : '90%',
                });
            });
        }
        else if (event.menu.namespace === 'notify_delivery') {
            this.dialog.open(_cloud_breeze_core__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], {
                id: 'notify-delivery',
                width: [
                    this.tendoo.responsive.isLG(),
                    this.tendoo.responsive.isMD(),
                    this.tendoo.responsive.isXL(),
                ].includes(true) ? '30%' : '90%',
                data: {
                    title: 'Notify the delivery',
                    message: 'Would you like to notify the delivery of the Load ? This means the Proof Of Delivery and the Rate Document will be emailed to the company you have assigned on the settings. Please confirm.',
                    buttons: [
                        {
                            namespace: 'yes',
                            label: 'Send',
                            onClick: function () {
                                _this.tendoo.get(event.menu.url.replace('{id}', event.row.id)).subscribe(function (result) {
                                    _this.dialog.getDialogById('notify-delivery').close();
                                    _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
                                }, function (result) {
                                    _this.snackbar.open(result['error'].message || result.message, 'OK', { duration: 6000 });
                                });
                            }
                        }, {
                            namespace: 'no',
                            label: 'Cancel',
                            onClick: function () {
                                _this.dialog.getDialogById('notify-delivery').close();
                            }
                        }
                    ]
                }
            });
        }
    };
    ListComponent.prototype.openLoadChangeStatus = function (menu) {
        var _this = this;
        console.log(menu);
        var dialog = this.dialog.open(_partials_dashboard_load_status_load_status_component__WEBPACK_IMPORTED_MODULE_7__["LoadStatusComponent"], {
            id: 'load-status',
            data: menu,
            height: [
                this.tendoo.responsive.isSM(),
                this.tendoo.responsive.isXS(),
            ].includes(true) ? '80%' : '400px',
            width: [
                this.tendoo.responsive.isSM(),
                this.tendoo.responsive.isXS(),
            ].includes(true) ? '70%' : '500px',
        });
        dialog.afterClosed().subscribe(function (action) {
            _this.ngOnInit();
            console.log(action);
        });
    };
    ListComponent.prototype.openLoadAssignation = function (menu) {
        var _this = this;
        var dialog = this.dialog.open(_partials_dashboard_load_assignation_load_assignation_component__WEBPACK_IMPORTED_MODULE_6__["LoadAssignationComponent"], {
            id: 'assign-load',
            data: menu,
            height: [
                this.tendoo.responsive.isSM(),
                this.tendoo.responsive.isXS(),
            ].includes(true) ? '80%' : '400px',
            width: [
                this.tendoo.responsive.isSM(),
                this.tendoo.responsive.isXS(),
            ].includes(true) ? '70%' : '500px',
        });
        dialog.afterClosed().subscribe(function (action) {
            _this.ngOnInit();
            console.log(action);
        });
    };
    ListComponent.prototype.openLoadEdition = function (menu) {
        console.log(menu);
        var dialog = this.dialog.open(_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"], {
            id: 'edit-load',
            data: { menu: menu },
            height: [
                this.tendoo.responsive.isSM(),
                this.tendoo.responsive.isXS(),
            ].includes(true) ? '80%' : '70%',
            width: [
                this.tendoo.responsive.isSM(),
                this.tendoo.responsive.isXS(),
            ].includes(true) ? '70%' : '70%',
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
    ListComponent.prototype.handleSearchStatus = function (status) {
        if (status === false) {
            this.search = {},
                this.ngOnInit();
        }
    };
    ListComponent.prototype.handleRefresh = function (event) {
        this.ngOnInit();
    };
    ListComponent.prototype.handleCloseSearch = function () {
        this.query = {};
    };
    ListComponent.prototype.handlePagineNavigation = function (event) {
        this.perPage = { per_page: event.pageSize };
        this.page = { page: event.pageIndex + 1 };
        this.ngOnInit();
    };
    ListComponent.prototype.handleQuerySearch = function (event) {
        this.search = {};
        this.query = __assign(__assign({}, event.query), { queryFilter: true });
        this.ngOnInit();
    };
    ListComponent.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_5__["TendooService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/loads/components/list/list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./list.component.scss */ "./src/app/loads/components/list/list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_5__["TendooService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/loads/components/manage/manage.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/loads/components/manage/manage.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9sb2Fkcy9jb21wb25lbnRzL21hbmFnZS9tYW5hZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/loads/components/manage/manage.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/loads/components/manage/manage.component.ts ***!
  \*************************************************************/
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
/* harmony import */ var _services_loads_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/loads.service */ "./src/app/services/loads.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
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
    function ManageComponent(activeSnapShot, tendoo, snackbar, router, loadsService) {
        this.activeSnapShot = activeSnapShot;
        this.tendoo = tendoo;
        this.snackbar = snackbar;
        this.router = router;
        this.loadsService = loadsService;
        this.layout = true;
        this.mode = 'create';
    }
    ManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeSnapShot.paramMap.subscribe(function (param) {
            if (param.get('id') && _this.id === undefined) {
                _this.mode = 'edit';
                _this.id = +param.get('id');
            }
        });
        this.tendoo.forms.getPublicForm('brookr.loads', this.id || undefined).subscribe(function (form) {
            form.sections.forEach(function (s) {
                s.fields.forEach(function (field) {
                    if (field.type === 'ng-datetime') {
                        field['value'] = (new Date(field.value));
                    }
                });
            });
            _this.form = _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].buildForm(form);
            _this.form.sections.forEach(function (section) {
                if (section.namespace === 'main') {
                    section['render'] = false;
                }
            });
            _this.form = form;
        });
    };
    ManageComponent.prototype.handleSubmit = function (form) {
        var _this = this;
        this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].touchAllFields(s.formGroup); });
        if (this.form.formGroup.invalid) {
            return this.snackbar.open('Unable to proceed the form is not valid.', 'OK', { duration: 3000 });
        }
        this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].deactivateFields(s.fields); });
        var formData = new FormData;
        this.form.sections.forEach(function (s) {
            s.fields.forEach(function (field) {
                if (['ng-datetime'].includes(field.type)) {
                    formData.append(s.namespace + '--' + field.name, moment__WEBPACK_IMPORTED_MODULE_6__(field.control.value).format('YYYY-MM-DD HH:mm'));
                }
                else {
                    formData.append(s.namespace + '--' + field.name, field.control.value);
                }
            });
        });
        console.log(formData);
        this.loadsService.registerLoads(formData, this.id).subscribe(function (result) {
            _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
            _this.router.navigateByUrl('/dashboard/loads');
        }, function (result) {
            _this.snackbar.open(result['error'].message || result.message || 'An unexpected error has occured.', 'OK', { duration: 6000 });
            _this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].enableFields(s.fields); });
        });
    };
    ManageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__["TendooService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_loads_service__WEBPACK_IMPORTED_MODULE_5__["LoadsService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('id'),
        __metadata("design:type", Number)
    ], ManageComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('layout'),
        __metadata("design:type", Boolean)
    ], ManageComponent.prototype, "layout", void 0);
    ManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage',
            template: __importDefault(__webpack_require__(/*! raw-loader!./manage.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/loads/components/manage/manage.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./manage.component.scss */ "./src/app/loads/components/manage/manage.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__["TendooService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_loads_service__WEBPACK_IMPORTED_MODULE_5__["LoadsService"]])
    ], ManageComponent);
    return ManageComponent;
}());



/***/ }),

/***/ "./src/app/loads/loads-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/loads/loads-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoadsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadsRoutingModule", function() { return LoadsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/loads/components/list/list.component.ts");
/* harmony import */ var _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/manage/manage.component */ "./src/app/loads/components/manage/manage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"] },
    { path: 'create', component: _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_3__["ManageComponent"] },
    { path: 'edit/:id', component: _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_3__["ManageComponent"] }
];
var LoadsRoutingModule = /** @class */ (function () {
    function LoadsRoutingModule() {
    }
    LoadsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoadsRoutingModule);
    return LoadsRoutingModule;
}());



/***/ }),

/***/ "./src/app/loads/loads.module.ts":
/*!***************************************!*\
  !*** ./src/app/loads/loads.module.ts ***!
  \***************************************/
/*! exports provided: LoadsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadsModule", function() { return LoadsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _loads_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loads-routing.module */ "./src/app/loads/loads-routing.module.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/loads/components/list/list.component.ts");
/* harmony import */ var _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/manage/manage.component */ "./src/app/loads/components/manage/manage.component.ts");
/* harmony import */ var _declarations_declarations_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../declarations/declarations.module */ "./src/app/declarations/declarations.module.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/edit/edit.component */ "./src/app/loads/components/edit/edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoadsModule = /** @class */ (function () {
    function LoadsModule() {
    }
    LoadsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_components_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_4__["ManageComponent"], _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _loads_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoadsRoutingModule"],
                _declarations_declarations_module__WEBPACK_IMPORTED_MODULE_5__["DeclarationsModule"]
            ]
        })
    ], LoadsModule);
    return LoadsModule;
}());



/***/ })

}]);
//# sourceMappingURL=loads-loads-module.js.map