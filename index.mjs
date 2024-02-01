// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.1.1-esm/index.mjs";function t(r,t,n){var i,s,o;if(i=0,r<=0)return i;if(1===r||0===n)return t[0];for(s=n<0?(1-r)*n:0,o=0;o<r;o++)i=e(i+t[s]),s+=n;return i}function n(r,t,n,i){var s,o,a;if(s=0,r<=0)return s;if(1===r||0===n)return t[i];for(o=i,a=0;a<r;a++)s=e(s+t[o]),o+=n;return s}r(t,"ndarray",n);export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
