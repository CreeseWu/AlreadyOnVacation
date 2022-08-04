"use strict";(self["webpackChunkdemo3"]=self["webpackChunkdemo3"]||[]).push([[2922],{42922:function(e,t,n){n.r(t),n.d(t,{default:function(){return mt}});var l=n(66252),a=n(3577),o={class:"d-flex flex-wrap flex-stack mb-6"},s=(0,l._)("h3",{class:"fw-semobold my-2 text-gray-400"},null,-1),r={class:"d-flex my-2"},i={class:"svg-icon svg-icon-2"},c={key:0,class:"spinner-border spinner-border-sm align-middle ms-2"};function d(e,t,n,d,u,m){var f=(0,l.up)("inline-svg"),_=(0,l.up)("KTFile");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",o,[s,(0,l._)("div",r,[(0,l._)("input",{type:"file",id:"btn_file",style:{display:"none"},ref:"hiddenInput",onChange:t[0]||(t[0]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.uploadFile&&e.uploadFile.apply(e,t)})},null,544),(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.selectFile&&e.selectFile.apply(e,t)}),ref:"uploadButton"},[(0,l._)("span",i,[e.uploading?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(f,{key:0,src:"media/icons/duotune/arrows/arr075.svg"}))]),e.uploading?((0,l.wg)(),(0,l.iD)("span",c)):(0,l.kq)("",!0),(0,l.Uk)(" "+(0,a.zw)(e.update_state),1)],512)])]),((0,l.wg)(),(0,l.iD)("div",{key:e.file_list,class:"row g-6 g-xl-9 mb-6 mb-xl-9"},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.file_list,(function(e,t){return(0,l.wg)(),(0,l.j4)(_,{"file-title":e.name,"file-type":"upload",key:t,"created-at":e.size_mb,fileID:e.file_id},null,8,["file-title","created-at","fileID"])})),128))]))],64)}var u=n(70655),m=n(2262),f={class:"col-12 col-sm-12 col-xl"},_={class:"card-body d-flex justify-content-center text-center flex-column p-8","data-kt-menu-trigger":"click","data-kt-menu-overflow":"true","data-kt-menu-placement":"{default:'bottom', 'lg': 'right-start'}"},p={href:"#",class:"text-gray-800 text-hover-primary d-flex flex-column"},v={class:"symbol symbol-60px mb-6"},g=["src"],b={class:"fs-5 fw-bold mb-2"},h={class:"fs-7 fw-semobold text-gray-400 mt-auto"};function k(e,t,n,o,s,r){var i=(0,l.up)("FileMenu");return(0,l.wg)(),(0,l.iD)("div",f,[(0,l._)("div",{class:"card h-100",onClick:t[0]||(t[0]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.setOpFile&&e.setOpFile.apply(e,t)})},[(0,l._)("div",_,[(0,l._)("a",p,[(0,l._)("div",v,[(0,l._)("img",{src:"media/svg/files/".concat(e.fileType,".svg"),alt:""},null,8,g)]),(0,l._)("div",b,(0,a.zw)(e.fileTitle),1)]),(0,l._)("div",h,(0,a.zw)(e.createdAt),1)]),(0,l.Wm)(i)])])}var w={class:"menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold py-4 fs-6 w-100px","data-kt-menu":"true"},y=(0,l._)("a",{class:"menu-link px-5"}," 下载 ",-1),x=[y],D=(0,l._)("a",{class:"menu-link px-5"}," 分享 ",-1),F=[D],S=(0,l._)("div",{class:"menu-item px-5"},[(0,l._)("a",{class:"menu-link px-5"}," 删除 ")],-1),E=(0,l._)("div",{class:"menu-item px-5"},[(0,l._)("a",{class:"menu-link px-5"}," 属性 ")],-1);function L(e,t,n,a,o,s){var r=(0,l.up)("ShareFileModal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",w,[(0,l._)("div",{class:"menu-item px-5",onClick:t[0]||(t[0]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.downloadFile&&e.downloadFile.apply(e,t)})},x),(0,l._)("div",{class:"menu-item px-5","data-bs-toggle":"modal","data-bs-target":"#kt_modal_share_file",onClick:t[1]||(t[1]=function(t){return e.store.commit("SET_SHOW_LINK",!1)})},F),S,E]),(0,l.Wm)(r)],64)}var M=n(85845),U=n(33907),A=n(22201),T=n(15758),C=n(49963),W=function(e){return(0,l.dD)("data-v-7062fd90"),e=e(),(0,l.Cn)(),e},R={key:0,class:"modal-dialog modal-dialog-centered mw-650px"},V={class:"modal-content"},H={class:"modal-header",id:"kt_modal_add_customer_header"},B=W((function(){return(0,l._)("h2",{class:"fw-bold"},"分享文件",-1)})),I={id:"kt_modal_add_customer_close","data-bs-dismiss":"modal",class:"btn btn-icon btn-sm btn-active-icon-primary"},O={class:"svg-icon svg-icon-1"},j={class:"modal-body py-10 px-lg-17"},Z={class:"scroll-y me-n7 pe-7",id:"kt_modal_add_customer_scroll","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto","data-kt-scroll-dependencies":"#kt_modal_add_customer_header","data-kt-scroll-wrappers":"#kt_modal_add_customer_scroll","data-kt-scroll-offset":"300px"},K={class:"fv-row mb-7"},P=W((function(){return(0,l._)("label",{class:"fs-6 fw-semobold mb-2"},"分享文件ID",-1)})),z={class:"fv-row mb-7"},q=W((function(){return(0,l._)("label",{class:"fs-6 fw-semobold mb-2"},"分享文件名",-1)})),G={class:"fv-row mb-7"},N=W((function(){return(0,l._)("label",{class:"fs-6 fw-semobold mb-2"},[(0,l._)("span",null,"分享者")],-1)})),J={class:"fv-row mb-15"},Y=W((function(){return(0,l._)("label",{class:"fs-6 fw-semobold mb-2"},"分享信息",-1)})),Q={class:"fw-bold fs-3 rotate collapsible mb-7","data-bs-toggle":"collapse",href:"#kt_modal_add_customer_billing_info",role:"button","aria-expanded":"false","aria-controls":"kt_customer_view_details"},X=(0,l.Uk)(" 分享权限设定 "),$={class:"ms-2 rotate-180"},ee={class:"svg-icon svg-icon-3"},te={id:"kt_modal_add_customer_billing_info",class:"collapse show"},ne={class:"row g-9 mb-7"},le={class:"col-md-6 fv-row"},ae=W((function(){return(0,l._)("label",{class:"fs-6 fw-semobold mb-2"},"过期时间（天）",-1)})),oe={class:"col-md-6 fv-row"},se=W((function(){return(0,l._)("label",{class:"fs-6 fw-semobold mb-2"},"可下载次数",-1)})),re={class:"fv-row mb-7"},ie={class:"d-flex flex-stack"},ce=W((function(){return(0,l._)("div",{class:"me-5"},[(0,l._)("label",{class:"fs-6 fw-semobold"},"允许签名校验？"),(0,l._)("div",{class:"fs-7 fw-semobold text-muted"}," 将共享您的RSA公钥，以便访问者进行签名校验 ")],-1)})),de={class:"form-check form-switch form-check-custom form-check-solid"},ue=W((function(){return(0,l._)("span",{class:"form-check-label fw-semobold text-muted",for:"kt_modal_add_customer_billing"}," 是 ",-1)})),me={class:"fv-row mb-7"},fe={class:"d-flex flex-stack"},_e=W((function(){return(0,l._)("div",{class:"me-5"},[(0,l._)("label",{class:"fs-6 fw-semobold"},"允许用户下载解密后文件？"),(0,l._)("div",{class:"fs-7 fw-semobold text-muted"}," 若允许，该文件的加密密钥将会公开，但不会公开您的账户密钥。 ")],-1)})),pe={class:"form-check form-switch form-check-custom form-check-solid"},ve=W((function(){return(0,l._)("span",{class:"form-check-label fw-semobold text-muted",for:"kt_modal_add_customer_billing"}," 是 ",-1)})),ge={class:"modal-footer flex-center"},be=["data-kt-indicator"],he={key:0,class:"indicator-label"},ke=(0,l.Uk)(" 提交 "),we={class:"svg-icon svg-icon-3 ms-2 me-0"},ye={key:1,class:"indicator-progress"},xe=(0,l.Uk)(" 分享中... "),De=W((function(){return(0,l._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"},null,-1)})),Fe=[xe,De];function Se(e,t,n,a,o,s){var r=(0,l.up)("inline-svg"),i=(0,l.up)("el-input"),c=(0,l.up)("el-form-item"),d=(0,l.up)("el-input-number"),u=(0,l.up)("el-form"),m=(0,l.up)("ShowLinkModalContent");return(0,l.wg)(),(0,l.iD)("div",{class:"modal fade",id:"kt_modal_share_file",ref:"addCustomerModalRef",tabindex:"-1","aria-hidden":"true",onClick:t[9]||(t[9]=(0,C.iM)((function(){}),["stop"]))},[e.showLink?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",R,[(0,l._)("div",V,[(0,l._)("div",H,[B,(0,l._)("div",I,[(0,l._)("span",O,[(0,l.Wm)(r,{src:"media/icons/duotune/arrows/arr061.svg"})])])]),(0,l.Wm)(u,{onSubmit:t[8]||(t[8]=(0,C.iM)((function(t){return e.submit()}),["prevent"])),model:e.formData,ref:"formRef"},{default:(0,l.w5)((function(){return[(0,l._)("div",j,[(0,l._)("div",Z,[(0,l._)("div",K,[P,(0,l.Wm)(c,null,{default:(0,l.w5)((function(){return[(0,l.Wm)(i,{modelValue:e.formData.share_file_id,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.formData.share_file_id=t}),type:"text",placeholder:"",readonly:""},null,8,["modelValue"])]})),_:1})]),(0,l._)("div",z,[q,(0,l.Wm)(c,null,{default:(0,l.w5)((function(){return[(0,l.Wm)(i,{modelValue:e.formData.share_filename,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.formData.share_filename=t}),type:"text",placeholder:"",readonly:""},null,8,["modelValue"])]})),_:1})]),(0,l._)("div",G,[N,(0,l.Wm)(c,null,{default:(0,l.w5)((function(){return[(0,l.Wm)(i,{modelValue:e.formData.share_user,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.formData.share_user=t}),readonly:""},null,8,["modelValue"])]})),_:1})]),(0,l._)("div",J,[Y,(0,l.Wm)(c,null,{default:(0,l.w5)((function(){return[(0,l.Wm)(i,{modelValue:e.formData.description,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.formData.description=t}),type:"textarea",placeholder:"该信息将显示于分享页面"},null,8,["modelValue"])]})),_:1})]),(0,l._)("div",Q,[X,(0,l._)("span",$,[(0,l._)("span",ee,[(0,l.Wm)(r,{src:"media/icons/duotune/arrows/arr072.svg"})])])]),(0,l._)("div",te,[(0,l._)("div",ne,[(0,l._)("div",le,[ae,(0,l.Wm)(c,null,{default:(0,l.w5)((function(){return[(0,l.Wm)(d,{modelValue:e.formData.expired_days,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.formData.expired_days=t}),min:"1"},null,8,["modelValue"])]})),_:1})]),(0,l._)("div",oe,[se,(0,l.Wm)(c,null,{default:(0,l.w5)((function(){return[(0,l.Wm)(d,{modelValue:e.formData.expired_download_count,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.formData.expired_download_count=t}),min:"1"},null,8,["modelValue"])]})),_:1})])]),(0,l._)("div",re,[(0,l._)("div",ie,[ce,(0,l._)("label",de,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.formData.share_rsa_pk=t}),id:"kt_modal_add_customer_billing",checked:"checked"},null,512),[[C.e8,e.formData.share_rsa_pk]]),ue])])]),(0,l._)("div",me,[(0,l._)("div",fe,[_e,(0,l._)("label",pe,[(0,l.wy)((0,l._)("input",{class:"form-check-input",name:"billing",type:"checkbox","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.formData.share_enc_key=t}),id:"kt_modal_add_customer_billing",checked:"checked"},null,512),[[C.e8,e.formData.share_enc_key]]),ve])])])])])]),(0,l._)("div",ge,[(0,l._)("button",{"data-kt-indicator":e.loading?"on":null,class:"btn btn-lg btn-primary",type:"submit"},[e.loading?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("span",he,[ke,(0,l._)("span",we,[(0,l.Wm)(r,{src:"media/icons/duotune/arrows/arr064.svg"})])])),e.loading?((0,l.wg)(),(0,l.iD)("span",ye,Fe)):(0,l.kq)("",!0)],8,be)])]})),_:1},8,["model"])])])),e.showLink?((0,l.wg)(),(0,l.j4)(m,{key:1})):(0,l.kq)("",!0)],512)}var Ee=n(78764),Le=n.n(Ee),Me={class:"modal-dialog modal-dialog-centered mw-800px"},Ue={class:"modal-content"},Ae={class:"modal-header pb-0 border-0 justify-content-end"},Te={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},Ce={class:"svg-icon svg-icon-1"},We={class:"modal-body scroll-y pt-0 pb-15"},Re={class:"mw-lg-600px mx-auto"},Ve=(0,l._)("div",{class:"mb-13 text-center"},[(0,l._)("h1",{class:"mb-3"},"分享成功"),(0,l._)("div",{class:"text-gray-400 fw-semobold fs-5"},[(0,l.Uk)(" 关于分享文件的技术细节，可以参阅我们的 "),(0,l._)("a",{href:"#",class:"link-primary fw-bold"},"实验报告"),(0,l.Uk)(". ")])],-1),He={class:"mb-10"},Be=(0,l._)("h4",{class:"fs-5 fw-semobold text-gray-800"}," 把下面的链接分享给朋友： ",-1),Ie={class:"d-flex"},Oe=["value"],je={ref:"copyButtonRef",id:"kt_share_earn_link_copy_button",class:"btn btn-light fw-bold flex-shrink-0","data-clipboard-target":"#kt_share_earn_link_input"},Ze=(0,l.uE)('<div class="d-flex"><a href="#" class="btn btn-light-primary w-100"><img alt="Logo" src="media/svg/brand-logos/google-icon.svg" class="h-15px me-3"> Google </a><a href="#" class="btn btn-icon btn-light-primary w-100 mx-6"><img alt="Logo" src="media/svg/brand-logos/facebook-2.svg" class="h-20px me-3"> Facebook </a><a href="#" class="btn btn-icon btn-light-primary w-100"><img alt="Logo" src="media/svg/brand-logos/twitter.svg" class="h-20px me-3"> Twitter </a></div>',1);function Ke(e,t,n,a,o,s){var r=(0,l.up)("inline-svg");return(0,l.wg)(),(0,l.iD)("div",Me,[(0,l._)("div",Ue,[(0,l._)("div",Ae,[(0,l._)("div",Te,[(0,l._)("span",Ce,[(0,l.Wm)(r,{src:"media/icons/duotune/arrows/arr061.svg"})])])]),(0,l._)("div",We,[(0,l._)("div",Re,[Ve,(0,l._)("div",He,[Be,(0,l._)("div",Ie,[(0,l._)("input",{ref:"inputRef",id:"kt_share_earn_link_input",type:"text",class:"form-control form-control-solid me-3 flex-grow-1",name:"search",value:e.share_link},null,8,Oe),(0,l._)("button",je," 复制链接 ",512)])]),Ze])])])])}var Pe=n(42152),ze=n.n(Pe),qe=(0,l.aZ)({name:"show-link-modal-content",components:{},setup:function(){var e=(0,m.iH)(null),t=(0,m.iH)(null),n=(0,U.oR)(),a=(0,l.Fl)((function(){return"https://pan.neixiangde.ren/#/shared?share_token="+n.state.ShareFileModule.share_token}));return(0,l.bv)((function(){var n=new(ze())(e.value);n.on("success",(function(n){var l,a,o,s=null===(l=e.value)||void 0===l?void 0:l.innerHTML;null===(a=t.value)||void 0===a||a.classList.add("bg-success"),null===(o=t.value)||void 0===o||o.classList.add("text-inverse-success"),e.value&&(e.value.innerHTML="已复制"),setTimeout((function(){var n,l;e.value&&s&&(e.value.innerHTML=s),null===(n=t.value)||void 0===n||n.classList.remove("bg-success"),null===(l=t.value)||void 0===l||l.classList.remove("text-inverse-success")}),3e3),n.clearSelection()}))})),{copyButtonRef:e,inputRef:t,share_link:a}}}),Ge=n(83744);const Ne=(0,Ge.Z)(qe,[["render",Ke]]);var Je=Ne,Ye=n(81354),Qe=n.n(Ye),Xe=n(31166),$e=(0,l.aZ)({name:"share-file-modal",components:{ShowLinkModalContent:Je},setup:function(){var e=this,t=(0,U.oR)(),n=(0,m.iH)(null),a=(0,m.iH)(null),o=(0,m.iH)(!1),s=(0,l.Fl)((function(){return t.state.AuthModule.user.rsa_private_key})),r=(0,m.iH)({share_file_id:(0,l.Fl)((function(){return t.state.AuthModule.now_op_file_id})),share_filename:(0,l.Fl)((function(){return t.state.AuthModule.now_op_file_name})),share_user:(0,l.Fl)((function(){return t.state.AuthModule.user.email})),description:"",expired_days:1,expired_download_count:1,share_rsa_pk:!1,share_enc_key:!1,enc_key:"",signature:"",created_timestamp:Date.now()}),i=(0,l.Fl)((function(){return Date.now()+864e5*r.value.expired_days})),c=(0,l.Fl)((function(){return t.state.ShareFileModule.showLink})),d=function(){return(0,u.mG)(e,void 0,void 0,(function(){var e,l,a,i,c,d,m;return(0,u.Jh)(this,(function(u){switch(u.label){case 0:return n.value?(o.value=!0,r.value.share_enc_key||r.value.share_rsa_pk?[4,t.dispatch(T.e.DOWNLOAD_FILE,{id:r.value.share_file_id})]:[3,2]):[2];case 1:u.sent(),e=t.state.AuthModule.downloaded_content,l=e.content,a=e.file_enc_key,r.value.share_enc_key&&(a=Qe().AES.decrypt(a,Qe().enc.Utf8.parse(t.state.AuthModule.user.master_key),{mode:Qe().mode.ECB,padding:Qe().pad.Pkcs7}).toString(Qe().enc.Utf8),r.value.enc_key=a),r.value.share_rsa_pk&&(console.log(a),i=new Xe.KJUR.crypto.Signature({alg:"SHA1withRSA"}),i.init(Xe.KEYUTIL.getKey(s.value)),i.updateString(l),c=Xe.hextob64(i.sign()),console.log(c),c&&(r.value.signature=c)),u.label=2;case 2:return[4,t.dispatch("share_file",r.value)];case 3:return u.sent(),d=Object.keys(t.getters.getErrors)[0],m=t.getters.getErrors[d],m?Le().fire({text:m[0],icon:"error",buttonsStyling:!1,confirmButtonText:"重试",customClass:{confirmButton:"btn fw-semobold btn-light-danger"}}):t.commit("SET_SHOW_LINK",!0),o.value=!1,[2]}}))}))};return{formData:r,submit:d,formRef:n,loading:o,addCustomerModalRef:a,showLink:c,expired_days:i}}});const et=(0,Ge.Z)($e,[["render",Se],["__scopeId","data-v-7062fd90"]]);var tt=et,nt=n(48542),lt=n.n(nt),at=(0,l.aZ)({name:"file-menu",components:{ShareFileModal:tt},setup:function(){var e=this,t=((0,A.tv)(),(0,M.QT)(),(0,U.oR)()),n=(0,l.Fl)((function(){return t.state.AuthModule.now_op_file_id})),a=(0,l.Fl)((function(){return t.state.AuthModule.now_op_file_name})),o=function(){return(0,u.mG)(e,void 0,void 0,(function(){var e,l,o,s,r,i,c,d,m,f;return(0,u.Jh)(this,(function(u){switch(u.label){case 0:return[4,t.dispatch(T.e.DOWNLOAD_FILE,{id:n.value})];case 1:return u.sent(),e=Object.keys(t.getters.getErrors)[0],l=t.getters.getErrors[e],l?lt().fire({text:l[0],icon:"error",buttonsStyling:!1,confirmButtonText:"确认",customClass:{confirmButton:"btn fw-semobold btn-light-danger"}}):(console.log("下载成功，开始解密"),o=t.state.AuthModule.downloaded_content,s=o.content,r=o.file_enc_key,console.log("加密后的对称密钥："+r),console.log("主密钥："+t.state.AuthModule.user.master_key),console.log(r),r=Qe().AES.decrypt(r,Qe().enc.Utf8.parse(t.state.AuthModule.user.master_key),{mode:Qe().mode.ECB,padding:Qe().pad.Pkcs7}).toString(Qe().enc.Utf8),console.log("解密后的对称密钥："+r),console.log("开始解密文件内容"),i=Qe().AES.decrypt(s,Qe().enc.Utf8.parse(r),{mode:Qe().mode.ECB,padding:Qe().pad.Pkcs7}),s=i.toString(Qe().enc.Utf8),console.log("解密后的文件内容："+s),console.log("将文件保存至本地"),c=function(e){for(var t=e.split(":")[1],n=window.atob(e),l=n.length,a=new Uint8Array(l),o=0;o<l;++o)a[o]=n.charCodeAt(o);return new Blob([a],{type:t})},d=document.createElement("a"),m=c(s),f=document.createEvent("HTMLEvents"),f.initEvent("click",!0,!0),d.download=a.value,d.href=URL.createObjectURL(m),d.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))),[2]}}))}))};return{store:t,downloadFile:o}}});const ot=(0,Ge.Z)(at,[["render",L]]);var st=ot,rt=(0,l.aZ)({name:"file-card",props:{fileTitle:String,createdAt:String,fileType:String,fileID:Number},components:{FileMenu:st},setup:function(e){var t=(0,U.oR)(),n=function(){console.log("setOpFile",e),t.commit(T.P.SET_OP_FILE,{id:e.fileID,name:e.fileTitle})};return{setOpFile:n}}});const it=(0,Ge.Z)(rt,[["render",k]]);var ct=it,dt=(0,l.aZ)({name:"profile-documents",components:{KTFile:ct},setup:function(){var e=(0,m.iH)(null),t=(0,m.iH)(null),n=(0,U.oR)(),a=((0,A.tv)(),(0,m.iH)(!1)),o=(0,l.Fl)((function(){return n.state.AuthModule.rsa_private_key})),s=(0,l.Fl)((function(){return n.getters.getMasterKey})),r=(0,m.iH)("上传文件"),i=function(){e.value&&e.value.click()},c=function(e){if(t.value&&null!=e.target){a.value=!0,t.value.disabled=!0,r.value="获取文件...";var l=e.target["files"][0],o=new FileReader;o.readAsDataURL(l),o.onload=function(){return(0,u.mG)(this,void 0,void 0,(function(){var e,o,i,c,d,m,f,_,p;return(0,u.Jh)(this,(function(u){switch(u.label){case 0:return t.value?l.size>10485760?(e=(l.size/1024/1024).toFixed(2),lt().fire({title:"文件大小超过10M",text:"当前文件大小为"+e+"M，请重新选择",icon:"error",confirmButtonText:"确定"}),a.value=!1,t.value.disabled=!1,[2]):(console.log("开始加密文件"),console.log("文件大小："+l.size),o=Array.from(crypto.getRandomValues(new Uint8Array(16))).map((function(e){return e.toString(16)})).join(""),o=Qe().MD5(o).toString(),console.log("对称密钥："+o),"string"!==typeof this.result?[3,5]:(r.value="加密文件...",i=this.result.split("base64,")[1],c=Qe().enc.Utf8.parse(i),d=Qe().AES.encrypt(c,Qe().enc.Utf8.parse(o),{mode:Qe().mode.ECB,padding:Qe().pad.Pkcs7}).toString(),console.log("开始加密对称密钥"),console.log("主密钥："+s.value),console.log("对称密钥："+o),m=Qe().AES.encrypt(Qe().enc.Utf8.parse(o),Qe().enc.Utf8.parse(s.value),{mode:Qe().mode.ECB,padding:Qe().pad.Pkcs7}).toString(),console.log("加密后对称密钥："+m),f={name:l.name,type:l.type,encrypted:d,file_key:m},console.log("发送请求："),console.log(f),r.value="上传文件...",[4,n.dispatch(T.e.UPLOAD_FILE,f)])):[2];case 1:return u.sent(),_=Object.keys(n.getters.getErrors)[0],p=n.getters.getErrors[_],p?[3,3]:[4,n.dispatch(T.e.GET_FILE_LIST)];case 2:return u.sent(),lt().fire({text:"上传成功！",icon:"success",buttonsStyling:!1,confirmButtonText:"确定",customClass:{confirmButton:"btn fw-semobold btn-light-primary"}}).then((function(){})),[3,4];case 3:lt().fire({text:p[0],icon:"error",buttonsStyling:!1,confirmButtonText:"重试",customClass:{confirmButton:"btn fw-semobold btn-light-danger"}}),u.label=4;case 4:a.value=!1,t.value.disabled=!1,r.value="上传文件",u.label=5;case 5:return[2]}}))}))}}},d=(0,l.Fl)((function(){return n.state.AuthModule.user.file_list}));return n.dispatch(T.e.GET_FILE_LIST),{hiddenInput:e,selectFile:i,uploadFile:c,uploading:a,uploadButton:t,rsa_private_key:o,master_key:s,file_list:d,update_state:r}}});const ut=(0,Ge.Z)(dt,[["render",d]]);var mt=ut}}]);