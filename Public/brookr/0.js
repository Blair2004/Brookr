(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{CD38:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c("1C3z"),i=c("ZSGP"),o=function(){function e(){}return e.from=function(e){if(e){"string"!=typeof e&&(e=(e=e.filter((function(e){return"string"==typeof e}))).join("|"));var t,c=[],n=e.split("|"),o=/(min)\:([0-9])+/g,r=/(max)\:([0-9])+/g,l=/(same):(\w+)/g;return n.forEach((function(e){var n;"required"==e?c.push(i.s.required):"email"==e?c.push(i.s.email):(t=o.exec(e))?c.push(i.s.minLength(t[2])):(t=r.exec(e))?c.push(i.s.maxLength(t[2])):(t=l.exec(e))?c.push((n=t[2],function(e){return e.value!==e.parent.get(n).value?{matches:{formControl:e.parent.get(n),formControlName:n}}:null})):"number"==e&&c.push((function(e){return/^\d+$/.exec(e.value)?null:{number:!0}}))})),c}return null},e.extractControls=function(e,t){var c=this;void 0===t&&(t=!1);var n={};return e.forEach((function(e){if(void 0===e.control&&0==t)throw'Unable to use the validation control for the field : "'+e.name+"\". Please make sure to define the '.control' property for this field.";e.control&&(e.control.setValidators(c.from(e.validation)),n[e.name]=e.control)})),n},e.buildFormControls=function(e){return e.forEach((function(e){null==e.control?e.control=new i.d(e.value?e.value:null):e.control.setValue(e.value)})),this.extractControls(e)},e.buildFormControl=function(e){return null==e.control?e.control=new i.d(e.value||null):e.control.setValue(e.value||null),e.reset=new n.p,this.extractControls([e])[e.name]},e.touchAllFields=function(e){Object.keys(e.controls).forEach((function(t){e.get(t).markAsTouched()}))},e.buildFormGroup=function(t){return t.forEach((function(t){t.control=e.buildFormControl(t)})),{fields:t,formGroup:new i.g(e.extractControls(t))}},e.deactivateFields=function(e){e.forEach((function(e){return e.control.disable()}))},e.enableFields=function(e){e.forEach((function(e){return e.control.enable()}))},e.throwFieldsError=function(e,t,c){var n=function(n){e.get(n).setErrors({error:!0}),t.forEach((function(e){e.name===n&&(e.errors=c[e.name])}))};for(var i in c)n(i)},e.noNullValue=function(e){var t={};for(var c in e.value)null!==e.value[c]&&(t[c]=e.value[c]);return t},e.buildForm=function(t){var c={};return t.sections.forEach((function(t){var n=e.buildFormGroup(t.fields).formGroup;t.formGroup=n,c[t.namespace]=t.formGroup})),t.formGroup=new i.g(c),t},e.touchFormFields=function(t){t.sections.forEach((function(t){return e.touchAllFields(t.formGroup)}))},e.deactivateFormFiiels=function(t){t.sections.forEach((function(t){return e.deactivateFields(t.fields)}))},e.enableFormFields=function(t){t.sections.forEach((function(t){return e.enableFields(t.fields)}))},e}()},eTQ6:function(e,t,c){"use strict";c.d(t,"a",(function(){return b}));var n=c("1C3z"),i=c("CD38"),o=c("8AiQ"),r=c("AFHi");function l(e,t){1&e&&(n.ec(0,"span",10),n.Mc(1,"5"),n.dc())}var a=function(e,t){return{"bg-gray-100":e,"bg-gray-300":t}};function s(e,t){if(1&e){var c=n.fc();n.ec(0,"div",8),n.mc("click",(function(){n.Fc(c);var e=t.$implicit;return n.qc(2).selectThis(e)})),n.Mc(1),n.Lc(2,l,2,0,"span",9),n.dc()}if(2&e){var i=t.$implicit,o=n.qc(2);n.wc("ngClass",n.zc(3,a,i.active,!i.active)),n.Kb(1),n.Oc(" ",i.title," "),n.Kb(1),n.wc("ngIf",null!==o.form.formGroup.errors)}}function f(e,t){if(1&e&&(n.ec(0,"div",16),n.Zb(1,"cb-field",17),n.dc()),2&e){var c=t.$implicit,i=n.qc(2).$implicit;n.Kb(1),n.wc("field",c)("group",i.formGroup)}}function d(e,t){if(1&e&&(n.ec(0,"div",12),n.ec(1,"div",13),n.ec(2,"div",14),n.Lc(3,f,2,2,"div",15),n.dc(),n.dc(),n.dc()),2&e){var c=n.qc().$implicit;n.Kb(3),n.wc("ngForOf",c.fields)}}function u(e,t){if(1&e&&(n.cc(0),n.Lc(1,d,4,1,"div",11),n.bc()),2&e){var c=t.$implicit;n.Kb(1),n.wc("ngIf",c.active)}}function g(e,t){if(1&e){var c=n.fc();n.ec(0,"div",1),n.ec(1,"div",2),n.Lc(2,s,3,6,"div",3),n.dc(),n.ec(3,"div",4),n.Lc(4,u,2,1,"ng-container",5),n.ec(5,"div",6),n.ec(6,"div"),n.ec(7,"button",7),n.mc("click",(function(){return n.Fc(c),n.qc().submitForm()})),n.Mc(8,"Save"),n.dc(),n.dc(),n.dc(),n.dc(),n.dc()}if(2&e){var i=n.qc();n.Kb(2),n.wc("ngForOf",i.renderable),n.Kb(2),n.wc("ngForOf",i.form.sections)}}var b=function(){function e(){this.submit=new n.p}return e.prototype.ngOnInit=function(){console.log(this.form),this.renderable.forEach((function(e,t){e.active=0===t})),void 0===this.form.formGroup&&(this.form=i.a.buildForm(this.form))},e.prototype.selectThis=function(e){this.form.sections.forEach((function(e){return e.active=!1})),e.active=!0},e.prototype.submitForm=function(){this.submit.emit(this.form)},Object.defineProperty(e.prototype,"renderable",{get:function(){return this.form.sections.filter((function(e){return void 0===e.render||!1!==e.render}))},enumerable:!0,configurable:!0}),e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Sb({type:e,selectors:[["app-tabs"]],inputs:{form:"form"},outputs:{submit:"submit"},decls:1,vars:1,consts:[["class","tab tab-container",4,"ngIf"],[1,"tab","tab-container"],[1,"tabs-header","flex",2,"margin-bottom","-2px"],["class","tab px-4 py-2 border-2 border-b-0 rounded-t-lg cursor-pointer flex items-center justify center",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"bg-gray-100","border-2"],[4,"ngFor","ngForOf"],[1,"footer","border-t","p-2","flex"],[1,"rounded","bg-green-200","text-green-600","text-center","px-4","py-2","shadow","border","border-green-600","active:shadow-none",3,"click"],[1,"tab","px-4","py-2","border-2","border-b-0","rounded-t-lg","cursor-pointer","flex","items-center","justify","center",3,"ngClass","click"],["class","inline-block ml-2 rounded-full flex justify-center items-center h-6 w-6 bg-red-700 text-white",4,"ngIf"],[1,"inline-block","ml-2","rounded-full","flex","justify-center","items-center","h-6","w-6","bg-red-700","text-white"],["class","tabs-container",4,"ngIf"],[1,"tabs-container"],[1,"inner-content","p-2"],[1,"-mx-2","flex","flex-wrap"],["class","px-2 w-full md:w-1/2",4,"ngFor","ngForOf"],[1,"px-2","w-full","md:w-1/2"],[3,"field","group"]],template:function(e,t){1&e&&n.Lc(0,g,9,2,"div",0),2&e&&n.wc("ngIf",t.form)},directives:[o.k,o.j,o.i,r.c],styles:[""]}),e}()},ryqd:function(e,t,c){"use strict";var n=c("IugH"),i=c("HnWI"),o=c("diMa"),r=c("8tfy");function l(e){var t=e.subscriber,c=e.counter,n=e.period;t.next(c),this.schedule({subscriber:t,counter:c+1,period:n},n)}var a=c("WvHp"),s=c("1C3z"),f=c("z35L"),d=function(){function e(e){this.tendoo=e}return e.prototype.deleteNotification=function(e){return this.tendoo.delete(this.tendoo.baseUrl+"brookr/notifications/"+e)},e.prototype.getNotifications=function(e){return this.tendoo.post(this.tendoo.baseUrl+"brookr/notifications#disable-spinner",{excluded:e})},e.\u0275fac=function(t){return new(t||e)(s.ic(f.b))},e.\u0275prov=s.Ub({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),u=c("4S5C"),g=c("8Fqk"),b=c("Jg5f"),p=function(){return function(e,t){this.value=e,this.interval=t}}(),v=c("2pW/"),h=c("8AiQ"),m=c("r4gC"),w=c("pxjo"),x=c("5/c3");function y(e,t){1&e&&s.Zb(0,"mat-progress-bar",24)}function k(e,t){1&e&&(s.ec(0,"mat-icon"),s.Mc(1,"keyboard_arrow_up"),s.dc())}function F(e,t){1&e&&(s.ec(0,"mat-icon"),s.Mc(1,"keyboard_arrow_down"),s.dc())}function I(e,t){if(1&e&&(s.ec(0,"span",32),s.Lc(1,k,2,0,"mat-icon",26),s.Lc(2,F,2,0,"mat-icon",26),s.dc()),2&e){var c=s.qc(2).$implicit;s.Kb(1),s.wc("ngIf",c.toggled),s.Kb(1),s.wc("ngIf",!c.toggled)}}function K(e,t){if(1&e){var c=s.fc();s.cc(0),s.ec(1,"div",27),s.mc("click",(function(){s.Fc(c);var e=s.qc(),t=e.$implicit,n=e.index;return s.qc().toggleMenu(t,n)})),s.ec(2,"div",28),s.ec(3,"mat-icon"),s.Mc(4),s.dc(),s.dc(),s.ec(5,"div",29),s.ec(6,"span",30),s.Mc(7),s.dc(),s.Lc(8,I,3,2,"span",31),s.dc(),s.dc(),s.bc()}if(2&e){var n=s.qc().$implicit;s.Kb(4),s.Nc(n.icon),s.Kb(3),s.Nc(n.label),s.Kb(1),s.wc("ngIf",n.childrens&&n.childrens.length>0)}}function L(e,t){1&e&&(s.ec(0,"span",32),s.ec(1,"mat-icon"),s.Mc(2,"keyboard_arrow_down"),s.dc(),s.dc())}function j(e,t){if(1&e){var c=s.fc();s.cc(0),s.ec(1,"a",33),s.mc("click",(function(){return s.Fc(c),s.qc(2).toggleSidebar()})),s.ec(2,"div",28),s.ec(3,"mat-icon"),s.Mc(4),s.dc(),s.dc(),s.ec(5,"div",29),s.ec(6,"span",30),s.Mc(7),s.dc(),s.Lc(8,L,3,0,"span",31),s.dc(),s.dc(),s.bc()}if(2&e){var n=s.qc().$implicit;s.Kb(1),s.wc("routerLink",n.path),s.Kb(3),s.Nc(n.icon),s.Kb(3),s.Nc(n.label),s.Kb(1),s.wc("ngIf",n.childrens&&n.childrens.length>0)}}function $(e,t){if(1&e){var c=s.fc();s.ec(0,"a",35),s.mc("click",(function(){return s.Fc(c),s.qc(3).toggleSidebar()})),s.Zb(1,"div",28),s.ec(2,"div",29),s.ec(3,"span",30),s.Mc(4),s.dc(),s.dc(),s.dc()}if(2&e){var n=t.$implicit;s.wc("routerLink",n.path),s.Kb(4),s.Nc(n.label)}}function M(e,t){if(1&e&&(s.cc(0),s.Lc(1,$,5,2,"a",34),s.bc()),2&e){var c=s.qc().$implicit;s.Kb(1),s.wc("ngForOf",c.childrens)}}c.d(t,"a",(function(){return _}));var N=function(e){return{"bg-gray-100 rounded shadow":e}};function C(e,t){if(1&e&&(s.ec(0,"div",25),s.Lc(1,K,9,3,"ng-container",26),s.Lc(2,j,9,4,"ng-container",26),s.Lc(3,M,2,1,"ng-container",26),s.dc()),2&e){var c=t.$implicit;s.wc("ngClass",s.yc(4,N,c.toggled)),s.Kb(1),s.wc("ngIf",void 0!==c.childrens&&c.childrens.length>0),s.Kb(1),s.wc("ngIf",void 0===c.childrens||0===c.childrens.length),s.Kb(1),s.wc("ngIf",c.toggled)}}function O(e,t){if(1&e){var c=s.fc();s.ec(0,"div",36),s.mc("click",(function(){return s.Fc(c),s.qc().toggleSidebar()})),s.dc()}}function q(e,t){if(1&e){var c=s.fc();s.ec(0,"div",37),s.mc("click",(function(){return s.Fc(c),s.qc().toggleNotifications()})),s.dc()}}function E(e,t){if(1&e&&(s.ec(0,"span",38),s.Mc(1),s.rc(2,"async"),s.dc()),2&e){var c=s.qc();s.Kb(1),s.Nc(s.sc(2,1,c.state$).notifications.length)}}function z(e,t){if(1&e){var c=s.fc();s.ec(0,"div",47),s.ec(1,"div",48),s.ec(2,"span",49),s.Mc(3),s.dc(),s.ec(4,"p",50),s.Mc(5),s.dc(),s.dc(),s.ec(6,"div",51),s.ec(7,"button",52),s.mc("click",(function(){s.Fc(c);var e=t.$implicit;return s.qc(2).closeNotification(e)})),s.ec(8,"mat-icon"),s.Mc(9,"close"),s.dc(),s.dc(),s.dc(),s.dc()}if(2&e){var n=t.$implicit;s.Kb(3),s.Nc(n.title),s.Kb(2),s.Nc(n.description)}}function S(e,t){if(1&e){var c=s.fc();s.ec(0,"div",39),s.ec(1,"div",40),s.ec(2,"div",41),s.ec(3,"span",42),s.Mc(4,"Notifications"),s.dc(),s.ec(5,"div"),s.ec(6,"div",43),s.mc("click",(function(){return s.Fc(c),s.qc().toggleNotifications()})),s.ec(7,"mat-icon"),s.Mc(8,"close"),s.dc(),s.dc(),s.dc(),s.dc(),s.dc(),s.ec(9,"div",44),s.ec(10,"div",45),s.Lc(11,z,10,2,"div",46),s.rc(12,"async"),s.dc(),s.dc(),s.dc()}if(2&e){var n=s.qc();s.Kb(11),s.wc("ngForOf",s.sc(12,1,n.state$).notifications)}}var G=function(e,t){return{"absolute shadow z-50":e,hidden:t}},T=["*"],_=function(){function e(e,t,c){this.store=e,this.notificationService=t,this.snackbar=c}return e.prototype.ngOnInit=function(){var e=this;this.state$=this.store.pipe(Object(n.g)("state")),this.state$.subscribe((function(t){e.notificationIds=t.notifications.map((function(e){return e.id})),console.log(e.notificationIds)}));var t,c,a=(void 0===(t=5e3)&&(t=0),void 0===c&&(c=o.a),(!Object(r.a)(t)||t<0)&&(t=0),c&&"function"==typeof c.schedule||(c=o.a),new i.a((function(e){return e.add(c.schedule(l,t,{subscriber:e,counter:0,period:t})),e})));this.loopInterval=a.pipe(function(e){return void 0===e&&(e=o.a),function(t){return Object(g.a)((function(){return t.pipe(Object(u.a)((function(t,c){var n=t.current;return{value:c,current:e.now(),last:n}}),{current:e.now(),value:void 0,last:void 0}),Object(b.a)((function(e){return new p(e.value,e.current-e.last)})))}))}}()).subscribe((function(t){e.fetchNotifications()}))},e.prototype.ngOnDestroy=function(){console.log("im called"),this.loopInterval.unsubscribe()},e.prototype.fetchNotifications=function(){var e=this;this.notificationService.getNotifications(this.notificationIds).subscribe((function(t){e.store.dispatch(a.a.storeNotifications({notifications:t}))}))},e.prototype.toggleMenu=function(e,t){this.store.dispatch(a.a.toggleMenu({menu:e,index:t}))},e.prototype.toggleSidebar=function(){this.store.dispatch(a.a.toggleSidebar())},e.prototype.toggleNotifications=function(){this.store.dispatch(a.a.toggleNotification())},e.prototype.closeNotification=function(e){var t=this;this.notificationService.deleteNotification(e.id).subscribe((function(c){t.snackbar.open(c.message,"OK",{duration:3e3}),t.notificationIds.splice(t.notificationIds.indexOf(e.id),1),t.store.dispatch(a.a.deleteNotification({id:e.id})),t.fetchNotifications()}))},e.\u0275fac=function(t){return new(t||e)(s.Yb(n.a),s.Yb(d),s.Yb(v.a))},e.\u0275cmp=s.Sb({type:e,selectors:[["app-layout"]],ngContentSelectors:T,decls:41,vars:26,consts:[[1,"w-full","h-full","flex","flex-col"],[1,"absolute","w-full","left-0","top-0","z-50"],["class","example-margin absolute","mode","indeterminate",4,"ngIf"],[1,"flex","h-full","w-full"],["id","sidebar",1,"w-64","lg:static","lg:shadow-none","lg:block","lg:z-0","flex-shrink-0","h-full","bg-gray-200","p-2",3,"ngClass"],[1,"logo","flex","pb-4","justify-center"],[1,"brookr-font","text-4xl",2,"margin","0"],[1,"side-menu","flex","flex-col","text-gray-600"],["class","flex flex-col",3,"ngClass",4,"ngFor","ngForOf"],["style","background: rgba(51, 51, 51, 0.3)","class","overlay absolute top-0 lg:hidden w-full h-full z-40 bg-gray-100",3,"click",4,"ngIf"],["style","background: rgba(51, 51, 51, 0.3)","class","overlay absolute top-0 w-full h-full z-40 bg-gray-100",3,"click",4,"ngIf"],["id","container",1,"flex-auto","bg-gray-200","flex","flex-col"],["id","tool-bar",1,"h-16","flex-shrink-0","w-full","flex","items-center","px-2","shadow","lg:shadow-none"],[1,"left-panel","flex","flex-auto"],[1,"lg:hidden","hover:shadow","hover:bg-gray-100","hover:border-transparent","border","border-gray-400","cursor-pointer","user-profile","rounded-lg","flex","justify-between","items-center","p-2",3,"click"],[1,"right-panel","flex","-mx-1"],[1,"px-1"],[1,"hover:shadow","hover:bg-gray-100","hover:border-transparent","border","border-gray-400","cursor-pointer","user-profile","rounded-lg","flex","justify-between","items-center","p-2",3,"click"],["class","flex justify-center items-center absolute shadow bg-red-700 text-white w-6 h-6 rounded-full","style","margin: -20px -20px;",4,"ngIf"],[1,"hover:shadow","hover:bg-gray-100","hover:border-transparent","border","border-gray-400","cursor-pointer","user-profile","rounded-lg","flex","justify-between","items-center","p-2"],[1,"text-lg"],[1,"h-6","w-6","ml-2","bg-gray-700","rounded"],[1,"content","shadow-lg","lg:rounded-tl-lg","bg-white","p-4","lg:pt-6","lg:pl-6","flex-auto","overflow-y-auto"],["id","notifications","class","absolute z-50 right-0 w-1/2 lg:w-1/4 flex-shrink-0 h-full bg-gray-200 ng-star-inserted flex flex-col",4,"ngIf"],["mode","indeterminate",1,"example-margin","absolute"],[1,"flex","flex-col",3,"ngClass"],[4,"ngIf"],[1,"flex","hover:bg-gray-300","px-4","py-2","items-center","cursor-pointer","menu","rounded","overflow-hidden",3,"click"],[1,"menu-icon","w-5","h-5","pr-2","flex","items-center","justify-center"],[1,"menu-text","pl-2","flex","items-center","justify-between","flex-auto"],[1,"text","font-semibold","font-sans"],["class","caret flex items-center justify-center",4,"ngIf"],[1,"caret","flex","items-center","justify-center"],[1,"flex","hover:bg-gray-300","px-4","py-2","items-center","cursor-pointer","menu","rounded","overflow-hidden",3,"routerLink","click"],["class","cursor-pointer menu rounded overflow-hidden flex hover:bg-gray-300 px-4 py-2 items-center",3,"routerLink","click",4,"ngFor","ngForOf"],[1,"cursor-pointer","menu","rounded","overflow-hidden","flex","hover:bg-gray-300","px-4","py-2","items-center",3,"routerLink","click"],[1,"overlay","absolute","top-0","lg:hidden","w-full","h-full","z-40","bg-gray-100",2,"background","rgba(51, 51, 51, 0.3)",3,"click"],[1,"overlay","absolute","top-0","w-full","h-full","z-40","bg-gray-100",2,"background","rgba(51, 51, 51, 0.3)",3,"click"],[1,"flex","justify-center","items-center","absolute","shadow","bg-red-700","text-white","w-6","h-6","rounded-full",2,"margin","-20px -20px"],["id","notifications",1,"absolute","z-50","right-0","w-1/2","lg:w-1/4","flex-shrink-0","h-full","bg-gray-200","ng-star-inserted","flex","flex-col"],[1,"border-b","border-gray-400","flex","flex-col","flex","h-16"],[1,"flex","flex-shrink-0","justify-between","items-center","flex-auto","px-2"],[1,"text-xl","font-semibold",2,"margin","0"],[1,"border","border-gray-400","cursor-pointer","user-profile","rounded-lg","flex","justify-between","items-center","p-2",3,"click"],[1,"flex","flex-col","flex-auto","flex-wrap","overflow-y-auto"],[1,"h-full","p-2","flex-shrink-0"],["class","bg-white flex rounded shadow w-full p-2 mb-2",4,"ngFor","ngForOf"],[1,"bg-white","flex","rounded","shadow","w-full","p-2","mb-2"],[1,"notification-body","flex-auto","pr-2"],[1,"text-lg","text-gray-700","block","mb-2"],[1,"text-gray-600"],[1,"controls","justify-center"],[1,"rounded-full","bg-red-600","text-white","w-8","h-8","flex","justify-center","items-center","shadow",3,"click"]],template:function(e,t){1&e&&(s.vc(),s.ec(0,"div",0),s.ec(1,"div",1),s.Lc(2,y,1,0,"mat-progress-bar",2),s.rc(3,"async"),s.dc(),s.ec(4,"div",3),s.ec(5,"div",4),s.rc(6,"async"),s.rc(7,"async"),s.ec(8,"div",5),s.ec(9,"h2",6),s.Mc(10,"Brookr"),s.dc(),s.dc(),s.ec(11,"div",7),s.Lc(12,C,4,6,"div",8),s.rc(13,"async"),s.dc(),s.dc(),s.Lc(14,O,1,0,"div",9),s.rc(15,"async"),s.Lc(16,q,1,0,"div",10),s.rc(17,"async"),s.ec(18,"div",11),s.ec(19,"div",12),s.ec(20,"div",13),s.ec(21,"div"),s.ec(22,"div",14),s.mc("click",(function(){return t.toggleSidebar()})),s.ec(23,"mat-icon"),s.Mc(24,"menu"),s.dc(),s.dc(),s.dc(),s.dc(),s.ec(25,"div",15),s.ec(26,"div",16),s.ec(27,"div",17),s.mc("click",(function(){return t.toggleNotifications()})),s.ec(28,"mat-icon"),s.Mc(29,"notifications"),s.dc(),s.Lc(30,E,3,3,"span",18),s.rc(31,"async"),s.dc(),s.dc(),s.ec(32,"div",16),s.ec(33,"div",19),s.ec(34,"span",20),s.Mc(35,"Welcome"),s.dc(),s.Zb(36,"div",21),s.dc(),s.dc(),s.dc(),s.dc(),s.ec(37,"div",22),s.uc(38),s.dc(),s.dc(),s.Lc(39,S,13,3,"div",23),s.rc(40,"async"),s.dc(),s.dc()),2&e&&(s.Kb(2),s.wc("ngIf",s.sc(3,7,t.state$).asyncLoading),s.Kb(3),s.wc("ngClass",s.zc(23,G,s.sc(6,9,t.state$).sidebarToggled,!s.sc(7,11,t.state$).sidebarToggled)),s.Kb(7),s.wc("ngForOf",s.sc(13,13,t.state$).dashboardMenus),s.Kb(2),s.wc("ngIf",s.sc(15,15,t.state$).sidebarToggled),s.Kb(2),s.wc("ngIf",s.sc(17,17,t.state$).notificationsToggled),s.Kb(14),s.wc("ngIf",s.sc(31,19,t.state$).notifications.length>0),s.Kb(9),s.wc("ngIf",s.sc(40,21,t.state$).notificationsToggled))},directives:[h.k,h.i,h.j,m.a,w.a,x.d],pipes:[h.b],styles:["[_nghost-%COMP%]{width:100%}"]}),e}()}}]);