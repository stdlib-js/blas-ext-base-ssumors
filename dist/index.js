"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var f=o(function(h,v){
var y=require('@stdlib/number-float64-base-to-float32/dist');function j(r,e,u){var i,a,s;if(i=0,r<=0)return i;if(r===1||u===0)return e[0];for(u<0?a=(1-r)*u:a=0,s=0;s<r;s++)i=y(i+e[a]),a+=u;return i}v.exports=j
});var m=o(function(k,q){
var F=require('@stdlib/number-float64-base-to-float32/dist');function R(r,e,u,i){var a,s,t;if(a=0,r<=0)return a;if(r===1||u===0)return e[i];for(s=i,t=0;t<r;t++)a=F(a+e[s]),s+=u;return a}q.exports=R
});var p=o(function(w,c){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=f(),_=m();T(l,"ndarray",_);c.exports=l
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),d=p(),n,x=O(E(__dirname,"./native.js"));b(x)?n=d:n=x;module.exports=n;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
