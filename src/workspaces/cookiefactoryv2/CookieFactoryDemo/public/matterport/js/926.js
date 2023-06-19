/*! For license information please see 926.js.LICENSE.txt */
"use strict";(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[926],{72926:(a,e,s)=>{s.r(e),s.d(e,{default:()=>f});var r,t=s(97542),i=s(9037),o=s(79727),n=s(53954),c=s(23254),l=s(44443),m=s(7159);class h{constructor(a,e,s,r){this.cameraData=a,this.viewmodeData=e,this.floorsViewData=s,this.sweepData=r,this.name="deeplinks",this.defaultBaseUrl=(0,l.rI)(),this.requiredParams=[...h.requiredUrlParams]}createLink(a){const{baseHref:e,additionalParams:s,paramFilter:r,thisArg:t}=a||{},i=new URLSearchParams(window.location.search),o=new URL(e||this.defaultBaseUrl.href);return this.appendParams(o.searchParams,i),r&&this.filterParamsFromURL(o,r,t),s&&this.appendParamsFromDictionary(o.searchParams,s),this.removeStartParams(o),this.dedupeModelParam(o),o}createModelLink(a,e){const{baseHref:s,additionalParams:r,paramFilter:t,thisArg:i}=e||{},o=new URLSearchParams(window.location.search),n=new URL(s||this.defaultBaseUrl.href);return this.appendParams(n.searchParams,o),t&&this.filterParamsFromURL(n,t,i),r&&this.appendParamsFromDictionary(n.searchParams,r),this.removeStartParams(n),this.dedupeModelParam(n),n}createDeepLink(a){const{baseHref:e,additionalParams:s,paramFilter:r,thisArg:t}=a||{},i=new URLSearchParams(m.K.getQueryString({cameraData:this.cameraData,floorsViewData:this.floorsViewData,sweepData:this.sweepData,viewmodeData:this.viewmodeData})),o=new URLSearchParams(window.location.search),n=new URL(e||this.defaultBaseUrl.href);this.appendParams(n.searchParams,o),this.removeStartParams(n),r&&this.filterParamsFromURL(n,r,t);for(const[a,e]of i)m.K.navigationKeys.has(a)&&n.searchParams.set(a,e);if(s){const a=Object.assign({},s);for(const e of m.K.navigationKeys)delete a[e];this.appendParamsFromDictionary(n.searchParams,a)}return this.dedupeModelParam(n),n}setDefaultBaseHref(a,e){this.defaultBaseUrl=new URL(a),this.requiredParams=[...h.requiredUrlParams,...e]}filterParamsFromURL(a,e,s){const r=new Set;for(const[t,i]of a.searchParams)this.requiredParams.includes(t)||e.call(s,t,i)||r.add(t);for(const e of r)a.searchParams.delete(e)}dedupeModelParam(a){const e=a.searchParams.get("m")||a.searchParams.get("model")||"";a.searchParams.delete("model"),a.searchParams.set("m",e)}removeStartParams(a){["start","sm","sp","sq","sr","ss","sf","sz"].forEach(a.searchParams.delete,a.searchParams)}appendParams(a,e){for(const[s,r]of e)a.set(s,r)}appendParamsFromDictionary(a,e){for(const[s,r]of Object.entries(e))a.set(s,r)}}function d(a){return!!a&&"object"==typeof a}h.requiredUrlParams=["m","model"],function(a){a[a.SAME_ORIGIN=0]="SAME_ORIGIN",a[a.EXTERNAL=1]="EXTERNAL",a[a.MODEL=2]="MODEL",a[a.NAVIGATION=3]="NAVIGATION"}(r||(r={}));var P,N=s(12039);!function(a){a[a.IN_FRAME=0]="IN_FRAME",a[a.NEW_WINDOW=1]="NEW_WINDOW",a[a.CUSTOM=2]="CUSTOM"}(P||(P={}));class w{constructor(a){this.commandBinder=a,this.defaultPolicy={[r.NAVIGATION]:P.IN_FRAME,[r.MODEL]:P.IN_FRAME,[r.SAME_ORIGIN]:P.NEW_WINDOW,[r.EXTERNAL]:P.NEW_WINDOW},this.activePolicy=Object.assign({},this.defaultPolicy),this.linkHandlers={[r.NAVIGATION]:{[P.IN_FRAME]:a=>{const e=m.K.deserialize(a);e&&this.navigateToPose(e)},[P.NEW_WINDOW]:a=>this.openNewWindow(a),[P.CUSTOM]:a=>this.customHandlers[r.NAVIGATION](a)},[r.MODEL]:{[P.IN_FRAME]:a=>this.replaceFrameLocation(a),[P.NEW_WINDOW]:a=>this.openNewWindow(a),[P.CUSTOM]:a=>this.customHandlers[r.MODEL](a)},[r.SAME_ORIGIN]:{[P.IN_FRAME]:a=>this.replaceFrameLocation(a),[P.NEW_WINDOW]:a=>this.openNewWindow(a),[P.CUSTOM]:a=>this.customHandlers[r.SAME_ORIGIN](a)},[r.EXTERNAL]:{[P.IN_FRAME]:()=>{throw Error("Navigating Showcase's frame to an external domain is not supported.")},[P.NEW_WINDOW]:a=>this.openNewWindow(a),[P.CUSTOM]:a=>this.customHandlers[r.EXTERNAL](a)}},this.customHandlers={[r.NAVIGATION]:a=>{},[r.MODEL]:a=>{},[r.SAME_ORIGIN]:a=>{},[r.EXTERNAL]:a=>{}}}get HandlingPolicy(){return P}setPolicy(a,e,s){e===P.CUSTOM&&s&&(this.customHandlers[a]=s),this.activePolicy[a]=e}resetPolicy(a){this.activePolicy[a]=this.defaultPolicy[a]}openLink(a){if(function(a){return d(a)&&"pose"in a}(a)){const e=this.activePolicy[r.NAVIGATION];this.linkHandlers[r.NAVIGATION][e](a.fullLink)}else if(function(a){return d(a)&&"modelId"in a}(a)){const e=this.activePolicy[r.MODEL],s=new URL(window.location.href),t=new URL(a.fullLink);s.search=t.search,s.searchParams.delete("m"),s.searchParams.delete("model"),s.searchParams.set("m",a.modelId),s.searchParams.set("play","1"),this.linkHandlers[r.MODEL][e](s.href)}else try{const e=new URL(a);if(e.origin===document.referrer||e.origin===window.location.origin){const e=this.activePolicy[r.SAME_ORIGIN];this.linkHandlers[r.SAME_ORIGIN][e](a)}else{const e=this.activePolicy[r.EXTERNAL];this.linkHandlers[r.EXTERNAL][e](a)}}catch(e){const s=this.activePolicy[r.EXTERNAL];this.linkHandlers[r.EXTERNAL][s](a)}}replaceFrameLocation(a){window.location.replace(a)}openNewWindow(a){window.open(a)}navigateToPose(a){this.commandBinder.issueCommand(new N.L4(a))}}const f=class extends t.Y{constructor(){super(...arguments),this.name="deep linker"}async init(a,e){const[s,r,t,l]=await Promise.all([e.market.waitForData(i.M),e.market.waitForData(c.O),e.market.waitForData(o.c),e.market.waitForData(n.Z)]);this.creator=new h(s,r,t,l),this.handler=new w(e.commandBinder)}get LinkType(){return r}}}}]);