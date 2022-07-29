"use strict";(self["webpackChunkdemo3"]=self["webpackChunkdemo3"]||[]).push([[2242],{22242:function(t,e,s){s.r(e),s.d(e,{default:function(){return j}});var n=s(66252),a={class:"w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto"},l={class:"text-center mb-10"},o=(0,n._)("h1",{class:"text-dark mb-3"},"登录",-1),r={class:"text-gray-400 fw-semobold fs-4"},i=(0,n.Uk)(" 还没有账户？ "),c=(0,n.Uk)(" 创建账户 "),m=(0,n._)("div",{class:"mb-10 bg-light-info p-8 rounded"},[(0,n._)("div",{class:"text-info"}," 前端基本完成，任意账号密码登录即可查看界面。 ")],-1),d={class:"fv-row mb-10"},u=(0,n._)("label",{class:"form-label fs-6 fw-bold text-dark"},"邮箱",-1),b={class:"fv-plugins-message-container"},f={class:"fv-help-block"},g={class:"fv-row mb-10"},p={class:"d-flex flex-stack mb-2"},v=(0,n._)("label",{class:"form-label fw-bold text-dark fs-6 mb-0"},"密码",-1),_=(0,n.Uk)(" 忘记密码？ "),h={class:"fv-plugins-message-container"},w={class:"fv-help-block"},x={class:"text-center"},k={type:"submit",ref:"submitButton",id:"kt_sign_in_submit",class:"btn btn-lg btn-primary w-100 mb-5"},y=(0,n._)("span",{class:"indicator-label"}," 登录 ",-1),E=(0,n._)("span",{class:"indicator-progress"},[(0,n.Uk)(" 登录中.... "),(0,n._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),L=[y,E],U=(0,n._)("div",{class:"text-center text-muted text-uppercase fw-bold mb-5"},"或",-1),B=(0,n._)("a",{href:"#",class:"btn btn-flex flex-center btn-light btn-lg w-100 mb-5"},[(0,n._)("img",{alt:"Logo",src:"media/svg/brand-logos/cuc.svg",class:"h-20px me-3"}),(0,n.Uk)(" 使用中传账户登录 ")],-1),S=(0,n._)("a",{href:"#",class:"btn btn-flex flex-center btn-light btn-lg w-100 mb-5"},[(0,n._)("img",{alt:"Logo",src:"media/svg/brand-logos/google-icon.svg",class:"h-20px me-3"}),(0,n.Uk)(" 使用谷歌账户登录 ")],-1),W=(0,n._)("a",{href:"#",class:"btn btn-flex flex-center btn-light btn-lg w-100"},[(0,n._)("img",{alt:"Logo",src:"media/svg/brand-logos/apple-black.svg",class:"h-20px me-3"}),(0,n.Uk)(" 使用苹果账户登录 ")],-1);function T(t,e,s,y,E,T){var G=(0,n.up)("router-link"),C=(0,n.up)("Field"),F=(0,n.up)("ErrorMessage"),O=(0,n.up)("Form");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(O,{class:"form w-100",id:"kt_login_signin_form",onSubmit:t.onSubmitLogin,"validation-schema":t.login},{default:(0,n.w5)((function(){return[(0,n._)("div",l,[o,(0,n._)("div",r,[i,(0,n.Wm)(G,{to:"/multi-step-sign-up",class:"link-primary fw-bold"},{default:(0,n.w5)((function(){return[c]})),_:1})])]),m,(0,n._)("div",d,[u,(0,n.Wm)(C,{class:"form-control form-control-lg form-control-solid",type:"text",name:"email",autocomplete:"off"}),(0,n._)("div",b,[(0,n._)("div",f,[(0,n.Wm)(F,{name:"email"})])])]),(0,n._)("div",g,[(0,n._)("div",p,[v,(0,n.Wm)(G,{to:"/password-reset",class:"link-primary fs-6 fw-bold"},{default:(0,n.w5)((function(){return[_]})),_:1})]),(0,n.Wm)(C,{class:"form-control form-control-lg form-control-solid",type:"password",name:"password",autocomplete:"off"}),(0,n._)("div",h,[(0,n._)("div",w,[(0,n.Wm)(F,{name:"password"})])])]),(0,n._)("div",x,[(0,n._)("button",k,L,512),U,B,S,W])]})),_:1},8,["onSubmit","validation-schema"])])}var G=s(70655),C=s(2262),F=s(12954),O=s(15758),Z=s(33907),A=s(22201),D=s(48542),N=s.n(D),R=s(74231),q=(0,n.aZ)({name:"sign-in",components:{Field:F.gN,Form:F.l0,ErrorMessage:F.Bc},setup:function(){var t=this,e=(0,Z.oR)(),s=(0,A.tv)(),n=(0,C.iH)(null),a=R.Ry().shape({email:R.Z_().email().required().label("Email"),password:R.Z_().min(4).required().label("Password")}),l=function(a){return(0,G.mG)(t,void 0,void 0,(function(){var t,l,o;return(0,G.Jh)(this,(function(r){switch(r.label){case 0:return e.dispatch(O.e.LOGOUT),n.value&&(n.value.disabled=!0,n.value.setAttribute("data-kt-indicator","on")),[4,e.dispatch(O.e.GET_SALT,{email:a.email})];case 1:return r.sent(),[4,e.dispatch(O.e.GEN_DERIVED_KEY,a)];case 2:return r.sent(),[4,e.dispatch(O.e.LOGIN,a)];case 3:return r.sent(),t=Object.keys(e.getters.getErrors)[0],l=e.getters.getErrors[t],l?N().fire({text:l[0],icon:"error",buttonsStyling:!1,confirmButtonText:"Try again!",customClass:{confirmButton:"btn fw-semobold btn-light-danger"}}):N().fire({text:"登录成功！",icon:"success",buttonsStyling:!1,confirmButtonText:"进入",customClass:{confirmButton:"btn fw-semobold btn-light-primary"}}).then((function(){s.push({name:"dashboard"})})),null===(o=n.value)||void 0===o||o.removeAttribute("data-kt-indicator"),n.value.disabled=!1,[2]}}))}))};return{onSubmitLogin:l,login:a,submitButton:n}}}),I=s(83744);const M=(0,I.Z)(q,[["render",T]]);var j=M}}]);