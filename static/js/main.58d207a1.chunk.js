(this.webpackJsonpabout=this.webpackJsonpabout||[]).push([[0],{13:function(e,t,n){e.exports=n(23)},18:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(2),s=n.n(a),i=(n(18),n(11)),l=function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),o=e.getSeconds();return"".concat(t).concat(n<10?":0":":").concat(n).concat(o<10?":0":":").concat(o)},r=["Welcome to ".concat("\u004e\u0069\u0063\u0065\u54e5\u7684\u4e2a\u4eba\u4ecb\u7ecd\u9762","."),{type:"system",label:"System",content:"cd ".concat("\u5173\u4e8e\u004e\u0069\u0063\u0065\u54e5")},{type:"system",label:"System",content:"Thanks for your visit, Please let me briefly introduce myself."},{time:l(),type:"info",label:"Name:",content:"Nice Ge"},{time:l(),type:"info",label:"Sex:",content:"Male"},{time:l(),type:"info",label:"Age:",content:"Forever 18"},{time:l(),type:"info",label:"Common Email:",content:"nicege@qq.com"},{time:l(),type:"info",label:"Motto:",content:" O ever youthful, O ever weeping."},{time:l(),type:"info",label:"Aim:",content:"Three goals as follows:"},{type:"black",label:"=> 1.",content:"To be a self-sufficient and grateful person."},{type:"black",label:"=> 2.",content:"When I look back on the past, I don't regret for wasting my time, nor do I feel ashamed for being mediocre."},{type:"black",label:"=> 3.",content:"Find a good job and a good companion."}],p={dynamicList:{intro:{description:"Introducting myself again.",run:function(e){var t=0;return new Promise((function(n){var o=setInterval((function(){e(r[t]),t++,r[t]||(clearInterval(o),n({type:"success",label:"Done",content:"Brief myself introduction is over!"}))}),500)}))}},echo:{description:"Echoes input.",run:function(e,t){return new Promise((function(n){e({time:l(),label:"Echo",type:"success",content:t}),n({type:"success",label:"",content:""})}))}},open:{description:"Open a specified url in a new tab.",run:function(e,t){return new Promise((function(n){t?t.startsWith("http")?(e({type:"success",label:"Success",content:"Opening"}),window.open(t,"_blank"),n({type:"success",label:"Done",content:"Page Opened!"})):n({type:"error",label:"Error",content:"Please add `http` prefix!"}):n({type:"error",label:"Error",content:"a url is required!"})}))}},ncmusic:{description:"Open my favorite music in a new tab.",run:function(e){return new Promise((function(t){e({type:"success",label:"Success",content:"Opening"}),window.open("https://music.163.com/playlist?id=7356705438&userid=1526249775","_blank"),t({type:"success",label:"Done",content:"Game Start!"})}))}}},staticList:{contact:{description:"Return a list of my contact information.",list:[{type:"info",label:"Business Email:",content:"`nicege@88.com`"},{type:"info",label:"Github:",content:"`https://github.com/niceger`"},{type:"info",label:"Twitter:",content:"`https://twitter.com/`"},
{type:"info",label:"Facebook:",content:"`https://www.facebook.com/`"},{type:"info",label:"Telegram:",content:"`https://t.me/nicege`"},{type:"info",label:"Bilibili:",content:"`https://space.bilibili.com/400322664`"},{type:"info",label:"wechat:",content:"`https://www.wechat.com/`"},{type:"info",label:"QQ:",content:"`https://www.qq.com/`"},{type:"info",label:"Messenger:",content:"`https://www.messenger.com/`"}]},hobby:{description:"Return a list of my hobbies in life .",list:[{type:"info",label:"电脑搞机者:",content:"有限的购机 / 装机/玩机建议、系统软件及硬件故障诊断(小白一个)"},{type:"info",label:"ACG爱好者:",content:"ID:Nice"},{type:"info",label:"数码玩家爱好者:",content:"ID:了解一些当下的数码产品，可提供选购建议"},{type:"info",label:"周边手办玩家:",content:"GSC 粘土人系列忠实玩家，只买喜欢的女角色"},{type:"info",label:"全沾程序猿:",content:"一个不学无术,只会复制粘贴的全沾程序猿"}]},whoami:{description:"Return a piece of code about nicege.",list:[{type:"success",label:"Compiled",content:"1   const"},{type:"success",label:"Compiled",content:'2     nicege = "\u004e\u0069\u0063\u0065\u54e5",'},{type:"success",label:"Compiled",content:'3     details = "请输入 details,内容有点长，你忍下，建议最后看",'}]},skill:{description:"Return a list of my skills and my rating of them.",list:[{type:"success",label:"A",content:"\xb7 JavaScript 90/100"},{type:"success",label:"A",content:"\xb7 TypeScript 90/100"},{type:"success",label:"A",content:"\xb7 Go 80/100"},{type:"success",label:"A",content:"\xb7 Java 80/100"},{type:"success",label:"A",content:"\xb7 Kotlin 80/100"},{type:"warning",label:"B",content:"\xb7 Python 70/100"},{type:"warning",label:"B",content:"\xb7 C 70/100"},{type:"warning",label:"B",content:"\xb7 Shell 70/100"},{type:"error",label:"C",content:"\xb7 C# 60/100"},{type:"error",label:"C",content:"\xb7 Rust 60/100"},{type:"error",label:"C",content:"\xb7 Scala 60/100"},{type:"error",label:"C",content:"\xb7 Lua 60/100"},{type:"error",label:"C",content:"\xb7 Haskell 60/100"},{type:"error",label:"C",content:"\xb7 Ruby 60/100"},{type:"black",label:"D",content:"\xb7 CSS -999/100"}]},topten:{description:"Return the top ten list of life.",list:[{type:"info",label:"最后悔:",content:"高三那时的年少无知的思想，那时的年少轻狂的行动，那时的年少无为的生活."},{type:"info",label:"最难忘:",content:"难过"},{type:"info",label:"最快乐:",content:"哈哈哈哈."},{type:"info",label:"最无奈:",content:"无奈啊."},{type:"info",label:"最悲伤:",content:"悲伤."}]},anime:{description:"Return the list of great anime I've watched.",list:[{type:"info",label:"心中十大神漫:",content:"1.Clanned 2.四月是你的谎言 3.鬼灭之刃 4.斩赤红之瞳 5.夏目友人帐 6.国王排名 7.灌篮高手 8.火影忍者 9.擅长捉弄的高木同学 10.海贼王"}]},book:{description:"Return the list of book.",list:[{type:"info",label:"哲学:",content:"《你的第一本哲学书》 《哲学家们都干了些什么》《沉思录》"},{type:"info",label:"文学:",content:"《活出生命的意义》《活着》《人间失格》《平凡的世界》《老人与海》《三体》"},{type:"info",label:"心理学:",content:"《心理学与生活》《心流》《乌合之众》《人性的弱点全集》《社会心理学》《自控力》《社会性动物》"},{type:"info",label:"健康学:",content:"《吃货的生物学修养》《食物营养与配餐》《营养圣经实用指南》"},{type:"info",label:"管理学:",content:"《管理百年》《管理的实践》《桌有成效的管理者》《管理的常识》"},{type:"info",label:"经济金融学:",content:"《财富自由之路》《彼得·林奇的成功投资》《投资中最重要的事》《穷查理宝典》"},{type:"info",label:"技能方法类:",content:"《如何阅读一本书》《学习之道》《谈谈方法》《学会提问》《金字塔原理》"},{type:"info",label:"自我提升类:",content:"《少有人走的路》《搞定》《改变》《瞬变》《原则》"},{type:"info",label:"逻辑思维类:",content:"《认知：所谓成长就是认知升级》《思考，快与慢》《非理性的人》《占有还是存在》《局外人》《超越感觉》《暴力:六个侧面的反思》"},{type:"info",label:"生活艺术类:",content:"《爱的艺术》《像艺术家一样思考》"}]},values:{description:"Return a list of my attitude towards life .",list:[{type:"info",label:"人生观:",content:"为爱人，为父母而活"},{type:"info",label:"爱情观:",content:"耐心去等一个人，尽力去爱一个人，但是也给她不爱我就放手的自由"},{type:"info",label:"金钱观:",content:"驾驭金钱，而不被金钱驾驭"},{type:"info",label:"技术思想:",content:"技术应当被用于造福人类，方便人类，而不是被商业、广告和宣传所充斥"}]},game:{description:"Return a list of my roles in the games .",list:[{type:"info",label:"王者荣耀:",content:"ID:铅笔头之心,王者荣耀里的'中单美少女'"},{type:"info",label:"和平精英:",content:"ID:Nice"},{type:"info",label:"我的世界:",content:"ID:铅笔头之心"}]},website:{description:"Return a list of websites I built.",list:[{type:"info",label:"My resume:",content:"`http://nice.ge/`"},{type:"info",label:"My blog:",content:"`http://nice.ge/blog`"},{type:"info",label:"My navigation:",content:"`http://nav.nice.ge`"},{type:"info",label:"My gallery:",content:"`http://gallery.nice.ge`"},{type:"info",label:"My little station:",content:"`https://www.qbtzx.com`"}]}}};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{className:"fade",cmd:p,config:{prompt:"\u279c  ~ ",version:"1.0.0",initialDirectory:"\u4e00\u4e2a\u574f\u6389\u7684\u756a\u8304",bootCmd:"intro"}})),document.getElementById("app"));var u=document.querySelectorAll(".fade");window.addEventListener("DOMContentLoaded",(function(){u.forEach((function(e){return e.classList.add("in")}))})),window.addEventListener("beforeunload",(function(){u.forEach((function(e){return e.classList.remove("in")}))}))}},[[13,1,2]]]);
//# sourceMappingURL=main.58d207a1.chunk.js.map
