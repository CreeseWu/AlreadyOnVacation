"use strict";(self["webpackChunkdemo3"]=self["webpackChunkdemo3"]||[]).push([[9023],{68932:function(e,l,a){a.d(l,{M:function(){return s},V:function(){return o}});var t=a(48246),n=a(15758),s=function(e,l){t.Z.dispatch(n.e.SET_BREADCRUMB_ACTION,{title:e,pageBreadcrumbPath:l})},o=function(e){t.Z.dispatch(n.e.SET_BREADCRUMB_ACTION,{title:e})}},29023:function(e,l,a){a.r(l),a.d(l,{default:function(){return Sl}});var t=a(66252),n={class:"d-flex flex-wrap flex-stack mb-6"},s=(0,t._)("h3",{class:"fw-semobold my-2 text-gray-400"},null,-1),o={class:"d-flex my-2"},r={class:"svg-icon svg-icon-2"},i={key:0,class:"spinner-border spinner-border-sm align-middle ms-2"},d=(0,t.Uk)(" 上传文件 "),c={class:"row g-6 g-xl-9 mb-6 mb-xl-9"},u=(0,t._)("div",{class:"col d-none d-xl-block"},null,-1),m=(0,t._)("div",{class:"col d-none d-xl-block"},null,-1),f={class:"row g-6 g-xl-9 mb-6 mb-xl-9"},_={class:"row g-6 g-xl-9 mb-6 mb-xl-9"},p=(0,t._)("div",{class:"col d-none d-xl-block"},null,-1),v=(0,t._)("div",{class:"col d-none d-xl-block"},null,-1),b=(0,t._)("div",{class:"col d-none d-xl-block"},null,-1);function g(e,l,a,g,k,h){var w=(0,t.up)("inline-svg"),y=(0,t.up)("KTFolder"),x=(0,t.up)("KTFile");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",n,[s,(0,t._)("div",o,[(0,t._)("input",{type:"file",id:"btn_file",style:{display:"none"},ref:"hiddenInput",onChange:l[0]||(l[0]=function(){for(var l=[],a=0;a<arguments.length;a++)l[a]=arguments[a];return e.uploadFile&&e.uploadFile.apply(e,l)})},null,544),(0,t._)("button",{type:"button",class:"btn btn-primary",onClick:l[1]||(l[1]=function(){for(var l=[],a=0;a<arguments.length;a++)l[a]=arguments[a];return e.selectFile&&e.selectFile.apply(e,l)}),ref:"uploadButton"},[(0,t._)("span",r,[e.uploading?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(w,{key:0,src:"media/icons/duotune/arrows/arr075.svg"}))]),e.uploading?((0,t.wg)(),(0,t.iD)("span",i)):(0,t.kq)("",!0),d],512)])]),(0,t._)("div",c,[(0,t.Wm)(y,{"folder-name":"Finance",files:"7"}),(0,t.Wm)(y,{"folder-name":"Customers",files:"3"}),(0,t.Wm)(y,{"folder-name":"CRM Project",files:"25"}),u,m]),(0,t._)("div",f,[(0,t.Wm)(x,{"file-title":"Project Reqs..","file-type":"pdf","created-at":"3 days ago"}),(0,t.Wm)(x,{"file-title":"CRM App Docs..","file-type":"doc","created-at":"3 days ago"}),(0,t.Wm)(x,{"file-title":"User CRUD Styles","file-type":"css","created-at":"4 days ago"}),(0,t.Wm)(x,{"file-title":"Metronic Logo","file-type":"ai","created-at":"5 days ago"}),(0,t.Wm)(x,{"file-title":"Orders backup","file-type":"sql","created-at":"1 week ago"})]),(0,t._)("div",_,[(0,t.Wm)(x,{"file-title":"UTAIR CRM API Co..","file-type":"xml","created-at":"2 weeks ago"}),(0,t.Wm)(x,{"file-title":"Tower Hill App..","file-type":"tif","created-at":"3 weeks ago"}),p,v,b])],64)}var k=a(70655),h=a(2262),w={class:"col-12 col-sm-12 col-xl"},y=(0,t.uE)('<div class="card h-100"><div class="card-body d-flex justify-content-center text-center flex-column p-8"><a href="#" class="text-gray-800 text-hover-primary d-flex flex-column"><div class="symbol symbol-75px mb-6"><img src="media/svg/files/folder-document.svg" alt=""></div><div class="fs-5 fw-bold mb-2">Finance</div></a><div class="fs-7 fw-semobold text-gray-400 mt-auto">7 files</div></div></div>',1),x=[y];function D(e,l,a,n,s,o){return(0,t.wg)(),(0,t.iD)("div",w,x)}var W=(0,t.aZ)({name:"folder-card",props:{folderName:String,files:String},components:{}}),R=a(83744);const S=(0,R.Z)(W,[["render",D]]);var T=S,U=a(3577),C={class:"col-12 col-sm-12 col-xl"},F={class:"card h-100"},L={class:"card-body d-flex justify-content-center text-center flex-column p-8","data-kt-menu-trigger":"click","data-kt-menu-overflow":"true","data-kt-menu-placement":"{default:'bottom', 'lg': 'right-start'}"},M={href:"#",class:"text-gray-800 text-hover-primary d-flex flex-column"},V={class:"symbol symbol-60px mb-6"},H=["src"],A={class:"fs-5 fw-bold mb-2"},Z={class:"fs-7 fw-semobold text-gray-400 mt-auto"};function B(e,l,a,n,s,o){var r=(0,t.up)("FileMenu");return(0,t.wg)(),(0,t.iD)("div",C,[(0,t._)("div",F,[(0,t._)("div",L,[(0,t._)("a",M,[(0,t._)("div",V,[(0,t._)("img",{src:"media/svg/files/".concat(e.fileType,".svg"),alt:""},null,8,H)]),(0,t._)("div",A,(0,U.zw)(e.fileTitle),1)]),(0,t._)("div",Z,(0,U.zw)(e.createdAt),1)]),(0,t.Wm)(r)])])}var E={class:"menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold py-4 fs-6 w-100px","data-kt-menu":"true"},I=(0,t._)("div",{class:"menu-item px-5"},[(0,t._)("a",{class:"menu-link px-5"}," 下载 ")],-1),j=(0,t._)("a",{class:"menu-link px-5"}," 分享 ",-1),q=[j],P=(0,t._)("div",{class:"menu-item px-5"},[(0,t._)("a",{class:"menu-link px-5"}," 删除 ")],-1),K=(0,t._)("div",{class:"menu-item px-5"},[(0,t._)("a",{class:"menu-link px-5"}," 属性 ")],-1);function O(e,l,a,n,s,o){var r=(0,t.up)("ShareFileModal");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",E,[I,(0,t._)("div",{class:"menu-item px-5","data-bs-toggle":"modal","data-bs-target":"#kt_modal_share_file",onClick:l[0]||(l[0]=function(l){return e.store.commit("SET_SHOW_LINK",!1)})},q),P,K]),(0,t.Wm)(r)],64)}var N=a(85845),z=a(33907),G=a(22201),Y=a(49963),J=function(e){return(0,t.dD)("data-v-0056cecc"),e=e(),(0,t.Cn)(),e},Q={class:"modal fade",id:"kt_modal_share_file",ref:"addCustomerModalRef",tabindex:"-1","aria-hidden":"true"},X={key:0,class:"modal-dialog modal-dialog-centered mw-650px"},$={class:"modal-content"},ee={class:"modal-header",id:"kt_modal_add_customer_header"},le=J((function(){return(0,t._)("h2",{class:"fw-bold"},"分享文件",-1)})),ae={id:"kt_modal_add_customer_close","data-bs-dismiss":"modal",class:"btn btn-icon btn-sm btn-active-icon-primary"},te={class:"svg-icon svg-icon-1"},ne={class:"modal-body py-10 px-lg-17"},se={class:"scroll-y me-n7 pe-7",id:"kt_modal_add_customer_scroll","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto","data-kt-scroll-dependencies":"#kt_modal_add_customer_header","data-kt-scroll-wrappers":"#kt_modal_add_customer_scroll","data-kt-scroll-offset":"300px"},oe={class:"fv-row mb-7"},re=J((function(){return(0,t._)("label",{class:"fs-6 fw-semobold mb-2"},"分享文件ID",-1)})),ie={class:"fv-row mb-7"},de=J((function(){return(0,t._)("label",{class:"fs-6 fw-semobold mb-2"},"分享文件名",-1)})),ce={class:"fv-row mb-7"},ue=J((function(){return(0,t._)("label",{class:"fs-6 fw-semobold mb-2"},[(0,t._)("span",null,"分享者")],-1)})),me={class:"fv-row mb-15"},fe=J((function(){return(0,t._)("label",{class:"fs-6 fw-semobold mb-2"},"分享信息",-1)})),_e={class:"fw-bold fs-3 rotate collapsible mb-7","data-bs-toggle":"collapse",href:"#kt_modal_add_customer_billing_info",role:"button","aria-expanded":"false","aria-controls":"kt_customer_view_details"},pe=(0,t.Uk)(" 分享权限设定 "),ve={class:"ms-2 rotate-180"},be={class:"svg-icon svg-icon-3"},ge={id:"kt_modal_add_customer_billing_info",class:"collapse show"},ke={class:"row g-9 mb-7"},he={class:"col-md-6 fv-row"},we=J((function(){return(0,t._)("label",{class:"fs-6 fw-semobold mb-2"},"过期时间（天）",-1)})),ye={class:"col-md-6 fv-row"},xe=J((function(){return(0,t._)("label",{class:"fs-6 fw-semobold mb-2"},"可下载次数",-1)})),De={class:"fv-row mb-7"},We={class:"d-flex flex-stack"},Re=J((function(){return(0,t._)("div",{class:"me-5"},[(0,t._)("label",{class:"fs-6 fw-semobold"},"允许签名校验？"),(0,t._)("div",{class:"fs-7 fw-semobold text-muted"}," 将共享您的RSA公钥，以便访问者进行签名校验 ")],-1)})),Se={class:"form-check form-switch form-check-custom form-check-solid"},Te=J((function(){return(0,t._)("span",{class:"form-check-label fw-semobold text-muted",for:"kt_modal_add_customer_billing"}," 是 ",-1)})),Ue={class:"fv-row mb-7"},Ce={class:"d-flex flex-stack"},Fe=J((function(){return(0,t._)("div",{class:"me-5"},[(0,t._)("label",{class:"fs-6 fw-semobold"},"允许用户下载解密后文件？"),(0,t._)("div",{class:"fs-7 fw-semobold text-muted"}," 若允许，该文件的加密密钥将会公开，但不会公开您的账户密钥。 ")],-1)})),Le={class:"form-check form-switch form-check-custom form-check-solid"},Me=J((function(){return(0,t._)("span",{class:"form-check-label fw-semobold text-muted",for:"kt_modal_add_customer_billing"}," 是 ",-1)})),Ve={class:"modal-footer flex-center"},He=["data-kt-indicator"],Ae={key:0,class:"indicator-label"},Ze=(0,t.Uk)(" 提交 "),Be={class:"svg-icon svg-icon-3 ms-2 me-0"},Ee={key:1,class:"indicator-progress"},Ie=(0,t.Uk)(" 分享中... "),je=J((function(){return(0,t._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"},null,-1)})),qe=[Ie,je];function Pe(e,l,a,n,s,o){var r=(0,t.up)("inline-svg"),i=(0,t.up)("el-input"),d=(0,t.up)("el-form-item"),c=(0,t.up)("el-input-number"),u=(0,t.up)("el-form"),m=(0,t.up)("ShowLinkModalContent");return(0,t.wg)(),(0,t.iD)("div",Q,[e.showLink?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",X,[(0,t._)("div",$,[(0,t._)("div",ee,[le,(0,t._)("div",ae,[(0,t._)("span",te,[(0,t.Wm)(r,{src:"media/icons/duotune/arrows/arr061.svg"})])])]),(0,t.Wm)(u,{onSubmit:l[8]||(l[8]=(0,Y.iM)((function(l){return e.submit()}),["prevent"])),model:e.formData,ref:"formRef"},{default:(0,t.w5)((function(){return[(0,t._)("div",ne,[(0,t._)("div",se,[(0,t._)("div",oe,[re,(0,t.Wm)(d,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(i,{modelValue:e.formData.share_file_id,"onUpdate:modelValue":l[0]||(l[0]=function(l){return e.formData.share_file_id=l}),type:"text",placeholder:"",readonly:""},null,8,["modelValue"])]})),_:1})]),(0,t._)("div",ie,[de,(0,t.Wm)(d,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(i,{modelValue:e.formData.share_filename,"onUpdate:modelValue":l[1]||(l[1]=function(l){return e.formData.share_filename=l}),type:"text",placeholder:"",readonly:""},null,8,["modelValue"])]})),_:1})]),(0,t._)("div",ce,[ue,(0,t.Wm)(d,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(i,{modelValue:e.formData.share_user,"onUpdate:modelValue":l[2]||(l[2]=function(l){return e.formData.share_user=l}),readonly:""},null,8,["modelValue"])]})),_:1})]),(0,t._)("div",me,[fe,(0,t.Wm)(d,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(i,{modelValue:e.formData.description,"onUpdate:modelValue":l[3]||(l[3]=function(l){return e.formData.description=l}),type:"textarea",placeholder:"该信息将显示于分享页面"},null,8,["modelValue"])]})),_:1})]),(0,t._)("div",_e,[pe,(0,t._)("span",ve,[(0,t._)("span",be,[(0,t.Wm)(r,{src:"media/icons/duotune/arrows/arr072.svg"})])])]),(0,t._)("div",ge,[(0,t._)("div",ke,[(0,t._)("div",he,[we,(0,t.Wm)(d,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(c,{modelValue:e.formData.expired_days,"onUpdate:modelValue":l[4]||(l[4]=function(l){return e.formData.expired_days=l}),min:"1"},null,8,["modelValue"])]})),_:1})]),(0,t._)("div",ye,[xe,(0,t.Wm)(d,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(c,{modelValue:e.formData.expired_download_count,"onUpdate:modelValue":l[5]||(l[5]=function(l){return e.formData.expired_download_count=l}),min:"1"},null,8,["modelValue"])]})),_:1})])]),(0,t._)("div",De,[(0,t._)("div",We,[Re,(0,t._)("label",Se,[(0,t.wy)((0,t._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":l[6]||(l[6]=function(l){return e.formData.share_rsa_pk=l}),id:"kt_modal_add_customer_billing",checked:"checked"},null,512),[[Y.e8,e.formData.share_rsa_pk]]),Te])])]),(0,t._)("div",Ue,[(0,t._)("div",Ce,[Fe,(0,t._)("label",Le,[(0,t.wy)((0,t._)("input",{class:"form-check-input",name:"billing",type:"checkbox","onUpdate:modelValue":l[7]||(l[7]=function(l){return e.formData.share_enc_key=l}),id:"kt_modal_add_customer_billing",checked:"checked"},null,512),[[Y.e8,e.formData.share_enc_key]]),Me])])])])])]),(0,t._)("div",Ve,[(0,t._)("button",{"data-kt-indicator":e.loading?"on":null,class:"btn btn-lg btn-primary",type:"submit"},[e.loading?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("span",Ae,[Ze,(0,t._)("span",Be,[(0,t.Wm)(r,{src:"media/icons/duotune/arrows/arr064.svg"})])])),e.loading?((0,t.wg)(),(0,t.iD)("span",Ee,qe)):(0,t.kq)("",!0)],8,He)])]})),_:1},8,["model"])])])),e.showLink?((0,t.wg)(),(0,t.j4)(m,{key:1})):(0,t.kq)("",!0)],512)}var Ke=a(78764),Oe=a.n(Ke),Ne={class:"modal-dialog modal-dialog-centered mw-800px"},ze={class:"modal-content"},Ge={class:"modal-header pb-0 border-0 justify-content-end"},Ye={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},Je={class:"svg-icon svg-icon-1"},Qe={class:"modal-body scroll-y pt-0 pb-15"},Xe={class:"mw-lg-600px mx-auto"},$e=(0,t._)("div",{class:"mb-13 text-center"},[(0,t._)("h1",{class:"mb-3"},"分享成功"),(0,t._)("div",{class:"text-gray-400 fw-semobold fs-5"},[(0,t.Uk)(" 关于分享文件的技术细节，可以参阅我们的 "),(0,t._)("a",{href:"#",class:"link-primary fw-bold"},"实验报告"),(0,t.Uk)(". ")])],-1),el={class:"mb-10"},ll=(0,t._)("h4",{class:"fs-5 fw-semobold text-gray-800"}," 把下面的链接分享给朋友： ",-1),al={class:"d-flex"},tl={ref:"inputRef",id:"kt_share_earn_link_input",type:"text",class:"form-control form-control-solid me-3 flex-grow-1",name:"search",value:"https://pan.neixiangde.ren/#/shared"},nl={ref:"copyButtonRef",id:"kt_share_earn_link_copy_button",class:"btn btn-light fw-bold flex-shrink-0","data-clipboard-target":"#kt_share_earn_link_input"},sl=(0,t.uE)('<div class="d-flex"><a href="#" class="btn btn-light-primary w-100"><img alt="Logo" src="media/svg/brand-logos/google-icon.svg" class="h-15px me-3"> Google </a><a href="#" class="btn btn-icon btn-light-primary w-100 mx-6"><img alt="Logo" src="media/svg/brand-logos/facebook-2.svg" class="h-20px me-3"> Facebook </a><a href="#" class="btn btn-icon btn-light-primary w-100"><img alt="Logo" src="media/svg/brand-logos/twitter.svg" class="h-20px me-3"> Twitter </a></div>',1);function ol(e,l,a,n,s,o){var r=(0,t.up)("inline-svg");return(0,t.wg)(),(0,t.iD)("div",Ne,[(0,t._)("div",ze,[(0,t._)("div",Ge,[(0,t._)("div",Ye,[(0,t._)("span",Je,[(0,t.Wm)(r,{src:"media/icons/duotune/arrows/arr061.svg"})])])]),(0,t._)("div",Qe,[(0,t._)("div",Xe,[$e,(0,t._)("div",el,[ll,(0,t._)("div",al,[(0,t._)("input",tl,null,512),(0,t._)("button",nl," 复制链接 ",512)])]),sl])])])])}var rl=a(42152),il=a.n(rl),dl=(0,t.aZ)({name:"show-link-modal-content",components:{},setup:function(){var e=(0,h.iH)(null),l=(0,h.iH)(null);return(0,t.bv)((function(){var a=new(il())(e.value);a.on("success",(function(a){var t,n,s,o=null===(t=e.value)||void 0===t?void 0:t.innerHTML;null===(n=l.value)||void 0===n||n.classList.add("bg-success"),null===(s=l.value)||void 0===s||s.classList.add("text-inverse-success"),e.value&&(e.value.innerHTML="已复制"),setTimeout((function(){var a,t;e.value&&o&&(e.value.innerHTML=o),null===(a=l.value)||void 0===a||a.classList.remove("bg-success"),null===(t=l.value)||void 0===t||t.classList.remove("text-inverse-success")}),3e3),a.clearSelection()}))})),{copyButtonRef:e,inputRef:l}}});const cl=(0,R.Z)(dl,[["render",ol]]);var ul=cl,ml=(0,t.aZ)({name:"share-file-modal",components:{ShowLinkModalContent:ul},setup:function(){var e=(0,z.oR)(),l=(0,h.iH)(null),a=(0,h.iH)(null),n=(0,h.iH)(!1),s=(0,h.iH)({share_file_id:"1",share_filename:"test",share_user:"sean@dellito.com",description:"",expired_days:1,expired_download_count:1,share_rsa_pk:!0,share_enc_key:!0}),o=(0,t.Fl)((function(){return Date.now()+864e5*s.value.expired_days})),r=(0,t.Fl)((function(){return e.state.ShareFileModule.showLink})),i=function(){l.value&&(n.value=!0,console.log(s.value),setTimeout((function(){n.value=!1,Oe().fire({text:"分享成功！",icon:"success",buttonsStyling:!1,confirmButtonText:"查看链接",customClass:{confirmButton:"btn btn-primary"}}).then((function(){e.commit("SET_SHOW_LINK",!0)}))}),2e3))};return{formData:s,submit:i,formRef:l,loading:n,addCustomerModalRef:a,showLink:r,expired_days:o}}});const fl=(0,R.Z)(ml,[["render",Pe],["__scopeId","data-v-0056cecc"]]);var _l=fl,pl=(0,t.aZ)({name:"file-menu",components:{ShareFileModal:_l},setup:function(){(0,G.tv)(),(0,N.QT)();var e=(0,z.oR)();return{store:e}}});const vl=(0,R.Z)(pl,[["render",O]]);var bl=vl,gl=(0,t.aZ)({name:"file-card",props:{fileTitle:String,createdAt:String,fileType:String},components:{FileMenu:bl}});const kl=(0,R.Z)(gl,[["render",B]]);var hl=kl,wl=a(68932),yl=a(81354),xl=a.n(yl),Dl=a(15758),Wl=(0,t.aZ)({name:"profile-documents",components:{KTFolder:T,KTFile:hl},setup:function(){(0,t.bv)((function(){(0,wl.M)("Documents",["Pages","Profile"])}));var e=(0,h.iH)(null),l=(0,h.iH)(null),a=(0,z.oR)(),n=(0,h.iH)(!1),s=function(){e.value&&e.value.click()},o=function(e){if(l.value){if(null!=e.target){n.value=!0,l.value.disabled=!0;var t=e.target["files"][0],s=new FileReader;s.readAsDataURL(t),s.onload=function(){return(0,k.mG)(this,void 0,void 0,(function(){var e,s,o;return(0,k.Jh)(this,(function(r){switch(r.label){case 0:return e=Array.from(crypto.getRandomValues(new Uint8Array(16))).map((function(e){return e.toString(16)})).join(""),e=xl().MD5(e).toString(),"string"!==typeof this.result?[3,2]:(s=xl().enc.Utf8.parse(this.result),o=xl().AES.encrypt(s,e,{mode:xl().mode.ECB,padding:xl().pad.Pkcs7}).toString(),[4,a.dispatch(Dl.e.UPLOAD_FILE,{name:t.name,type:t.type,encrypted:o,file_enc_key:e})]);case 1:r.sent(),n.value=!1,l.value&&(l.value.disabled=!1),r.label=2;case 2:return[2]}}))}))}}}else console.error("uploadButton is null")};return{hiddenInput:e,selectFile:s,uploadFile:o,uploading:n,uploadButton:l}}});const Rl=(0,R.Z)(Wl,[["render",g]]);var Sl=Rl}}]);