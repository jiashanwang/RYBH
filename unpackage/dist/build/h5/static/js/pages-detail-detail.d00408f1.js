(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail"],{"0133":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-numberbox[data-v-5634e5e7]{display:inline-flex;align-items:center}.u-number-input[data-v-5634e5e7]{position:relative;text-align:center;padding:0;margin:0 %?6?%;display:flex;flex-direction:row;align-items:center;justify-content:center}.u-icon-plus[data-v-5634e5e7],\n.u-icon-minus[data-v-5634e5e7]{width:%?60?%;display:flex;flex-direction:row;justify-content:center;align-items:center}.u-icon-plus[data-v-5634e5e7]{border-radius:0 %?8?% %?8?% 0}.u-icon-minus[data-v-5634e5e7]{border-radius:%?8?% 0 0 %?8?%}.u-icon-disabled[data-v-5634e5e7]{color:#c8c9cc!important;background:#f7f8fa!important}.u-input-disabled[data-v-5634e5e7]{color:#c8c9cc!important;background-color:#f2f3f5!important}',""]),t.exports=e},"0b27":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uIcon:i("ae8b").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-numberbox"},[i("v-uni-view",{staticClass:"u-icon-minus",class:{"u-icon-disabled":t.disabled||t.inputVal<=t.min},style:{background:t.bgColor,height:t.inputHeight+"rpx",color:t.color},on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.btnTouchStart("minus")},touchend:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clearTimer.apply(void 0,arguments)}}},[i("u-icon",{attrs:{name:"minus",size:t.size}})],1),i("v-uni-input",{staticClass:"u-number-input",class:{"u-input-disabled":t.disabled},style:{color:t.color,fontSize:t.size+"rpx",background:t.bgColor,height:t.inputHeight+"rpx",width:t.inputWidth+"rpx"},attrs:{disabled:t.disabledInput||t.disabled,"cursor-spacing":t.getCursorSpacing,type:"number"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)}},model:{value:t.inputVal,callback:function(e){t.inputVal=e},expression:"inputVal"}}),i("v-uni-view",{staticClass:"u-icon-plus",class:{"u-icon-disabled":t.disabled||t.inputVal>=t.max},style:{background:t.bgColor,height:t.inputHeight+"rpx",color:t.color},on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.btnTouchStart("plus")},touchend:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clearTimer.apply(void 0,arguments)}}},[i("u-icon",{attrs:{name:"plus",size:t.size}})],1)],1)},r=[]},"0de2":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("c975"),i("b64b"),i("ac1f"),i("00b4");var a={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1},tmpConfig:{}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.tmpConfig.type)>=0&&this.tmpConfig.icon){var t=this.$u.type2icon(this.tmpConfig.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var e=this;this.tmpConfig=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){e.isShow=!1,clearTimeout(e.timer),e.timer=null,"function"===typeof e.tmpConfig.callback&&e.tmpConfig.callback(),e.timeEnd()}),this.tmpConfig.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.tmpConfig.url){if("/"!=this.tmpConfig.url[0]&&(this.tmpConfig.url="/"+this.tmpConfig.url),Object.keys(this.tmpConfig.params).length){var t="";/.*\/.*\?.*=.*/.test(this.tmpConfig.url)?(t=this.$u.queryParams(this.tmpConfig.params,!1),this.tmpConfig.url=this.tmpConfig.url+"&"+t):(t=this.$u.queryParams(this.tmpConfig.params),this.tmpConfig.url+=t)}this.tmpConfig.isTab?uni.switchTab({url:this.tmpConfig.url}):uni.navigateTo({url:this.tmpConfig.url})}else this.tmpConfig.back&&this.$u.route({type:"back"})}}};e.default=a},1560:function(t,e,i){"use strict";i.r(e);var a=i("0b27"),n=i("aa6b");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("3e26");var o=i("f0c5"),u=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"5634e5e7",null,!1,a["a"],void 0);e["default"]=u.exports},"26b5":function(t,e,i){"use strict";i.r(e);var a=i("bf69"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},2894:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */',""]),t.exports=e},"33b0":function(t,e,i){"use strict";var a=i("c22d"),n=i.n(a);n.a},3573:function(t,e,i){"use strict";var a=i("509b"),n=i.n(a);n.a},"35c8":function(t,e,i){"use strict";i.r(e);var a=i("0de2"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"3c8a":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-toast[data-v-36307caf]{position:fixed;z-index:-1;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:%?18?% %?40?%}.u-toast.u-show[data-v-36307caf]{opacity:1}.u-icon[data-v-36307caf]{margin-right:%?10?%;display:flex;flex-direction:row;align-items:center;line-height:normal}.u-position-center[data-v-36307caf]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:70%}.u-position-top[data-v-36307caf]{left:50%;top:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-position-bottom[data-v-36307caf]{left:50%;bottom:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-type-primary[data-v-36307caf]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-36307caf]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-36307caf]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-36307caf]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-36307caf]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-36307caf]{color:#fff;background-color:#585858}',""]),t.exports=e},"3e26":function(t,e,i){"use strict";var a=i("e48a"),n=i.n(a);n.a},4710:function(t,e,i){"use strict";i.r(e);var a=i("83ba"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"509b":function(t,e,i){var a=i("3c8a");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("715a93f4",a,!0,{sourceMap:!1,shadowMode:!1})},"531d":function(t,e,i){"use strict";var a=i("c73e"),n=i.n(a);n.a},"548d":function(t,e,i){"use strict";i.r(e);var a=i("da74"),n=i("26b5");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("33b0");var o=i("f0c5"),u=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"d41a7778",null,!1,a["a"],void 0);e["default"]=u.exports},"5d53":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-image[data-v-d41a7778]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-d41a7778]{width:100%;height:100%}.u-image__loading[data-v-d41a7778], .u-image__error[data-v-d41a7778]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e},"5ea4":function(t,e,i){"use strict";i.r(e);var a=i("6f80"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"61c9":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.guige[data-v-308f8e39]{display:flex;padding:%?30?%;justify-content:space-between;align-items:center;background-color:#fff}.card-container[data-v-308f8e39]{display:block;\n  /* margin:0 24rpx; */background-color:#f5f5f5;position:relative}.card-header[data-v-308f8e39]{display:block;padding:0 %?24?%;height:%?180?%;display:flex;justify-content:space-between;align-items:center;background-color:#fff;position:relative}.left-wrap[data-v-308f8e39]{display:flex;justify-content:flex-start;align-items:center;height:%?180?%}.product-desc[data-v-308f8e39]{display:flex;flex-direction:column;justify-content:space-around;align-items:flex-start;margin-left:%?15?%;height:%?150?%}.img-wrap .img[data-v-308f8e39]{height:%?150?%;border-radius:%?15?%}.face-value[data-v-308f8e39],\n.use-desc[data-v-308f8e39]{color:#999;font-size:%?24?%}.use-desc[data-v-308f8e39]{background-color:#fff;padding:%?40?% %?24?%}.notice-desc[data-v-308f8e39]{background-color:#fff6eb;color:#eb8013;height:%?40?%;line-height:%?40?%;border-radius:%?20?%;padding-left:%?16?%;padding-right:%?16?%;font-size:%?20?%;position:absolute;bottom:%?10?%;right:%?24?%}.line-operate-mid[data-v-308f8e39]{width:100%;height:%?10?%;background-color:#f4f4f5}.line-operate[data-v-308f8e39]{height:%?30?%;background-color:#fff;border-bottom:%?1?% solid #eee}.buy-wrap[data-v-308f8e39]{font-size:%?34?%;display:flex;justify-content:space-between;align-items:center;height:%?140?%;line-height:%?140?%;background-color:#fff}.buy-operate[data-v-308f8e39]{display:flex;justify-content:center;align-items:center;height:100%}.buy-operate .reduce[data-v-308f8e39],\n.buy-operate .add[data-v-308f8e39]{width:%?70?%;height:%?80?%;line-height:%?80?%;text-align:center;border:%?1?% solid #f2f2f2}.buy-operate .num-input[data-v-308f8e39]{width:%?80?%;height:%?80?%;text-align:center;line-height:%?80?%;background-color:#f8f8f8;border-top:%?1?% solid #f2f2f2;border-bottom:%?1?% solid #f2f2f2}.total-wrap[data-v-308f8e39]{display:flex;justify-content:space-between;height:%?80?%;line-height:%?80?%;background-color:#fff}.total-wrap .title[data-v-308f8e39]{width:%?200?%}.footer-wrap[data-v-308f8e39]{display:flex;justify-content:space-around;align-items:center;position:fixed;bottom:%?0?%;left:%?24?%;right:%?24?%;height:%?140?%;font-size:%?32?%}.pay-type[data-v-308f8e39]{background-color:#fff}.left-box[data-v-308f8e39]{display:flex;justify-content:flex-start;align-items:center;flex:1}.price-style[data-v-308f8e39],\n.total-style[data-v-308f8e39]{color:#eb8013;width:%?100?%;margin-left:%?10?%}.total-style[data-v-308f8e39]{flex:1;text-align:right}.buy-btn[data-v-308f8e39]{width:%?190?%;text-align:center;color:#fff;height:%?70?%;line-height:%?70?%;background:linear-gradient(90deg,#fdb208,#f97b04);letter-spacing:%?5?%;border-radius:%?40?%}.total-num[data-v-308f8e39]{flex:1}.total-money[data-v-308f8e39]{flex:2}.pay-box[data-v-308f8e39]{background-color:#fff}',""]),t.exports=e},6232:function(t,e,i){"use strict";i.r(e);var a=i("d87a"),n=i("5ea4");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("a46f");var o=i("f0c5"),u=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"8763095c",null,!1,a["a"],void 0);e["default"]=u.exports},"6f80":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var a={name:"u-gap",props:{bgColor:{type:String,default:"transparent "},height:{type:[String,Number],default:30},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0}},computed:{gapStyle:function(){return{backgroundColor:this.bgColor,height:this.height+"rpx",marginTop:this.marginTop+"rpx",marginBottom:this.marginBottom+"rpx"}}}};e.default=a},"83ba":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d401"),i("d3b7"),i("25f0");var n=a(i("5530")),r={data:function(){return{ipAddress:"",payType:"alipay",goodsUrl:"",orderData:{},buyNum:1,totalPrice:0,list:[{name:"支付宝",disabled:!0}],value:"微信"}},onLoad:function(t){this.orderData=JSON.parse(decodeURIComponent(t.orderData)),this.totalPrice=this.orderData.amount},methods:{handleExchangePay:function(){var t=this,e=window.sessionStorage.getItem("outOrderNo"),i=2;e||(e=this.randomNumber(),i=1);var a=this.totalPrice,r={outtradeno:e,amount:a,orderType:i,openid:"",appid:"",productName:this.orderData.name,buyNum:this.buyNum,detailImg:this.orderData.icon};uni.request({url:"http://aaa.itgy.com.cn/paybackcmj/miniprogram/createPayOrder",data:(0,n.default)({},r),method:"POST",success:function(i){var n=i.data;if(0==n.code){var r=n.data;t.ipAddress=r,uni.setStorageSync("ipAddress",r),t.getAliPayFormData(e,a)}}})},valChange:function(t){console.log("当前值为: "+t.value);var e=t.value;this.totalPrice=this.orderData.amount*e},randomNumber:function(){var t=new Date,e=t.getMonth()+1,i=t.getDate(),a=t.getHours(),n=t.getMinutes(),r=t.getSeconds();e=e<10?"0"+e:e,i=i<10?"0"+i:i,a=a<10?"0"+a:a,n=n<10?"0"+n:n,r=r<10?"0"+r:r;var o=t.getFullYear().toString()+e.toString()+i+a+n+r+Math.round(1e6*Math.random()).toString();return o},generateCode:function(t){var e=document.createElement("a"),i="newpage";e.setAttribute("href",t),e.setAttribute("target","_self"),e.setAttribute("id",i),document.getElementById(i)||document.body.appendChild(e),e.click()},getAliPayFormData:function(t,e){var i=this,a={outOrderNo:t,amount:e,appid:"2021004125637397",notify_url_ali:"",goodsName:this.orderData.name};uni.request({url:"http://aaa.itgy.com.cn/paybackcmj/order/getAliPayObject",data:(0,n.default)({},a),method:"POST",success:function(t){var e=t.data;i.generateCode(e)}})},radioGroupChange:function(t){this.payType="微信"==t?"wxpay":"alipay"},radioChange:function(t){this.payType="微信"==t?"wxpay":"alipay"},exchangePay:function(){this.$refs.uToast.show({type:"success",message:"正在跳转支付页面......",duration:3e3})},plusClick:function(){var t=this.buyNum+1;this.totalPrice=t*this.orderData.amount},minusClick:function(t){var e=this.buyNum-1;this.totalPrice=e*this.orderData.amount}}};e.default=r},"8a1b":function(t,e,i){"use strict";i.r(e);var a=i("d19e"),n=i("35c8");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("3573");var o=i("f0c5"),u=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"36307caf",null,!1,a["a"],void 0);e["default"]=u.exports},9509:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("ac1f"),i("00b4"),i("c975"),i("d401"),i("d3b7"),i("25f0");var a={name:"u-number-box",props:{value:{type:Number,default:1},bgColor:{type:String,default:"#F2F3F5"},min:{type:Number,default:0},max:{type:Number,default:99999},step:{type:Number,default:1},disabled:{type:Boolean,default:!1},size:{type:[Number,String],default:26},color:{type:String,default:"#323233"},inputWidth:{type:[Number,String],default:80},inputHeight:{type:[Number,String],default:50},index:{type:[Number,String],default:""},disabledInput:{type:Boolean,default:!1},cursorSpacing:{type:[Number,String],default:100},longPress:{type:Boolean,default:!0},pressTime:{type:[Number,String],default:250},positiveInteger:{type:Boolean,default:!0}},watch:{value:function(t,e){this.changeFromInner||(this.inputVal=t,this.$nextTick((function(){this.changeFromInner=!1})))},inputVal:function(t,e){var i=this;if(""!=t){var a=0,n=this.$u.test.number(t);a=n&&t>=this.min&&t<=this.max?t:e,this.positiveInteger&&(t<0||-1!==String(t).indexOf("."))&&(a=e,this.$nextTick((function(){i.inputVal=e}))),this.handleChange(a,"change")}}},data:function(){return{inputVal:1,timer:null,changeFromInner:!1,innerChangeTimer:null}},created:function(){this.inputVal=Number(this.value)},computed:{getCursorSpacing:function(){return Number(uni.upx2px(this.cursorSpacing))}},methods:{btnTouchStart:function(t){var e=this;this[t](),this.longPress&&(clearInterval(this.timer),this.timer=null,this.timer=setInterval((function(){e[t]()}),this.pressTime))},clearTimer:function(){var t=this;this.$nextTick((function(){clearInterval(t.timer),t.timer=null}))},minus:function(){this.computeVal("minus")},plus:function(){this.computeVal("plus")},calcPlus:function(t,e){var i,a,n;try{a=t.toString().split(".")[1].length}catch(o){a=0}try{n=e.toString().split(".")[1].length}catch(o){n=0}i=Math.pow(10,Math.max(a,n));var r=a>=n?a:n;return((t*i+e*i)/i).toFixed(r)},calcMinus:function(t,e){var i,a,n;try{a=t.toString().split(".")[1].length}catch(o){a=0}try{n=e.toString().split(".")[1].length}catch(o){n=0}i=Math.pow(10,Math.max(a,n));var r=a>=n?a:n;return((t*i-e*i)/i).toFixed(r)},computeVal:function(t){if(uni.hideKeyboard(),!this.disabled){var e=0;"minus"===t?e=this.calcMinus(this.inputVal,this.step):"plus"===t&&(e=this.calcPlus(this.inputVal,this.step)),e<this.min||e>this.max||(this.inputVal=e,this.handleChange(e,t))}},onBlur:function(t){var e=this,i=0,a=t.detail.value;/(^\d+$)/.test(a)&&0!=a[0]||(i=this.min),i=+a,i>this.max?i=this.max:i<this.min&&(i=this.min),this.$nextTick((function(){e.inputVal=i})),this.handleChange(i,"blur")},onFocus:function(){this.$emit("focus")},handleChange:function(t,e){var i=this;this.disabled||(this.innerChangeTimer&&(clearTimeout(this.innerChangeTimer),this.innerChangeTimer=null),this.changeFromInner=!0,this.innerChangeTimer=setTimeout((function(){i.changeFromInner=!1}),150),this.$emit("input",Number(t)),this.$emit(e,{value:Number(t),index:this.index}))}}};e.default=a},"98cb":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uImage:i("548d").default,uNumberBox:i("1560").default,uGap:i("6232").default,uToast:i("8a1b").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"card-container"},[i("v-uni-view",{staticClass:"card-header"},[i("v-uni-view",{staticClass:"left-wrap"},[i("v-uni-view",{staticClass:"img-wrap"},[i("u-image",{attrs:{src:t.orderData.icon,width:"140rpx",height:"140rpx",shape:"square"}})],1),i("v-uni-view",{staticClass:"product-desc"},[i("v-uni-view",{staticClass:"name u-font-lg"},[t._v(t._s(t.orderData.name))]),i("v-uni-view",{staticClass:"face-value"},[t._v("价格："+t._s(t.orderData.amount)+"元")])],1)],1),i("v-uni-view",{staticClass:"notice-desc"},[t._v("支持 7 天无理由退换货")])],1),i("v-uni-view",{staticClass:"line-operate"}),i("v-uni-view",{staticClass:"guige"},[i("v-uni-view",[t._v("规格：默认规格")]),i("v-uni-view",[t._v("包装：默认包装")])],1),i("v-uni-view",{staticClass:"use-desc"},[t._v('支付成功后，可前往 "个人中心 - 我的订单" 查看')]),i("v-uni-view",{staticClass:"buy-wrap u-padding-10"},[i("v-uni-view",{staticClass:"buy-title"},[t._v("购买数量")]),i("v-uni-view",{staticClass:"buy-operate"},[i("u-number-box",{attrs:{min:1,max:100,integer:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.valChange.apply(void 0,arguments)}},model:{value:t.buyNum,callback:function(e){t.buyNum=e},expression:"buyNum"}})],1)],1),i("u-gap",{attrs:{height:"10","bg-color":"#f4f4f5"}}),i("v-uni-view",{staticClass:"total-wrap product-total u-padding-10"},[i("v-uni-view",{staticClass:"title u-font-xl"},[t._v("商品合计")]),i("v-uni-view",{staticClass:"total-style"},[t._v("¥ "+t._s(t.totalPrice))])],1),i("v-uni-view",{staticClass:"total-wrap u-padding-10"},[i("v-uni-view",{staticClass:"title u-font-xl"},[t._v("快递费")]),i("v-uni-view",{staticClass:"total-style u-font-md"},[t._v("包邮到家")])],1),i("v-uni-view",{staticClass:"footer-wrap"},[i("v-uni-view",{staticClass:"left-box"},[i("v-uni-view",{staticClass:"total-num"},[t._v("共 "+t._s(t.buyNum)+" 件")]),i("v-uni-view",{staticClass:"total-money u-flex-row"},[t._v("合计"),i("i",{staticClass:"price-style"},[t._v("¥ "+t._s(t.totalPrice))])])],1),i("v-uni-view",{staticClass:"buy-btn u-font-lg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleExchangePay.apply(void 0,arguments)}}},[t._v("立即支付")])],1),i("u-toast",{ref:"uToast"})],1)},r=[]},a46f:function(t,e,i){"use strict";var a=i("ad1f"),n=i.n(a);n.a},a87b:function(t,e,i){"use strict";i.r(e);var a=i("98cb"),n=i("4710");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("531d");var o=i("f0c5"),u=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"308f8e39",null,!1,a["a"],void 0);e["default"]=u.exports},aa6b:function(t,e,i){"use strict";i.r(e);var a=i("9509"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},ad1f:function(t,e,i){var a=i("2894");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4ee7a15f",a,!0,{sourceMap:!1,shadowMode:!1})},bf69:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var a={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(){this.loading=!1,this.isError=!0,this.$emit("error")},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=a},c22d:function(t,e,i){var a=i("5d53");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("79667f20",a,!0,{sourceMap:!1,shadowMode:!1})},c73e:function(t,e,i){var a=i("61c9");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("ae864008",a,!0,{sourceMap:!1,shadowMode:!1})},d19e:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uIcon:i("ae8b").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.tmpConfig.type,"u-position-"+t.tmpConfig.position],style:{zIndex:t.uZIndex}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[t.tmpConfig.icon?i("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.tmpConfig.type}}):t._e()],1),i("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.tmpConfig.title))])],1)},r=[]},d87a:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"u-gap",style:[this.gapStyle]})},n=[]},da74:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uIcon:i("ae8b").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():i("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?i("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):i("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?i("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):i("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},r=[]},e48a:function(t,e,i){var a=i("0133");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("86cd12de",a,!0,{sourceMap:!1,shadowMode:!1})}}]);