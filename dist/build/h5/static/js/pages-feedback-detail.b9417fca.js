(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-feedback-detail"],{"29ac":function(e,t,a){"use strict";var i=a("86e9"),n=a.n(i);n.a},"32ad":function(e,t,a){"use strict";a.r(t);var i=a("a562"),n=a("8f40");for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("29ac");var o=a("2877"),d=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"5ade904c",null);t["default"]=d.exports},4042:function(e,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var n=i(a("3b8d")),r=a("802d"),o=i(a("b19a")),d={components:{rfImage:o.default},data:function(){return{feedbackDetail:{},feedbackType:[{value:"1",name:"功能建议"},{value:"2",name:"BUG反馈"},{value:"3",name:"业务咨询"}]}},onLoad:function(e){this.initData(e)},methods:{initData:function(e){this.getFeedbackDetail(e.id)},previewImage:function(e){uni.previewImage({urls:e})},getFeedbackDetail:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"反馈中..."}),e.next=3,this.$get("".concat(r.opinionDetail),{id:t}).then((function(e){a.feedbackDetail=e.data})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}};t.default=d},"41f5":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@font-face{font-family:uniicons;font-weight:400;font-style:normal;src:url(https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf) format("truetype")}uni-page-body[data-v-5ade904c]{background-color:#f8f6fc}uni-view[data-v-5ade904c]{font-size:%?28?%}.input-view[data-v-5ade904c]{font-size:%?28?%}.close-view[data-v-5ade904c]{text-align:center;line-height:14px;height:16px;width:16px;border-radius:50%;background:#ff5053;color:#fff;position:absolute;top:-6px;right:-4px;font-size:12px}.uni-uploader[data-v-5ade904c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-uploader-head[data-v-5ade904c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uni-uploader-info[data-v-5ade904c]{color:#b2b2b2}.uni-uploader-body[data-v-5ade904c]{margin-top:%?16?%}.uni-uploader__files[data-v-5ade904c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uni-uploader__file[data-v-5ade904c]{margin:%?10?%;width:%?210?%;height:%?210?%}.uni-uploader__img[data-v-5ade904c]{display:block;width:%?210?%;height:%?210?%}.uni-uploader__input-box[data-v-5ade904c]{position:relative;margin:%?10?%;width:%?208?%;height:%?208?%;border:%?2?% solid #d9d9d9}.uni-uploader__input-box[data-v-5ade904c]:after,.uni-uploader__input-box[data-v-5ade904c]:before{content:" ";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#d9d9d9}.uni-uploader__input-box[data-v-5ade904c]:before{width:%?4?%;height:%?79?%}.uni-uploader__input-box[data-v-5ade904c]:after{width:%?79?%;height:%?4?%}.uni-uploader__input-box[data-v-5ade904c]:active{border-color:#999}.uni-uploader__input-box[data-v-5ade904c]:active:after,.uni-uploader__input-box[data-v-5ade904c]:active:before{background-color:#999}.uni-uploader__input[data-v-5ade904c]{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;opacity:0}.feedback-title[data-v-5ade904c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?%;color:#8f8f94;font-size:%?28?%}.feedback-star-view.feedback-title[data-v-5ade904c]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;margin:0}.feedback-quick[data-v-5ade904c]{position:relative;padding-right:%?40?%}.feedback-quick[data-v-5ade904c]:after{font-family:uniicons;font-size:%?40?%;content:"";position:absolute;right:0;top:50%;color:#bbb;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.feedback-body[data-v-5ade904c]{background:#fff}.feedback-body .feedback-type[data-v-5ade904c]{padding:%?20?%}.feedback-body .feedback-type .feedback-type-item[data-v-5ade904c]{margin-right:%?20?%}.feedback-textare[data-v-5ade904c]{height:%?200?%;font-size:%?34?%;line-height:%?50?%;width:100%;box-sizing:border-box;padding:%?20?% %?30?% 0}.feedback-input[data-v-5ade904c]{font-size:%?28?%;height:%?72?%;min-height:%?50?%;padding:%?15?% %?20?%;line-height:%?72?%}.feedback-uploader[data-v-5ade904c]{padding:%?22?% %?20?%}.feedback-star[data-v-5ade904c]{font-family:uniicons;font-size:%?40?%;margin-left:%?6?%}.feedback-star-view[data-v-5ade904c]{margin-left:%?20?%}.feedback-star[data-v-5ade904c]:after{content:""}.feedback-star.active[data-v-5ade904c]{color:#ffb400}.feedback-star.active[data-v-5ade904c]:after{content:""}.feedback-submit[data-v-5ade904c]{background:#fa436a;color:#fff;margin:%?20?%}body.?%PAGE?%[data-v-5ade904c]{background-color:#f8f6fc}',""]),e.exports=t},"5ce8":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-image",{staticClass:"rf-image",attrs:{mode:"mode",src:e.src||"/static/errorImage.jpg"},on:{error:function(t){t=e.$handleEvent(t),e.onImageError(t)},click:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.previewImage(e.src)}}})},n=[];a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}))},"802d":function(e,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.rechargeConfigIndex=t.thirdPartyAuthDelete=t.thirdPartyAuthList=t.opinionDetail=t.opinionCreate=t.opinionList=t.uploadBase64Image=t.uploadImage=t.orderInvoiceList=t.invoiceDel=t.invoiceDefault=t.invoiceDetail=t.invoiceUpdate=t.invoiceCreate=t.invoiceList=t.evaluateAgain=t.evaluateCreate=t.creditsLogList=t.collectList=t.footPrintDel=t.footPrintList=t.couponReceive=t.orderTakeDelivery=t.orderDelete=t.orderDetail=t.closeOrderRefundApply=t.orderRefundApply=t.orderList=t.couponDetail=t.couponClear=t.myCouponList=t.couponList=t.addressDelete=t.addressUpdate=t.addressDetail=t.addressDefault=t.addressCreate=t.addressList=t.memberUpdate=t.memberInfo=void 0;var n=i(a("3e3e")),r="/tiny-shop/v1/member/member/index";t.memberInfo=r;var o="/tiny-shop/v1/member/member/update";t.memberUpdate=o;var d="/tiny-shop/v1/member/address/index";t.addressList=d;var c="/tiny-shop/v1/member/address/default";t.addressDefault=c;var s="/tiny-shop/v1/member/address/view";t.addressDetail=s;var l="/tiny-shop/v1/member/address/create";t.addressCreate=l;var u="/tiny-shop/v1/member/address/update";t.addressUpdate=u;var v="/tiny-shop/v1/member/address/delete";t.addressDelete=v;var f="/tiny-shop/v1/marketing/coupon-type/index";t.couponList=f;var p="/tiny-shop/v1/member/coupon/index";t.myCouponList=p;var b="/tiny-shop/v1/marketing/coupon-type/view";t.couponDetail=b;var m="/tiny-shop/v1/marketing/coupon-type/create";t.couponReceive=m;var h="/tiny-shop/v1/member/coupon/clear";t.couponClear=h;var y="/tiny-shop/v1/member/order/index";t.orderList=y;var g="/tiny-shop/v1/member/order/take-delivery";t.orderTakeDelivery=g;var k="/tiny-shop/v1/member/order-product/refund-apply";t.orderRefundApply=k;var w="/tiny-shop/v1/member/order-product/refund-close";t.closeOrderRefundApply=w;var x="/tiny-shop/v1/member/order/view";t.orderDetail=x;var _="/tiny-shop/v1/member/order/delete";t.orderDelete=_;var D="/tiny-shop/v1/member/footprint/index";t.footPrintList=D;var C="/tiny-shop/v1/member/footprint/delete";t.footPrintDel=C;var L="/tiny-shop/v1/member/collect/index";t.collectList=L;var I="/tiny-shop/v1/member/credits-log/index";t.creditsLogList=I;var j="/tiny-shop/v1/member/evaluate/create";t.evaluateCreate=j;var P="/tiny-shop/v1/member/evaluate/again";t.evaluateAgain=P;var z="/tiny-shop/v1/member/invoice/index";t.invoiceList=z;var A="/tiny-shop/v1/member/invoice/create";t.invoiceCreate=A;var R="/tiny-shop/v1/member/invoice/update";t.invoiceUpdate=R;var E="/tiny-shop/v1/member/invoice/view";t.invoiceDetail=E;var M="/tiny-shop/v1/member/invoice/default";t.invoiceDefault=M;var O="/tiny-shop/v1/member/invoice/delete";t.invoiceDel=O;var U="/tiny-shop/v1/member/order-invoice/index";t.orderInvoiceList=U;var $="/tiny-shop/v1/member/opinion/index";t.opinionList=$;var B="/tiny-shop/v1/member/opinion/create";t.opinionCreate=B;var T="/tiny-shop/v1/member/opinion/view";t.opinionDetail=T;var q="/tiny-shop/v1/member/auth/index";t.thirdPartyAuthList=q;var F="/tiny-shop/v1/member/auth/delete";t.thirdPartyAuthDelete=F;var G="/tiny-shop/v1/member/recharge-config/index";t.rechargeConfigIndex=G;var J="".concat(n.default,"/tiny-shop/v1/common/file/images");t.uploadImage=J;var Q="".concat(n.default,"/tiny-shop/v1/common/file/base64");t.uploadBase64Image=Q},"86e9":function(e,t,a){var i=a("41f5");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("5d2249c9",i,!0,{sourceMap:!1,shadowMode:!1})},"8ab6":function(e,t,a){"use strict";var i=a("d65c"),n=a.n(i);n.a},"8f40":function(e,t,a){"use strict";a.r(t);var i=a("4042"),n=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},9192:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".rf-image[data-v-503d7d1c]{width:100%;height:100%}",""]),e.exports=t},a562:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"page"},[a("v-uni-view",{staticClass:"feedback-title"},[a("v-uni-text",[e._v("问题和意见")])],1),a("v-uni-view",{staticClass:"feedback-body"},[a("v-uni-textarea",{staticClass:"feedback-textare",attrs:{disabled:"",value:e.feedbackDetail.content}})],1),a("v-uni-view",{staticClass:"feedback-title"},[a("v-uni-text",[e._v("图片")])],1),a("v-uni-view",{staticClass:"uni-uploader-body"},[a("v-uni-view",{staticClass:"uni-uploader__files"},[e._l(e.feedbackDetail.covers,(function(e,t){return[a("v-uni-view",{key:t+"_0",staticClass:"uni-uploader__file"},[a("rf-image",{staticClass:"uni-uploader__img",attrs:{src:e}})],1)]}))],2)],1),a("v-uni-view",{staticClass:"feedback-title"},[a("v-uni-text",[e._v("反馈类型")])],1),a("v-uni-view",{staticClass:"feedback-body"},[a("v-uni-radio-group",{staticClass:"feedback-type"},e._l(e.feedbackType,(function(t,i){return a("v-uni-label",{key:i,staticClass:"feedback-type-item"},[a("v-uni-radio",{attrs:{color:"#fa436a",disabled:"",value:t.value,checked:t.value==e.feedbackDetail.type}}),a("v-uni-text",[e._v(e._s(t.name))])],1)})),1)],1),a("v-uni-view",{staticClass:"feedback-title"},[a("v-uni-text",[e._v("QQ/邮箱/手机号")])],1),a("v-uni-view",{staticClass:"feedback-body"},[a("v-uni-input",{staticClass:"feedback-input",attrs:{disabled:"",value:e.feedbackDetail.contact_way||"暂未留下联系方式"}})],1),a("v-uni-view",{staticClass:"feedback-title"},[a("v-uni-text",[e._v("回复内容")])],1),a("v-uni-view",{staticClass:"feedback-body"},[a("v-uni-textarea",{staticClass:"feedback-textare",attrs:{disabled:"",value:e.feedbackDetail.reply||"管理员未回复"}})],1)],1)},n=[];a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}))},b19a:function(e,t,a){"use strict";a.r(t);var i=a("5ce8"),n=a("ee7e");for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("8ab6");var o=a("2877"),d=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"503d7d1c",null);t["default"]=d.exports},d65c:function(e,t,a){var i=a("9192");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("ce55e2f4",i,!0,{sourceMap:!1,shadowMode:!1})},ee7e:function(e,t,a){"use strict";a.r(t);var i=a("f5c7"),n=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},f5c7:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("28a5");var i={name:"rfImage",props:{src:{type:String,default:"/static/errorImage.jpg"},mode:{type:String,default:"aspectFill"},isPreviewImage:{type:Boolean,default:!0}},methods:{onImageError:function(){this.src="/static/errorImage.jpg"},previewImage:function(e){this.isPreviewImage&&e&&uni.previewImage({urls:e.split("#$#")})}}};t.default=i}}]);