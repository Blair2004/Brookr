(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Go0l:function(e,t,n){"use strict";n.r(t),t.default='<app-layout>\r\n    <div class="mb-4 text-gray-800">\r\n        <span class="block text-2xl mb-2">Drivers</span> \r\n        <p class="text-sm">List of all created drivers</p>\r\n    </div>\r\n    <div class="flex w-full">\r\n        <cb-table \r\n            (action)="handleAction( $event )" \r\n            (sort)="handleSort( $event )" \r\n            (refresh)="handleRefresh( $event )" \r\n            (page)="handlePagineNavigation( $event )" \r\n            (search)="handleSearch( $event )"\r\n            [is-loading]="isLoading"\r\n            *ngIf="config" [crud]="config" class="w-full"></cb-table>\r\n        \x3c!-- <app-table (sort)="handleSort( $event )" (search)="handleSearch( $event )" [config]="config"></app-table> --\x3e\r\n    </div>   \r\n</app-layout>'},IeHZ:function(e,t,n){"use strict";n.r(t),t.default=""},KnLz:function(e,t,n){"use strict";n.r(t),t.default=""},LF4N:function(e,t,n){"use strict";n.r(t),t.default='<app-layout>\n    <div class="mb-4 text-gray-800">\n        <span class="block text-2xl mb-2">Loads</span> \n        <p class="text-sm">list all loads available for the drivers.</p>\n    </div>\n    <div class="flex w-full flex-col">\n        <div class="tab tab-container">\n            <div class="tabs-header flex" style="margin-bottom: -2px;">\n                <div (click)="setTabActive( section )" [ngClass]="{\n                    \'bg-gray-100\' : section.active,\n                    \'bg-gray-300\' : ! section.active\n                }" *ngFor="let section of sections" class="tab px-4 py-2 border-2 border-b-0 rounded-t-lg cursor-pointer flex items-center justify center">\n                    {{ section.title }} \n                </div>\n            </div>\n        </div>\n        <div class="bg-gray-100 border-2">\n            <app-table \n                (action)="handleAction( $event )"\n                *ngIf="config" \n                (refresh)="handleRefresh( $event )"\n                (sort)="handleSort( $event )" \n                (search)="handleSearch( $event )" \n                [config]="config"></app-table>\n        </div>\n    </div>   \n</app-layout>'},a4nD:function(e,t,n){"use strict";n.r(t),t.default='<app-layout>\r\n    <div class="mb-2">\r\n        <p *ngIf="mode === \'create\'" class="text-2xl mb-2 font-serif text-gray-800">Creating a driver</p>\r\n        <p *ngIf="mode === \'edit\'" class="text-2xl mb-2">Editing a driver</p>\r\n        <p class="text-gray-700">Drivers can pickup and deliver loads which are assigned to them or not yet assigned.</p>\r\n    </div>\r\n    <app-tabs *ngIf="form" (changed)="handleFieldChange( $event )" [form]="form" (submit)="handleSubmit( $event )"></app-tabs>\r\n</app-layout>'},iQDh:function(e,t,n){"use strict";n.r(t),n.d(t,"DriversModule",(function(){return E}));var o=n("LoAr"),a=n("WT9V"),r=n("981U"),i=n("qptw"),s=n("8YcR"),c=n("z35L"),d=n("0BcZ"),l=function(){return(l=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},p=function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(e){return e&&e.__esModule?e:{default:e}},h=function(){function e(e,t,n,o){this.tendoo=e,this.snackbar=t,this.dialog=n,this.router=o,this.isLoading=!1,this.sort={},this.search={},this.page={},this.perPage={per_page:20}}return e.prototype.ngOnInit=function(){var e=this;this.tendoo.crud.getConfig("brookr.drivers",l(l(l(l({},this.page),this.search),this.sort),this.perPage)).subscribe((function(t){e.config=t}))},e.prototype.handleAction=function(e){var t=this;"DELETE"===e.menu.type?this.tendoo.crud.delete(e.menu.url.replace("{id}",e.row.id)).subscribe((function(n){t.snackbar.open(n.message,"OK",{duration:3e3}),t.ngOnInit(),t.dialog.getDialogById(e.menu.namespace).close()}),(function(n){t.snackbar.open(n.error.message||"An unexpected error occured","OK",{duration:5e3}),t.dialog.getDialogById(e.menu.namespace).close()})):"GOTO"===e.menu.type?this.router.navigateByUrl(e.menu.url.replace("{id}",e.row.id)):"open.payment"===e.menu.namespace?this.dialog.open(d.a,{id:"driver-payment-popup",data:{resource:e.row,formNamespace:"brookr.advance-payment.drivers",postNamespace:"brookr/drivers/payments/"},width:[this.tendoo.responsive.isLG(),this.tendoo.responsive.isXL()].includes(!0)?"600px":"80%",height:[this.tendoo.responsive.isLG(),this.tendoo.responsive.isXL()].includes(!0)?"600px":"80%"}):["personal_card_url","medical_card_url"].includes(e.menu.namespace)&&this.tendoo.get(this.tendoo.baseUrl+"brookr/drivers/"+e.row.id+"/assets/"+e.menu.namespace).subscribe((function(e){window.open(e.data.url)}),(function(e){t.snackbar.open(e.error.message||e.message,"OK",{duration:3e3})}))},e.prototype.handleSort=function(e){this.sort=e,this.ngOnInit()},e.prototype.handleSearch=function(e){this.search={search:e},this.ngOnInit()},e.prototype.handleRefresh=function(e){this.ngOnInit()},e.prototype.handlePagineNavigation=function(e){this.perPage={per_page:e.pageSize},this.page={page:e.pageIndex+1},this.ngOnInit()},e.ctorParameters=function(){return[{type:c.b},{type:i.a},{type:s.b},{type:r.b}]},e=p([Object(o.n)({selector:"app-list",template:f(n("Go0l")).default,styles:[f(n("IeHZ")).default]}),u("design:paramtypes",[c.b,i.a,s.b,r.b])],e)}(),b=n("GiBk"),g=n("wgY5"),v=n("CD38"),m=n("PTmb"),y=function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},O=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=function(e){return e&&e.__esModule?e:{default:e}},w=function(){function e(e,t,n,o,a,r){this.routeSnapshot=e,this.tendoo=t,this.client=n,this.driversService=o,this.snackbar=a,this.router=r,this.mode="create",this.id=""}return e.prototype.ngOnInit=function(){var e=this;this.routeSnapshot.paramMap.subscribe((function(t){t.get("id")&&(e.mode="edit",e.id=t.get("id")),e.generateForm()}))},e.prototype.generateForm=function(){var e=this;this.tendoo.forms.getPublicForm("brookr.drivers",+this.id>0?+this.id:void 0).subscribe((function(t){e.form=t}))},e.prototype.selectThis=function(e){this.form.sections.forEach((function(e){return e.active=!1})),e.active=!0},e.prototype.handleFieldChange=function(e){var t=this;if("file-upload"===e.type&&e.data&&void 0!==e.data.upload){var n=new FormData;n.append(e.data.upload.name||"file",e.control.value),n.append("field",e.data.upload.name||"file"),e.data.upload.isUploading=!0,this.tendoo.post(this.tendoo.baseUrl+"brookr/medias/upload",n).subscribe((function(t){console.log(t),e.control.setValue(t.value),e.data.upload.isUploading=!1}),(function(n){e.data.upload.isUploading=!1,t.snackbar.open(n.error.message||n.message,"OK",{duration:3e3})}))}},e.prototype.handleSubmit=function(e){var t=this;if(this.form.sections.forEach((function(e){return v.a.touchAllFields(e.formGroup)})),this.form.formGroup.invalid)return this.snackbar.open("Unable to proceed, the form is invalid","OK",{duration:3e3});this.form.sections.forEach((function(e){e.fields.forEach((function(t){if("ng-datetime"===t.type){var n=e.formGroup.get(t.name);n.value&&n.setValue(g(n.value).format("YYYY-MM-DD HH:mm"))}}))})),this.setFieldsState("disable"),this.driversService.setDriver(this.form.formGroup.value,+this.id>0?+this.id:null).subscribe((function(e){t.setFieldsState("enable"),t.snackbar.open(e.message,"OK",{duration:3e3}),t.id||t.router.navigateByUrl("/dashboard/drivers")}),(function(e){t.snackbar.open(e.error.message||e.message||"An unexpected error has occured","OK",{duration:3e3}),t.setFieldsState("enable")}))},e.prototype.setFieldsState=function(e){this.form.sections.forEach((function(t){return v.a["disabled"===e?"deactivateFields":"enableFields"](t.fields)}))},e.ctorParameters=function(){return[{type:r.a},{type:c.b},{type:b.b},{type:m.a},{type:i.a},{type:r.b}]},e=y([Object(o.n)({selector:"app-manage",template:k(n("a4nD")).default,styles:[k(n("tqi7")).default]}),O("design:paramtypes",[r.a,c.b,b.b,m.a,i.a,r.b])],e)}(),R=n("AFHi"),j=n("8G9j"),x=n("miQw"),D=n("xIjb"),L=function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},P=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},A=function(e){return e&&e.__esModule?e:{default:e}},I=function(){function e(e,t,n){this.tendoo=e,this.snackbar=t,this.dialog=n,this.sections=[{title:"Assigned Loads",namespace:"assigned.loads",description:"Loads assigned to your account.",active:!1,crud:this.tendoo.crud.getConfig("brookr.drivers-loads.assigned")},{title:"Unassigned Loads",namespace:"unassigned.loads",description:"Pending Loads not assigned to a driver.",active:!1,crud:this.tendoo.crud.getConfig("brookr.drivers-loads.unassigned")}]}return e.prototype.ngOnInit=function(){this.setTabActive(this.sections[0])},e.prototype.setTabActive=function(e){this.sections.forEach((function(e){return e.active=!1})),e.active=!0,this.loadActiveTabConfiguration()},e.prototype.loadActiveTabConfiguration=function(){var e=this;this.active.crud.subscribe((function(t){e.config=t}),(function(t){e.config=void 0,e.snackbar.open(t.error.message||t.error,"OK",{duration:3e3})}))},Object.defineProperty(e.prototype,"active",{get:function(){return this.sections.filter((function(e){return e.active}))[0]},enumerable:!0,configurable:!0}),e.prototype.handleRefresh=function(){this.setTabActive(this.active)},e.prototype.handleAction=function(e){var t=this;console.log(e),"handle"===e.menu.namespace?this.tendoo.get(this.tendoo.baseUrl+"brookr/drivers/is-available").subscribe((function(n){t.dialog.open(j.a,{id:"load-handle",data:{load:e.row},width:t.tendoo.responsive.isXL()||t.tendoo.responsive.isLG()||t.tendoo.responsive.isMD()?"600px":"80%",height:t.tendoo.responsive.isXL()||t.tendoo.responsive.isLG()||t.tendoo.responsive.isMD()?"400px":"80%"}).afterClosed().subscribe((function(e){t.setTabActive(t.active)}))}),(function(e){t.snackbar.open(e.error.message||e.message,"OK",{duration:6e3})})):"brookr.start-delivery"===e.menu.namespace?this.dialog.open(x.a,{id:"start-delivery",data:{title:"Starting Delivery",formNamespace:"brookr.drivers-delivery-start",description:"Please provide (if possible) the drop and load tailer reference.",cancel:function(){t.dialog.getDialogById("start-delivery").close()},confirm:function(n){if(n.sections.forEach((function(e){v.a.touchAllFields(e.formGroup)})),n.formGroup.invalid)return t.snackbar.open("Unable to proceed the form is not valid.","OK",{duration:3e3});t.tendoo.post(t.tendoo.baseUrl+"brookr/loads/start/"+e.row.id,n.formGroup.value).subscribe((function(e){t.snackbar.open(e.message,"OK",{duration:3e3}),t.dialog.getDialogById("start-delivery").close(),t.handleRefresh()}),(function(e){t.snackbar.open(e.error.message||e.message,"OK",{duration:5e3})}))}}}):"brookr.await-load"===e.menu.namespace?this.dialog.open(R.b,{id:"awaiting-load",data:{title:"Awaiting Load",message:"Confirm you've reached the delivery location and you're awaiting load ?",buttons:[{namespace:"yes",label:"Yes",onClick:function(){t.dialog.getDialogById("awaiting-load").close(),t.tendoo.get((t.tendoo.baseUrl+"brookr/loads/awaiting/{id}").replace("{id}",e.row.id)).subscribe((function(e){t.setTabActive(t.active),t.snackbar.open(e.message,"OK",{duration:3e3})}))}},{namespace:"no",label:"No",onClick:function(){t.dialog.getDialogById("awaiting-load").close()}}]}}):"brookr.send-delivery-document"===e.menu.namespace&&this.dialog.open(D.a,{id:"brookr.send-delivery-document",data:e.row,width:[this.tendoo.responsive.isLG(),this.tendoo.responsive.isMD(),this.tendoo.responsive.isXL()].includes(!0)?"600px":"80%",height:[this.tendoo.responsive.isLG(),this.tendoo.responsive.isMD(),this.tendoo.responsive.isXL()].includes(!0)?"600px":"80%",disableClose:!0}).afterClosed().subscribe((function(e){t.setTabActive(t.active)}))},e.ctorParameters=function(){return[{type:c.b},{type:i.a},{type:s.b}]},e=L([Object(o.n)({selector:"app-loads",template:A(n("LF4N")).default,styles:[A(n("KnLz")).default]}),P("design:paramtypes",[c.b,i.a,s.b])],e)}(),S=n("/bqT"),F=function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},G=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(){function e(e,t,n){this.tendoo=e,this.snackbar=t,this.router=n}return e.prototype.canActivate=function(e,t){var n=this.tendoo.auth.getUser().role.namespace;if("brookr.driver"!==n){switch(n){case"brookr.dispatcher":case"admin":this.router.navigateByUrl("/dashboard"),this.snackbar.open("You're not allowed to see this page","OK",{duration:3e3})}return!1}return!0},e.ctorParameters=function(){return[{type:c.b},{type:i.a},{type:r.b}]},e=F([Object(o.E)({providedIn:"root"}),G("design:paramtypes",[c.b,i.a,r.b])],e)}(),K=function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},U=[{path:"",canActivate:[S.a],component:h},{path:"create",canActivate:[S.a],component:w},{path:"edit/:id",canActivate:[S.a],component:w},{path:"loads",canActivate:[C],component:I}],T=function(){function e(){}return e=K([Object(o.M)({imports:[r.c.forChild(U)],exports:[r.c]})],e)}(),M=n("428I"),$=function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},E=function(){function e(){}return e=$([Object(o.M)({declarations:[h,w,I],imports:[a.c,T,M.a]})],e)}()},tqi7:function(e,t,n){"use strict";n.r(t),t.default=""}}]);