(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
/*!******************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\" class=\"bg-gray-200 h-full flex justify-center items-center\">\r\n    <div class=\"p-2 w-full sm:w-2/3 md:w-1/2 lg:w-2/6 xl:1/4 flex flex-col items-center\">\r\n        <span class=\"brookr-font block text-6xl my-3 text-gray-800\">\r\n            <img class=\"w-64\" [src]=\"urlPrefix + '/assets/images/smm-icon.png'\" alt=\"\">\r\n        </span>\r\n        <div class=\"flex justify-center my-10\" *ngIf=\"! loaded\">\r\n            <mat-progress-spinner diameter=\"60\" mode=\"indeterminate\"></mat-progress-spinner>\r\n        </div>\r\n        <div id=\"login-card\" *ngIf=\"loaded\" class=\"rounded-lg w-full shadow bg-white p-4 mt-2 mb-10\">\r\n            <form [formGroup]=\"form\">\r\n                <cb-field [group]=\"form\" [field]=\"field\" *ngFor=\"let field of fields\"></cb-field>\r\n                <div class=\"button-container py-3 flex justify-end\">\r\n                    <button type=\"submit\" [disabled]=\"isLoggingIn\" (click)=\"login()\" [ngClass]=\"{\r\n                        'bg-pink-700 text-white' : ! isLoggingIn,\r\n                        'bg-pink-500 text-gray-100' : isLoggingIn\r\n                    }\" class=\"rounded shadow px-3 py-2 bg-pink-700 text-white\">Login</button>\r\n                </div>\r\n                <div class=\"button-container py-3 flex justify-center\">\r\n                    <a href=\"#\" class=\"hover:underline text-blue-600 text-sm\">Password Lost ?</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/auth/logout/logout.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/auth/logout/logout.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: 'login',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"]
    }, {
        path: 'logout',
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"]
    }];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cloud-breeze/utilities */ "../../dist/cloud-breeze/utilities/fesm5/cloud-breeze-utilities.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
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







var AuthComponent = /** @class */ (function () {
    function AuthComponent(tendoo, snackbar, router, activatedRoute) {
        this.tendoo = tendoo;
        this.snackbar = snackbar;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loaded = false;
        this.isLoggingIn = false;
        this.urlPrefix = !Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() ? '/modules/brookr/brookr' : '';
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tendoo.fields.getPublicFields('brookr.login').subscribe(function (fields) {
            var result = _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].buildFormGroup(fields);
            _this.form = result.formGroup;
            _this.fields = result.fields;
            _this.loaded = true;
            // debug
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                // this.form.get( 'username' ).setValue( 'paolino' );
                _this.form.get('username').setValue('admin');
                _this.form.get('password').setValue('sanches');
                // this.login();
            }
        }, function (result) {
            _this.snackbar.open(result['error']['message'] || result.message || 'An unexpected error has occured', 'TRY AGAIN')
                .afterDismissed()
                .subscribe(function (action) {
                if (action.dismissedByAction) {
                    _this.ngOnInit();
                }
            });
        });
    };
    AuthComponent.prototype.login = function () {
        var _this = this;
        _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].touchAllFields(this.form);
        if (this.form.invalid) {
            return this.snackbar.open('Unable to proceed the form is not valid.', 'OK', { duration: 3000 });
        }
        this.isLoggingIn = true;
        _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].deactivateFields(this.fields);
        this.tendoo.auth.login(this.form.value).subscribe(function (result) {
            _this.activatedRoute.queryParamMap.subscribe(function (param) {
                _this.tendoo.auth.setCredentials(result['user'], result['token']);
                var now = moment__WEBPACK_IMPORTED_MODULE_6__["now"]();
                _this.tendoo.cookie.set('auth.user', result['token'], moment__WEBPACK_IMPORTED_MODULE_6__(now).add(7, 'days').toDate(), '/');
                _this.tendoo.get(_this.tendoo.baseUrl + "brookr/profile/avatar").subscribe(function (avatar) {
                    var path = param.get('redirect') || (result['user'].role.namespace === 'brookr.drivers' ? '/dashboard/drivers/loads' : '/dashboard');
                    result['user'].avatar = avatar['link'] || null;
                    _this.snackbar.open(result['message'], null, { duration: 3000 });
                    _this.router.navigateByUrl(path);
                });
            });
        }, function (result) {
            _this.isLoggingIn = false;
            _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].enableFields(_this.fields);
            _this.snackbar.open(result['error']['message'] || 'An unexpected error has occored', 'OK', { duration: 5000 });
        });
    };
    AuthComponent.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__["TendooService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __importDefault(__webpack_require__(/*! raw-loader!./auth.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__["TendooService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _declarations_declarations_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../declarations/declarations.module */ "./src/app/declarations/declarations.module.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
                _declarations_declarations_module__WEBPACK_IMPORTED_MODULE_4__["DeclarationsModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/logout/logout.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/logout/logout.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9hdXRoL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/auth/logout/logout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/logout/logout.component.ts ***!
  \*************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
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




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(tendoo, snackbar, router) {
        this.tendoo = tendoo;
        this.snackbar = snackbar;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tendoo.auth.logout().subscribe(function (result) {
            _this.tendoo.cookie.delete('auth.user');
            _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
            _this.router.navigateByUrl('/auth/login');
        });
    };
    LogoutComponent.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./logout.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/auth/logout/logout.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./logout.component.scss */ "./src/app/auth/logout/logout.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map