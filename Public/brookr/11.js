(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{CD38:function(n,r,t){"use strict";t.d(r,"a",(function(){return c}));var o=t("1C3z"),e=t("ZSGP"),c=function(){function n(){}return n.from=function(n){if(n){"string"!=typeof n&&(n=(n=n.filter((function(n){return"string"==typeof n}))).join("|"));var r,t=[],o=n.split("|"),c=/(min)\:([0-9])+/g,i=/(max)\:([0-9])+/g,u=/(same):(\w+)/g;return o.forEach((function(n){var o;"required"==n?t.push(e.s.required):"email"==n?t.push(e.s.email):(r=c.exec(n))?t.push(e.s.minLength(r[2])):(r=i.exec(n))?t.push(e.s.maxLength(r[2])):(r=u.exec(n))?t.push((o=r[2],function(n){return n.value!==n.parent.get(o).value?{matches:{formControl:n.parent.get(o),formControlName:o}}:null})):"number"==n&&t.push((function(n){return/^\d+$/.exec(n.value)?null:{number:!0}}))})),t}return null},n.extractControls=function(n,r){var t=this;void 0===r&&(r=!1);var o={};return n.forEach((function(n){if(void 0===n.control&&0==r)throw'Unable to use the validation control for the field : "'+n.name+"\". Please make sure to define the '.control' property for this field.";n.control&&(n.control.setValidators(t.from(n.validation)),o[n.name]=n.control)})),o},n.buildFormControls=function(n){return n.forEach((function(n){null==n.control?n.control=new e.d(n.value?n.value:null):n.control.setValue(n.value)})),this.extractControls(n)},n.buildFormControl=function(n){return null==n.control?n.control=new e.d(n.value||null):n.control.setValue(n.value||null),n.reset=new o.p,this.extractControls([n])[n.name]},n.touchAllFields=function(n){Object.keys(n.controls).forEach((function(r){n.get(r).markAsTouched()}))},n.buildFormGroup=function(r){return r.forEach((function(r){r.control=n.buildFormControl(r)})),{fields:r,formGroup:new e.g(n.extractControls(r))}},n.deactivateFields=function(n){n.forEach((function(n){return n.control.disable()}))},n.enableFields=function(n){n.forEach((function(n){return n.control.enable()}))},n.throwFieldsError=function(n,r,t){var o=function(o){n.get(o).setErrors({error:!0}),r.forEach((function(n){n.name===o&&(n.errors=t[n.name])}))};for(var e in t)o(e)},n.noNullValue=function(n){var r={};for(var t in n.value)null!==n.value[t]&&(r[t]=n.value[t]);return r},n.buildForm=function(r){var t={};return r.sections.forEach((function(r){var o=n.buildFormGroup(r.fields).formGroup;r.formGroup=o,t[r.namespace]=r.formGroup})),r.formGroup=new e.g(t),r},n.touchFormFields=function(r){r.sections.forEach((function(r){return n.touchAllFields(r.formGroup)}))},n.deactivateFormFiiels=function(r){r.sections.forEach((function(r){return n.deactivateFields(r.fields)}))},n.enableFormFields=function(r){r.sections.forEach((function(r){return n.enableFields(r.fields)}))},n}()},cRhG:function(n,r,t){"use strict";t.r(r);var o=t("8AiQ"),e=t("5/c3"),c=t("CD38"),i=t("1C3z"),u=t("z35L"),f=t("2pW/"),s=t("ryqd"),a=t("eTQ6");function l(n,r){if(1&n){var t=i.ec();i.dc(0,"app-tabs",4),i.lc("submit",(function(n){return i.Gc(t),i.pc().submitProfile(n)})),i.cc()}if(2&n){var o=i.pc();i.vc("form",o.form)}}var d=[{path:"",component:function(){function n(n,r){this.tendoo=n,this.snackbar=r}return n.prototype.ngOnInit=function(){var n=this;this.tendoo.forms.getPublicForm("brookr.profile").subscribe((function(r){n.form=c.a.buildForm(r)}))},n.prototype.submitProfile=function(){var n=this;if(this.form.sections.forEach((function(n){return c.a.touchAllFields(n.formGroup)})),this.form.formGroup.invalid)return this.snackbar.open("Unable to proceed the form is not valid.","OK",{duration:3e3});this.tendoo.post(this.tendoo.baseUrl+"brookr/profile/settings",this.form.formGroup.value).subscribe((function(r){n.snackbar.open(r.message,"OK",{duration:3e3})}),(function(r){n.snackbar.open(r.error.message||r.message,"OK",{duration:5e3})}))},n.\u0275fac=function(r){return new(r||n)(i.Xb(u.b),i.Xb(f.a))},n.\u0275cmp=i.Rb({type:n,selectors:[["app-home"]],decls:7,vars:1,consts:[[1,"mb-4","text-gray-800"],[1,"block","text-2xl","mb-2"],[1,"text-sm"],[3,"form","submit",4,"ngIf"],[3,"form","submit"]],template:function(n,r){1&n&&(i.dc(0,"app-layout"),i.dc(1,"div",0),i.dc(2,"span",1),i.Nc(3,"My Profile"),i.cc(),i.dc(4,"p",2),i.Nc(5,"manage your personnal informations."),i.cc(),i.cc(),i.Mc(6,l,1,1,"app-tabs",3),i.cc()),2&n&&(i.Kb(6),i.vc("ngIf",r.form))},directives:[s.a,o.l,a.a],styles:[""]}),n}()}],m=function(){function n(){}return n.\u0275mod=i.Vb({type:n}),n.\u0275inj=i.Ub({factory:function(r){return new(r||n)},imports:[[e.e.forChild(d)],e.e]}),n}(),p=t("428I");t.d(r,"ProfileModule",(function(){return b}));var b=function(){function n(){}return n.\u0275mod=i.Vb({type:n}),n.\u0275inj=i.Ub({factory:function(r){return new(r||n)},imports:[[o.c,m,p.a]]}),n}()},eTQ6:function(n,r,t){"use strict";t.d(r,"a",(function(){return p}));var o=t("1C3z"),e=t("CD38"),c=t("8AiQ"),i=t("AFHi");function u(n,r){1&n&&(o.dc(0,"span",10),o.Nc(1,"5"),o.cc())}var f=function(n,r){return{"bg-gray-100":n,"bg-gray-300":r}};function s(n,r){if(1&n){var t=o.ec();o.dc(0,"div",8),o.lc("click",(function(){o.Gc(t);var n=r.$implicit;return o.pc(2).selectThis(n)})),o.Nc(1),o.Mc(2,u,2,0,"span",9),o.cc()}if(2&n){var e=r.$implicit,c=o.pc(2);o.vc("ngClass",o.yc(3,f,e.active,!e.active)),o.Kb(1),o.Pc(" ",e.title," "),o.Kb(1),o.vc("ngIf",null!==c.form.formGroup.errors)}}function a(n,r){if(1&n&&(o.dc(0,"div",16),o.Yb(1,"cb-field",17),o.cc()),2&n){var t=r.$implicit,e=o.pc(2).$implicit;o.Kb(1),o.vc("field",t)("group",e.formGroup)}}function l(n,r){if(1&n&&(o.dc(0,"div",12),o.dc(1,"div",13),o.dc(2,"div",14),o.Mc(3,a,2,2,"div",15),o.cc(),o.cc(),o.cc()),2&n){var t=o.pc().$implicit;o.Kb(3),o.vc("ngForOf",t.fields)}}function d(n,r){if(1&n&&(o.bc(0),o.Mc(1,l,4,1,"div",11),o.ac()),2&n){var t=r.$implicit;o.Kb(1),o.vc("ngIf",t.active)}}function m(n,r){if(1&n){var t=o.ec();o.dc(0,"div",1),o.dc(1,"div",2),o.Mc(2,s,3,6,"div",3),o.cc(),o.dc(3,"div",4),o.Mc(4,d,2,1,"ng-container",5),o.dc(5,"div",6),o.dc(6,"div"),o.dc(7,"button",7),o.lc("click",(function(){return o.Gc(t),o.pc().submitForm()})),o.Nc(8,"Save"),o.cc(),o.cc(),o.cc(),o.cc(),o.cc()}if(2&n){var e=o.pc();o.Kb(2),o.vc("ngForOf",e.renderable),o.Kb(2),o.vc("ngForOf",e.form.sections)}}var p=function(){function n(){this.submit=new o.p}return n.prototype.ngOnInit=function(){console.log(this.form),this.renderable.forEach((function(n,r){n.active=0===r})),void 0===this.form.formGroup&&(this.form=e.a.buildForm(this.form))},n.prototype.selectThis=function(n){this.form.sections.forEach((function(n){return n.active=!1})),n.active=!0},n.prototype.submitForm=function(){this.submit.emit(this.form)},Object.defineProperty(n.prototype,"renderable",{get:function(){return this.form.sections.filter((function(n){return void 0===n.render||!1!==n.render}))},enumerable:!0,configurable:!0}),n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=o.Rb({type:n,selectors:[["app-tabs"]],inputs:{form:"form"},outputs:{submit:"submit"},decls:1,vars:1,consts:[["class","tab tab-container",4,"ngIf"],[1,"tab","tab-container"],[1,"tabs-header","flex",2,"margin-bottom","-2px"],["class","tab px-4 py-2 border-2 border-b-0 rounded-t-lg cursor-pointer flex items-center justify center",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"bg-gray-100","border-2"],[4,"ngFor","ngForOf"],[1,"footer","border-t","p-2","flex"],[1,"rounded","bg-green-200","text-green-600","text-center","px-4","py-2","shadow","border","border-green-600","active:shadow-none",3,"click"],[1,"tab","px-4","py-2","border-2","border-b-0","rounded-t-lg","cursor-pointer","flex","items-center","justify","center",3,"ngClass","click"],["class","inline-block ml-2 rounded-full flex justify-center items-center h-6 w-6 bg-red-700 text-white",4,"ngIf"],[1,"inline-block","ml-2","rounded-full","flex","justify-center","items-center","h-6","w-6","bg-red-700","text-white"],["class","tabs-container",4,"ngIf"],[1,"tabs-container"],[1,"inner-content","p-2"],[1,"-mx-2","flex","flex-wrap"],["class","px-2 w-full md:w-1/2",4,"ngFor","ngForOf"],[1,"px-2","w-full","md:w-1/2"],[3,"field","group"]],template:function(n,r){1&n&&o.Mc(0,m,9,2,"div",0),2&n&&o.vc("ngIf",r.form)},directives:[c.l,c.k,c.j,i.d],styles:[""]}),n}()}}]);