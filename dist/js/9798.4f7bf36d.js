"use strict";(self["webpackChunkdemo3"]=self["webpackChunkdemo3"]||[]).push([[9798,707],{68932:function(t,e,n){n.d(e,{M:function(){return r},V:function(){return u}});var i=n(48246),o=n(15758),r=function(t,e){i.Z.dispatch(o.e.SET_BREADCRUMB_ACTION,{title:t,pageBreadcrumbPath:e})},u=function(t){i.Z.dispatch(o.e.SET_BREADCRUMB_ACTION,{title:t})}},5080:function(t,e,n){n.d(e,{$Q:function(){return c},BK:function(){return f},Df:function(){return y},F9:function(){return p},Fh:function(){return l},Gv:function(){return _},K1:function(){return Z},Lj:function(){return d},NK:function(){return u},Yn:function(){return v},_T:function(){return A},az:function(){return C},jH:function(){return a},o$:function(){return s},o4:function(){return h},pD:function(){return D},vc:function(){return r},vj:function(){return S},xV:function(){return g},zK:function(){return b}});var i=n(66252),o=n(48246),r=(0,i.Fl)((function(){return o.Z.getters.layoutConfig()})),u=(0,i.Fl)((function(){return o.Z.getters.layoutConfig("sidebar.display")})),a=(0,i.Fl)((function(){return"fluid"===o.Z.getters.layoutConfig("footer.width")})),l=(0,i.Fl)((function(){return"fluid"===o.Z.getters.layoutConfig("header.width")})),d=(0,i.Fl)((function(){return o.Z.getters.layoutConfig("header.left")})),f=(0,i.Fl)((function(){return o.Z.getters.layoutConfig("header.fixed.desktop")})),c=(0,i.Fl)((function(){return o.Z.getters.layoutConfig("header.fixed.tabletAndMobile")})),s=(0,i.Fl)((function(){return!0===o.Z.getters.layoutConfig("aside.display")})),g=((0,i.Fl)((function(){return"fluid"===o.Z.getters.layoutConfig("toolbar.width")})),(0,i.Fl)((function(){return o.Z.getters.layoutConfig("toolbar.display")}))),b=(0,i.Fl)((function(){return o.Z.getters.layoutConfig("loader.display")})),A=(0,i.Fl)((function(){return"fluid"===o.Z.getters.layoutConfig("content.width")})),D=(0,i.Fl)((function(){return""+o.Z.getters.layoutConfig("loader.logo")})),Z=(0,i.Fl)((function(){return!!o.Z.getters.layoutConfig("aside.display")})),p=(0,i.Fl)((function(){return o.Z.getters.layoutConfig("aside.theme")})),C=(0,i.Fl)((function(){return o.Z.getters.layoutConfig("toolbar.display")})),h=(0,i.Fl)((function(){return o.Z.getters.layoutConfig("aside.menuIcon")})),y=(0,i.Fl)((function(){return o.Z.getters.layoutConfig("main.logo.light")})),S=(0,i.Fl)((function(){return o.Z.getters.layoutConfig("main.logo.dark")})),v=(0,i.Fl)((function(){return o.Z.getters.layoutConfig("header.menuIcon")})),_=(0,i.Fl)((function(){return o.Z.getters.layoutConfig("illustrations.set")}))},65962:function(t,e,n){var i=n(31528),o=n.n(i),r=n(15758),u=n(48246),a=n(5080),l=function(){function t(){}return t.init=function(){t.initLayout(),t.initHeader(),t.initToolbar(),t.initAside(),t.initSidebar(),t.initFooter()},t.initLayout=function(){u.Z.dispatch(r.e.ADD_BODY_ATTRIBUTE,{qulifiedName:"id",value:"kt_body"}),o().get(a.vc.value,"loader.display")&&(u.Z.dispatch(r.e.ADD_BODY_CLASSNAME,"page-loading-enabled"),u.Z.dispatch(r.e.ADD_BODY_CLASSNAME,"page-loading"))},t.initHeader=function(){o().get(a.vc.value,"header.fixed.desktop")&&u.Z.dispatch(r.e.ADD_BODY_CLASSNAME,"header-fixed"),o().get(a.vc.value,"header.fixed.tabletAndMobile")&&u.Z.dispatch(r.e.ADD_BODY_CLASSNAME,"header-tablet-and-mobile-fixed")},t.initToolbar=function(){o().get(a.vc.value,"toolbar.display")&&(u.Z.dispatch(r.e.ADD_BODY_CLASSNAME,"toolbar-enabled"),o().get(a.vc.value,"toolbar.fixed")&&u.Z.dispatch(r.e.ADD_BODY_CLASSNAME,"toolbar-fixed"),u.Z.dispatch(r.e.ADD_BODY_CLASSNAME,"toolbar-tablet-and-mobile-fixed"))},t.initAside=function(){o().get(a.vc.value,"aside.display")&&u.Z.dispatch(r.e.ADD_BODY_CLASSNAME,"aside-enabled")},t.initSidebar=function(){o().get(a.vc.value,"sidebar.display")&&u.Z.dispatch(r.e.ADD_BODY_CLASSNAME,"sidebar-enabled")},t.initFooter=function(){"fixed"===o().get(a.vc.value,"footer.width")&&u.Z.dispatch(r.e.ADD_BODY_CLASSNAME,"footer-fixed")},t.enableSidebar=function(){a.vc.value.sidebar.display=!0,u.Z.dispatch(r.e.ADD_BODY_CLASSNAME,"sidebar-enabled")},t.disableSidebar=function(){a.vc.value.sidebar.display=!1,u.Z.dispatch(r.e.REMOVE_BODY_CLASSNAME,"sidebar-enabled")},t}();e["Z"]=l},82687:function(t,e,n){n.r(e),n.d(e,{default:function(){return s}});var i=n(66252);function o(t,e,n,o,r,u){var a=(0,i.up)("Documents");return(0,i.wg)(),(0,i.j4)(a)}var r=n(65962),u=n(57333),a=n(68932),l=n(33907),d=(0,i.aZ)({name:"main-dashboard",components:{Documents:u["default"]},setup:function(){(0,l.oR)();return(0,i.bv)((function(){(0,a.V)("我的文件"),localStorage.getItem("config")||r.Z.enableSidebar()})),(0,i.Ah)((function(){localStorage.getItem("config")||r.Z.disableSidebar()})),{}}}),f=n(83744);const c=(0,f.Z)(d,[["render",o]]);var s=c}}]);