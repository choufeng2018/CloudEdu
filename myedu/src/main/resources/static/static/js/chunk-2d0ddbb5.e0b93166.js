(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddbb5"],{8348:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"学生",prop:"studentName"}},[a("el-input",{attrs:{placeholder:"请输入学生姓名",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.studentName,callback:function(t){e.$set(e.queryParams,"studentName",t)},expression:"queryParams.studentName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"创建者",prop:"createBy"}},[a("el-input",{attrs:{placeholder:"请输入创建者姓名",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.createBy,callback:function(t){e.$set(e.queryParams,"createBy",t)},expression:"queryParams.createBy"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),e._v(" "),a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["parents:mistake:add"],expression:"['parents:mistake:add']"}],attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),e._v(" "),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["parents:mistake:edit"],expression:"['parents:mistake:edit']"}],attrs:{type:"success",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),e._v(" "),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["parents:mistake:remove"],expression:"['parents:mistake:remove']"}],attrs:{type:"danger",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),e._v(" "),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["parents:mistake:export"],expression:"['parents:mistake:export']"}],attrs:{type:"warning",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.mistakeList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"学生",align:"center",prop:"studentName"}}),e._v(" "),a("el-table-column",{attrs:{label:"错题来源",align:"center",prop:"source"}}),e._v(" "),a("el-table-column",{attrs:{label:"错题类型",align:"center",prop:"type"}}),e._v(" "),a("el-table-column",{attrs:{label:"错题原因",align:"center",prop:"reason"}}),e._v(" "),a("el-table-column",{attrs:{label:"解决思路",align:"center",prop:"solutions"}}),e._v(" "),a("el-table-column",{attrs:{label:"创建者",align:"center",prop:"createBy"}}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["parents:mistake:edit"],expression:"['parents:mistake:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["parents:mistake:remove"],expression:"['parents:mistake:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),e._v(" "),a("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px"},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"学生",prop:"studentId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.studentId,callback:function(t){e.$set(e.form,"studentId",t)},expression:"form.studentId"}},e._l(e.studentList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"错题来源",prop:"source"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入内容"},model:{value:e.form.source,callback:function(t){e.$set(e.form,"source",t)},expression:"form.source"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"错题类型",prop:"type"}},[a("el-input",{attrs:{placeholder:"请输入错题类型"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"错题原因",prop:"reason"}},[a("el-input",{attrs:{placeholder:"请输入错题原因"},model:{value:e.form.reason,callback:function(t){e.$set(e.form,"reason",t)},expression:"form.reason"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"解决思路",prop:"solutions"}},[a("el-input",{attrs:{placeholder:"请输入解决思路"},model:{value:e.form.solutions,callback:function(t){e.$set(e.form,"solutions",t)},expression:"form.solutions"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},r=[],i=a("b775"),s=a("c38a");function o(e){return Object(i["a"])({url:"/parents/mistake/list",method:"get",params:e})}function l(e){return Object(i["a"])({url:"/parents/mistake/"+Object(s["d"])(e),method:"get"})}function u(e){return Object(i["a"])({url:"/parents/mistake",method:"post",data:e})}function c(e){return Object(i["a"])({url:"/parents/mistake",method:"put",data:e})}function m(e){return Object(i["a"])({url:"/parents/mistake/"+e,method:"delete"})}function d(e){return Object(i["a"])({url:"/parents/mistake/export",method:"get",params:e})}var p={data:function(){return{studentList:[],loading:!0,ids:[],single:!0,multiple:!0,total:0,mistakeList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,source:void 0,type:void 0,reason:void 0,solutions:void 0,studentName:void 0,createBy:void 0,createTime:void 0,createById:void 0},form:{},rules:{studentId:[{required:!0,message:"请选择学生",trigger:"blur"}],source:[{required:!0,message:"错题来源不能为空",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,o(this.queryParams).then((function(t){e.mistakeList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={id:void 0,source:void 0,type:void 0,reason:void 0,images:void 0,solutions:void 0,studentId:void 0,createBy:void 0,createTime:void 0,updateBy:void 0,updateTime:void 0,delFlag:void 0,createById:void 0},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.single=1!=e.length,this.multiple=!e.length},handleAdd:function(){var e=this;this.reset(),this.open=!0,this.title="添加学生错题记录",l().then((function(t){e.studentList=t.studentLists}))},handleUpdate:function(e){var t=this;this.reset();var a=e.id||this.ids;l(a).then((function(e){t.studentList=e.studentLists,t.form=e.data,t.open=!0,t.title="修改学生错题记录"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!=e.form.id?c(e.form).then((function(t){200===t.code?(e.msgSuccess("修改成功"),e.open=!1,e.getList()):e.msgError(t.msg)})):u(e.form).then((function(t){200===t.code?(e.msgSuccess("新增成功"),e.open=!1,e.getList()):e.msgError(t.msg)})))}))},handleDelete:function(e){var t=this,a=e.id||this.ids;this.$confirm('是否确认删除学生错题记录编号为"'+a+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return m(a)})).then((function(){t.getList(),t.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){var e=this,t=this.queryParams;this.$confirm("是否确认导出所有学生错题记录数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return d(t)})).then((function(t){e.download(t.msg)})).catch((function(){}))}}},v=p,f=a("2877"),h=Object(f["a"])(v,n,r,!1,null,null,null);t["default"]=h.exports}}]);