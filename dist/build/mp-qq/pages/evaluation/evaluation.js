(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/evaluation/evaluation"],{"1b4c":function(t,e,n){"use strict";n.r(e);var a=n("8a73"),i=n("4607");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("2428");var r=n("2877"),u=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},2428:function(t,e,n){"use strict";var a=n("9ac2"),i=n.n(a);i.a},4607:function(t,e,n){"use strict";n.r(e);var a=n("89e1"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"7b83":function(t,e,n){"use strict";(function(t){n("6cdc"),n("921b");a(n("66fd"));var e=a(n("1b4c"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("a821")["createPage"])},"89e1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("a34a")),i=n("802d");function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e,n,a,i,o,r){try{var u=t[o](r),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(a,i)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function r(t){s(o,a,i,r,u,"next",t)}function u(t){s(o,a,i,r,u,"throw",t)}r(void 0)}))}}var f=function(){return n.e("components/rf-rate/rf-rate").then(n.bind(null,"6c8d"))},d=function(){return n.e("components/uni-icons/uni-icons").then(n.bind(null,"2ba4"))},h={components:{rfRate:f,uniIcons:d},data:function(){return{productInfo:{},token:null,imageList:[],content:"",anonymousText:"不匿名",evaluationType:null,evaluate:{scores:5,content:"",is_anonymous:"0",covers:"",order_product_id:""}}},computed:{wordLimit:function(){return 140-this.evaluate.content.length}},onLoad:function(t){this.initData(t)},methods:{initData:function(e){this.productInfo=JSON.parse(e.data),this.evaluationType=e.type,this.token=t.getStorageSync("accessToken")||void 0;var n="发表评价";"add"===e.type&&(n="追加评价"),t.setNavigationBarTitle({title:n})},handleContentChange:function(t){this.evaluate.content=t.detail.value},handleScoreChange:function(t){this.evaluate.scores=t.value},handleImageDelete:function(t){this.imageList.splice(t,1)},handleAnonymousChange:function(t){t.detail.value?(this.evaluate.is_anonymous=1,this.anonymousText="匿名"):(this.evaluate.is_anonymous=0,this.anonymousText="不匿名")},uploadImage:function(){var e=this;t.chooseImage({count:6,sizeType:["original","compressed"],sourceType:["album"],success:function(t){e.handleUploadFile(t.tempFilePaths)}})},handleUploadFile:function(e){var n=this;e.forEach((function(e){t.uploadFile({url:i.uploadImage,filePath:e,name:"file",header:{"x-api-key":n.token,"merchant-id":1},formData:{"access-token":n.token,"merchant-id":1},success:function(e){t.hideLoading();var a=JSON.parse(e.data);200===a.code?n.imageList.push(a.data.url):this.$api.msg(a.message)}})}))},handleEvaluate:function(){var e=l(a.default.mark((function e(){var n,i;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.evaluate.order_product_id=this.productInfo.id,this.evaluate.covers=this.imageList,n={},t.showLoading({title:"评价中..."}),"add"!==this.evaluationType?(i=[],i.push(this.evaluate),n.evaluate=JSON.stringify(i),this.handleEvaluateCreate(n)):(n.again_content=this.evaluate.content,n.again_covers=JSON.stringify(this.imageList),this.handleEvaluateAgain(n));case 5:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),handleEvaluateCreate:function(){var e=l(a.default.mark((function e(n){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"加载中..."}),e.next=3,this.$post("".concat(i.evaluateCreate),u({},n)).then((function(){t.navigateBack({delta:2})}));case 3:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),handleEvaluateAgain:function(){var e=l(a.default.mark((function e(n){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"加载中..."}),e.next=3,this.$post("".concat(i.evaluateAgain,"?order_product_id=").concat(this.productInfo.id),u({},n)).then((function(){t.navigateBack({delta:2})}));case 3:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}()}};e.default=h}).call(this,n("a821")["default"])},"8a73":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}))},"9ac2":function(t,e,n){}},[["7b83","common/runtime","common/vendor"]]]);