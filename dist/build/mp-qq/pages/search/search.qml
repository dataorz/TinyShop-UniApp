<view class="content"><view class="search-box"><m-search class="mSearch-input-box" vue-id="1" mode="{{2}}" button="inside" placeholder="{{defaultKeyword}}" value="{{keyword}}" data-event-opts="{{[['^search',[['doSearch',[false]]]],['^confirm',[['doSearch',[false]]]],['^input',[['__set_model',['','keyword','$event',[]]]]]]}}" bind:search="__e" bind:confirm="__e" bind:input="__e" bind:__l="__l"></m-search></view><view data-event-opts="{{[['touchstart',[['blur',['$event']]]]]}}" class="search-keyword" bindtouchstart="__e"><scroll-view hidden="{{!(isShowKeywordList)}}" class="keyword-list-box" scroll-y><block wx:for="{{keywordList}}" wx:for-item="row" wx:for-index="__i0__" wx:key="keyword"><view class="keyword-entry" hover-class="keyword-entry-tap"><view data-event-opts="{{[['tap',[['doSearch',['$0'],[[['keywordList','keyword',row.keyword,'keyword']]]]]]]}}" class="keyword-text" bindtap="__e"><rich-text nodes="{{row.htmlStr}}"></rich-text></view><view data-event-opts="{{[['tap',[['setkeyword',['$0'],[[['keywordList','keyword',row.keyword]]]]]]]}}" class="keyword-img" bindtap="__e"><image src="/static/HM-search/back.png"></image></view></view></block></scroll-view><scroll-view hidden="{{!(!isShowKeywordList)}}" class="keyword-box" scroll-y><block wx:if="{{oldKeywordList.length>0}}"><view class="keyword-block"><view class="keyword-list-header"><view>历史搜索</view><view><image src="/static/HM-search/delete.png" data-event-opts="{{[['tap',[['oldDelete',['$event']]]]]}}" bindtap="__e"></image></view></view><view class="keyword"><block wx:for="{{oldKeywordList}}" wx:for-item="keyword" wx:for-index="index" wx:key="index"><view data-event-opts="{{[['tap',[['doSearch',['$0'],[[['oldKeywordList','',index]]]]]]]}}" bindtap="__e">{{keyword}}</view></block></view></view></block><view class="keyword-block"><view class="keyword-list-header"><view>热门搜索</view><view><image src="{{'/static/HM-search/attention'+forbid+'.png'}}" data-event-opts="{{[['tap',[['hotToggle',['$event']]]]]}}" bindtap="__e"></image></view></view><block wx:if="{{forbid==''}}"><view class="keyword"><block wx:for="{{hotKeywordList}}" wx:for-item="keyword" wx:for-index="index" wx:key="index"><view data-event-opts="{{[['tap',[['doSearch',['$0'],[[['hotKeywordList','',index]]]]]]]}}" bindtap="__e">{{keyword}}</view></block></view></block><block wx:else><view class="hide-hot-tis"><view>当前搜热门搜索已隐藏</view></view></block></view></scroll-view></view></view>