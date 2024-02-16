"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[192],{9720:(e,a)=>{a.c=(e,a)=>{const n=e.__vccOpts||e;for(const[e,r]of a)n[e]=r;return n}},808:(e,a,n)=>{n.r(a),n.d(a,{comp:()=>ue,data:()=>me});var r=n(3968);const t=(0,r.IL)('<p>迅雷已经用了 10 年，一直将它视为最快也最方便的下载工具，也一直购买迅雷会员。</p><p>但是，<strong>迅雷已经堕落</strong>。</p><ul><li><code>thunder:\\\\</code> 迅雷专属链接越来越少，下载基本是磁力链接和 BT 种子；</li><li>迅雷会员加速不再有效，大量资源速度为 0（会员虽然还有一年多，但已经没用了）；</li><li>迅雷关闭旧版功能，迫使大家升级迅雷 U 享版，但升级后，发现新版迅雷会强制接收所有下载。 <blockquote><p>有些小文件，我只想用浏览器直接下载，而一些不想下载的链接，也会被迅雷非常敏感地感应到，强制下载，真的特别流氓。</p></blockquote></li></ul><h2 id="为什么选择-aria2" tabindex="-1"><a class="header-anchor" href="#为什么选择-aria2"><span>为什么选择 Aria2？</span></a></h2><p>Aria2 下载功能比较全面，支持 BT 和磁力链接，性能也相当不错，<strong>速度不比迅雷慢</strong>。</p><p>虽然没有原生应用界面，配置也比较麻烦，但这些可以通过懒人包轻松解决。</p><h2 id="真·懒人包" tabindex="-1"><a class="header-anchor" href="#真·懒人包"><span>真·懒人包</span></a></h2><p>Aria2 真·懒人包无需配置，下载即可使用，适合不想折腾的人。</p>',8),o={href:"https://www.seoipo.com/software/Aria2/",target:"_blank",rel:"noopener noreferrer"},l=(0,r.QD)("p",null,[(0,r.mY)("将懒人包解压到 "),(0,r.QD)("code",null,"D:\\Aria2"),(0,r.mY)("，点击 "),(0,r.QD)("code",null,"AriaNg 启动器.exe"),(0,r.mY)(" 即可开始下载。两个启动器任选其一，都集成了后端服务和前端 UI，无需启动其他程序。包内均为开源绿色软件，不涉及任何隐私和安装，AutoHotkey 插件容易被误报。")],-1),i=(0,r.QD)("p",null,"2023.12.03 更新 Aria2 1.37.0，AriaNG 1.3.7，重构启动器，并增加 bt-tracker 至 108 个，以便 BT 和磁力链接提速。",-1),c=(0,r.QD)("p",null,"新增功能：任务开始、完成和出错时，会推送系统通知，可在 aria2.conf 的特别功能区块中设置通知的开启与关闭，此功能由 @我真的爱发明 提出。",-1),s=(0,r.QD)("hr",null,null,-1),p=(0,r.QD)("p",null,"如果不想使用懒人包，想了解 Aria2 背后的设置，请往下看配置步骤。",-1),d=(0,r.QD)("h2",{id:"aria2-设置",tabindex:"-1"},[(0,r.QD)("a",{class:"header-anchor",href:"#aria2-设置"},[(0,r.QD)("span",null,"Aria2 设置")])],-1),u={href:"https://aria2c.com/archiver/aria2.zip",target:"_blank",rel:"noopener noreferrer"},m={href:"https://wwz.lanzouf.com/iROZE0eai3xe",target:"_blank",rel:"noopener noreferrer"},h=(0,r.QD)("code",null,"D:\\Aria2",-1),g={href:"https://github.com/aria2/aria2/releases",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/aria2/aria2/releases/download/release-1.37.0/aria2-1.37.0-win-64bit-build1.zip",target:"_blank",rel:"noopener noreferrer"},D=(0,r.QD)("code",null,"aria2c.exe",-1),b=(0,r.QD)("figure",null,[(0,r.QD)("img",{src:"https://img.newzone.top/20191210232831.png",alt:"",tabindex:"0",loading:"lazy"}),(0,r.QD)("figcaption",null,"GitHub 官方仓库下载 Aria2")],-1),Q=(0,r.QD)("li",null,[(0,r.QD)("p",null,[(0,r.mY)("点击 "),(0,r.QD)("code",null,"aria2.exe"),(0,r.mY)(" 启动 aria2，系统托盘区会同步出现应用图标。")])],-1),A={href:"https://wwz.lanzouf.com/iwv6f0eadq9i",target:"_blank",rel:"noopener noreferrer"},Y=(0,r.QD)("code",null,"aria2.conf",-1),k={href:"https://aria2.github.io/manual/en/html/aria2c.html",target:"_blank",rel:"noopener noreferrer"},w=(0,r.QD)("sup",{class:"footnote-ref"},[(0,r.QD)("a",{href:"#footnote1"},"[1]"),(0,r.QD)("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),v=(0,r.IL)('<p>修改默认下载目录：</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code># 文件的保存路径 (可使用绝对路径或相对路径), 默认：当前启动位置\n# D:\\Download 是我的默认下载目录，可以改为你自己的下载路径\ndir=D:\\Download\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改服务器默认连接数：</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code># 同一服务器连接数，添加时可指定，默认:1\nmax-connection-per-server=16\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改监听端口 6800：</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code># RPC 监听端口，端口被占用时可以修改，默认:6800\n# 端口修改后，需要重新启动 aria2c.exe，并确保页面设置中的 RPC 地址已更改为新端口。\nrpc-listen-port=6800\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启 BT 下列设置：</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>enable-dht=true\nbt-enable-lpd=true\nenable-peer-exchange=true\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',8),_={href:"https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_best.txt",target:"_blank",rel:"noopener noreferrer"},x=(0,r.QD)("code",null,",",-1),y=(0,r.IL)('<div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code># bt-tracker 更新，解决 Aria2 BT 下载速度慢没速度的问题\nbt-tracker=udp://tracker.opentrackr.org:1337/announce,udp://9.rarbg.com:2810/announce,udp://opentracker.i2p.rocks:6969/announce,https://opentracker.i2p.rocks:443/announce,udp://tracker1.myporn.club:9337/announce,udp://tracker1.bt.moack.co.kr:80/announce,udp://tracker.torrent.eu.org:451/announce,udp://p4p.arenabg.com:1337/announce,udp://open.stealth.si:80/announce,udp://open.demonii.com:1337/announce,udp://ipv4.tracker.harry.lu:80/announce,udp://explodie.org:6969/announce,udp://exodus.desync.com:6969/announce,https://tracker.tamersunion.org:443/announce,https://tracker.nanoha.org:443/announce,https://tracker.lilithraws.org:443/announce,https://tr.burnabyhighstar.com:443/announce,https://1337.abcvg.info:443/announce,http://tracker.mywaifu.best:6969/announce,http://bt.okmp3.ru:2710/announce\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其他设置不常用，有时间的话，你可以慢慢调整。</p>',2),z=(0,r.QD)("li",null,[(0,r.QD)("p",null,[(0,r.mY)("Aira2 没有原生应用界面，可以输入网址 "),(0,r.QD)("code",null,"http://aria2c.com"),(0,r.mY)(" 使用第三方下载界面。该页面会自动与本地的 aira2c 程序关联，实现下载管理，建议把其收藏到书签，以便日后使用。"),(0,r.QD)("sup",{class:"footnote-ref"},[(0,r.QD)("a",{href:"#footnote2"},"[2]"),(0,r.QD)("a",{class:"footnote-anchor",id:"footnote-ref2"})])])],-1),T=(0,r.QD)("code",null,"http://localhost:6800/jsonrpc",-1),N=(0,r.QD)("strong",null,"链接须为 http 而非 https",-1),K={href:"https://www.seoipo.com/software/Aria2/",target:"_blank",rel:"noopener noreferrer"},B=(0,r.QD)("h2",{id:"aria2-进阶",tabindex:"-1"},[(0,r.QD)("a",{class:"header-anchor",href:"#aria2-进阶"},[(0,r.QD)("span",null,"Aria2 进阶")])],-1),I=(0,r.QD)("h3",{id:"更换-aria2-界面",tabindex:"-1"},[(0,r.QD)("a",{class:"header-anchor",href:"#更换-aria2-界面"},[(0,r.QD)("span",null,"更换 Aria2 界面")])],-1),C={href:"https://github.com/mayswind/AriaNg",target:"_blank",rel:"noopener noreferrer"},P=(0,r.QD)("figure",null,[(0,r.QD)("img",{src:"https://img.newzone.top/20180516104758.png",alt:"",tabindex:"0",loading:"lazy"}),(0,r.QD)("figcaption",null,"AriaNg 界面")],-1),R={href:"https://github.com/mayswind/AriaNg/releases",target:"_blank",rel:"noopener noreferrer"},O=(0,r.QD)("code",null,"cannot get language resources, and will display in default language",-1),H={href:"https://github.com/mayswind/AriaNg/releases",target:"_blank",rel:"noopener noreferrer"},U=(0,r.QD)("code",null,"cannot get language resources, and will display in default language",-1),j=(0,r.IL)('<p>如果 AriaNg 页面未连接的错误信息，则在页面左侧选择「AriaNg 设置」&gt;「RPC」，检查 RPC 地址是否正确。默认地址应为 <code>localhost:6800</code>。</p><h3 id="aira2-下载预热" tabindex="-1"><a class="header-anchor" href="#aira2-下载预热"><span>Aira2 下载预热</span></a></h3><p>Aira2 下载预热是 BT 下载前的必备步骤，否则速度容易很慢。</p><p>找一个热门影视的 BT 种子（注意是种子，不是磁力链接），然后下载并挂着做种。过几个小时后，退出 Aria2 或者等待 Aria2 会话自动保存，你会发现 dht.dat 从空文件变成有数据了，之后的 BT 下载速度就会快很多。</p><blockquote><p>很多 BT 客户端一样，Aria2 有个 dht.dat 文件 (开启 ipv6 还有个 dht6.dat)，这玩意用于存储一种叫做 DHT Routing Table 的东西，DHT 网络由无数节点组成，你接触到一个后能通过它接触到更多的节点，Aria2 我记得是有内置的节点，但是！如果你在 Aria2 第一次运行的时候直接下载磁力链接或者冷门种子，你很可能遇到连 MetaData 都无法获取的情况，这就是因为第一次只是初始化 dht.dat 文件，你本地不存在 DHT Routing Table 的缓存，所以你无法从 DHT 网络中获取足够的数据。<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></p></blockquote><h3 id="接管浏览器下载" tabindex="-1"><a class="header-anchor" href="#接管浏览器下载"><span>接管浏览器下载</span></a></h3><p>如果想用 Aria2 接管浏览器的下载管理，需安装插件/扩展。</p>',7),q={href:"https://chrome.google.com/webstore/detail/nimeojfecmndgolmlmjghjmbpdkhhogl",target:"_blank",rel:"noopener noreferrer"},L={href:"https://wwi.lanzoui.com/i4Fmeetsdaj",target:"_blank",rel:"noopener noreferrer"},Z=(0,r.QD)("code",null,".crx",-1),S=(0,r.QD)("code",null,"chrome://extensions/",-1),W={href:"https://addons.mozilla.org/en-US/firefox/addon/aria2-integration/",target:"_blank",rel:"noopener noreferrer"},G=(0,r.IL)('<p>安装完「添加到 aria2」扩展后，右键扩展图标，点击「选项」&gt;「设置」，设置如下：</p><ul><li>最小监视：<code>10</code> M，低于该容量将由浏览器下载。如果 Aria2 要接手所有下载，可以将最小监视设为 <code>0.001</code>。</li><li>JSON-RPC 链接：<code>http://localhost:6800/jsonrpc</code>。</li></ul><p>注意：「添加到 aria2」图标显示的 <code>en</code> 表示处于开启状态，<code>dis</code> 表示处于关闭状态，点击图标可以切换使用状态。</p><h2 id="aria2-启动器" tabindex="-1"><a class="header-anchor" href="#aria2-启动器"><span>Aria2 启动器</span></a></h2><p>每次启动 Aria2 下载时，都需要执行两个文件：打开 WebUI 链接和 aria2c，这有点麻烦。因此，我使用 AutoHotkey 做了一个启动器，它可以检测 aria2c 运行状态，并一键打开下载界面，以简化 Aria 的启动过程。</p>',5),J={href:"https://wwz.lanzouf.com/iqud50ebl06d",target:"_blank",rel:"noopener noreferrer"},M=(0,r.QD)("code",null,"D:\\Aria2",-1),E=(0,r.QD)("strong",null,"AriaNg 启动器",-1),F={href:"https://github.com/mayswind/AriaNg-DailyBuild/archive/master.zip",target:"_blank",rel:"noopener noreferrer"},V=(0,r.QD)("code",null,"Aria2\\AriaNg\\index.html",-1),X=(0,r.QD)("li",null,[(0,r.QD)("strong",null,"Aria2c 启动器"),(0,r.mY)("：将 "),(0,r.QD)("code",null,"https://aria2c.com"),(0,r.mY)(" 作为默认下载界面。该设置较旧，需确保 JSON-RPC Path 为 "),(0,r.QD)("code",null,"http://localhost:6800/jsonrpc"),(0,r.mY)("。")],-1),$=(0,r.QD)("hr",{class:"footnotes-sep"},null,-1),ee={class:"footnotes"},ae={class:"footnotes-list"},ne={id:"footnote1",class:"footnote-item"},re={href:"https://zhuanlan.zhihu.com/p/30666881",target:"_blank",rel:"noopener noreferrer"},te=(0,r.QD)("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),oe={id:"footnote2",class:"footnote-item"},le={href:"https://www.appinn.com/aria2-in-windows-setup/",target:"_blank",rel:"noopener noreferrer"},ie=(0,r.QD)("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),ce={id:"footnote3",class:"footnote-item"},se={href:"http://www.senra.me/solutions-to-aria2-bt-metalink-download-slowly/",target:"_blank",rel:"noopener noreferrer"},pe=(0,r.QD)("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1),de={},ue=(0,n(9720).c)(de,[["render",function(e,a){const n=(0,r.E1)("ExternalLinkIcon");return(0,r.Wz)(),(0,r.An)("div",null,[t,(0,r.QD)("p",null,[(0,r.mY)("真·懒人包："),(0,r.QD)("a",o,[(0,r.mY)("https://www.seoipo.com/software/Aria2/"),(0,r.K2)(n)])]),l,i,c,s,p,d,(0,r.QD)("ol",null,[(0,r.QD)("li",null,[(0,r.QD)("p",null,[(0,r.mY)("下载 "),(0,r.QD)("a",u,[(0,r.mY)("Aria2 快速设置包"),(0,r.K2)(n)]),(0,r.mY)("或"),(0,r.QD)("a",m,[(0,r.mY)("备用链接"),(0,r.K2)(n)]),(0,r.mY)("，将其解压到存放文件夹，例如 "),h,(0,r.mY)("。")])]),(0,r.QD)("li",null,[(0,r.QD)("p",null,[(0,r.mY)("官网下载 "),(0,r.QD)("a",g,[(0,r.mY)("Aria2 程序"),(0,r.K2)(n)]),(0,r.mY)("（Windows 选择 "),(0,r.QD)("a",f,[(0,r.mY)("aria2-1.37.0-win-64bit-build1.zip"),(0,r.K2)(n)]),(0,r.mY)("），然后解压到快速设置包的存放文件夹中，替代其中的 "),D,(0,r.mY)(" 程序。")]),b]),Q,(0,r.QD)("li",null,[(0,r.QD)("p",null,[(0,r.mY)("参照"),(0,r.QD)("a",A,[(0,r.mY)("懒人包配置"),(0,r.K2)(n)]),(0,r.mY)("修改 "),Y,(0,r.mY)("，更多设置参考 "),(0,r.QD)("a",k,[(0,r.mY)("aria2c 官方文档"),(0,r.K2)(n)]),(0,r.mY)("。"),w]),v,(0,r.QD)("p",null,[(0,r.mY)("在文档最后一行添加 BT trackers，最新 trackers 列表从 "),(0,r.QD)("a",_,[(0,r.mY)("ngosang/trackerslist"),(0,r.K2)(n)]),(0,r.mY)(" 中获取，tracker 中用 "),x,(0,r.mY)(" 隔开。")]),y]),z]),(0,r.QD)("p",null,[(0,r.mY)("如果出现「Aria2 RPC 服务器错误」，请检查 JSON-RPC Path 是否为 "),T,(0,r.mY)("。注意，页面"),N,(0,r.mY)("。如果依然报错，则说明 aria2.conf 配置有误，建议下载 "),(0,r.QD)("a",K,[(0,r.mY)("真·懒人包"),(0,r.K2)(n)]),(0,r.mY)("。")]),B,I,(0,r.QD)("p",null,[(0,r.QD)("a",C,[(0,r.mY)("AriaNg"),(0,r.K2)(n)]),(0,r.mY)(" 提供了类似传统下载软件的界面，简便易用。")]),P,(0,r.QD)("p",null,[(0,r.mY)("使用方法：下载并解压 "),(0,r.QD)("a",R,[(0,r.mY)("AriaNg"),(0,r.K2)(n)]),(0,r.mY)(" AllInOne，运行目录下的 index.html，打开 Aria2 WebUI 界面，将页面链接收藏到书签以便后续使用 Aria2。注意，本地运行要用 AllInOne 版本，否则会出现 "),O,(0,r.mY)("。")]),(0,r.QD)("p",null,[(0,r.mY)("操作步骤如下：首先，下载并解压 "),(0,r.QD)("a",H,[(0,r.mY)("AriaNg"),(0,r.K2)(n)]),(0,r.mY)(" AllInOne 版本。然后，运行目录中的 index.html 文件，以打开 Aria2 WebUI 界面。为方便后续使用，建议将页面链接添加至书签。需注意，本地运行需使用 AllInOne 版本，否则可能会出现 "),U,(0,r.mY)(" 的错误提示。")]),j,(0,r.QD)("ul",null,[(0,r.QD)("li",null,[(0,r.mY)("Chrome：安装"),(0,r.QD)("a",q,[(0,r.mY)("添加到 aria2"),(0,r.K2)(n)]),(0,r.mY)(" 扩展。下载包可以用"),(0,r.QD)("a",L,[(0,r.mY)("国内搬运地址"),(0,r.K2)(n)]),(0,r.mY)("，或是懒人包内置文件。 如果浏览器无法直接安装 "),Z,(0,r.mY)(" 格式的扩展，可以将文件解压到新文件夹「xxx」，然后在浏览器的地址栏输入 "),S,(0,r.mY)(" 开启开发者模式，点击加载已解压的扩展程序，选中刚才解压的文件夹「xxx」。")]),(0,r.QD)("li",null,[(0,r.mY)("Firefox：安装 "),(0,r.QD)("a",W,[(0,r.mY)("Aria2 Download Manager Integration"),(0,r.K2)(n)]),(0,r.mY)(" 扩展，可参考下方的 Chrome 扩展设置进行配置。")])]),G,(0,r.QD)("p",null,[(0,r.mY)("下载 "),(0,r.QD)("a",J,[(0,r.mY)("Aria2 启动器"),(0,r.K2)(n)]),(0,r.mY)("，然后将其解压到 Aria2 运行目录，例如 "),M,(0,r.mY)("。Aria2 启动器提供了两种方式，只需选择其中一种即可。")]),(0,r.QD)("ul",null,[(0,r.QD)("li",null,[E,(0,r.mY)("（推荐）：使用 AriaNg 本地版作为下载管理界面。在使用该启动器前，需将 "),(0,r.QD)("a",F,[(0,r.mY)("AriaNg"),(0,r.K2)(n)]),(0,r.mY)(" 解压到 Aria2 目录下，并将文件夹名改为 AriaNg，然后打开文件 index.html，该文件位于 "),V,(0,r.mY)("。")]),X]),$,(0,r.QD)("section",ee,[(0,r.QD)("ol",ae,[(0,r.QD)("li",ne,[(0,r.QD)("p",null,[(0,r.QD)("a",re,[(0,r.mY)("Aria2 基础上手指南"),(0,r.K2)(n)]),(0,r.mY)(),te])]),(0,r.QD)("li",oe,[(0,r.QD)("p",null,[(0,r.QD)("a",le,[(0,r.mY)("aria2 懒人安装教程"),(0,r.K2)(n)]),(0,r.mY)(),ie])]),(0,r.QD)("li",ce,[(0,r.QD)("p",null,[(0,r.QD)("a",se,[(0,r.mY)("解决 Aria2 BT 下载速度慢没速度的问题"),(0,r.K2)(n)]),(0,r.mY)(),pe])])])])])}]]),me=JSON.parse('{"path":"/posts/2018-05-15-aria2_a_new_download_tool.html","title":"抛弃迅雷，Aria2 新手入门","lang":"zh-CN","frontmatter":{"title":"抛弃迅雷，Aria2 新手入门","date":"2018-05-15T00:00:00.000Z","category":["工具"],"tag":["Aria2","迅雷"],"star":true,"order":-17,"description":"迅雷已经用了 10 年，一直将它视为最快也最方便的下载工具，也一直购买迅雷会员。 但是，迅雷已经堕落。 thunder:\\\\\\\\ 迅雷专属链接越来越少，下载基本是磁力链接和 BT 种子； 迅雷会员加速不再有效，大量资源速度为 0（会员虽然还有一年多，但已经没用了）； 迅雷关闭旧版功能，迫使大家升级迅雷 U 享版，但升级后，发现新版迅雷会强制接收所有下载。 ...","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2018-05-15-aria2_a_new_download_tool.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"抛弃迅雷，Aria2 新手入门"}],["meta",{"property":"og:description","content":"迅雷已经用了 10 年，一直将它视为最快也最方便的下载工具，也一直购买迅雷会员。 但是，迅雷已经堕落。 thunder:\\\\\\\\ 迅雷专属链接越来越少，下载基本是磁力链接和 BT 种子； 迅雷会员加速不再有效，大量资源速度为 0（会员虽然还有一年多，但已经没用了）； 迅雷关闭旧版功能，迫使大家升级迅雷 U 享版，但升级后，发现新版迅雷会强制接收所有下载。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.newzone.top/20191210232831.png \\"GitHub 官方仓库下载 Aria2\\""}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-16T04:14:03.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"抛弃迅雷，Aria2 新手入门"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:tag","content":"Aria2"}],["meta",{"property":"article:tag","content":"迅雷"}],["meta",{"property":"article:published_time","content":"2018-05-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-16T04:14:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"抛弃迅雷，Aria2 新手入门\\",\\"image\\":[\\"https://img.newzone.top/20191210232831.png \\\\\\"GitHub 官方仓库下载 Aria2\\\\\\"\\",\\"https://img.newzone.top/20180516104758.png \\\\\\"AriaNg 界面\\\\\\"\\"],\\"datePublished\\":\\"2018-05-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-16T04:14:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"清顺\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"为什么选择 Aria2？","slug":"为什么选择-aria2","link":"#为什么选择-aria2","children":[]},{"level":2,"title":"真·懒人包","slug":"真·懒人包","link":"#真·懒人包","children":[]},{"level":2,"title":"Aria2 设置","slug":"aria2-设置","link":"#aria2-设置","children":[]},{"level":2,"title":"Aria2 进阶","slug":"aria2-进阶","link":"#aria2-进阶","children":[{"level":3,"title":"更换 Aria2 界面","slug":"更换-aria2-界面","link":"#更换-aria2-界面","children":[]},{"level":3,"title":"Aira2 下载预热","slug":"aira2-下载预热","link":"#aira2-下载预热","children":[]},{"level":3,"title":"接管浏览器下载","slug":"接管浏览器下载","link":"#接管浏览器下载","children":[]}]},{"level":2,"title":"Aria2 启动器","slug":"aria2-启动器","link":"#aria2-启动器","children":[]}],"git":{"createdTime":1708056843000,"updatedTime":1708056843000,"contributors":[{"name":"ztinan","email":"43401059+ztinan@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":7.06,"words":2117},"filePathRelative":"_posts/2018-05-15-aria2_a_new_download_tool.md","localizedDate":"2018年5月15日","excerpt":"<p>迅雷已经用了 10 年，一直将它视为最快也最方便的下载工具，也一直购买迅雷会员。</p>\\n<p>但是，<strong>迅雷已经堕落</strong>。</p>\\n<ul>\\n<li><code>thunder:\\\\\\\\</code> 迅雷专属链接越来越少，下载基本是磁力链接和 BT 种子；</li>\\n<li>迅雷会员加速不再有效，大量资源速度为 0（会员虽然还有一年多，但已经没用了）；</li>\\n<li>迅雷关闭旧版功能，迫使大家升级迅雷 U 享版，但升级后，发现新版迅雷会强制接收所有下载。\\n<blockquote>\\n<p>有些小文件，我只想用浏览器直接下载，而一些不想下载的链接，也会被迅雷非常敏感地感应到，强制下载，真的特别流氓。</p>\\n</blockquote>\\n</li>\\n</ul>","autoDesc":true}')}}]);