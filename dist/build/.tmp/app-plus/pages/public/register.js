(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/public/register"],{"0730":function(e,t,n){"use strict";var o=n("94f1"),r=n.n(o);r.a},1863:function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");o(n("66fd"));var t=o(n("31ae"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"31ae":function(e,t,n){"use strict";n.r(t);var o=n("3fb5"),r=n("9fba");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("0730");var a=n("2877"),c=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,"6c0bdb32",null);t["default"]=c.exports},"3fb5":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}))},"94f1":function(e,t,n){},"9fba":function(e,t,n){"use strict";n.r(t);var o=n("bb46"),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},bb46:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n("a34a")),i=n("2f62"),a=n("7ded");function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,o,r,i,a){try{var c=e[i](a),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(o,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function a(e){s(i,o,r,a,c,"next",e)}function c(e){s(i,o,r,a,c,"throw",e)}a(void 0)}))}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=n("9564"),p={data:function(){return{mobile:"",password:"",logining:!1,smsCodeBtnDisabled:!1,codeSeconds:60}},onLoad:function(){},methods:f({},(0,i.mapMutations)(["login"]),{blurMobileChange:function(e){this.mobile=e.detail.value},blurPasswordChange:function(e){this.password=e.detail.value},blurRePasswordChange:function(t){this.password!==t.detail.value&&e.showToast({title:"两次输入的密码不一致",icon:"none"})},navBack:function(){e.navigateBack()},navTo:function(t){e.navigateTo({url:t})},getSmsCode:function(){var t=this;this.checkPhoneIsValid(this.mobile)&&(e.showLoading({title:"获取中..."}),this.$post(a.smsCode,{mobile:this.mobile,usage:"register"}).then((function(n){if(200===n.code){e.showToast({title:"验证码发送成功, 验证码是".concat(n.data),icon:"none"}),t.smsCodeBtnDisabled=!0;var o=59,r=setInterval((function(){0===o?(clearInterval(r),t.smsCodeBtnDisabled=!1):(t.codeSeconds=o,t.smsCodeBtnDisabled=!0,o--)}),1e3)}else e.showToast({title:n.message,icon:"none"})})).catch((function(e){console.log(o(e," at pages/public/register.vue:157"))})))},checkPhoneIsValid:function(t){if(!t.length<0)return e.showToast({title:"请输入11位的手机号",icon:"none"}),!1;var n=/^1[0-9]{10,10}$/;return!!n.test(t)||(e.showToast({title:"请输入正确的手机号",icon:"none"}),!1)},toRegister:function(){var t=u(r.default.mark((function t(n){var i,c,s,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=n.detail.value,i.password===i.password_repetition){t.next=4;break}return e.showToast({title:"两次输入的密码不一致",icon:"none"}),t.abrupt("return");case 4:if(c=[{name:"mobile",checkType:"phoneno",checkRule:"11,11",errorMsg:"请输入正确的手机号"},{name:"code",checkType:"notnull",checkRule:"",errorMsg:"请输入验证码"},{name:"password",checkType:"string",checkRule:"6,20",errorMsg:"密码长度为6-20位"},{name:"password_repetition",checkType:"notnull",checkRule:"",errorMsg:"请输入确认密码"},{name:"realname",checkType:"string",checkRule:"2,6",errorMsg:"姓名应为2-6个字符"}],s=h.check(i,c),s){t.next=9;break}return e.showToast({title:h.error,icon:"none"}),t.abrupt("return");case 9:e.showLoading({title:"注册中..."}),u={},u.group="tinyShopApp",this.$post(a.registerByPass,f({},u,{},i)).then((function(t){200===t.code?(e.showToast({title:"恭喜您注册成功！",icon:"none"}),e.navigateTo({url:"/pages/public/login"})):e.showToast({title:t.message,icon:"none"})})).catch((function(e){console.log(o(e," at pages/public/register.vue:225"))}));case 13:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}()})};t.default=p}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["1863","common/runtime","common/vendor"]]]);