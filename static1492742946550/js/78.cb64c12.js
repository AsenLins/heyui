webpackJsonp([78],{499:function(e,n,t){var o=t(0)(t(555),t(640),null,null);o.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/component/data/view/loading.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] loading.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},555:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{loading:!1,loading1:!1}},methods:{pageload:function(){var e=this;this.$Loading("加载中"),setTimeout(function(){e.$Loading.close()},3e3)}}}},640:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"doc"},[t("h2",[e._v("Loading 加载中")]),e._v(" "),t("div",[t("p",[t("Button",{on:{click:function(n){e.loading=!e.loading}}},[e._v("切换状态")])],1),e._v(" "),t("div",{staticClass:"text-center"},[e._v("\n      测试中\n      "),t("Loading",{attrs:{text:"测试",loading:e.loading}})],1)]),e._v(" "),t("div",[t("p",[t("Button",{on:{click:e.pageload}},[e._v("全局加载")])],1)])])},staticRenderFns:[]},e.exports.render._withStripped=!0}});