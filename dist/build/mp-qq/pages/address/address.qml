<view class="content b-t"><block wx:for="{{$root.l0}}" wx:for-item="item" wx:for-index="index" wx:key="index"><view data-event-opts="{{[['tap',[['checkAddress',['$0'],[[['addressList','',index]]]]]]]}}" class="list b-b" bindtap="__e"><view data-event-opts="{{[['touchstart',[['goTouchStart',['$0'],[[['addressList','',index,'id']]]]]],['touchmove',[['goTouchMove',['$event']]]],['touchend',[['goTouchEnd',['$event']]]]]}}" class="wrapper" bindtouchstart="__e" bindtouchmove="__e" bindtouchend="__e"><view class="address-box"><block wx:if="{{item.m0===1}}"><text class="tag">默认</text></block><text class="address">{{item.$orig.address_name+" "+item.$orig.address_details}}</text></view><view class="u-box"><text class="name">{{item.$orig.realname}}</text><text class="mobile">{{item.$orig.mobile}}</text></view></view><view data-event-opts="{{[['tap',[['addAddress',['edit','$0'],[[['addressList','',index]]]]]]]}}" class="iconfont iconbianji _i" catchtap="__e"></view></view></block><block wx:if="{{addressList.length>0}}"><text style="display:block;padding:16rpx 30rpx 10rpx;lihe-height:1.6;color:#fa436a;font-size:24rpx;">提示：长按可删除当前收货地址。最多只能存在一个默认地址。</text></block><block wx:else><empty vue-id="1" info="暂无收货地址，请添加地址" bind:__l="__l"></empty></block><block wx:if="{{addressList.length>0}}"><rf-load-more vue-id="2" status="{{loadingType}}" bind:__l="__l"></rf-load-more></block><button data-event-opts="{{[['tap',[['addAddress',['add']]]]]}}" class="add-btn" bindtap="__e">新增地址</button></view>