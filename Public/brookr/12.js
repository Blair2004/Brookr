(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7wo0":function(t,n,r){"use strict";r.r(n);var e=r("8AiQ"),o=r("5/c3"),c=r("CD38"),i=r("1C3z"),u=r("z35L"),f=r("2pW/"),s=r("ryqd"),a=r("eTQ6");function l(t,n){if(1&t){var r=i.ec();i.dc(0,"app-tabs",4),i.lc("submit",(function(t){return i.Gc(r),i.pc().handleSubmit(t)})),i.cc()}if(2&t){var e=i.pc();i.vc("form",e.form)}}var d=[{path:"",component:function(){function t(t,n){this.tendoo=t,this.snackbar=n}return t.prototype.ngOnInit=function(){var t=this;this.tendoo.forms.getPublicForm("brookr.settings").subscribe((function(n){t.form=c.a.buildForm(n)}))},t.prototype.handleSubmit=function(t){var n=this;this.tendoo.post(this.tendoo.baseUrl+"brookr/settings",this.form.formGroup.value).subscribe((function(t){n.snackbar.open(t.message,"OK",{duration:3e3})}))},t.\u0275fac=function(n){return new(n||t)(i.Xb(u.b),i.Xb(f.a))},t.\u0275cmp=i.Rb({type:t,selectors:[["app-settings"]],decls:7,vars:1,consts:[[1,"mb-4","text-gray-800"],[1,"block","text-2xl","mb-2"],[1,"text-sm"],[3,"form","submit",4,"ngIf"],[3,"form","submit"]],template:function(t,n){1&t&&(i.dc(0,"app-layout"),i.dc(1,"div",0),i.dc(2,"span",1),i.Nc(3,"Brookr Settings"),i.cc(),i.dc(4,"p",2),i.Nc(5,"configure the application."),i.cc(),i.cc(),i.Mc(6,l,1,1,"app-tabs",3),i.cc()),2&t&&(i.Kb(6),i.vc("ngIf",n.form))},directives:[s.a,e.l,a.a],styles:[""]}),t}()}],m=function(){function t(){}return t.\u0275mod=i.Vb({type:t}),t.\u0275inj=i.Ub({factory:function(n){return new(n||t)},imports:[[o.e.forChild(d)],o.e]}),t}(),p=r("428I");r.d(n,"SettingsModule",(function(){return b}));var b=function(){function t(){}return t.\u0275mod=i.Vb({type:t}),t.\u0275inj=i.Ub({factory:function(n){return new(n||t)},imports:[[e.c,m,p.a]]}),t}()},CD38:function(t,n,r){"use strict";r.d(n,"a",(function(){return c}));var e=r("1C3z"),o=r("ZSGP"),c=function(){function t(){}return t.from=function(t){if(t){"string"!=typeof t&&(t=(t=t.filter((function(t){return"string"==typeof t}))).join("|"));var n,r=[],e=t.split("|"),c=/(min)\:([0-9])+/g,i=/(max)\:([0-9])+/g,u=/(same):(\w+)/g;return e.forEach((function(t){var e;"required"==t?r.push(o.s.required):"email"==t?r.push(o.s.email):(n=c.exec(t))?r.push(o.s.minLength(n[2])):(n=i.exec(t))?r.push(o.s.maxLength(n[2])):(n=u.exec(t))?r.push((e=n[2],function(t){return t.value!==t.parent.get(e).value?{matches:{formControl:t.parent.get(e),formControlName:e}}:null})):"number"==t&&r.push((function(t){return/^\d+$/.exec(t.value)?null:{number:!0}}))})),r}return null},t.extractControls=function(t,n){var r=this;void 0===n&&(n=!1);var e={};return t.forEach((function(t){if(void 0===t.control&&0==n)throw'Unable to use the validation control for the field : "'+t.name+"\". Please make sure to define the '.control' property for this field.";t.control&&(t.control.setValidators(r.from(t.validation)),e[t.name]=t.control)})),e},t.buildFormControls=function(t){return t.forEach((function(t){null==t.control?t.control=new o.d(t.value?t.value:null):t.control.setValue(t.value)})),this.extractControls(t)},t.buildFormControl=function(t){return null==t.control?t.control=new o.d(t.value||null):t.control.setValue(t.value||null),t.reset=new e.p,this.extractControls([t])[t.name]},t.touchAllFields=function(t){Object.keys(t.controls).forEach((function(n){t.get(n).markAsTouched()}))},t.buildFormGroup=function(n){return n.forEach((function(n){n.control=t.buildFormControl(n)})),{fields:n,formGroup:new o.g(t.extractControls(n))}},t.deactivateFields=function(t){t.forEach((function(t){return t.control.disable()}))},t.enableFields=function(t){t.forEach((function(t){return t.control.enable()}))},t.throwFieldsError=function(t,n,r){var e=function(e){t.get(e).setErrors({error:!0}),n.forEach((function(t){t.name===e&&(t.errors=r[t.name])}))};for(var o in r)e(o)},t.noNullValue=function(t){var n={};for(var r in t.value)null!==t.value[r]&&(n[r]=t.value[r]);return n},t.buildForm=function(n){var r={};return n.sections.forEach((function(n){var e=t.buildFormGroup(n.fields).formGroup;n.formGroup=e,r[n.namespace]=n.formGroup})),n.formGroup=new o.g(r),n},t.touchFormFields=function(n){n.sections.forEach((function(n){return t.touchAllFields(n.formGroup)}))},t.deactivateFormFiiels=function(n){n.sections.forEach((function(n){return t.deactivateFields(n.fields)}))},t.enableFormFields=function(n){n.sections.forEach((function(n){return t.enableFields(n.fields)}))},t}()},eTQ6:function(t,n,r){"use strict";r.d(n,"a",(function(){return p}));var e=r("1C3z"),o=r("CD38"),c=r("8AiQ"),i=r("AFHi");function u(t,n){1&t&&(e.dc(0,"span",10),e.Nc(1,"5"),e.cc())}var f=function(t,n){return{"bg-gray-100":t,"bg-gray-300":n}};function s(t,n){if(1&t){var r=e.ec();e.dc(0,"div",8),e.lc("click",(function(){e.Gc(r);var t=n.$implicit;return e.pc(2).selectThis(t)})),e.Nc(1),e.Mc(2,u,2,0,"span",9),e.cc()}if(2&t){var o=n.$implicit,c=e.pc(2);e.vc("ngClass",e.yc(3,f,o.active,!o.active)),e.Kb(1),e.Pc(" ",o.title," "),e.Kb(1),e.vc("ngIf",null!==c.form.formGroup.errors)}}function a(t,n){if(1&t&&(e.dc(0,"div",16),e.Yb(1,"cb-field",17),e.cc()),2&t){var r=n.$implicit,o=e.pc(2).$implicit;e.Kb(1),e.vc("field",r)("group",o.formGroup)}}function l(t,n){if(1&t&&(e.dc(0,"div",12),e.dc(1,"div",13),e.dc(2,"div",14),e.Mc(3,a,2,2,"div",15),e.cc(),e.cc(),e.cc()),2&t){var r=e.pc().$implicit;e.Kb(3),e.vc("ngForOf",r.fields)}}function d(t,n){if(1&t&&(e.bc(0),e.Mc(1,l,4,1,"div",11),e.ac()),2&t){var r=n.$implicit;e.Kb(1),e.vc("ngIf",r.active)}}function m(t,n){if(1&t){var r=e.ec();e.dc(0,"div",1),e.dc(1,"div",2),e.Mc(2,s,3,6,"div",3),e.cc(),e.dc(3,"div",4),e.Mc(4,d,2,1,"ng-container",5),e.dc(5,"div",6),e.dc(6,"div"),e.dc(7,"button",7),e.lc("click",(function(){return e.Gc(r),e.pc().submitForm()})),e.Nc(8,"Save"),e.cc(),e.cc(),e.cc(),e.cc(),e.cc()}if(2&t){var o=e.pc();e.Kb(2),e.vc("ngForOf",o.renderable),e.Kb(2),e.vc("ngForOf",o.form.sections)}}var p=function(){function t(){this.submit=new e.p}return t.prototype.ngOnInit=function(){console.log(this.form),this.renderable.forEach((function(t,n){t.active=0===n})),void 0===this.form.formGroup&&(this.form=o.a.buildForm(this.form))},t.prototype.selectThis=function(t){this.form.sections.forEach((function(t){return t.active=!1})),t.active=!0},t.prototype.submitForm=function(){this.submit.emit(this.form)},Object.defineProperty(t.prototype,"renderable",{get:function(){return this.form.sections.filter((function(t){return void 0===t.render||!1!==t.render}))},enumerable:!0,configurable:!0}),t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Rb({type:t,selectors:[["app-tabs"]],inputs:{form:"form"},outputs:{submit:"submit"},decls:1,vars:1,consts:[["class","tab tab-container",4,"ngIf"],[1,"tab","tab-container"],[1,"tabs-header","flex",2,"margin-bottom","-2px"],["class","tab px-4 py-2 border-2 border-b-0 rounded-t-lg cursor-pointer flex items-center justify center",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"bg-gray-100","border-2"],[4,"ngFor","ngForOf"],[1,"footer","border-t","p-2","flex"],[1,"rounded","bg-green-200","text-green-600","text-center","px-4","py-2","shadow","border","border-green-600","active:shadow-none",3,"click"],[1,"tab","px-4","py-2","border-2","border-b-0","rounded-t-lg","cursor-pointer","flex","items-center","justify","center",3,"ngClass","click"],["class","inline-block ml-2 rounded-full flex justify-center items-center h-6 w-6 bg-red-700 text-white",4,"ngIf"],[1,"inline-block","ml-2","rounded-full","flex","justify-center","items-center","h-6","w-6","bg-red-700","text-white"],["class","tabs-container",4,"ngIf"],[1,"tabs-container"],[1,"inner-content","p-2"],[1,"-mx-2","flex","flex-wrap"],["class","px-2 w-full md:w-1/2",4,"ngFor","ngForOf"],[1,"px-2","w-full","md:w-1/2"],[3,"field","group"]],template:function(t,n){1&t&&e.Mc(0,m,9,2,"div",0),2&t&&e.vc("ngIf",n.form)},directives:[c.l,c.k,c.j,i.d],styles:[""]}),t}()}}]);