(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-layout>\r\n    <div class=\"flex justify-between items-center mb-3\">\r\n        <span class=\"text-2xl text-gray-700 mb-4 block\">Activity Overview</span>\r\n        <button (click)=\"refreshDashboardReport()\" class=\"rounded-lg border hover:border-green-400 border-gray-400 h-10 w-10 flex items-center justify-center hover:bg-green-100\"><mat-icon>refresh</mat-icon></button>\r\n    </div>\r\n    <div class=\"top-dashboard flex flex-wrap md:-mx-4\">\r\n        <div class=\"flex-auto px-4 w-full md:w-1/3\">\r\n            <div class=\"rounded p-4 bg-green-200 flex\">\r\n                <div class=\"w-20 h-20 rounded flex items-center justify-center\">\r\n                    <img [src]=\"urlPrefix + '/assets/images/trailer.png'\" alt=\"\">\r\n                </div>\r\n                <div class=\"flex-auto pl-4\">\r\n                    <p class=\"text-sm text-green-800 font-semibold\">Loads This Week</p>\r\n                    <p class=\"text-4xl text-green-800 font-extrabold\">{{ dashboardReport.current.total_loads }}</p>\r\n                    <div class=\"flex justify-between items-end text-green-600\">\r\n                        <span class=\"text-xs\">{{ percentage( 'week_total_loads' ) + '%' }}\r\n                        </span>\r\n                        <span class=\"text-xs\">{{ dashboardReport.previous.week_pending_loads }} Last week</span>\r\n                    </div>\r\n                    <div class=\"flex justify-between items-end text-green-600\">\r\n                        <span class=\"text-xs\">{{ dashboardReport.current.week_pending_loads }} Pending</span>\r\n                        <span class=\"text-xs\">{{ dashboardReport.current.week_ongoing_loads }} Ongoing</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"flex-auto px-4 w-full md:w-1/3\">\r\n            <div class=\"rounded p-4 bg-blue-200 flex\">\r\n                <div class=\"w-20 h-20 rounded flex items-center justify-center\">\r\n                    <img [src]=\"urlPrefix + '/assets/images/income.png'\" alt=\"\">\r\n                </div>\r\n                <div class=\"flex-auto pl-4\">\r\n                    <p class=\"text-sm text-blue-800 font-semibold\">Income This week</p>\r\n                    <p class=\"text-4xl text-blue-800 font-extrabold\">{{ dashboardReport.current.total_incomes }}</p>\r\n                    <div class=\"flex justify-between items-end text-blue-600\">\r\n                        <span class=\"text-xs\">{{ percentage( 'week_total_incomes' ) + '%' }}</span>\r\n                        <span class=\"text-xs\">{{ dashboardReport.previous.total_incomes }} Last week</span>\r\n                    </div>\r\n                    <div class=\"flex justify-between items-end text-blue-600\">\r\n                        <span class=\"text-xs\">-</span>\r\n                        <span class=\"text-xs\">-</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"flex-auto px-4 w-full md:w-1/3\">\r\n            <div class=\"rounded p-4 bg-orange-200 flex\">\r\n                <div class=\"w-20 h-20 rounded flex items-center justify-center\">\r\n                    <img [src]=\"urlPrefix + '/assets/images/steering-wheel.png'\" alt=\"\">\r\n                </div> \r\n                <div class=\"flex-auto pl-4\">\r\n                    <p class=\"text-sm text-orange-800 font-semibold\">Drivers Avaialble</p>\r\n                    <p class=\"text-4xl text-orange-800 font-extrabold\">{{ dashboardReport.current.total_drivers }}</p>\r\n                    <div class=\"flex justify-between items-end text-orange-600\">\r\n                        <span class=\"text-xs\">Available Drivers {{ dashboardReport.current.unassigned_drivers }}</span>\r\n                        <span class=\"text-xs\">Trucks {{ dashboardReport.current.total_trucks }}</span>\r\n                    </div>\r\n                    <div class=\"flex justify-between items-end text-orange-600\">\r\n                        <span class=\"text-xs\">Available Trucks {{ dashboardReport.current.available_trucks }}</span>\r\n                        <span class=\"text-xs\">Assigned {{ dashboardReport.current.assigned_trucks }}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"md:-mx-4 my-4 flex flex-wrap\">\r\n        <div class=\"px-4 w-full md:w-1/3\">\r\n            <div class=\"bg-gray-200 mb-4\">\r\n                <div class=\"title text-xl border-b border-gray-400 p-4 text-gray-700\">Medical Expiration</div>\r\n                <div class=\"content\">\r\n                    <ul>\r\n                        <li *ngFor=\"let driver of driversByMedical\" class=\"px-4 py-2 border-b border-gray-300 flex justify-between items-center\">\r\n                            <span class=\"text-gray-700 flex flex-auto justify-between items-center\">\r\n                                <span>{{ driver.first_name }} {{ driver.last_name }}</span>\r\n                                <span *ngIf=\"driver.medical_card_expiration\">{{ driver.medical_card_expiration | date }}</span>\r\n                                <span *ngIf=\"! driver.medical_card_expiration\">N/A</span>\r\n                            </span>\r\n                            <div class=\"ml-4\"><button [routerLink]=\"'/dashboard/drivers/edit/' + driver.driver_id\" class=\"rounded-lg bg-white px-2 py-1 shadow text-sm hover:bg-green-400 hover:text-white\">Edit</button></div>\r\n                        </li>\r\n                        <li class=\"px-4 py-2 border-b border-gray-300 flex justify-center items-center\">\r\n                            <a class=\"text-gray-700 hover:text-green-600 hover:text-underline\" routerLink=\"/dashboard/drivers\">See Full List</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"bg-gray-200 mb-4\">\r\n                <div class=\"title text-xl border-b border-gray-400 p-4 text-gray-700\">License Expiration</div>\r\n                <div class=\"content\">\r\n                    <ul>\r\n                        <li *ngFor=\"let driver of driversByLicense\" class=\"px-4 py-2 border-b border-gray-300 flex justify-between items-center\">\r\n                            <span class=\"text-gray-700 flex flex-auto justify-between items-center\">\r\n                                <span>{{ driver.first_name }} {{ driver.last_name }}</span>\r\n                                <span *ngIf=\"driver.driving_license_expiration\">{{ driver.driving_license_expiration | date }}</span>\r\n                                <span *ngIf=\"! driver.driving_license_expiration\">N/A</span>\r\n                            </span>\r\n                            <div class=\"ml-4\"><button [routerLink]=\"'/dashboard/drivers/edit/' + driver.driver_id\" class=\"rounded-lg bg-white px-2 py-1 shadow text-sm hover:bg-green-400 hover:text-white\">Edit</button></div>\r\n                        </li>\r\n                        <li class=\"px-4 py-2 border-b border-gray-300 flex justify-center items-center\">\r\n                            <a class=\"text-gray-700 hover:text-green-600 hover:text-underline\" routerLink=\"/dashboard/drivers\">See Full List</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"px-4 md:w-2/3 w-full\">\r\n            <div class=\"bg-teal-200\">\r\n                <div class=\"title text-xl border-b border-teal-400 p-4 text-gray-700\">Unassigned Loads</div>\r\n                <div class=\"content\">\r\n                    <ul>\r\n                        <li *ngFor=\"let load of unassignedLoads\" class=\"px-4 py-2 border-b border-teal-300 flex justify-between items-center\">\r\n                            <span class=\"text-teal-700 flex flex-auto justify-between mr-4\">\r\n                                <div class=\"flex flex-col\">\r\n                                    <span class=\"text-lg block\">{{ load.name }}</span>\r\n                                    <span class=\"text-xs mt-1 block\">Load Ref : {{ load.load_reference }}</span>\r\n                                    <span class=\"text-xs mt-1 block\">Pickup Ref : {{ load.pickup_reference }}</span>\r\n                                </div>\r\n\r\n                                <span>{{ load.pickup_date | date }}</span>\r\n                            </span>\r\n                            <div><button [routerLink]=\"'/dashboard/loads/edit/' + load.id\" class=\"rounded-lg bg-white px-2 py-1 shadow text-sm hover:bg-teal-600 hover:text-white\">Assign</button></div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"md:-mx-4 my-4 flex\">\r\n        <div class=\"px-4 md:w-1/3\">\r\n            \r\n        </div>\r\n        <div class=\"px-4 md:w-2/3\">\r\n            <!-- <div class=\"bg-indigo-200\">\r\n                <div class=\"title text-xl border-b border-indigo-400 p-4 text-gray-700\">Unassigned Loads</div>\r\n                <div class=\"content\">\r\n                    <ul>\r\n                        <li class=\"px-4 py-2 border-b border-indigo-300 flex justify-between items-center\">\r\n                            <span class=\"text-indigo-700\">John Doe - 2020-09-09</span>\r\n                            <div><button class=\"rounded-lg bg-white px-2 py-1 shadow text-sm hover:bg-indigo-600 hover:text-white\">Assign</button></div>\r\n                        </li>\r\n                        <li class=\"px-4 py-2 border-b border-indigo-300 flex justify-between items-center\">\r\n                            <span class=\"text-indigo-700\">John Doe - 2020-09-09</span>\r\n                            <div><button class=\"rounded-lg bg-white px-2 py-1 shadow text-sm hover:bg-indigo-600 hover:text-white\">Assign</button></div>\r\n                        </li>\r\n                        <li class=\"px-4 py-2 border-b border-indigo-300 flex justify-between items-center\">\r\n                            <span class=\"text-indigo-700\">John Doe - 2020-09-09</span>\r\n                            <div><button class=\"rounded-lg bg-white px-2 py-1 shadow text-sm hover:bg-indigo-600 hover:text-white\">Assign</button></div>\r\n                        </li>\r\n                        <li class=\"px-4 py-2 border-b border-indigo-300 flex justify-between items-center\">\r\n                            <span class=\"text-indigo-700\">John Doe - 2020-09-09</span>\r\n                            <div><button class=\"rounded-lg bg-white px-2 py-1 shadow text-sm hover:bg-indigo-600 hover:text-white\">Assign</button></div>\r\n                        </li>\r\n                        <li class=\"px-4 py-2 border-b border-indigo-300 flex justify-between items-center\">\r\n                            <span class=\"text-indigo-700\">John Doe - 2020-09-09</span>\r\n                            <div><button class=\"rounded-lg bg-white px-2 py-1 shadow text-sm hover:bg-indigo-600 hover:text-white\">Assign</button></div>\r\n                        </li>\r\n                        <li class=\"px-4 py-2 border-b border-indigo-300 flex justify-between items-center\">\r\n                            <span class=\"text-indigo-700\">John Doe - 2020-09-09</span>\r\n                            <div><button class=\"rounded-lg bg-white px-2 py-1 shadow text-sm hover:bg-indigo-600 hover:text-white\">Assign</button></div>\r\n                        </li>\r\n                        <li class=\"px-4 py-2 border-b border-indigo-300 flex justify-center items-center\">\r\n                            <a class=\"text-indigo-700 hover:text-green-600 hover:text-underline\" routerLink=\"/dashboard/loads\">See Full List</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n</app-layout>");

/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/services/dashboard.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_drivers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/drivers.service */ "./src/app/services/drivers.service.ts");
/* harmony import */ var _services_loads_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loads.service */ "./src/app/services/loads.service.ts");
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






var defaultValues = {
    total_loads: 0,
    total_incomes: 0,
    total_drivers: 0,
    total_trucks: 0,
    week_total_loads: 0,
    week_ongoing_loads: 0,
    week_pending_loads: 0,
    week_total_drivers: 0,
    week_total_incomes: 0,
    week_total_trucks: 0,
    assigned_drivers: 0,
    unassigned_drivers: 0,
    unavailable_drivers: 0,
    available_trucks: 0,
    assigned_trucks: 0,
};
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(tendoo, dashboard, drivers, loads) {
        this.tendoo = tendoo;
        this.dashboard = dashboard;
        this.drivers = drivers;
        this.loads = loads;
        this.dashboardReport = {
            current: defaultValues,
            previous: defaultValues
        };
        this.tableCrud = {
            columns: {
                load: {
                    label: 'Load',
                },
                status: {
                    label: 'Status'
                },
                driver: {
                    label: 'Driver'
                }
            },
            labels: {
                list_title: 'Ongoing Loads',
                list_description: 'display all ongoing loads',
                create_title: 'Create Load',
                create_description: 'Will create new load',
                edit_title: 'Edit an existing load',
                edit_description: 'Load will be edited'
            },
            namespace: 'brookr.loads',
            fields: [],
            links: {},
        };
        this.urlPrefix = !Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() ? '/modules/brookr/brookr' : '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
            this.dashboard.getReport(),
            this.drivers.getByMedicalCard(),
            this.drivers.getByDriverCard(),
            this.loads.getUnassignedLoads(),
        ]).subscribe(function (result) {
            _this.parseReport(result[0]);
            _this.driversByMedical = result[1];
            _this.driversByLicense = result[2];
            _this.unassignedLoads = result[3];
        });
    };
    DashboardComponent.prototype.parseReport = function (report) {
        this.dashboardReport.current = report.current || this.dashboardReport.current;
        this.dashboardReport.previous = report.previous || this.dashboardReport.previous;
    };
    DashboardComponent.prototype.percentage = function (argument) {
        if (this.dashboardReport.current[argument] !== 0 && this.dashboardReport.previous[argument] !== 0) {
            return ((this.dashboardReport.current[argument] - this.dashboardReport.previous[argument]) * 100) / this.dashboardReport.current[argument];
        }
        return 0;
    };
    DashboardComponent.prototype.refreshDashboardReport = function () {
        var _this = this;
        this.dashboard.refreshReport().subscribe(function (result) {
            _this.ngOnInit();
        });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"] },
        { type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] },
        { type: _services_drivers_service__WEBPACK_IMPORTED_MODULE_4__["DriversService"] },
        { type: _services_loads_service__WEBPACK_IMPORTED_MODULE_5__["LoadsService"] }
    ]; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"],
            _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"],
            _services_drivers_service__WEBPACK_IMPORTED_MODULE_4__["DriversService"],
            _services_loads_service__WEBPACK_IMPORTED_MODULE_5__["LoadsService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _declarations_declarations_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../declarations/declarations.module */ "./src/app/declarations/declarations.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _declarations_declarations_module__WEBPACK_IMPORTED_MODULE_5__["DeclarationsModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/services/dashboard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
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


var DashboardService = /** @class */ (function () {
    function DashboardService(tendoo) {
        this.tendoo = tendoo;
    }
    DashboardService.prototype.getReport = function () {
        return this.tendoo.post(this.tendoo.baseUrl + "brookr/dashboard", {});
    };
    DashboardService.prototype.refreshReport = function () {
        return this.tendoo.post(this.tendoo.baseUrl + "brookr/dashboard/refresh", {});
    };
    DashboardService.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"] }
    ]; };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map