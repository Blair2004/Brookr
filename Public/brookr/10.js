(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"73Nj":function(e,t,n){"use strict";n.r(t),t.default='<div id="container" class="bg-gray-200 h-full flex justify-center items-center">\r\n    <div class="p-2 w-full sm:w-2/3 md:w-1/2 lg:w-2/6 xl:1/4 flex flex-col items-center">\r\n        <span class="brookr-font block text-6xl my-3 text-gray-800">\r\n            <img class="w-64" [src]="urlPrefix + \'/assets/images/smm-icon.png\'" alt="">\r\n        </span>\r\n        <div class="flex justify-center my-10" *ngIf="! loaded">\r\n            <mat-progress-spinner diameter="60" mode="indeterminate"></mat-progress-spinner>\r\n        </div>\r\n        <div id="login-card" *ngIf="loaded" class="rounded-lg w-full shadow bg-white p-4 mt-2 mb-10">\r\n            <form [formGroup]="form">\r\n                <cb-field [group]="form" [field]="field" *ngFor="let field of fields"></cb-field>\r\n                <div class="button-container py-3 flex justify-end">\r\n                    <button type="submit" [disabled]="isLoggingIn" (click)="login()" [ngClass]="{\r\n                        \'bg-pink-700 text-white\' : ! isLoggingIn,\r\n                        \'bg-pink-500 text-gray-100\' : isLoggingIn\r\n                    }" class="rounded shadow px-3 py-2 bg-pink-700 text-white">Login</button>\r\n                </div>\r\n                <div class="button-container py-3 flex justify-center">\r\n                    <a href="#" class="hover:underline text-blue-600 text-sm">Password Lost ?</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>'},"7g1B":function(e,t,n){"use strict";n.r(t),t.default=""},UDWz:function(e,t,n){"use strict";n.r(t),t.default=""},WNno:function(e,t,n){"use strict";n.r(t),t.default=""},Yj9t:function(e,t,n){"use strict";n.r(t),n.d(t,"AuthModule",(function(){return R}));var r=n("LoAr"),o=n("WT9V"),i=n("981U"),s=n("qptw"),a=n("z35L"),c=n("CD38"),l=n("AytR"),u=n("wgY5"),f=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(e){return e&&e.__esModule?e:{default:e}},g=function(){function e(e,t,n,o){this.tendoo=e,this.snackbar=t,this.router=n,this.activatedRoute=o,this.loaded=!1,this.isLoggingIn=!1,this.urlPrefix=Object(r.vb)()?"":"/modules/brookr/brookr"}return e.prototype.ngOnInit=function(){var e=this;this.tendoo.fields.getPublicFields("brookr.login").subscribe((function(t){var n=c.a.buildFormGroup(t);e.form=n.formGroup,e.fields=n.fields,e.loaded=!0,l.a.production||(e.form.get("username").setValue("admin"),e.form.get("password").setValue("sanches"))}),(function(t){e.snackbar.open(t.error.message||t.message||"An unexpected error has occured","TRY AGAIN").afterDismissed().subscribe((function(t){t.dismissedByAction&&e.ngOnInit()}))}))},e.prototype.login=function(){var e=this;if(c.a.touchAllFields(this.form),this.form.invalid)return this.snackbar.open("Unable to proceed the form is not valid.","OK",{duration:3e3});this.isLoggingIn=!0,c.a.deactivateFields(this.fields),this.tendoo.auth.login(this.form.value).subscribe((function(t){e.activatedRoute.queryParamMap.subscribe((function(n){e.tendoo.auth.setCredentials(t.user,t.token);var r=u.now();e.tendoo.cookie.set("auth.user",t.token,u(r).add(7,"days").toDate(),"/"),e.tendoo.get(e.tendoo.baseUrl+"brookr/profile/avatar").subscribe((function(r){var o=n.get("redirect")||("brookr.drivers"===t.user.role.namespace?"/dashboard/drivers/loads":"/dashboard");t.user.avatar=r.link||null,e.snackbar.open(t.message,null,{duration:3e3}),e.router.navigateByUrl(o)}))}))}),(function(t){e.isLoggingIn=!1,c.a.enableFields(e.fields),e.snackbar.open(t.error.message||"An unexpected error has occored","OK",{duration:5e3})}))},e.ctorParameters=function(){return[{type:a.b},{type:s.a},{type:i.b},{type:i.a}]},e=f([Object(r.n)({selector:"app-auth",template:p(n("73Nj")).default,styles:[p(n("7g1B")).default]}),d("design:paramtypes",[a.b,s.a,i.b,i.a])],e)}(),b=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(e){return e&&e.__esModule?e:{default:e}},y=function(){function e(e,t,n){this.tendoo=e,this.snackbar=t,this.router=n}return e.prototype.ngOnInit=function(){var e=this;this.tendoo.auth.logout().subscribe((function(t){e.tendoo.cookie.delete("auth.user"),e.snackbar.open(t.message,"OK",{duration:3e3}),e.router.navigateByUrl("/auth/login")}))},e.ctorParameters=function(){return[{type:a.b},{type:s.a},{type:i.b}]},e=b([Object(r.n)({selector:"app-logout",template:h(n("UDWz")).default,styles:[h(n("WNno")).default]}),m("design:paramtypes",[a.b,s.a,i.b])],e)}(),v=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},j=[{path:"login",component:g},{path:"logout",component:y}],w=function(){function e(){}return e=v([Object(r.M)({imports:[i.c.forChild(j)],exports:[i.c]})],e)}(),k=n("428I"),O=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},R=function(){function e(){}return e=O([Object(r.M)({declarations:[g,y],imports:[o.c,w,k.a]})],e)}()}}]);