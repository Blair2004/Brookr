(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/cloud-breeze/core/fesm5/cloud-breeze-core.js":
/*!*********************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/dist/cloud-breeze/core/fesm5/cloud-breeze-core.js ***!
  \*********************************************************************************************************************/
/*! exports provided: CoreModule, CrudTableComponent, DialogComponent, FieldsComponent, LoadingAnimationComponent, MY_MOMENT_FORMATS, MaterialModule, MenuListComponent, SubMenuListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudTableComponent", function() { return CrudTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsComponent", function() { return FieldsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingAnimationComponent", function() { return LoadingAnimationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_MOMENT_FORMATS", function() { return MY_MOMENT_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListComponent", function() { return MenuListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenuListComponent", function() { return SubMenuListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "../../node_modules/@angular/material/fesm5/divider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/fesm5/card.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/fesm5/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ "../../node_modules/@angular/material/fesm5/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/fesm5/paginator.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm5/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/fesm5/menu.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ "../../node_modules/@angular/material/fesm5/progress-bar.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/fesm5/checkbox.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_captcha__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-captcha */ "../../node_modules/ngx-captcha/fesm5/ngx-captcha.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/fesm5/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "../../node_modules/@angular/material/fesm5/datepicker.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/extended */ "../../node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/fesm5/progress-spinner.js");
/* harmony import */ var _danielmoncada_angular_datetime_picker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @danielmoncada/angular-datetime-picker */ "../../node_modules/@danielmoncada/angular-datetime-picker/fesm2015/danielmoncada-angular-datetime-picker.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/fesm5/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/fesm5/core.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ "../../node_modules/@angular/material/fesm5/slide-toggle.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-image-cropper */ "../../node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/fesm5/list.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material-moment-adapter */ "../../node_modules/@angular/material-moment-adapter/fesm5/material-moment-adapter.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/expansion */ "../../node_modules/@angular/material/fesm5/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/grid-list */ "../../node_modules/@angular/material/fesm5/grid-list.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "../../node_modules/@angular/material/fesm5/radio.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/fesm5/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "../../node_modules/@angular/material/fesm5/slider.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/fesm5/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/fesm5/toolbar.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "../../node_modules/@angular/cdk/fesm5/drag-drop.js");








































function DialogComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    var _r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "button", 7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function DialogComponent_ng_container_10_Template_button_click_1_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r3); var button_r1 = ctx.$implicit; var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r2.handle(button_r1); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "span", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(4, "mat-divider", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    var button_r1 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(button_r1.label);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("vertical", true);
} }
var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialog, data, snackBar) {
        this.dialog = dialog;
        this.data = data;
        this.snackBar = snackBar;
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    /**
     * Handle Press Events
     * @param Button
     * @return void
     */
    DialogComponent.prototype.handle = function (button) {
        if (typeof button.onClick == 'function') {
            button.onClick();
        }
    };
    DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
    DialogComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: DialogComponent, selectors: [["cb-dialog"]], hostAttrs: [2, "flex-direction", "column", "box-sizing", "border-box", "display", "flex", "height", "100%"], decls: 11, vars: 3, consts: [["fxLayout", "column", "fxFill", ""], ["fxFlex", "auto", "fxLayout", "column", "fxLayoutAlign", "start start"], ["fxLayoutAlign", "center center", "fxFill", "", 1, "dialog-text", "p-2", "px-4"], [1, "mat-h1", "m-0", "pt-3"], [1, "mat-body-1"], ["fxLayout", "row", "fxFlex", "50px", "fxLayoutAlign", "stretch stretch"], [4, "ngFor", "ngForOf"], ["fxFlex", "auto", "mat-button", "", 3, "click"], [1, "mat-subheading-2"], [3, "vertical"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 2);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "p", 3);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(5);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(6, "p", 4);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(7);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(8, "mat-divider");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(9, "div", 5);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(10, DialogComponent_ng_container_10_Template, 5, 2, "ng-container", 6);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        } if (rf & 2) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(5);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx.data.title, " ");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx.data.message);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx.data.buttons);
        } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: [".dialog-text{text-align:center}:host{width:100%}"], encapsulation: 2 });
    return DialogComponent;
}());
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cb-dialog',
                templateUrl: './dialog.component.html',
                styleUrls: ['./dialog.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                host: {
                    style: 'flex-direction: column; box-sizing: border-box; display: flex; height: 100%;',
                }
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, null); })();

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args.limit === undefined ? 20 : parseInt(args.limit);
        return value.length > limit ? value.substr(0, limit) + '...' : value;
    };
    TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
    TruncatePipe.ɵpipe = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"])({ name: "truncate", type: TruncatePipe, pure: true });
    return TruncatePipe;
}());
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(TruncatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'truncate'
            }]
    }], null, null); })();

function CrudTableComponent_mat_card_0_mat_card_title_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-card-title", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "button", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function CrudTableComponent_mat_card_0_mat_card_title_1_Template_button_click_2_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r10); var ctx_r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); return ctx_r9.toggleSearch(false); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "mat-icon");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(4, "close");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(5, "input", 15, 16);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(7, "button", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function CrudTableComponent_mat_card_0_mat_card_title_1_Template_button_click_7_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r10); var _r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(6); var ctx_r11 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); return ctx_r11.search(_r8); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(8, "mat-icon");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(9, "search");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("placeholder", ctx_r1.labels.search);
} }
function CrudTableComponent_mat_card_0_mat_card_title_2_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "button", 19);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "mat-icon");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(4, "add");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "button", 20);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function CrudTableComponent_mat_card_0_mat_card_title_2_div_1_Template_button_click_5_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r15); var ctx_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r14.toggleRefresh(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(6, "mat-icon");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(7, "refresh");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(8, "button", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function CrudTableComponent_mat_card_0_mat_card_title_2_div_1_Template_button_click_8_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r15); var ctx_r16 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r16.toggleSearch(true); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(9, "mat-icon");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(10, "search");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r12 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("routerLink", ctx_r12._crud.links.create);
} }
function CrudTableComponent_mat_card_0_mat_card_title_2_div_2_button_17_Template(rf, ctx) { if (rf & 1) {
    var _r21 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 28);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function CrudTableComponent_mat_card_0_mat_card_title_2_div_2_button_17_Template_button_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r21); var ctx_r20 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(4); return ctx_r20.deleteSelectedEntries(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, " Delete ");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "mat-icon");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3, "delete");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function CrudTableComponent_mat_card_0_mat_card_title_2_div_2_button_18_Template(rf, ctx) { if (rf & 1) {
    var _r24 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 29);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function CrudTableComponent_mat_card_0_mat_card_title_2_div_2_button_18_Template_button_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r24); var action_r22 = ctx.$implicit; var ctx_r23 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(4); return action_r22.onClick(ctx_r23.selectedEntries); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var action_r22 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(action_r22.label);
} }
function CrudTableComponent_mat_card_0_mat_card_title_2_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r26 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 21);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "button", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function CrudTableComponent_mat_card_0_mat_card_title_2_div_2_Template_button_click_2_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r26); var ctx_r25 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r25.cancel(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "mat-icon");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(4, "arrow_back");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "span", 22);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(7, "div");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(8, "mat-menu", null, 23);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(10, "button", 24);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(11, "mat-icon");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(12, "more_vert");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(13, "button", 25);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(14, " Export ");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(15, "mat-icon");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(16, "import_export");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(17, CrudTableComponent_mat_card_0_mat_card_title_2_div_2_button_17_Template, 4, 0, "button", 26);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(18, CrudTableComponent_mat_card_0_mat_card_title_2_div_2_button_18_Template, 2, 1, "button", 27);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var _r17 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(9);
    var ctx_r13 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("", ctx_r13.selectedEntries.length, " selected");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("matMenuTriggerFor", _r17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r13.hasSelectedEntries);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r13.bulkActions);
} }
function CrudTableComponent_mat_card_0_mat_card_title_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-card-title", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, CrudTableComponent_mat_card_0_mat_card_title_2_div_1_Template, 11, 1, "div", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, CrudTableComponent_mat_card_0_mat_card_title_2_div_2_Template, 19, 4, "div", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx_r2.hasSelectedEntries);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r2.hasSelectedEntries);
} }
function CrudTableComponent_mat_card_0_mat_divider_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "mat-divider");
} }
function CrudTableComponent_mat_card_0_mat_progress_bar_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "mat-progress-bar", 30);
} }
function CrudTableComponent_mat_card_0_ng_container_7_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    var _r34 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "th", 34);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "mat-checkbox", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("change", function CrudTableComponent_mat_card_0_ng_container_7_ng_container_1_th_1_Template_mat_checkbox_change_1_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r34); var ctx_r33 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(4); return ctx_r33.checkAllCheckboxes(); })("ngModelChange", function CrudTableComponent_mat_card_0_ng_container_7_ng_container_1_th_1_Template_mat_checkbox_ngModelChange_1_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r34); var ctx_r35 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(4); return ctx_r35.checkAll = $event; });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r31 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngModel", ctx_r31.checkAll);
} }
function CrudTableComponent_mat_card_0_ng_container_7_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    var _r38 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "td", 36);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "mat-checkbox", 37);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function CrudTableComponent_mat_card_0_ng_container_7_ng_container_1_td_2_Template_mat_checkbox_ngModelChange_1_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r38); var element_r36 = ctx.$implicit; return element_r36.$checked = $event; });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var element_r36 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngModel", element_r36.$checked);
} }
function CrudTableComponent_mat_card_0_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, CrudTableComponent_mat_card_0_ng_container_7_ng_container_1_th_1_Template, 2, 1, "th", 32);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, CrudTableComponent_mat_card_0_ng_container_7_ng_container_1_td_2_Template, 2, 1, "td", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} }
function CrudTableComponent_mat_card_0_ng_container_7_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "th", 40);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var column_r27 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2).$implicit;
    var ctx_r39 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r39.columns[column_r27].label);
} }
function CrudTableComponent_mat_card_0_ng_container_7_ng_container_2_td_2_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r48 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 29);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function CrudTableComponent_mat_card_0_ng_container_7_ng_container_2_td_2_button_3_Template_button_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r48); var menu_r45 = ctx.$implicit; var element_r42 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit; var ctx_r46 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(4); return ctx_r46.triggerMenu(menu_r45, element_r42); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var menu_r45 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(menu_r45.label);
} }
function CrudTableComponent_mat_card_0_ng_container_7_ng_container_2_td_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "td", 41);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "mat-menu", null, 42);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, CrudTableComponent_mat_card_0_ng_container_7_ng_container_2_td_2_button_3_Template, 2, 1, "button", 27);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "button", 43);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "mat-icon");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(6, "more_vert");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var element_r42 = ctx.$implicit;
    var _r43 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", element_r42.$actions);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("matMenuTriggerFor", _r43);
} }
function CrudTableComponent_mat_card_0_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, CrudTableComponent_mat_card_0_ng_container_7_ng_container_2_th_1_Template, 2, 1, "th", 38);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, CrudTableComponent_mat_card_0_ng_container_7_ng_container_2_td_2_Template, 7, 2, "td", 39);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} }
function CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_th_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "th", 45);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var column_r27 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2).$implicit;
    var ctx_r49 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("mat-sort-header", column_r27);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx_r49.columns[column_r27].label, " ");
} }
function CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_td_2_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    var column_r27 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(5).$implicit;
    var ctx_r57 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx_r57.columns[column_r27].replace[0], " ");
} }
function CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_td_2_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    var column_r27 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(5).$implicit;
    var ctx_r58 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx_r58.columns[column_r27].replace[1], " ");
} }
function CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_td_2_ng_container_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    var column_r27 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(5).$implicit;
    var ctx_r59 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx_r59.columns[column_r27].replace["$default"] ? ctx_r59.columns[column_r27].replace["$default"] : "N/A", " ");
} }
function CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_td_2_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_td_2_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_td_2_ng_container_1_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_td_2_ng_container_1_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    var element_r52 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2).$implicit;
    var column_r27 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2).$implicit;
    var ctx_r55 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", element_r52[column_r27] === false || element_r52[column_r27] === 0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", element_r52[column_r27] === true || element_r52[column_r27] === 1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r55.columnReplaceNotSet(element_r52, column_r27));
} }
function CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_td_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} }
function CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_td_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_td_2_ng_container_1_ng_container_1_Template, 4, 3, "ng-container", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_td_2_ng_container_1_ng_container_2_Template, 2, 0, "ng-container", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    var element_r52 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit;
    var column_r27 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2).$implicit;
    var ctx_r53 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r53.columns[column_r27].type === "boolean");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", element_r52[column_r27].type === "content");
} }
function CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_td_2_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(2, "truncate");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var element_r52 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2).$implicit;
    var column_r27 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2).$implicit;
    var ctx_r67 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"])(2, 1, element_r52[column_r27], ctx_r67.columns[column_r27].truncate), " ");
} }
function CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_td_2_ng_container_2_span_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var element_r52 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2).$implicit;
    var column_r27 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2).$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", element_r52[column_r27], " ");
} }
function CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_td_2_ng_container_2_span_1_Template, 3, 4, "span", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_td_2_ng_container_2_span_2_Template, 2, 1, "span", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    var column_r27 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3).$implicit;
    var ctx_r54 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r54.columns[column_r27].truncate);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx_r54.columns[column_r27].truncate);
} }
function CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_td_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "td", 41);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_td_2_ng_container_1_Template, 3, 2, "ng-container", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_td_2_ng_container_2_Template, 3, 2, "ng-container", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var column_r27 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2).$implicit;
    var ctx_r50 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r50.columns[column_r27].replace !== undefined);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r50.columns[column_r27].replace === undefined);
} }
function CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_th_1_Template, 2, 2, "th", 44);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_td_2_Template, 3, 2, "td", 39);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} }
function CrudTableComponent_mat_card_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0, 31);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, CrudTableComponent_mat_card_0_ng_container_7_ng_container_1_Template, 3, 0, "ng-container", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, CrudTableComponent_mat_card_0_ng_container_7_ng_container_2_Template, 3, 0, "ng-container", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, CrudTableComponent_mat_card_0_ng_container_7_ng_container_3_Template, 3, 0, "ng-container", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    var column_r27 = ctx.$implicit;
    var ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("matColumnDef", column_r27);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", column_r27 === "id");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", column_r27 === "$actions");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r5.reservedColumns.indexOf(column_r27) === 0 - 1);
} }
function CrudTableComponent_mat_card_0_tr_8_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "tr", 46);
} }
function CrudTableComponent_mat_card_0_tr_9_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "tr", 47);
} }
var _c0 = function () { return [10, 30, 100, 200]; };
function CrudTableComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    var _r77 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-card", 1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, CrudTableComponent_mat_card_0_mat_card_title_1_Template, 10, 1, "mat-card-title", 2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, CrudTableComponent_mat_card_0_mat_card_title_2_Template, 3, 2, "mat-card-title", 3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, CrudTableComponent_mat_card_0_mat_divider_3_Template, 1, 0, "mat-divider", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, CrudTableComponent_mat_card_0_mat_progress_bar_4_Template, 1, 0, "mat-progress-bar", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "mat-card-content", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(6, "table", 7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("matSortChange", function CrudTableComponent_mat_card_0_Template_table_matSortChange_6_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r77); var ctx_r76 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r76.sortData($event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, CrudTableComponent_mat_card_0_ng_container_7_Template, 4, 4, "ng-container", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(8, CrudTableComponent_mat_card_0_tr_8_Template, 1, 0, "tr", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(9, CrudTableComponent_mat_card_0_tr_9_Template, 1, 0, "tr", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(10, "mat-paginator", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("page", function CrudTableComponent_mat_card_0_Template_mat_paginator_page_10_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r77); var ctx_r78 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r78.changePage($event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(11, "mat-card-footer");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r0.searchEnabled);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx_r0.searchEnabled);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx_r0.isLoading);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r0.isLoading);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("dataSource", ctx_r0._crud.results["data"]);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r0.columnsNames);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("matHeaderRowDef", ctx_r0.columnsNames);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("matRowDefColumns", ctx_r0.columnsNames);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("length", ctx_r0.totalEntries)("pageSize", ctx_r0.perPage)("pageSizeOptions", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"])(11, _c0));
} }
var _c1 = [[["column"]]];
var _c2 = ["column"];
var CrudTableComponent = /** @class */ (function () {
    function CrudTableComponent(dialog, router, snackbar) {
        this.dialog = dialog;
        this.router = router;
        this.snackbar = snackbar;
        this.isLoading = false;
        this.bulkActions = [];
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchValue = '';
        this.columnsNames = [];
        this.searchEnabled = false;
        this.reservedColumns = ['$actions'];
        this.noResponseMsg = 'The action has returned no response';
        this.labels = {
            search: 'Search',
            itemsPerPage: 'Items per page'
        };
    }
    Object.defineProperty(CrudTableComponent.prototype, "crud", {
        get: function () {
            return this._crud;
        },
        set: function (value) {
            this._crud = value;
            this.columns = this._crud.columns;
            this.columnsNames = Object.keys(this._crud.columns);
            this.labels = Object.assign(this.labels, this._crud.labels);
        },
        enumerable: true,
        configurable: true
    });
    CrudTableComponent.prototype.isNumber = function (number) {
        return !isNaN(number);
    };
    CrudTableComponent.prototype.ngOnChanges = function (changes) {
        var crud = changes.crud;
    };
    CrudTableComponent.prototype.columnReplaceNotSet = function (element, column) {
        return (element[column] !== true && element[column] !== false) && isNaN(element[column]);
    };
    CrudTableComponent.prototype.ngOnInit = function () {
        this.columnsNames = Object.keys(this.crud.columns);
        this.columns = this.crud.columns;
        this.labels = Object.assign(this.labels, this.crud.labels);
    };
    CrudTableComponent.prototype.ngOnDestroy = function () {
    };
    CrudTableComponent.prototype.sortData = function (event) {
        this.sort.emit(event);
    };
    CrudTableComponent.prototype.search = function (field) {
        if (field.value.length !== 0) {
            return this.searchEvent.emit(field.value);
        }
        return this.snackbar.open('You need to input something to search.', 'OK', { duration: 3000 });
    };
    CrudTableComponent.prototype.toggleRefresh = function () {
        this.refresh.emit({
            crud: this.crud
        });
    };
    CrudTableComponent.prototype.changePage = function (PaginationAction) {
        this.page.emit(PaginationAction);
    };
    /**
     * trigger menu
     * @param object menu
     * @return void
     */
    CrudTableComponent.prototype.triggerMenu = function (menu, row) {
        var _this = this;
        /**
         * build the url based on the
         * configuration.
         */
        var url = menu.url.replace("#", row[menu.index || 'id']);
        if (menu.confirm !== undefined) {
            this.dialog.open(DialogComponent, {
                id: menu.namespace,
                data: {
                    title: menu.confirm.title,
                    message: menu.confirm.message,
                    buttons: [
                        {
                            label: 'Ok',
                            namespace: 'ok',
                            onClick: function () {
                                _this.__proceedAction(menu, url, row);
                            }
                        }, {
                            label: 'Cancel',
                            namespace: 'cancel',
                            onClick: function () {
                                _this.dialog.getDialogById(menu.namespace)
                                    .close();
                            }
                        }
                    ]
                }
            });
        }
        else {
            this.__proceedAction(menu, url, row);
        }
    };
    /**
     * Proceed action after having
     * checked if that action require a confirmation
     * @param object menu
     * @return void
     */
    CrudTableComponent.prototype.__proceedAction = function (menu, url, row) {
        this.action.emit({ menu: menu, url: url, row: row });
    };
    /**
     * Make sure to toggle all
     * checkboxes when the main checkbox
     * is clicked
     * @return void
     */
    CrudTableComponent.prototype.checkAllCheckboxes = function () {
        var _this = this;
        this.crud.results['data'].forEach(function (checkbox) {
            checkbox.$checked = _this.checkAll;
        });
    };
    /**
     * delete selected entries
     * @param entries
     * @return void
     */
    CrudTableComponent.prototype.deleteSelectedEntries = function () {
        var _this = this;
        this.dialog.open(DialogComponent, {
            id: 'bulk.action',
            data: {
                title: 'Please Confirm Your Action',
                message: 'Would you like to delete all the selected users ? This action can\'t be canceled !',
                buttons: [
                    {
                        label: 'Delete',
                        namespace: 'delete.selected',
                        onClick: function () {
                            _this.delete.emit({
                                entries: _this.selectedEntries,
                                dialog: {
                                    id: 'bulk.action'
                                }
                            });
                        }
                    }, {
                        label: 'Cancel',
                        namespace: 'cancel',
                        onClick: function () {
                            _this.dialog.getDialogById('bulk.action').close();
                        }
                    }
                ]
            }
        });
    };
    /**
     * canceled all selected entries
     * @return void
     */
    CrudTableComponent.prototype.cancel = function () {
        this.crud.results['data'].forEach(function (entry) { return entry.$checked = false; });
        this.checkAll = false;
    };
    /**
     * toggle search. Enable /disable according
     * to the provided parameter
     * @return void
     */
    CrudTableComponent.prototype.toggleSearch = function (param) {
        if (param) {
            this.searchEnabled = true;
            setTimeout(function () {
                document.getElementById('search-field').focus();
            }, 100);
        }
        else {
            this.searchEnabled = false;
            this.searchValue = '';
        }
        this.searchStatus.emit(this.searchEnabled);
    };
    Object.defineProperty(CrudTableComponent.prototype, "hasSelectedEntries", {
        /**
         * get if it has a selected entries
         * @return boolean
         */
        get: function () {
            return this.selectedEntries.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrudTableComponent.prototype, "selectedEntries", {
        /**
         * return selected entries
         * @return array
         */
        get: function () {
            return this.crud.results['data'] !== undefined ? this.crud.results['data'].filter(function (entry) { return entry.$checked; }) : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrudTableComponent.prototype, "currentPage", {
        /**
         * get current page
         * @return int
         */
        get: function () {
            return this.crud.results['current_page'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrudTableComponent.prototype, "lastPage", {
        /**
         * get last page
         * @return int
         */
        get: function () {
            return this.crud.results['last_page'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrudTableComponent.prototype, "perPage", {
        /**
         * get last page
         * @return int
         */
        get: function () {
            return this.crud.results['per_page'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrudTableComponent.prototype, "totalEntries", {
        /**
         * get last page
         * @return int
         */
        get: function () {
            return this.crud.results['total'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrudTableComponent.prototype, "rangeStarts", {
        /**
         * get last page
         * @return int
         */
        get: function () {
            return this.crud.results['from'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrudTableComponent.prototype, "rangeEnds", {
        /**
         * get last page
         * @return int
         */
        get: function () {
            return this.crud.results['to'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrudTableComponent.prototype, "crudPath", {
        /**
         * get last page
         * @return int
         */
        get: function () {
            return this.crud.results['path'];
        },
        enumerable: true,
        configurable: true
    });
    CrudTableComponent.ɵfac = function CrudTableComponent_Factory(t) { return new (t || CrudTableComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
    CrudTableComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: CrudTableComponent, selectors: [["cb-table"]], inputs: { isLoading: ["is-loading", "isLoading"], bulkActions: ["bulk-actions", "bulkActions"], crud: "crud" }, outputs: { sort: "sort", delete: "delete", action: "action", searchEvent: "search", searchStatus: "search-status", refresh: "refresh", page: "page" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 1, vars: 1, consts: [["class", "p-0", 4, "ngIf"], [1, "p-0"], ["class", "p-2 mb-0", "color", "warn", 4, "ngIf"], ["class", "p-2 mb-0", "fxLayoutAlign", "space-between", 4, "ngIf"], [4, "ngIf"], ["color", "warn", "style", "height: 1px;position: absolute;left: 0;", "mode", "indeterminate", 4, "ngIf"], ["fxLayout", "column", 2, "overflow-x", "auto"], ["matSort", "", "mat-table", "", "fxFlex", "auto", 2, "width", "100%", 3, "dataSource", "matSortChange"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"], ["color", "warn", 1, "p-2", "mb-0"], ["fxFlex", "100%", "fxLayout", "row", "fxLayoutAlign", "space-between center"], ["mat-icon-button", "", 3, "click"], ["id", "search-field", "type", "text", 3, "placeholder"], ["searchField", ""], ["fxLayoutAlign", "space-between", 1, "p-2", "mb-0"], ["fxFlex", "100%", "fxLayout", "row", "fxLayoutAlign", "space-between center", 4, "ngIf"], ["mat-icon-button", "", "mat-button", "", "color", "primary", 3, "routerLink"], ["mat-icon-button", "", "mat-button", "", "color", "primary", 3, "click"], ["fxLayoutAlign", "start center", "fxLayout", "row"], [2, "padding", "5px 10px"], ["appMenu", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "color", "primary"], ["mat-menu-item", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", "color", "warn", 3, "click"], ["mat-menu-item", "", 3, "click"], ["color", "warn", "mode", "indeterminate", 2, "height", "1px", "position", "absolute", "left", "0"], [3, "matColumnDef"], ["mat-header-cell", "", "style", "width: 40px", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width: 40px", 4, "matCellDef"], ["mat-header-cell", "", 2, "width", "40px"], [1, "example-margin", 3, "ngModel", "change", "ngModelChange"], ["mat-cell", "", 2, "width", "40px"], [1, "example-margin", 3, "ngModel", "ngModelChange"], ["mat-header-cell", "", "width", "80", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "width", "80"], ["mat-cell", ""], ["tableEntryMenu", "matMenu"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["mat-header-cell", "", 3, "mat-sort-header", 4, "matHeaderCellDef"], ["mat-header-cell", "", 3, "mat-sort-header"], ["mat-header-row", ""], ["mat-row", ""]], template: function CrudTableComponent_Template(rf, ctx) { if (rf & 1) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])(_c1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, CrudTableComponent_mat_card_0_Template, 12, 12, "mat-card", 0);
        } if (rf & 2) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx._crud !== undefined);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSort"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuTrigger"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], pipes: [TruncatePipe], styles: ["[_nghost-%COMP%]{height:100%}#search-field[_ngcontent-%COMP%]{height:35px;border-radius:5px;border:1px solid #ddd;background:#fff;width:100%;font-size:18px;padding:0 10px;margin-right:10px;margin-left:10px}td.mat-cell[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%]{padding:10px}"] });
    return CrudTableComponent;
}());
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(CrudTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cb-table',
                templateUrl: './crud-table.component.html',
                styleUrls: ['./crud-table.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, { isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['is-loading']
        }], bulkActions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['bulk-actions']
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['sort']
        }], delete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['delete']
        }], action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['action']
        }], searchEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['search']
        }], searchStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['search-status']
        }], refresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['refresh']
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['page']
        }], crud: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['crud']
        }] }); })();

var FileDropDirective = /** @class */ (function () {
    function FileDropDirective() {
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FileDropDirective.prototype.handleHover = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.onHover.emit(true);
    };
    FileDropDirective.prototype.handleDrop = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.dataTransfer.files.length > 0) {
            this.onDrop.emit(event.dataTransfer.files);
        }
    };
    FileDropDirective.prototype.handleLeave = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.onLeave.emit(true);
    };
    FileDropDirective.ɵfac = function FileDropDirective_Factory(t) { return new (t || FileDropDirective)(); };
    FileDropDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: FileDropDirective, selectors: [["", "libFileDrop", ""]], hostBindings: function FileDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("dragover", function FileDropDirective_dragover_HostBindingHandler($event) { return ctx.handleHover($event); })("drop", function FileDropDirective_drop_HostBindingHandler($event) { return ctx.handleDrop($event); })("dragleave", function FileDropDirective_dragleave_HostBindingHandler($event) { return ctx.handleLeave($event); });
        } }, outputs: { onHover: "onHover", onDrop: "onDrop", onLeave: "onLeaving" } });
    return FileDropDirective;
}());
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(FileDropDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[libFileDrop]'
            }]
    }], function () { return []; }, { onHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onHover']
        }], onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onDrop']
        }], onLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onLeaving']
        }], handleHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragover', ['$event']]
        }], handleDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['drop', ['$event']]
        }], handleLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragleave', ['$event']]
        }] }); })();

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
var _c0$1 = ["captchaElem"];
function FieldsComponent_mat_form_field_1_span_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r14.field.prefix);
} }
function FieldsComponent_mat_form_field_1_span_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r15.field.suffix);
} }
function FieldsComponent_mat_form_field_1_mat_hint_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-hint");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r16 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r16.field.description);
} }
function FieldsComponent_mat_form_field_1_mat_error_7_span_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is required");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_1_mat_error_7_span_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is not a valid email");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_1_mat_error_7_span_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r20 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the required length : ", ctx_r20.field.control.errors.minlength.requiredLength, "");
} }
function FieldsComponent_mat_form_field_1_mat_error_7_span_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r21 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the field : ", ctx_r21.field.control.errors.matches.formControlName, "");
} }
function FieldsComponent_mat_form_field_1_mat_error_7_span_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "this field require a valid number");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_1_mat_error_7_span_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var error_r24 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(error_r24);
} }
function FieldsComponent_mat_form_field_1_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-error");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, FieldsComponent_mat_form_field_1_mat_error_7_span_1_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, FieldsComponent_mat_form_field_1_mat_error_7_span_2_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, FieldsComponent_mat_form_field_1_mat_error_7_span_3_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FieldsComponent_mat_form_field_1_mat_error_7_span_4_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_mat_form_field_1_mat_error_7_span_5_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_mat_form_field_1_mat_error_7_span_6_Template, 3, 1, "span", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r17 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r17.field.control.errors.required);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r17.field.control.errors.email);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r17.field.control.errors.minlength);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r17.field.control.errors.matches);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r17.field.control.errors.number);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r17.field == null ? null : ctx_r17.field.errors);
} }
function FieldsComponent_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-form-field", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(3, "input", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FieldsComponent_mat_form_field_1_span_4_Template, 2, 1, "span", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_mat_form_field_1_span_5_Template, 2, 1, "span", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_mat_form_field_1_mat_hint_6_Template, 2, 1, "mat-hint", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, FieldsComponent_mat_form_field_1_mat_error_7_Template, 7, 6, "mat-error", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("appearance", ctx_r0.field.appearance || "standard");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r0.field.label);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("readonly", ctx_r0.field.readonly)("type", ctx_r0.field.type)("formControlName", ctx_r0.field.name)("placeholder", ctx_r0.field.label)("value", ctx_r0.field.value || ctx_r0.field.value !== undefined ? ctx_r0.field.value : "");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r0.field.prefix);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r0.field.suffix);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r0.field.control.valid || ctx_r0.field.control.untouched);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r0.field.control.invalid && ctx_r0.field.control.touched);
} }
function FieldsComponent_div_2_span_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r25 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r25.field.prefix);
} }
function FieldsComponent_div_2_span_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r26 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r26.field.suffix);
} }
function FieldsComponent_div_2_mat_hint_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-hint");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r27 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r27.field.description);
} }
function FieldsComponent_div_2_mat_error_7_span_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is required");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_div_2_mat_error_7_span_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is not a valid email");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_div_2_mat_error_7_span_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r31 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the required length : ", ctx_r31.field.control.errors.minlength.requiredLength, "");
} }
function FieldsComponent_div_2_mat_error_7_span_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r32 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the field : ", ctx_r32.field.control.errors.matches.formControlName, "");
} }
function FieldsComponent_div_2_mat_error_7_span_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "this field require a valid number");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_div_2_mat_error_7_span_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var error_r35 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(error_r35);
} }
function FieldsComponent_div_2_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-error");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, FieldsComponent_div_2_mat_error_7_span_1_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, FieldsComponent_div_2_mat_error_7_span_2_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, FieldsComponent_div_2_mat_error_7_span_3_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FieldsComponent_div_2_mat_error_7_span_4_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_div_2_mat_error_7_span_5_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_div_2_mat_error_7_span_6_Template, 3, 1, "span", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r28 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r28.field.control.errors.required);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r28.field.control.errors.email);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r28.field.control.errors.minlength);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r28.field.control.errors.matches);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r28.field.control.errors.number);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r28.field == null ? null : ctx_r28.field.errors);
} }
function FieldsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "span", 16);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(3, "input", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FieldsComponent_div_2_span_4_Template, 2, 1, "span", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_div_2_span_5_Template, 2, 1, "span", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_div_2_mat_hint_6_Template, 2, 1, "mat-hint", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, FieldsComponent_div_2_mat_error_7_Template, 7, 6, "mat-error", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r1.field.label);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("readonly", ctx_r1.field.readonly)("type", ctx_r1.field.type)("formControlName", ctx_r1.field.name)("placeholder", ctx_r1.field.label);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r1.field.prefix);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r1.field.suffix);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r1.field.control.valid || ctx_r1.field.control.untouched);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r1.field.control.invalid && ctx_r1.field.control.touched);
} }
function FieldsComponent_mat_form_field_3_span_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r36 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r36.field.prefix);
} }
function FieldsComponent_mat_form_field_3_span_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r37 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r37.field.suffix);
} }
function FieldsComponent_mat_form_field_3_mat_hint_9_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-hint");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r39 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r39.field.description);
} }
function FieldsComponent_mat_form_field_3_mat_error_10_span_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is required");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_3_mat_error_10_span_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is not a valid email");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_3_mat_error_10_span_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r43 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the required length : ", ctx_r43.field.control.errors.minlength.requiredLength, "");
} }
function FieldsComponent_mat_form_field_3_mat_error_10_span_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r44 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the field : ", ctx_r44.field.control.errors.matches.formControlName, "");
} }
function FieldsComponent_mat_form_field_3_mat_error_10_span_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "this field require a valid number");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_3_mat_error_10_span_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var error_r47 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(error_r47);
} }
function FieldsComponent_mat_form_field_3_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-error");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, FieldsComponent_mat_form_field_3_mat_error_10_span_1_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, FieldsComponent_mat_form_field_3_mat_error_10_span_2_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, FieldsComponent_mat_form_field_3_mat_error_10_span_3_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FieldsComponent_mat_form_field_3_mat_error_10_span_4_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_mat_form_field_3_mat_error_10_span_5_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_mat_form_field_3_mat_error_10_span_6_Template, 3, 1, "span", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r40 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r40.field.control.errors.required);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r40.field.control.errors.email);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r40.field.control.errors.minlength);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r40.field.control.errors.matches);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r40.field.control.errors.number);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r40.field == null ? null : ctx_r40.field.errors);
} }
function FieldsComponent_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-form-field", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(3, "input", 19);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FieldsComponent_mat_form_field_3_span_4_Template, 2, 1, "span", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_mat_form_field_3_span_5_Template, 2, 1, "span", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(6, "mat-datepicker-toggle", 20);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(7, "mat-datepicker", 21, 22);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(9, FieldsComponent_mat_form_field_3_mat_hint_9_Template, 2, 1, "mat-hint", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(10, FieldsComponent_mat_form_field_3_mat_error_10_Template, 7, 6, "mat-error", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var _r38 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(8);
    var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("appearance", ctx_r2.field.appearance || "standard");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r2.field.label);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("readonly", ctx_r2.field.readonly)("formControlName", ctx_r2.field.name)("matDatepicker", _r38)("placeholder", ctx_r2.field.label);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r2.field.prefix);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r2.field.suffix);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("for", _r38);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("startAt", ctx_r2.field.data.startDate);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r2.field.control.valid || ctx_r2.field.control.untouched);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r2.field.control.invalid && ctx_r2.field.control.touched);
} }
function FieldsComponent_mat_form_field_4_span_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r48 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r48.field.prefix);
} }
function FieldsComponent_mat_form_field_4_span_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r49 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r49.field.suffix);
} }
function FieldsComponent_mat_form_field_4_mat_hint_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-hint");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r50 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r50.field.description);
} }
function FieldsComponent_mat_form_field_4_mat_error_7_span_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is required");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_4_mat_error_7_span_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is not a valid email");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_4_mat_error_7_span_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r54 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the required length : ", ctx_r54.field.control.errors.minlength.requiredLength, "");
} }
function FieldsComponent_mat_form_field_4_mat_error_7_span_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r55 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the field : ", ctx_r55.field.control.errors.matches.formControlName, "");
} }
function FieldsComponent_mat_form_field_4_mat_error_7_span_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "this field require a valid number");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_4_mat_error_7_span_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var error_r58 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(error_r58);
} }
function FieldsComponent_mat_form_field_4_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-error");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, FieldsComponent_mat_form_field_4_mat_error_7_span_1_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, FieldsComponent_mat_form_field_4_mat_error_7_span_2_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, FieldsComponent_mat_form_field_4_mat_error_7_span_3_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FieldsComponent_mat_form_field_4_mat_error_7_span_4_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_mat_form_field_4_mat_error_7_span_5_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_mat_form_field_4_mat_error_7_span_6_Template, 3, 1, "span", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r51 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r51.field.control.errors.required);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r51.field.control.errors.email);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r51.field.control.errors.minlength);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r51.field.control.errors.matches);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r51.field.control.errors.number);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r51.field == null ? null : ctx_r51.field.errors);
} }
function FieldsComponent_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-form-field", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(3, "input", 23);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FieldsComponent_mat_form_field_4_span_4_Template, 2, 1, "span", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_mat_form_field_4_span_5_Template, 2, 1, "span", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_mat_form_field_4_mat_hint_6_Template, 2, 1, "mat-hint", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, FieldsComponent_mat_form_field_4_mat_error_7_Template, 7, 6, "mat-error", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("appearance", ctx_r3.field.appearance || "standard");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r3.field.label);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("readonly", ctx_r3.field.readonly)("type", "datetime-local")("formControlName", ctx_r3.field.name)("placeholder", ctx_r3.field.label)("value", ctx_r3.field.value ? ctx_r3.field.value : "");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r3.field.prefix);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r3.field.suffix);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r3.field.control.valid || ctx_r3.field.control.untouched);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r3.field.control.invalid && ctx_r3.field.control.touched);
} }
function FieldsComponent_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r63 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 31);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "button", 32);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function FieldsComponent_div_5_div_6_Template_button_click_1_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r63); Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); var _r59 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(5); return _r59.click(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2, "Drag file or Click to browse");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_div_5_div_7_div_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 37);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "a", 40);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "span", 41);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3, "visibility");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r64 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("href", ctx_r64.field.data.file, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FieldsComponent_div_5_div_7_button_7_Template(rf, ctx) { if (rf & 1) {
    var _r68 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 42);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function FieldsComponent_div_5_div_7_button_7_Template_button_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r68); Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); var _r59 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(5); var ctx_r67 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r67.resetField(_r59); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "X");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_div_5_div_7_mat_spinner_8_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "mat-spinner", 43);
} }
function FieldsComponent_div_5_div_7_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "span", 34);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(3, "truncate");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "div", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_div_5_div_7_div_5_Template, 4, 1, "div", 36);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(6, "div", 37);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, FieldsComponent_div_5_div_7_button_7_Template, 2, 0, "button", 38);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(8, FieldsComponent_div_5_div_7_mat_spinner_8_Template, 1, 0, "mat-spinner", 39);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r61 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"])(3, 4, ctx_r61.field.control.value.name || ctx_r61.field.control.value, 10));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r61.field.data.file);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", (ctx_r61.field.data == null ? null : ctx_r61.field.data.upload == null ? null : ctx_r61.field.data.upload.isUploading) === false || ctx_r61.field.control.value);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", (ctx_r61.field == null ? null : ctx_r61.field.data == null ? null : ctx_r61.field.data.upload == null ? null : ctx_r61.field.data.upload.isUploading) === true);
} }
var _c1$1 = function (a0, a1) { return { "border-dashed border-gray-400": a0, "border-transparent": a1 }; };
var _c2$1 = function () { return ["", null]; };
function FieldsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r70 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 24);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("onHover", function FieldsComponent_div_5_Template_div_onHover_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r70); var ctx_r69 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r69.isDragHovering(); })("onDrop", function FieldsComponent_div_5_Template_div_onDrop_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r70); var ctx_r71 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r71.handleDrop($event); })("onLeaving", function FieldsComponent_div_5_Template_div_onLeaving_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r70); var ctx_r72 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r72.hasDragLeft(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 25);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div", 26);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "input", 27, 28);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("change", function FieldsComponent_div_5_Template_input_change_4_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r70); var _r59 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(5); var ctx_r73 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r73.setFileValue(_r59.files[0]); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_div_5_div_6_Template, 3, 0, "div", 29);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, FieldsComponent_div_5_div_7_Template, 9, 7, "div", 30);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"])(4, _c1$1, ctx_r4.hovered, !ctx_r4.hovered));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r4.field.label);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"])(7, _c2$1).includes(ctx_r4.field.control.value));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r4.field.control.value);
} }
function FieldsComponent_mat_form_field_6_span_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r75 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r75.field.prefix);
} }
function FieldsComponent_mat_form_field_6_span_7_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r76 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r76.field.suffix);
} }
function FieldsComponent_mat_form_field_6_mat_hint_8_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-hint");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r77 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r77.field.description);
} }
function FieldsComponent_mat_form_field_6_mat_error_9_span_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is required");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_6_mat_error_9_span_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is not a valid email");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_6_mat_error_9_span_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r81 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the required length : ", ctx_r81.field.control.errors.minlength.requiredLength, "");
} }
function FieldsComponent_mat_form_field_6_mat_error_9_span_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r82 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the field : ", ctx_r82.field.control.errors.matches.formControlName, "");
} }
function FieldsComponent_mat_form_field_6_mat_error_9_span_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "this field require a valid number");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_6_mat_error_9_span_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var error_r85 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(error_r85);
} }
function FieldsComponent_mat_form_field_6_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-error");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, FieldsComponent_mat_form_field_6_mat_error_9_span_1_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, FieldsComponent_mat_form_field_6_mat_error_9_span_2_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, FieldsComponent_mat_form_field_6_mat_error_9_span_3_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FieldsComponent_mat_form_field_6_mat_error_9_span_4_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_mat_form_field_6_mat_error_9_span_5_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_mat_form_field_6_mat_error_9_span_6_Template, 3, 1, "span", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r78 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r78.field.control.errors.required);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r78.field.control.errors.email);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r78.field.control.errors.minlength);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r78.field.control.errors.matches);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r78.field.control.errors.number);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r78.field == null ? null : ctx_r78.field.errors);
} }
function FieldsComponent_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-form-field", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(3, "input", 44);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(4, "owl-date-time", null, 45);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_mat_form_field_6_span_6_Template, 2, 1, "span", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, FieldsComponent_mat_form_field_6_span_7_Template, 2, 1, "span", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(8, FieldsComponent_mat_form_field_6_mat_hint_8_Template, 2, 1, "mat-hint", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(9, FieldsComponent_mat_form_field_6_mat_error_9_Template, 7, 6, "mat-error", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var _r74 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(5);
    var ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("appearance", ctx_r5.field.appearance || "standard");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r5.field.label);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("owlDateTime", _r74)("owlDateTimeTrigger", _r74)("readonly", ctx_r5.field.readonly)("type", ctx_r5.field.type)("formControlName", ctx_r5.field.name)("placeholder", ctx_r5.field.label)("value", ctx_r5.field.value ? ctx_r5.field.value : "");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r5.field.prefix);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r5.field.suffix);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r5.field.control.valid || ctx_r5.field.control.untouched);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r5.field.control.invalid && ctx_r5.field.control.touched);
} }
function FieldsComponent_mat_form_field_7_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-option", 48);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var option_r91 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("value", option_r91.value);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", option_r91.label, " ");
} }
function FieldsComponent_mat_form_field_7_span_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r87 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r87.field.prefix);
} }
function FieldsComponent_mat_form_field_7_span_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r88 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r88.field.suffix);
} }
function FieldsComponent_mat_form_field_7_mat_hint_7_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-hint");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r89 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r89.field.description);
} }
function FieldsComponent_mat_form_field_7_mat_error_8_span_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is required");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_7_mat_error_8_span_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is not a valid email");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_7_mat_error_8_span_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r94 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the required length : ", ctx_r94.field.control.errors.minlength.requiredLength, "");
} }
function FieldsComponent_mat_form_field_7_mat_error_8_span_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r95 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the field : ", ctx_r95.field.control.errors.matches.formControlName, "");
} }
function FieldsComponent_mat_form_field_7_mat_error_8_span_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "this field require a valid number");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_7_mat_error_8_span_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var error_r98 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(error_r98);
} }
function FieldsComponent_mat_form_field_7_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-error");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, FieldsComponent_mat_form_field_7_mat_error_8_span_1_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, FieldsComponent_mat_form_field_7_mat_error_8_span_2_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, FieldsComponent_mat_form_field_7_mat_error_8_span_3_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FieldsComponent_mat_form_field_7_mat_error_8_span_4_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_mat_form_field_7_mat_error_8_span_5_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_mat_form_field_7_mat_error_8_span_6_Template, 3, 1, "span", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r90 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r90.field.control.errors.required);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r90.field.control.errors.email);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r90.field.control.errors.minlength);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r90.field.control.errors.matches);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r90.field.control.errors.number);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r90.field == null ? null : ctx_r90.field.errors);
} }
function FieldsComponent_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-form-field", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "mat-select", 46);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FieldsComponent_mat_form_field_7_mat_option_4_Template, 2, 2, "mat-option", 47);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_mat_form_field_7_span_5_Template, 2, 1, "span", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_mat_form_field_7_span_6_Template, 2, 1, "span", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, FieldsComponent_mat_form_field_7_mat_hint_7_Template, 2, 1, "mat-hint", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(8, FieldsComponent_mat_form_field_7_mat_error_8_Template, 7, 6, "mat-error", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("appearance", ctx_r6.field.appearance || "standard");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r6.field.label);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formControlName", ctx_r6.field.name)("placeholder", ctx_r6.field.label);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r6.field.options);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r6.field.prefix);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r6.field.suffix);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r6.field.control.valid || ctx_r6.field.control.untouched);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r6.field.control.invalid && ctx_r6.field.control.touched);
} }
function FieldsComponent_mat_form_field_8_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-option", 48);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var option_r104 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("value", option_r104.value);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", option_r104.label, " ");
} }
function FieldsComponent_mat_form_field_8_span_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r100 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r100.field.prefix);
} }
function FieldsComponent_mat_form_field_8_span_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r101 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r101.field.suffix);
} }
function FieldsComponent_mat_form_field_8_mat_hint_7_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-hint");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r102 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r102.field.description);
} }
function FieldsComponent_mat_form_field_8_mat_error_8_span_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is required");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_8_mat_error_8_span_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is not a valid email");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_8_mat_error_8_span_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r107 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the required length : ", ctx_r107.field.control.errors.minlength.requiredLength, "");
} }
function FieldsComponent_mat_form_field_8_mat_error_8_span_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r108 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the field : ", ctx_r108.field.control.errors.matches.formControlName, "");
} }
function FieldsComponent_mat_form_field_8_mat_error_8_span_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "this field require a valid number");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_8_mat_error_8_span_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var error_r111 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(error_r111);
} }
function FieldsComponent_mat_form_field_8_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-error");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, FieldsComponent_mat_form_field_8_mat_error_8_span_1_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, FieldsComponent_mat_form_field_8_mat_error_8_span_2_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, FieldsComponent_mat_form_field_8_mat_error_8_span_3_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FieldsComponent_mat_form_field_8_mat_error_8_span_4_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_mat_form_field_8_mat_error_8_span_5_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_mat_form_field_8_mat_error_8_span_6_Template, 3, 1, "span", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r103 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r103.field.control.errors.required);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r103.field.control.errors.email);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r103.field.control.errors.minlength);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r103.field.control.errors.matches);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r103.field.control.errors.number);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r103.field == null ? null : ctx_r103.field.errors);
} }
function FieldsComponent_mat_form_field_8_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-form-field", 49);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "mat-select", 46);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FieldsComponent_mat_form_field_8_mat_option_4_Template, 2, 2, "mat-option", 47);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_mat_form_field_8_span_5_Template, 2, 1, "span", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_mat_form_field_8_span_6_Template, 2, 1, "span", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, FieldsComponent_mat_form_field_8_mat_hint_7_Template, 2, 1, "mat-hint", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(8, FieldsComponent_mat_form_field_8_mat_error_8_Template, 7, 6, "mat-error", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("appearance", ctx_r7.field.appearance || "standard");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r7.field.label);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formControlName", ctx_r7.field.name)("placeholder", ctx_r7.field.label);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r7.field.options);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r7.field.prefix);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r7.field.suffix);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r7.field.control.valid || ctx_r7.field.control.untouched);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r7.field.control.invalid && ctx_r7.field.control.touched);
} }
function FieldsComponent_mat_form_field_9_span_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r112 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r112.field.prefix);
} }
function FieldsComponent_mat_form_field_9_span_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r113 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r113.field.suffix);
} }
function FieldsComponent_mat_form_field_9_mat_hint_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-hint");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r114 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r114.field.description);
} }
function FieldsComponent_mat_form_field_9_mat_error_7_span_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is required");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_9_mat_error_7_span_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is not a valid email");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_9_mat_error_7_span_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r118 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the required length : ", ctx_r118.field.control.errors.minlength.requiredLength, "");
} }
function FieldsComponent_mat_form_field_9_mat_error_7_span_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r119 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the field : ", ctx_r119.field.control.errors.matches.formControlName, "");
} }
function FieldsComponent_mat_form_field_9_mat_error_7_span_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "this field require a valid number");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_9_mat_error_7_span_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var error_r122 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(error_r122);
} }
function FieldsComponent_mat_form_field_9_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-error");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, FieldsComponent_mat_form_field_9_mat_error_7_span_1_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, FieldsComponent_mat_form_field_9_mat_error_7_span_2_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, FieldsComponent_mat_form_field_9_mat_error_7_span_3_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FieldsComponent_mat_form_field_9_mat_error_7_span_4_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_mat_form_field_9_mat_error_7_span_5_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_mat_form_field_9_mat_error_7_span_6_Template, 3, 1, "span", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r115 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r115.field.control.errors.required);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r115.field.control.errors.email);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r115.field.control.errors.minlength);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r115.field.control.errors.matches);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r115.field.control.errors.number);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r115.field == null ? null : ctx_r115.field.errors);
} }
function FieldsComponent_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-form-field", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(3, "textarea", 50);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FieldsComponent_mat_form_field_9_span_4_Template, 2, 1, "span", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_mat_form_field_9_span_5_Template, 2, 1, "span", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_mat_form_field_9_mat_hint_6_Template, 2, 1, "mat-hint", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, FieldsComponent_mat_form_field_9_mat_error_7_Template, 7, 6, "mat-error", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("appearance", ctx_r8.field.appearance || "standard");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r8.field.label);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formControlName", ctx_r8.field.name)("placeholder", ctx_r8.field.label);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r8.field.prefix);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r8.field.suffix);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r8.field.control.valid || ctx_r8.field.control.untouched);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r8.field.control.invalid && ctx_r8.field.control.touched);
} }
function FieldsComponent_mat_form_field_10_span_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r123 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r123.field.prefix);
} }
function FieldsComponent_mat_form_field_10_span_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r124 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r124.field.suffix);
} }
function FieldsComponent_mat_form_field_10_mat_hint_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-hint");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r125 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r125.field.description);
} }
function FieldsComponent_mat_form_field_10_mat_error_7_span_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is required");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_10_mat_error_7_span_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is not a valid email");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_10_mat_error_7_span_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r129 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the required length : ", ctx_r129.field.control.errors.minlength.requiredLength, "");
} }
function FieldsComponent_mat_form_field_10_mat_error_7_span_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r130 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the field : ", ctx_r130.field.control.errors.matches.formControlName, "");
} }
function FieldsComponent_mat_form_field_10_mat_error_7_span_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "this field require a valid number");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_mat_form_field_10_mat_error_7_span_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var error_r133 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(error_r133);
} }
function FieldsComponent_mat_form_field_10_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-error");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, FieldsComponent_mat_form_field_10_mat_error_7_span_1_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, FieldsComponent_mat_form_field_10_mat_error_7_span_2_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, FieldsComponent_mat_form_field_10_mat_error_7_span_3_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FieldsComponent_mat_form_field_10_mat_error_7_span_4_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_mat_form_field_10_mat_error_7_span_5_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_mat_form_field_10_mat_error_7_span_6_Template, 3, 1, "span", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r126 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r126.field.control.errors.required);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r126.field.control.errors.email);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r126.field.control.errors.minlength);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r126.field.control.errors.matches);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r126.field.control.errors.number);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r126.field == null ? null : ctx_r126.field.errors);
} }
function FieldsComponent_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-form-field", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(3, "input", 51);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FieldsComponent_mat_form_field_10_span_4_Template, 2, 1, "span", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_mat_form_field_10_span_5_Template, 2, 1, "span", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_mat_form_field_10_mat_hint_6_Template, 2, 1, "mat-hint", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, FieldsComponent_mat_form_field_10_mat_error_7_Template, 7, 6, "mat-error", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("appearance", ctx_r9.field.appearance || "standard");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r9.field.label);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("readonly", ctx_r9.field.readonly)("formControlName", ctx_r9.field.name)("placeholder", ctx_r9.field.label)("value", ctx_r9.field.value !== undefined ? ctx_r9.field.value : 0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r9.field.prefix);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r9.field.suffix);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r9.field.control.valid || ctx_r9.field.control.untouched);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r9.field.control.invalid && ctx_r9.field.control.touched);
} }
function FieldsComponent_ng_container_11_mat_error_3_span_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is required");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_ng_container_11_mat_error_3_span_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is not a valid email");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_ng_container_11_mat_error_3_span_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r138 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the required length : ", ctx_r138.field.control.errors.minlength.requiredLength, "");
} }
function FieldsComponent_ng_container_11_mat_error_3_span_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r139 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the field : ", ctx_r139.field.control.errors.matches.formControlName, "");
} }
function FieldsComponent_ng_container_11_mat_error_3_span_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "this field require a valid number");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_ng_container_11_mat_error_3_span_7_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var error_r142 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(error_r142);
} }
function FieldsComponent_ng_container_11_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-error");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, FieldsComponent_ng_container_11_mat_error_3_span_2_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, FieldsComponent_ng_container_11_mat_error_3_span_3_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FieldsComponent_ng_container_11_mat_error_3_span_4_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_ng_container_11_mat_error_3_span_5_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_ng_container_11_mat_error_3_span_6_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, FieldsComponent_ng_container_11_mat_error_3_span_7_Template, 3, 1, "span", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r134 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r134.field.control.errors.required);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r134.field.control.errors.email);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r134.field.control.errors.minlength);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r134.field.control.errors.matches);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r134.field.control.errors.number);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r134.field == null ? null : ctx_r134.field.errors);
} }
function FieldsComponent_ng_container_11_small_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "small");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r135 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r135.field.description);
} }
function FieldsComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "mat-slide-toggle", 52);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, FieldsComponent_ng_container_11_mat_error_3_Template, 8, 6, "mat-error", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(4, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_ng_container_11_small_5_Template, 2, 1, "small", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(6, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(7, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    var ctx_r10 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formControlName", ctx_r10.field.name)("checked", ctx_r10.field.value);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r10.field.label);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r10.field.control.invalid && ctx_r10.field.control.touched);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r10.field.control.valid || ctx_r10.field.control.untouched);
} }
function FieldsComponent_ng_container_12_mat_error_3_span_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is required");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_ng_container_12_mat_error_3_span_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "This field is not a valid email");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_ng_container_12_mat_error_3_span_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r147 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the required length : ", ctx_r147.field.control.errors.minlength.requiredLength, "");
} }
function FieldsComponent_ng_container_12_mat_error_3_span_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r148 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])("this field doesn't match the field : ", ctx_r148.field.control.errors.matches.formControlName, "");
} }
function FieldsComponent_ng_container_12_mat_error_3_span_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "this field require a valid number");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function FieldsComponent_ng_container_12_mat_error_3_span_7_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var error_r151 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(error_r151);
} }
function FieldsComponent_ng_container_12_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-error");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, FieldsComponent_ng_container_12_mat_error_3_span_2_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, FieldsComponent_ng_container_12_mat_error_3_span_3_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FieldsComponent_ng_container_12_mat_error_3_span_4_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_ng_container_12_mat_error_3_span_5_Template, 3, 1, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_ng_container_12_mat_error_3_span_6_Template, 3, 0, "span", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, FieldsComponent_ng_container_12_mat_error_3_span_7_Template, 3, 1, "span", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r144 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r144.field.control.errors.required);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r144.field.control.errors.email);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r144.field.control.errors.minlength);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r144.field.control.errors.matches);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r144.field.control.errors.number);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r144.field == null ? null : ctx_r144.field.errors);
} }
function FieldsComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "ngx-recaptcha2", 53, 54);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, FieldsComponent_ng_container_12_mat_error_3_Template, 8, 6, "mat-error", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    var ctx_r11 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("siteKey", ctx_r11.field.data.siteKey)("useGlobalDomain", false)("formControlName", ctx_r11.field.name);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r11.field.control.invalid && ctx_r11.field.control.touched);
} }
function FieldsComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    var _r153 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 55);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 56);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div", 57);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "div", 58);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(7, "image-cropper", 59);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("imageCropped", function FieldsComponent_ng_container_13_Template_image_cropper_imageCropped_7_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r153); var ctx_r152 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r152.imageCropped($event); })("loadImageFailed", function FieldsComponent_ng_container_13_Template_image_cropper_loadImageFailed_7_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r153); var ctx_r154 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r154.loadImageFailed(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(8, "div", 60);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(9, "div", 61);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(10, "div", 62);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(11, "img", 63);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(12, "div", 64);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(13, "div", 65);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(14, "input", 66);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("change", function FieldsComponent_ng_container_13_Template_input_change_14_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r153); var ctx_r155 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r155.fileChangeEvent($event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(15, "input", 67);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    var ctx_r12 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r12.field.label);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("imageChangedEvent", ctx_r12.imageChangedEvent)("maintainAspectRatio", (ctx_r12.field == null ? null : ctx_r12.field.data == null ? null : ctx_r12.field.data.maintainAspectRatio) === undefined ? true : ctx_r12.field == null ? null : ctx_r12.field.data == null ? null : ctx_r12.field.data.maintainAspectRatio)("aspectRatio", (ctx_r12.field == null ? null : ctx_r12.field.data == null ? null : ctx_r12.field.data.resizeToWidth) || 1 / 1)("resizeToWidth", (ctx_r12.field == null ? null : ctx_r12.field.data == null ? null : ctx_r12.field.data.resizeToWidth) || 128);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("src", ctx_r12.avatarBase64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formControlName", ctx_r12.field.name);
} }
function FieldsComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    var _r157 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 68);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function FieldsComponent_button_14_Template_button_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r157); var ctx_r156 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r156.field.onClick(ctx_r156.group); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r13 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("type", ctx_r13.field.type);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r13.field.label);
} }
var _c3 = function () { return ["text", "password", "email"]; };
var _c4 = function () { return ["file"]; };
var _c5 = function () { return ["file-upload"]; };
var _c6 = function () { return ["ng-datetime"]; };
var _c7 = function () { return ["number"]; };
var _c8 = function () { return ["switch"]; };
var _c9 = function () { return ["recaptcha"]; };
var _c10 = function () { return ["image"]; };
var _c11 = function () { return ["button"]; };
var FieldsComponent = /** @class */ (function () {
    function FieldsComponent(snackbar) {
        this.snackbar = snackbar;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.imageChangedEvent = '';
        this.avatarBase64 = '';
        this.hovered = false;
    }
    FieldsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (['text', 'email', 'select', 'date', 'password', 'textarea', 'datetime', 'number', 'multiple_select', 'button', 'switch', 'recaptcha', 'image', 'ng-datetime', 'file', 'file-upload'].indexOf(this.field.type) === -1) {
            throw ("Unable to render the field '" + this.field.name + "' with the field type : '" + this.field.type + "'. This type is not supported.");
        }
        if (!(this.group.get(this.field.name) instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_16__["AbstractControl"])) {
            throw "Unable to retreive the field \"" + this.field.name + "\" from the [group] provided to the \"app-fields\" component.";
        }
        /**
         * listen to reset on
         * the field reset method
         *
         */
        if (this.field.reset !== undefined) {
            this.field.reset.subscribe(function (value) {
                if (_this.field.type === 'recaptcha') {
                    _this.captchaElem.resetCaptcha();
                }
                else {
                    _this.field.control.setValue('');
                }
            });
        }
        this[this.field.name] = this.field.control;
    };
    FieldsComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
    };
    FieldsComponent.prototype.imageCropped = function (event) {
        this.field.control.setValue(event.base64);
        this.avatarBase64 = event.base64;
    };
    FieldsComponent.prototype.loadImageFailed = function () {
        this.snackbar.open('An error occured while loading the image', 'OK', { duration: 3000 });
    };
    FieldsComponent.prototype.handleDropped = function (event) {
        console.log(event);
    };
    Object.defineProperty(FieldsComponent.prototype, "dateTimeConfig", {
        get: function () {
            return __assign({
                format: 'YYYY-MM-DD',
                mode: 'daytime',
            }, (this.field.data || {}));
        },
        enumerable: true,
        configurable: true
    });
    FieldsComponent.prototype.isDragHovering = function () {
        if (this.hovered === false) {
            this.hovered = true;
        }
    };
    FieldsComponent.prototype.hasDragLeft = function () {
        this.hovered = false;
    };
    FieldsComponent.prototype.handleDrop = function (event) {
        this.hovered = false;
        this.field.control.setValue(event[0]);
        this.handleSilentUpload();
    };
    FieldsComponent.prototype.setFileValue = function (event) {
        this.field.control.setValue(event);
        this.handleSilentUpload();
    };
    FieldsComponent.prototype.handleSilentUpload = function () {
        this.changed.emit(this.field);
    };
    FieldsComponent.prototype.resetField = function (field) {
        field.value = '';
        this.field.control.setValue('');
    };
    FieldsComponent.prototype.dateChanged = function (event) {
        this.hovered = false;
    };
    FieldsComponent.ɵfac = function FieldsComponent_Factory(t) { return new (t || FieldsComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
    FieldsComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: FieldsComponent, selectors: [["cb-field"]], viewQuery: function FieldsComponent_Query(rf, ctx) { if (rf & 1) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c0$1, true);
        } if (rf & 2) {
            var _t;
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.captchaElem = _t.first);
        } }, inputs: { field: "field", group: "group" }, outputs: { changed: "changed" }, decls: 15, vars: 24, consts: [[3, "formGroup"], ["class", "example-full-width w-100", 3, "appearance", 4, "ngIf"], ["class", "flex flex-col", 4, "ngIf"], ["class", "w-100", 3, "appearance", 4, "ngIf"], ["libFileDrop", "", "class", "rounded shadow border-4 flex justify-center items-center bg-white flex flex-col my-2", 3, "ngClass", "onHover", "onDrop", "onLeaving", 4, "ngIf"], ["multiple", "", "class", "w-100", 3, "appearance", 4, "ngIf"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "type", "click", 4, "ngIf"], [1, "example-full-width", "w-100", 3, "appearance"], ["matInput", "", 3, "readonly", "type", "formControlName", "placeholder", "value"], ["matPrefix", "", 4, "ngIf"], ["matSuffix", "", 4, "ngIf"], ["matPrefix", ""], ["matSuffix", ""], [4, "ngFor", "ngForOf"], [1, "flex", "flex-col"], [1, "text-lg", "block"], [3, "readonly", "type", "formControlName", "placeholder"], [1, "w-100", 3, "appearance"], ["matInput", "", 3, "readonly", "formControlName", "matDatepicker", "placeholder"], ["matSuffix", "", 3, "for"], ["startView", "year", 3, "startAt"], ["picker", ""], ["theme", "dp-material", "matInput", "", 3, "readonly", "type", "formControlName", "placeholder", "value"], ["libFileDrop", "", 1, "rounded", "shadow", "border-4", "flex", "justify-center", "items-center", "bg-white", "flex", "flex-col", "my-2", 3, "ngClass", "onHover", "onDrop", "onLeaving"], [1, "field-title", "flex", "justify-center", "py-2", "border-b", "border-gray-300", "w-full", "text-gray-600"], [1, "drop-zone", "w-full", "p-2"], ["type", "file", 1, "hidden", 3, "change"], ["fileInput", ""], ["class", "flex flex-col flex-auto flex items-center justify-center h-32", 4, "ngIf"], ["class", "p-2 rounded-lg bg-green-200 flex flex-auto items-center justify-between", 4, "ngIf"], [1, "flex", "flex-col", "flex-auto", "flex", "items-center", "justify-center", "h-32"], [1, "rounded-lg", "bg-green-600", "text-white", "py-2", "px-4", "font-semibold", 3, "click"], [1, "p-2", "rounded-lg", "bg-green-200", "flex", "flex-auto", "items-center", "justify-between"], [1, "flex-auto", "flex-shrink-0", "text-gray-800", "font-semibold"], [1, "flex"], ["class", "mx-1", 4, "ngIf"], [1, "mx-1"], ["class", "rounded-full bg-red-600 text-white w-8 h-8 flex justify-center items-center font-semibold", 3, "click", 4, "ngIf"], ["mode", "indeterminate", "diameter", "30", 4, "ngIf"], ["target", "_blank", 1, "rounded-full", "bg-blue-600", "text-white", "w-8", "h-8", "flex", "justify-center", "items-center", "font-semibold", 3, "href"], [1, "material-icons"], [1, "rounded-full", "bg-red-600", "text-white", "w-8", "h-8", "flex", "justify-center", "items-center", "font-semibold", 3, "click"], ["mode", "indeterminate", "diameter", "30"], ["matInput", "", 3, "owlDateTime", "owlDateTimeTrigger", "readonly", "type", "formControlName", "placeholder", "value"], ["dt1", ""], [3, "formControlName", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["multiple", "", 1, "w-100", 3, "appearance"], ["matInput", "", 3, "formControlName", "placeholder"], ["matInput", "", "type", "number", 3, "readonly", "formControlName", "placeholder", "value"], [3, "formControlName", "checked"], ["type", "image", 3, "siteKey", "useGlobalDomain", "formControlName"], ["captchaElem", ""], [1, "flex", "flex-col", "flex-wrap", "rounded", "overflow-hidden", "shadow", "my-2"], [1, "w-full", "bg-blue-100"], [1, "flex", "px-4", "-mx-4"], [1, "w-full", "md:w-2/3", "p-2"], ["format", "jpg", 1, "rounded", "overflow-hidden", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "resizeToWidth", "imageCropped", "loadImageFailed"], [1, "w-full", "md:w-1/3", "p-2"], [1, "flex", "justify-center"], [1, "avatar", "rounded-lg", "overflow-hidden", "flex", "justify-center", "items-center", "w-24", "h-24"], [1, "object-cover", 3, "src"], [1, "w-full", "p-2", "b", "border-t", "border-gray-300"], [1, "input-group", "w-full"], ["type", "file", "id", "", 3, "change"], ["type", "hidden", 3, "formControlName"], ["mat-raised-button", "", "color", "primary", 3, "type", "click"]], template: function FieldsComponent_Template(rf, ctx) { if (rf & 1) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0, 0);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, FieldsComponent_mat_form_field_1_Template, 8, 11, "mat-form-field", 1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, FieldsComponent_div_2_Template, 8, 9, "div", 2);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, FieldsComponent_mat_form_field_3_Template, 11, 12, "mat-form-field", 3);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, FieldsComponent_mat_form_field_4_Template, 8, 11, "mat-form-field", 1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, FieldsComponent_div_5_Template, 8, 8, "div", 4);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, FieldsComponent_mat_form_field_6_Template, 10, 13, "mat-form-field", 1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, FieldsComponent_mat_form_field_7_Template, 9, 9, "mat-form-field", 3);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(8, FieldsComponent_mat_form_field_8_Template, 9, 9, "mat-form-field", 5);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(9, FieldsComponent_mat_form_field_9_Template, 8, 8, "mat-form-field", 3);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(10, FieldsComponent_mat_form_field_10_Template, 8, 10, "mat-form-field", 1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(11, FieldsComponent_ng_container_11_Template, 8, 5, "ng-container", 6);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(12, FieldsComponent_ng_container_12_Template, 4, 4, "ng-container", 6);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(13, FieldsComponent_ng_container_13_Template, 16, 7, "ng-container", 6);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(14, FieldsComponent_button_14_Template, 2, 2, "button", 7);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
        } if (rf & 2) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroup", ctx.group);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"])(15, _c3).indexOf(ctx.field.type) != 0 - 1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"])(16, _c4).indexOf(ctx.field.type) != 0 - 1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.field.type === "date");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.field.type === "datetime");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"])(17, _c5).includes(ctx.field.type));
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"])(18, _c6).indexOf(ctx.field.type) != 0 - 1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.field.type == "select");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.field.type == "multiple_select");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.field.type == "textarea");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"])(19, _c7).indexOf(ctx.field.type) != 0 - 1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"])(20, _c8).indexOf(ctx.field.type) != 0 - 1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"])(21, _c9).includes(ctx.field.type));
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"])(22, _c10).includes(ctx.field.type));
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"])(23, _c11).indexOf(ctx.field.type) !== 0 - 1);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepicker"], FileDropDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatSpinner"], _danielmoncada_angular_datetime_picker__WEBPACK_IMPORTED_MODULE_23__["OwlDateTimeInputDirective"], _danielmoncada_angular_datetime_picker__WEBPACK_IMPORTED_MODULE_23__["OwlDateTimeTriggerDirective"], _danielmoncada_angular_datetime_picker__WEBPACK_IMPORTED_MODULE_23__["OwlDateTimeComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NumberValueAccessor"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggle"], ngx_captcha__WEBPACK_IMPORTED_MODULE_17__["ReCaptcha2Component"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_27__["ImageCropperComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], pipes: [TruncatePipe], styles: ["mat-form-field[_ngcontent-%COMP%]{margin-bottom:10px;width:100%}"] });
    return FieldsComponent;
}());
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(FieldsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cb-field',
                templateUrl: './fields.component.html',
                styleUrls: ['./fields.component.css']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, { field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['field']
        }], group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['group']
        }], changed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['changed']
        }], captchaElem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['captchaElem', { static: false }]
        }] }); })();

var LoadingAnimationComponent = /** @class */ (function () {
    function LoadingAnimationComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.ref = this.data.ref || 'dialog';
    }
    LoadingAnimationComponent.prototype.ngOnInit = function () {
    };
    /**
     * define a new text for the animation
     * spinner
     * @param string text
     * @param string reference
     * @return void
     */
    LoadingAnimationComponent.prototype.setText = function (text, ref) {
        if (ref === void 0) { ref = 'dialog'; }
        this.data.text = text;
        this.ref = ref;
    };
    /**
     * close dialog with the following
     * reference
     * @param string ref
     * @return void
     */
    LoadingAnimationComponent.prototype.closeWithRef = function (ref) {
        if (this.ref === ref) {
            this.dialogRef.close();
        }
    };
    LoadingAnimationComponent.ɵfac = function LoadingAnimationComponent_Factory(t) { return new (t || LoadingAnimationComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
    LoadingAnimationComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: LoadingAnimationComponent, selectors: [["cb-spinner"]], decls: 6, vars: 1, consts: [["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "10px", 1, "p-2"], ["diameter", "30", "mode", "indeterminate"], ["fxFlex", "200px"], [1, "mat-body-strong"]], template: function LoadingAnimationComponent_Template(rf, ctx) { if (rf & 1) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "mat-spinner", 1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div", 2);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "span", 3);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(5);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        } if (rf & 2) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(5);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx.data.text);
        } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatSpinner"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"]], styles: ["[_nghost-%COMP%]{overflow:hidden}"] });
    return LoadingAnimationComponent;
}());
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(LoadingAnimationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cb-spinner',
                templateUrl: './loading-animation.component.html',
                styleUrls: ['./loading-animation.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();

function SubMenuListComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "a", 2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function SubMenuListComponent_a_1_Template_a_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r3); var menu_r1 = ctx.$implicit; var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r2.goTo(menu_r1); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "mat-list-item");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var menu_r1 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(menu_r1.text);
} }
var SubMenuListComponent = /** @class */ (function () {
    function SubMenuListComponent(router) {
        this.router = router;
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SubMenuListComponent.prototype.ngOnInit = function () {
    };
    /**
     * GoTo
     * @return void
     */
    SubMenuListComponent.prototype.goTo = function (menu) {
        this.navigate.emit(menu);
        this.router.navigateByUrl(menu.href);
    };
    SubMenuListComponent.ɵfac = function SubMenuListComponent_Factory(t) { return new (t || SubMenuListComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    SubMenuListComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: SubMenuListComponent, selectors: [["cb-submenu"]], inputs: { subMenus: ["childrens", "subMenus"] }, outputs: { navigate: "navigate" }, decls: 2, vars: 1, consts: [[1, "pt-0"], ["matLine", "", 3, "click", 4, "ngFor", "ngForOf"], ["matLine", "", 3, "click"]], template: function SubMenuListComponent_Template(rf, ctx) { if (rf & 1) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-nav-list", 0);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, SubMenuListComponent_a_1_Template, 4, 1, "a", 1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        } if (rf & 2) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx.subMenus);
        } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatLine"], _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListItem"]], styles: ["mat-nav-list[_ngcontent-%COMP%]{background:rgba(233,233,233,.5);border-top:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0}mat-list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:40px}"] });
    return SubMenuListComponent;
}());
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(SubMenuListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cb-submenu',
                templateUrl: './sub-menu-list.component.html',
                styleUrls: ['./sub-menu-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { subMenus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['childrens']
        }], navigate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['navigate']
        }] }); })();

function MenuListComponent_ng_container_1_div_1_i_9_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "i", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "arrow_drop_up");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function MenuListComponent_ng_container_1_div_1_i_10_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "i", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "arrow_drop_down");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function MenuListComponent_ng_container_1_div_1_cb_submenu_11_Template(rf, ctx) { if (rf & 1) {
    var _r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "cb-submenu", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("navigate", function MenuListComponent_ng_container_1_div_1_cb_submenu_11_Template_cb_submenu_navigate_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r9); var ctx_r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3); return ctx_r8.navigate.emit($event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var menu_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2).$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("childrens", menu_r1.childrens);
} }
function MenuListComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r13 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function MenuListComponent_ng_container_1_div_1_Template_div_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r13); var index_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().index; var ctx_r11 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r11.toggle(index_r2); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "mat-list-item");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "i", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(6, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(8, "div", 7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(9, MenuListComponent_ng_container_1_div_1_i_9_Template, 2, 0, "i", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(10, MenuListComponent_ng_container_1_div_1_i_10_Template, 2, 0, "i", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(11, MenuListComponent_ng_container_1_div_1_cb_submenu_11_Template, 1, 1, "cb-submenu", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var menu_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(menu_r1.icon ? menu_r1.icon : "star");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(menu_r1.text);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", menu_r1.open);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !menu_r1.open);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", (menu_r1.childrens == null ? null : menu_r1.childrens.length) > 0 && menu_r1.open);
} }
function MenuListComponent_ng_container_1_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r17 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "a", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function MenuListComponent_ng_container_1_a_2_Template_a_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r17); var menu_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit; var ctx_r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r15.goTo(menu_r1); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "mat-list-item");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "i", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(6, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var menu_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(menu_r1.icon ? menu_r1.icon : "star");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(menu_r1.text);
} }
function MenuListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, MenuListComponent_ng_container_1_div_1_Template, 12, 5, "div", 1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, MenuListComponent_ng_container_1_a_2_Template, 8, 2, "a", 2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    var menu_r1 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", (menu_r1.childrens == null ? null : menu_r1.childrens.length) > 0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !menu_r1.childrens);
} }
var MenuListComponent = /** @class */ (function () {
    function MenuListComponent(router) {
        this.router = router;
        this.sidebarMenus = [];
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MenuListComponent.prototype.ngOnInit = function () {
    };
    /**
     * Open/close current menu
     * @param object menu
     * @todo probably a bad pratice
     */
    MenuListComponent.prototype.toggle = function (index) {
        this.sidebarMenus.forEach(function (menu, __index) {
            if (__index === index) {
                menu.open = menu.open ? !menu.open : true;
            }
            else {
                menu.open = false;
            }
        });
    };
    /**
     * Close All menus
     * @return void
     */
    MenuListComponent.prototype.closeAll = function () {
        this.sidebarMenus.forEach(function (menu) {
            menu.open = false;
        });
    };
    /**
     * GoTo
     * @return void
     */
    MenuListComponent.prototype.goTo = function (menu) {
        this.navigate.emit(menu);
        // navigate to the menu path
        this.router.navigateByUrl(menu.href);
    };
    MenuListComponent.ɵfac = function MenuListComponent_Factory(t) { return new (t || MenuListComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    MenuListComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: MenuListComponent, selectors: [["cb-menu"]], inputs: { sidebarMenus: ["menus", "sidebarMenus"] }, outputs: { navigate: "navigate" }, decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["matLine", "", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["matLine", "", 3, "click", 4, "ngIf"], ["matLine", "", "href", "javascript:void(0)", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", "fxFill", ""], ["fxFlex", "auto", "fxLayout", "row", "fxLayoutAlign", "start center"], [1, "material-icons"], ["fxFlex", "24px"], ["class", "material-icons", 4, "ngIf"], [3, "childrens", "navigate", 4, "ngIf"], [3, "childrens", "navigate"], ["matLine", "", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "w-100"]], template: function MenuListComponent_Template(rf, ctx) { if (rf & 1) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "mat-nav-list");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, MenuListComponent_ng_container_1_Template, 3, 2, "ng-container", 0);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        } if (rf & 2) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx.sidebarMenus);
        } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatLine"], _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListItem"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], SubMenuListComponent], styles: ["mat-list-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{margin-right:16px}mat-nav-list[_ngcontent-%COMP%]{padding-top:0}"] });
    return MenuListComponent;
}());
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(MenuListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cb-menu',
                templateUrl: './menu-list.component.html',
                styleUrls: ['./menu-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { sidebarMenus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['menus']
        }], navigate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['navigate']
        }] }); })();

var MaterialModules = [
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_36__["MatToolbarModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__["MatGridListModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__["MatTabsModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatRippleModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
    _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_29__["MatMomentDateModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: MaterialModule });
    MaterialModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [MaterialModules,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_36__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__["MatGridListModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__["MatTabsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatRippleModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
            _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_29__["MatMomentDateModule"]] });
    return MaterialModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(MaterialModule, { imports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_36__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__["MatTabsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatRippleModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_29__["MatMomentDateModule"]], exports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_36__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__["MatTabsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatRippleModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_29__["MatMomentDateModule"]] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: MaterialModules,
                exports: MaterialModules,
            }]
    }], null, null); })();

var TruncateMiddlePipe = /** @class */ (function () {
    function TruncateMiddlePipe() {
    }
    TruncateMiddlePipe.prototype.transform = function (fullStr, limit, separator) {
        if (limit === void 0) { limit = 20; }
        if (separator === void 0) { separator = '...'; }
        if (fullStr.length <= limit)
            return fullStr;
        var sepLen = separator.length, charsToShow = limit - sepLen, frontChars = Math.ceil(charsToShow / 2), backChars = Math.floor(charsToShow / 2);
        return fullStr.substr(0, frontChars) +
            separator +
            fullStr.substr(fullStr.length - backChars);
    };
    TruncateMiddlePipe.ɵfac = function TruncateMiddlePipe_Factory(t) { return new (t || TruncateMiddlePipe)(); };
    TruncateMiddlePipe.ɵpipe = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"])({ name: "truncateMiddle", type: TruncateMiddlePipe, pure: true });
    return TruncateMiddlePipe;
}());
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(TruncateMiddlePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'truncateMiddle'
            }]
    }], null, null); })();

var MY_MOMENT_FORMATS = {
    parseInput: 'DD/MM/YYYY HH:mm',
    fullPickerInput: 'DD/MM/YYYY HH:mm',
    datePickerInput: 'DD/MM/YYYY',
    timePickerInput: 'HH:mm',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
};
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: CoreModule });
    CoreModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [
            { provide: _danielmoncada_angular_datetime_picker__WEBPACK_IMPORTED_MODULE_23__["OWL_DATE_TIME_FORMATS"], useValue: MY_MOMENT_FORMATS },
        ], imports: [[
                MaterialModule,
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_37__["FlexLayoutModule"],
                ngx_captcha__WEBPACK_IMPORTED_MODULE_17__["NgxCaptchaModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_27__["ImageCropperModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _danielmoncada_angular_datetime_picker__WEBPACK_IMPORTED_MODULE_23__["OwlDateTimeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_38__["DragDropModule"],
                // OwlNativeDateTimeModule,
                _danielmoncada_angular_datetime_picker__WEBPACK_IMPORTED_MODULE_23__["OwlMomentDateTimeModule"]
            ],
            MaterialModule] });
    return CoreModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(CoreModule, { declarations: [CrudTableComponent,
        DialogComponent,
        FieldsComponent,
        LoadingAnimationComponent,
        MenuListComponent,
        SubMenuListComponent,
        TruncatePipe,
        TruncateMiddlePipe,
        FileDropDirective], imports: [MaterialModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_37__["FlexLayoutModule"],
        ngx_captcha__WEBPACK_IMPORTED_MODULE_17__["NgxCaptchaModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_27__["ImageCropperModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _danielmoncada_angular_datetime_picker__WEBPACK_IMPORTED_MODULE_23__["OwlDateTimeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_38__["DragDropModule"],
        // OwlNativeDateTimeModule,
        _danielmoncada_angular_datetime_picker__WEBPACK_IMPORTED_MODULE_23__["OwlMomentDateTimeModule"]], exports: [MaterialModule,
        FieldsComponent,
        CrudTableComponent,
        DialogComponent,
        LoadingAnimationComponent,
        MenuListComponent,
        SubMenuListComponent] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    CrudTableComponent,
                    DialogComponent,
                    FieldsComponent,
                    LoadingAnimationComponent,
                    MenuListComponent,
                    SubMenuListComponent,
                    TruncatePipe,
                    TruncateMiddlePipe,
                    FileDropDirective
                ],
                imports: [
                    MaterialModule,
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_37__["FlexLayoutModule"],
                    ngx_captcha__WEBPACK_IMPORTED_MODULE_17__["NgxCaptchaModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    ngx_image_cropper__WEBPACK_IMPORTED_MODULE_27__["ImageCropperModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _danielmoncada_angular_datetime_picker__WEBPACK_IMPORTED_MODULE_23__["OwlDateTimeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_38__["DragDropModule"],
                    // OwlNativeDateTimeModule,
                    _danielmoncada_angular_datetime_picker__WEBPACK_IMPORTED_MODULE_23__["OwlMomentDateTimeModule"]
                ],
                providers: [
                    { provide: _danielmoncada_angular_datetime_picker__WEBPACK_IMPORTED_MODULE_23__["OWL_DATE_TIME_FORMATS"], useValue: MY_MOMENT_FORMATS },
                ],
                exports: [
                    MaterialModule,
                    FieldsComponent,
                    CrudTableComponent,
                    DialogComponent,
                    LoadingAnimationComponent,
                    MenuListComponent,
                    SubMenuListComponent,
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=cloud-breeze-core.js.map


/***/ }),

/***/ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js":
/*!*****************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/dist/cloud-breeze/services/fesm5/cloud-breeze-services.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: ServicesModule, TendooService, ɵa, ɵb, ɵc, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TendooService", function() { return TendooService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return LoaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return HttpResponseParserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return TendooConfigService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return CB_URL_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return TendooAuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return TendooFieldsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return TendooModulesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return TendooUsersService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return TendooTableService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return TendooFormsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return TendooTabsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return TendooMenusService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return TendooMediasService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return TendooCrudService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return TendooLinkService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return TendooOptionsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return TendooOauthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return TendooUpdateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return ResponsiveService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return TendooSettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "../../node_modules/ngx-cookie-service/fesm5/ngx-cookie-service.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");














var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var HttpResponseParserService = /** @class */ (function () {
    function HttpResponseParserService(route, activeRoute, snackbar) {
        var _this = this;
        this.route = route;
        this.activeRoute = activeRoute;
        this.snackbar = snackbar;
        this.pipes = [];
        this.pipes.push(function (response) {
            return new Promise(function (resolve) {
                if (resolve instanceof ProgressEvent) {
                    _this.snackbar.open('Unable to reach the server right now.', 'OK');
                }
                resolve(response);
            });
        });
        this.pipes.push(function (response) {
            return new Promise(function (resolve) {
                if (response.class !== undefined && [
                    'Tendoo/Core/Exceptions/TendooNotInstalledException',
                    'Tendoo/Core/Exceptions/TendooInstalledException',
                ].indexOf(response.class) !== -1) {
                    _this.snackbar.open(response.message, 'OK', {
                        duration: 4000
                    });
                }
                return resolve(response);
            });
        });
    }
    /**
     * Parse Http Response
     * @param http: AsyncResponse
     */
    HttpResponseParserService.prototype.parse = function (response) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.pipes.forEach(function (parser) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, parser(response)];
                        case 1:
                            response = _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            resolve(response);
        });
    };
    /**
     * push http response parser
     * @param any
     * @return void
     */
    HttpResponseParserService.prototype.pushParser = function (parser) {
        this.pipes.push(parser);
    };
    HttpResponseParserService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    HttpResponseParserService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function HttpResponseParserService_Factory() { return new HttpResponseParserService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); }, token: HttpResponseParserService, providedIn: "root" });
    HttpResponseParserService = __decorate([ __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], HttpResponseParserService);
HttpResponseParserService.ɵfac = function HttpResponseParserService_Factory(t) { return new (t || HttpResponseParserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpResponseParserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();
    return HttpResponseParserService;
}());

var CB_URL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CB_URL_CONFIG');

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var TendooConfigService = /** @class */ (function () {
    function TendooConfigService(options) {
        this.baseUrl = options.base;
        this.angularUrl = options.angular;
    }
    TendooConfigService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CB_URL_CONFIG,] }] }
    ]; };
    TendooConfigService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TendooConfigService_Factory() { return new TendooConfigService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(CB_URL_CONFIG)); }, token: TendooConfigService, providedIn: "root" });
    TendooConfigService = __decorate$1([ __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(CB_URL_CONFIG)),
        __metadata$1("design:paramtypes", [Object])
    ], TendooConfigService);
TendooConfigService.ɵfac = function TendooConfigService_Factory(t) { return new (t || TendooConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CB_URL_CONFIG)); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TendooConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CB_URL_CONFIG]
            }] }]; }, null); })();
    return TendooConfigService;
}());

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LoaderService = /** @class */ (function () {
    function LoaderService(http, httpParser, snackbar, cookie, config) {
        this.http = http;
        this.httpParser = httpParser;
        this.snackbar = snackbar;
        this.cookie = cookie;
        this.config = config;
        this.isLoading = false;
        this.baseUrl = this.config.baseUrl;
        this.angularUrl = this.config.angularUrl;
    }
    LoaderService_1 = LoaderService;
    /**
     * return the list of the currenlty
     * defined headers.
     * @param headers
     */
    LoaderService.prototype.getHeaders = function () {
        return LoaderService_1.headers;
    };
    /**
     * Submit post request
     * @param string url to access
     * @param data data to submit
     */
    LoaderService.prototype.post = function (url, data, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.isLoading = true;
            return _this.__formDataResponse(_this.http.post(url, data, Object.assign({
                headers: LoaderService_1.headers
            }, config)), observer);
        });
    };
    LoaderService.prototype.__formDataResponse = function (http, observer) {
        var _this = this;
        return http.subscribe(function (result) {
            _this.httpParser.parse(result).then(function () {
                _this.isLoading = false;
                observer.next(result);
                observer.complete();
            });
        }, function (result) {
            _this.httpParser.parse(result.error).then(function () {
                _this.isLoading = false;
                observer.error(result);
            });
        });
    };
    /**
     * Submit put request
     * @param string url to access
     * @param data data to submit
     */
    LoaderService.prototype.put = function (url, data) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.isLoading = true;
            return _this.__formDataResponse(_this.http.put(url, data, {
                headers: LoaderService_1.headers
            }), observer);
        });
    };
    /**
     * Submit DELETE request
     * @param string url to access
     * @param data data to submit
     */
    LoaderService.prototype.delete = function (url) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.isLoading = true;
            return _this.http.delete(url, {
                headers: LoaderService_1.headers
            }).subscribe(function (result) {
                _this.isLoading = false;
                observer.next(result);
                observer.complete();
            }, function (result) {
                _this.httpParser.parse(result.error).then(function () {
                    _this.isLoading = false;
                    observer.error(result);
                });
            });
        });
    };
    /**
     * Submit get request
     * @param string url to access
     * @param data data to submit
     */
    LoaderService.prototype.get = function (url) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.isLoading = true;
            return _this.http.get(url, {
                headers: LoaderService_1.headers
            }).subscribe(function (result) {
                _this.httpParser.parse(result).then(function () {
                    _this.isLoading = false;
                    observer.next(result);
                    observer.complete();
                });
            }, function (result) {
                _this.httpParser.parse(result.error).then(function () {
                    _this.isLoading = false;
                    observer.error(result);
                });
            });
        });
    };
    /**
     * delete Selected entries
     * @param array of id
     * @return AyncResponse
     */
    LoaderService.prototype.deleteSelected = function (ids) {
        console.log(this.bulkDeletePath);
        if (this.bulkDeletePath !== undefined) {
            return this.post(this.baseUrl + this.bulkDeletePath, {
                ids: ids
            });
        }
        return false;
    };
    var LoaderService_1;
    LoaderService.asyncLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    LoaderService.config = {};
    LoaderService.headers = {};
    LoaderService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: HttpResponseParserService },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
        { type: TendooConfigService }
    ]; };
    LoaderService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function LoaderService_Factory() { return new LoaderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpResponseParserService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooConfigService)); }, token: LoaderService, providedIn: "root" });
    LoaderService = LoaderService_1 = __decorate$2([ __metadata$2("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            HttpResponseParserService,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
            TendooConfigService])
    ], LoaderService);
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HttpResponseParserService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TendooConfigService)); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: HttpResponseParserService }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }, { type: TendooConfigService }]; }, null); })();
    return LoaderService;
}());

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TendooAuthService = /** @class */ (function (_super) {
    __extends(TendooAuthService, _super);
    function TendooAuthService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * register a new user from the register UI
     * @param data form data
     */
    TendooAuthService.prototype.register = function (data) {
        return this.post(this.baseUrl + "tendoo/auth/registration", data);
    };
    /**
     * attempt to log the user.
     * @param credentials object user credentials
     */
    TendooAuthService.prototype.login = function (credentials) {
        return this.post(this.baseUrl + 'tendoo/auth/login', credentials);
    };
    /**
     * Store the user credentials
     * @param user User Object
     * @param token session token
     */
    TendooAuthService.prototype.setCredentials = function (user, token) {
        LoaderService.headers = {
            'X-AUTH-TOKEN': token
        };
        this.user = user;
    };
    /**
     * Logout the logged user
     * @return void
     */
    TendooAuthService.prototype.logout = function () {
        this.user = undefined;
        var token = this.cookie.get('auth.user');
        LoaderService.headers = {};
        return this.post(this.baseUrl + "tendoo/auth/logout", {
            token: token
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) {
            return value;
        }));
    };
    /**
     * return the logged user
     * @return User
     */
    TendooAuthService.prototype.getUser = function () {
        return this.user;
    };
    /**
     * token login
     * @param string token
     * @return Observable<AsyncResponse>
     */
    TendooAuthService.prototype.tokenLogin = function (token) {
        var _this = this;
        var observable = this.post(this.baseUrl + "tendoo/auth/token", { token: token });
        return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (entry) {
            if (entry.status === 'success') {
                _this.setCredentials(entry.data['user'], entry.data['token']);
            }
            return entry;
        }));
    };
    /**
     * request password reset for a specific
     * email
     * @param string email
     * @return Observable observable of asyncresponse
     */
    TendooAuthService.prototype.requestPasswordReset = function (data) {
        return this.post(this.baseUrl + "tendoo/auth/password-reset", data);
    };
    /**
     * change password of an account, using
     * a provided new password and the hidden
     * request authorization code
     * @param string new password
     * @param string authorizationr request
     * @param number user int
     * @return Observable observable of asyncresponse
     */
    TendooAuthService.prototype.changePassword = function (data) {
        var password = data.password, authorization = data.authorization, user = data.user;
        return this.post(this.baseUrl + "tendoo/auth/change-password/" + user, data);
    };
    /**
     * send activation token
     * and user id, to activate an account
     * @param string token
     * @param number user id
     * @return Observable
     */
    TendooAuthService.prototype.sendActivationCode = function (code, user_id) {
        return this.post(this.baseUrl + "tendoo/auth/activate", { code: code, user_id: user_id });
    };
    /**
     * Request activation for
     * the user provided
     * @param object form data
     * @return Observable
     */
    TendooAuthService.prototype.requestActivationLink = function (formData) {
        return this.post(this.baseUrl + "tendoo/auth/request-activation", formData);
    };
    TendooAuthService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TendooAuthService_Factory() { return new TendooAuthService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpResponseParserService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooConfigService)); }, token: TendooAuthService, providedIn: "root" });
TendooAuthService.ɵfac = function TendooAuthService_Factory(t) { return ɵTendooAuthService_BaseFactory(t || TendooAuthService); };
var ɵTendooAuthService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TendooAuthService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TendooAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
    return TendooAuthService;
}(LoaderService));

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TendooFieldsService = /** @class */ (function (_super) {
    __extends$1(TendooFieldsService, _super);
    function TendooFieldsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get fieds for a specific namespace
     * @param string field namespace
     * @return Objservable.
     */
    TendooFieldsService.prototype.getFields = function (namespace) {
        return this.get(this.baseUrl + 'tendoo/fields/' + namespace);
    };
    /**
     * get public fields using the
     * provided namespace
     * @param string fields namespace
     * @return Observable<AsyncResponse> fields
     */
    TendooFieldsService.prototype.getPublicFields = function (namespace) {
        return this.get(this.baseUrl + 'tendoo/public/fields/' + namespace);
    };
    TendooFieldsService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TendooFieldsService_Factory() { return new TendooFieldsService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpResponseParserService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooConfigService)); }, token: TendooFieldsService, providedIn: "root" });
TendooFieldsService.ɵfac = function TendooFieldsService_Factory(t) { return ɵTendooFieldsService_BaseFactory(t || TendooFieldsService); };
var ɵTendooFieldsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TendooFieldsService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TendooFieldsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
    return TendooFieldsService;
}(TendooAuthService));

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TendooModulesService = /** @class */ (function (_super) {
    __extends$2(TendooModulesService, _super);
    function TendooModulesService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TendooModulesService.prototype.resetMigrations = function (module) {
        return this.post(this.baseUrl + "tendoo/modules/reset-migrations", { namespace: module.namespace });
    };
    TendooModulesService.prototype.getAll = function () {
        return this.get(this.baseUrl + 'tendoo/modules');
    };
    /**
     * upload a zip file to Tendoo CMS
     * server
     * @param file
     * @return void
     */
    TendooModulesService.prototype.uploadFile = function (file) {
        var endpoint = 'your-destination-url';
        var formData = new FormData();
        formData.append('module', file, file.name);
        return this.post(this.baseUrl + 'tendoo/modules/upload', formData);
    };
    /**
     * delete a module
     * @param string module namespace
     * @return void
     */
    TendooModulesService.prototype.deleteModule = function (namespace) {
        return this.delete(this.baseUrl + 'tendoo/modules/' + namespace);
    };
    /**
     * Enable a module
     * @param string module namespace
     * @return Observable AsyncResponse
     */
    TendooModulesService.prototype.enable = function (module) {
        return this.post(this.baseUrl + 'tendoo/modules/enable', { module: module });
    };
    /**
     * Disable a module
     * @param string module namespace
     * @return Observable AsyncReponse
     */
    TendooModulesService.prototype.disable = function (module) {
        return this.post(this.baseUrl + 'tendoo/modules/disable', { module: module });
    };
    /**
     * get a single module details
     * @param string module namespace
     * @return Observable CoreModule
     */
    TendooModulesService.prototype.getModule = function (namespace) {
        return this.get(this.baseUrl + "tendoo/modules/" + namespace);
    };
    /**
     * Run a specific migration for thie provided module
     * @param string module namespace
     * @param string file path to run
     * @return Promise
     */
    TendooModulesService.prototype.runMigration = function (namespace, file, version) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.post(_this.baseUrl + "tendoo/modules/" + namespace + "/migration", {
                namespace: namespace, file: file, version: version
            }).subscribe(function (result) {
                resolve(result);
            }, function (error) {
                reject(error);
            });
        });
    };
    TendooModulesService.prototype.download = function (namespace) {
        return this.get(this.baseUrl + "tendoo/modules/" + namespace + "/download");
    };
    /**
     * generate symlink for the
     * the selected module
     * @param string namespace
     * @return Observable response
     */
    TendooModulesService.prototype.createSymLink = function (namespace) {
        return this.get(this.baseUrl + "tendoo/modules/" + namespace + "/symlink");
    };
    TendooModulesService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TendooModulesService_Factory() { return new TendooModulesService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpResponseParserService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooConfigService)); }, token: TendooModulesService, providedIn: "root" });
TendooModulesService.ɵfac = function TendooModulesService_Factory(t) { return ɵTendooModulesService_BaseFactory(t || TendooModulesService); };
var ɵTendooModulesService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TendooModulesService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TendooModulesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
    return TendooModulesService;
}(TendooAuthService));

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TendooUsersService = /** @class */ (function (_super) {
    __extends$3(TendooUsersService, _super);
    function TendooUsersService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * bulk delete path
         */
        _this.bulkDeletePath = 'tendoo/users/delete-selected';
        return _this;
    }
    /**
     * get users
     * @return json
     */
    TendooUsersService.prototype.getUsers = function (param) {
        if (param === void 0) { param = ''; }
        return this.get(this.baseUrl + 'tendoo/users?' + param);
    };
    /**
     * edit a user using a provided id
     * @param int user id
     * @param object data to update
     * @return Objservable of AsyncResponse
     */
    TendooUsersService.prototype.edit = function (id, data) {
        return this.put(this.baseUrl + 'tendoo/users/' + id, data);
    };
    /**
     * create a users using provided data
     * @param data
     * @return Observable<AsyncReponse>
     */
    TendooUsersService.prototype.create = function (data) {
        return this.post(this.baseUrl + 'tendoo/users', data);
    };
    TendooUsersService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TendooUsersService_Factory() { return new TendooUsersService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpResponseParserService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooConfigService)); }, token: TendooUsersService, providedIn: "root" });
TendooUsersService.ɵfac = function TendooUsersService_Factory(t) { return ɵTendooUsersService_BaseFactory(t || TendooUsersService); };
var ɵTendooUsersService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TendooUsersService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TendooUsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
    return TendooUsersService;
}(TendooAuthService));

var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TendooTableService = /** @class */ (function (_super) {
    __extends$4(TendooTableService, _super);
    function TendooTableService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TendooTableService.prototype.getColumns = function (table) {
        return this.get(this.baseUrl + 'tendoo/tables/' + table);
    };
    TendooTableService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TendooTableService_Factory() { return new TendooTableService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpResponseParserService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooConfigService)); }, token: TendooTableService, providedIn: "root" });
TendooTableService.ɵfac = function TendooTableService_Factory(t) { return ɵTendooTableService_BaseFactory(t || TendooTableService); };
var ɵTendooTableService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TendooTableService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TendooTableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
    return TendooTableService;
}(TendooAuthService));

var __extends$5 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TendooFormsService = /** @class */ (function (_super) {
    __extends$5(TendooFormsService, _super);
    function TendooFormsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * get a form
     * @param namespace form namespace
     * @param index entry index
     */
    TendooFormsService.prototype.getForm = function (namespace, index) {
        var url = this.baseUrl + 'tendoo/forms/' + namespace;
        if (index !== undefined) {
            url += '/' + index;
        }
        return this.get(url);
    };
    /**
     * return a public form available for the frontend
     * @param string namespace
     * @param int number
     * @reutrn Form;
     */
    TendooFormsService.prototype.getPublicForm = function (namespace, index) {
        var url = this.baseUrl + 'tendoo/public/forms/' + namespace;
        if (index !== undefined) {
            url += '/' + index;
        }
        return this.get(url);
    };
    /**
     * save a form
     * @param string namespace
     * @param array data[ key: any ]
     * @param number index
     */
    TendooFormsService.prototype.saveForm = function (namespace, data, index) {
        var url = this.baseUrl + 'tendoo/forms/' + namespace;
        return this.post(url, data);
    };
    TendooFormsService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TendooFormsService_Factory() { return new TendooFormsService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpResponseParserService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooConfigService)); }, token: TendooFormsService, providedIn: "root" });
TendooFormsService.ɵfac = function TendooFormsService_Factory(t) { return ɵTendooFormsService_BaseFactory(t || TendooFormsService); };
var ɵTendooFormsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TendooFormsService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TendooFormsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
    return TendooFormsService;
}(LoaderService));

var __extends$6 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TendooTabsService = /** @class */ (function (_super) {
    __extends$6(TendooTabsService, _super);
    function TendooTabsService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slug = 'tendoo/tabs';
        return _this;
    }
    TendooTabsService.prototype.getTabs = function (name) {
        var _this = this;
        return this.get("" + this.baseUrl + this.slug + "/" + name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (entries) { return entries; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (result) {
            _this.snackbar.open(result.error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        }));
    };
    TendooTabsService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TendooTabsService_Factory() { return new TendooTabsService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpResponseParserService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooConfigService)); }, token: TendooTabsService, providedIn: "root" });
TendooTabsService.ɵfac = function TendooTabsService_Factory(t) { return ɵTendooTabsService_BaseFactory(t || TendooTabsService); };
var ɵTendooTabsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TendooTabsService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TendooTabsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
    return TendooTabsService;
}(LoaderService));

var __extends$7 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$a = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TendooMenusService = /** @class */ (function (_super) {
    __extends$7(TendooMenusService, _super);
    function TendooMenusService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * get menu
     * @return observable of link
     */
    TendooMenusService.prototype.getMenus = function (namespace) {
        return this.get(this.baseUrl + 'tendoo/menus/dashboard.aside');
    };
    TendooMenusService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TendooMenusService_Factory() { return new TendooMenusService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpResponseParserService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooConfigService)); }, token: TendooMenusService, providedIn: "root" });
    TendooMenusService = __decorate$a([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooMenusService);
    return TendooMenusService;
}(LoaderService));

var __extends$8 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$b = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TendooMediasService = /** @class */ (function (_super) {
    __extends$8(TendooMediasService, _super);
    function TendooMediasService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * load medias as saved on the media manager.
     * @param string url to the media endpoint. let you override the loading URL
     */
    TendooMediasService.prototype.getMedias = function (page) {
        if (page === void 0) { page = null; }
        return this.get(this.baseUrl + 'tendoo/medias' + (page !== null ? '?page=' + page : ''));
    };
    /**
     * delete a specific media provided
     * @param Media media object to delete
     * @return observable<AsyncResponse>
     */
    TendooMediasService.prototype.deleteMedia = function (medias) {
        return this.post(this.baseUrl + 'tendoo/medias/delete', { medias: medias });
    };
    /**
     * get a single medias
     * @param int media id
     * @return observable<Media>
     */
    TendooMediasService.prototype.getMedia = function (id) {
        return this.get(this.baseUrl + "tendoo/medias/" + id);
    };
    /**
     * Download media
     * @param number media id
     * @return Observable
     */
    TendooMediasService.prototype.downloadMedia = function (id) {
        return this._get("download/" + id);
    };
    TendooMediasService.prototype._get = function (url) {
        return this.get(this.baseUrl + "tendoo/medias/" + url);
    };
    /**
     * Delete single media using a provided id
     * @param id media id to delete
     */
    TendooMediasService.prototype.deleteMediaById = function (id) {
        return this.delete(this.baseUrl + 'tendoo/medias/' + id);
    };
    /**
     * Upload a single file
     * @param file object
     */
    TendooMediasService.prototype.uploadFile = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](LoaderService.headers);
            var form = new FormData;
            form.append('file', file);
            var httpRequest = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', _this.baseUrl + "tendoo/medias", form, {
                headers: headers,
                reportProgress: true
            });
            _this.http.request(httpRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (event) {
                switch (event.type) {
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Sent:
                        file['progress'] = 0;
                        file['uploaded'] = false;
                        file['error'] = false;
                        break;
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress:
                        file['progress'] = Math.round(100 * event.loaded / event.total);
                        file['uploaded'] = false;
                        file['error'] = false;
                        break;
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].ResponseHeader:
                        file['progress'] = 0;
                        file['uploaded'] = false;
                        file['error'] = true;
                        break;
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response:
                        file['progress'] = 100;
                        file['uploaded'] = true;
                        file['error'] = false;
                        break;
                }
                return event;
            })).subscribe(function (upload) {
                if (upload instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                    resolve(file);
                }
            }, function (error) {
                reject(file);
            });
        });
    };
    TendooMediasService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TendooMediasService_Factory() { return new TendooMediasService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpResponseParserService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooConfigService)); }, token: TendooMediasService, providedIn: "root" });
    TendooMediasService = __decorate$b([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooMediasService);
    return TendooMediasService;
}(LoaderService));

var __extends$9 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$c = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TendooCrudService = /** @class */ (function (_super) {
    __extends$9(TendooCrudService, _super);
    function TendooCrudService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TendooCrudService.prototype.getColumns = function (namespace) {
        return this.get(this.baseUrl + 'tendoo/crud/' + namespace + '/columns');
    };
    TendooCrudService.prototype.serialize = function (obj) {
        var str = [];
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        }
        return str.join('&');
    };
    /**
     * Get entries for a defined Crud Resource
     * @param namespace crud namespace
     * @return Observable<TableEntries>
     */
    TendooCrudService.prototype.getEntries = function (namespace, params) {
        if (params === void 0) { params = null; }
        return this.get(this.baseUrl + 'tendoo/crud/' + namespace + (params !== null ? '?' + this.serialize(params) : ''));
    };
    /**
     * Get a CRUD configuration along with entries
     * @param namespace crud namespace
     * @param params route parameters
     */
    TendooCrudService.prototype.getConfig = function (namespace, params) {
        if (params === void 0) { params = null; }
        return this.get(this.baseUrl + 'tendoo/crud/' + namespace + '/config' + (params !== null ? '?' + this.serialize(params) : ''));
    };
    /**
     * delete selected entries
     * @param array of id
     * @return Observable<AsyncResponse>
     */
    TendooCrudService.prototype.deleteBulkEntries = function (namespace, ids) {
        return this.post(this.baseUrl + 'tendoo/crud/' + namespace + '/bulk-actions', {
            entries_id: ids,
            action: 'bulk-delete'
        });
    };
    /**
     * Performa a specific action to the server
     * @param namespace crud namespace
     * @param entry data
     */
    TendooCrudService.prototype.performAction = function (namespace, entry) {
        var method = entry.menu.type.toLowerCase();
        return this[method]("" + this.baseUrl + entry.url, entry.menu);
    };
    /**
     * Proceed to a bulk action
     * @param namespace crud namespace
     * @param config config object
     */
    TendooCrudService.prototype.performBulkAction = function (namespace, config) {
        return this.post(this.baseUrl + "tendoo/crud/" + namespace + "/bulk-actions", config);
    };
    /**
     * Get form create config
     * @param string namespace
     * @return observable
     */
    TendooCrudService.prototype.getFormConfig = function (namespace, id) {
        if (id === void 0) { id = null; }
        var param = id === null ? '' : "/" + id;
        return this.get(this.baseUrl + "tendoo/crud/" + namespace + "/form-config" + param);
    };
    /**
     * post form
     * @param string namespace
     * @param object data
     * @return observable.
     */
    TendooCrudService.prototype.postForm = function (namespace, data) {
        return this.post(this.baseUrl + "tendoo/crud/" + namespace, data);
    };
    /**
     * Put a form request to a crud instance.
     * @param namespace crud resource namespace
     * @param id of the current entity
     * @param data form data
     */
    TendooCrudService.prototype.putForm = function (namespace, id, data) {
        return this.put(this.baseUrl + "tendoo/crud/" + namespace + "/" + id, data);
    };
    /**
     * act as a guard to proceed a crud instance
     * @param object {type: string, namespace: string }
     * @return Observable<AsyncResponse>
     */
    TendooCrudService.prototype.canAccess = function (data) {
        var namespace = data.namespace, type = data.type;
        return this.post(this.baseUrl + "tendoo/crud/" + namespace + "/can-access", data);
    };
    TendooCrudService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TendooCrudService_Factory() { return new TendooCrudService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpResponseParserService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooConfigService)); }, token: TendooCrudService, providedIn: "root" });
    TendooCrudService = __decorate$c([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooCrudService);
    return TendooCrudService;
}(LoaderService));

var __extends$a = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$d = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TendooOptionsService = /** @class */ (function (_super) {
    __extends$a(TendooOptionsService, _super);
    function TendooOptionsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TendooOptionsService.prototype.getOption = function (key) {
        return this.get(this.baseUrl + "tendoo/options/" + key);
    };
    TendooOptionsService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TendooOptionsService_Factory() { return new TendooOptionsService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpResponseParserService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooConfigService)); }, token: TendooOptionsService, providedIn: "root" });
    TendooOptionsService = __decorate$d([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooOptionsService);
    return TendooOptionsService;
}(LoaderService));

var __extends$b = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$e = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TendooLinkService = /** @class */ (function (_super) {
    __extends$b(TendooLinkService, _super);
    function TendooLinkService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @param namespace
     * @param data
     * @todo investigation needed why while using 'application/zip' that cause
     * unexpected behaviour while downloading
     */
    TendooLinkService.prototype.signed = function (namespace, data) {
        return this.post(this.baseUrl + "tendoo/url/signed/" + namespace, data, {
            headers: Object.assign({}, {
            // 'Content-Type'  :   'application/zip'
            }, LoaderService.headers),
        });
    };
    TendooLinkService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TendooLinkService_Factory() { return new TendooLinkService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpResponseParserService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooConfigService)); }, token: TendooLinkService, providedIn: "root" });
    TendooLinkService = __decorate$e([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooLinkService);
    return TendooLinkService;
}(LoaderService));

var __extends$c = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$f = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TendooOauthService = /** @class */ (function (_super) {
    __extends$c(TendooOauthService, _super);
    function TendooOauthService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TendooOauthService.prototype.getApplication = function (appId) {
        return this.get(this.baseUrl + "tendoo/applicaitons/" + appId);
    };
    /**
     * Return a list of registered scope and compare it to the
     * application requested scope
     * @param rawScopes get registered scopes
     */
    TendooOauthService.prototype.getScopes = function (id, rawScopes) {
        var scopes = rawScopes.split(',');
        return this.post(this.baseUrl + "tendoo/auth/scopes/" + id, {
            scopes: scopes
        });
    };
    /**
     * Authenticate an application in order to
     * authorize a oauth request.
     * @param data applicatoin data
     */
    TendooOauthService.prototype.authenticateApplication = function (data) {
        return this.post(this.baseUrl + "tendoo/auth/application", data);
    };
    /**
     * Send an Oauth request to the server
     * to authorize incoming Api request
     * @param request
     */
    TendooOauthService.prototype.grantRequest = function (request) {
        return this.post(this.baseUrl + "tendoo/auth/request", request);
    };
    /**
     * get authorized applications
     * @return Observable<data>
     */
    TendooOauthService.prototype.getAuthorizedApplication = function () {
        return this.get(this.baseUrl + "tendoo/applications/authorized");
    };
    /**
     * Revoque Applications
     * @param number application id
     * @reutrn Observable<AsyncResponse>
     */
    TendooOauthService.prototype.revoqueApp = function (id) {
        return this.get(this.baseUrl + "tendoo/applications/revoke/" + id);
    };
    TendooOauthService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TendooOauthService_Factory() { return new TendooOauthService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpResponseParserService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooConfigService)); }, token: TendooOauthService, providedIn: "root" });
    TendooOauthService = __decorate$f([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooOauthService);
    return TendooOauthService;
}(LoaderService));

var __extends$d = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$g = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TendooUpdateService = /** @class */ (function (_super) {
    __extends$d(TendooUpdateService, _super);
    function TendooUpdateService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TendooUpdateService.prototype.needsUpdate = function (result) {
        var _this = this;
        var queue = [];
        var dbStatus = result.migrations.system.db;
        var assetsStatus = result.migrations.system.assets;
        /**
         * if the version saved on the database is different from the
         * version available on the files, it means that we need
         * to proceed to a migration. Note that the file version
         * are supposed to be the reference
         */
        if (dbStatus.file_version !== dbStatus.db_version) {
            queue.push({
                exec: function () {
                    return new Promise(function (resolve, reject) {
                        _this.updateDatabase().subscribe(function (result) {
                            resolve(result);
                        }, function (result) {
                            reject(result);
                        });
                    });
                },
                before: 'Updating the database...'
            });
        }
        if (assetsStatus.file_version !== assetsStatus.db_version) {
            queue.push({
                exec: function () {
                    return new Promise(function (resolve, reject) {
                        _this.updateAssets().subscribe(function (result) {
                            console.log(result);
                            resolve(result);
                        }, function (result) {
                            reject(result);
                        });
                    });
                },
                before: 'Updating the assets...'
            });
        }
        return queue;
    };
    /**
     * Update database
     * @param string start from
     * @return Observable
     */
    TendooUpdateService.prototype.updateDatabase = function () {
        return this.get(this.baseUrl + "tendoo/update/database");
    };
    /**
     * Upate assets
     * @param string start from
     * @return Observable
     */
    TendooUpdateService.prototype.updateAssets = function () {
        return this.get(this.baseUrl + "tendoo/update/assets");
    };
    TendooUpdateService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TendooUpdateService_Factory() { return new TendooUpdateService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpResponseParserService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooConfigService)); }, token: TendooUpdateService, providedIn: "root" });
    TendooUpdateService = __decorate$g([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooUpdateService);
    return TendooUpdateService;
}(LoaderService));

var __extends$e = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$h = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TendooSettingsService = /** @class */ (function (_super) {
    __extends$e(TendooSettingsService, _super);
    function TendooSettingsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TendooSettingsService.prototype.getSettings = function (namespace) {
        return this.get(this.baseUrl + "tendoo/settings/" + namespace);
    };
    TendooSettingsService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TendooSettingsService_Factory() { return new TendooSettingsService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpResponseParserService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooConfigService)); }, token: TendooSettingsService, providedIn: "root" });
    TendooSettingsService = __decorate$h([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooSettingsService);
    return TendooSettingsService;
}(LoaderService));

var __decorate$i = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ResponsiveService = /** @class */ (function () {
    function ResponsiveService() {
        var _this = this;
        this.callbacks = [];
        // taken from bootstrap's grid system
        this.breakpoints = {
            xs: '(max-width:575px)',
            sm: '(min-width:576px) and (max-width:767px)',
            md: '(min-width:768px) and (max-width:991px)',
            lg: '(min-width:992px) and (max-width:1199px)',
            xl: '(min-width:1200px)'
        };
        this.xsOrs = this.breakpoints.xs + ',' + this.breakpoints.sm;
        this.isXS = function () { return _this.ruleIsMet(_this.breakpoints.xs); };
        this.isSM = function () { return _this.ruleIsMet(_this.breakpoints.sm); };
        this.isMD = function () { return _this.ruleIsMet(_this.breakpoints.md); };
        this.isLG = function () { return _this.ruleIsMet(_this.breakpoints.lg); };
        this.isXL = function () { return _this.ruleIsMet(_this.breakpoints.xl); };
        this.isSmallScreen = function () { return _this.ruleIsMet(_this.xsOrs); };
        this.registerChangeCallback = function (f) {
            _this.callbacks.push(f);
        };
        this.ruleIsMet = function (rule) { return window.matchMedia(rule).matches; };
        this.callSubscribers = function () {
            var len = _this.callbacks.length;
            if (len == 0) {
                return;
            }
            var i = 0;
            for (; i < len; i++) {
                _this.callbacks[i]();
            }
        };
        window.onresize = this.callSubscribers;
    }
    /**
     * define values
     * @param object
     */
    ResponsiveService.prototype.define = function (values) {
        if (this.isXS()) {
            return values.xs;
        }
        else if (this.isSM()) {
            return values.sm;
        }
        else if (this.isMD()) {
            return values.md;
        }
        else if (this.isLG()) {
            return values.lg;
        }
        else if (this.isXL()) {
            return values.xl;
        }
    };
    ResponsiveService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ResponsiveService_Factory() { return new ResponsiveService(); }, token: ResponsiveService, providedIn: "root" });
    ResponsiveService = __decorate$i([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata$3("design:paramtypes", [])
    ], ResponsiveService);
    return ResponsiveService;
}());

var __extends$f = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$j = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TendooService = /** @class */ (function (_super) {
    __extends$f(TendooService, _super);
    function TendooService(http, httpParser, snackbar, auth, fields, modules, users, tables, forms, tabs, menus, medias, crud, links, options, oauth, update, title, cookie, responsive, settings, config) {
        var _this = _super.call(this, http, httpParser, snackbar, cookie, config) || this;
        _this.auth = auth;
        _this.fields = fields;
        _this.modules = modules;
        _this.users = users;
        _this.tables = tables;
        _this.forms = forms;
        _this.tabs = tabs;
        _this.menus = menus;
        _this.medias = medias;
        _this.crud = crud;
        _this.links = links;
        _this.options = options;
        _this.oauth = oauth;
        _this.update = update;
        _this.title = title;
        _this.cookie = cookie;
        _this.responsive = responsive;
        _this.settings = settings;
        _this.config = config;
        return _this;
    }
    TendooService.prototype.dashboardTitle = function (title) {
        this.titleText = title;
        this.title.setTitle(title + " - Dashboard");
    };
    TendooService.prototype.getDashboardTitle = function () {
        return this.titleText;
    };
    TendooService.prototype.dashboardDescription = function (description) {
        this.description = description;
    };
    /**
     *
     * @param string title
     */
    TendooService.prototype.setTitle = function (title) {
        this.title.setTitle("" + title);
    };
    /**
     * get angular assets
     * @param string
     * @return string
     */
    TendooService.prototype.getAsset = function (assetUrl) {
        return this.angularUrl + assetUrl;
    };
    TendooService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: HttpResponseParserService },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: TendooAuthService },
        { type: TendooFieldsService },
        { type: TendooModulesService },
        { type: TendooUsersService },
        { type: TendooTableService },
        { type: TendooFormsService },
        { type: TendooTabsService },
        { type: TendooMenusService },
        { type: TendooMediasService },
        { type: TendooCrudService },
        { type: TendooLinkService },
        { type: TendooOptionsService },
        { type: TendooOauthService },
        { type: TendooUpdateService },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
        { type: ResponsiveService },
        { type: TendooSettingsService },
        { type: TendooConfigService }
    ]; };
    TendooService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TendooService_Factory() { return new TendooService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpResponseParserService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooAuthService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooFieldsService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooModulesService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooUsersService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooTableService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooFormsService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooTabsService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooMenusService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooMediasService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooCrudService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooLinkService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooOptionsService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooOauthService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooUpdateService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ResponsiveService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooSettingsService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TendooConfigService)); }, token: TendooService, providedIn: "root" });
    TendooService = __decorate$j([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata$4("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            HttpResponseParserService,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            TendooAuthService,
            TendooFieldsService,
            TendooModulesService,
            TendooUsersService,
            TendooTableService,
            TendooFormsService,
            TendooTabsService,
            TendooMenusService,
            TendooMediasService,
            TendooCrudService,
            TendooLinkService,
            TendooOptionsService,
            TendooOauthService,
            TendooUpdateService,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
            ResponsiveService,
            TendooSettingsService,
            TendooConfigService])
    ], TendooService);
    return TendooService;
}(LoaderService));

var __decorate$k = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule_1 = ServicesModule;
    ServicesModule.forRoot = function (config) {
        return {
            ngModule: ServicesModule_1,
            providers: [
                {
                    provide: CB_URL_CONFIG,
                    useValue: config
                }
            ]
        };
    };
    var ServicesModule_1;
    ServicesModule = ServicesModule_1 = __decorate$k([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
            ],
            providers: [
                TendooService,
            ],
        })
    ], ServicesModule);
    return ServicesModule;
}());

/*
 * Public API Surface of services
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=cloud-breeze-services.js.map

/***/ }),

/***/ "../../dist/cloud-breeze/utilities/fesm5/cloud-breeze-utilities.js":
/*!*******************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/dist/cloud-breeze/utilities/fesm5/cloud-breeze-utilities.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: TruncateMiddlePipe, TruncatePipe, UtilityModule, ValidationGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncateMiddlePipe", function() { return TruncateMiddlePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityModule", function() { return UtilityModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationGenerator", function() { return ValidationGenerator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");




var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args.limit === undefined ? 20 : parseInt(args.limit);
        return value.length > limit ? value.substr(0, limit) + '...' : value;
    };
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncate", type: TruncatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'truncate'
            }]
    }], function () { return []; }, null); })();
    return TruncatePipe;
}());

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TruncateMiddlePipe = /** @class */ (function () {
    function TruncateMiddlePipe() {
    }
    TruncateMiddlePipe.prototype.transform = function (fullStr, limit, separator) {
        if (limit === void 0) { limit = 20; }
        if (separator === void 0) { separator = '...'; }
        if (fullStr.length <= limit)
            return fullStr;
        var sepLen = separator.length, charsToShow = limit - sepLen, frontChars = Math.ceil(charsToShow / 2), backChars = Math.floor(charsToShow / 2);
        return fullStr.substr(0, frontChars) +
            separator +
            fullStr.substr(fullStr.length - backChars);
    };
TruncateMiddlePipe.ɵfac = function TruncateMiddlePipe_Factory(t) { return new (t || TruncateMiddlePipe)(); };
TruncateMiddlePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncateMiddle", type: TruncateMiddlePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncateMiddlePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'truncateMiddle'
            }]
    }], function () { return []; }, null); })();
    return TruncateMiddlePipe;
}());

function MatchesValidator(matches) {
    return function (control) {
        if (control.value !== control.parent.get(matches).value) {
            return {
                'matches': {
                    'formControl': control.parent.get(matches),
                    'formControlName': matches
                }
            };
        }
        return null;
    };
}

function Numbervalidator() {
    return function (control) {
        if (!/^\d+$/.exec(control.value)) {
            return {
                'number': true
            };
        }
        return null;
    };
}

var ValidationGenerator = /** @class */ (function () {
    function ValidationGenerator() {
    }
    /**
     * generate a validator from field validation property
     * @param string validation string;
     * @return array of validaiton
     */
    ValidationGenerator.from = function (validation) {
        if (validation) {
            /**
             * make sure to skip
             * validation of object
             */
            if (typeof validation !== 'string') {
                validation = validation.filter(function (rule) {
                    return typeof rule === 'string';
                });
                validation = validation.join('|');
            }
            var finalRules_1 = [];
            var rules = validation.split('|');
            var minRule_1 = /(min)\:([0-9])+/g;
            var maxRule_1 = /(max)\:([0-9])+/g;
            var matchRule_1 = /(same):(\w+)/g;
            var result_1;
            /**
             * Loop and parses the rules
             */
            rules.forEach(function (rule) {
                if (rule == 'required') {
                    finalRules_1.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                }
                else if (rule == 'email') {
                    finalRules_1.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email);
                }
                else if (result_1 = minRule_1.exec(rule)) {
                    finalRules_1.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(result_1[2]));
                }
                else if (result_1 = maxRule_1.exec(rule)) {
                    finalRules_1.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(result_1[2]));
                }
                else if (result_1 = matchRule_1.exec(rule)) {
                    finalRules_1.push(MatchesValidator(result_1[2]));
                }
                else if (rule == 'number') {
                    finalRules_1.push(Numbervalidator());
                }
            });
            return finalRules_1;
        }
        return null;
    };
    /**
     * Extract FormControl from Field object
     * @param array fields
     * @return object of FormControl
     */
    ValidationGenerator.extractControls = function (fields, ignoreEmpty) {
        var _this = this;
        if (ignoreEmpty === void 0) { ignoreEmpty = false; }
        var formControl = {};
        fields.forEach(function (field) {
            /**
             * the field.control is required in order to extract a control
             * unless if that should ignore empty controls
             */
            if (field.control === undefined && ignoreEmpty == false) {
                throw "Unable to use the validation control for the field : \"" + field.name + "\". Please make sure to define the '.control' property for this field.";
            }
            if (field.control) {
                field.control.setValidators(_this.from(field.validation));
                formControl[field.name] = field.control;
            }
        });
        return formControl;
    };
    /**
     * Build FormControl from Field object
     * create FormControl if it's not defined and call
     * extractControls to build the FormControl
     * @param Field object
     * @return FormControl
     */
    ValidationGenerator.buildFormControls = function (fields) {
        var formControls = {};
        fields.forEach(function (field) {
            if (field.control == undefined) {
                field.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](field.value ? field.value : null);
            }
            else {
                field.control.setValue(field.value);
            }
        });
        return this.extractControls(fields);
    };
    /**
     * Build FormControl from Field object.
     * Create FormControl if it's not defined and call
     * extractControls to build the FormControl
     * @param Field object
     * @return FormControl
     */
    ValidationGenerator.buildFormControl = function (field) {
        if (field.control == undefined) {
            field.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](field.value || null);
        }
        else {
            field.control.setValue(field.value || null);
        }
        /**
         * each field should
         * support a reset event while
         * being built
         */
        field.reset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return this.extractControls([field])[field.name];
    };
    /**
     * touch all fields of a provided FormGroup
     * @param form
     */
    ValidationGenerator.touchAllFields = function (form) {
        /**
         * Trigger touch even on all fields.
         * Start by looping tabs
         */
        Object.keys(form.controls).forEach(function (field) {
            form.get(field).markAsTouched();
        });
    };
    /**
     * Build From Field Array
     * @param array Field[]
     * @return FormGroup
     */
    ValidationGenerator.buildFormGroup = function (fields) {
        fields.forEach(function (field) {
            field.control = ValidationGenerator.buildFormControl(field);
        });
        return {
            fields: fields,
            formGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](ValidationGenerator.extractControls(fields))
        };
    };
    /**
     * Disable all field provided as an array of Field.
     * @param array Field[]
     * @return void
     */
    ValidationGenerator.deactivateFields = function (fields) {
        fields.forEach(function (field) { return field.control.disable(); });
    };
    /**
     * Enable all field provided as an array of Field.
     * @param array Field[]
     * @return void
     */
    ValidationGenerator.enableFields = function (fields) {
        fields.forEach(function (field) { return field.control.enable(); });
    };
    /**
     * Throw custom errors on fields and FormGroup
     * @param array Field[]
     * @param error FieldError
     * @return void
     */
    ValidationGenerator.throwFieldsError = function (group, fields, errors) {
        var _loop_1 = function (error) {
            group.get(error).setErrors({ error: true });
            fields.forEach(function (field) {
                if (field.name === error) {
                    field.errors = errors[field.name];
                }
            });
        };
        for (var error in errors) {
            _loop_1(error);
        }
    };
    /**
     * Get valid value from FromGroup.
     * This skip null value from the final object
     * @param object FormGroup value
     * @return object result
     */
    ValidationGenerator.noNullValue = function (group) {
        var finalData = {};
        for (var key in group.value) {
            if (group.value[key] !== null) {
                finalData[key] = group.value[key];
            }
        }
        return finalData;
    };
    /**
     * Create a form group for a specified Form interface.
     * use the availabel fields within the sections to generate it.
     * @param form Form configuration
     */
    ValidationGenerator.buildForm = function (form) {
        var groups = {};
        form.sections.forEach(function (section) {
            var form = ValidationGenerator.buildFormGroup(section.fields).formGroup;
            section.formGroup = form;
            groups[section.namespace] = section.formGroup;
        });
        form.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](groups);
        return form;
    };
    /**
     * Trigger a touch even on a FormGroup object
     * defined within a Form.
     * @param form Form object
     */
    ValidationGenerator.touchFormFields = function (form) {
        form.sections.forEach(function (section) { return ValidationGenerator.touchAllFields(section.formGroup); });
    };
    /**
     * Deactivate all form/section fields.
     * @param form Form
     */
    ValidationGenerator.deactivateFormFiiels = function (form) {
        form.sections.forEach(function (s) { return ValidationGenerator.deactivateFields(s.fields); });
    };
    /**
     * Enable Form Fields
     * @param form Form
     */
    ValidationGenerator.enableFormFields = function (form) {
        form.sections.forEach(function (s) { return ValidationGenerator.enableFields(s.fields); });
    };
    return ValidationGenerator;
}());

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UtilityModule = /** @class */ (function () {
    function UtilityModule() {
    }
UtilityModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UtilityModule });
UtilityModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UtilityModule_Factory(t) { return new (t || UtilityModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UtilityModule, { declarations: [TruncateMiddlePipe,
        TruncatePipe], exports: [TruncateMiddlePipe,
        TruncatePipe] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilityModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    TruncateMiddlePipe,
                    TruncatePipe,
                ],
                exports: [
                    TruncateMiddlePipe,
                    TruncatePipe,
                ]
            }]
    }], function () { return []; }, null); })();
    return UtilityModule;
}());

/*
 * Public API Surface of utilities
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=cloud-breeze-utilities.js.map

/***/ }),

/***/ "../../node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/moment/locale sync ^\.\/.*$ ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../node_modules/moment/locale/af.js",
	"./af.js": "../../node_modules/moment/locale/af.js",
	"./ar": "../../node_modules/moment/locale/ar.js",
	"./ar-dz": "../../node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../node_modules/moment/locale/ar.js",
	"./az": "../../node_modules/moment/locale/az.js",
	"./az.js": "../../node_modules/moment/locale/az.js",
	"./be": "../../node_modules/moment/locale/be.js",
	"./be.js": "../../node_modules/moment/locale/be.js",
	"./bg": "../../node_modules/moment/locale/bg.js",
	"./bg.js": "../../node_modules/moment/locale/bg.js",
	"./bm": "../../node_modules/moment/locale/bm.js",
	"./bm.js": "../../node_modules/moment/locale/bm.js",
	"./bn": "../../node_modules/moment/locale/bn.js",
	"./bn.js": "../../node_modules/moment/locale/bn.js",
	"./bo": "../../node_modules/moment/locale/bo.js",
	"./bo.js": "../../node_modules/moment/locale/bo.js",
	"./br": "../../node_modules/moment/locale/br.js",
	"./br.js": "../../node_modules/moment/locale/br.js",
	"./bs": "../../node_modules/moment/locale/bs.js",
	"./bs.js": "../../node_modules/moment/locale/bs.js",
	"./ca": "../../node_modules/moment/locale/ca.js",
	"./ca.js": "../../node_modules/moment/locale/ca.js",
	"./cs": "../../node_modules/moment/locale/cs.js",
	"./cs.js": "../../node_modules/moment/locale/cs.js",
	"./cv": "../../node_modules/moment/locale/cv.js",
	"./cv.js": "../../node_modules/moment/locale/cv.js",
	"./cy": "../../node_modules/moment/locale/cy.js",
	"./cy.js": "../../node_modules/moment/locale/cy.js",
	"./da": "../../node_modules/moment/locale/da.js",
	"./da.js": "../../node_modules/moment/locale/da.js",
	"./de": "../../node_modules/moment/locale/de.js",
	"./de-at": "../../node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../node_modules/moment/locale/de-at.js",
	"./de-ch": "../../node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../node_modules/moment/locale/de-ch.js",
	"./de.js": "../../node_modules/moment/locale/de.js",
	"./dv": "../../node_modules/moment/locale/dv.js",
	"./dv.js": "../../node_modules/moment/locale/dv.js",
	"./el": "../../node_modules/moment/locale/el.js",
	"./el.js": "../../node_modules/moment/locale/el.js",
	"./en-au": "../../node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../node_modules/moment/locale/en-au.js",
	"./en-ca": "../../node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../node_modules/moment/locale/en-ie.js",
	"./en-il": "../../node_modules/moment/locale/en-il.js",
	"./en-il.js": "../../node_modules/moment/locale/en-il.js",
	"./en-in": "../../node_modules/moment/locale/en-in.js",
	"./en-in.js": "../../node_modules/moment/locale/en-in.js",
	"./en-nz": "../../node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../node_modules/moment/locale/en-nz.js",
	"./en-sg": "../../node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "../../node_modules/moment/locale/en-sg.js",
	"./eo": "../../node_modules/moment/locale/eo.js",
	"./eo.js": "../../node_modules/moment/locale/eo.js",
	"./es": "../../node_modules/moment/locale/es.js",
	"./es-do": "../../node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../node_modules/moment/locale/es-do.js",
	"./es-us": "../../node_modules/moment/locale/es-us.js",
	"./es-us.js": "../../node_modules/moment/locale/es-us.js",
	"./es.js": "../../node_modules/moment/locale/es.js",
	"./et": "../../node_modules/moment/locale/et.js",
	"./et.js": "../../node_modules/moment/locale/et.js",
	"./eu": "../../node_modules/moment/locale/eu.js",
	"./eu.js": "../../node_modules/moment/locale/eu.js",
	"./fa": "../../node_modules/moment/locale/fa.js",
	"./fa.js": "../../node_modules/moment/locale/fa.js",
	"./fi": "../../node_modules/moment/locale/fi.js",
	"./fi.js": "../../node_modules/moment/locale/fi.js",
	"./fil": "../../node_modules/moment/locale/fil.js",
	"./fil.js": "../../node_modules/moment/locale/fil.js",
	"./fo": "../../node_modules/moment/locale/fo.js",
	"./fo.js": "../../node_modules/moment/locale/fo.js",
	"./fr": "../../node_modules/moment/locale/fr.js",
	"./fr-ca": "../../node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../node_modules/moment/locale/fr.js",
	"./fy": "../../node_modules/moment/locale/fy.js",
	"./fy.js": "../../node_modules/moment/locale/fy.js",
	"./ga": "../../node_modules/moment/locale/ga.js",
	"./ga.js": "../../node_modules/moment/locale/ga.js",
	"./gd": "../../node_modules/moment/locale/gd.js",
	"./gd.js": "../../node_modules/moment/locale/gd.js",
	"./gl": "../../node_modules/moment/locale/gl.js",
	"./gl.js": "../../node_modules/moment/locale/gl.js",
	"./gom-deva": "../../node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "../../node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "../../node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../node_modules/moment/locale/gom-latn.js",
	"./gu": "../../node_modules/moment/locale/gu.js",
	"./gu.js": "../../node_modules/moment/locale/gu.js",
	"./he": "../../node_modules/moment/locale/he.js",
	"./he.js": "../../node_modules/moment/locale/he.js",
	"./hi": "../../node_modules/moment/locale/hi.js",
	"./hi.js": "../../node_modules/moment/locale/hi.js",
	"./hr": "../../node_modules/moment/locale/hr.js",
	"./hr.js": "../../node_modules/moment/locale/hr.js",
	"./hu": "../../node_modules/moment/locale/hu.js",
	"./hu.js": "../../node_modules/moment/locale/hu.js",
	"./hy-am": "../../node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../node_modules/moment/locale/hy-am.js",
	"./id": "../../node_modules/moment/locale/id.js",
	"./id.js": "../../node_modules/moment/locale/id.js",
	"./is": "../../node_modules/moment/locale/is.js",
	"./is.js": "../../node_modules/moment/locale/is.js",
	"./it": "../../node_modules/moment/locale/it.js",
	"./it-ch": "../../node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "../../node_modules/moment/locale/it-ch.js",
	"./it.js": "../../node_modules/moment/locale/it.js",
	"./ja": "../../node_modules/moment/locale/ja.js",
	"./ja.js": "../../node_modules/moment/locale/ja.js",
	"./jv": "../../node_modules/moment/locale/jv.js",
	"./jv.js": "../../node_modules/moment/locale/jv.js",
	"./ka": "../../node_modules/moment/locale/ka.js",
	"./ka.js": "../../node_modules/moment/locale/ka.js",
	"./kk": "../../node_modules/moment/locale/kk.js",
	"./kk.js": "../../node_modules/moment/locale/kk.js",
	"./km": "../../node_modules/moment/locale/km.js",
	"./km.js": "../../node_modules/moment/locale/km.js",
	"./kn": "../../node_modules/moment/locale/kn.js",
	"./kn.js": "../../node_modules/moment/locale/kn.js",
	"./ko": "../../node_modules/moment/locale/ko.js",
	"./ko.js": "../../node_modules/moment/locale/ko.js",
	"./ku": "../../node_modules/moment/locale/ku.js",
	"./ku.js": "../../node_modules/moment/locale/ku.js",
	"./ky": "../../node_modules/moment/locale/ky.js",
	"./ky.js": "../../node_modules/moment/locale/ky.js",
	"./lb": "../../node_modules/moment/locale/lb.js",
	"./lb.js": "../../node_modules/moment/locale/lb.js",
	"./lo": "../../node_modules/moment/locale/lo.js",
	"./lo.js": "../../node_modules/moment/locale/lo.js",
	"./lt": "../../node_modules/moment/locale/lt.js",
	"./lt.js": "../../node_modules/moment/locale/lt.js",
	"./lv": "../../node_modules/moment/locale/lv.js",
	"./lv.js": "../../node_modules/moment/locale/lv.js",
	"./me": "../../node_modules/moment/locale/me.js",
	"./me.js": "../../node_modules/moment/locale/me.js",
	"./mi": "../../node_modules/moment/locale/mi.js",
	"./mi.js": "../../node_modules/moment/locale/mi.js",
	"./mk": "../../node_modules/moment/locale/mk.js",
	"./mk.js": "../../node_modules/moment/locale/mk.js",
	"./ml": "../../node_modules/moment/locale/ml.js",
	"./ml.js": "../../node_modules/moment/locale/ml.js",
	"./mn": "../../node_modules/moment/locale/mn.js",
	"./mn.js": "../../node_modules/moment/locale/mn.js",
	"./mr": "../../node_modules/moment/locale/mr.js",
	"./mr.js": "../../node_modules/moment/locale/mr.js",
	"./ms": "../../node_modules/moment/locale/ms.js",
	"./ms-my": "../../node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../node_modules/moment/locale/ms.js",
	"./mt": "../../node_modules/moment/locale/mt.js",
	"./mt.js": "../../node_modules/moment/locale/mt.js",
	"./my": "../../node_modules/moment/locale/my.js",
	"./my.js": "../../node_modules/moment/locale/my.js",
	"./nb": "../../node_modules/moment/locale/nb.js",
	"./nb.js": "../../node_modules/moment/locale/nb.js",
	"./ne": "../../node_modules/moment/locale/ne.js",
	"./ne.js": "../../node_modules/moment/locale/ne.js",
	"./nl": "../../node_modules/moment/locale/nl.js",
	"./nl-be": "../../node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../node_modules/moment/locale/nl.js",
	"./nn": "../../node_modules/moment/locale/nn.js",
	"./nn.js": "../../node_modules/moment/locale/nn.js",
	"./oc-lnc": "../../node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "../../node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "../../node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../node_modules/moment/locale/pa-in.js",
	"./pl": "../../node_modules/moment/locale/pl.js",
	"./pl.js": "../../node_modules/moment/locale/pl.js",
	"./pt": "../../node_modules/moment/locale/pt.js",
	"./pt-br": "../../node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../node_modules/moment/locale/pt.js",
	"./ro": "../../node_modules/moment/locale/ro.js",
	"./ro.js": "../../node_modules/moment/locale/ro.js",
	"./ru": "../../node_modules/moment/locale/ru.js",
	"./ru.js": "../../node_modules/moment/locale/ru.js",
	"./sd": "../../node_modules/moment/locale/sd.js",
	"./sd.js": "../../node_modules/moment/locale/sd.js",
	"./se": "../../node_modules/moment/locale/se.js",
	"./se.js": "../../node_modules/moment/locale/se.js",
	"./si": "../../node_modules/moment/locale/si.js",
	"./si.js": "../../node_modules/moment/locale/si.js",
	"./sk": "../../node_modules/moment/locale/sk.js",
	"./sk.js": "../../node_modules/moment/locale/sk.js",
	"./sl": "../../node_modules/moment/locale/sl.js",
	"./sl.js": "../../node_modules/moment/locale/sl.js",
	"./sq": "../../node_modules/moment/locale/sq.js",
	"./sq.js": "../../node_modules/moment/locale/sq.js",
	"./sr": "../../node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../node_modules/moment/locale/sr.js",
	"./ss": "../../node_modules/moment/locale/ss.js",
	"./ss.js": "../../node_modules/moment/locale/ss.js",
	"./sv": "../../node_modules/moment/locale/sv.js",
	"./sv.js": "../../node_modules/moment/locale/sv.js",
	"./sw": "../../node_modules/moment/locale/sw.js",
	"./sw.js": "../../node_modules/moment/locale/sw.js",
	"./ta": "../../node_modules/moment/locale/ta.js",
	"./ta.js": "../../node_modules/moment/locale/ta.js",
	"./te": "../../node_modules/moment/locale/te.js",
	"./te.js": "../../node_modules/moment/locale/te.js",
	"./tet": "../../node_modules/moment/locale/tet.js",
	"./tet.js": "../../node_modules/moment/locale/tet.js",
	"./tg": "../../node_modules/moment/locale/tg.js",
	"./tg.js": "../../node_modules/moment/locale/tg.js",
	"./th": "../../node_modules/moment/locale/th.js",
	"./th.js": "../../node_modules/moment/locale/th.js",
	"./tk": "../../node_modules/moment/locale/tk.js",
	"./tk.js": "../../node_modules/moment/locale/tk.js",
	"./tl-ph": "../../node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../node_modules/moment/locale/tlh.js",
	"./tr": "../../node_modules/moment/locale/tr.js",
	"./tr.js": "../../node_modules/moment/locale/tr.js",
	"./tzl": "../../node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../node_modules/moment/locale/tzl.js",
	"./tzm": "../../node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../node_modules/moment/locale/tzm.js",
	"./ug-cn": "../../node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "../../node_modules/moment/locale/ug-cn.js",
	"./uk": "../../node_modules/moment/locale/uk.js",
	"./uk.js": "../../node_modules/moment/locale/uk.js",
	"./ur": "../../node_modules/moment/locale/ur.js",
	"./ur.js": "../../node_modules/moment/locale/ur.js",
	"./uz": "../../node_modules/moment/locale/uz.js",
	"./uz-latn": "../../node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../node_modules/moment/locale/uz.js",
	"./vi": "../../node_modules/moment/locale/vi.js",
	"./vi.js": "../../node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../node_modules/moment/locale/yo.js",
	"./yo.js": "../../node_modules/moment/locale/yo.js",
	"./zh-cn": "../../node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "../../node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "../../node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "../../node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/dev/components/dev/dev.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/dev/components/dev/dev.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"w-full flex justify-between\">\n    <div class=\"w-1/3\">\n        \n    </div>\n    <div class=\"overflow-x-auto flex-auto\">\n    </div>\n</div> -->\n<div class=\"shadow rounded-lg bg-white overflow-hidden flex flex-col flex-shrink-0 flex-auto\">\n    <div class=\"table-header flex justify-between p-2\">\n        <div class=\"table-buttons -mx-1 flex items-center\">\n            <div class=\"px-1\">\n                <button [routerLink]=\"config.links.create\" mat-icon-button>\n                    <mat-icon>add</mat-icon>\n                </button>\n            </div>\n            <div class=\"px-1\">\n                <button (click)=\"emitRefresh()\" mat-icon-button>\n                    <mat-icon>refresh</mat-icon>\n                </button>\n            </div>\n            <div class=\"px-1\">\n                <button mat-stroked-button color=\"primary\" [matMenuTriggerFor]=\"actionMenus\"><mat-icon>more_horiz</mat-icon> Actions</button>\n                <mat-menu #actionMenus=\"matMenu\">\n                    <button (click)=\"menu.onClick( selected )\" *ngFor=\"let menu of bulk\" mat-menu-item>{{ menu.label }}</button>\n                </mat-menu>\n            </div>\n        </div>\n        <div class=\"table-buttons -mx-2 flex\">\n            <div class=\"px-2 flex\">\n                <button (click)=\"searchOn = false\" *ngIf=\"searchOn\" mat-icon-button class=\"ml-1 outline-none\">\n                    <mat-icon>close</mat-icon>\n                </button>\n                <div *ngIf=\"searchOn\" class=\"search-field bg-indigo-200 rounded-full overflow-hidden\">\n                    <input #searchField type=\"text\" class=\"h-8 ml-1 pl-2 rounded-l-full bg-indigo-100 outline-none\">\n                    <button (click)=\"emitSearch( searchField )\" mat-icon-button class=\"ml-1 outline-none\">\n                        <mat-icon>search</mat-icon>\n                    </button>\n                </div>\n                <button (click)=\"searchOn = true\" *ngIf=\"! searchOn\" mat-icon-button class=\"ml-1 outline-none\">\n                    <mat-icon>search</mat-icon>\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"overflow-x-auto overflow-y-auto flex flex-shrink-0\">\n        <div class=\"overflow-y-auto w-full\">\n            <table class=\"w-full table\">\n                <thead class=\"text-gray-700\">\n                    <tr>\n                        <td *ngFor=\"let columnName of columnsNames\" class=\"p-2 border border-gray-200 cursor-pointer\" [ngStyle]=\"{ 'min-width': ( columnName !== '$id' ? columns[ columnName ]?.props?.style?.minWidth || '150px' : '20px' ) }\">\n                            <ng-container *ngIf=\"columnName !== '$id'\">\n                                <div (click)=\"toggleOrderColumn( columnName, columns[ columnName ] )\" class=\"flex justify-between items-center\">\n                                    <span style=\"font-weight: 400;\" class=\"py-2\">{{ columns[ columnName ].label }}</span>\n                                    <span>\n                                        <button *ngIf=\"[ 'asc', 'desc' ].includes( columns[ columnName ].direction )\" class=\"rounded-full h-6 w-6 hover:bg-gray-200 flex justify-center items-center\">\n                                            <mat-icon *ngIf=\"columns[ columnName ].direction === 'desc'\">keyboard_arrow_down</mat-icon>\n                                            <mat-icon *ngIf=\"columns[ columnName ].direction === 'asc'\">keyboard_arrow_up</mat-icon>\n                                        </button>\n                                    </span>\n                                </div>\n                            </ng-container>\n                            <ng-container *ngIf=\"columnName === '$id'\">\n                                <mat-checkbox (change)=\"changeStatus( $event )\" [(ngModel)]=\"columns[ columnName ].checked\" color=\"warn\"></mat-checkbox>\n                            </ng-container>\n                        </td>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let row of rows\" [ngClass]=\"row?.$props?.className\">\n                        <td *ngFor=\"let columnName of columnsNames\" [ngClass]=\"row?.$props?.tdClassName || 'border-gray-200 text-gray-800'\" class=\"p-2 border\">\n                            <div class=\"flex justify-between items-center\">\n                                <span *ngIf=\"! [ '$actions', '$id' ].includes( columnName )\">{{ row[ columnName ] }}</span>\n                                <span *ngIf=\"[ '$id' ].includes( columnName )\"><mat-checkbox [(ngModel)]=\"row.$props.checked\" color=\"warn\"></mat-checkbox></span>\n                                <span *ngIf=\"[ '$actions' ].includes( columnName )\">\n                                    <button mat-stroked-button color=\"primary\" [matMenuTriggerFor]=\"entryAction\"><mat-icon>more_horiz</mat-icon> Options</button>\n                                    <mat-menu #entryAction=\"matMenu\">\n                                        <button (click)=\"singleActionClick( row[ columnName ], menu )\" *ngFor=\"let menu of row[ columnName ]\" mat-menu-item>{{ menu.label }}</button>\n                                    </mat-menu>\n                                </span>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td [attr.colspan]=\"columnsNames.length\"><span class=\"text-gray-700 text-center py-2 block\">There is no entries...</span></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"table-footer p-2 flex justify-between\">\n        <div class=\"-mx-1\">\n            <div class=\"px-1\">\n                <div class=\"pagination -mx-1 flex\">\n                    <div class=\"px-1\" *ngFor=\"let page of pagination( currentPage, totalPages)\">\n                        <div (click)=\"navigateTo( page )\" [ngClass]=\"currentPage === page ? 'bg-blue-300' : ''\" class=\"w-8 h-8 cursor-pointer hover:bg-blue-200 hover:border-blue-200 flex justify-center items-center rounded-full border border-gray-200\">{{ page }}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"\">\n            <button mat-stroked-button color=\"primary\" [matMenuTriggerFor]=\"entryAction\">{{ defaultSize }} Displayed</button>\n            <mat-menu #entryAction=\"matMenu\">\n                <button (click)=\"setPerPage( menu )\" *ngFor=\"let menu of pageSizes\" mat-menu-item>{{ menu.label }}</button>\n            </mat-menu>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/driver-load-status/driver-load-status.component.html":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/driver-load-status/driver-load-status.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"h-full w-full flex flex-col\">\n    <div class=\"box-title flex flex-shrink-0 justify-center py-4 border-b border-gray-400 items-center text-2xl\">Handle A Delivery</div>\n    <div class=\"flex flex-col flex-auto overflow-y-auto p-4\">\n        <form *ngIf=\"form\" class=\"field container\" [formGroup]=\"form.formGroup\">\n            <cb-field [field]=\"field\" *ngFor=\"let field of form.sections[0].fields\" [group]=\"form.sections[0].formGroup\"></cb-field>\n        </form>\n        <p class=\"text-justify p-2 bg-blue-200\">Please make sure to select the right informations before confirming.</p>\n    </div>\n    <div class=\"box-title flex flex-shrink-0 justify-end border-t border-gray-400 items-center text-xl p-2\">\n        <button (click)=\"closeDialog()\" class=\"ml-2 bg-red-400 text-white rounded border border-red-600 px-3 py-2\">Cancel</button>\n        <button (click)=\"saveStatus()\" class=\"ml-2 rounded border border-gray-400 px-3 py-2\">Confirm</button>\n    </div>\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/layout/layout.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/layout/layout.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-full h-full flex flex-col\">\r\n    <div class=\"absolute w-full left-0 top-0 z-50\">\r\n        <mat-progress-bar\r\n            style=\"height: 1px\"\r\n            *ngIf=\"( state$ | async ).asyncLoading\"            \r\n            class=\"example-margin absolute\"\r\n            mode=\"indeterminate\">\r\n        </mat-progress-bar>\r\n    </div>\r\n    <div class=\"flex h-full w-full\">\r\n        <div \r\n            id=\"sidebar\"\r\n            [debounce]=\"500\" \r\n            (trigger)=\"handleHoverEvent( $event )\"\r\n            id=\"sidebar\" [ngClass]=\"{ \r\n            'absolute shadow z-50' : ( state$ | async ).sidebarToggled, \r\n            'hidden' : ! ( state$ | async ).sidebarToggled,\r\n            'w-64 expand-sidebar' : ! ( state$ | async ).sidebarCompressed || [ true ].includes( \r\n                tendoo.responsive.isLG(), \r\n                tendoo.responsive.isXL()\r\n            ),\r\n            'w-16 compress-sidebar' : ( state$ | async ).sidebarCompressed\r\n        }\" class=\"lg:static lg:shadow-none h-full lg:flex lg:z-0 flex flex-col flex-shrink-0 bg-gray-200 p-2\">\r\n            <div class=\"logo flex pb-4 justify-center text-gray-800\">\r\n                <span *ngIf=\"! ( state$ | async ).sidebarCompressed\" class=\"p-6 brookr-font text-2xl block h-12 flex items-center\" style=\"margin: 0;\">\r\n                    <!-- <img [src]=\"urlPrefix + '/assets/images/smm-icon.png'\" alt=\"\"> -->\r\n                    <span class=\"text-xl font-bold\">SMM Transport</span>\r\n                </span>\r\n                <span *ngIf=\"( state$ | async ).sidebarCompressed\" style=\"margin: 0;\">\r\n                    <img class=\"w-12 h-12\" [src]=\"urlPrefix + '/assets/images/smm-icon.png'\" alt=\"\">\r\n                </span>\r\n            </div>\r\n            <div class=\"side-menu flex flex-auto flex-col text-gray-600 overflow-y-auto\">\r\n                <div>\r\n                    <div [ngClass]=\"{ 'bg-gray-100 rounded shadow' : menu.toggled }\" *ngFor=\"let menu of ( state$ | async ).dashboardMenus; let index = index\" class=\"flex flex-col\">\r\n                        <ng-container *ngIf=\"menu.childrens !== undefined && menu.childrens.length > 0\">\r\n                            <div *ngIf=\"canSeeMenu( menu )\" (click)=\"toggleMenu( menu, index )\" class=\"h-10 flex hover:bg-gray-300 px-4 py-2 items-center cursor-pointer menu rounded overflow-hidden\">\r\n                                <div class=\"menu-icon w-5 h-5 pr-2 flex items-center justify-center\">\r\n                                    <mat-icon>{{ menu.icon }}</mat-icon>\r\n                                </div>\r\n                                <div *ngIf=\"! ( state$ | async ).sidebarCompressed\" [ngClass]=\"! ( state$ | async ).sidebarCompressed ? 'justify-between' : 'justify-center'\" class=\"menu-text pl-2 flex items-center flex-auto\">\r\n                                    <span class=\"text font-semibold font-sans\">{{ menu.label }}</span>\r\n                                    <span class=\"caret flex items-center justify-center\" *ngIf=\"menu.childrens && menu.childrens.length > 0\">\r\n                                        <mat-icon *ngIf=\"menu.toggled\">keyboard_arrow_up</mat-icon>\r\n                                        <mat-icon *ngIf=\"! menu.toggled\">keyboard_arrow_down</mat-icon>\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"( menu.childrens === undefined || menu.childrens.length === 0 )\">\r\n                            <a *ngIf=\"canSeeMenu( menu )\" [routerLink]=\"menu.path\" class=\"h-10 flex hover:bg-gray-300 px-4 py-2 items-center cursor-pointer menu rounded overflow-hidden\">\r\n                                <!-- (click)=\"toggleSidebar() && closeAllMenus()\" -->\r\n                                <div class=\"menu-icon w-5 h-5 pr-2 flex items-center justify-center\">\r\n                                    <mat-icon>{{ menu.icon }}</mat-icon>\r\n                                </div>\r\n                                <div *ngIf=\"! ( state$ | async ).sidebarCompressed\" [ngClass]=\"! ( state$ | async ).sidebarCompressed ? 'justify-between' : 'justify-center'\" class=\"menu-text pl-2 flex items-center flex-auto\">\r\n                                    <span class=\"text font-semibold font-sans\">{{ menu.label }}</span>\r\n                                    <span class=\"caret flex items-center justify-center\" *ngIf=\"menu.childrens && menu.childrens.length > 0\">\r\n                                        <mat-icon>keyboard_arrow_down</mat-icon>\r\n                                    </span>\r\n                                </div>\r\n                            </a>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"menu.toggled\">\r\n                            <ng-container *ngFor=\"let childMenu of menu.childrens\">\r\n                                <a [routerLink]=\"childMenu.path\" *ngIf=\"canSeeMenu( childMenu )\" class=\"cursor-pointer menu rounded overflow-hidden flex hover:bg-gray-300 px-4 py-2 items-center\">\r\n                                    <!-- (click)=\"toggleSidebar(); closeAllMenus()\" -->\r\n                                    <div class=\"menu-icon w-5 h-5 pr-2 flex items-center justify-center\">\r\n                                    </div>\r\n                                    <div class=\"menu-text pl-2 flex items-center justify-between flex-auto\">\r\n                                        <span class=\"text font-semibold font-sans\">{{ childMenu.label }}</span>\r\n                                    </div>\r\n                                </a>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"menu-footer text-gray-800\">\r\n                <button (click)=\"toggleMenuIcons()\" class=\"w-12 h-12 flex justify-center items-center border border-gray-400 rounded-full\">\r\n                    <mat-icon *ngIf=\"( state$ | async ).sidebarCompressed\">menu</mat-icon>\r\n                    <mat-icon *ngIf=\"! ( state$ | async ).sidebarCompressed\">menu_open</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"( state$ | async ).sidebarToggled\" (click)=\"toggleSidebar()\" style=\"background: rgba(51, 51, 51, 0.3)\" class=\"overlay absolute top-0 lg:hidden w-full h-full z-40 bg-gray-100\"></div>\r\n        <div *ngIf=\"( state$ | async ).notificationsToggled\" (click)=\"toggleNotifications()\" style=\"background: rgba(51, 51, 51, 0.3)\" class=\"overlay absolute top-0 w-full h-full z-40 bg-gray-100\"></div>\r\n        <div id=\"container\" class=\"flex-auto bg-gray-200 flex flex-col\">\r\n            <div id=\"tool-bar\" class=\"h-16 flex-shrink-0 w-full flex items-center px-2 shadow lg:shadow-none\">\r\n                <div class=\"left-panel flex flex-auto\">\r\n                    <div>\r\n                        <div (click)=\"toggleSidebar()\" class=\"lg:hidden hover:shadow hover:bg-gray-100 hover:border-transparent border border-gray-400 cursor-pointer user-profile rounded-lg flex justify-between items-center p-2\">\r\n                            <mat-icon>menu</mat-icon>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"right-panel flex -mx-1\">\r\n                    <div class=\"px-1\">\r\n                        <div (click)=\"toggleNotifications()\" class=\"hover:shadow hover:bg-gray-100 hover:border-transparent border border-gray-400 cursor-pointer user-profile rounded-lg flex justify-between items-center p-2\">\r\n                            <mat-icon>notifications</mat-icon>\r\n                            <span *ngIf=\"( state$ | async ).notifications.length > 0\" class=\"flex justify-center items-center absolute shadow bg-red-700 text-white w-6 h-6 rounded-full\" style=\"margin: -20px -20px;\">{{ ( state$ | async ).notifications.length }}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"px-1\">\r\n                        <div (click)=\"menuToggled = !menuToggled\" [ngClass]=\"menuToggled ? 'bg-gray-100 border border-gray-400' : 'border-gray-400'\" class=\"hover:shadow hover:bg-gray-100 hover:border-transparent border cursor-pointer user-profile rounded-lg flex justify-between items-center p-2\">\r\n                            <span class=\"text-lg text-gray-700\">Welcome</span>\r\n                            <div class=\"h-6 w-6 ml-2 bg-gray-700 rounded overflow-hidden\">\r\n                                <img [attr.src]=\"user.avatar\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"w-full h-0\" *ngIf=\"menuToggled\">\r\n                            <div class=\"rounded-b border-b border-l border-r border-gray-400 flex-auto bg-gray-100 relative shadow-lg z-10\" style=\"margin-top: -8px;padding-top: 8px;\">\r\n                                <ul>\r\n                                    <li><a class=\"p-2 block hover:bg-gray-300 cursor-pointer text-gray-700 hover:text-gray-800 flex items-center\" routerLink=\"/dashboard/profile\"><div class=\"mr-2 flex items-center\"><mat-icon>account_circle</mat-icon></div> <div><span class=\"block\">Profile</span></div></a></li>\r\n                                    <li><a class=\"p-2 block hover:bg-gray-300 cursor-pointer text-gray-700 hover:text-gray-800 flex items-center\" routerLink=\"/auth/logout\"><div class=\"mr-2 flex items-center\"><mat-icon>exit_to_app</mat-icon></div> <div><span class=\"block\">Logout</span></div></a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"content shadow-lg lg:rounded-tl-lg bg-white p-4 lg:pt-6 lg:pl-6 flex flex-col flex-auto overflow-auto\">\r\n                <ng-content></ng-content>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"( state$ | async ).notificationsToggled\" id=\"notifications\" class=\"absolute z-50 right-0 w-1/2 lg:w-1/4 flex-shrink-0 h-full bg-gray-200 ng-star-inserted flex flex-col\">\r\n            <div class=\"border-b border-gray-400 flex flex-col flex h-16\">\r\n                <div class=\"flex flex-shrink-0 justify-between items-center flex-auto px-2\">\r\n                    <span style=\"margin: 0\" class=\"text-xl font-semibold\">Notifications</span>\r\n                    <div>\r\n                        <div (click)=\"toggleNotifications()\" class=\"border border-gray-400 cursor-pointer user-profile rounded-lg flex justify-between items-center p-2\">\r\n                            <mat-icon>close</mat-icon>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"flex flex-col flex-auto flex-wrap overflow-y-auto\">\r\n                <div class=\"h-full p-2 flex-shrink-0\">\r\n                    <div class=\"bg-white flex rounded shadow w-full p-2 mb-2\" *ngFor=\"let notification of ( state$ | async ).notifications\">\r\n                        <div class=\"notification-body flex-auto pr-2\">\r\n                            <span class=\"text-lg text-gray-700 block mb-2\">{{ notification.title }}</span>\r\n                            <p class=\"text-gray-600\">{{ notification.description }}</p>\r\n                        </div>\r\n                        <div class=\"controls justify-center\">\r\n                            <button (click)=\"closeNotification( notification )\" class=\"rounded-full bg-red-600 text-white w-8 h-8 flex justify-center items-center shadow\">\r\n                                <mat-icon>close</mat-icon>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/load-assignation/load-assignation.component.html":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/load-assignation/load-assignation.component.html ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"h-full w-full flex flex-col\">\n    <div class=\"box-title flex flex-shrink-0 justify-center py-4 border-b border-gray-400 items-center text-2xl\">Assign Driver</div>\n    <div class=\"flex flex-auto overflow-y-auto p-4\">\n        <form *ngIf=\"form\" class=\"field container\" [formGroup]=\"form.formGroup\">\n            <cb-field [field]=\"field\" *ngFor=\"let field of form.sections[0].fields\" [group]=\"form.sections[0].formGroup\"></cb-field>\n        </form>\n    </div>\n    <div class=\"box-title flex flex-shrink-0 justify-end border-t border-gray-400 items-center text-xl p-2\">\n        <button (click)=\"removeDriver()\" class=\"ml-2 bg-blue-400 text-white rounded border border-blue-600 px-3 py-2\">Unassign Driver</button>\n        <button (click)=\"closeDialog()\" class=\"ml-2 bg-red-400 text-white rounded border border-red-600 px-3 py-2\">Cancel</button>\n        <button (click)=\"saveDriverDetails()\" class=\"ml-2 rounded border border-gray-400 px-3 py-2\">Save</button>\n    </div>\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/load-history/load-history.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/load-history/load-history.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"h-full w-full flex flex-col\">\n    <div class=\"box-title flex flex-shrink-0 justify-center py-4 border-b border-gray-400 items-center text-2xl\">Load History</div>\n    <div class=\"flex flex-auto overflow-y-auto p-4\">\n        <div class=\"relative\">\n            <div class=\"border-r-2 border-gray-400 border-dotted absolute h-full top-0 z-0\" style=\"left: 7px\"></div>\n            <ul class=\"list-none m-0 p-0\">\n                <li class=\"mb-2\" *ngFor=\"let history of data.history\">\n                    <div class=\"flex items-start mb-1\">\n                        <div>\n                            <div class=\"bg-indigo-600 relative z-20 rounded-full h-4 w-4 border-gray-200 border-2 z-10\">\n                            </div>\n                        </div>\n                        <div>\n                            <div class=\"flex-1 ml-4 font-medium\">{{ history.action_time }} - {{ getActionType( history.action_type )}}</div>\n                            <div class=\"ml-4 my-2 text-gray-700\">\n                                {{ getActionDescription( history.action_type, history.action_value ) }}\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"box-title flex flex-shrink-0 justify-end border-t border-gray-400 items-center text-xl p-2\">        \n        <button (click)=\"closePopup()\" class=\"ml-2 rounded border border-gray-400 px-3 py-2\">Close</button>\n    </div>\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/load-status/load-status.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/load-status/load-status.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"h-full w-full flex flex-col\">\n    <div class=\"box-title flex flex-shrink-0 justify-center py-4 border-b border-gray-400 items-center text-2xl\">Change Status</div>\n    <div class=\"flex flex-auto overflow-y-auto p-4\">\n        <form *ngIf=\"form\" class=\"field container\" [formGroup]=\"form.formGroup\">\n            <cb-field [field]=\"field\" *ngFor=\"let field of form.sections[0].fields\" [group]=\"form.sections[0].formGroup\"></cb-field>\n        </form>\n    </div>\n    <div class=\"box-title flex flex-shrink-0 justify-end border-t border-gray-400 items-center text-xl p-2\">\n        <button (click)=\"closeDialog()\" class=\"ml-2 bg-red-400 text-white rounded border border-red-600 px-3 py-2\">Cancel</button>\n        <button (click)=\"saveStatus()\" class=\"ml-2 rounded border border-gray-400 px-3 py-2\">Save</button>\n    </div>\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/popup/popup.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/popup/popup.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"h-full w-full flex flex-col\">\n    <div class=\"header border-b border-gray-400 p-4 flex justify-center items-center text-xl\">\n        {{ popup.title }}\n    </div>\n    <div class=\"content flex-auto overflow-y-auto p-2\">\n        <div class=\"bg-gray-200 p-2\">\n            {{ popup.description }}\n        </div>\n        <form *ngIf=\"form\" [formGroup]=\"form.formGroup\" class=\"pt-2\">\n            <ng-container *ngFor=\"let section of form.sections\">\n                <cb-field (change)=\"onFileChange( $event, field )\"  *ngFor=\"let field of section.fields\" [field]=\"field\" [group]=\"section.formGroup\"></cb-field>\n            </ng-container>\n        </form>\n    </div>\n    <div class=\"footer p-2 flex justify-between border-t border-gray-400\">\n        <div></div>\n        <div class=\"flex\">\n            <div class=\"ml-2\">\n                <button (click)=\"popup.confirm( form )\" class=\"outline-none rounded border border-green-600 p-2 text-green-600 flex items-center justify-center hover:text-white hover:border-green-600 hover:bg-green-600\">\n                    Confirm\n                </button>\n            </div>\n            <div class=\"ml-2\">\n                <button (click)=\"popup.cancel()\" class=\"outline-none rounded border border-red-600 text-red-600 p-2 flex items-center justify-center\">\n                    Cancel\n                </button>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/popups/drivers-payment/drivers-payment.component.html":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/popups/drivers-payment/drivers-payment.component.html ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\" class=\"flex h-full flex-col\">\n    <div class=\"header p-4 flex justify-center items-center text-xl border-b border-gray-400\">\n        {{ title }}\n    </div>\n    <div class=\"body overflow-y-auto flex-auto\">\n        <div class=\"bg-white\">\n            <nav class=\"flex flex-col sm:flex-row\">\n                <button (click)=\"setActive( tab )\" *ngFor=\"let tab of tabs\" [ngClass]=\"tab.active ? 'text-blue-500 border-b-2 font-medium border-blue-500' : ''\" class=\"text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none\">\n                    {{ tab.label }}\n                </button>\n            </nav>\n        </div>\n        <div *ngIf=\"selectedTab.identifier === 'new'\">\n            <div *ngIf=\"! form\" class=\"h-full w-full flex justify-center items-center\">\n                <mat-spinner diameter=\"20\"></mat-spinner>\n            </div>\n            <form *ngIf=\"form\" class=\"popup-conatiner\" [formGroup]=\"form.formGroup\" class=\"p-2\">\n                <cb-field [field]=\"field\" [group]=\"form.sections[0].formGroup\" *ngFor=\"let field of form.sections[0].fields\"></cb-field>  \n            </form>\n        </div>\n        <div *ngIf=\"selectedTab.identifier === 'history'\" class=\"p-2\">\n            <table class=\"w-full text-md bg-white rounded mb-4\">\n                <tbody>\n                    <tr class=\"border-b bg-gray-200\">\n                        <th class=\"text-left p-3 px-1\">Payment</th>\n                        <th class=\"text-left p-3 px-1\">Date</th>\n                        <th class=\"text-left p-3 px-1\">Reason</th>\n                        <th class=\"text-right p-3 px-1\">Actions</th>\n                    </tr>\n                    <tr *ngFor=\"let _history of history\" class=\"border-b hover:bg-orange-100 bg-gray-100\">\n                        <td class=\"p-3 px-1\">{{ _history.amount }}</td>\n                        <td class=\"p-3 px-1\">{{ _history.date }}</td>\n                        <td class=\"p-3 px-1\">{{ _history.description }}</td>\n                        <td class=\"p-3 px-1 flex justify-end\">\n                            <button type=\"button\" (click)=\"openPaymentPopup( _history )\" class=\"mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline\">Edit</button>\n                            <button type=\"button\" (click)=\"deletePayment( _history )\" class=\"text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline\">Delete</button>\n                        </td>\n                    </tr>\n                    <tr *ngIf=\"history.length === 0\">\n                        <td colspan=\"4\" class=\"p-3 px-1 text-center\">No entries to display</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"footer border-t border-gray-400 p-2 flex justify-end items-center\">\n        <button (click)=\"savePayment()\" class=\"rounded border p-2 ml-2 border-green-400 bg-green-200 hover:bg-green-400 hover:text-white flex justify-center items-center\">Confirm</button>\n        <button (click)=\"closePopup()\" class=\"rounded border p-2 ml-2 border-gray-200 hover:bg-red-400 hover:text-white flex justify-center items-center\">Cancel</button>\n    </div>\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/popups/load-delivery/load-delivery.component.html":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/popups/load-delivery/load-delivery.component.html ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"h-full w-full flex flex-col\">\n    <div class=\"header border-b border-gray-400 p-4 flex justify-center items-center text-xl\">\n        Delivery Document\n    </div>\n    <div class=\"content flex-auto overflow-y-auto p-2\">\n        <div class=\"bg-gray-200 p-2\">\n            Uploading a document means the load has been successfully delivered. By confirming this action, the Delivery Document will be notified to the administrator. Would you like to continue ?\n        </div>\n        <form *ngIf=\"form\" [formGroup]=\"form.formGroup\" class=\"pt-2\">\n            <ng-container *ngFor=\"let section of form.sections\">\n                <cb-field (change)=\"onFileChange( $event, field )\"  *ngFor=\"let field of section.fields\" [field]=\"field\" [group]=\"section.formGroup\"></cb-field>\n            </ng-container>\n        </form>\n    </div>\n    <div class=\"footer p-2 flex justify-between border-t border-gray-400\">\n        <div></div>\n        <div class=\"flex\">\n            <div class=\"ml-2\">\n                <button (click)=\"submitDocument()\" class=\"outline-none rounded border border-green-600 p-2 text-green-600 flex items-center justify-center hover:text-white hover:border-green-600 hover:bg-green-600\">\n                    Confirm\n                </button>\n            </div>\n            <div class=\"ml-2\">\n                <button (click)=\"cancel()\" class=\"outline-none rounded border border-red-600 text-red-600 p-2 flex items-center justify-center\">\n                    Cancel\n                </button>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/table/table.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/table/table.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"w-full flex justify-between\">\n    <div class=\"w-1/3\">\n        \n    </div>\n    <div class=\"overflow-x-auto flex-auto\">\n    </div>\n</div> -->\n<div class=\"shadow rounded-lg bg-white overflow-hidden flex flex-col flex-shrink-0 flex-auto\">\n    <div class=\"table-header flex justify-between p-2\">\n        <div class=\"table-buttons -mx-1 flex items-center\">\n            <div class=\"px-1\">\n                <button [routerLink]=\"config.links.create\" mat-icon-button>\n                    <mat-icon>add</mat-icon>\n                </button>\n            </div>\n            <div class=\"px-1\">\n                <button (click)=\"emitRefresh()\" mat-icon-button>\n                    <mat-icon>refresh</mat-icon>\n                </button>\n            </div>\n            <div class=\"px-1\">\n                <button mat-stroked-button color=\"primary\" [matMenuTriggerFor]=\"actionMenus\"><mat-icon>more_horiz</mat-icon> Actions</button>\n                <mat-menu #actionMenus=\"matMenu\">\n                    <button (click)=\"menu.onClick( selected )\" *ngFor=\"let menu of bulk\" mat-menu-item>{{ menu.label }}</button>\n                </mat-menu>\n            </div>\n        </div>\n        <div class=\"table-buttons -mx-2 flex\">\n            <div class=\"px-2 flex\">\n                <button (click)=\"closeSearch()\" *ngIf=\"searchOn\" mat-icon-button class=\"ml-1 outline-none\">\n                    <mat-icon>close</mat-icon>\n                </button>\n                <button (click)=\"openAdvanced()\" *ngIf=\"searchOn\" mat-icon-button class=\"ml-1 outline-none\">\n                    <mat-icon>filter_list</mat-icon>\n                </button>\n                <div *ngIf=\"searchOn\" class=\"search-field bg-indigo-200 rounded-full overflow-hidden\">\n                    <input #searchField type=\"text\" class=\"h-8 ml-1 pl-2 rounded-l-full bg-indigo-100 outline-none\">\n                    <button (click)=\"emitSearch( searchField )\" *ngIf=\"advancedFilter === undefined\" mat-icon-button class=\"ml-1 outline-none\">\n                        <mat-icon>search</mat-icon>\n                    </button>\n                    <button (click)=\"emitSearchWithQuery()\" *ngIf=\"advancedFilter !== undefined\" mat-icon-button class=\"ml-1 outline-none\">\n                        <mat-icon>search</mat-icon>\n                    </button>\n                </div>\n                <button (click)=\"searchOn = true\" *ngIf=\"! searchOn\" mat-icon-button class=\"ml-1 outline-none\">\n                    <mat-icon>search</mat-icon>\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"flex-auto overflow-hidden flex\">\n        <div class=\"overflow-auto w-full\">\n            <table class=\"w-full table\">\n                <thead class=\"text-gray-700\">\n                    <tr>\n                        <td *ngFor=\"let columnName of columnsNames\" class=\"p-2 border border-gray-200 cursor-pointer\" [ngStyle]=\"{ 'min-width': ( columnName !== '$id' ? columns[ columnName ]?.props?.style?.minWidth || '80px' : '20px' ) }\">\n                            <ng-container *ngIf=\"columnName !== '$id'\">\n                                <div (click)=\"toggleOrderColumn( columnName, columns[ columnName ] )\" class=\"flex justify-between items-center\">\n                                    <span style=\"font-weight: 400;\" class=\"py-2\">{{ columns[ columnName ].label }}</span>\n                                    <span>\n                                        <button *ngIf=\"[ 'asc', 'desc' ].includes( columns[ columnName ].direction )\" class=\"rounded-full h-6 w-6 hover:bg-gray-200 flex justify-center items-center\">\n                                            <mat-icon *ngIf=\"columns[ columnName ].direction === 'desc'\">keyboard_arrow_down</mat-icon>\n                                            <mat-icon *ngIf=\"columns[ columnName ].direction === 'asc'\">keyboard_arrow_up</mat-icon>\n                                        </button>\n                                    </span>\n                                </div>\n                            </ng-container>\n                            <ng-container *ngIf=\"columnName === '$id'\">\n                                <mat-checkbox (change)=\"changeStatus( $event )\" [(ngModel)]=\"columns[ columnName ].checked\" color=\"warn\"></mat-checkbox>\n                            </ng-container>\n                        </td>\n                    </tr>\n                </thead>\n                <tbody *ngIf=\"advancedFilter\">\n                    <tr>\n                        <td *ngFor=\"let columnName of columnsNames\" class=\"border-gray-200 text-gray-800\">\n                            <ng-container *ngIf=\"columns[ columnName ].field\">\n                                <cb-field [field]=\"columns[ columnName ].field\" [group]=\"advancedFilter.formGroup\"></cb-field>\n                            </ng-container>\n                        </td>\n                    </tr>\n                </tbody>\n                <tbody>\n                    <tr *ngFor=\"let row of rows\" [ngClass]=\"row?.$props?.className\">\n                        <td *ngFor=\"let columnName of columnsNames\" [ngClass]=\"row?.$props?.checked ? 'bg-blue-400 text-white border-blue-500' : row?.$props?.tdClassName || 'border-gray-200 text-gray-800'\" class=\"p-2 border\">\n                            <div class=\"flex justify-between items-center\">\n                                <span *ngIf=\"! [ '$actions', '$id' ].includes( columnName )\">{{ row[ columnName ] }}</span>\n                                <span *ngIf=\"[ '$id' ].includes( columnName )\"><mat-checkbox [(ngModel)]=\"row.$props.checked\" color=\"warn\"></mat-checkbox></span>\n                                <span *ngIf=\"[ '$actions' ].includes( columnName )\">\n                                    <button mat-stroked-button color=\"primary\" [matMenuTriggerFor]=\"entryAction\"><mat-icon>more_horiz</mat-icon></button>\n                                    <mat-menu #entryAction=\"matMenu\">\n                                        <button (click)=\"singleActionClick( row, menu )\" *ngFor=\"let menu of row[ columnName ]\" mat-menu-item>{{ menu.label }}</button>\n                                    </mat-menu>\n                                </span>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr *ngIf=\"rows.length === 0\">\n                        <td [attr.colspan]=\"columnsNames.length\"><span class=\"text-gray-700 text-center py-2 block\">There is no entries...</span></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"table-footer p-2 flex justify-between\">\n        <div class=\"-mx-1\">\n            <div class=\"px-1\">\n                <div class=\"pagination -mx-1 flex\">\n                    <div class=\"px-1\" *ngFor=\"let page of pagination( currentPage, totalPages)\">\n                        <div (click)=\"navigateTo( page )\" [ngClass]=\"currentPage === page ? 'bg-blue-300' : ''\" class=\"w-8 h-8 cursor-pointer hover:bg-blue-200 hover:border-blue-200 flex justify-center items-center rounded-full border border-gray-200\">{{ page }}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"\">\n            <button mat-stroked-button color=\"primary\" [matMenuTriggerFor]=\"entryAction\">{{ defaultSize }} Displayed</button>\n            <mat-menu #entryAction=\"matMenu\">\n                <button (click)=\"setPerPage( menu )\" *ngFor=\"let menu of pageSizes\" mat-menu-item>{{ menu.label }}</button>\n            </mat-menu>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/tabs/tabs.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/tabs/tabs.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tab tab-container\" *ngIf=\"form\">\n    <div class=\"tabs-header flex\" style=\"margin-bottom: -2px;\">\n        <div (click)=\"selectThis( section )\" [ngClass]=\"{\n            'bg-gray-100' : section.active,\n            'bg-gray-300' : ! section.active\n        }\" *ngFor=\"let section of renderable\" class=\"tab px-4 py-2 border-2 border-b-0 rounded-t-lg cursor-pointer flex items-center justify center\">\n            {{ section.title }} \n            <span *ngIf=\"form.formGroup.errors !== null\" class=\"inline-block ml-2 rounded-full flex justify-center items-center h-6 w-6 bg-red-700 text-white\">5</span>\n        </div>\n    </div>\n    <div class=\"bg-gray-100 border-2\">\n        <ng-container *ngFor=\"let section of form.sections\">\n            <div *ngIf=\"section.active\" class=\"tabs-container\">\n                <div class=\"inner-content p-2\">\n                    <div class=\"-mx-2 flex flex-wrap\">\n                        <div class=\"px-2 w-full md:w-1/2\" *ngFor=\"let field of section.fields\">\n                            <cb-field (changed)=\"emitChanged( $event )\" [field]=\"field\" [group]=\"section.formGroup\"></cb-field>\n                        </div>\n                    </div>\n                </div>  \n            </div>\n        </ng-container>\n        <div class=\"footer border-t p-2 flex\">\n            <div>\n                <button (click)=\"submitForm()\" class=\"rounded bg-green-200 text-green-600 text-center px-4 py-2 shadow border border-green-600 active:shadow-none\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/authentication.guard */ "./src/app/guards/authentication.guard.ts");
/* harmony import */ var _dev_components_dev_dev_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dev/components/dev/dev.component */ "./src/app/dev/components/dev/dev.component.ts");
/* harmony import */ var _guards_allow_dispatcher_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/allow-dispatcher.guard */ "./src/app/guards/allow-dispatcher.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'dev',
        component: _dev_components_dev_dev_component__WEBPACK_IMPORTED_MODULE_3__["DevComponent"]
    },
    {
        path: 'dashboard',
        canActivate: [
            _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]
        ],
        children: [{
                path: '',
                canActivate: [_guards_allow_dispatcher_guard__WEBPACK_IMPORTED_MODULE_4__["AllowDispatcherGuard"]],
                loadChildren: function () { return Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("common"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); }
            }, {
                path: 'loads',
                canActivate: [_guards_allow_dispatcher_guard__WEBPACK_IMPORTED_MODULE_4__["AllowDispatcherGuard"]],
                loadChildren: function () { return Promise.all(/*! import() | loads-loads-module */[__webpack_require__.e("common"), __webpack_require__.e("loads-loads-module")]).then(__webpack_require__.bind(null, /*! ./loads/loads.module */ "./src/app/loads/loads.module.ts")).then(function (m) { return m.LoadsModule; }); }
            }, {
                path: 'trucks',
                loadChildren: function () { return __webpack_require__.e(/*! import() | trucks-trucks-module */ "trucks-trucks-module").then(__webpack_require__.bind(null, /*! ./trucks/trucks.module */ "./src/app/trucks/trucks.module.ts")).then(function (m) { return m.TrucksModule; }); }
            }, {
                path: 'drivers',
                loadChildren: function () { return Promise.all(/*! import() | drivers-drivers-module */[__webpack_require__.e("common"), __webpack_require__.e("drivers-drivers-module")]).then(__webpack_require__.bind(null, /*! ./drivers/drivers.module */ "./src/app/drivers/drivers.module.ts")).then(function (m) { return m.DriversModule; }); }
            }, {
                path: 'reports',
                canActivate: [_guards_allow_dispatcher_guard__WEBPACK_IMPORTED_MODULE_4__["AllowDispatcherGuard"]],
                loadChildren: function () { return __webpack_require__.e(/*! import() | reports-reports-module */ "reports-reports-module").then(__webpack_require__.bind(null, /*! ./reports/reports.module */ "./src/app/reports/reports.module.ts")).then(function (m) { return m.ReportsModule; }); }
            }, {
                path: 'settings',
                canActivate: [_guards_allow_dispatcher_guard__WEBPACK_IMPORTED_MODULE_4__["AllowDispatcherGuard"]],
                loadChildren: function () { return __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "./src/app/settings/settings.module.ts")).then(function (m) { return m.SettingsModule; }); }
            }, {
                path: 'profile',
                loadChildren: function () { return __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/profile/profile.module.ts")).then(function (m) { return m.ProfileModule; }); }
            }, {
                path: 'customers',
                canActivate: [_guards_allow_dispatcher_guard__WEBPACK_IMPORTED_MODULE_4__["AllowDispatcherGuard"]],
                loadChildren: function () { return __webpack_require__.e(/*! import() | customers-customers-module */ "customers-customers-module").then(__webpack_require__.bind(null, /*! ./customers/customers.module */ "./src/app/customers/customers.module.ts")).then(function (m) { return m.CustomersModule; }); }
            },
            {
                path: 'companies',
                canActivate: [_guards_allow_dispatcher_guard__WEBPACK_IMPORTED_MODULE_4__["AllowDispatcherGuard"]],
                loadChildren: function () { return __webpack_require__.e(/*! import() | companies-companies-module */ "companies-companies-module").then(__webpack_require__.bind(null, /*! ./companies/companies.module */ "./src/app/companies/companies.module.ts")).then(function (m) { return m.CompaniesModule; }); }
            },
        ]
    },
    {
        path: 'auth',
        loadChildren: function () { return __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/auth/auth.module.ts")).then(function (m) { return m.AuthModule; }); }
    }, {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'brookr';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: serviceCalled, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceCalled", function() { return serviceCalled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _declarations_declarations_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./declarations/declarations.module */ "./src/app/declarations/declarations.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/state */ "./src/app/store/state.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cloud_breeze_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @cloud-breeze/core */ "../../dist/cloud-breeze/core/fesm5/cloud-breeze-core.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _classes_interceptor_class__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./classes/interceptor.class */ "./src/app/classes/interceptor.class.ts");
/* harmony import */ var _partials_dashboard_load_assignation_load_assignation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./partials/dashboard/load-assignation/load-assignation.component */ "./src/app/partials/dashboard/load-assignation/load-assignation.component.ts");
/* harmony import */ var _partials_dashboard_load_status_load_status_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./partials/dashboard/load-status/load-status.component */ "./src/app/partials/dashboard/load-status/load-status.component.ts");
/* harmony import */ var _partials_dashboard_driver_load_status_driver_load_status_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./partials/dashboard/driver-load-status/driver-load-status.component */ "./src/app/partials/dashboard/driver-load-status/driver-load-status.component.ts");
/* harmony import */ var _partials_dashboard_popup_popup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./partials/dashboard/popup/popup.component */ "./src/app/partials/dashboard/popup/popup.component.ts");
/* harmony import */ var _partials_dashboard_popups_load_delivery_load_delivery_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./partials/dashboard/popups/load-delivery/load-delivery.component */ "./src/app/partials/dashboard/popups/load-delivery/load-delivery.component.ts");
/* harmony import */ var _partials_dashboard_popups_drivers_payment_drivers_payment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./partials/dashboard/popups/drivers-payment/drivers-payment.component */ "./src/app/partials/dashboard/popups/drivers-payment/drivers-payment.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _partials_dashboard_load_history_load_history_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./partials/dashboard/load-history/load-history.component */ "./src/app/partials/dashboard/load-history/load-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var serviceCalled = _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_9__["ServicesModule"];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _partials_dashboard_load_assignation_load_assignation_component__WEBPACK_IMPORTED_MODULE_12__["LoadAssignationComponent"],
                _partials_dashboard_load_status_load_status_component__WEBPACK_IMPORTED_MODULE_13__["LoadStatusComponent"],
                _partials_dashboard_driver_load_status_driver_load_status_component__WEBPACK_IMPORTED_MODULE_14__["DriverLoadStatus"],
                _partials_dashboard_popup_popup_component__WEBPACK_IMPORTED_MODULE_15__["PopupComponent"],
                _partials_dashboard_popups_load_delivery_load_delivery_component__WEBPACK_IMPORTED_MODULE_16__["LoadDeliveryComponent"],
                _partials_dashboard_popups_drivers_payment_drivers_payment_component__WEBPACK_IMPORTED_MODULE_17__["DriversPaymentComponent"],
                _partials_dashboard_load_history_load_history_component__WEBPACK_IMPORTED_MODULE_19__["LoadHistoryComponent"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                    useClass: _classes_interceptor_class__WEBPACK_IMPORTED_MODULE_11__["Interceptor"],
                    multi: true
                },
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _declarations_declarations_module__WEBPACK_IMPORTED_MODULE_4__["DeclarationsModule"],
                _cloud_breeze_core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({
                    state: _store_state__WEBPACK_IMPORTED_MODULE_6__["AppReducer"]
                }, {
                    runtimeChecks: {
                        strictActionImmutability: false,
                        strictStateImmutability: false
                    }
                }),
                _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_9__["ServicesModule"].forRoot({
                    angular: '',
                    base: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].baseUrl
                })
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/interceptor.class.ts":
/*!**********************************************!*\
  !*** ./src/app/classes/interceptor.class.ts ***!
  \**********************************************/
/*! exports provided: Interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return Interceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/action */ "./src/app/store/action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Interceptor = /** @class */ (function () {
    function Interceptor(store) {
        this.store = store;
    }
    Interceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var enableSpinner = req.url.search(/\#disable-spinner/) === -1;
        if (enableSpinner) {
            this.store.dispatch(_store_action__WEBPACK_IMPORTED_MODULE_3__["AppActions"].startAsyncLoading());
        }
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            if (enableSpinner) {
                _this.store.dispatch(_store_action__WEBPACK_IMPORTED_MODULE_3__["AppActions"].stopAsyncLoading());
            }
        }));
    };
    Interceptor.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    Interceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], Interceptor);
    return Interceptor;
}());



/***/ }),

/***/ "./src/app/declarations/declarations.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/declarations/declarations.module.ts ***!
  \*****************************************************/
/*! exports provided: DeclarationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclarationsModule", function() { return DeclarationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _partials_dashboard_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/dashboard/layout/layout.component */ "./src/app/partials/dashboard/layout/layout.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _partials_dashboard_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../partials/dashboard/tabs/tabs.component */ "./src/app/partials/dashboard/tabs/tabs.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _partials_dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../partials/dashboard/table/table.component */ "./src/app/partials/dashboard/table/table.component.ts");
/* harmony import */ var _cloud_breeze_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @cloud-breeze/core */ "../../dist/cloud-breeze/core/fesm5/cloud-breeze-core.js");
/* harmony import */ var _dev_components_dev_dev_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dev/components/dev/dev.component */ "./src/app/dev/components/dev/dev.component.ts");
/* harmony import */ var _directives_onhover_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../directives/onhover.directive */ "./src/app/directives/onhover.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DeclarationsModule = /** @class */ (function () {
    function DeclarationsModule() {
    }
    DeclarationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _partials_dashboard_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
                _partials_dashboard_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__["TabsComponent"],
                _partials_dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_8__["TableComponent"],
                _dev_components_dev_dev_component__WEBPACK_IMPORTED_MODULE_10__["DevComponent"],
                _directives_onhover_directive__WEBPACK_IMPORTED_MODULE_11__["Debounce"]
            ],
            exports: [
                _partials_dashboard_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
                _partials_dashboard_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__["TabsComponent"],
                _partials_dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_8__["TableComponent"],
                _dev_components_dev_dev_component__WEBPACK_IMPORTED_MODULE_10__["DevComponent"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _cloud_breeze_core__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _directives_onhover_directive__WEBPACK_IMPORTED_MODULE_11__["Debounce"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _cloud_breeze_core__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ]
        })
    ], DeclarationsModule);
    return DeclarationsModule;
}());



/***/ }),

/***/ "./src/app/dev/components/dev/dev.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/dev/components/dev/dev.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".min-100 {\n  min-width: 150px;\n}\n\n:host {\n  display: grid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvcGFja2FnZXMvY2xvdWQtYnJlZXplL3NyYy9wdWJsaWMvdGVuZG9vLXNldHVwL3Byb2plY3RzL2Jyb29rci11aS9zcmMvYXBwL2Rldi9jb21wb25lbnRzL2Rldi9kZXYuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9kZXYvY29tcG9uZW50cy9kZXYvZGV2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9kZXYvY29tcG9uZW50cy9kZXYvZGV2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pbi0xMDAge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG59XG46aG9zdCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbn0iLCIubWluLTEwMCB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZ3JpZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dev/components/dev/dev.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/dev/components/dev/dev.component.ts ***!
  \*****************************************************/
/*! exports provided: DevComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevComponent", function() { return DevComponent; });
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

var DevComponent = /** @class */ (function () {
    function DevComponent() {
        this.searchOn = false;
        this.totalPages = 200;
        this.currentPage = 1;
        this.pageSizes = [
            {
                label: '10',
                size: 10
            }, {
                label: '30',
                size: 30
            }, {
                label: '50',
                size: 50
            }, {
                label: '100',
                size: 100
            }
        ];
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageSize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bulk = this.bulk || [];
    }
    Object.defineProperty(DevComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (config) {
            this._config = config;
            this.columns = this._config.columns;
            this.columnsNames = Object.keys(this.columns);
            this.totalPages = this._config.results.last_page;
            this.currentPage = this._config.results.current_page;
            this.rows = this._config.results.data;
        },
        enumerable: true,
        configurable: true
    });
    ;
    DevComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(DevComponent.prototype, "selected", {
        get: function () {
            return this.rows.filter(function (entry) { return entry.$props['checked']; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevComponent.prototype, "defaultSize", {
        get: function () {
            var selected = this.pageSizes.filter(function (s) { return s.selected; });
            if (selected.length > 0) {
                return selected[0].size;
            }
            else {
                this.pageSizes[0].selected = true;
                return this.pageSizes[0].size;
            }
        },
        enumerable: true,
        configurable: true
    });
    DevComponent.prototype.navigateTo = function (page) {
        if (page !== '...') {
            this.currentPage = page;
            this.navigate.emit(page);
        }
    };
    DevComponent.prototype.toggleOrderColumn = function (columnName, column) {
        if (columnName === '$actions') {
            return false;
        }
        for (var columnKey in this.columns) {
            if (columnKey !== '$actions') {
                if (columnKey !== columnName) {
                    this.columns[columnKey].direction = null;
                }
                else {
                    if ([null, undefined].includes(this.columns[columnKey].direction)) {
                        this.columns[columnKey].direction = 'desc';
                    }
                    else if (this.columns[columnKey].direction === 'desc') {
                        this.columns[columnKey].direction = 'asc';
                    }
                    else if (this.columns[columnKey].direction === 'asc') {
                        this.columns[columnKey].direction = null;
                    }
                }
            }
        }
        var sort = {
            direction: this.columns[columnName].direction !== null ? this.columns[columnName].direction : '',
            active: this.columns[columnName].direction !== null ? columnName : ''
        };
        this.sort.emit(sort);
        console.log(sort);
    };
    DevComponent.prototype.changeStatus = function (checkbox) {
        this.rows.forEach(function (entry) {
            entry.$props['checked'] = checkbox.checked;
        });
    };
    DevComponent.prototype.emitRefresh = function () {
        this.refresh.emit(true);
    };
    DevComponent.prototype.setPerPage = function (menu) {
        this.pageSizes.forEach(function (s) { return s.selected = false; });
        menu.selected = true;
        this.pageSize.emit(menu.size);
    };
    DevComponent.prototype.emitSearch = function (field) {
        this.search.emit(field.value);
    };
    DevComponent.prototype.singleActionClick = function (row, menu) {
        if (menu.onClick !== undefined) {
            menu.onClick(row);
        }
        this.action.emit({ menu: menu, row: row });
    };
    DevComponent.prototype.pagination = function (currentPage, totalPage) {
        var current = currentPage, last = totalPage, delta = 2, left = current - delta, right = current + delta + 1, range = [], rangeWithDots = [], l;
        for (var i = 1; i <= last; i++) {
            if (i == 1 || i == last || i >= left && i < right) {
                range.push(i);
            }
        }
        for (var _i = 0, range_1 = range; _i < range_1.length; _i++) {
            var i = range_1[_i];
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                }
                else if (i - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        }
        return rangeWithDots;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bulk'),
        __metadata("design:type", Object)
    ], DevComponent.prototype, "bulk", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('config'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DevComponent.prototype, "config", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pageSizes'),
        __metadata("design:type", Array)
    ], DevComponent.prototype, "pageSizes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('sort'),
        __metadata("design:type", Object)
    ], DevComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('navigate'),
        __metadata("design:type", Object)
    ], DevComponent.prototype, "navigate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('action'),
        __metadata("design:type", Object)
    ], DevComponent.prototype, "action", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('search'),
        __metadata("design:type", Object)
    ], DevComponent.prototype, "search", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('search-status'),
        __metadata("design:type", Object)
    ], DevComponent.prototype, "searchStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('pageSize'),
        __metadata("design:type", Object)
    ], DevComponent.prototype, "pageSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('refresh'),
        __metadata("design:type", Object)
    ], DevComponent.prototype, "refresh", void 0);
    DevComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dev',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dev.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/dev/components/dev/dev.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dev.component.scss */ "./src/app/dev/components/dev/dev.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], DevComponent);
    return DevComponent;
}());



/***/ }),

/***/ "./src/app/directives/onhover.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/onhover.directive.ts ***!
  \*************************************************/
/*! exports provided: Debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Debounce", function() { return Debounce; });
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

var Debounce = /** @class */ (function () {
    function Debounce(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.status = 'out';
        this.trigger = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Debounce.prototype.ngOnInit = function () {
        this.debounce = this.debounce || 1000;
    };
    Debounce.prototype.killCounting = function () {
        var _this = this;
        clearTimeout(this.timeout);
        if (this.status === 'in') {
            this.timeout = setTimeout(function () {
                _this.trigger.emit('left');
                _this.status = 'out';
            }, this.debounce);
        }
    };
    Debounce.prototype.startCounting = function () {
        var _this = this;
        clearTimeout(this.timeout);
        if (this.status === 'out') {
            this.timeout = setTimeout(function () {
                _this.trigger.emit('hovered');
                _this.status = 'in';
            }, this.debounce);
        }
    };
    Debounce.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('debounce'),
        __metadata("design:type", Number)
    ], Debounce.prototype, "debounce", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Debounce.prototype, "trigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Debounce.prototype, "killCounting", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Debounce.prototype, "startCounting", null);
    Debounce = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[debounce]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], Debounce);
    return Debounce;
}());



/***/ }),

/***/ "./src/app/guards/allow-dispatcher.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/guards/allow-dispatcher.guard.ts ***!
  \**************************************************/
/*! exports provided: AllowDispatcherGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllowDispatcherGuard", function() { return AllowDispatcherGuard; });
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




var AllowDispatcherGuard = /** @class */ (function () {
    function AllowDispatcherGuard(tendoo, snackbar, router) {
        this.tendoo = tendoo;
        this.snackbar = snackbar;
        this.router = router;
    }
    AllowDispatcherGuard.prototype.canActivate = function (next, state) {
        var role = this.tendoo.auth.getUser().role.namespace;
        console.log(role);
        if (!['brookr.dispatcher', 'admin'].includes(role)) {
            switch (role) {
                case 'brookr.driver':
                    this.router.navigateByUrl('/dashboard/drivers/loads');
                    this.snackbar.open('You\'re not allowed to see this page', 'OK', { duration: 3000 });
                    break;
            }
            return false;
        }
        return true;
    };
    AllowDispatcherGuard.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_2__["TendooService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AllowDispatcherGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_2__["TendooService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AllowDispatcherGuard);
    return AllowDispatcherGuard;
}());



/***/ }),

/***/ "./src/app/guards/authentication.guard.ts":
/*!************************************************!*\
  !*** ./src/app/guards/authentication.guard.ts ***!
  \************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(tendoo, router, snackbar, auth) {
        this.tendoo = tendoo;
        this.router = router;
        this.snackbar = snackbar;
        this.auth = auth;
    }
    AuthenticationGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.tendoo.auth.getUser()) {
                return _this.auth.getRoleAndPermissions().subscribe(function (result) {
                    resolve(true);
                });
            }
            _this.tendoo.auth.tokenLogin(_this.tendoo.cookie.get('auth.user')).subscribe(function (result) {
                _this.auth.getRoleAndPermissions().subscribe(function (result) {
                    resolve(true);
                });
            }, function (error) {
                _this.router.navigateByUrl('/auth/login?redirect=' + state.url);
                _this.snackbar.open('Please login first', null, { duration: 3000 });
            });
        });
    };
    AuthenticationGuard.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__["TendooService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    AuthenticationGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__["TendooService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm5/icon.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ "../../node_modules/@angular/material/fesm5/slider.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/fesm5/progress-spinner.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/fesm5/input.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/fesm5/menu.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};








var ImportedModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: __spreadArrays([
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ], ImportedModules),
            exports: ImportedModules
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/partials/dashboard/driver-load-status/driver-load-status.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/partials/dashboard/driver-load-status/driver-load-status.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9wYXJ0aWFscy9kYXNoYm9hcmQvZHJpdmVyLWxvYWQtc3RhdHVzL2RyaXZlci1sb2FkLXN0YXR1cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/partials/dashboard/driver-load-status/driver-load-status.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/partials/dashboard/driver-load-status/driver-load-status.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DriverLoadStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverLoadStatus", function() { return DriverLoadStatus; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cloud-breeze/utilities */ "../../dist/cloud-breeze/utilities/fesm5/cloud-breeze-utilities.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var DriverLoadStatus = /** @class */ (function () {
    function DriverLoadStatus(tendoo, data, snackbar, dialogRef) {
        this.tendoo = tendoo;
        this.data = data;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.load = this.data.load;
    }
    DriverLoadStatus.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.tendoo.forms.getPublicForm('broork.drivers-loads-status', _this.load.id).subscribe(function (form) {
                _this.form = _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].buildForm(form);
            }, function (response) {
                _this.snackbar.open(response.error['message'] || response.message, 'OK', { duration: 3000 });
            });
        }, 0);
    };
    DriverLoadStatus.prototype.saveStatus = function () {
        var _this = this;
        this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].touchAllFields(s.formGroup); });
        if (this.form.formGroup.invalid) {
            return this.snackbar.open('Unable to proceed the form is not valid.', 'OK', { duration: 6000 });
        }
        this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].deactivateFields(s.fields); });
        var postForm = this.form.formGroup.value;
        postForm.load['driver_id'] = this.tendoo.auth.getUser().id;
        this.tendoo.put(this.tendoo.baseUrl + "brookr/loads/self-assign/" + this.load.id, postForm).subscribe(function (result) {
            _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
            _this.dialogRef.close();
            _this.ngOnInit();
        }, function (result) {
            _this.snackbar.open(result['error'].message, 'OK', { duration: 6000 });
            _this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].enableFields(s.fields); });
        });
    };
    DriverLoadStatus.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    DriverLoadStatus.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
    ]; };
    DriverLoadStatus = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driver-load-status',
            template: __importDefault(__webpack_require__(/*! raw-loader!./driver-load-status.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/driver-load-status/driver-load-status.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./driver-load-status.component.scss */ "./src/app/partials/dashboard/driver-load-status/driver-load-status.component.scss")).default]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"], Object, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], DriverLoadStatus);
    return DriverLoadStatus;
}());



/***/ }),

/***/ "./src/app/partials/dashboard/layout/layout.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/partials/dashboard/layout/layout.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100%;\n}\n\n.expand-sidebar {\n  -webkit-animation: expand;\n          animation: expand;\n  -webkit-animation-duration: 150ms;\n          animation-duration: 150ms;\n}\n\n.compress-sidebar {\n  -webkit-animation: compress;\n          animation: compress;\n  -webkit-animation-duration: 150ms;\n          animation-duration: 150ms;\n}\n\n@-webkit-keyframes compress {\n  from {\n    width: 16rem;\n  }\n  30% {\n    width: 14rem;\n  }\n  80% {\n    width: 6rem;\n  }\n  to {\n    width: 4rem;\n  }\n}\n\n@keyframes compress {\n  from {\n    width: 16rem;\n  }\n  30% {\n    width: 14rem;\n  }\n  80% {\n    width: 6rem;\n  }\n  to {\n    width: 4rem;\n  }\n}\n\n@-webkit-keyframes expand {\n  from {\n    width: 4rem;\n  }\n  30% {\n    width: 6rem;\n  }\n  80% {\n    width: 14rem;\n  }\n  to {\n    width: 16rem;\n  }\n}\n\n@keyframes expand {\n  from {\n    width: 4rem;\n  }\n  30% {\n    width: 6rem;\n  }\n  80% {\n    width: 14rem;\n  }\n  to {\n    width: 16rem;\n  }\n}\n\n#notifications {\n  transition-property: width;\n  transition-duration: 0.5s;\n  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvcGFja2FnZXMvY2xvdWQtYnJlZXplL3NyYy9wdWJsaWMvdGVuZG9vLXNldHVwL3Byb2plY3RzL2Jyb29rci11aS9zcmMvYXBwL3BhcnRpYWxzL2Rhc2hib2FyZC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvYnJvb2tyLXVpL3NyYy9hcHAvcGFydGlhbHMvZGFzaGJvYXJkL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7VUFBQSxtQkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksWUFBQTtFQ0NOO0VEQ0U7SUFDSSxZQUFBO0VDQ047RURDRTtJQUNJLFdBQUE7RUNDTjtFRENFO0lBQ0ksV0FBQTtFQ0NOO0FBQ0Y7O0FEYkE7RUFDSTtJQUNJLFlBQUE7RUNDTjtFRENFO0lBQ0ksWUFBQTtFQ0NOO0VEQ0U7SUFDSSxXQUFBO0VDQ047RURDRTtJQUNJLFdBQUE7RUNDTjtBQUNGOztBRENBO0VBQ0k7SUFDSSxXQUFBO0VDQ047RURDRTtJQUNJLFdBQUE7RUNDTjtFRENFO0lBQ0ksWUFBQTtFQ0NOO0VEQ0U7SUFDSSxZQUFBO0VDQ047QUFDRjs7QURiQTtFQUNJO0lBQ0ksV0FBQTtFQ0NOO0VEQ0U7SUFDSSxXQUFBO0VDQ047RURDRTtJQUNJLFlBQUE7RUNDTjtFRENFO0lBQ0ksWUFBQTtFQ0NOO0FBQ0Y7O0FEQ0E7RUFDSSwwQkFBQTtFQUNILHlCQUFBO0VBQ0Esc0RBQUE7QUNDRCIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9wYXJ0aWFscy9kYXNoYm9hcmQvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhwYW5kLXNpZGViYXIge1xyXG4gICAgYW5pbWF0aW9uOiBleHBhbmQ7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE1MG1zO1xyXG59XHJcblxyXG4uY29tcHJlc3Mtc2lkZWJhciB7XHJcbiAgICBhbmltYXRpb246IGNvbXByZXNzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNTBtcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBjb21wcmVzcyB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB3aWR0aDogMTZyZW07XHJcbiAgICB9XHJcbiAgICAzMCUge1xyXG4gICAgICAgIHdpZHRoOiAxNHJlbTtcclxuICAgIH1cclxuICAgIDgwJSB7XHJcbiAgICAgICAgd2lkdGg6IDZyZW07XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgd2lkdGg6IDRyZW07XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyBleHBhbmQge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgd2lkdGg6IDRyZW07XHJcbiAgICB9XHJcbiAgICAzMCUge1xyXG4gICAgICAgIHdpZHRoOiA2cmVtO1xyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgICB3aWR0aDogMTRyZW07XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgd2lkdGg6IDE2cmVtO1xyXG4gICAgfVxyXG59XHJcbiNub3RpZmljYXRpb25zIHtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoO1xyXG5cdHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcclxuXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDAuNSwgMSk7XHJcbn0iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhwYW5kLXNpZGViYXIge1xuICBhbmltYXRpb246IGV4cGFuZDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNTBtcztcbn1cblxuLmNvbXByZXNzLXNpZGViYXIge1xuICBhbmltYXRpb246IGNvbXByZXNzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDE1MG1zO1xufVxuXG5Aa2V5ZnJhbWVzIGNvbXByZXNzIHtcbiAgZnJvbSB7XG4gICAgd2lkdGg6IDE2cmVtO1xuICB9XG4gIDMwJSB7XG4gICAgd2lkdGg6IDE0cmVtO1xuICB9XG4gIDgwJSB7XG4gICAgd2lkdGg6IDZyZW07XG4gIH1cbiAgdG8ge1xuICAgIHdpZHRoOiA0cmVtO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGV4cGFuZCB7XG4gIGZyb20ge1xuICAgIHdpZHRoOiA0cmVtO1xuICB9XG4gIDMwJSB7XG4gICAgd2lkdGg6IDZyZW07XG4gIH1cbiAgODAlIHtcbiAgICB3aWR0aDogMTRyZW07XG4gIH1cbiAgdG8ge1xuICAgIHdpZHRoOiAxNnJlbTtcbiAgfVxufVxuI25vdGlmaWNhdGlvbnMge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAwLjUsIDEpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/partials/dashboard/layout/layout.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/partials/dashboard/layout/layout.component.ts ***!
  \***************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action */ "./src/app/store/action.ts");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
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








var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(store, notificationService, snackbar, tendoo) {
        this.store = store;
        this.notificationService = notificationService;
        this.snackbar = snackbar;
        this.tendoo = tendoo;
        this.menuToggled = false;
        this.menuIconToggled = true;
        this.urlPrefix = !Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() ? '/modules/brookr/brookr' : '';
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.tendoo.auth.getUser();
        this.state$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])('state'));
        this.state$.subscribe(function (state) {
            _this.notificationIds = state.notifications.map(function (n) { return n.id; });
        });
        var intervalRef = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(10000);
        this.loopInterval = intervalRef.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["timeInterval"])()).subscribe(function (v) {
            // this.fetchNotifications();
        });
    };
    LayoutComponent.prototype.handleHoverEvent = function (event) {
        if (event === 'hovered') {
            this.store.dispatch(_store_action__WEBPACK_IMPORTED_MODULE_3__["AppActions"].uncompressSidebar());
        }
        else {
            this.store.dispatch(_store_action__WEBPACK_IMPORTED_MODULE_3__["AppActions"].compressSidebar());
            this.store.dispatch(_store_action__WEBPACK_IMPORTED_MODULE_3__["AppActions"].toggleSidebarSubMenus({ status: false }));
        }
    };
    LayoutComponent.prototype.ngOnChanges = function () {
    };
    LayoutComponent.prototype.ngOnDestroy = function () {
        this.loopInterval.unsubscribe();
    };
    LayoutComponent.prototype.fetchNotifications = function () {
        var _this = this;
        this.notificationService
            .getNotifications(this.notificationIds)
            .subscribe(function (notifications) {
            _this.store.dispatch(_store_action__WEBPACK_IMPORTED_MODULE_3__["AppActions"].storeNotifications({ notifications: notifications }));
        });
    };
    LayoutComponent.prototype.toggleMenu = function (menu, index) {
        this.store.dispatch(_store_action__WEBPACK_IMPORTED_MODULE_3__["AppActions"].toggleMenu({ menu: menu, index: index }));
    };
    /**
     * Checks if the logged user can see the menu
     * based on the permissions added to his role
     * via the Authentication.guard.
     * @param menu Menu
     */
    LayoutComponent.prototype.canSeeMenu = function (menu) {
        var _this = this;
        if (menu.hasPermissions !== undefined) {
            var isAllowed = menu.hasPermissions.map(function (permission) {
                var userPermissions = _this.tendoo.auth.getUser().role['permissions'];
                if (userPermissions.includes(permission)) {
                    return true;
                }
                return false;
            }).filter(function (m) { return m; });
            return isAllowed.length === menu.hasPermissions.length;
        }
        if (menu.hasOnePermission !== undefined) {
            var isAllowed = menu.hasOnePermission.map(function (permission) {
                if (_this.tendoo.auth.getUser().role['permissions'].includes(permission)) {
                    return true;
                }
                return false;
            }).filter(function (m) { return m; });
            return isAllowed.length > 0;
        }
    };
    LayoutComponent.prototype.toggleSidebar = function () {
        this.store.dispatch(_store_action__WEBPACK_IMPORTED_MODULE_3__["AppActions"].toggleSidebar());
    };
    LayoutComponent.prototype.toggleNotifications = function () {
        this.store.dispatch(_store_action__WEBPACK_IMPORTED_MODULE_3__["AppActions"].toggleNotification());
    };
    LayoutComponent.prototype.closeNotification = function (notification) {
        var _this = this;
        this.notificationService.deleteNotification(notification.id).subscribe(function (result) {
            _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
            /**
             * We'll remove the delted
             * notification from the index
             */
            _this.notificationIds.splice(_this.notificationIds.indexOf(notification.id), 1);
            _this.store.dispatch(_store_action__WEBPACK_IMPORTED_MODULE_3__["AppActions"].deleteNotification({ id: notification.id }));
            _this.fetchNotifications();
        });
    };
    LayoutComponent.prototype.toggleMenuIcons = function () {
        this.store.dispatch(_store_action__WEBPACK_IMPORTED_MODULE_3__["AppActions"].toggleSidebarCompression());
    };
    LayoutComponent.prototype.closeAllMenus = function () {
        this.store.dispatch(_store_action__WEBPACK_IMPORTED_MODULE_3__["AppActions"].toggleSidebarSubMenus({ status: false }));
    };
    LayoutComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_7__["TendooService"] }
    ]; };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./layout.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/layout/layout.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./layout.component.scss */ "./src/app/partials/dashboard/layout/layout.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _services_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_7__["TendooService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/partials/dashboard/load-assignation/load-assignation.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/partials/dashboard/load-assignation/load-assignation.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvcGFja2FnZXMvY2xvdWQtYnJlZXplL3NyYy9wdWJsaWMvdGVuZG9vLXNldHVwL3Byb2plY3RzL2Jyb29rci11aS9zcmMvYXBwL3BhcnRpYWxzL2Rhc2hib2FyZC9sb2FkLWFzc2lnbmF0aW9uL2xvYWQtYXNzaWduYXRpb24uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9wYXJ0aWFscy9kYXNoYm9hcmQvbG9hZC1hc3NpZ25hdGlvbi9sb2FkLWFzc2lnbmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9wYXJ0aWFscy9kYXNoYm9hcmQvbG9hZC1hc3NpZ25hdGlvbi9sb2FkLWFzc2lnbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn0iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/partials/dashboard/load-assignation/load-assignation.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/partials/dashboard/load-assignation/load-assignation.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LoadAssignationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAssignationComponent", function() { return LoadAssignationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _cloud_breeze_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cloud-breeze/core */ "../../dist/cloud-breeze/core/fesm5/cloud-breeze-core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cloud-breeze/utilities */ "../../dist/cloud-breeze/utilities/fesm5/cloud-breeze-utilities.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var LoadAssignationComponent = /** @class */ (function () {
    function LoadAssignationComponent(tendoo, store, snackbar, dialogRef, data, dialog) {
        this.tendoo = tendoo;
        this.store = store;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.orderId = data.id;
    }
    LoadAssignationComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * this to as a workaround
         * for the ExpressionChanged... issue
         */
        setTimeout(function () {
            _this.tendoo.forms.getPublicForm('broork.loads-drivers', _this.orderId).subscribe(function (form) {
                _this.form = _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_5__["ValidationGenerator"].buildForm(form);
            }, function (response) {
                _this.snackbar.open(response.error['message'] || response.message, 'OK', { duration: 3000 });
            });
        }, 0);
    };
    LoadAssignationComponent.prototype.closeDialog = function () {
        this.dialog.getDialogById('assign-load').close();
    };
    LoadAssignationComponent.prototype.saveDriverDetails = function () {
        var _this = this;
        this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_5__["ValidationGenerator"].touchAllFields(s.formGroup); });
        if (this.form.formGroup.invalid) {
            return this.snackbar.open('Unable to proceed the form is not valid.', 'OK', { duration: 3000 });
        }
        this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_5__["ValidationGenerator"].deactivateFields(s.fields); });
        this.tendoo.put(this.tendoo.baseUrl + "brookr/loads/update-driver/" + this.orderId, this.form.formGroup.value).subscribe(function (result) {
            _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
            _this.dialog.getDialogById('assign-load').close();
        }, function (result) {
            _this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_5__["ValidationGenerator"].enableFields(s.fields); });
            _this.snackbar.open(result['error'].message || result.message, 'OK', { duration: 5000 });
        });
    };
    LoadAssignationComponent.prototype.removeDriver = function () {
        var _this = this;
        this.dialog.open(_cloud_breeze_core__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
            id: 'confirm-remove-driver',
            data: {
                title: 'Unassigning The Driver',
                message: 'Would you like to confirm the removal of the driver ?',
                buttons: [
                    {
                        label: 'Yes',
                        onClick: function () {
                            _this.tendoo.get(_this.tendoo.baseUrl + "brookr/loads/unassign/" + _this.orderId).subscribe(function (result) {
                                _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
                                _this.dialog.getDialogById('confirm-remove-driver').close();
                                _this.dialogRef.close();
                            }, function (result) {
                                _this.snackbar.open(result['error'].message || result.message, 'OK', { duration: 6000 });
                            });
                        }
                    }, {
                        label: 'No',
                        onClick: function () {
                            _this.dialog.getDialogById('confirm-remove-driver').close();
                        }
                    }
                ]
            }
        });
    };
    LoadAssignationComponent.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    LoadAssignationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-load-assignation',
            template: __importDefault(__webpack_require__(/*! raw-loader!./load-assignation.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/load-assignation/load-assignation.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./load-assignation.component.scss */ "./src/app/partials/dashboard/load-assignation/load-assignation.component.scss")).default]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], LoadAssignationComponent);
    return LoadAssignationComponent;
}());



/***/ }),

/***/ "./src/app/partials/dashboard/load-history/load-history.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/partials/dashboard/load-history/load-history.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9wYXJ0aWFscy9kYXNoYm9hcmQvbG9hZC1oaXN0b3J5L2xvYWQtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/partials/dashboard/load-history/load-history.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/partials/dashboard/load-history/load-history.component.ts ***!
  \***************************************************************************/
/*! exports provided: LoadHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHistoryComponent", function() { return LoadHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var LoadHistoryComponent = /** @class */ (function () {
    function LoadHistoryComponent(tendoo, store, snackbar, data, dialog) {
        this.tendoo = tendoo;
        this.store = store;
        this.snackbar = snackbar;
        this.data = data;
        this.dialog = dialog;
    }
    LoadHistoryComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    LoadHistoryComponent.prototype.closePopup = function () {
        this.dialog.getDialogById('load-history').close();
    };
    LoadHistoryComponent.prototype.getActionType = function (type) {
        switch (type) {
            case 'brookr.shipper_arrival_time':
                return 'Shipper Arrival';
                break;
            case 'brookr.depart_time':
                return 'Depart Time';
                break;
            case 'brookr.receiver_arrival_time':
                return 'Receive Arrival';
                break;
            case 'brookr.awaiting-load':
                return 'Awaiting Load';
                break;
            case 'brookr.start-delivery':
                return 'Start Delivery';
                break;
        }
    };
    LoadHistoryComponent.prototype.getActionDescription = function (description, value) {
        switch (description) {
            case 'brookr.awaiting-load':
                return 'This usually implies the drivers has arrived at the delivery location and is awaiting for load';
                break;
            case 'brookr.start-delivery':
                return 'This mark the time the driver has started the load delivery.';
                break;
            case 'brookr.receiver_arrival_time':
                return "This describe the moment the received has arrived at the delivery location. Time indicated : " + value;
                break;
            case 'brookr.depart_time':
                return "This describe when the driver left the delivery location. Time indicated : " + value;
                break;
            case 'brookr.shipper_arrival_time':
                return "This is a reference for the moment the Shipper has arrivated the delivery location : " + value;
                break;
        }
    };
    LoadHistoryComponent.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__["TendooService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }
    ]; };
    LoadHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-load-history',
            template: __importDefault(__webpack_require__(/*! raw-loader!./load-history.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/load-history/load-history.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./load-history.component.scss */ "./src/app/partials/dashboard/load-history/load-history.component.scss")).default]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_3__["TendooService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], LoadHistoryComponent);
    return LoadHistoryComponent;
}());



/***/ }),

/***/ "./src/app/partials/dashboard/load-status/load-status.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/partials/dashboard/load-status/load-status.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9wYXJ0aWFscy9kYXNoYm9hcmQvbG9hZC1zdGF0dXMvbG9hZC1zdGF0dXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/partials/dashboard/load-status/load-status.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/partials/dashboard/load-status/load-status.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoadStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadStatusComponent", function() { return LoadStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cloud-breeze/utilities */ "../../dist/cloud-breeze/utilities/fesm5/cloud-breeze-utilities.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var LoadStatusComponent = /** @class */ (function () {
    function LoadStatusComponent(tendoo, menu, snackbar, dialogRef) {
        this.tendoo = tendoo;
        this.menu = menu;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.orderId = this.menu['id'];
    }
    LoadStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.tendoo.forms.getPublicForm('broork.loads-status', _this.orderId).subscribe(function (form) {
                _this.form = _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].buildForm(form);
            }, function (response) {
                _this.snackbar.open(response.error['message'] || response.message, 'OK', { duration: 3000 });
            });
        }, 0);
    };
    LoadStatusComponent.prototype.saveStatus = function () {
        var _this = this;
        this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].touchAllFields(s.formGroup); });
        if (this.form.formGroup.invalid) {
            return this.snackbar.open('Unable to proceed the form is not valid.', 'OK', { duration: 6000 });
        }
        this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].deactivateFields(s.fields); });
        this.tendoo.put(this.tendoo.baseUrl + "brookr/loads/update-status/" + this.orderId, this.form.formGroup.value).subscribe(function (result) {
            _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
            _this.dialogRef.close();
        }, function (result) {
            _this.snackbar.open(result['error'].message, 'OK', { duration: 6000 });
            _this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].enableFields(s.fields); });
        });
    };
    LoadStatusComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    LoadStatusComponent.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
    ]; };
    LoadStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-load-status',
            template: __importDefault(__webpack_require__(/*! raw-loader!./load-status.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/load-status/load-status.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./load-status.component.scss */ "./src/app/partials/dashboard/load-status/load-status.component.scss")).default]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"], Object, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], LoadStatusComponent);
    return LoadStatusComponent;
}());



/***/ }),

/***/ "./src/app/partials/dashboard/popup/popup.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/partials/dashboard/popup/popup.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9wYXJ0aWFscy9kYXNoYm9hcmQvcG9wdXAvcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/partials/dashboard/popup/popup.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/partials/dashboard/popup/popup.component.ts ***!
  \*************************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cloud-breeze/utilities */ "../../dist/cloud-breeze/utilities/fesm5/cloud-breeze-utilities.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var PopupComponent = /** @class */ (function () {
    function PopupComponent(popup, dialogRef, tendoo) {
        this.popup = popup;
        this.dialogRef = dialogRef;
        this.tendoo = tendoo;
    }
    PopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tendoo.forms.getPublicForm(this.popup.formNamespace).subscribe(function (form) {
            _this.form = _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_3__["ValidationGenerator"].buildForm(form);
        });
    };
    PopupComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_2__["TendooService"] }
    ]; };
    PopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popup',
            template: __importDefault(__webpack_require__(/*! raw-loader!./popup.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/popup/popup.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./popup.component.scss */ "./src/app/partials/dashboard/popup/popup.component.scss")).default]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_2__["TendooService"]])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/partials/dashboard/popups/drivers-payment/drivers-payment.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/partials/dashboard/popups/drivers-payment/drivers-payment.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvcGFja2FnZXMvY2xvdWQtYnJlZXplL3NyYy9wdWJsaWMvdGVuZG9vLXNldHVwL3Byb2plY3RzL2Jyb29rci11aS9zcmMvYXBwL3BhcnRpYWxzL2Rhc2hib2FyZC9wb3B1cHMvZHJpdmVycy1wYXltZW50L2RyaXZlcnMtcGF5bWVudC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2Jyb29rci11aS9zcmMvYXBwL3BhcnRpYWxzL2Rhc2hib2FyZC9wb3B1cHMvZHJpdmVycy1wYXltZW50L2RyaXZlcnMtcGF5bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvYnJvb2tyLXVpL3NyYy9hcHAvcGFydGlhbHMvZGFzaGJvYXJkL3BvcHVwcy9kcml2ZXJzLXBheW1lbnQvZHJpdmVycy1wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn0iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/partials/dashboard/popups/drivers-payment/drivers-payment.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/partials/dashboard/popups/drivers-payment/drivers-payment.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DriversPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversPaymentComponent", function() { return DriversPaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _cloud_breeze_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cloud-breeze/core */ "../../dist/cloud-breeze/core/fesm5/cloud-breeze-core.js");
/* harmony import */ var _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cloud-breeze/utilities */ "../../dist/cloud-breeze/utilities/fesm5/cloud-breeze-utilities.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm5/dialog.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var DriversPaymentComponent = /** @class */ (function () {
    function DriversPaymentComponent(snackbar, tendoo, data, dialogRef, dialog) {
        this.snackbar = snackbar;
        this.tendoo = tendoo;
        this.data = data;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.tabs = [];
        this.title = '';
        this.history = [];
        this.tabs = this.data.tabs;
        this.title = this.data.title;
    }
    DriversPaymentComponent_1 = DriversPaymentComponent;
    DriversPaymentComponent.prototype.setActive = function (tab) {
        this.tabs.forEach(function (_t) { return _t.active = false; });
        tab.active = true;
        this.detectLoaded();
    };
    Object.defineProperty(DriversPaymentComponent.prototype, "selectedTab", {
        get: function () {
            return this.tabs.filter(function (_t) { return _t.active; })[0];
        },
        enumerable: true,
        configurable: true
    });
    DriversPaymentComponent.prototype.detectLoaded = function () {
        var _this = this;
        if (this.selectedTab.identifier === 'history') {
            this.tendoo.get(this.tendoo.baseUrl + "brookr/drivers/payments/" + this.data.resource.id)
                .subscribe(function (result) {
                console.log(result);
                _this.history = result['payments'];
            });
        }
    };
    DriversPaymentComponent.prototype.deletePayment = function (payment) {
        var _this = this;
        this.dialog.open(_cloud_breeze_core__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
            id: 'confirm-delete-payment',
            data: {
                buttons: [
                    {
                        namespace: 'yes',
                        label: 'Yes',
                        onClick: function () {
                            _this.tendoo.delete(_this.tendoo.baseUrl + "brookr/drivers/payments/" + payment.id)
                                .subscribe(function (result) {
                                _this.snackbar.open(result['message'], 'OK', { duration: 4000 });
                                _this.dialog.getDialogById('confirm-delete-payment').close();
                                _this.detectLoaded();
                            }, function (result) {
                                _this.snackbar.open(result['error'].message || result.message, 'GOT IT');
                            });
                        }
                    }, {
                        label: 'No',
                        namespace: 'no',
                        onClick: function () {
                            _this.dialog.getDialogById('confirm-delete-payment').close();
                        }
                    }
                ],
                message: 'Would you like to deleted this record ? Cannot be restored.',
                title: 'Please Confirm Your Action'
            },
            width: [
                this.tendoo.responsive.isLG(),
                this.tendoo.responsive.isXL(),
            ].includes(true) ? '400px' : '80%',
            height: [
                this.tendoo.responsive.isLG(),
                this.tendoo.responsive.isXL(),
            ].includes(true) ? '200px' : '40%',
        });
    };
    DriversPaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.tendoo.forms.getPublicForm(_this.data.formNamespace).subscribe(function (form) {
                _this.form = _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].buildForm(form);
            });
        }, 0);
    };
    DriversPaymentComponent.prototype.closePopup = function () {
        this.dialogRef.close();
    };
    DriversPaymentComponent.prototype.savePayment = function () {
        var _this = this;
        this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].touchAllFields(s.formGroup); });
        if (this.form.formGroup.invalid) {
            return this.snackbar.open('Unable to proceed the form is not valid', 'OK', { duration: 3000 });
        }
        this.tendoo[this.data.mode === 'edit' ? 'put' : 'post']("" + this.tendoo.baseUrl + this.data.postNamespace + (this.data.mode === 'edit' ? '' : this.data.resource.id), this.form.formGroup.value).subscribe(function (result) {
            _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
            _this.dialogRef.close();
        }, function (response) {
            _this.snackbar.open(response['error'].message || response['message'], 'OK', { duration: 6000 });
        });
    };
    DriversPaymentComponent.prototype.openPaymentPopup = function (payment) {
        var _this = this;
        this.dialog.open(DriversPaymentComponent_1, {
            id: 'edit-payment-popup',
            data: {
                resource: payment,
                mode: 'edit',
                formNamespace: "brookr.advance-payment.drivers/" + payment.id,
                postNamespace: "brookr/drivers/payments/" + payment.id,
                tabs: [
                    {
                        label: 'Edit Payment',
                        identifier: 'new',
                        active: true
                    },
                ],
                title: 'Edit Payment'
            },
            width: [
                this.tendoo.responsive.isLG(),
                this.tendoo.responsive.isXL(),
            ].includes(true) ? '600px' : '80%',
            height: [
                this.tendoo.responsive.isLG(),
                this.tendoo.responsive.isXL(),
            ].includes(true) ? '600px' : '80%',
        }).afterClosed()
            .subscribe(function (_) {
            _this.detectLoaded();
        });
    };
    var DriversPaymentComponent_1;
    DriversPaymentComponent.ctorParameters = function () { return [
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
    ]; };
    DriversPaymentComponent = DriversPaymentComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drivers-payment',
            template: __importDefault(__webpack_require__(/*! raw-loader!./drivers-payment.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/popups/drivers-payment/drivers-payment.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./drivers-payment.component.scss */ "./src/app/partials/dashboard/popups/drivers-payment/drivers-payment.component.scss")).default]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"], Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], DriversPaymentComponent);
    return DriversPaymentComponent;
}());



/***/ }),

/***/ "./src/app/partials/dashboard/popups/load-delivery/load-delivery.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/partials/dashboard/popups/load-delivery/load-delivery.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9wYXJ0aWFscy9kYXNoYm9hcmQvcG9wdXBzL2xvYWQtZGVsaXZlcnkvbG9hZC1kZWxpdmVyeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/partials/dashboard/popups/load-delivery/load-delivery.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/partials/dashboard/popups/load-delivery/load-delivery.component.ts ***!
  \************************************************************************************/
/*! exports provided: LoadDeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadDeliveryComponent", function() { return LoadDeliveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cloud-breeze/utilities */ "../../dist/cloud-breeze/utilities/fesm5/cloud-breeze-utilities.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var LoadDeliveryComponent = /** @class */ (function () {
    function LoadDeliveryComponent(tendoo, load, snackbar, dialogRef) {
        this.tendoo = tendoo;
        this.load = load;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.fieldSources = {};
    }
    LoadDeliveryComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.tendoo.forms.getPublicForm('brookr.drivers-loads-delivery').subscribe(function (form) {
                _this.form = _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].buildForm(form);
            });
        }, 0);
    };
    LoadDeliveryComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    LoadDeliveryComponent.prototype.onFileChange = function (event, field) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.fieldSources[field.name] = file;
        }
    };
    LoadDeliveryComponent.prototype.submitDocument = function () {
        var _this = this;
        var formData = new FormData;
        this.form.sections.forEach(function (s) { return _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].touchAllFields(s.formGroup); });
        if (this.form.formGroup.invalid) {
            return this.snackbar.open('Unable to proceed the form is not valid.', 'OK', { duration: 3000 });
        }
        this.form.sections.forEach(function (s) {
            s.fields.forEach(function (field) {
                if (field.type === 'file') {
                    formData.append(field.name, _this.fieldSources[field.name]);
                }
                else {
                    formData.append(field.name, field.control.value);
                }
            });
        });
        this.tendoo.post(this.tendoo.baseUrl + "brookr/loads/stop/" + this.load.id, formData).subscribe(function (result) {
            _this.dialogRef.close();
            _this.snackbar.open(result['message'], 'OK', { duration: 3000 });
        }, function (result) {
            _this.snackbar.open(result['error'].message || result['message'], 'OK', { duration: 3000 });
        });
    };
    LoadDeliveryComponent.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
    ]; };
    LoadDeliveryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-load-delivery',
            template: __importDefault(__webpack_require__(/*! raw-loader!./load-delivery.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/popups/load-delivery/load-delivery.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./load-delivery.component.scss */ "./src/app/partials/dashboard/popups/load-delivery/load-delivery.component.scss")).default]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"], Object, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], LoadDeliveryComponent);
    return LoadDeliveryComponent;
}());



/***/ }),

/***/ "./src/app/partials/dashboard/table/table.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/partials/dashboard/table/table.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".min-100 {\n  min-width: 150px;\n}\n\n:host {\n  display: grid;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvcGFja2FnZXMvY2xvdWQtYnJlZXplL3NyYy9wdWJsaWMvdGVuZG9vLXNldHVwL3Byb2plY3RzL2Jyb29rci11aS9zcmMvYXBwL3BhcnRpYWxzL2Rhc2hib2FyZC90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2Jyb29rci11aS9zcmMvYXBwL3BhcnRpYWxzL2Rhc2hib2FyZC90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0VKIiwiZmlsZSI6InByb2plY3RzL2Jyb29rci11aS9zcmMvYXBwL3BhcnRpYWxzL2Rhc2hib2FyZC90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taW4tMTAwIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbn1cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSIsIi5taW4tMTAwIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/partials/dashboard/table/table.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/partials/dashboard/table/table.component.ts ***!
  \*************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cloud-breeze/utilities */ "../../dist/cloud-breeze/utilities/fesm5/cloud-breeze-utilities.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
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



var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.searchOn = false;
        this.totalPages = 200;
        this.currentPage = 1;
        this.pageSizes = [
            {
                label: '10',
                size: 10
            }, {
                label: '30',
                size: 30
            }, {
                label: '50',
                size: 50
            }, {
                label: '100',
                size: 100
            }
        ];
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.querySearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeSearchEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageSize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.advanced = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bulk = this.bulk || [];
    }
    Object.defineProperty(TableComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (config) {
            this._config = config;
            this.columns = this._config.columns;
            this.columnsNames = Object.keys(this.columns);
            this.totalPages = this._config.results.last_page;
            this.currentPage = this._config.results.current_page;
            this.rows = this._config.results.data;
        },
        enumerable: true,
        configurable: true
    });
    ;
    TableComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(TableComponent.prototype, "selected", {
        get: function () {
            return this.rows.filter(function (entry) { return entry.$props['checked']; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "defaultSize", {
        get: function () {
            var selected = this.pageSizes.filter(function (s) { return s.selected; });
            if (selected.length > 0) {
                return selected[0].size;
            }
            else {
                this.pageSizes[0].selected = true;
                return this.pageSizes[0].size;
            }
        },
        enumerable: true,
        configurable: true
    });
    TableComponent.prototype.navigateTo = function (page) {
        if (page !== '...') {
            this.currentPage = page;
            this.navigate.emit(page);
        }
    };
    TableComponent.prototype.toggleOrderColumn = function (columnName, column) {
        if (columnName === '$actions') {
            return false;
        }
        for (var columnKey in this.columns) {
            if (columnKey !== '$actions') {
                if (columnKey !== columnName) {
                    this.columns[columnKey].direction = null;
                }
                else {
                    if ([null, undefined].includes(this.columns[columnKey].direction)) {
                        this.columns[columnKey].direction = 'desc';
                    }
                    else if (this.columns[columnKey].direction === 'desc') {
                        this.columns[columnKey].direction = 'asc';
                    }
                    else if (this.columns[columnKey].direction === 'asc') {
                        this.columns[columnKey].direction = null;
                    }
                }
            }
        }
        var sort = {
            direction: this.columns[columnName].direction !== null ? this.columns[columnName].direction : '',
            active: this.columns[columnName].direction !== null ? columnName : ''
        };
        this.sort.emit(sort);
    };
    TableComponent.prototype.changeStatus = function (checkbox) {
        this.rows.forEach(function (entry) {
            entry.$props['checked'] = checkbox.checked;
        });
    };
    TableComponent.prototype.emitRefresh = function () {
        this.refresh.emit(true);
    };
    TableComponent.prototype.setPerPage = function (menu) {
        this.pageSizes.forEach(function (s) { return s.selected = false; });
        menu.selected = true;
        this.pageSize.emit(menu.size);
    };
    TableComponent.prototype.emitSearch = function (field) {
        this.search.emit(field.value);
    };
    TableComponent.prototype.singleActionClick = function (row, menu) {
        if (menu.onClick !== undefined) {
            menu.onClick(row);
        }
        console.log(row, menu);
        this.action.emit({ menu: menu, row: row });
    };
    TableComponent.prototype.pagination = function (currentPage, totalPage) {
        var current = currentPage, last = totalPage, delta = 2, left = current - delta, right = current + delta + 1, range = [], rangeWithDots = [], l;
        for (var i = 1; i <= last; i++) {
            if (i == 1 || i == last || i >= left && i < right) {
                range.push(i);
            }
        }
        for (var _i = 0, range_1 = range; _i < range_1.length; _i++) {
            var i = range_1[_i];
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                }
                else if (i - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        }
        return rangeWithDots;
    };
    TableComponent.prototype.closeSearch = function () {
        this.searchOn = false;
        this.advancedFilter = void (0);
        this.closeSearchEv.emit(true);
    };
    TableComponent.prototype.openAdvanced = function () {
        if (this.advancedFilter === undefined) {
            for (var column in this.columns) {
                if (this.columns[column].type) {
                    this.columns[column].field = {
                        label: this.columns[column].label,
                        type: this.columns[column].type,
                        name: column,
                        options: this.columns[column].options || [],
                        control: null
                    };
                }
            }
            var fields = Object.values(this.columns).map(function (c) { return c.field; }).filter(function (f) { return f !== undefined; });
            this.advancedFilter = _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_1__["ValidationGenerator"].buildFormGroup(fields);
        }
    };
    TableComponent.prototype.emitSearchWithQuery = function () {
        var fields = Object.values(this.columns).map(function (c) { return c.field; }).filter(function (f) { return f !== undefined; });
        fields.forEach(function (field) {
            if (['ng-datetime', 'datetime'].includes(field.type)) {
                field.control.setValue(moment__WEBPACK_IMPORTED_MODULE_2__(field.control.value).format());
            }
        });
        this.querySearch.emit({ query: this.advancedFilter.formGroup.value });
        console.log(this.advancedFilter);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bulk'),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "bulk", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('config'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TableComponent.prototype, "config", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pageSizes'),
        __metadata("design:type", Array)
    ], TableComponent.prototype, "pageSizes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('sort'),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('navigate'),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "navigate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('action'),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "action", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('search'),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "search", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('query-search'),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "querySearch", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('close-search'),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "closeSearchEv", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('search-status'),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "searchStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('pageSize'),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "pageSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('refresh'),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "refresh", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('advanced'),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "advanced", void 0);
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __importDefault(__webpack_require__(/*! raw-loader!./table.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/table/table.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./table.component.scss */ "./src/app/partials/dashboard/table/table.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/partials/dashboard/tabs/tabs.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/partials/dashboard/tabs/tabs.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9icm9va3ItdWkvc3JjL2FwcC9wYXJ0aWFscy9kYXNoYm9hcmQvdGFicy90YWJzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/partials/dashboard/tabs/tabs.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/partials/dashboard/tabs/tabs.component.ts ***!
  \***********************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cloud-breeze/utilities */ "../../dist/cloud-breeze/utilities/fesm5/cloud-breeze-utilities.js");
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


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    TabsComponent.prototype.ngOnInit = function () {
        console.log(this.form);
        this.renderable.forEach(function (section, index) {
            if (index === 0) {
                section['active'] = true;
            }
            else {
                section['active'] = false;
            }
        });
        if (this.form.formGroup === undefined) {
            this.form = _cloud_breeze_utilities__WEBPACK_IMPORTED_MODULE_1__["ValidationGenerator"].buildForm(this.form);
        }
    };
    TabsComponent.prototype.selectThis = function (section) {
        this.form.sections.forEach(function (s) { return s['active'] = false; });
        section.active = true;
    };
    TabsComponent.prototype.emitChanged = function (event) {
        this.changed.emit(event);
    };
    TabsComponent.prototype.submitForm = function () {
        this.submit.emit(this.form);
    };
    Object.defineProperty(TabsComponent.prototype, "renderable", {
        get: function () {
            return this.form.sections.filter(function (section) {
                if (section['render'] !== undefined && section['render'] === false) {
                    return false;
                }
                return true;
            });
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('form'),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('submit'),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "submit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('changed'),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "changed", void 0);
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tabs.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/partials/dashboard/tabs/tabs.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tabs.component.scss */ "./src/app/partials/dashboard/tabs/tabs.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cloud-breeze/services */ "../../dist/cloud-breeze/services/fesm5/cloud-breeze-services.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(tendoo) {
        this.tendoo = tendoo;
        this.roles = [];
    }
    AuthService.prototype.getRoleAndPermissions = function () {
        var _this = this;
        return this.tendoo.get(this.tendoo.baseUrl + "brookr/permissions").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (roles) {
            _this.roles = roles;
            _this.user = _this.tendoo.auth.getUser();
            var role = _this.roles.filter(function (r) { return r.id === _this.user.role.id; })[0] || [];
            _this.user.role = role;
        }));
    };
    AuthService.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/notifications.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
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


var NotificationsService = /** @class */ (function () {
    function NotificationsService(tendoo) {
        this.tendoo = tendoo;
    }
    NotificationsService.prototype.deleteNotification = function (id) {
        return this.tendoo.delete(this.tendoo.baseUrl + "brookr/notifications/" + id);
    };
    NotificationsService.prototype.getNotifications = function (excluded) {
        return this.tendoo.post(this.tendoo.baseUrl + "brookr/notifications#disable-spinner", { excluded: excluded });
    };
    NotificationsService.ctorParameters = function () { return [
        { type: _cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"] }
    ]; };
    NotificationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_cloud_breeze_services__WEBPACK_IMPORTED_MODULE_1__["TendooService"]])
    ], NotificationsService);
    return NotificationsService;
}());



/***/ }),

/***/ "./src/app/store/action.ts":
/*!*********************************!*\
  !*** ./src/app/store/action.ts ***!
  \*********************************/
/*! exports provided: AppActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppActions", function() { return AppActions; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");

var AppActions = {
    login: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('auth.logged-in'),
    logout: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('auth.logged-out'),
    toggleSidebar: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('dashboard.toggle-sidebar'),
    toggleSidebarSubMenus: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('dashboard.close-sidebar-submenus', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
    startAsyncLoading: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('start.async-loading'),
    stopAsyncLoading: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('stop.async-loading'),
    compressSidebar: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('dashboard.sidebar.compress'),
    uncompressSidebar: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('dashboard.sidebar.uncompress'),
    toggleSidebarCompression: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('dashboard.sidebar.compression'),
    fetchNotifications: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('dashboard.fetch-notifications'),
    deleteNotification: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('dashboard.delete-notifications', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
    toggleNotification: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('dashboard.toggle-notifications'),
    storeNotifications: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('dashboard.store-notifications', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
    toggleMenu: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('dashboard.toggle-menu', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
};


/***/ }),

/***/ "./src/app/store/state.ts":
/*!********************************!*\
  !*** ./src/app/store/state.ts ***!
  \********************************/
/*! exports provided: AppInitialState, AppReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInitialState", function() { return AppInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppReducer", function() { return AppReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./src/app/store/action.ts");
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
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};


var AppInitialState = {
    authenticated: false,
    asyncLoading: false,
    notifications: [],
    sidebarCompressed: true,
    fetchNotifications: false,
    sidebarToggled: false,
    notificationsToggled: false,
    dashboardMenus: [
        {
            label: 'Dashboard',
            path: '/dashboard',
            toggled: false,
            icon: 'dashboard',
            hasPermissions: [
                'brookr.see.dashboard',
            ],
        }, {
            label: 'Loads',
            toggled: false,
            icon: 'rv_hookup',
            hasOnePermission: [
                'brookr.create.loads',
                'brookr.change.loads-status',
                'brookr.edit.loads',
                'brookr.delete.loads',
                'brookr.see.loads'
            ],
            childrens: [
                {
                    label: 'List',
                    path: '/dashboard/loads',
                    hasOnePermission: ['brookr.see.loads']
                }, {
                    label: 'Create',
                    path: '/dashboard/loads/create',
                    hasPermissions: ['brookr.create.loads']
                }
            ]
        }, {
            label: 'Loads',
            toggled: false,
            icon: 'rv_hookup',
            path: '/dashboard/drivers/loads',
            hasOnePermission: [
                'brookr.see.drivers-loads',
            ]
        }, {
            label: 'Trucks',
            toggled: false,
            icon: 'local_shipping',
            hasOnePermission: [
                'brookr.see.trucks',
                'brookr.see.trucks-relatives',
                'brookr.edit.trucks-relatives',
                'brookr.delete.trucks-relatives',
            ],
            childrens: [
                {
                    label: 'List',
                    path: '/dashboard/trucks',
                    hasPermissions: [
                        'brookr.see.trucks',
                    ],
                }, {
                    label: 'Create',
                    path: '/dashboard/trucks/create',
                    hasPermissions: [
                        'brookr.create.trucks'
                    ]
                }, {
                    label: 'Maintenance',
                    path: '/dashboard/trucks/maintenances',
                    hasOnePermission: [
                        'brookr.edit.trucks-relatives',
                    ],
                }
            ]
        }, {
            label: 'Drivers',
            toggled: false,
            icon: 'people_alt',
            hasOnePermission: [
                'brookr.create.drivers',
                'brookr.see.drivers',
                'brookr.delete.drivers',
                'brookr.edit.drivers',
            ],
            childrens: [
                {
                    label: 'List',
                    path: '/dashboard/drivers',
                    hasPermissions: [
                        'brookr.see.drivers',
                    ],
                }, {
                    label: 'Create',
                    path: '/dashboard/drivers/create',
                    hasOnePermission: [
                        'brookr.create.drivers',
                    ],
                },
            ]
        }, {
            label: 'Customers',
            toggled: false,
            icon: 'people',
            hasOnePermission: [
                'brookr.create.customers',
                'brookr.see.customers',
                'brookr.delete.customers',
                'brookr.edit.customers',
            ],
            childrens: [
                {
                    label: 'List',
                    path: '/dashboard/customers',
                    hasPermissions: [
                        'brookr.see.customers',
                    ],
                }, {
                    label: 'Create',
                    path: '/dashboard/customers/create',
                    hasPermissions: [
                        'brookr.create.customers',
                    ],
                }
            ]
        }, {
            label: 'Companies',
            toggled: false,
            icon: 'business',
            hasOnePermission: [
                'brookr.create.companies',
                'brookr.see.companies',
                'brookr.delete.companies',
                'brookr.edit.companies',
            ],
            childrens: [
                {
                    label: 'List',
                    path: '/dashboard/companies',
                    hasPermissions: [
                        'brookr.see.companies',
                    ],
                }, {
                    label: 'Create',
                    path: '/dashboard/companies/create',
                    hasPermissions: [
                        'brookr.create.companies',
                    ]
                }
            ]
        }, {
            label: 'Reports',
            toggled: false,
            icon: 'trending_up',
            hasOnePermission: [
                'brookr.see.reports'
            ],
            childrens: [
                {
                    label: 'Company Report',
                    hasPermissions: ['brookr.see.reports'],
                    path: '/dashboard/reports/companies'
                },
            ]
        }, {
            label: 'Settings',
            path: '/dashboard/settings',
            toggled: false,
            icon: 'settings',
            hasPermissions: ['brookr.edit.settings']
        }
    ]
};
var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(AppInitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action__WEBPACK_IMPORTED_MODULE_1__["AppActions"].toggleSidebarSubMenus, function (state, _a) {
    var status = _a.status;
    var cloneState = Object.assign(state, {});
    cloneState.dashboardMenus.forEach(function (_menu) {
        _menu['toggled'] = status;
    });
    return state;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action__WEBPACK_IMPORTED_MODULE_1__["AppActions"].toggleSidebarCompression, function (state) { return (__assign(__assign({}, state), { sidebarCompressed: !state.sidebarCompressed })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action__WEBPACK_IMPORTED_MODULE_1__["AppActions"].compressSidebar, function (state) { return (__assign(__assign({}, state), { sidebarCompressed: true })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action__WEBPACK_IMPORTED_MODULE_1__["AppActions"].uncompressSidebar, function (state) { return (__assign(__assign({}, state), { sidebarCompressed: false })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action__WEBPACK_IMPORTED_MODULE_1__["AppActions"].login, function (state) { return (__assign(__assign({}, state), { authenticated: true })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action__WEBPACK_IMPORTED_MODULE_1__["AppActions"].logout, function (state) { return (__assign(__assign({}, state), { authenticated: false })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action__WEBPACK_IMPORTED_MODULE_1__["AppActions"].toggleSidebar, function (state) {
    var compressionStatus;
    if (state.sidebarToggled) {
        compressionStatus = true;
    }
    else {
        compressionStatus = false;
    }
    return (__assign(__assign({}, state), { sidebarToggled: !state.sidebarToggled, sidebarCompressed: compressionStatus }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action__WEBPACK_IMPORTED_MODULE_1__["AppActions"].startAsyncLoading, function (state) { return (__assign(__assign({}, state), { asyncLoading: true })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action__WEBPACK_IMPORTED_MODULE_1__["AppActions"].stopAsyncLoading, function (state) { return (__assign(__assign({}, state), { asyncLoading: false })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action__WEBPACK_IMPORTED_MODULE_1__["AppActions"].fetchNotifications, function (state) {
    return (__assign(__assign({}, state), { fetchNotifications: true }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action__WEBPACK_IMPORTED_MODULE_1__["AppActions"].storeNotifications, function (state, args) {
    return (__assign(__assign({}, state), { notifications: __spreadArrays(state.notifications, args.notifications) }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action__WEBPACK_IMPORTED_MODULE_1__["AppActions"].deleteNotification, function (state, arg) {
    var notifications = state.notifications.filter(function (n) { return n.id !== arg.id; });
    return (__assign(__assign({}, state), { notifications: notifications }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action__WEBPACK_IMPORTED_MODULE_1__["AppActions"].toggleNotification, function (state) { return (__assign(__assign({}, state), { notificationsToggled: !state.notificationsToggled })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action__WEBPACK_IMPORTED_MODULE_1__["AppActions"].toggleMenu, function (state, _a) {
    var menu = _a.menu, index = _a.index;
    var cloneState = Object.assign(state, {});
    if (cloneState.dashboardMenus[index].toggled === false) {
        cloneState.dashboardMenus.forEach(function (_menu) {
            _menu['toggled'] = false;
        });
        cloneState.dashboardMenus[index].toggled = !cloneState.dashboardMenus[index].toggled;
    }
    else {
        cloneState.dashboardMenus[index].toggled = false;
    }
    return state;
}));
function AppReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://laravel-7001.std/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/packages/cloud-breeze/src/public/tendoo-setup/projects/brookr-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map