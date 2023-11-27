[rewrite_local]
# 修复 VVebo 用户时间线, 来自：https://raw.githubusercontent.com/suiyuran/stash/main/override/fix-vvebo.stoverride 和 https://raw.githubusercontent.com/bin64/Scripts/main/QuantumultX/vvebo.js
^https:\/\/api\.weibo\.cn\/2\/users\/show\? url script-request-header  https://raw.githubusercontent.com/Attiv/test_script/main/fix_vvebo.js
^https:\/\/api\.weibo\.cn\/2\/statuses\/user_timeline\? url script-request-header  https://raw.githubusercontent.com/Attiv/test_script/main/fix_vvebo.js
^https:\/\/api\.weibo\.cn\/2\/statuses\/user_timeline\? url script-response-body  https://raw.githubusercontent.com/Attiv/test_script/main/fix_vvebo.js

[mitm]
# 添加需要 MITM 的域名
hostname = api.weibo.cn
