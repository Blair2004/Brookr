(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"7wo0":function(t,e,n){"use strict";n.r(e),n.d(e,"SettingsModule",(function(){return h}));var o=n("LoAr"),r=n("WT9V"),c=n("981U"),i=n("z35L"),f=n("CD38"),a=n("qptw"),s=function(t,e,n,o){var r,c=arguments.length,i=c<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var f=t.length-1;f>=0;f--)(r=t[f])&&(i=(c<3?r(i):c>3?r(e,n,i):r(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i},u=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(t){return t&&t.__esModule?t:{default:t}},l=function(){function t(t,e){this.tendoo=t,this.snackbar=e}return t.prototype.ngOnInit=function(){var t=this;this.tendoo.forms.getPublicForm("brookr.settings").subscribe((function(e){t.form=f.a.buildForm(e)}))},t.prototype.handleSubmit=function(t){var e=this;this.tendoo.post(this.tendoo.baseUrl+"brookr/settings",this.form.formGroup.value).subscribe((function(t){e.snackbar.open(t.message,"OK",{duration:3e3})}))},t.ctorParameters=function(){return[{type:i.b},{type:a.a}]},t=s([Object(o.n)({selector:"app-settings",template:p(n("vpzk")).default,styles:[p(n("DxNj")).default]}),u("design:paramtypes",[i.b,a.a])],t)}(),b=function(t,e,n,o){var r,c=arguments.length,i=c<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var f=t.length-1;f>=0;f--)(r=t[f])&&(i=(c<3?r(i):c>3?r(e,n,i):r(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i},d=[{path:"",component:l}],m=function(){function t(){}return t=b([Object(o.M)({imports:[c.c.forChild(d)],exports:[c.c]})],t)}(),y=n("428I"),g=function(t,e,n,o){var r,c=arguments.length,i=c<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var f=t.length-1;f>=0;f--)(r=t[f])&&(i=(c<3?r(i):c>3?r(e,n,i):r(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i},h=function(){function t(){}return t=g([Object(o.M)({declarations:[l],imports:[r.c,m,y.a]})],t)}()},DxNj:function(t,e,n){"use strict";n.r(e),e.default=""},vpzk:function(t,e,n){"use strict";n.r(e),e.default='<app-layout>\r\n    <div class="mb-4 text-gray-800">\r\n        <span class="block text-2xl mb-2">Brookr Settings</span> \r\n        <p class="text-sm">configure the application.</p>\r\n    </div>\r\n    <app-tabs [form]="form" *ngIf="form" (submit)="handleSubmit( $event )"></app-tabs>\r\n</app-layout>'}}]);