(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38a7bbda","chunk-5015aed0","chunk-1df73fff"],{"133e":function(e,t,r){"use strict";var s=r("2829"),i=r.n(s);i.a},2829:function(e,t,r){},"38e4":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.handleClose}},[r("el-form",{ref:"reviewForm",attrs:{model:e.reviewForm,rules:e.reviewFormRules,"label-width":"80px"}},[r("el-row",{staticStyle:{"margin-left":"8%","font-size":"larger"}},[r("el-col",{attrs:{span:23}},[r("span",[e._v("门店名称："+e._s(e.reviewForm.name))])])],1),e._v(" "),r("el-form-item",{staticStyle:{"margin-top":"10px"},attrs:{label:"审核",prop:"status"}},[r("el-radio-group",{model:{value:e.reviewForm.status,callback:function(t){e.$set(e.reviewForm,"status",t)},expression:"reviewForm.status"}},[r("el-radio",{key:"1",attrs:{label:"1",border:""}},[e._v("审核通过")]),e._v(" "),r("el-radio",{key:"2",attrs:{label:"2",border:""}},[e._v("审核驳回")])],1)],1),e._v(" "),2==e.reviewForm.status?r("el-form-item",{attrs:{label:"驳回原因",prop:"rejectResion"}},[r("el-input",{attrs:{placeholder:"请输入驳回原因",type:"text"},model:{value:e.reviewForm.rejectResion,callback:function(t){e.$set(e.reviewForm,"rejectResion",t)},expression:"reviewForm.rejectResion"}})],1):e._e()],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.handleClose}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)},i=[],a=r("e340"),o={name:"reviewModal",props:{review:null,currentData:null},watch:{review:function(e){this.dialogVisible=e},currentData:function(e){this.reviewForm=e}},data:function(){return{checkStatusOptions:[],title:"审核",dialogVisible:!1,reviewForm:{name:null},reviewFormRules:{}}},methods:{handleClose:function(){this.$emit("closeReview",!1)},submitForm:function(){var e=this;this.$refs["reviewForm"].validate((function(t){t&&Object(a["d"])(e.reviewForm).then((function(t){200===t.code?(e.msgSuccess("审核成功"),e.handleClose()):e.msgError(t.msg)}))}))}}},l=o,n=r("2877"),c=Object(n["a"])(l,s,i,!1,null,"629a0939",null);t["default"]=c.exports},"9f2c":function(e,t,r){e.exports=r.p+"static/img/deaufalt.38ca4c6f.jpg"},b08b:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入门店名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.name,callback:function(t){e.$set(e.queryParams,"name",t)},expression:"queryParams.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"负责人",prop:"manager"}},[r("el-input",{attrs:{placeholder:"请输入门店负责人",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.manager,callback:function(t){e.$set(e.queryParams,"manager",t)},expression:"queryParams.manager"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"创建人",prop:"createBy"}},[r("el-input",{attrs:{placeholder:"请输入创建者用户",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.createBy,callback:function(t){e.$set(e.queryParams,"createBy",t)},expression:"queryParams.createBy"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"状态",prop:"status"}},[r("el-select",{attrs:{placeholder:"请选择状态"},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.checkStatusOptions,(function(e){return r("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),e._v(" "),r("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),e._v(" "),r("el-row",{staticClass:"mb8",attrs:{gutter:10}},[r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["store:store:add"],expression:"['store:store:add']"}],attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),e._v(" "),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["store:store:edit"],expression:"['store:store:edit']"}],attrs:{type:"success",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),e._v(" "),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["store:store:remove"],expression:"['store:store:remove']"}],attrs:{type:"danger",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),e._v(" "),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["store:store:export"],expression:"['store:store:export']"}],attrs:{type:"warning",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1)],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.storeList},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),r("el-table-column",{ref:"table",attrs:{prop:"logo",label:"logo",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("img",{staticClass:"el-avatar",staticStyle:{"border-radius":"10px"},attrs:{src:e.imageView+"/"+t.row.logo,onerror:e.defaultImg,alt:"点击打开"}})]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"名称",align:"center",prop:"name"}}),e._v(" "),r("el-table-column",{attrs:{label:"负责人",align:"center",prop:"manager"}}),e._v(" "),r("el-table-column",{attrs:{label:"电话",align:"center",prop:"managerPhone"}}),e._v(" "),r("el-table-column",{attrs:{label:"省/市/区",align:"center",prop:"province"}}),e._v(" "),r("el-table-column",{attrs:{label:"门店详细地址",align:"center",prop:"address"}}),e._v(" "),r("el-table-column",{attrs:{label:"审核状态",align:"center",prop:"status",formatter:e.checkFormat}}),e._v(" "),r("el-table-column",{attrs:{label:"VIP",align:"center",prop:"level"}}),e._v(" "),r("el-table-column",{attrs:{label:"创建者",align:"center",prop:"createBy"}}),e._v(" "),r("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(r){return e.openStoreDatail(t.row)}}},[e._v("详情")]),e._v(" "),r("el-dropdown",{attrs:{size:"mini","split-button":"",type:"primary",trigger:"click"}},[e._v("\n            操作\n            "),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["course:course:edit"],expression:"['course:course:edit']"}],staticStyle:{"margin-top":"10px"},attrs:{size:"mini",type:"success",icon:"el-icon-edit"},on:{click:function(r){return e.handleUpdate(t.row)}}},[e._v("修改")]),e._v(" "),r("br"),e._v(" "),r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["course:course:remove"],expression:"['course:course:remove']"}],staticStyle:{"margin-top":"10px"},attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(r){return e.handleDelete(t.row)}}},[e._v("删除")]),e._v(" "),0==t.row.status?r("br"):e._e(),e._v(" "),0==t.row.status?r("el-button",{staticStyle:{"margin-top":"10px"},attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(r){return e.openReview(t.row)}}},[e._v("审核")]):e._e(),e._v(" "),3==t.row.status?r("br"):e._e(),e._v(" "),3==t.row.status?r("el-button",{staticStyle:{"margin-top":"10px"},attrs:{size:"mini",type:"warning",icon:"el-icon-edit"},on:{click:function(r){return e.changeStatus(t.row,4)}}},[e._v("下线")]):e._e(),e._v(" "),4==t.row.status||1==t.row.status?r("br"):e._e(),e._v(" "),4==t.row.status||1==t.row.status?r("el-button",{staticStyle:{"margin-top":"10px"},attrs:{size:"mini",type:"warning",icon:"el-icon-edit"},on:{click:function(r){return e.changeStatus(t.row,3)}}},[e._v("上线")]):e._e(),e._v(" "),r("br")],1)],1)]}}])})],1),e._v(" "),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),e._v(" "),r("reviewModal",{ref:"reviewModal",attrs:{review:e.review,currentData:e.currentData},on:{closeReview:e.closeReview}}),e._v(" "),r("storeDetailModal",{ref:"storeDetailModal",attrs:{storeDetail:e.storeDetail,currentData:e.currentData},on:{closeStoreDetail:e.closeStoreDetail}}),e._v(" "),r("el-dialog",{attrs:{title:e.title,visible:e.open,width:"70%"},on:{"update:visible":function(t){e.open=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[r("el-steps",{attrs:{active:e.active}},[r("el-step",{attrs:{title:"基本信息",icon:"el-icon-edit"},nativeOn:{click:function(t){return e.stepClick(1)}}}),e._v(" "),r("el-step",{attrs:{title:"证件信息",icon:"el-icon-upload"},nativeOn:{click:function(t){return e.stepClick(2)}}}),e._v(" "),r("el-step",{attrs:{title:"宣传信息",icon:"el-icon-picture"},nativeOn:{click:function(t){return e.stepClick(3)}}})],1),e._v(" "),1==e.active?r("div",[r("el-row",{staticStyle:{"margin-top":"30px"}},[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"门店名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入门店名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"负责人",prop:"manager"}},[r("el-input",{attrs:{placeholder:"请输入门店负责人"},model:{value:e.form.manager,callback:function(t){e.$set(e.form,"manager",t)},expression:"form.manager"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"电话",prop:"managerPhone"}},[r("el-input",{attrs:{placeholder:"请输入负责人电话"},model:{value:e.form.managerPhone,callback:function(t){e.$set(e.form,"managerPhone",t)},expression:"form.managerPhone"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"类型"}},[r("el-checkbox-group",{model:{value:e.form.storeTypeIds,callback:function(t){e.$set(e.form,"storeTypeIds",t)},expression:"form.storeTypeIds"}},e._l(e.storeTypes,(function(t){return r("el-checkbox-button",{key:t.id,attrs:{label:t.id}},[e._v(e._s(t.name)+"\n                    ")])})),1)],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"标签"}},[r("el-checkbox-group",{model:{value:e.form.storeLabelIds,callback:function(t){e.$set(e.form,"storeLabelIds",t)},expression:"form.storeLabelIds"}},e._l(e.storeLabels,(function(t){return r("el-checkbox-button",{key:t.id,attrs:{label:t.id}},[e._v(e._s(t.name)+"\n                    ")])})),1)],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"开始时间",prop:"beginExperienceTime"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{clearable:"",size:"small",type:"date","value-format":"yyyy-MM-dd",placeholder:"选择开始时间"},model:{value:e.form.beginExperienceTime,callback:function(t){e.$set(e.form,"beginExperienceTime",t)},expression:"form.beginExperienceTime"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"结束时间",prop:"endExperienceTime"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{clearable:"",size:"small",type:"date","value-format":"yyyy-MM-dd",placeholder:"选择结束时间"},model:{value:e.form.endExperienceTime,callback:function(t){e.$set(e.form,"endExperienceTime",t)},expression:"form.endExperienceTime"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"地址",prop:"province"}},[r("el-cascader",{attrs:{options:e.addressOptions},on:{change:e.onChangeCitys},model:{value:e.cities,callback:function(t){e.cities=t},expression:"cities"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:16}},[r("el-form-item",{attrs:{label:"街道",prop:"address"}},[r("el-input",{attrs:{placeholder:"请输入门店详细地址"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"经度",prop:"address"}},[r("el-input",{model:{value:e.centerStr.lng,callback:function(t){e.$set(e.centerStr,"lng",t)},expression:"centerStr.lng"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:16}},[r("el-form-item",{attrs:{label:"纬度",prop:"address"}},[r("el-input",{model:{value:e.centerStr.lat,callback:function(t){e.$set(e.centerStr,"lat",t)},expression:"centerStr.lat"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"地图"}},[r("baidu-map",{staticClass:"map",attrs:{center:e.centerStr,zoom:e.zoom,"scroll-wheel-zoom":!0},on:{ready:e.handler,click:e.mapclick}},[r("bm-local-search",{attrs:{keyword:e.keyword,location:e.location,"auto-viewport":e.autoViewport,panel:e.panel,"select-first-result":e.selectFirstResult,pagecapacity:e.pageCapacity}}),e._v(" "),r("bm-navigation",{attrs:{anchor:"BMAP_ANCHOR_TOP_LEFT"}}),e._v(" "),r("bm-geolocation",{attrs:{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT",showAddressBar:!0,autoLocation:!0,show:!1}})],1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"logo"}},[r("el-upload",{ref:"upload",staticClass:"avatar-uploader",attrs:{headers:e.headers,action:e.uploadImgUrl,data:{type:"store"},"show-file-list":!1,"on-success":e.onSuccessLogo,"on-remove":e.handleRemoveLogo,"on-preview":e.handlePictureCardPreviewLogo,"before-upload":e.beforeUploadLogo}},[e.form.logo?r("img",{staticClass:"avatar",attrs:{src:e.imageView+"/"+e.form.logo,onerror:e.defaultImg}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1)],1)],1):e._e(),e._v(" "),2==e.active?r("div",{staticStyle:{"margin-top":"30px"}},[r("el-form-item",{staticStyle:{"margin-top":"80px"},attrs:{label:"营业执照"}},[r("el-upload",{ref:"upload",attrs:{action:e.uploadImgUrl,"list-type":"picture-card","content-type":"false",headers:e.headers,"file-list":e.licenseList,"show-file-list":!0,"before-upload":e.beforeUpload,"on-change":e.onChange,"on-success":e.onSuccess,"on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove,accept:".jpg,.jpeg,.png,.gif"}},[r("i",{staticClass:"el-icon-plus"})]),e._v(" "),r("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:"",onerror:e.defaultImg}})])],1),e._v(" "),r("el-form-item",{staticStyle:{"margin-top":"80px"},attrs:{label:"健康证"}},[r("el-upload",{ref:"upload",attrs:{action:e.uploadImgUrl,"list-type":"picture-card","content-type":"false",headers:e.headers,"file-list":e.healthsList,"show-file-list":!0,"before-upload":e.beforeUploadh,"on-change":e.onChangeh,"on-success":e.onSuccessh,"on-preview":e.handlePictureCardPreviewh,"on-remove":e.handleRemoveh,accept:".jpg,.jpeg,.png,.gif"}},[r("i",{staticClass:"el-icon-plus"})]),e._v(" "),r("el-dialog",{attrs:{visible:e.dialogVisibleh},on:{"update:visible":function(t){e.dialogVisibleh=t}}},[r("img",{attrs:{width:"100%",src:e.dialogImageUrlh,alt:"",onerror:e.defaultImg}})])],1)],1):e._e(),e._v(" "),3==e.active?r("div",{staticStyle:{"margin-top":"30px"}},[r("el-form-item",{staticStyle:{"margin-top":"80px"},attrs:{label:"照片墙"}},[r("el-upload",{ref:"upload",attrs:{action:e.uploadImgUrl,"list-type":"picture-card","content-type":"false",headers:e.headers,"file-list":e.photosList,"show-file-list":!0,"before-upload":e.beforeUpload1,"on-change":e.onChange1,"on-success":e.onSuccess1,"on-preview":e.handlePictureCardPreview1,"on-remove":e.handleRemove1,accept:".jpg,.jpeg,.png,.gif"}},[r("i",{staticClass:"el-icon-plus"})]),e._v(" "),r("el-dialog",{attrs:{visible:e.dialogVisible1},on:{"update:visible":function(t){e.dialogVisible1=t}}},[r("img",{attrs:{width:"100%",src:e.dialogImageUrl1,alt:"",onerror:e.defaultImg}})])],1),e._v(" "),r("el-form-item",{attrs:{label:"视频上传",prop:"video"}},[r("el-upload",{staticClass:"avatar-uploader el-upload--text",attrs:{action:e.uploadImgUrl,headers:e.headers,"show-file-list":!1,"on-success":e.handleVideoSuccess,"before-upload":e.beforeUploadVideo,"on-progress":e.uploadVideoProcess}},[""!=e.form.video&&0==e.videoFlag?r("video",{staticClass:"avatar",attrs:{src:e.imageView+"/"+e.form.video,controls:"controls"}},[e._v("您的浏览器不支持视频播放")]):""==e.form.video&&0==e.videoFlag?r("i",{staticClass:"el-icon-plus avatar-uploader-icon"}):e._e(),e._v(" "),1==e.videoFlag?r("el-progress",{staticStyle:{"margin-top":"30px"},attrs:{type:"circle",percentage:e.videoUploadPercent}}):e._e()],1),e._v(" "),r("P",{staticClass:"text"},[e._v("请保证视频格式正确")])],1)],1):e._e()],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{staticStyle:{"margin-top":"12px"},on:{click:e.next}},[e._v("下一步")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),e._v(" "),r("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},i=[],a=(r("7f7f"),r("e340")),o=r("214d"),l=r("38e4"),n=r("f8b6"),c=r("5f87"),u=r("bd0c"),d=r.n(u),m=r("2b0e");m["default"].use(d.a,{ak:"7ddN7rl0MKnrRAhxmZzEHVPObhlDUcdb"});var p={components:{reviewModal:l["default"],storeDetailModal:n["default"]},data:function(){return{defaultImg:'this.src="'+r("9f2c")+'"',storeDetail:!1,review:!1,currentData:null,keyword:"",location:"",autoViewport:!0,panel:!1,selectFirstResult:!0,pageCapacity:1,zoom:15,centerStr:{lng:"",lat:""},checkStatusOptions:[],mapForAdd:!1,storeTypes:[],storeLabels:[],videoFlag:!1,videoUploadPercent:0,licenseList:[],licenseListNew:[],healthsList:[],healthsListNew:[],photosList:[],photosListNew:[],active:1,addressOptions:o["a"],cities:[],loading:!0,ids:[],single:!0,multiple:!0,total:0,storeList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,name:void 0,manager:void 0,status:void 0,createBy:void 0},form:{},rules:{name:[{required:!0,message:"门店名称不能为空",trigger:"blur"}],manager:[{required:!0,message:"门店负责人不能为空",trigger:"blur"}],managerPhone:[{required:!0,message:"门店负责人联系方式不能为空",trigger:"blur"}],province:[{required:!0,message:"门店地址不能为空",trigger:"blur"}],address:[{required:!0,message:"门店街道不能为空",trigger:"blur"}],mapX:[{required:!0,message:"门店经度不能为空",trigger:"blur"}],mapY:[{required:!0,message:"门店纬度不能为空",trigger:"blur"}]},dialogImageUrl:"",dialogVisible:!1,dialogImageUrlh:"",dialogVisibleh:!1,uploadImgUrl:"/prod-api/common/upload",imageView:"/prod-api",headers:{Authorization:"Bearer "+Object(c["a"])()},dialogImageUrl1:"",dialogVisible1:!1}},created:function(){var e=this;this.getList(),this.getDicts("yun_store_check_status").then((function(t){e.checkStatusOptions=t.data}))},methods:{openStoreDatail:function(e){this.currentData=e,this.storeDetail=!0},closeStoreDetail:function(){this.storeDetail=!1},openReview:function(e){this.currentData=e,this.review=!0},closeReview:function(){this.review=!1,this.getList()},getList:function(){var e=this;this.loading=!0,Object(a["h"])(this.queryParams).then((function(t){e.storeList=t.rows,e.total=t.total,e.loading=!1}))},checkFormat:function(e,t){return this.selectDictLabel(this.checkStatusOptions,e.status)},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={id:void 0,name:void 0,logo:void 0,manager:void 0,managerPhone:void 0,photos:void 0,healths:void 0,video:void 0,license:void 0,province:void 0,city:void 0,area:void 0,address:void 0,mapX:void 0,mapY:void 0,createBy:void 0,createTime:void 0,updateBy:void 0,updateTime:void 0,delFlag:void 0,createById:void 0,beginExperienceTime:void 0,endExperienceTime:void 0,storeTypeIds:[],storeLabelIds:[]},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.single=1!=e.length,this.multiple=!e.length},handleAdd:function(){var e=this;this.reset(),this.licenseList=[],this.licenseListNew=[],this.photosList=[],this.photosListNew=[],this.photosList=[],this.photosListNew=[],this.active=1,Object(a["g"])().then((function(t){e.storeTypes=t.storeTypes,e.storeLabels=t.storeLabels,e.open=!0,e.title="添加门店"}))},handleUpdate:function(e){var t=this;this.reset();var r=e.id||this.ids;Object(a["g"])(r).then((function(e){if(t.form=e.data,null!=t.form.province&&(t.cities=JSON.parse(t.form.province)),null!=t.form.photos){t.photosList=JSON.parse(t.form.photos),t.photosListNew=JSON.parse(t.form.photos);for(var r=0;r<t.photosList.length;r++)null!=t.photosList[r].url&&(t.photosList[r].url=t.imageView+"/"+t.photosList[r].url)}if(null!=t.form.license){t.licenseList=JSON.parse(t.form.license),t.licenseListNew=JSON.parse(t.form.license);for(var s=0;s<t.licenseList.length;s++)null!=t.licenseList[s].url&&(t.licenseList[s].url=t.imageView+"/"+t.licenseList[s].url)}if(null!=t.form.healths){t.healthsList=JSON.parse(t.form.healths),t.healthsListNew=JSON.parse(t.form.healths);for(var i=0;i<t.healthsList.length;i++)null!=t.healthsList[i].url&&(t.healthsList[i].url=t.imageView+"/"+t.healthsList[i].url)}t.storeTypes=e.storeTypes,t.storeLabels=e.storeLabels,t.form.storeTypeIds=e.storeTypeIds,t.form.storeLabelIds=e.storeLabelIds,t.centerStr.lng=t.form.mapX,t.centerStr.lat=t.form.mapY,t.open=!0,t.title="修改门店"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!=e.form.id?(e.form.province=JSON.stringify(e.cities),e.form.license=JSON.stringify(e.licenseListNew),e.form.photos=JSON.stringify(e.photosListNew),e.form.healths=JSON.stringify(e.healthsListNew),e.form.mapX=e.centerStr.lng,e.form.mapY=e.centerStr.lat,Object(a["i"])(e.form).then((function(t){200===t.code?(e.msgSuccess("修改成功"),e.open=!1,e.getList()):e.msgError(t.msg)}))):(e.form.province=JSON.stringify(e.cities),e.form.license=JSON.stringify(e.licenseListNew),e.form.photos=JSON.stringify(e.photosListNew),e.form.healths=JSON.stringify(e.healthsListNew),e.form.mapX=e.centerStr.lng,e.form.mapY=e.centerStr.lat,Object(a["a"])(e.form).then((function(t){200===t.code?(e.msgSuccess("新增成功"),e.open=!1,e.getList()):e.msgError(t.msg)}))))})),this.$refs.upload.clearFiles()},changeStatus:function(e,t){var r=this,s=e.id||this.ids,i=null;3==t?i="上线":4==t&&(i="下线"),this.$confirm("是否确认"+i+'门店编号为"'+s+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return 3==t?Object(a["c"])(s):4==t?Object(a["b"])(s):void 0})).then((function(){r.getList(),r.msgSuccess(i+"成功")})).catch((function(){}))},handleDelete:function(e){var t=this,r=e.id||this.ids;this.$confirm('是否确认删除门店编号为"'+r+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(a["e"])(r)})).then((function(){t.getList(),t.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){var e=this,t=this.queryParams;this.$confirm("是否确认导出所有门店数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(a["f"])(t)})).then((function(t){e.download(t.msg)})).catch((function(){}))},next:function(){this.active++>2&&(this.active=0)},stepClick:function(e){this.active=e},onChangeCitys:function(e){this.cities=e},beforeUploadLogo:function(e){},onSuccessLogo:function(e,t,r){"200"==e.code?(this.form.logo=e.fileName,this.msgSuccess("上传成功")):this.msgError("上传失败")},handleRemoveLogo:function(e,t){console.log(e,t),this.form.logo=null},handlePictureCardPreviewLogo:function(e){},beforeUpload:function(e){},onChange:function(e,t){},onSuccess:function(e,t,r){"200"==e.code?(this.licenseList=r,this.licenseListNew.push({uid:t.uid,name:t.name,status:t.status,url:e.fileName}),this.msgSuccess("上传成功")):this.msgError("上传失败")},handleRemove:function(e,t){console.log(e,t),this.licenseList=t;for(var r=0;r<this.licenseListNew.length;r++)this.licenseListNew[r].uid===e.uid&&this.licenseListNew.splice(r)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},beforeUploadh:function(e){},onChangeh:function(e,t){},onSuccessh:function(e,t,r){"200"==e.code?(this.healthsList=r,this.healthsListNew.push({uid:t.uid,name:t.name,status:t.status,url:e.fileName}),this.msgSuccess("上传成功")):this.msgError("上传失败")},handleRemoveh:function(e,t){console.log(e,t),this.healthsList=t;for(var r=0;r<this.healthsListNew.length;r++)this.healthsListNew[r].uid===e.uid&&this.healthsListNew.splice(r)},handlePictureCardPreviewh:function(e){this.dialogImageUrlh=e.url,this.dialogVisibleh=!0},beforeUpload1:function(e){},onChange1:function(e,t){},onSuccess1:function(e,t,r){"200"==e.code?(this.photosList=r,this.photosListNew.push({uid:t.uid,name:t.name,status:t.status,url:e.fileName}),this.msgSuccess("上传成功")):this.msgError("上传失败")},handleRemove1:function(e,t){console.log(e,t),this.photosList=t;for(var r=0;r<this.photosListNew.length;r++)this.photosListNew[r].uid===e.uid&&this.photosListNew.splice(r)},handlePictureCardPreview1:function(e){this.dialogImageUrl1=e.url,this.dialogVisible1=!0},beforeUploadVideo:function(e){e.size;if(-1==["video/mp4","video/ogg","video/flv","video/avi","video/wmv","video/rmvb"].indexOf(e.type))return this.$message.error("请上传正确的视频格式"),!1},uploadVideoProcess:function(e,t,r){this.videoFlag=!0,this.videoUploadPercent=t.percentage.toFixed(0)},handleVideoSuccess:function(e,t){this.videoFlag=!1,this.videoUploadPercent=0,200==e.code?this.form.video=e.fileName:this.$message.error("视频上传失败，请重新上传！")},handler:function(e){var t=e.BMap,r=(e.map,new t.Geolocation),s=this;r.getCurrentPosition((function(e){s.centerStr.lat=e.latitude,s.centerStr.lng=e.longitude}))},mapclick:function(e){var t=this,r=e.target.getCenter(),s=r.lng,i=r.lat;this.centerStr.lng=s,this.centerStr.lat=i,this.zoom=e.target.getZoom();var a=new BMap.Geocoder;a.getLocation(e.point,(function(e){t.form.address=e.addressComponents.street+e.addressComponents.streetNumber,t.cities=[],t.cities.push(e.addressComponents.province),t.cities.push(e.addressComponents.city),t.cities.push(e.addressComponents.district)}))}}},h=p,f=(r("133e"),r("2877")),v=Object(f["a"])(h,s,i,!1,null,"64d685c2",null);t["default"]=v.exports},e340:function(e,t,r){"use strict";r.d(t,"h",(function(){return a})),r.d(t,"g",(function(){return o})),r.d(t,"a",(function(){return l})),r.d(t,"i",(function(){return n})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return u})),r.d(t,"f",(function(){return d})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return p}));var s=r("b775"),i=r("c38a");function a(e){return Object(s["a"])({url:"/store/store/list",method:"get",params:e})}function o(e){return Object(s["a"])({url:"/store/store/"+Object(i["d"])(e),method:"get"})}function l(e){return Object(s["a"])({url:"/store/store",method:"post",data:e})}function n(e){return Object(s["a"])({url:"/store/store",method:"put",data:e})}function c(e){return Object(s["a"])({url:"/store/store/checkStore",method:"put",data:e})}function u(e){return Object(s["a"])({url:"/store/store/"+e,method:"delete"})}function d(e){return Object(s["a"])({url:"/store/store/export",method:"get",params:e})}function m(e){return Object(s["a"])({url:"/store/store/changeStatusOff/"+e,method:"get"})}function p(e){return Object(s["a"])({url:"/store/store/changeStatusOn/"+e,method:"get"})}},f8b6:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,width:"70%"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.handleClose}},[r("el-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("span",[e._v("门店基本信息")])]),e._v(" "),r("el-row",[r("el-col",{staticStyle:{height:"250px"},attrs:{span:8}},[r("img",{staticStyle:{"border-radius":"10px"},attrs:{src:e.imageView+"/"+e.form.logo,onerror:e.defaultImg,alt:"",height:"100%",width:"100%"}})]),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-row",[r("div",{staticClass:"text item",staticStyle:{"margin-left":"5%"}},[e._v("门店名称:"+e._s(e.form.name))])]),e._v(" "),r("br"),e._v(" "),r("el-row",[r("el-col",{attrs:{span:10}},[r("div",{staticClass:"text item",staticStyle:{"margin-left":"10%"}},[e._v("负责人: "+e._s(e.form.manager))])]),e._v(" "),r("el-col",{attrs:{span:14}},[r("div",{staticClass:"text item",staticStyle:{"margin-left":"5%"}},[e._v("负责人电话: "+e._s(e.form.managerPhone))])])],1),e._v(" "),r("br"),e._v(" "),r("e-row",[r("div",{staticClass:"text item",staticStyle:{"margin-left":"5%"}},[e._v("类型:\n            "),e._l(e.storeTypes,(function(t){return r("span",e._l(e.form.storeLabelIds,(function(s){return s==t.id?r("span",[e._v("\n               "+e._s(t.name)+"\n             ")]):e._e()})),0)}))],2)]),e._v(" "),r("br"),e._v(" "),r("e-row",[r("div",{staticClass:"text item",staticStyle:{"margin-left":"5%"}},[e._v("标贴:\n            "),e._l(e.storeLabels,(function(t){return r("span",e._l(e.form.storeTypeIds,(function(s){return s==t.id?r("span",[e._v("\n               "+e._s(t.name)+"\n             ")]):e._e()})),0)}))],2)]),e._v(" "),r("br"),e._v(" "),r("e-row",[r("div",{staticClass:"text item",staticStyle:{"margin-left":"5%"}},[e._v("地址: "+e._s(e.form.province))])]),e._v(" "),r("br"),e._v(" "),r("e-row",[r("div",{staticClass:"text item",staticStyle:{"margin-left":"5%"}},[e._v("街道: "+e._s(e.form.address))])]),e._v(" "),r("br"),e._v(" "),r("e-row",[r("el-col",{attrs:{span:12}},[r("div",{staticClass:"text item",staticStyle:{"margin-left":"10%"}},[e._v("经度:"+e._s(e.form.mapX))])]),e._v(" "),r("el-col",{attrs:{span:12}},[r("div",{staticClass:"text item",staticStyle:{"margin-left":"10%"}},[e._v("纬度: "+e._s(e.form.mapY))])])],1),e._v(" "),r("br"),r("br"),e._v(" "),r("e-row",[r("el-col",{attrs:{span:24}},[null!=e.form.endExperienceTime?r("div",{staticClass:"text item",staticStyle:{"margin-left":"5%"}},[e._v("体验结束日期: "+e._s(e.parseTime(e.form.endExperienceTime))+" ")]):e._e()])],1)],1),e._v(" "),r("el-col",{staticStyle:{height:"250px"},attrs:{span:8}},[null!=e.form.video?r("video",{staticClass:"avatar",staticStyle:{width:"100%",height:"100%","margin-top":"-8%"},attrs:{src:e.imageView+"/"+e.form.video,controls:"controls"}}):r("img",{attrs:{src:"error",onerror:e.defaultImg,alt:"",height:"100%",width:"100%"}})])],1)],1),e._v(" "),r("el-card",[r("el-row",[r("el-col",{attrs:{span:8}},[r("el-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("span",[e._v("营业执照")])]),e._v(" "),null!=e.licenseList&&e.licenseList.length>0?r("el-carousel",e._l(e.licenseList,(function(t){return r("el-carousel-item",{key:t},[r("img",{attrs:{src:e.imageView+"/"+t.url,onerror:e.defaultImg,alt:"",height:"100%",width:"100%"}})])})),1):r("img",{attrs:{src:"error",onerror:e.defaultImg,alt:"",height:"297px",width:"100%"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("span",[e._v("健康证")])]),e._v(" "),null!=e.healthsList&&e.healthsList.length>0?r("el-carousel",e._l(e.healthsList,(function(t){return r("el-carousel-item",{key:t},[r("img",{attrs:{src:e.imageView+"/"+t.url,onerror:e.defaultImg,alt:"",height:"100%",width:"100%"}})])})),1):r("img",{attrs:{src:"33",onerror:e.defaultImg,alt:"",height:"297px",width:"100%"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("span",[e._v("照片墙")])]),e._v(" "),null!=e.photosList&&e.photosList.length>0?r("el-carousel",e._l(e.photosList,(function(t){return r("el-carousel-item",{key:t},[r("img",{attrs:{src:e.imageView+"/"+t.url,onerror:e.defaultImg,alt:"",height:"100%",width:"100%"}})])})),1):r("img",{attrs:{src:"33",onerror:e.defaultImg,alt:"",height:"297px",width:"100%"}})],1)],1)],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.handleClose}},[e._v("取 消")])],1)],1)},i=[],a=r("e340"),o={name:"storeDetailModal",props:{storeDetail:null,currentData:null},watch:{storeDetail:function(e){this.dialogVisible=e},currentData:function(e){var t=this;Object(a["g"])(e.id).then((function(e){t.form=e.data,t.storeTypes=e.storeTypes,t.storeLabels=e.storeLabels,t.form.storeTypeIds=e.storeTypeIds,t.form.storeLabelIds=e.storeLabelIds,t.licenseList=JSON.parse(t.form.license),t.photosList=JSON.parse(t.form.photos),t.healthsList=JSON.parse(t.form.healths)}))}},data:function(){return{title:"门店详情",dialogVisible:!1,defaultImg:'this.src="'+r("9f2c")+'"',storeTypes:[],storeLabels:[],imageView:"/prod-api",licenseList:[],photosList:[],healthsList:[],form:{}}},methods:{handleClose:function(){this.$emit("closeStoreDetail",!1)}}},l=o,n=r("2877"),c=Object(n["a"])(l,s,i,!1,null,"680e6c99",null);t["default"]=c.exports}}]);