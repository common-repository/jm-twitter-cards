!function(){"use strict";var e,t={808:function(){var e=window.wp.element,t=window.wp.data,a=window.wp.blockEditor,r=window.wp.components,l=window.wp.editPost,c=window.wp.compose,i=window.wp.i18n,n=window.wp.plugins;function s(e){return e.meta.twitterCardType||tcData.defaultType}const m=a=>{let{props:r}=a;return(0,e.createElement)("h2",{className:"TwitterCard-title js-cardClick tcu-textEllipse--multiline"},r.meta.cardTitle||(0,t.select)("core/editor").getEditedPostAttribute("title"))};function o(e){let a=e.meta.cardImage||tcData.defaultImage;const{getPostType:r}=(0,t.select)("core");let l=r((0,t.select)("core/editor").getEditedPostAttribute("type"));if(!l||!l.supports.thumbnail)return a;let c=(0,t.select)("core/editor").getEditedPostAttribute("featured_media");if(0===c)return a;let i=(0,t.select)("core").getMedia(c);return void 0!==i?e.meta.cardImage||i.source_url:a}const d=t=>{let{props:a}=t;return(0,e.createElement)("div",{className:"tcu-imageWrapper",style:{backgroundImage:"url("+o(a)+")"}},"player"===s(a)&&(0,e.createElement)("div",{className:"PlayerCard-playButton",style:{backgroundImage:"url("+tcData.pluginUrl+"img/player.svg)"}}),(0,e.createElement)("img",{className:"u-block",alt:a.meta.cardImageAlt||"",src:o(a)}))},u=t=>{let{props:a}=t;return(0,e.createElement)("div",{className:"EmbeddedTweet"},(0,e.createElement)("div",{className:"EmbeddedTweet-author u-cf"},(0,e.createElement)("img",{className:"EmbeddedTweet-author-avatar",src:tcData.avatar}),(0,e.createElement)("div",{className:"EmbeddedTweet-author-name u-pullLeft"},(0,i.__)("Your Twitter name","jm-tc-gut")),(0,e.createElement)("div",{className:"EmbeddedTweet-author-handle u-pullLeft"},"@",tcData.twitterSite)),(0,e.createElement)("div",{className:"EmbeddedTweet-text"},"app"!==s(a)&&(0,e.createElement)("p",null,(0,i.__)("The card for your website will look a little something like this!","jm-tc-gut")),"app"===s(a)&&(0,e.createElement)("p",null,(0,i.__)("Preview is not provided for application card","jm-tc-gut"))),(0,e.createElement)("div",{className:"CardPreview u-marginVm",id:"CardPreview"},(0,e.createElement)("div",{className:"CardPreview-preview js-cardPreview"},(0,e.createElement)("div",{className:"TwitterCardsGrid TwitterCard TwitterCard--animation"},"app"!==s(a)&&(0,e.createElement)("div",{className:"TwitterCardsGrid-col--12 TwitterCardsGrid-col--spacerBottom CardContent"},(0,e.createElement)("div",{className:"js-openLink u-block TwitterCardsGrid-col--12 TwitterCard-container "+s(a)+"--small "+s(a)+"--noImage"},(0,e.createElement)("div",{className:s(a)+"-image TwitterCardsGrid-float--prev"},(0,e.createElement)("div",{className:"tcu-imageContainer tcu-imageAspect--1to1"},(0,e.createElement)(d,{props:a}))),(0,e.createElement)("div",{className:s(a)+"-contentContainer TwitterCardsGrid-float--prev"},(0,e.createElement)("div",{className:s(a)+"-content TwitterCardsGrid-ltr"},(0,e.createElement)(m,{props:a}),(0,e.createElement)("p",{className:"TwitterCard-desc tcu-resetMargin u-block TwitterCardsGrid-col--spacerTop tcu-textEllipse--multiline"},a.meta.cardDesc,(0,e.createElement)("span",{className:"SummaryCard-destination"},tcData.domain))))))))))};class p extends e.Component{constructor(){super(...arguments),this.state={isOpen:!1}}render(){const{meta:{twitterCardType:t,cardTitle:c,cardDesc:n,cardImageID:m,cardImage:o,cardImageAlt:d,cardPlayer:p,cardPlayerWidth:g,cardPlayerHeight:E},updatePostMeta:v}=this.props,{isOpen:w}=this.state;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l.PluginSidebar,{icon:"twitter",name:"jm-tc-sidebar",title:(0,i.__)("Twitter Cards settings","jm-tc-gut")},(0,e.createElement)(r.PanelBody,{title:(0,i.__)("Main settings & preview","jm-tc-gut")},(0,e.createElement)("details",{className:"details"},(0,e.createElement)("p",{className:"description smaller"},(0,i.__)("The preview button allows you to change main twitter cards settings and see what it might look like on Twitter.","jm-tc-gut")),(0,e.createElement)("p",{className:"description smaller"},(0,i.__)("On no account this could replace the Twitter cards validator","jm-tc-gut"))),(0,e.createElement)("div",{className:"c buttons"},(0,e.createElement)(r.Button,{isSecondary:!0,onClick:()=>this.setState({isOpen:!0})},(0,i.__)("open modal","jm-tc-gut")),(0,e.createElement)("a",{href:"https://cards-dev.twitter.com/validator"},(0,i.__)("check validator","jm-tc-gut"))),w?(0,e.createElement)(r.Modal,{title:(0,i.__)("Twitter Cards","jm-tc-gut"),closeButtonLabel:(0,i.__)("close","jm-tc-gut"),onRequestClose:()=>this.setState({isOpen:!1})},(0,e.createElement)("div",{className:"tc-app"},(0,e.createElement)(u,{props:this.props}),(0,e.createElement)("div",{className:"tc-fields"},(0,e.createElement)("div",{className:"tc-fields-container"},(0,e.createElement)(r.SelectControl,{label:(0,i.__)("Card Type","jm-tc-gut"),value:s(this.props),options:[{label:(0,i.__)("Summary","jm-tc-gut"),value:"summary"},{label:(0,i.__)("Summary Large Image","jm-tc-gut"),value:"summary_large_image"},{label:(0,i.__)("Player","jm-tc-gut"),value:"player"},{label:(0,i.__)("Application","jm-tc-gut"),value:"app"}],onChange:e=>{v({twitterCardType:e||""})}})),(0,e.createElement)("div",{className:"tc-fields-container"},(0,e.createElement)(r.TextControl,{type:"text",label:(0,i.__)("Custom title","jm-tc-gut"),help:(0,i.__)("Best is under 55 chars. If no set default card title would be post title","jm-tc-gut"),value:c,placeholder:(0,i.__)("Enter custom title…","jm-tc-gut"),onChange:e=>{v({cardTitle:e||""})}})),(0,e.createElement)("div",{className:"tc-fields-container"},(0,e.createElement)(r.TextareaControl,{label:(0,i.__)("Card description","jm-tc-gut"),help:(0,i.__)("200 chars max but it is better to keep it short, 120-130 chars is fine. By default description will be automatically generated or retrieved from a SEO plugin such as Yoast or All in One SEO but you can override this here.","jm-tc-gut"),value:n,onChange:e=>{v({cardDesc:e||""})}})),"player"===t&&(0,e.createElement)("div",{className:"tc-fields-container"},(0,e.createElement)(r.TextControl,{type:"url",label:(0,i.__)("Player URL","jm-tc-gut"),value:p,placeholder:(0,i.__)("Enter URL…","jm-tc-gut"),onChange:e=>{v({cardPlayer:e||""})}}),(0,e.createElement)(r.RangeControl,{label:(0,i.__)("Player Width","jm-tc-gut"),value:Number(g),min:262,max:1e3,onChange:e=>{v({cardPlayerWidth:e||""})}}),(0,e.createElement)(r.RangeControl,{label:(0,i.__)("Player Height","jm-tc-gut"),value:Number(E),min:196,max:1e3,onChange:e=>{v({cardPlayerHeight:e||""})}})),(0,e.createElement)("div",{className:"tc-mb buttons"},(0,e.createElement)(r.Button,{isSecondary:!0,onClick:()=>this.setState({isOpen:!1})},(0,i.__)("Close","jm-tc-gut")),(0,e.createElement)("a",{href:"https://cards-dev.twitter.com/validator"},(0,i.__)("check validator","jm-tc-gut")))))):null),(0,e.createElement)(r.PanelBody,{title:(0,i.__)("Image Settings","jm-tc-gut")},(0,e.createElement)("details",{className:"details"},(0,e.createElement)("summary",null,(0,i.__)("Override featured image and default image for this post","jm-tc-gut")),(0,e.createElement)("p",{className:"description smaller"},(0,i.__)("Depending on your card type, please use appropriate ratio. Best is :","jm-tc-gut")),(0,e.createElement)("ul",{className:"image-instructions"},(0,e.createElement)("li",null,(0,i.__)("1:1 for summary card (square)","jm-tc-gut")),(0,e.createElement)("li",null,(0,i.__)("2:1 (rectangle) for summary large image","jm-tc-gut"))),(0,e.createElement)("p",{className:"description smaller"},(0,i.__)("Using featured image is highly recommended (if supported by your post type which is the case for posts) but you can override this here.","jm-tc-gut"))),!o&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.MediaUpload,{onSelect:e=>v({cardImage:e.url,cardImageID:e.id}),type:"image",render:t=>{let{open:a}=t;return(0,e.createElement)(r.Button,{isSecondary:!0,onClick:a},(0,i.__)("Insert from Media Library","jm-tc-gut"))}})),o&&(0,e.createElement)(r.Placeholder,null,(0,e.createElement)("p",null,(0,i.__)("Change twitter Image source","jm-tc-gut")),(0,e.createElement)("div",{className:"thumbnail"},(0,e.createElement)("div",{className:"centered"},(0,e.createElement)(a.MediaUpload,{onSelect:e=>v({cardImage:e.url,cardImageID:e.id}),type:"image",value:m,render:t=>{let{open:a}=t;return(0,e.createElement)("img",{src:o,alt:d||"",className:"tc-image-overview",onClick:a})}})))),(0,e.createElement)("div",{className:"tc-mb"},(0,e.createElement)(r.TextareaControl,{label:(0,i.__)("Card Image alt","jm-tc-gut"),help:(0,i.__)("Alt text - accessibility for your Twitter Image","jm-tc-gut"),value:d,onChange:e=>{v({cardImageAlt:e||""})}})))),(0,e.createElement)(l.PluginSidebarMoreMenuItem,{icon:"twitter",target:"jm-tc-sidebar"},(0,i.__)("Twitter Cards","jm-tc-gut")))}}const g=(0,t.withSelect)((e=>({meta:e("core/editor").getEditedPostAttribute("meta")}))),E=(0,t.withDispatch)(((e,t)=>{let{meta:a}=t;return{updatePostMeta(t){e("core/editor").editPost({meta:{...a,...t}})}}})),v=(0,c.compose)(g,E)(p);(0,n.registerPlugin)("jm-tc-sidebar",{icon:"twitter",render:v})}},a={};function r(e){var l=a[e];if(void 0!==l)return l.exports;var c=a[e]={exports:{}};return t[e](c,c.exports,r),c.exports}r.m=t,e=[],r.O=function(t,a,l,c){if(!a){var i=1/0;for(o=0;o<e.length;o++){a=e[o][0],l=e[o][1],c=e[o][2];for(var n=!0,s=0;s<a.length;s++)(!1&c||i>=c)&&Object.keys(r.O).every((function(e){return r.O[e](a[s])}))?a.splice(s--,1):(n=!1,c<i&&(i=c));if(n){e.splice(o--,1);var m=l();void 0!==m&&(t=m)}}return t}c=c||0;for(var o=e.length;o>0&&e[o-1][2]>c;o--)e[o]=e[o-1];e[o]=[a,l,c]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,c,i=a[0],n=a[1],s=a[2],m=0;if(i.some((function(t){return 0!==e[t]}))){for(l in n)r.o(n,l)&&(r.m[l]=n[l]);if(s)var o=s(r)}for(t&&t(a);m<i.length;m++)c=i[m],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(o)},a=self.webpackChunkjm_twitter_cards=self.webpackChunkjm_twitter_cards||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var l=r.O(void 0,[431],(function(){return r(808)}));l=r.O(l)}();