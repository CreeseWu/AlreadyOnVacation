"use strict";(self["webpackChunkdemo3"]=self["webpackChunkdemo3"]||[]).push([[5996],{5996:function(t,e,s){s.r(e),s.d(e,{default:function(){return V}});var n=s(66252),a={class:"w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto"},o={class:"text-center mb-10"},l=(0,n._)("h1",{class:"text-dark mb-3"},"登录",-1),r={class:"text-gray-400 fw-semobold fs-4"},i=(0,n.Uk)(" 还没有账户？ "),c=(0,n.Uk)(" 创建账户 "),m=(0,n._)("div",{class:"mb-10 bg-light-info p-8 rounded"},[(0,n._)("div",{class:"text-info"},"目前仅注册功能完成，无法登录、找回密码。")],-1),d={class:"fv-row mb-10"},u=(0,n._)("label",{class:"form-label fs-6 fw-bold text-dark"},"邮箱",-1),b={class:"fv-plugins-message-container"},f={class:"fv-help-block"},g={class:"fv-row mb-10"},p={class:"d-flex flex-stack mb-2"},v=(0,n._)("label",{class:"form-label fw-bold text-dark fs-6 mb-0"},"密码",-1),_=(0,n.Uk)(" 忘记密码？ "),h={class:"fv-plugins-message-container"},w={class:"fv-help-block"},x={class:"text-center"},k={type:"submit",ref:"submitButton",id:"kt_sign_in_submit",class:"btn btn-lg btn-primary w-100 mb-5"},y=(0,n._)("span",{class:"indicator-label"}," 登录 ",-1),E=(0,n._)("span",{class:"indicator-progress"},[(0,n.Uk)(" 登录中.... "),(0,n._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),S=[y,E],B=(0,n._)("div",{class:"text-center text-muted text-uppercase fw-bold mb-5"},"或",-1),L=(0,n._)("a",{href:"#",class:"btn btn-flex flex-center btn-light btn-lg w-100 mb-5"},[(0,n._)("img",{alt:"Logo",src:"media/svg/brand-logos/cuc.svg",class:"h-20px me-3"}),(0,n.Uk)(" 使用中传账户登录 ")],-1),U=(0,n._)("a",{href:"#",class:"btn btn-flex flex-center btn-light btn-lg w-100 mb-5"},[(0,n._)("img",{alt:"Logo",src:"media/svg/brand-logos/google-icon.svg",class:"h-20px me-3"}),(0,n.Uk)(" 使用谷歌账户登录 ")],-1),T=(0,n._)("a",{href:"#",class:"btn btn-flex flex-center btn-light btn-lg w-100"},[(0,n._)("img",{alt:"Logo",src:"media/svg/brand-logos/apple-black.svg",class:"h-20px me-3"}),(0,n.Uk)(" 使用苹果账户登录 ")],-1);function W(t,e,s,y,E,W){var D=(0,n.up)("router-link"),F=(0,n.up)("Field"),G=(0,n.up)("ErrorMessage"),A=(0,n.up)("Form");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(A,{class:"form w-100",id:"kt_login_signin_form",onSubmit:t.onSubmitLogin,"validation-schema":t.login},{default:(0,n.w5)((function(){return[(0,n._)("div",o,[l,(0,n._)("div",r,[i,(0,n.Wm)(D,{to:"/multi-step-sign-up",class:"link-primary fw-bold"},{default:(0,n.w5)((function(){return[c]})),_:1})])]),m,(0,n._)("div",d,[u,(0,n.Wm)(F,{class:"form-control form-control-lg form-control-solid",type:"text",name:"email",autocomplete:"off"}),(0,n._)("div",b,[(0,n._)("div",f,[(0,n.Wm)(G,{name:"email"})])])]),(0,n._)("div",g,[(0,n._)("div",p,[v,(0,n.Wm)(D,{to:"/password-reset",class:"link-primary fs-6 fw-bold"},{default:(0,n.w5)((function(){return[_]})),_:1})]),(0,n.Wm)(F,{class:"form-control form-control-lg form-control-solid",type:"password",name:"password",autocomplete:"off"}),(0,n._)("div",h,[(0,n._)("div",w,[(0,n.Wm)(G,{name:"password"})])])]),(0,n._)("div",x,[(0,n._)("button",k,S,512),B,L,U,T])]})),_:1},8,["onSubmit","validation-schema"])])}var D=s(70655),F=s(2262),G=s(12954),A=s(15758),C=s(33907),O=s(22201),R=s(48542),Z=s.n(R),I=s(74231),K=s(81354),M=s.n(K),N=(0,n.aZ)({name:"sign-in",components:{Field:G.gN,Form:G.l0,ErrorMessage:G.Bc},setup:function(){var t=this,e=(0,C.oR)(),s=(0,O.tv)(),n=(0,F.iH)(null),a=I.Ry().shape({email:I.Z_().email().required().label("Email"),password:I.Z_().min(4).required().label("Password")}),o=function(a){return(0,D.mG)(t,void 0,void 0,(function(){var t,o,l,r;return(0,D.Jh)(this,(function(i){switch(i.label){case 0:return e.dispatch(A.e.LOGOUT),n.value&&(n.value.disabled=!0,n.value.setAttribute("data-kt-indicator","on")),[4,e.dispatch(A.e.GET_SALT,{email:a.email})];case 1:return i.sent(),[4,e.dispatch(A.e.GEN_DERIVED_KEY)];case 2:return i.sent(),t=M().PBKDF2(a.password,e.state.AuthModule.enc_salt,{keySize:32,iterations:1e5}).toString(),e.commit(A.P.SET_DERIVED_KEY,t),[4,e.dispatch(A.e.LOGIN,a)];case 3:return i.sent(),o=Object.keys(e.getters.getErrors)[0],l=e.getters.getErrors[o],l?Z().fire({text:l[0],icon:"error",buttonsStyling:!1,confirmButtonText:"Try again!",customClass:{confirmButton:"btn fw-semobold btn-light-danger"}}):Z().fire({text:"登录成功！",icon:"success",buttonsStyling:!1,confirmButtonText:"进入",customClass:{confirmButton:"btn fw-semobold btn-light-primary"}}).then((function(){s.push({name:"dashboard"})})),null===(r=n.value)||void 0===r||r.removeAttribute("data-kt-indicator"),n.value.disabled=!1,[2]}}))}))};return{onSubmitLogin:o,login:a,submitButton:n}}}),P=s(83744);const q=(0,P.Z)(N,[["render",W]]);var V=q}}]);