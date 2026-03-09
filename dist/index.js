"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=t(function(z,o){
var j=require('@stdlib/number-float64-base-to-float32/dist');function x(e,r,s,d){var u,i,a;if(e<=0)return 0;if(i=d,s===0)return e*r[i];for(u=r[i],i+=s,a=1;a<e;a++)u=j(u+r[i]),i+=s;return u}o.exports=x
});var f=t(function(A,q){
var l=require('@stdlib/strided-base-stride2offset/dist'),R=n();function _(e,r,s){return R(e,r,s,l(e,s))}q.exports=_
});var p=t(function(B,c){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=f(),O=n();E(m,"ndarray",O);c.exports=m
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=p(),v,y=g(b(__dirname,"./native.js"));h(y)?v=k:v=y;module.exports=v;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
