(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"7wo0":function(e,t,r){"use strict";r.r(t),r.d(t,"SettingsModule",(function(){return h}));var n=r("LoAr"),o=r("WT9V"),c=r("981U"),a=r("z35L"),i=r("CD38"),p=r("qptw"),f=function(e,t,r,n){var o,c=arguments.length,a=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(c<3?o(a):c>3?o(t,r,a):o(t,r))||a);return c>3&&a&&Object.defineProperty(t,r,a),a},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(e){return e&&e.__esModule?e:{default:e}},u=function(){function e(e,t){this.tendoo=e,this.snackbar=t}return e.prototype.ngOnInit=function(){var e=this;this.tendoo.forms.getPublicForm("brookr.settings").subscribe((function(t){e.form=i.a.buildForm(t)}))},e.prototype.handleSubmit=function(e){var t=this;this.tendoo.post(this.tendoo.baseUrl+"brookr/settings",this.form.formGroup.value).subscribe((function(e){t.snackbar.open(e.message,"OK",{duration:3e3})}))},e.ctorParameters=function(){return[{type:a.b},{type:p.a}]},e=f([Object(n.n)({selector:"app-settings",template:s(r("vpzk")).default,styles:[s(r("DxNj")).default]}),l("design:paramtypes",[a.b,p.a])],e)}(),d=function(e,t,r,n){var o,c=arguments.length,a=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(c<3?o(a):c>3?o(t,r,a):o(t,r))||a);return c>3&&a&&Object.defineProperty(t,r,a),a},b=[{path:"",component:u}],m=function(){function e(){}return e=d([Object(n.M)({imports:[c.d.forChild(b)],exports:[c.d]})],e)}(),y=r("428I"),g=function(e,t,r,n){var o,c=arguments.length,a=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(c<3?o(a):c>3?o(t,r,a):o(t,r))||a);return c>3&&a&&Object.defineProperty(t,r,a),a},h=function(){function e(){}return e=g([Object(n.M)({declarations:[u],imports:[o.c,m,y.a]})],e)}()},DxNj:function(e,t,r){"use strict";r.r(t),t.default=""},vpzk:function(e,t,r){"use strict";r.r(t),t.default='<app-layout>\r\n    <div class="mb-4 text-gray-800">\r\n        <span class="block text-2xl mb-2">Brookr Settings</span> \r\n        <p class="text-sm">configure the application.</p>\r\n    </div>\r\n    <div class="rounded border border-blue-500 bg-blue-100 p-2 my-2">\r\n        Here are the available template. A template tag should be used with an opening brace \'&#123;\' and a closing brace \'&#125;\'. For example \'&#123;pickup_date&#125;\'.\r\n\r\n        Tag Reference : &#123;load_id&#125;, &#123;load_reference&#125;, &#123;delivery_city&#125;, &#123;delivery_date&#125;, &#123;pickup_city&#125;, &#123;pickup_date&#125;, &#123;pickup_reference&#125;, &#123;load_trailer&#125;, &#123;drop_trailer&#125;, &#123;empty_trailer&#125;.\r\n    </div>\r\n    <app-tabs [form]="form" *ngIf="form" (submit)="handleSubmit( $event )"></app-tabs>\r\n</app-layout>'}}]);