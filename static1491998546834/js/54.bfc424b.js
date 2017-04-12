webpackJsonp([54],{425:function(t,a,e){var o=e(0)(e(478),e(565),null,null);o.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/component/form/form.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] form.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},478:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{mode:"single",data:{input:"",textarea:"",radio:1,rate:null,checkbox:[1],money:{min:null,max:null},date:null,inputs:[]},dataParam:{1:"男",2:"女",3:"其他"},isLoading:!1,modeParam:{single:"默认single",block:"标题独立一行",twocolumn:"两列一行"},validationRules:{required:["inputs[].value","input","textarea","radio","rate","checkbox","money","date","money.min","money.max"]}}},methods:{add:function(){this.data.inputs.push({value:""})},remove:function(t){this.data.inputs.splice(t,1)}}}},565:function(t,a,e){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"doc"},[e("h2",[t._v("Form 表单")]),t._v(" "),e("h3",[t._v("基本")]),t._v(" "),e("div",[e("SwitchList",{attrs:{datas:t.modeParam},model:{value:t.mode,callback:function(a){t.mode=a},expression:"mode"}})],1),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"demo-box"},[e("div",{staticClass:"demo"},[e("Form",{attrs:{"label-width":90,mode:t.mode,model:t.data,rules:t.validationRules}},[e("FormItemList",t._l(t.data.inputs,function(a,o){return e("FormItem",{key:a,attrs:{label:"输入框"+(o+1),required:!0,prop:"inputs["+o+"].value"}},[e("Col",{attrs:{width:"18"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"item.value"}],attrs:{type:"text"},domProps:{value:a.value},on:{input:function(t){t.target.composing||(a.value=t.target.value)}}})]),e("Col",{staticClass:"text-right",attrs:{width:"6"}},[e("Button",{directives:[{name:"width",rawName:"v-width",value:"90%",expression:"'90%'"}],attrs:{"text-color":"red",block:!0,icon:"trash"},on:{click:function(a){t.remove(o)}}},[t._v("删除")])],1)],1)})),t._v(" "),e("FormItem",{attrs:{single:!0}},[e("Button",{attrs:{size:"s","text-color":"blue"},on:{click:t.add}},[t._v("添加输入框")])],1),t._v(" "),e("FormItem",{attrs:{single:!0,label:"输入框",prop:"input",required:!0}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.input,expression:"data.input"}],attrs:{type:"text"},domProps:{value:t.data.input},on:{input:function(a){a.target.composing||(t.data.input=a.target.value)}}})]),t._v(" "),e("FormItem",{attrs:{label:"金额",required:!0}},[e("div",{staticClass:"h-input-group"},[e("FormItem",{attrs:{prop:"money.min",label:"起始金额","show-label":!1}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.money.min,expression:"data.money.min"}],attrs:{type:"text",placeholder:"起始金额"},domProps:{value:t.data.money.min},on:{input:function(a){a.target.composing||(t.data.money.min=a.target.value)}}})]),t._v(" "),e("span",{staticClass:"h-input-addon"},[t._v("-")]),t._v(" "),e("FormItem",{attrs:{prop:"money.max",label:"结束金额","show-label":!1}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.money.max,expression:"data.money.max"}],attrs:{type:"text",placeholder:"结束金额"},domProps:{value:t.data.money.max},on:{input:function(a){a.target.composing||(t.data.money.max=a.target.value)}}})]),t._v(" "),e("span",{staticClass:"h-input-addon"},[t._v("K")])],1)]),t._v(" "),e("FormItem",{attrs:{label:"日期",required:!0,prop:"date"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.date,expression:"data.date"}],attrs:{type:"text",placeholder:"日期"},domProps:{value:t.data.date},on:{input:function(a){a.target.composing||(t.data.date=a.target.value)}}})]),t._v(" "),e("FormItem",{attrs:{label:"评分",required:!0,prop:"rate"}},[e("Rate",{attrs:{"show-text":!0},model:{value:t.data.rate,callback:function(a){t.data.rate=a},expression:"data.rate"}})],1),t._v(" "),e("FormItem",{attrs:{label:"多文本",single:!0,required:!0,prop:"textarea"}},[e("textarea",{directives:[{name:"autosize",rawName:"v-autosize"},{name:"model",rawName:"v-model",value:t.data.textarea,expression:"data.textarea"}],attrs:{rows:"3"},domProps:{value:t.data.textarea},on:{input:function(a){a.target.composing||(t.data.textarea=a.target.value)}}})]),t._v(" "),e("FormItem",{attrs:{label:"单选",prop:"radio"}},[e("Radio",{attrs:{datas:t.dataParam},model:{value:t.data.radio,callback:function(a){t.data.radio=a},expression:"data.radio"}})],1),t._v(" "),e("FormItem",{attrs:{label:"多选",prop:"checkbox"}},[e("Checkbox",{attrs:{datas:t.dataParam},model:{value:t.data.checkbox,callback:function(a){t.data.checkbox=a},expression:"data.checkbox"}})],1),t._v(" "),e("FormItem",[e("Button",{attrs:{color:"primary",size:"l",loading:t.isLoading},on:{click:function(a){t.isLoading=!t.isLoading}}},[t._v("提交")]),t._v("   "),e("Button",{attrs:{size:"l"},on:{click:function(a){t.isLoading=!t.isLoading}}},[t._v("取消")])],1)],1)],1)]),t._v("\n  "+t._s(t.data)+"\n\n  "),e("div",{staticClass:"demo-box"},[e("div",{staticClass:"demo"},[e("Form",{attrs:{mode:"inline"}},[e("FormItem",{attrs:{label:"用户名",required:!0}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.input,expression:"data.input"}],attrs:{type:"text"},domProps:{value:t.data.input},on:{input:function(a){a.target.composing||(t.data.input=a.target.value)}}})]),t._v(" "),e("FormItem",{attrs:{label:"密码",required:!0}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.textarea,expression:"data.textarea"}],attrs:{type:"password"},domProps:{value:t.data.textarea},on:{input:function(a){a.target.composing||(t.data.textarea=a.target.value)}}})]),t._v(" "),e("FormItem",[e("Button",{attrs:{color:"primary",loading:t.isLoading},on:{click:function(a){t.isLoading=!t.isLoading}}},[t._v("提交")])],1)],1)],1)]),t._v(" "),e("div",{staticClass:"demo-box"},[e("div",{staticClass:"demo"},[e("Form",{attrs:{mode:"inline"}},[e("FormItem",[e("div",{staticClass:"h-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.input,expression:"data.input"}],attrs:{type:"text"},domProps:{value:t.data.input},on:{input:function(a){a.target.composing||(t.data.input=a.target.value)}}}),e("i",{staticClass:"h-icon-user"})])]),t._v(" "),e("FormItem",[e("div",{staticClass:"h-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.textarea,expression:"data.textarea"}],attrs:{type:"password"},domProps:{value:t.data.textarea},on:{input:function(a){a.target.composing||(t.data.textarea=a.target.value)}}}),e("i",{staticClass:"h-icon-setting"})])]),t._v(" "),e("FormItem",[e("Button",{attrs:{color:"primary",loading:t.isLoading},on:{click:function(a){t.isLoading=!t.isLoading}}},[t._v("提交")])],1)],1)],1)]),t._v(" "),e("div",{staticClass:"demo-box"},[e("div",{staticClass:"demo"},[e("Form",{attrs:{mode:"inline"}},[e("FormItem",[e("div",{staticClass:"h-input-group"},[e("span",{staticClass:"h-input-addon"},[e("i",{staticClass:"h-icon-user"})]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.input,expression:"data.input"}],attrs:{type:"text"},domProps:{value:t.data.input},on:{input:function(a){a.target.composing||(t.data.input=a.target.value)}}})])]),t._v(" "),e("FormItem",[e("div",{staticClass:"h-input-group"},[e("span",{staticClass:"h-input-addon"},[e("i",{staticClass:"h-icon-setting"})]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.textarea,expression:"data.textarea"}],attrs:{type:"password"},domProps:{value:t.data.textarea},on:{input:function(a){a.target.composing||(t.data.textarea=a.target.value)}}})])]),t._v(" "),e("FormItem",[e("Button",{attrs:{color:"primary",loading:t.isLoading},on:{click:function(a){t.isLoading=!t.isLoading}}},[t._v("提交")])],1)],1)],1)])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});