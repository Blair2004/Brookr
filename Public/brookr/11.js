(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/qA+":function(e,t,n){"use strict";n.r(t),t.default=""},Cs13:function(e,t,n){"use strict";n.r(t),t.default='<app-manage (changed)="closePopup()" [layout]="false" [id]="data.row.id"></app-manage>'},IttN:function(e,t,n){"use strict";n.r(t),t.default=""},pGcJ:function(e,t,n){"use strict";n.r(t),n.d(t,"LoadsModule",(function(){return B}));var o=n("LoAr"),r=n("WT9V"),i=n("981U"),a=n("AFHi"),s=n("qptw"),c=n("8YcR"),d=n("z35L"),l=n("75Dc"),u=n("+BR4"),p=n("jpeZ"),f=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t){return function(n,o){t(n,o,e)}},b=function(e){return e&&e.__esModule?e:{default:e}},m=function(){function e(e,t){this.data=e,this.dialog=t,console.log(this.data)}return e.prototype.ngOnInit=function(){},e.prototype.closePopup=function(){this.dialog.getDialogById("edit-load").close(),console.log("should have closed")},e.prototype.submitForm=function(){},e.ctorParameters=function(){return[{type:void 0,decorators:[{type:o.D,args:[c.a]}]},{type:c.b}]},e=f([Object(o.n)({selector:"app-edit",template:b(n("Cs13")).default,styles:[b(n("IttN")).default]}),g(0,Object(o.D)(c.a)),h("design:paramtypes",[Object,c.b])],e)}(),y=function(){return(y=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},v=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},O=function(e){return e&&e.__esModule?e:{default:e}},S=function(){function e(e,t,n,o){this.tendoo=e,this.snackbar=t,this.dialog=n,this.router=o,this.isLoading=!1,this.sort={direction:"desc",active:"pickup_date"},this.search={},this.page={},this.query={},this.bulkMenus=[],this.perPage={per_page:20},this.hasLoaded=!1}return e.prototype.loadConfiguration=function(){var e=this;!1===this.hasLoaded?(this.tendoo.crud.getConfig("brookr.loads",y(y(y(y(y({},this.page),this.search),this.sort),this.perPage),this.query)).subscribe((function(t){e.config=t})),this.hasLoaded=!0):this.tendoo.crud.getEntries("brookr.loads",y(y(y(y(y({},this.page),this.search),this.sort),this.perPage),this.query)).subscribe((function(t){e.config=y(y({},e.config),{results:t})}))},e.prototype.ngOnInit=function(){var e=this;this.loadConfiguration(),this.bulkMenus=[{label:"Delete Selected",onClick:function(t){if(0===t.length)return e.snackbar.open("Please select at least one element.","OK",{duration:3e3});e.dialog.open(a.b,{id:"confirm-dialog",data:{title:"Confirm your action",message:"Would you like to delete the selected loads.",buttons:[{namespace:"yes",label:"Yes",onClick:function(){e.dialog.getDialogById("confirm-dialog").close(),e.tendoo.crud.deleteBulkEntries("brookr.loads",t.map((function(e){return e.id}))).subscribe((function(t){e.snackbar.open(t.message,"OK",{duration:3e3}),e.loadConfiguration()}),(function(t){e.snackbar.open(t.error.message||t.message,"OK",{duration:3e3})}))}},{namespace:"no",label:"No",onClick:function(){e.dialog.getDialogById("confirm-dialog").close()}}]}})}}]},e.prototype.handlePageSize=function(e){this.perPage={per_page:e},this.loadConfiguration()},e.prototype.handleNavigation=function(e){this.page={page:e},this.ngOnInit()},e.prototype.handleAction=function(e){var t=this;"DELETE"===e.menu.type?this.tendoo.crud.delete(e.menu.url.replace("{id}",e.row.id)).subscribe((function(n){t.snackbar.open(n.message,"OK",{duration:3e3}),t.ngOnInit(),t.dialog.getDialogById(e.menu.namespace).close()}),(function(n){t.snackbar.open(n.error.message||"An unexpected error occured","OK",{duration:5e3}),t.dialog.getDialogById(e.menu.namespace).close()})):"GOTO"===e.menu.type?this.router.navigateByUrl(e.menu.url.replace("{id}",e.row.id)):"OPEN"===e.menu.type&&"open.assign_driver"===e.menu.namespace?this.openLoadAssignation(e.menu):"OPEN"===e.menu.type&&"edit.loads"===e.menu.namespace?this.openLoadEdition(e):"OPEN"===e.menu.type&&"open.change_status"===e.menu.namespace?this.openLoadChangeStatus(e.menu):["rate_document_url","delivery_document_url"].includes(e.menu.namespace)?this.tendoo.get(this.tendoo.baseUrl+"brookr/loads/"+e.row.id+"/assets/"+e.menu.namespace).subscribe((function(e){window.open(e.data.url)}),(function(e){t.snackbar.open(e.error.message||e.message,"OK",{duration:3e3})})):"open.load_history"===e.menu.namespace?this.tendoo.get(this.tendoo.baseUrl+"brookr/loads/"+e.row.id+"/history").subscribe((function(e){if(0===e.length)return t.snackbar.open("This load doesn't have any history.","OK",{duration:3e3});t.dialog.open(p.a,{id:"load-history",data:{history:e},width:[t.tendoo.responsive.isLG(),t.tendoo.responsive.isXL()].includes(!0)?"40%":"90%",height:[t.tendoo.responsive.isLG(),t.tendoo.responsive.isXL()].includes(!0)?"80%":"90%"})})):"notify_delivery"===e.menu.namespace&&this.dialog.open(a.b,{id:"notify-delivery",width:[this.tendoo.responsive.isLG(),this.tendoo.responsive.isMD(),this.tendoo.responsive.isXL()].includes(!0)?"30%":"90%",data:{title:"Notify the delivery",message:"Would you like to notify the delivery of the Load ? This means the Proof Of Delivery and the Rate Document will be emailed to the company you have assigned on the settings. Please confirm.",buttons:[{namespace:"yes",label:"Send",onClick:function(){t.tendoo.get(e.menu.url.replace("{id}",e.row.id)).subscribe((function(e){t.dialog.getDialogById("notify-delivery").close(),t.snackbar.open(e.message,"OK",{duration:3e3})}),(function(e){t.snackbar.open(e.error.message||e.message,"OK",{duration:6e3})}))}},{namespace:"no",label:"Cancel",onClick:function(){t.dialog.getDialogById("notify-delivery").close()}}]}})},e.prototype.openLoadChangeStatus=function(e){var t=this;this.dialog.open(u.a,{id:"load-status",data:e,height:[this.tendoo.responsive.isSM(),this.tendoo.responsive.isXS()].includes(!0)?"80%":"400px",width:[this.tendoo.responsive.isSM(),this.tendoo.responsive.isXS()].includes(!0)?"70%":"500px"}).afterClosed().subscribe((function(e){t.ngOnInit()}))},e.prototype.openLoadAssignation=function(e){var t=this;this.dialog.open(l.a,{id:"assign-load",data:e,height:[this.tendoo.responsive.isSM(),this.tendoo.responsive.isXS()].includes(!0)?"80%":"400px",width:[this.tendoo.responsive.isSM(),this.tendoo.responsive.isXS()].includes(!0)?"70%":"500px"}).afterClosed().subscribe((function(e){t.ngOnInit()}))},e.prototype.openLoadEdition=function(e){var t=this;this.dialog.open(m,{id:"edit-load",data:e,height:([this.tendoo.responsive.isSM(),this.tendoo.responsive.isXS()].includes(!0),"80%"),width:([this.tendoo.responsive.isSM(),this.tendoo.responsive.isXS()].includes(!0),"70%")}).afterClosed().subscribe((function(e){t.ngOnInit()}))},e.prototype.handleSort=function(e){this.sort=e,this.ngOnInit()},e.prototype.handleSearch=function(e){this.search={search:e},this.ngOnInit()},e.prototype.handleSearchStatus=function(e){!1===e&&(this.search={},this.ngOnInit())},e.prototype.handleRefresh=function(e){this.ngOnInit()},e.prototype.handleCloseSearch=function(){this.query={}},e.prototype.handlePagineNavigation=function(e){this.perPage={per_page:e.pageSize},this.page={page:e.pageIndex+1},this.ngOnInit()},e.prototype.handleQuerySearch=function(e){this.search={},this.query=y(y({},e.query),{queryFilter:!0}),this.ngOnInit()},e.ctorParameters=function(){return[{type:d.b},{type:s.a},{type:c.b},{type:i.b}]},e=v([Object(o.n)({selector:"app-list",template:O(n("tiBi")).default,styles:[O(n("szAk")).default]}),x("design:paramtypes",[d.b,s.a,c.b,i.b])],e)}(),k=n("CD38"),w=n("k46B"),L=n("wgY5"),I=n("GODV"),C=n("38Q6"),D=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},j=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},P=function(e){return e&&e.__esModule?e:{default:e}},R=function(){function e(e,t,n,r,i,a,s){this.activeSnapShot=e,this.tendoo=t,this.snackbar=n,this.router=r,this.dialog=i,this.locationService=a,this.loadsService=s,this.changed=new o.y,this.layout=!0,this.mode="create"}return e.prototype.ngOnInit=function(){var e=this;this.activeSnapShot.paramMap.subscribe((function(t){t.get("id")&&void 0===e.id&&(e.mode="edit",e.id=+t.get("id"))})),void 0!==this.id&&(this.mode="edit"),this.tendoo.forms.getPublicForm("brookr.loads",this.id||void 0).subscribe((function(t){t.sections.forEach((function(e){e.fields.forEach((function(e){"ng-datetime"===e.type&&(e.value=new Date(e.value))}))})),e.form=k.a.buildForm(t),e.form.sections.forEach((function(e){"main"===e.namespace&&(e.render=!1)})),e.form=t}))},e.prototype.clearCustomer=function(){this.form.sections[1].formGroup.controls.brooker_id.setValue("")},e.prototype.clearDriver=function(){this.form.sections[2].formGroup.controls.driver_id.setValue("")},e.prototype.createLocation=function(){var e=this;this.dialog.open(I.a,{id:"create-dialog",height:([this.tendoo.responsive.isSM(),this.tendoo.responsive.isXS()].includes(!0),"75%"),width:([this.tendoo.responsive.isSM(),this.tendoo.responsive.isXS()].includes(!0),"65%")}).afterClosed().subscribe((function(t){e.locationService.getLocations().subscribe((function(t){e.form.sections[1].fields.forEach((function(e){["pickup_location_id","delivery_location_id"].includes(e.name)&&(e.options=t.map((function(e){return{label:e.name,value:e.id}})))}))}))}))},e.prototype.handleSubmit=function(e){var t=this;this.form.sections.forEach((function(e){return k.a.touchAllFields(e.formGroup)})),this.form.formGroup.invalid,this.form.sections.forEach((function(e){return k.a.deactivateFields(e.fields)}));var n=new FormData;this.form.sections.forEach((function(e){e.fields.forEach((function(t){["ng-datetime"].includes(t.type)?n.append(e.namespace+"--"+t.name,L(t.control.value).format("YYYY-MM-DD HH:mm")):n.append(e.namespace+"--"+t.name,t.control.value)}))})),this.loadsService.registerLoads(n,this.id).subscribe((function(e){t.snackbar.open(e.message,"OK",{duration:3e3}),t.layout?t.router.navigateByUrl("/dashboard/loads"):t.changed.emit(e)}),(function(e){t.snackbar.open(e.error.message||e.message||"An unexpected error has occured.","OK",{duration:6e3}),t.form.sections.forEach((function(e){return k.a.enableFields(e.fields)}))}))},e.ctorParameters=function(){return[{type:i.a},{type:d.b},{type:s.a},{type:i.b},{type:c.b},{type:C.a},{type:w.a}]},D([Object(o.T)("changed"),j("design:type",Object)],e.prototype,"changed",void 0),D([Object(o.H)("id"),j("design:type",Number)],e.prototype,"id",void 0),D([Object(o.H)("layout"),j("design:type",Boolean)],e.prototype,"layout",void 0),e=D([Object(o.n)({selector:"app-manage",template:P(n("xloT")).default,styles:[P(n("/qA+")).default]}),j("design:paramtypes",[i.a,d.b,s.a,i.b,c.b,C.a,w.a])],e)}(),_=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},M=[{path:"",component:S},{path:"create",component:R},{path:"edit/:id",component:R}],E=function(){function e(){}return e=_([Object(o.M)({imports:[i.d.forChild(M)],exports:[i.d]})],e)}(),$=n("428I"),A=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},B=function(){function e(){}return e=A([Object(o.M)({declarations:[S,R,m],imports:[r.c,E,$.a]})],e)}()},szAk:function(e,t,n){"use strict";n.r(t),t.default=""},tiBi:function(e,t,n){"use strict";n.r(t),t.default='<app-layout>\r\n    <div class="mb-4 text-gray-800">\r\n        <span class="block text-2xl mb-2">Available Loads</span> \r\n        <p class="text-sm">Manage all assigned loads delivery</p>\r\n    </div>\r\n    <div class="w-full overflow-auto shadow flex-auto">\r\n        \x3c!-- <cb-table \r\n            (action)="handleAction( $event )" \r\n            (sort)="handleSort( $event )" \r\n            (refresh)="handleRefresh( $event )" \r\n            (page)="handlePagineNavigation( $event )" \r\n            (search)="handleSearch( $event )"\r\n            (search-status)="handleSearchStatus( $event )"\r\n            [is-loading]="isLoading"\r\n            *ngIf="config" [crud]="config" class="w-full"></cb-table> --\x3e\r\n        <app-table \r\n            (action)="handleAction( $event )"\r\n            (refresh)="handleRefresh( $event )"  \r\n            (search)="handleSearch( $event )"\r\n            (sort)="handleSort( $event )"\r\n            (search-status)="handleSearchStatus( $event )"\r\n            (query-search)="handleQuerySearch( $event )"\r\n            (close-search)="handleCloseSearch( $event )"\r\n            (pageSize)="handlePageSize( $event )"\r\n            (navigate)="handleNavigation( $event )"\r\n            *ngIf="config" \r\n            [config]="config"\r\n            [bulk]="bulkMenus"\r\n            ></app-table>\r\n        \x3c!-- <app-table (sort)="handleSort( $event )" (search)="handleSearch( $event )" [config]="config"></app-table> --\x3e\r\n    </div>   \r\n</app-layout>'},xloT:function(e,t,n){"use strict";n.r(t),t.default='<app-layout *ngIf="layout">\r\n    <div class="mb-2" *ngIf="mode === \'create\'">\r\n        <p class="text-2xl mb-2 font-serif text-gray-800">Create Load</p>\r\n        <p class="text-gray-700">Loads are assigned to drivers for delivery.</p>\r\n    </div>\r\n    <div class="mb-2" *ngIf="mode === \'edit\'">\r\n        <p class="text-2xl mb-2 font-serif text-gray-800">Edit Load</p>\r\n        <p class="text-gray-700">Loads are assigned to drivers for delivery.</p>\r\n    </div>\r\n    <form *ngIf="form" [formGroup]="form.formGroup">\r\n        <div class="mb-4" *ngFor="let field of form.sections[0].fields">\r\n            <input [formControl]="field.control" type="text" class="rounded border border-gray-400 p-2 w-full" placeholder="Load Title">\r\n            <span class="text-gray-600 my-1 text-xs block">Can automatically be generated.</span>\r\n        </div>\r\n        <app-tabs *ngIf="form" [form]="form" (submit)="handleSubmit( $event )">\r\n            <div class="custom-buttons">\r\n                <button (click)="clearCustomer()" class="mr-2 rounded bg-green-200 text-green-600 text-center px-4 py-2 shadow border border-green-600 active:shadow-none">Unassign Customer</button> \x3c!-- (click)="clearCustomer()" --\x3e\r\n                <button (click)="clearDriver()" class="mr-2 rounded bg-green-200 text-green-600 text-center px-4 py-2 shadow border border-green-600 active:shadow-none">Unassign Driver</button> \x3c!-- (click)="clearDriver()" --\x3e\r\n                <button (click)="createLocation()" class="mr-2 rounded bg-green-200 text-green-600 text-center px-4 py-2 shadow border border-green-600 active:shadow-none">Add Location</button> \x3c!-- (click)="clearDriver()" --\x3e\r\n            </div>\r\n        </app-tabs>\r\n    </form>\r\n</app-layout>\r\n<div *ngIf="! layout" class="p-4">\r\n    <div class="mb-2" *ngIf="mode === \'create\'">\r\n        <p class="text-2xl mb-2 font-serif text-gray-800">Create Load</p>\r\n        <p class="text-gray-700">Loads are assigned to drivers for delivery.</p>\r\n    </div>\r\n    <div class="mb-2" *ngIf="mode === \'edit\'">\r\n        <p class="text-2xl mb-2 font-serif text-gray-800">Edit Load</p>\r\n        <p class="text-gray-700">Loads are assigned to drivers for delivery.</p>\r\n    </div>\r\n    <form *ngIf="form" [formGroup]="form.formGroup">\r\n        <div class="mb-4" *ngFor="let field of form.sections[0].fields">\r\n            <input [formControl]="field.control" type="text" class="rounded border border-gray-400 p-2 w-full" placeholder="Load Title">\r\n            <span class="text-gray-600 my-1 text-xs block">Can automatically be generated.</span>\r\n        </div>\r\n        <app-tabs *ngIf="form" [form]="form" (submit)="handleSubmit( $event )">\r\n            <div class="custom-buttons">\r\n                <button (click)="clearCustomer()" class="mr-2 rounded bg-green-200 text-green-600 text-center px-4 py-2 shadow border border-green-600 active:shadow-none">Unassign Customer</button> \r\n                <button (click)="clearDriver()" class="mr-2 rounded bg-green-200 text-green-600 text-center px-4 py-2 shadow border border-green-600 active:shadow-none">Unassign Driver</button> \r\n                \x3c!-- <button (click)="createLocation()" class="mr-2 rounded bg-green-200 text-green-600 text-center px-4 py-2 shadow border border-green-600 active:shadow-none">Add Location</button> (click)="clearDriver()" --\x3e\r\n            </div>\r\n        </app-tabs>\r\n    </form>\r\n</div>'}}]);