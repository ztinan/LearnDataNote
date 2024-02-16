"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[460],{9720:(n,s)=>{s.c=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},2435:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>i,data:()=>c});var t=a(3968);const e={href:"https://mtmt.tech/",target:"_blank",rel:"noopener noreferrer"},o=(0,t.IL)('<p>我选择购买的原因是因为它允许通过网页分享特定的照片集。这个功能大大简化了与家人分享宝宝照片和视频的过程。然而，在使用 MT Photos 时，我发现网页端的视频播放经常出现问题，有些视频可以通过切换至全屏模式来播放，而有些视频只显示 1 秒然后无法继续播放。我向开发者反馈了这个问题，对方表示将在后续解决，但没有给出具体的时间表。目前，我只能让家人安装应用来解决视频播放的问题。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">mtphotos</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> mtphotos/mt<span class="token punctuation">-</span>photos<span class="token punctuation">:</span>latest\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mtphotos\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> 8162<span class="token punctuation">:</span><span class="token number">8063</span>\n      <span class="token punctuation">-</span> 8163<span class="token punctuation">:</span><span class="token number">8163</span>\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/MTphotos/config<span class="token punctuation">:</span>/config\n      <span class="token punctuation">-</span> /volume3/Pictures/upload<span class="token punctuation">:</span>/upload\n      <span class="token punctuation">-</span> /volume3/Pictures/photos<span class="token punctuation">:</span>/photos\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> TZ=Asia/Shanghai\n      <span class="token comment"># 是否启用内部 SSL</span>\n      <span class="token comment">#- SSL_NAME=xxx.newzone.top</span>\n      <span class="token comment">#- MT_SERVER_SSL_PORT=8163</span>\n      <span class="token comment">#- RAW_SUPPORT=open</span>\n  <span class="token comment"># 智能识别 API 容器，用于文本识别、以文搜图、场景识别。不需要的话，可删除本部分。</span>\n  <span class="token key atrule">mtphotosai</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> mtphotos/mt<span class="token punctuation">-</span>photos<span class="token punctuation">-</span>ai<span class="token punctuation">:</span>latest\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mtphotosai\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> 8164<span class="token punctuation">:</span><span class="token number">8000</span>\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token comment">#在 MT Photos 后台添加 API 时需要填入 API_AUTH_KEY（字符串），请自行修改。</span>\n      <span class="token punctuation">-</span> API_AUTH_KEY=apikey1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),p={},i=(0,a(9720).c)(p,[["render",function(n,s){const a=(0,t.E1)("ExternalLinkIcon");return(0,t.Wz)(),(0,t.An)("div",null,[(0,t.QD)("p",null,[(0,t.QD)("a",e,[(0,t.mY)("MT Photos"),(0,t.K2)(a)]),(0,t.mY)(" 是专为 NAS 用户设计的照片管理系统。它能自动整理和分类您的照片，包括按时间、地点、人物和照片类型分类。初次使用可获得一个月的免费授权，之后需要付费 99 元购买永久使用证。MT Photos 后台每周自动检查授权状态。")]),o])}]]),c=JSON.parse('{"path":"/services/dockers-on-nas/mt-photos.html","title":"MT Photos：分享家庭照片","lang":"zh-CN","frontmatter":{"article":false,"title":"MT Photos：分享家庭照片","order":4,"description":"MT Photos 是专为 NAS 用户设计的照片管理系统。它能自动整理和分类您的照片，包括按时间、地点、人物和照片类型分类。初次使用可获得一个月的免费授权，之后需要付费 99 元购买永久使用证。MT Photos 后台每周自动检查授权状态。 我选择购买的原因是因为它允许通过网页分享特定的照片集。这个功能大大简化了与家人分享宝宝照片和视频的过程。然而，...","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/mt-photos.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"MT Photos：分享家庭照片"}],["meta",{"property":"og:description","content":"MT Photos 是专为 NAS 用户设计的照片管理系统。它能自动整理和分类您的照片，包括按时间、地点、人物和照片类型分类。初次使用可获得一个月的免费授权，之后需要付费 99 元购买永久使用证。MT Photos 后台每周自动检查授权状态。 我选择购买的原因是因为它允许通过网页分享特定的照片集。这个功能大大简化了与家人分享宝宝照片和视频的过程。然而，..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-16T04:14:03.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-16T04:14:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"MT Photos：分享家庭照片\\",\\"description\\":\\"MT Photos 是专为 NAS 用户设计的照片管理系统。它能自动整理和分类您的照片，包括按时间、地点、人物和照片类型分类。初次使用可获得一个月的免费授权，之后需要付费 99 元购买永久使用证。MT Photos 后台每周自动检查授权状态。 我选择购买的原因是因为它允许通过网页分享特定的照片集。这个功能大大简化了与家人分享宝宝照片和视频的过程。然而，...\\"}"]]},"headers":[],"git":{"createdTime":1708056843000,"updatedTime":1708056843000,"contributors":[{"name":"ztinan","email":"43401059+ztinan@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.27,"words":382},"filePathRelative":"services/dockers-on-nas/mt-photos.md","localizedDate":"2024年2月16日","excerpt":"<p><a href=\\"https://mtmt.tech/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MT Photos</a> 是专为 NAS 用户设计的照片管理系统。它能自动整理和分类您的照片，包括按时间、地点、人物和照片类型分类。初次使用可获得一个月的免费授权，之后需要付费 99 元购买永久使用证。MT Photos 后台每周自动检查授权状态。</p>\\n<p>我选择购买的原因是因为它允许通过网页分享特定的照片集。这个功能大大简化了与家人分享宝宝照片和视频的过程。然而，在使用 MT Photos 时，我发现网页端的视频播放经常出现问题，有些视频可以通过切换至全屏模式来播放，而有些视频只显示 1 秒然后无法继续播放。我向开发者反馈了这个问题，对方表示将在后续解决，但没有给出具体的时间表。目前，我只能让家人安装应用来解决视频播放的问题。</p>","autoDesc":true}')}}]);