(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/rZg":function(e,t,n){"use strict";n.r(t),t.default='<app-layout>\r\n    <div class="mb-4 text-gray-800">\r\n        <span class="block text-2xl mb-2">Trucks Maintenance</span> \r\n        <p class="text-sm">an history of all trucks maintenance</p>\r\n    </div>\r\n    <div class="flex w-full">\r\n        <cb-table \r\n            (action)="handleAction( $event )" \r\n            (sort)="handleSort( $event )" \r\n            (refresh)="handleRefresh( $event )" \r\n            (page)="handlePagineNavigation( $event )" \r\n            (search)="handleSearch( $event )"\r\n            (delete)="handleDelete( $event )"\r\n            [is-loading]="isLoading"\r\n            *ngIf="config" [crud]="config" class="w-full"></cb-table>\r\n        \x3c!-- <app-table (sort)="handleSort( $event )" (search)="handleSearch( $event )" [config]="config"></app-table> --\x3e\r\n    </div>  \r\n</app-layout>'},"8+H4":function(e,t,n){"use strict";n.r(t),t.default='<app-layout>\r\n    <div class="mb-2" *ngIf="mode === \'create\'" >\r\n        <p class="text-2xl mb-2 font-serif text-gray-800">Creating Trucks</p>\r\n        <p class="text-gray-700">Trucks are the vehicules assigned to the drivers for loads transport.</p>\r\n    </div>\r\n    <div class="mb-2" *ngIf="mode === \'edit\'">\r\n        <p class="text-2xl mb-2 font-serif text-gray-800">Editing Trucks</p>\r\n        <p class="text-gray-700">Trucks are the vehicules assigned to the drivers for loads transport.</p>\r\n    </div>\r\n    <app-tabs *ngIf="form" [form]="form" (submit)="handleSubmit( $event )"></app-tabs>\r\n</app-layout>'},"9DBa":function(e,t,n){"use strict";n.r(t),t.default=""},"JD/L":function(e,t,n){"use strict";n.r(t),t.default=""},QDYS:function(e,t,n){"use strict";n.r(t),t.default='<app-layout>\r\n    <div class="mb-4 text-gray-800">\r\n        <span class="block text-2xl mb-2">Trucks List</span> \r\n        <p class="text-sm">Manage all the trucks registered on the system</p>\r\n    </div>\r\n    <div class="flex w-full">\r\n        <cb-table \r\n            (action)="handleAction( $event )" \r\n            (sort)="handleSort( $event )" \r\n            (refresh)="handleRefresh( $event )" \r\n            (page)="handlePagineNavigation( $event )" \r\n            (search)="handleSearch( $event )"\r\n            (delete)="handleDelete( $event )"\r\n            [is-loading]="isLoading"\r\n            *ngIf="config" [crud]="config" class="w-full"></cb-table>\r\n        \x3c!-- <app-table (sort)="handleSort( $event )" (search)="handleSearch( $event )" [config]="config"></app-table> --\x3e\r\n    </div>  \r\n</app-layout>'},RUrL:function(e,t,n){"use strict";n.r(t),t.default=""},"ct/2":function(e,t,n){"use strict";n.r(t),t.default=""},oL7O:function(e,t,n){"use strict";n.r(t),t.default='<app-layout>\r\n    <div class="mb-2" *ngIf="mode === \'create\'" >\r\n        <p class="text-2xl mb-2 font-serif text-gray-800">Registering Maintenance</p>\r\n        <p class="text-gray-700">Register a maintenance report and attach it to a truck</p>\r\n    </div>\r\n    <div class="mb-2" *ngIf="mode === \'edit\'">\r\n        <p class="text-2xl mb-2 font-serif text-gray-800">Edit Maintenance</p>\r\n        <p class="text-gray-700">Edit an existing maintenance report attached to a truck.</p>\r\n    </div>\r\n    <app-tabs *ngIf="form" [form]="form" (submit)="handleSubmit( $event )"></app-tabs>\r\n</app-layout>'},uPd1:function(e,t,n){"use strict";n.r(t),n.d(t,"TrucksModule",(function(){return B}));var r=n("LoAr"),o=n("WT9V"),a=n("981U"),i=n("qptw"),s=n("8YcR"),c=n("z35L"),f=function(){return(f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(e){return e&&e.__esModule?e:{default:e}},d=function(){function e(e,t,n,r){this.tendoo=e,this.snackbar=t,this.dialog=n,this.router=r,this.entries=[],this.isLoading=!1,this.sort={},this.search={},this.perPage={per_page:10},this.page={},this.searchEnabled=!1}return e.prototype.handleSort=function(e){this.sort=e,this.ngOnInit()},e.prototype.handleSearch=function(e){this.search={search:e},this.ngOnInit()},e.prototype.ngOnInit=function(){var e=this;this.isLoading=!0,this.tendoo.crud.getConfig("brookr.trucks",f(f(f(f({},this.sort),this.search),this.page),this.perPage)).subscribe((function(t){e.isLoading=!1,e.config=t,e.config.title="Trucks List"}),(function(t){e.snackbar.open("An error has occured while loading the entries.","OK",{duration:5e3})}))},e.prototype.handleAction=function(e){var t=this;"DELETE"===e.menu.type?this.tendoo.crud.delete(e.menu.url.replace("{id}",e.row.id)).subscribe((function(n){t.snackbar.open(n.message,"OK",{duration:3e3}),t.ngOnInit(),t.dialog.getDialogById(e.menu.namespace).close()}),(function(n){t.snackbar.open(n.error.message||"An unexpected error occured","OK",{duration:5e3}),t.dialog.getDialogById(e.menu.namespace).close()})):"GOTO"===e.menu.type&&this.router.navigateByUrl(e.menu.url.replace("{id}",e.row.id))},e.prototype.handleRefresh=function(e){this.ngOnInit()},e.prototype.handlePagineNavigation=function(e){this.perPage={per_page:e.pageSize},this.page={page:e.pageIndex+1},this.ngOnInit()},e.prototype.handleDelete=function(e){},e.ctorParameters=function(){return[{type:c.b},{type:i.a},{type:s.b},{type:a.b}]},e=u([Object(r.n)({selector:"app-list",template:p(n("QDYS")).default,styles:[p(n("ct/2")).default]}),l("design:paramtypes",[c.b,i.a,s.b,a.b])],e)}(),h=n("CD38"),b=n("GiBk"),g=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},y=function(){function e(e,t){this.http=e,this.tendoo=t,this.baseUrl=this.tendoo.baseUrl}return e.prototype.save=function(e,t){void 0===t&&(t=void 0),console.log(t);var n=void 0!==t?"put":"post";return this.tendoo[n](this.baseUrl+"brookr/trucks"+(void 0===t?"":"/"+t),e)},e.prototype.delete=function(e){return this.tendoo.delete(this.baseUrl+"broork/trucks/"+e)},e.prototype.get=function(){return this.tendoo.get(this.baseUrl+"brookr/trucks")},e.ctorParameters=function(){return[{type:b.b},{type:c.b}]},e=g([Object(r.E)({providedIn:"root"}),m("design:paramtypes",[b.b,c.b])],e)}(),v=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},O=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=function(e){return e&&e.__esModule?e:{default:e}},R=function(){function e(e,t,n,r,o){this.tendoo=e,this.activeRoute=t,this.trucksService=n,this.snackbar=r,this.router=o,this.mode="create"}return e.prototype.ngOnInit=function(){var e=this;this.activeRoute.paramMap.subscribe((function(t){t.get("id")&&(e.mode="edit",e.identifier=t.get("id")),e.tendoo.forms.getPublicForm("brookr.trucks",e.identifier).subscribe((function(t){e.form=t}))}))},e.prototype.handleSubmit=function(e){var t=this;if(e.sections.forEach((function(e){return h.a.touchAllFields(e.formGroup)})),this.form.formGroup.invalid)return this.snackbar.open("Unable to proceed the form is not valid.","OK",{duration:3e3});e.sections.forEach((function(e){return h.a.deactivateFields(e.fields)})),this.trucksService.save(e.formGroup.value,this.identifier).subscribe((function(n){t.snackbar.open(n.message,"OK",{duration:3e3}),t.identifier?e.sections.forEach((function(e){return h.a.enableFields(e.fields)})):t.router.navigateByUrl("/dashboard/trucks")}),(function(n){e.sections.forEach((function(e){return h.a.enableFields(e.fields)})),t.snackbar.open(n.error.message||"An unexpected error has occured.","OK",{duration:3e3})}))},e.ctorParameters=function(){return[{type:c.b},{type:a.a},{type:y},{type:i.a},{type:a.b}]},e=v([Object(r.n)({selector:"app-manage",template:k(n("8+H4")).default,styles:[k(n("9DBa")).default]}),O("design:paramtypes",[c.b,a.a,y,i.a,a.b])],e)}(),j=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},P=function(){function e(e){this.tendoo=e,this.baseUrl=this.tendoo.baseUrl}return e.prototype.saveMaintenance=function(e,t){void 0===t&&(t=null);var n=["",null].includes(t)?"post":"put";return this.tendoo[n](this.tendoo.baseUrl+"brookr/trucks-maintenances"+(t?"/"+t:""),e)},e.prototype.deleteMaintenance=function(e){return this.tendoo.delete(this.baseUrl+"brookr/trucks-maintenances/"+e)},e.ctorParameters=function(){return[{type:c.b}]},e=j([Object(r.E)({providedIn:"root"}),x("design:paramtypes",[c.b])],e)}(),I=function(){return(I=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},w=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},D=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},S=function(e){return e&&e.__esModule?e:{default:e}},M=function(){function e(e,t,n,r,o,a){this.snackbar=e,this.router=t,this.tendoo=n,this.snapshot=r,this.truckMaintenance=o,this.dialog=a,this.isLoading=!1,this.sort={},this.perPage={},this.search={},this.page={}}return e.prototype.ngOnInit=function(){var e=this;this.isLoading=!0,this.tendoo.crud.getConfig("brookr.trucks-maintenance",I(I(I({},this.sort),this.search),this.page)).subscribe((function(t){e.isLoading=!1,e.config=t}))},e.prototype.handleAction=function(e){var t=this;"DELETE"===e.menu.type?this.truckMaintenance.deleteMaintenance(e.row.id).subscribe((function(n){t.snackbar.open(n.message,"OK",{duration:3e3}),t.dialog.getDialogById(e.menu.namespace).close(),t.ngOnInit()}),(function(e){t.snackbar.open(e.error.message||e.message||"An unexpected error has occured","OK",{duration:3e3})})):"GOTO"===e.menu.type&&this.router.navigateByUrl("/dashboard/trucks/maintenances/manage/"+e.row.id)},e.prototype.handleSort=function(e){this.sort=e,this.ngOnInit()},e.prototype.handleRefresh=function(e){this.ngOnInit()},e.prototype.handlePagineNavigation=function(e){this.perPage={per_page:e.pageSize},this.page={page:e.pageIndex+1},this.ngOnInit()},e.prototype.handleSearch=function(e){this.search={search:e},this.ngOnInit()},e.prototype.handleDelete=function(e){console.log(e)},e.ctorParameters=function(){return[{type:i.a},{type:a.b},{type:c.b},{type:a.a},{type:P},{type:s.b}]},e=w([Object(r.n)({selector:"app-maintenance-list",template:S(n("/rZg")).default,styles:[S(n("RUrL")).default]}),D("design:paramtypes",[i.a,a.b,c.b,a.a,P,s.b])],e)}(),E=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},L=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},U=function(e){return e&&e.__esModule?e:{default:e}},$=function(){function e(e,t,n,r,o){this.trucksMaintenances=e,this.snapshot=t,this.snackbar=n,this.tendoo=r,this.router=o,this.mode="create",this.identifier=""}return e.prototype.ngOnInit=function(){var e=this;this.snapshot.paramMap.subscribe((function(t){t.get("id")&&(e.mode="edit",e.identifier=t.get("id")),e.tendoo.forms.getPublicForm("brookr.trucks-maintenances",e.identifier?+e.identifier:void 0).subscribe((function(t){e.form=h.a.buildForm(t)}))}))},e.prototype.handleSubmit=function(e){var t=this;if(this.form.sections.forEach((function(e){return h.a.touchAllFields(e.formGroup)})),this.form.formGroup.invalid)return this.snackbar.open("Unable to proceed the form is not valid.","OK",{duration:3e3});this.fieldsControl("disable"),this.trucksMaintenances.saveMaintenance(this.form.formGroup.value,this.identifier||"").subscribe((function(e){t.snackbar.open(e.message,"OK",{duration:3e3}),t.identifier?t.fieldsControl("enable"):t.router.navigateByUrl("/dashboard/trucks/maintenances")}),(function(e){t.fieldsControl("enable"),t.form.sections.forEach((function(e){return h.a.enableFields(e.fields)})),t.snackbar.open(e.error.message||"An unexpected error has occured","OK")}))},e.prototype.fieldsControl=function(e){switch(e){case"disable":this.form.sections.forEach((function(e){return h.a.deactivateFields(e.fields)}));break;case"enable":this.form.sections.forEach((function(e){return h.a.enableFields(e.fields)}))}},e.ctorParameters=function(){return[{type:P},{type:a.a},{type:i.a},{type:c.b},{type:a.b}]},e=E([Object(r.n)({selector:"app-maintenance-manage",template:U(n("oL7O")).default,styles:[U(n("JD/L")).default]}),L("design:paramtypes",[P,a.a,i.a,c.b,a.b])],e)}(),T=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},A=[{path:"",component:d},{path:"create",component:R},{path:"edit/:id",component:R},{path:":id/maintenances",component:M},{path:":id/maintenances/edit",component:$},{path:"maintenances/manage",component:$},{path:"maintenances/manage/:id",component:$},{path:"maintenances",component:M}],F=function(){function e(){}return e=T([Object(r.M)({imports:[a.c.forChild(A)],exports:[a.c]})],e)}(),K=n("428I"),_=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},B=function(){function e(){}return e=_([Object(r.M)({declarations:[d,R,M,$],imports:[o.c,F,K.a]})],e)}()}}]);