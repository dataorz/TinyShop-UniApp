<view class="uni-numbox"><view data-event-opts="{{[['tap',[['_calcValue',['subtract']]]]]}}" class="uni-numbox-minus" catchtap="__e"><text class="{{['yticon icon--jianhao',minDisabled?'uni-numbox-disabled':'']}}"></text></view><input class="uni-numbox-value" type="number" disabled="{{disabled}}" data-event-opts="{{[['blur',[['_onBlur',['$event']]]]]}}" value="{{inputValue}}" bindblur="__e"/><view data-event-opts="{{[['tap',[['_calcValue',['add']]]]]}}" class="uni-numbox-plus" catchtap="__e"><text class="{{['yticon icon-jia2',maxDisabled?'uni-numbox-disabled':'']}}"></text></view></view>