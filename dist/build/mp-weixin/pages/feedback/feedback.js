(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/feedback/feedback"],{"28d7":function(e,t,n){"use strict";n.r(t);var a=n("4fe7"),o=n("ac29");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("44cf");var c=n("2877"),r=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports},"2a71":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("a34a")),o=n("802d");function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n,a,o,i,c){try{var r=e[i](c),s=r.value}catch(u){return void n(u)}r.done?t(s):Promise.resolve(s).then(a,o)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function c(e){u(i,a,o,c,r,"next",e)}function r(e){u(i,a,o,c,r,"throw",e)}c(void 0)}))}}var l={data:function(){return{msgContents:["界面显示错乱","启动缓慢，卡出翔了","UI无法直视，丑哭了","偶发性崩溃"],stars:[1,2,3,4,5],token:null,imageList:[],feedbackType:[{value:"1",name:"功能建议"},{value:"2",name:"BUG反馈"},{value:"3",name:"业务咨询"}],sendDate:{type:"1",covers:"",content:"",contact_way:""}}},onLoad:function(){this.token=e.getStorageSync("accessToken")||void 0},methods:{handleFeedbackTypeChange:function(e){this.sendDate.type=e.detail.value},uploadImage:function(){var t=this;e.chooseImage({count:6,sizeType:["original","compressed"],sourceType:["album"],success:function(e){t.handleUploadFile(e.tempFilePaths)}})},handleUploadFile:function(t){var n=this;t.forEach((function(t){e.uploadFile({url:o.uploadImage,filePath:t,name:"file",header:{"x-api-key":n.token,"merchant-id":1},formData:{"access-token":n.token,"merchant-id":1},success:function(t){e.hideLoading();var a=JSON.parse(t.data);200===a.code?n.imageList.push(a.data.url):e.showToast({title:a.message,icon:"none"})}})}))},close:function(e){this.imageList.splice(e,1)},chooseMsg:function(){var t=this;e.showActionSheet({itemList:this.msgContents,success:function(e){t.sendDate.content=t.msgContents[e.tapIndex]}})},chooseImg:function(){var t=this;e.chooseImage({sourceType:["camera","album"],sizeType:"compressed",count:8-this.imageList.length,success:function(e){t.imageList=t.imageList.concat(e.tempFilePaths)}})},previewImage:function(){e.previewImage({urls:this.imageList})},send:function(){var t=f(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.sendDate.covers=JSON.stringify(this.imageList),e.showLoading({title:"反馈中..."}),t.next=4,this.$post("".concat(o.opinionCreate),r({},this.sendDate)).then((function(t){200===t.code?e.navigateBack({delta:1}):e.showToast({title:t.message,icon:"none"})})).catch((function(e){console.log(e)}));case 4:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}};t.default=l}).call(this,n("543d")["default"])},"44cf":function(e,t,n){"use strict";var a=n("8033"),o=n.n(a);o.a},"4fe7":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}))},8033:function(e,t,n){},"8a32":function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");a(n("66fd"));var t=a(n("28d7"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},ac29:function(e,t,n){"use strict";n.r(t);var a=n("2a71"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a}},[["8a32","common/runtime","common/vendor"]]]);