"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[3488],{9720:(e,t)=>{t.c=(e,t)=>{const n=e.__vccOpts||e;for(const[e,i]of t)n[e]=i;return n}},1349:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>_,data:()=>D});var i=n(3968);const a=(0,i.QD)("p",null,"矿难、Win11、DDR5、40 显卡接踵而至，电脑更换的高峰期即将来临。可惜我的生产力工具等不了了，不得不 49 年入国军，隔离期间装配上 i7+3080Ti 主机。硬件配置完毕后，软件安装成为新的挑战。我常用的软件超过 60 个，以往需要逐一访问官网下载最新版本并单独安装，这既耗时又费力。",-1),o=(0,i.QD)("p",null,[(0,i.mY)("我尝试过国内的软件管理器，它们支持批量下载，但安装和设置仍需逐个进行。此外，把软件系统的管理交给 360、金山或腾讯，你真的放心？相比之下，Windows 原生程序管理工具 winget 和 WebGUI winstall 使用更简单，"),(0,i.QD)("strong",null,"它们直接从官方来源下载应用，并支持一键批量静默安装，是快速部署程序的理想选择"),(0,i.mY)("。")],-1),r=(0,i.QD)("h2",{id:"原生程序管理-winget",tabindex:"-1"},[(0,i.QD)("a",{class:"header-anchor",href:"#原生程序管理-winget"},[(0,i.QD)("span",null,"原生程序管理-winget")])],-1),l={href:"https://docs.microsoft.com/zh-cn/windows/package-manager/winget/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/microsoft/winget-cli/releases",target:"_blank",rel:"noopener noreferrer"},g=(0,i.QD)("code",null,".msixbundle",-1),s={href:"https://www.microsoft.com/p/app-installer/9nblggh4nns1#activetab=pivot:overviewtab",target:"_blank",rel:"noopener noreferrer"},c=(0,i.IL)('<p>安装应用安装程序后，可在命令提示符 (cmd) 中输入「winget」来运行程序命令。若要使用 PowerShell 命令，请注意修改 PowerShell 的执行策略。重要的是更改 ps1 文件的运行权限，而非 win11 自带的 ps5。以管理员权限运行 PowerShell，执行 <code>Set-ExecutionPolicy RemoteSigned</code> 命令。</p><h3 id="winget-install-appname" tabindex="-1"><a class="header-anchor" href="#winget-install-appname"><span>winget install appName</span></a></h3><p>执行 winget install 命令，就能完成指定程序的下载、哈希验证、静默设置安装三个步骤，不需要人工干预。</p><figure><img src="https://img.newzone.top/2022-05-05-17-13-24.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="winget-search-appname" tabindex="-1"><a class="header-anchor" href="#winget-search-appname"><span>winget search appName</span></a></h3><p>当未找到或不确定 appName 时，使用 winget search 可以锁定程序名称。以「飞书」为例，飞书不支持中文锁定，搜索后发现有国内版「Feishu」和海外版「Lark」两个版本，国内版使用命令 <code>winget install feishu</code>。</p><figure><img src="https://img.newzone.top/2022-05-05-17-13-45.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="winget-upgrade-all" tabindex="-1"><a class="header-anchor" href="#winget-upgrade-all"><span>winget upgrade --all</span></a></h3><ul><li><code>winget upgrade</code> 列出所有支持 winget 升级的程序，然后使用 <code>winget upgrade ID</code> 升级指定程序。</li><li><code>winget upgrade --all</code> 会静默升级所有支持 winget 的程序，适合更新强迫症患者。不过，该升级流程暂时没有筛选办法，无法单独剔除应用。</li><li><code>winget upgrade --all --include-unknown</code> 升级包括未知版本在内的所有应用，一般用不到，适用于强迫症患者。</li></ul><figure><img src="https://img.newzone.top/2022-05-05-17-14-00.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="microsoft-store-应用" tabindex="-1"><a class="header-anchor" href="#microsoft-store-应用"><span>Microsoft Store 应用</span></a></h3><p>Microsoft Store 不支持 winget 官方源，因此 winget 不能使用应用名称安装商店应用。</p><p>winget 安装 Microsoft Store 应用前，需要 <code>winget search</code> 命令找到应用 id 和来源。msstore 源指 Miscrosoft Store，其使用唯一标识符作为程序包的“Id”。因此，snipaste 安装命令为 <code>winget install 9P1WXPKB68KX -s msstore</code>。</p><figure><img src="https://img.newzone.top/2022-05-05-17-14-23.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>安装中会要求接受协议，点 <code>Y</code> 确认即可。</p><figure><img src="https://img.newzone.top/2022-05-05-17-14-35.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="批量部署程序-winstall" tabindex="-1"><a class="header-anchor" href="#批量部署程序-winstall"><span>批量部署程序-winstall</span></a></h2>',17),w={href:"https://winstall.app/",target:"_blank",rel:"noopener noreferrer"},m=(0,i.IL)('<p>操作非常简单，winstall 页面选中程序，即可打包程序组或生成批量安装命令。</p><figure><img src="https://img.newzone.top/2022-05-05-17-14-50.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>winstall 的应用搜索继承了 winget 的问题，部分国产软件不支持中文搜索，比如「坚果云」只支持英文名称「Nutstore」。希望这一问题，可以随着国内用户群增多而被解决。</p><figure><img src="https://img.newzone.top/2022-05-05-17-15-09.png?imageMogr2/format/webp" alt="winget 搜索" tabindex="0" loading="lazy"><figcaption>winget 搜索</figcaption></figure><figure><img src="https://img.newzone.top/2022-05-05-17-15-37.png?imageMogr2/format/webp" alt="winstall 搜索" tabindex="0" loading="lazy"><figcaption>winstall 搜索</figcaption></figure><p>winstall 页面选好程序后，导出自动生成的批量安装命令，并在命令提示符 (cmd) 中执行，系统将自动下载并静默配置程序。注意保存批量安装命令，winstall 网站服务并不稳定，有可能你后面想用，它却无法导出命令。</p><figure><img src="https://img.newzone.top/2022-05-05-17-15-55.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><h3 id="尝试更新源失败" tabindex="-1"><a class="header-anchor" href="#尝试更新源失败"><span>尝试更新源失败</span></a></h3>',9),d={href:"https://github.com/microsoft/winget-cli/releases",target:"_blank",rel:"noopener noreferrer"},h=(0,i.QD)("code",null,"InternetOpenUrl() failed. 0x80072f7d : unknown error",-1),f={href:"https://newzone.top/posts/2022-02-19-microsoft_store_fixed.html#%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},u=(0,i.IL)('<h3 id="下载速度慢" tabindex="-1"><a class="header-anchor" href="#下载速度慢"><span>下载速度慢</span></a></h3><p>在使用 winget 时，你可能会发现下载速度异常缓慢，例如 4M 数据需要等待十分钟。然而，这种感觉实际上是误解。慢速度通常是因为正在下载 winget 的源数据，而非软件本身。这一过程通常与网络环境无关，因此需要耐心等待。实际下载应用程序时，速度通常会快得多。</p><h3 id="已解决问题" tabindex="-1"><a class="header-anchor" href="#已解决问题"><span>已解决问题</span></a></h3><p>以下问题是早起版本的 bug，新测试中都解决了。</p><ul><li>批量安装应用中，winstall 不定期出现崩溃，原因未知。</li><li>winget install 不能检测当前版本软件是否安装，容易造成重复安装应用，拖慢部署时间。</li><li>部分应用安装后容易有 bug，比如剪映有卡顿问题，手动安装后恢复正常。</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>在我的常用软件列表中有 50 个应用支持 winget 批量静默安装，剩余 10 个需手工安装，覆盖率在 80% 以上，足够满足大部分人的需求。winget 用一个命令行能静默安装上百个软件，节省了大量装机时间。对于系统重装、批量装机、快速设置新工作环境，winget 和 winstall 是必不可少的装机神器。</p>',7),b={href:"https://newzone.top/windows/NewSystem.html",target:"_blank",rel:"noopener noreferrer"},z={},_=(0,n(9720).c)(z,[["render",function(e,t){const n=(0,i.E1)("ExternalLinkIcon");return(0,i.Wz)(),(0,i.An)("div",null,[a,o,r,(0,i.QD)("p",null,[(0,i.QD)("a",l,[(0,i.mY)("winget"),(0,i.K2)(n)]),(0,i.mY)(" 是 Windows 的命令行程序包管理器。在 Windows 10 和 Windows 11 上，可以用 winget 来发现、安装、升级、删除和配置应用程序。早期版本的 Windows 不支持 winget，需要在 "),(0,i.QD)("a",p,[(0,i.mY)("winget 官方网站"),(0,i.K2)(n)]),(0,i.mY)(" 下载以 "),g,(0,i.mY)(" 为后缀的安装程序。而在 Win11 上，则可 "),(0,i.QD)("a",s,[(0,i.mY)("通过 Microsoft Store 获取应用安装程序"),(0,i.K2)(n)]),(0,i.mY)("。")]),c,(0,i.QD)("p",null,[(0,i.QD)("a",w,[(0,i.mY)("winstall"),(0,i.K2)(n)]),(0,i.mY)(" 是 winget install 的网页管理工具。借助 winstall，用户不懂代码，也能轻松使用 winget，一次性安装所有应用程序。")]),m,(0,i.QD)("p",null,[(0,i.mY)("在国内使用 winget 时，常遇到「更新源失败」的问题。下载 "),(0,i.QD)("a",d,[(0,i.mY)("winget 最新官方包"),(0,i.K2)(n)]),(0,i.mY)(" 可以有效解决这一问题。")]),(0,i.QD)("p",null,[(0,i.mY)("另一个常见问题是网络连接失败，例如出现 "),h,(0,i.mY)(" 的提示。这通常是因为 Internet 选项中的 TLS 版本设置过低。启用 TLS 1.2 可以解决此问题，具体操作方法请参考 "),(0,i.QD)("a",f,[(0,i.mY)("解决 Windows 应用商店（Microsoft store）无法打开的问题"),(0,i.K2)(n)]),(0,i.mY)("。")]),u,(0,i.QD)("p",null,[(0,i.mY)("这篇文章主要介绍了 winget 的使用原理和方法。如果想直接上手，可以查看我的 "),(0,i.QD)("a",b,[(0,i.mY)("系统重装"),(0,i.K2)(n)]),(0,i.mY)(" 过程记录。")])])}]]),D=JSON.parse('{"path":"/posts/2022-03-21-winget_the_strongest_software_manager_for_windows.html","title":"一键安装 99 个程序，Windows 最强软件管理器","lang":"zh-CN","frontmatter":{"title":"一键安装 99 个程序，Windows 最强软件管理器","date":"2022-03-21T00:00:00.000Z","category":["系统"],"tag":["winget","winstall"],"order":-43,"description":"矿难、Win11、DDR5、40 显卡接踵而至，电脑更换的高峰期即将来临。可惜我的生产力工具等不了了，不得不 49 年入国军，隔离期间装配上 i7+3080Ti 主机。硬件配置完毕后，软件安装成为新的挑战。我常用的软件超过 60 个，以往需要逐一访问官网下载最新版本并单独安装，这既耗时又费力。 我尝试过国内的软件管理器，它们支持批量下载，但安装和设置仍...","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2022-03-21-winget_the_strongest_software_manager_for_windows.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"一键安装 99 个程序，Windows 最强软件管理器"}],["meta",{"property":"og:description","content":"矿难、Win11、DDR5、40 显卡接踵而至，电脑更换的高峰期即将来临。可惜我的生产力工具等不了了，不得不 49 年入国军，隔离期间装配上 i7+3080Ti 主机。硬件配置完毕后，软件安装成为新的挑战。我常用的软件超过 60 个，以往需要逐一访问官网下载最新版本并单独安装，这既耗时又费力。 我尝试过国内的软件管理器，它们支持批量下载，但安装和设置仍..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.newzone.top/2022-05-05-17-13-24.png?imageMogr2/format/webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-16T04:14:03.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"一键安装 99 个程序，Windows 最强软件管理器"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:tag","content":"winget"}],["meta",{"property":"article:tag","content":"winstall"}],["meta",{"property":"article:published_time","content":"2022-03-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-16T04:14:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一键安装 99 个程序，Windows 最强软件管理器\\",\\"image\\":[\\"https://img.newzone.top/2022-05-05-17-13-24.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/2022-05-05-17-13-45.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/2022-05-05-17-14-00.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/2022-05-05-17-14-23.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/2022-05-05-17-14-35.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/2022-05-05-17-14-50.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/2022-05-05-17-15-09.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/2022-05-05-17-15-37.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/2022-05-05-17-15-55.png?imageMogr2/format/webp\\"],\\"datePublished\\":\\"2022-03-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-16T04:14:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"清顺\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"原生程序管理-winget","slug":"原生程序管理-winget","link":"#原生程序管理-winget","children":[{"level":3,"title":"winget install appName","slug":"winget-install-appname","link":"#winget-install-appname","children":[]},{"level":3,"title":"winget search appName","slug":"winget-search-appname","link":"#winget-search-appname","children":[]},{"level":3,"title":"winget upgrade --all","slug":"winget-upgrade-all","link":"#winget-upgrade-all","children":[]},{"level":3,"title":"Microsoft Store 应用","slug":"microsoft-store-应用","link":"#microsoft-store-应用","children":[]}]},{"level":2,"title":"批量部署程序-winstall","slug":"批量部署程序-winstall","link":"#批量部署程序-winstall","children":[]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[{"level":3,"title":"尝试更新源失败","slug":"尝试更新源失败","link":"#尝试更新源失败","children":[]},{"level":3,"title":"下载速度慢","slug":"下载速度慢","link":"#下载速度慢","children":[]},{"level":3,"title":"已解决问题","slug":"已解决问题","link":"#已解决问题","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1708056843000,"updatedTime":1708056843000,"contributors":[{"name":"ztinan","email":"43401059+ztinan@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":5.21,"words":1563},"filePathRelative":"_posts/2022-03-21-winget_the_strongest_software_manager_for_windows.md","localizedDate":"2022年3月21日","excerpt":"<p>矿难、Win11、DDR5、40 显卡接踵而至，电脑更换的高峰期即将来临。可惜我的生产力工具等不了了，不得不 49 年入国军，隔离期间装配上 i7+3080Ti 主机。硬件配置完毕后，软件安装成为新的挑战。我常用的软件超过 60 个，以往需要逐一访问官网下载最新版本并单独安装，这既耗时又费力。</p>\\n<p>我尝试过国内的软件管理器，它们支持批量下载，但安装和设置仍需逐个进行。此外，把软件系统的管理交给 360、金山或腾讯，你真的放心？相比之下，Windows 原生程序管理工具 winget 和 WebGUI winstall 使用更简单，<strong>它们直接从官方来源下载应用，并支持一键批量静默安装，是快速部署程序的理想选择</strong>。</p>","autoDesc":true}')}}]);