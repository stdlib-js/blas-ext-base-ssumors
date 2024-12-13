"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=t(function(k,v){
var l=require('@stdlib/number-float64-base-to-float32/dist');function x(e,r,s,d){var a,i,u;if(a=0,e<=0)return a;if(i=d,s===0)return e*r[i];for(u=0;u<e;u++)a=l(a+r[i]),i+=s;return a}v.exports=x
});var f=t(function(w,q){
var j=require('@stdlib/strided-base-stride2offset/dist'),R=o();function _(e,r,s){return R(e,r,s,j(e,s))}q.exports=_
});var p=t(function(z,c){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=f(),F=o();E(m,"ndarray",F);c.exports=m
});var O=require("path").join,T=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=p(),n,y=T(O(__dirname,"./native.js"));b(y)?n=g:n=y;module.exports=n;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
