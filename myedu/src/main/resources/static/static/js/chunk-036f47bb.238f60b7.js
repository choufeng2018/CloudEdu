(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-036f47bb"],{"2e66":function(e,t,a){"use strict";var r=a("b2dd"),n=a.n(r);n.a},"82c3":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入学生姓名",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.name,callback:function(t){e.$set(e.queryParams,"name",t)},expression:"queryParams.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别",prop:"gendel"}},[a("el-select",{attrs:{placeholder:"请选择学生性别",clearable:"",size:"small"},model:{value:e.queryParams.gendel,callback:function(t){e.$set(e.queryParams,"gendel",t)},expression:"queryParams.gendel"}},e._l(e.gendelOptions,(function(e){return a("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"学校",prop:"school"}},[a("el-input",{attrs:{placeholder:"请输入学生就读所在学校",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.school,callback:function(t){e.$set(e.queryParams,"school",t)},expression:"queryParams.school"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"年级",prop:"gradeName"}},[a("el-input",{attrs:{placeholder:"请选择年级",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.gradeName,callback:function(t){e.$set(e.queryParams,"gradeName",t)},expression:"queryParams.gradeName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"创建人",prop:"createBy"}},[a("el-input",{attrs:{placeholder:"请输入家长姓名",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.createBy,callback:function(t){e.$set(e.queryParams,"createBy",t)},expression:"queryParams.createBy"}})],1),e._v(" "),a("el-form-item",[e._v("\n            \n      "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),e._v(" "),a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["parents:student:add"],expression:"['parents:student:add']"}],attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),e._v(" "),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["parents:student:edit"],expression:"['parents:student:edit']"}],attrs:{type:"success",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),e._v(" "),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["parents:student:remove"],expression:"['parents:student:remove']"}],attrs:{type:"danger",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),e._v(" "),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["parents:student:export"],expression:"['parents:student:export']"}],attrs:{type:"warning",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.studentList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),a("el-table-column",{ref:"table",attrs:{prop:"logo",label:"logo",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("img",{staticClass:"el-avatar",staticStyle:{"border-radius":"10px"},attrs:{src:e.viewImage+"/"+t.row.avatar,onerror:e.defaultImg,alt:"点击打开"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"姓名",align:"center",prop:"name"}}),e._v(" "),a("el-table-column",{attrs:{label:"性别",align:"center",prop:"gendel",formatter:e.gendelFormat}}),e._v(" "),a("el-table-column",{attrs:{label:"学校",align:"center",prop:"school"}}),e._v(" "),a("el-table-column",{attrs:{label:"年级",align:"center",prop:"gradeName"}}),e._v(" "),a("el-table-column",{attrs:{label:"创建人",align:"center",prop:"createBy"}}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["parents:student:edit"],expression:"['parents:student:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["parents:student:remove"],expression:"['parents:student:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),e._v(" "),a("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px"},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入学生名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别",prop:"gendel"}},[a("el-select",{attrs:{placeholder:"请选择学生性别"},model:{value:e.form.gendel,callback:function(t){e.$set(e.form,"gendel",t)},expression:"form.gendel"}},e._l(e.gendelOptions,(function(e){return a("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"人脸注册"}},[a("el-upload",{ref:"upload",staticClass:"avatar-uploader",attrs:{headers:e.headers,action:e.uploadImgUrl,data:{type:"stuAvatar"},"show-file-list":!1,"on-success":e.onSuccess,"on-remove":e.handleRemove,"on-preview":e.handlePictureCardPreview,"before-upload":e.beforeUpload}},[e.form.avatar?a("img",{staticClass:"avatar",attrs:{src:e.viewImage+"/"+e.form.avatar,onerror:e.defaultImg}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"学校",prop:"school"}},[a("el-input",{attrs:{placeholder:"请输入学生就读所在学校"},model:{value:e.form.school,callback:function(t){e.$set(e.form,"school",t)},expression:"form.school"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"年级",prop:"gradeId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.gradeId,callback:function(t){e.$set(e.form,"gradeId",t)},expression:"form.gradeId"}},e._l(e.gradeLists,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},n=[],l=a("b775"),s=a("c38a");function i(e){return Object(l["a"])({url:"/parents/student/list",method:"get",params:e})}function o(e){return Object(l["a"])({url:"/parents/student/"+Object(s["d"])(e),method:"get"})}function c(e){return Object(l["a"])({url:"/parents/student",method:"post",data:e})}function u(e){return Object(l["a"])({url:"/parents/student",method:"put",data:e})}function d(e){return Object(l["a"])({url:"/parents/student/"+e,method:"delete"})}function m(e){return Object(l["a"])({url:"/parents/student/export",method:"get",params:e})}var p=a("5f87"),f={data:function(){return{defaultImg:'this.src="'+a("9f2c")+'"',gradeLists:[],loading:!0,ids:[],single:!0,multiple:!0,total:0,studentList:[],title:"",open:!1,gendelOptions:[],queryParams:{pageNum:1,pageSize:10,name:void 0,gendel:void 0,avatar:void 0,school:void 0,gradeName:void 0,createBy:void 0,createById:void 0},form:{},rules:{name:[{required:!0,message:"学生姓名不能为空",trigger:"blur"}],gendel:[{required:!0,message:"学生性别不能为空",trigger:"blur"}]},uploadImgUrl:"/stage-api/common/upload",viewImage:"/stage-api",headers:{Authorization:"Bearer "+Object(p["a"])()},dialogImageUrl:"",dialogVisible:!1}},created:function(){var e=this;this.getList(),this.getDicts("sys_user_sex").then((function(t){e.gendelOptions=t.data}))},methods:{getList:function(){var e=this;this.loading=!0,i(this.queryParams).then((function(t){e.studentList=t.rows,e.total=t.total,e.loading=!1}))},gendelFormat:function(e,t){return this.selectDictLabel(this.gendelOptions,e.gendel)},cancel:function(){this.open=!1,this.reset(),this.$refs.upload.clearFiles()},reset:function(){this.form={name:void 0,gendel:void 0,school:void 0,avatar:void 0,gradeId:void 0,createBy:void 0},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.single=1!=e.length,this.multiple=!e.length},handleAdd:function(){var e=this;this.reset(),this.open=!0,this.title="添加学生数据",o().then((function(t){e.gradeLists=t.gradeLists}))},handleUpdate:function(e){var t=this;this.reset();var a=e.id||this.ids;o(a).then((function(e){t.gradeLists=e.gradeLists,t.form=e.data,t.open=!0,t.title="修改学生数据"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!=e.form.id?u(e.form).then((function(t){200===t.code?(e.msgSuccess("修改成功"),e.open=!1,e.getList()):e.msgError(t.msg)})):c(e.form).then((function(t){200===t.code?(e.msgSuccess("新增成功"),e.open=!1,e.getList()):e.msgError(t.msg)})))}))},handleDelete:function(e){var t=this,a=e.id||this.ids;this.$confirm('是否确认删除学生数据编号为"'+a+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return d(a)})).then((function(){t.getList(),t.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){var e=this,t=this.queryParams;this.$confirm("是否确认导出所有学生数据数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return m(t)})).then((function(t){e.download(t.msg)})).catch((function(){}))},beforeUpload:function(e){},onSuccess:function(e,t,a){"200"==e.code?(this.form.avatar=e.fileName,this.msgSuccess("上传成功")):this.msgError("上传失败")},handleRemove:function(e,t){console.log(e,t),this.form.avatar=null},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0}}},h=f,v=(a("2e66"),a("2877")),g=Object(v["a"])(h,r,n,!1,null,null,null);t["default"]=g.exports},"9f2c":function(e,t,a){e.exports=a.p+"static/img/deaufalt.38ca4c6f.jpg"},b2dd:function(e,t,a){}}]);