(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{TDBs:function(e,t,c){"use strict";c.r(t);var r=c("8AiQ"),i=c("5/c3"),n=c("1C3z"),o=c("z35L"),d=function(){function e(e){this.tendoo=e}return e.prototype.getReport=function(){return this.tendoo.post(this.tendoo.baseUrl+"brookr/dashboard",{})},e.prototype.refreshReport=function(){return this.tendoo.post(this.tendoo.baseUrl+"brookr/dashboard/refresh",{})},e.\u0275fac=function(t){return new(t||e)(n.ic(o.b))},e.\u0275prov=n.Ub({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),s=c("cQOC"),a=c("PTmb"),l=c("k46B"),f=c("ryqd"),u=c("r4gC");function b(e,t){if(1&e&&(n.ec(0,"li",33),n.ec(1,"span",34),n.ec(2,"span"),n.Mc(3),n.dc(),n.ec(4,"span"),n.Mc(5),n.rc(6,"date"),n.dc(),n.dc(),n.ec(7,"div",35),n.ec(8,"button",36),n.Mc(9,"Edit"),n.dc(),n.dc(),n.dc()),2&e){var c=t.$implicit;n.Kb(3),n.Pc("",c.first_name," ",c.last_name,""),n.Kb(2),n.Nc(n.sc(6,4,c.medical_card_expiration)),n.Kb(3),n.wc("routerLink","/dashboard/drivers/edit/"+c.driver_id)}}function p(e,t){if(1&e&&(n.ec(0,"li",37),n.ec(1,"span",38),n.ec(2,"div",39),n.ec(3,"span",40),n.Mc(4),n.dc(),n.ec(5,"span",41),n.Mc(6),n.dc(),n.ec(7,"span",41),n.Mc(8),n.dc(),n.dc(),n.ec(9,"span"),n.Mc(10),n.rc(11,"date"),n.dc(),n.dc(),n.ec(12,"div"),n.ec(13,"button",42),n.Mc(14,"Assign"),n.dc(),n.dc(),n.dc()),2&e){var c=t.$implicit;n.Kb(4),n.Nc(c.name),n.Kb(2),n.Oc("Load Ref : ",c.load_reference,""),n.Kb(2),n.Oc("Pickup Ref : ",c.pickup_reference,""),n.Kb(2),n.Nc(n.sc(11,5,c.pickup_date)),n.Kb(3),n.wc("routerLink","/dashboard/loads/edit/"+c.id)}}function g(e,t){if(1&e&&(n.ec(0,"li",33),n.ec(1,"span",34),n.ec(2,"span"),n.Mc(3),n.dc(),n.ec(4,"span"),n.Mc(5),n.rc(6,"date"),n.dc(),n.dc(),n.ec(7,"div",35),n.ec(8,"button",36),n.Mc(9,"Edit"),n.dc(),n.dc(),n.dc()),2&e){var c=t.$implicit;n.Kb(3),n.Pc("",c.first_name," ",c.last_name,""),n.Kb(2),n.Nc(n.sc(6,4,c.driving_license_expiration)),n.Kb(3),n.wc("routerLink","/dashboard/drivers/edit/"+c.driver_id)}}var h={total_loads:0,total_incomes:0,total_drivers:0,total_trucks:0,week_total_loads:0,week_ongoing_loads:0,week_pending_loads:0,week_total_drivers:0,week_total_incomes:0,week_total_trucks:0,assigned_drivers:0,unassigned_drivers:0,unavailable_drivers:0,available_trucks:0,assigned_trucks:0},v=[{path:"",component:function(){function e(e,t,c,r){this.tendoo=e,this.dashboard=t,this.drivers=c,this.loads=r,this.dashboardReport={current:h,previous:h},this.tableCrud={columns:{load:{label:"Load"},status:{label:"Status"},driver:{label:"Driver"}},labels:{list_title:"Ongoing Loads",list_description:"display all ongoing loads",create_title:"Create Load",create_description:"Will create new load",edit_title:"Edit an existing load",edit_description:"Load will be edited"},namespace:"brookr.loads",fields:[],links:{}},this.urlPrefix=Object(n.db)()?"":"/modules/brookr/brookr"}return e.prototype.ngOnInit=function(){var e=this;Object(s.a)([this.dashboard.getReport(),this.drivers.getByMedicalCard(),this.drivers.getByDriverCard(),this.loads.getUnassignedLoads()]).subscribe((function(t){e.parseReport(t[0]),e.driversByMedical=t[1],e.driversByLicense=t[2],e.unassignedLoads=t[3]}))},e.prototype.parseReport=function(e){this.dashboardReport.current=e.current||this.dashboardReport.current,this.dashboardReport.previous=e.previous||this.dashboardReport.previous},e.prototype.percentage=function(e){return 0!==this.dashboardReport.current[e]&&0!==this.dashboardReport.previous[e]?100*(this.dashboardReport.current[e]-this.dashboardReport.previous[e])/this.dashboardReport.current[e]:0},e.prototype.refreshDashboardReport=function(){var e=this;this.dashboard.refreshReport().subscribe((function(t){e.ngOnInit()}))},e.\u0275fac=function(t){return new(t||e)(n.Yb(o.b),n.Yb(d),n.Yb(a.a),n.Yb(l.a))},e.\u0275cmp=n.Sb({type:e,selectors:[["app-dashboard"]],decls:95,vars:19,consts:[[1,"flex","justify-between","items-center","mb-3"],[1,"text-2xl","text-gray-700","mb-4","block"],[1,"rounded-lg","border","hover:border-green-400","border-gray-400","h-10","w-10","flex","items-center","justify-center","hover:bg-green-100",3,"click"],[1,"top-dashboard","flex","flex-wrap","md:-mx-4"],[1,"flex-auto","px-4","w-full","md:w-1/3"],[1,"rounded","p-4","bg-green-200","flex"],[1,"w-20","h-20","rounded","flex","items-center","justify-center"],["alt","",3,"src"],[1,"flex-auto","pl-4"],[1,"text-sm","text-green-800","font-semibold"],[1,"text-4xl","text-green-800","font-extrabold"],[1,"flex","justify-between","items-end","text-green-600"],[1,"text-xs"],[1,"rounded","p-4","bg-blue-200","flex"],[1,"text-sm","text-blue-800","font-semibold"],[1,"text-4xl","text-blue-800","font-extrabold"],[1,"flex","justify-between","items-end","text-blue-600"],[1,"rounded","p-4","bg-orange-200","flex"],[1,"text-sm","text-orange-800","font-semibold"],[1,"text-4xl","text-orange-800","font-extrabold"],[1,"flex","justify-between","items-end","text-orange-600"],[1,"md:-mx-4","my-4","flex"],[1,"px-4","md:w-1/3"],[1,"bg-gray-200"],[1,"title","text-xl","border-b","border-gray-400","p-4","text-gray-700"],[1,"content"],["class","px-4 py-2 border-b border-gray-300 flex justify-between items-center",4,"ngFor","ngForOf"],[1,"px-4","py-2","border-b","border-gray-300","flex","justify-center","items-center"],["routerLink","/dashboard/drivers",1,"text-gray-700","hover:text-green-600","hover:text-underline"],[1,"px-4","md:w-2/3"],[1,"bg-teal-200"],[1,"title","text-xl","border-b","border-teal-400","p-4","text-gray-700"],["class","px-4 py-2 border-b border-teal-300 flex justify-between items-center",4,"ngFor","ngForOf"],[1,"px-4","py-2","border-b","border-gray-300","flex","justify-between","items-center"],[1,"text-gray-700","flex","flex-auto","justify-between","items-center"],[1,"ml-4"],[1,"rounded-lg","bg-white","px-2","py-1","shadow","text-sm","hover:bg-green-400","hover:text-white",3,"routerLink"],[1,"px-4","py-2","border-b","border-teal-300","flex","justify-between","items-center"],[1,"text-teal-700","flex","flex-auto","justify-between","mr-4"],[1,"flex","flex-col"],[1,"text-lg","block"],[1,"text-xs","mt-1","block"],[1,"rounded-lg","bg-white","px-2","py-1","shadow","text-sm","hover:bg-teal-600","hover:text-white",3,"routerLink"]],template:function(e,t){1&e&&(n.ec(0,"app-layout"),n.ec(1,"div",0),n.ec(2,"span",1),n.Mc(3,"Activity Overview"),n.dc(),n.ec(4,"button",2),n.mc("click",(function(){return t.refreshDashboardReport()})),n.ec(5,"mat-icon"),n.Mc(6,"refresh"),n.dc(),n.dc(),n.dc(),n.ec(7,"div",3),n.ec(8,"div",4),n.ec(9,"div",5),n.ec(10,"div",6),n.Zb(11,"img",7),n.dc(),n.ec(12,"div",8),n.ec(13,"p",9),n.Mc(14,"Loads This Week"),n.dc(),n.ec(15,"p",10),n.Mc(16),n.dc(),n.ec(17,"div",11),n.ec(18,"span",12),n.Mc(19),n.dc(),n.ec(20,"span",12),n.Mc(21),n.dc(),n.dc(),n.ec(22,"div",11),n.ec(23,"span",12),n.Mc(24),n.dc(),n.ec(25,"span",12),n.Mc(26),n.dc(),n.dc(),n.dc(),n.dc(),n.dc(),n.ec(27,"div",4),n.ec(28,"div",13),n.ec(29,"div",6),n.Zb(30,"img",7),n.dc(),n.ec(31,"div",8),n.ec(32,"p",14),n.Mc(33,"Income This week"),n.dc(),n.ec(34,"p",15),n.Mc(35),n.dc(),n.ec(36,"div",16),n.ec(37,"span",12),n.Mc(38),n.dc(),n.ec(39,"span",12),n.Mc(40),n.dc(),n.dc(),n.ec(41,"div",16),n.ec(42,"span",12),n.Mc(43,"-"),n.dc(),n.ec(44,"span",12),n.Mc(45,"-"),n.dc(),n.dc(),n.dc(),n.dc(),n.dc(),n.ec(46,"div",4),n.ec(47,"div",17),n.ec(48,"div",6),n.Zb(49,"img",7),n.dc(),n.ec(50,"div",8),n.ec(51,"p",18),n.Mc(52,"Drivers Avaialble"),n.dc(),n.ec(53,"p",19),n.Mc(54),n.dc(),n.ec(55,"div",20),n.ec(56,"span",12),n.Mc(57),n.dc(),n.ec(58,"span",12),n.Mc(59),n.dc(),n.dc(),n.ec(60,"div",20),n.ec(61,"span",12),n.Mc(62),n.dc(),n.ec(63,"span",12),n.Mc(64),n.dc(),n.dc(),n.dc(),n.dc(),n.dc(),n.dc(),n.ec(65,"div",21),n.ec(66,"div",22),n.ec(67,"div",23),n.ec(68,"div",24),n.Mc(69,"Medical Expiration"),n.dc(),n.ec(70,"div",25),n.ec(71,"ul"),n.Lc(72,b,10,6,"li",26),n.ec(73,"li",27),n.ec(74,"a",28),n.Mc(75,"See Full List"),n.dc(),n.dc(),n.dc(),n.dc(),n.dc(),n.dc(),n.ec(76,"div",29),n.ec(77,"div",30),n.ec(78,"div",31),n.Mc(79,"Unassigned Loads"),n.dc(),n.ec(80,"div",25),n.ec(81,"ul"),n.Lc(82,p,15,7,"li",32),n.dc(),n.dc(),n.dc(),n.dc(),n.dc(),n.ec(83,"div",21),n.ec(84,"div",22),n.ec(85,"div",23),n.ec(86,"div",24),n.Mc(87,"License Expiration"),n.dc(),n.ec(88,"div",25),n.ec(89,"ul"),n.Lc(90,g,10,6,"li",26),n.ec(91,"li",27),n.ec(92,"a",28),n.Mc(93,"See Full List"),n.dc(),n.dc(),n.dc(),n.dc(),n.dc(),n.dc(),n.Zb(94,"div",29),n.dc(),n.dc()),2&e&&(n.Kb(11),n.wc("src",t.urlPrefix+"/assets/images/trailer.png",n.Gc),n.Kb(5),n.Nc(t.dashboardReport.current.total_loads),n.Kb(3),n.Oc("",t.percentage("week_total_loads")+"%"," "),n.Kb(2),n.Oc("",t.dashboardReport.previous.week_pending_loads," Last week"),n.Kb(3),n.Oc("",t.dashboardReport.current.week_pending_loads," Pending"),n.Kb(2),n.Oc("",t.dashboardReport.current.week_ongoing_loads," Ongoing"),n.Kb(4),n.wc("src",t.urlPrefix+"/assets/images/income.png",n.Gc),n.Kb(5),n.Nc(t.dashboardReport.current.total_incomes),n.Kb(3),n.Nc(t.percentage("week_total_incomes")+"%"),n.Kb(2),n.Oc("",t.dashboardReport.previous.total_incomes," Last week"),n.Kb(9),n.wc("src",t.urlPrefix+"/assets/images/steering-wheel.png",n.Gc),n.Kb(5),n.Nc(t.dashboardReport.current.total_drivers),n.Kb(3),n.Oc("Available Drivers ",t.dashboardReport.current.unassigned_drivers,""),n.Kb(2),n.Oc("Trucks ",t.dashboardReport.current.total_trucks,""),n.Kb(3),n.Oc("Available Trucks ",t.dashboardReport.current.available_trucks,""),n.Kb(2),n.Oc("Assigned ",t.dashboardReport.current.assigned_trucks,""),n.Kb(8),n.wc("ngForOf",t.driversByMedical),n.Kb(10),n.wc("ngForOf",t.unassignedLoads),n.Kb(8),n.wc("ngForOf",t.driversByLicense))},directives:[f.a,u.a,r.k,i.d,i.c],pipes:[r.e],styles:[""]}),e}()}],x=function(){function e(){}return e.\u0275mod=n.Wb({type:e}),e.\u0275inj=n.Vb({factory:function(t){return new(t||e)},imports:[[i.e.forChild(v)],i.e]}),e}(),m=c("vvyD"),w=c("428I");c.d(t,"DashboardModule",(function(){return y}));var y=function(){function e(){}return e.\u0275mod=n.Wb({type:e}),e.\u0275inj=n.Vb({factory:function(t){return new(t||e)},imports:[[r.c,x,m.a,w.a]]}),e}()},ryqd:function(e,t,c){"use strict";var r=c("IugH"),i=c("HnWI"),n=c("diMa"),o=c("8tfy");function d(e){var t=e.subscriber,c=e.counter,r=e.period;t.next(c),this.schedule({subscriber:t,counter:c+1,period:r},r)}var s=c("WvHp"),a=c("1C3z"),l=c("z35L"),f=function(){function e(e){this.tendoo=e}return e.prototype.deleteNotification=function(e){return this.tendoo.delete(this.tendoo.baseUrl+"brookr/notifications/"+e)},e.prototype.getNotifications=function(e){return this.tendoo.post(this.tendoo.baseUrl+"brookr/notifications#disable-spinner",{excluded:e})},e.\u0275fac=function(t){return new(t||e)(a.ic(l.b))},e.\u0275prov=a.Ub({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),u=c("4S5C"),b=c("8Fqk"),p=c("Jg5f"),g=function(){return function(e,t){this.value=e,this.interval=t}}(),h=c("2pW/"),v=c("8AiQ"),x=c("r4gC"),m=c("pxjo"),w=c("5/c3");function y(e,t){1&e&&a.Zb(0,"mat-progress-bar",24)}function k(e,t){1&e&&(a.ec(0,"mat-icon"),a.Mc(1,"keyboard_arrow_up"),a.dc())}function M(e,t){1&e&&(a.ec(0,"mat-icon"),a.Mc(1,"keyboard_arrow_down"),a.dc())}function _(e,t){if(1&e&&(a.ec(0,"span",32),a.Lc(1,k,2,0,"mat-icon",26),a.Lc(2,M,2,0,"mat-icon",26),a.dc()),2&e){var c=a.qc(2).$implicit;a.Kb(1),a.wc("ngIf",c.toggled),a.Kb(1),a.wc("ngIf",!c.toggled)}}function K(e,t){if(1&e){var c=a.fc();a.cc(0),a.ec(1,"div",27),a.mc("click",(function(){a.Fc(c);var e=a.qc(),t=e.$implicit,r=e.index;return a.qc().toggleMenu(t,r)})),a.ec(2,"div",28),a.ec(3,"mat-icon"),a.Mc(4),a.dc(),a.dc(),a.ec(5,"div",29),a.ec(6,"span",30),a.Mc(7),a.dc(),a.Lc(8,_,3,2,"span",31),a.dc(),a.dc(),a.bc()}if(2&e){var r=a.qc().$implicit;a.Kb(4),a.Nc(r.icon),a.Kb(3),a.Nc(r.label),a.Kb(1),a.wc("ngIf",r.childrens&&r.childrens.length>0)}}function L(e,t){1&e&&(a.ec(0,"span",32),a.ec(1,"mat-icon"),a.Mc(2,"keyboard_arrow_down"),a.dc(),a.dc())}function O(e,t){if(1&e){var c=a.fc();a.cc(0),a.ec(1,"a",33),a.mc("click",(function(){return a.Fc(c),a.qc(2).toggleSidebar()})),a.ec(2,"div",28),a.ec(3,"mat-icon"),a.Mc(4),a.dc(),a.dc(),a.ec(5,"div",29),a.ec(6,"span",30),a.Mc(7),a.dc(),a.Lc(8,L,3,0,"span",31),a.dc(),a.dc(),a.bc()}if(2&e){var r=a.qc().$implicit;a.Kb(1),a.wc("routerLink",r.path),a.Kb(3),a.Nc(r.icon),a.Kb(3),a.Nc(r.label),a.Kb(1),a.wc("ngIf",r.childrens&&r.childrens.length>0)}}function j(e,t){if(1&e){var c=a.fc();a.ec(0,"a",35),a.mc("click",(function(){return a.Fc(c),a.qc(3).toggleSidebar()})),a.Zb(1,"div",28),a.ec(2,"div",29),a.ec(3,"span",30),a.Mc(4),a.dc(),a.dc(),a.dc()}if(2&e){var r=t.$implicit;a.wc("routerLink",r.path),a.Kb(4),a.Nc(r.label)}}function I(e,t){if(1&e&&(a.cc(0),a.Lc(1,j,5,2,"a",34),a.bc()),2&e){var c=a.qc().$implicit;a.Kb(1),a.wc("ngForOf",c.childrens)}}c.d(t,"a",(function(){return D}));var N=function(e){return{"bg-gray-100 rounded shadow":e}};function R(e,t){if(1&e&&(a.ec(0,"div",25),a.Lc(1,K,9,3,"ng-container",26),a.Lc(2,O,9,4,"ng-container",26),a.Lc(3,I,2,1,"ng-container",26),a.dc()),2&e){var c=t.$implicit;a.wc("ngClass",a.yc(4,N,c.toggled)),a.Kb(1),a.wc("ngIf",void 0!==c.childrens&&c.childrens.length>0),a.Kb(1),a.wc("ngIf",void 0===c.childrens||0===c.childrens.length),a.Kb(1),a.wc("ngIf",c.toggled)}}function F(e,t){if(1&e){var c=a.fc();a.ec(0,"div",36),a.mc("click",(function(){return a.Fc(c),a.qc().toggleSidebar()})),a.dc()}}function $(e,t){if(1&e){var c=a.fc();a.ec(0,"div",37),a.mc("click",(function(){return a.Fc(c),a.qc().toggleNotifications()})),a.dc()}}function C(e,t){if(1&e&&(a.ec(0,"span",38),a.Mc(1),a.rc(2,"async"),a.dc()),2&e){var c=a.qc();a.Kb(1),a.Nc(a.sc(2,1,c.state$).notifications.length)}}function q(e,t){if(1&e){var c=a.fc();a.ec(0,"div",47),a.ec(1,"div",48),a.ec(2,"span",49),a.Mc(3),a.dc(),a.ec(4,"p",50),a.Mc(5),a.dc(),a.dc(),a.ec(6,"div",51),a.ec(7,"button",52),a.mc("click",(function(){a.Fc(c);var e=t.$implicit;return a.qc(2).closeNotification(e)})),a.ec(8,"mat-icon"),a.Mc(9,"close"),a.dc(),a.dc(),a.dc(),a.dc()}if(2&e){var r=t.$implicit;a.Kb(3),a.Nc(r.title),a.Kb(2),a.Nc(r.description)}}function S(e,t){if(1&e){var c=a.fc();a.ec(0,"div",39),a.ec(1,"div",40),a.ec(2,"div",41),a.ec(3,"span",42),a.Mc(4,"Notifications"),a.dc(),a.ec(5,"div"),a.ec(6,"div",43),a.mc("click",(function(){return a.Fc(c),a.qc().toggleNotifications()})),a.ec(7,"mat-icon"),a.Mc(8,"close"),a.dc(),a.dc(),a.dc(),a.dc(),a.dc(),a.ec(9,"div",44),a.ec(10,"div",45),a.Lc(11,q,10,2,"div",46),a.rc(12,"async"),a.dc(),a.dc(),a.dc()}if(2&e){var r=a.qc();a.Kb(11),a.wc("ngForOf",a.sc(12,1,r.state$).notifications)}}var z=function(e,t){return{"absolute shadow z-50":e,hidden:t}},T=["*"],D=function(){function e(e,t,c){this.store=e,this.notificationService=t,this.snackbar=c}return e.prototype.ngOnInit=function(){var e=this;this.state$=this.store.pipe(Object(r.g)("state")),this.state$.subscribe((function(t){e.notificationIds=t.notifications.map((function(e){return e.id}))}));var t,c,s=(void 0===(t=1e4)&&(t=0),void 0===c&&(c=n.a),(!Object(o.a)(t)||t<0)&&(t=0),c&&"function"==typeof c.schedule||(c=n.a),new i.a((function(e){return e.add(c.schedule(d,t,{subscriber:e,counter:0,period:t})),e})));this.loopInterval=s.pipe(function(e){return void 0===e&&(e=n.a),function(t){return Object(b.a)((function(){return t.pipe(Object(u.a)((function(t,c){var r=t.current;return{value:c,current:e.now(),last:r}}),{current:e.now(),value:void 0,last:void 0}),Object(p.a)((function(e){return new g(e.value,e.current-e.last)})))}))}}()).subscribe((function(t){e.fetchNotifications()}))},e.prototype.ngOnChanges=function(){},e.prototype.ngOnDestroy=function(){this.loopInterval.unsubscribe()},e.prototype.fetchNotifications=function(){var e=this;this.notificationService.getNotifications(this.notificationIds).subscribe((function(t){e.store.dispatch(s.a.storeNotifications({notifications:t}))}))},e.prototype.toggleMenu=function(e,t){this.store.dispatch(s.a.toggleMenu({menu:e,index:t}))},e.prototype.toggleSidebar=function(){this.store.dispatch(s.a.toggleSidebar())},e.prototype.toggleNotifications=function(){this.store.dispatch(s.a.toggleNotification())},e.prototype.closeNotification=function(e){var t=this;this.notificationService.deleteNotification(e.id).subscribe((function(c){t.snackbar.open(c.message,"OK",{duration:3e3}),t.notificationIds.splice(t.notificationIds.indexOf(e.id),1),t.store.dispatch(s.a.deleteNotification({id:e.id})),t.fetchNotifications()}))},e.\u0275fac=function(t){return new(t||e)(a.Yb(r.a),a.Yb(f),a.Yb(h.a))},e.\u0275cmp=a.Sb({type:e,selectors:[["app-layout"]],features:[a.Ib],ngContentSelectors:T,decls:41,vars:26,consts:[[1,"w-full","h-full","flex","flex-col"],[1,"absolute","w-full","left-0","top-0","z-50"],["height","1","class","example-margin absolute","mode","indeterminate",4,"ngIf"],[1,"flex","h-full","w-full"],["id","sidebar",1,"w-64","lg:static","lg:shadow-none","lg:block","lg:z-0","flex-shrink-0","h-full","bg-gray-200","p-2",3,"ngClass"],[1,"logo","flex","pb-4","justify-center"],[1,"brookr-font","text-4xl",2,"margin","0"],[1,"side-menu","flex","flex-col","text-gray-600"],["class","flex flex-col",3,"ngClass",4,"ngFor","ngForOf"],["style","background: rgba(51, 51, 51, 0.3)","class","overlay absolute top-0 lg:hidden w-full h-full z-40 bg-gray-100",3,"click",4,"ngIf"],["style","background: rgba(51, 51, 51, 0.3)","class","overlay absolute top-0 w-full h-full z-40 bg-gray-100",3,"click",4,"ngIf"],["id","container",1,"flex-auto","bg-gray-200","flex","flex-col"],["id","tool-bar",1,"h-16","flex-shrink-0","w-full","flex","items-center","px-2","shadow","lg:shadow-none"],[1,"left-panel","flex","flex-auto"],[1,"lg:hidden","hover:shadow","hover:bg-gray-100","hover:border-transparent","border","border-gray-400","cursor-pointer","user-profile","rounded-lg","flex","justify-between","items-center","p-2",3,"click"],[1,"right-panel","flex","-mx-1"],[1,"px-1"],[1,"hover:shadow","hover:bg-gray-100","hover:border-transparent","border","border-gray-400","cursor-pointer","user-profile","rounded-lg","flex","justify-between","items-center","p-2",3,"click"],["class","flex justify-center items-center absolute shadow bg-red-700 text-white w-6 h-6 rounded-full","style","margin: -20px -20px;",4,"ngIf"],[1,"hover:shadow","hover:bg-gray-100","hover:border-transparent","border","border-gray-400","cursor-pointer","user-profile","rounded-lg","flex","justify-between","items-center","p-2"],[1,"text-lg"],[1,"h-6","w-6","ml-2","bg-gray-700","rounded"],[1,"content","shadow-lg","lg:rounded-tl-lg","bg-white","p-4","lg:pt-6","lg:pl-6","flex-auto","overflow-y-auto"],["id","notifications","class","absolute z-50 right-0 w-1/2 lg:w-1/4 flex-shrink-0 h-full bg-gray-200 ng-star-inserted flex flex-col",4,"ngIf"],["height","1","mode","indeterminate",1,"example-margin","absolute"],[1,"flex","flex-col",3,"ngClass"],[4,"ngIf"],[1,"flex","hover:bg-gray-300","px-4","py-2","items-center","cursor-pointer","menu","rounded","overflow-hidden",3,"click"],[1,"menu-icon","w-5","h-5","pr-2","flex","items-center","justify-center"],[1,"menu-text","pl-2","flex","items-center","justify-between","flex-auto"],[1,"text","font-semibold","font-sans"],["class","caret flex items-center justify-center",4,"ngIf"],[1,"caret","flex","items-center","justify-center"],[1,"flex","hover:bg-gray-300","px-4","py-2","items-center","cursor-pointer","menu","rounded","overflow-hidden",3,"routerLink","click"],["class","cursor-pointer menu rounded overflow-hidden flex hover:bg-gray-300 px-4 py-2 items-center",3,"routerLink","click",4,"ngFor","ngForOf"],[1,"cursor-pointer","menu","rounded","overflow-hidden","flex","hover:bg-gray-300","px-4","py-2","items-center",3,"routerLink","click"],[1,"overlay","absolute","top-0","lg:hidden","w-full","h-full","z-40","bg-gray-100",2,"background","rgba(51, 51, 51, 0.3)",3,"click"],[1,"overlay","absolute","top-0","w-full","h-full","z-40","bg-gray-100",2,"background","rgba(51, 51, 51, 0.3)",3,"click"],[1,"flex","justify-center","items-center","absolute","shadow","bg-red-700","text-white","w-6","h-6","rounded-full",2,"margin","-20px -20px"],["id","notifications",1,"absolute","z-50","right-0","w-1/2","lg:w-1/4","flex-shrink-0","h-full","bg-gray-200","ng-star-inserted","flex","flex-col"],[1,"border-b","border-gray-400","flex","flex-col","flex","h-16"],[1,"flex","flex-shrink-0","justify-between","items-center","flex-auto","px-2"],[1,"text-xl","font-semibold",2,"margin","0"],[1,"border","border-gray-400","cursor-pointer","user-profile","rounded-lg","flex","justify-between","items-center","p-2",3,"click"],[1,"flex","flex-col","flex-auto","flex-wrap","overflow-y-auto"],[1,"h-full","p-2","flex-shrink-0"],["class","bg-white flex rounded shadow w-full p-2 mb-2",4,"ngFor","ngForOf"],[1,"bg-white","flex","rounded","shadow","w-full","p-2","mb-2"],[1,"notification-body","flex-auto","pr-2"],[1,"text-lg","text-gray-700","block","mb-2"],[1,"text-gray-600"],[1,"controls","justify-center"],[1,"rounded-full","bg-red-600","text-white","w-8","h-8","flex","justify-center","items-center","shadow",3,"click"]],template:function(e,t){1&e&&(a.vc(),a.ec(0,"div",0),a.ec(1,"div",1),a.Lc(2,y,1,0,"mat-progress-bar",2),a.rc(3,"async"),a.dc(),a.ec(4,"div",3),a.ec(5,"div",4),a.rc(6,"async"),a.rc(7,"async"),a.ec(8,"div",5),a.ec(9,"h2",6),a.Mc(10,"Brookr"),a.dc(),a.dc(),a.ec(11,"div",7),a.Lc(12,R,4,6,"div",8),a.rc(13,"async"),a.dc(),a.dc(),a.Lc(14,F,1,0,"div",9),a.rc(15,"async"),a.Lc(16,$,1,0,"div",10),a.rc(17,"async"),a.ec(18,"div",11),a.ec(19,"div",12),a.ec(20,"div",13),a.ec(21,"div"),a.ec(22,"div",14),a.mc("click",(function(){return t.toggleSidebar()})),a.ec(23,"mat-icon"),a.Mc(24,"menu"),a.dc(),a.dc(),a.dc(),a.dc(),a.ec(25,"div",15),a.ec(26,"div",16),a.ec(27,"div",17),a.mc("click",(function(){return t.toggleNotifications()})),a.ec(28,"mat-icon"),a.Mc(29,"notifications"),a.dc(),a.Lc(30,C,3,3,"span",18),a.rc(31,"async"),a.dc(),a.dc(),a.ec(32,"div",16),a.ec(33,"div",19),a.ec(34,"span",20),a.Mc(35,"Welcome"),a.dc(),a.Zb(36,"div",21),a.dc(),a.dc(),a.dc(),a.dc(),a.ec(37,"div",22),a.uc(38),a.dc(),a.dc(),a.Lc(39,S,13,3,"div",23),a.rc(40,"async"),a.dc(),a.dc()),2&e&&(a.Kb(2),a.wc("ngIf",a.sc(3,7,t.state$).asyncLoading),a.Kb(3),a.wc("ngClass",a.zc(23,z,a.sc(6,9,t.state$).sidebarToggled,!a.sc(7,11,t.state$).sidebarToggled)),a.Kb(7),a.wc("ngForOf",a.sc(13,13,t.state$).dashboardMenus),a.Kb(2),a.wc("ngIf",a.sc(15,15,t.state$).sidebarToggled),a.Kb(2),a.wc("ngIf",a.sc(17,17,t.state$).notificationsToggled),a.Kb(14),a.wc("ngIf",a.sc(31,19,t.state$).notifications.length>0),a.Kb(9),a.wc("ngIf",a.sc(40,21,t.state$).notificationsToggled))},directives:[v.l,v.j,v.k,x.a,m.a,w.d],pipes:[v.b],styles:["[_nghost-%COMP%]{width:100%}"]}),e}()}}]);