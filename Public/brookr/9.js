(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/pHV":function(e,t,n){"use strict";n.r(t),t.default=""},EBfP:function(e,t,n){"use strict";n.r(t),t.default=""},Nt43:function(e,t,n){"use strict";n.r(t),n.d(t,"CompaniesModule",(function(){return S}));var o=n("LoAr"),a=n("WT9V"),r=n("981U"),i=n("qptw"),s=n("8YcR"),c=n("z35L"),p=n("0BcZ"),f=function(){return(f=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},u=function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e){return e&&e.__esModule?e:{default:e}},h=function(){function e(e,t,n,o){this.tendoo=e,this.snackbar=t,this.dialog=n,this.router=o,this.isLoading=!1,this.sort={},this.search={},this.page={},this.perPage={per_page:10}}return e.prototype.ngOnInit=function(){var e=this;this.tendoo.crud.getConfig("brookr.companies",f(f(f(f({},this.sort),this.page),this.perPage),this.sort)).subscribe((function(t){e.config=t}),(function(t){e.snackbar.open(t.error.message||t.message,"TRY AGAIN").afterDismissed().subscribe((function(t){t.dismissedByAction&&e.ngOnInit()}))}))},e.prototype.handleRefresh=function(e){this.ngOnInit()},e.prototype.handleAction=function(e){switch(e.menu.type){case"GOTO":this.router.navigateByUrl(e.url);break;case"DELETE":this.deleteCompany(e);break;case"POPUP":this.handlePopup(e)}},e.prototype.handlePopup=function(e){"make.payment"==e.menu.namespace&&this.dialog.open(p.a,{id:"companies-payment-popup",data:{resource:e.row,formNamespace:"brookr.advance-payment.drivers",postNamespace:"brookr/companies/payment/"},width:[this.tendoo.responsive.isLG(),this.tendoo.responsive.isXL()].includes(!0)?"600px":"80%",height:[this.tendoo.responsive.isLG(),this.tendoo.responsive.isXL()].includes(!0)?"400px":"60%"})},e.prototype.deleteCompany=function(e){var t=this;this.tendoo.delete(e.menu.url).subscribe((function(n){t.snackbar.open(n.message,"OK",{duration:3e3}),t.dialog.getDialogById(e.menu.namespace).close()}),(function(e){t.snackbar.open(e.error.message||e.message,"OK",{duration:6e3})}))},e.prototype.handleSort=function(e){this.sort=e,this.ngOnInit()},e.prototype.handleSearch=function(e){this.search={search:e},this.ngOnInit()},e.prototype.handlePagineNavigation=function(e){this.perPage={per_page:e.pageSize},this.page={page:e.pageIndex+1},this.ngOnInit()},e.ctorParameters=function(){return[{type:c.b},{type:i.a},{type:s.b},{type:r.b}]},e=u([Object(o.n)({selector:"app-list",template:d(n("QU1T")).default,styles:[d(n("/pHV")).default]}),l("design:paramtypes",[c.b,i.a,s.b,r.b])],e)}(),b=n("CD38"),g=function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},y=function(e){return e&&e.__esModule?e:{default:e}},v=function(){function e(e,t,n,o,a){this.tendoo=e,this.snackbar=t,this.dialog=n,this.snapshot=o,this.router=a}return e.prototype.ngOnInit=function(){var e=this;this.snapshot.paramMap.subscribe((function(t){e.mode=null!==t.get("id")?"edit":"create",e.id=+t.get("id"),console.log(t.get("id")),e.tendoo.forms.getPublicForm("brookr.companies","edit"===e.mode?e.id:void 0).subscribe((function(t){e.form=t}))}))},e.prototype.handleSubmit=function(e){var t=this;if(this.form.sections.forEach((function(e){return b.a.touchAllFields(e.formGroup)})),this.form.formGroup.invalid)return this.snackbar.open("Unable to proceed the form is not valid.","OK",{duration:3e3});console.log(this.mode),this.tendoo["create"===this.mode?"post":"put"](this.tendoo.baseUrl+"brookr/companies"+("edit"===this.mode?"/"+this.id:""),this.form.formGroup.value).subscribe((function(e){t.snackbar.open(e.message,"OK",{duration:3e3}),t.router.navigateByUrl("/dashboard/companies")}),(function(e){t.snackbar.open(e.error.message||e.message,"OK",{duration:6e3})}))},e.ctorParameters=function(){return[{type:c.b},{type:i.a},{type:s.b},{type:r.a},{type:r.b}]},e=g([Object(o.n)({selector:"app-manage",template:y(n("RVzN")).default,styles:[y(n("EBfP")).default]}),m("design:paramtypes",[c.b,i.a,s.b,r.a,r.b])],e)}(),O=function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},R=[{path:"",component:h},{path:"create",component:v},{path:"edit/:id",component:v}],P=function(){function e(){}return e=O([Object(o.M)({imports:[r.c.forChild(R)],exports:[r.c]})],e)}(),j=function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},k=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},w=function(e){return e&&e.__esModule?e:{default:e}},x=function(){function e(){}return e.prototype.ngOnInit=function(){},e=j([Object(o.n)({selector:"app-companies",template:w(n("asuS")).default,styles:[w(n("g9e9")).default]}),k("design:paramtypes",[])],e)}(),I=n("428I"),C=function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},S=function(){function e(){}return e=C([Object(o.M)({declarations:[x,h,v],imports:[a.c,P,I.a]})],e)}()},QU1T:function(e,t,n){"use strict";n.r(t),t.default='<app-layout>\n    <div class="mb-4 text-gray-800">\n        <span class="block text-2xl mb-2">Companies</span> \n        <p class="text-sm">Manage all available companies</p>\n    </div>\n    <div class="flex w-full">\n        <cb-table \n            (action)="handleAction( $event )" \n            (sort)="handleSort( $event )" \n            (refresh)="handleRefresh( $event )" \n            (page)="handlePagineNavigation( $event )" \n            (search)="handleSearch( $event )"\n            [is-loading]="isLoading"\n            *ngIf="config" [crud]="config" class="w-full"></cb-table>\n        \x3c!-- <app-table (sort)="handleSort( $event )" (search)="handleSearch( $event )" [config]="config"></app-table> --\x3e\n    </div>   \n</app-layout>'},RVzN:function(e,t,n){"use strict";n.r(t),t.default='<app-layout>\n    <div class="mb-2" >\n        <p *ngIf="mode === \'create\'" class="text-2xl mb-2 font-serif text-gray-800">Create Company</p>\n        <p *ngIf="mode === \'edit\'" class="text-2xl mb-2 font-serif text-gray-800">Edit Company</p>\n        <p class="text-gray-700">Company can be used as driver group as driver can be attached to it.</p>\n    </div>\n    <app-tabs *ngIf="form" [form]="form" (submit)="handleSubmit( $event )"></app-tabs>\n</app-layout>'},asuS:function(e,t,n){"use strict";n.r(t),t.default="<p>companies works!</p>\n"},g9e9:function(e,t,n){"use strict";n.r(t),t.default=""}}]);