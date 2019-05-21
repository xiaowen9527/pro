!function(a,b){"use strict"
;"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0
):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)
}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";function p(a,b){var c=(
b=b||d).createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}function w(
a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&(
"array"===c||0===b||"number"==typeof b&&0<b&&b-1 in a)}function D(a,b,c){if(r.isFunction(b)
)return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a
){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}
return r.grep(a,function(a){return-1<i.call(b,a)!==c&&1===a.nodeType})}function J(a,b){for(;(a=a[b]
)&&1!==a.nodeType;);return a}function L(a){var b={};return r.each(a.match(K)||[],function(a,c){
b[c]=!0}),b}function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{
a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c
):b.call(void 0,a)}catch(a){c.call(void 0,a)}}function R(){d.removeEventListener("DOMContentLoaded",
R),a.removeEventListener("load",R),r.ready()}function U(){this.expando=r.expando+U.uid++}function Z(
a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),
"string"==typeof(c=a.getAttribute(d))){try{c="true"===c||"false"!==c&&(
"null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c)}catch(e){}W.set(a,b,c)}else c=void 0
;return c}function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){
return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i
)&&_.exec(r.css(a,b));if(k&&k[3]!==j)for(j=j||k[3],c=c||[],k=+i||1;k/=f=f||".5",r.style(a,b,k+j),
f!==(f=h()/i)&&1!==f&&--g;);return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,
d.start=k,d.end=e)),e}function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e||(
b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),
"none"===e&&(e="block"),ea[d]=e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)(d=a[f]
).style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")
),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(
f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}function la(a,b){
var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"
):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[]
;return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,
d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}function oa(a,b,c,d,e){for(
var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if((f=a[n])||0===f)if(
"object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){for(g=g||l.appendChild(
b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,
g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];k--;)g=g.lastChild;r.merge(m,g.childNodes),(
g=l.firstChild).textContent=""}else m.push(b.createTextNode(f));for(l.textContent="",n=0;f=m[n++];
)if(d&&-1<r.inArray(f,d))e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),
"script"),j&&ma(g),c)for(k=0;f=g[k++];)ja.test(f.type||"")&&c.push(f);return l}function ta(){
return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,
c,d,e,f){var g,h;if("object"==typeof b){for(h in"string"!=typeof c&&(d=d||c,c=void 0),b)wa(a,h,c,d,
b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(
e=d,d=c,c=void 0)),!1===e)e=ua;else if(!e)return a;return 1===f&&(g=e,(e=function(a){return r().off(
a),g.apply(this,arguments)}).guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,
d,c)})}function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr"
)&&a.getElementsByTagName("tbody")[0]||a}function Da(a){return a.type=(null!==a.getAttribute("type")
)+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a
}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f
),j=f.events))for(e in delete g.handle,g.events={},j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,
j[e][c]);W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){
var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type
)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c
,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(
s||1<m&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(
b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(f=(e=oa(b,a[0].ownerDocument,!1,a,d)).firstChild,
1===e.childNodes.length&&(e=f),f||d)){for(i=(h=r.map(la(e,"script"),Da)).length;l<m;l++)j=e,l!==n&&(
j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(
k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;l<i;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,
"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),
k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++
)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,
"script")),d.parentNode.removeChild(d));return a}function Ma(a,b,c){var d,e,f,g,h=a.style;return(
c=c||La(a))&&(""!==(g=c.getPropertyValue(b)||c[b])||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),
!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,
h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}
function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,
arguments)}}}function Ta(a){if(a in Sa)return a;for(var b=a[0].toUpperCase()+a.slice(1),
c=Ra.length;c--;)if((a=Ra[c]+b)in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0
,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content"
)?4:"width"===b?1:0,g=0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(
g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(
g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}
function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(
a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(((d=Ma(a,b,f)
)<0||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),
d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}function Xa(a,b,c,d,e){
return new Xa.prototype.init(a,b,c,d,e)}function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}
function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={
height:a};for(b=b?1:0;d<4;d+=2-b)e["margin"+(c=aa[d])]=e["padding"+c]=a;return b&&(
e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),
f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,
l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");for(
d in c.queue||(null==(g=r._queueHooks(a,"fx")).unqueued&&(g.unqueued=0,h=g.empty.fire,
g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){
g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})})),b)if(e=b[d],$a.test(e)){if(delete b[d],
f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}
n[d]=q&&q[d]||r.style(a,d)}if((i=!r.isEmptyObject(b))||!r.isEmptyObject(n))for(
d in l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],null==(j=q&&q.display)&&(
j=V.get(a,"display")),"none"===(k=r.css(a,"display"))&&(j?k=j:(ga([a],!0),j=a.style.display||j,
k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float"
)&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),
o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){
o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1,n)i||(
q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),
m.done(function(){for(d in p||ga([a]),V.remove(a,"fxshow"),n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m)
,d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}function fb(a,b){var c,d,e,f,g;for(c in a)if(
e=b[d=r.camelCase(c)],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),(
g=r.cssHooks[d])&&"expand"in g)for(c in f=g.expand(f),delete a[d],f)c in a||(a[c]=f[c],b[c]=e
);else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(
){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,
j.startTime+j.duration-b),f=1-(c/j.duration||0),g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f)
;return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,
props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),
originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],
createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing)
;return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(
e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])
):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);f<g;f++)if(
d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,
j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start
)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(
j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}
function mb(a){return a.getAttribute&&a.getAttribute("class")||""}function xb(a,b,c,d){var e;if(
r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:""
)+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}
function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase(
).match(K)||[];if(r.isFunction(c))for(;d=f[e++];)"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]
).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){function g(h){var i;return e[h]=!0,
r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(
b.dataTypes.unshift(j),g(j),!1)}),i}var e={},f=a===Gb;return g(b.dataTypes[0])||!e["*"]&&g("*")}
function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(
d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){for(var d,e,f,g,h=a.contents,
i=a.dataTypes;"*"===i[0];)i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"))
;if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(
!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}
function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters
)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(
c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if(
"*"===f)f=i;else if("*"!==i&&i!==f){if(!(g=j[i+" "+f]||j["* "+f]))for(e in j)if((h=e.split(" ")
)[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){!0===g?g=j[e]:!0!==j[e]&&(f=h[0],k.unshift(h[1]));break}
if(!0!==g)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",
error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function Sb(a){
return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}var c=[],d=a.document,e=Object.getPrototypeOf,
f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,
n=m.call(Object),o={},q="3.1.0",r=function(a,b){return new r.fn.init(a,b)},
s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase(
)};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},
get:function(a){return null!=a?a<0?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){
var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,
a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},
slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0)
;return this.pushStack(0<=c&&c<b?[this[c]]:[])},end:function(){
return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},
r.extend=r.fn.extend=function(argument_0){var a,b,c,d,e,f,g=argument_0||{},h=1,i=arguments.length,
j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(
g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],g!==(d=a[b])&&(j&&d&&(
r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},
g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()
).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},
isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){
return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return(
"number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(
!a||"[object Object]"!==k.call(a)||(b=e(a))&&("function"!=typeof(c=l.call(b,"constructor"
)&&b.constructor)||m.call(c)!==n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},
type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a
)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-"
).replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()
},each:function(a,b){var c,d=0;if(w(a))for(c=a.length;d<c&&!1!==b.call(a[d],d,a[d]);d++);else for(
d in a)if(!1===b.call(a[d],d,a[d]))break;return a},trim:function(a){return null==a?"":(a+""
).replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,
"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},
merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},
grep:function(a,b,c){for(var e=[],f=0,g=a.length,h=!c;f<g;f++)!b(a[f],f)!==h&&e.push(a[f]);return e
},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)null!=(e=b(a[f],f,c))&&h.push(
e);else for(f in a)null!=(e=b(a[f],f,c))&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b
){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),(
e=function(){return a.apply(b||this,d.concat(f.call(arguments)))}).guid=a.guid=a.guid||r.guid++,e},
now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),
r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,
b){j["[object "+b+"]"]=b.toLowerCase()});var x=function(a){function ga(a,b,d,e){var f,h,j,k,l,o,r,
s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w
)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){
if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(
j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,
b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName
)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b
,r=a;else if("object"!==b.nodeName.toLowerCase()){for((k=b.getAttribute("id"))?k=k.replace(ba,ca
):b.setAttribute("id",k=u),h=(o=g(a)).length;h--;)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a
)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{
k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){function b(c,e){
return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}var a=[];return b}function ia(a){
return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1
}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){for(var c=a.split("|"),
e=c.length;e--;)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,
d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)for(
;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){
return"input"===b.nodeName.toLowerCase()&&b.type===a}}function na(a){return function(b){
var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){
return function(b){
return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&!1===b.disabled&&(
b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b
){return b=+b,ia(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(
d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}function ra(
){}function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){
var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){for(;b=b[d];
)if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){for(;b=b[d];)if((
1===b.nodeType||g)&&a(b,c,i))return!0}else for(;b=b[d];)if(1===b.nodeType||g)if(k=(l=b[u]||(b[u]={})
)[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f]
)&&j[0]===w&&j[1]===h)return m[2]=j[2];if((k[f]=m)[2]=a(b,c,i))return!0}}}function ua(a){
return 1<a.length?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}
function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(
var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)))
;return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,
h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),
r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d)for(j=wa(r,n),d(j,[],h,i),k=j.length;k--;)(l=j[k])&&(
r[n[k]]=!(q[n[k]]=l));if(f){if(e||a){if(e){for(j=[],k=r.length;k--;)(l=r[k])&&j.push(q[k]=l);e(null,
r=[],j,i)}for(k=r.length;k--;)(l=r[k])&&-1<(j=e?I(f,l):m[k])&&(f[j]=!(g[j]=l))}}else r=wa(
r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length
,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(
function(a){return-1<I(b,a)},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d
):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if((
c=d.filter[a[i].type].apply(null,a[i].matches))[u]){for(e=++i;e<f&&!d.relative[a[e].type];e++);
return xa(1<i&&ua(m),1<i&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"
),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){
var c=0<b.length,e=0<a.length,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,
x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k
);s!==z&&null!=(l=x[s]);s++){if(e&&l){for(o=0,g||l.ownerDocument===n||(m(l),h=!p);q=a[o++];)if(q(l,
g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){for(
o=0;q=b[o++];)q(t,u,g,h);if(f){if(0<r)for(;s--;)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),
k&&!f&&0<u.length&&1<r+b.length&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}var b,c,d,
e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),
B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice
,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},
J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped"
,K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]"
,
N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)"
,O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp(
"^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp(
"="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp(
"^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),
PSEUDO:new RegExp("^"+N),CHILD:new RegExp(
"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)"
,"i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp(
"^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)",
"i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,
Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)",
"ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!=d||c?b:d<0?String.fromCharCode(d+65536
):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16
)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return!0===a.disabled},{dir:"parentNode",
next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType
}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){for(var c=a.length,
d=0;a[c++]=b[d++];);a.length=c-1}}}for(b in c=ga.support={},f=ga.isXML=function(a){var b=a&&(
a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){
var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement&&(o=(n=g
).documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(
e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),
c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),
c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),
!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),
c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u
).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){
var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa)
;return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){
var b=a.replace(_,aa);return function(a){
var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),
d.find.TAG=c.getElementsByTagName?function(a,b){
return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(
a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];
)1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){
if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(
c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a
).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>"
,a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),
a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(
"[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),
a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){
a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
;var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name"
,"D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(
":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,
2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"
),q.push(",.*:")})),(c.matchesSelector=Y.test(
s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector)
)&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),
q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(
o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){
var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(
c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b
){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0
;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d||(1&(d=(a.ownerDocument||a
)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1
)||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a
)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b
)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f
)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);for(c=a;c=c.parentNode;
)g.unshift(c);for(c=b;c=c.parentNode;)h.unshift(c);for(;g[d]===h[d];)d++;return d?la(g[d],h[d]
):g[d]===v?-1:h[d]===v?1:0}),n},ga.matches=function(a,b){return ga(a,null,null,b)},
ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),
c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(
d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return 0<ga(b,n,null
,[a]).length},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},
ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],
f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0
;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b)
)&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a
){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[]
,e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){for(;b=a[f++];
)b===a[f]&&(e=d.push(f));for(;e--;)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,
c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent
)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f
)return a.nodeValue}else for(;b=a[d++];)c+=e(b);return c},(d=ga.selectors={cacheLength:50,
createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{
dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{
ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),
"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),
"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*(
"even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},
PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(
a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(
a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa
).toLowerCase();return"*"===a?function(){return!0}:function(a){
return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(
b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test(
"string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute(
"class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a)
;return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c
):"*="===b?c&&-1<e.indexOf(c):"$="===b?c&&e.slice(-c.length)===c:"~="===b?-1<(" "+e.replace(O," "
)+" ").indexOf(c):"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){
var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){
return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",
q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){for(;p;){for(m=b;m=m[p];)if(
h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}
if(o=[g?q.firstChild:q.lastChild],g&&s){for(t=(n=(j=(k=(l=(m=q)[u]||(m[u]={}))[m.uniqueID]||(
l[m.uniqueID]={}))[a]||[])[0]===w&&j[1])&&j[2],m=n&&q.childNodes[n];m=++n&&m&&m[p]||(t=n=0)||o.pop(
);)if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(t=n=(j=(k=(l=(m=b)[u]||(m[u]={})
)[m.uniqueID]||(l[m.uniqueID]={}))[a]||[])[0]===w&&j[1]),!1===t)for(;(m=++n&&m&&m[p]||(t=n=0
)||o.pop())&&((h?m.nodeName.toLowerCase()!==r:1!==m.nodeType)||!++t||(s&&((k=(l=m[u]||(m[u]={})
)[m.uniqueID]||(l[m.uniqueID]={}))[a]=[w,t]),m!==b)););return(t-=e)===d||t%d==0&&0<=t/d}}},
PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error(
"unsupported pseudo: "+a);return e[u]?e(b):1<e.length?(c=[a,a,"",b],d.setFilters.hasOwnProperty(
a.toLowerCase())?ia(function(a,c){for(var d,f=e(a,b),g=f.length;g--;)a[d=I(a,f[g])]=!(c[d]=f[g])}
):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"))
;return d[u]?ia(function(a,b,c,e){for(var f,g=d(a,null,e,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(
b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){
return function(b){return 0<ga(a,b).length}}),contains:ia(function(a){return a=a.replace(_,aa),
function(b){return-1<(b.textContent||b.innerText||e(b)).indexOf(a)}}),lang:ia(function(a){
return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){
var c;do{if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return(c=c.toLowerCase()
)===a||0===c.indexOf(a+"-")}while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){
var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},
focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(
a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){
var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},
selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,!0===a.selected},
empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},
parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},
input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase()
;return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b
;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type")
)||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),
eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c)
;return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){
for(var d=c<0?c+b:c;0<=--d;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;
)a.push(d);return a})}}).pseudos.nth=d.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0
})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b)
;return ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g
,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);for(h=a,i=[],j=d.preFilter;h;){for(g in c&&!(e=Q.exec(h
))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,
type:e[0].replace(P," ")}),h=h.slice(c.length)),d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(
c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}
return b?h.length:h?ga.error(a):z(a,i).slice(0)},h=ga.compile=function(a,b){var c,d=[],e=[],
f=A[a+" "];if(!f){for(b||(b=g(a)),c=b.length;c--;)(f=ya(b[c]))[u]?d.push(f):e.push(f);(f=A(a,za(e,d)
)).selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,
o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(2<(j=o[0]=o[0].slice(0)).length&&"ID"===(k=j[0]
).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(!(b=(d.find.ID(k.matches[0].replace(
_,aa),b)||[])[0]))return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}for(
i=V.needsContext.test(a)?0:j.length;i--&&(k=j[i],!d.relative[l=k.type]);)if((m=d.find[l])&&(f=m(
k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),!(
a=f.length&&sa(j)))return G.apply(e,f),e;break}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(
b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),
c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(
function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka(
"type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)
}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),
""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(
!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){
return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c
)return!0===a[b]?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a)
;r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,
r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a
,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&r(a).is(c))break
;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a)
;return c},A=r.expr.match.needsContext,
B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/
;r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),
1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a
){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if(
"string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],
this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return 1<d?r.uniqueSort(c):c
},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(
D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length
}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(r.fn.init=function(a,b,c){var e,f;if(!a
)return this;if(c=c||E,"string"==typeof a){if(!(e="<"===a[0]&&">"===a[a.length-1]&&3<=a.length?[null
,a,null]:F.exec(a))||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]
){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),
B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e])
;return this}return(f=d.getElementById(e[2]))&&(this[0]=f,this.length=1),this}return a.nodeType?(
this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)}
).prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,
prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(
var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,
f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(
c.nodeType<11&&(g?-1<g.index(c):1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}
return this.pushStack(1<f.length?r.uniqueSort(f):f)},index:function(a){
return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a
):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){
return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){
return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),r.each({parent:function(a){
var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},
parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")
},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},
prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,
"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){
return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},
contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){
r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),
d&&"string"==typeof d&&(e=r.filter(d,e)),1<this.length&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse(
)),this.pushStack(e)}});var K=/\S+/g;r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a
);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1)for(c=g.shift(
);++h<f.length;)!1===f[h].apply(c[0],c[1])&&a.stopOnFalse&&(h=f.length,c=!1);a.memory||(c=!1),b=!1,
e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,
function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)}
)}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){for(
var c;-1<(c=r.inArray(b,f,c));)f.splice(c,1),c<=h&&h--}),this},has:function(a){
return a?-1<r.inArray(a,f):0<f.length},empty:function(){return f&&(f=[]),this},disable:function(){
return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""
),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=[a,(c=c||[]).slice?c.slice(
):c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(
){return!!d}};return j},r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks(
"memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks(
"once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),
1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments
).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments
;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](
function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify
).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},
then:function(b,d,e){function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a
,j;if(!(b<f)){if((a=d.apply(h,i))===c.promise())throw new TypeError("Thenable self-resolution")
;j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c
,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(
e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){
r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),f<=b+1&&(d!==N&&(h=void 0,i=[a]),
c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),
a.setTimeout(k))}}var f=0;return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,
a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}
).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b
){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(
b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},
f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,
c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,
e[a]=1<arguments.length?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)
).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();for(;c--;
)O(e[c],h(c),g.reject);return g.promise()}})
;var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,
c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn(
"jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(
function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a
){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){
a?r.readyWait++:r.ready(!0)},ready:function(a){(!0===a?--r.readyWait:r.isReady)||((r.isReady=!0
)!==a&&0<--r.readyWait||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then,
"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(
r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,
c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c))for(h in e=!0,c)S(a,b,h,c[h],!0,f,g
);else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c
){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)))
;return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){
return 1===a.nodeType||9===a.nodeType||!+a.nodeType};U.uid=1,U.prototype={cache:function(a){
var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,
this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if(
"string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},
get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},
access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(
a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){
r.isArray(b)?b=b.map(r.camelCase):b=(b=r.camelCase(b))in d?[b]:b.match(K)||[],c=b.length;for(;c--;
)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(
a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){
var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,
X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;r.extend({hasData:function(a){return W.hasData(a
)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)
},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),
r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(
this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){for(c=g.length;c--;)g[c]&&(0===(
d=g[c].name).indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}
return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(
f&&void 0===b){if(void 0!==(c=W.get(f,a)))return c;if(void 0!==(c=Z(f,a)))return c}else this.each(
function(){W.set(this,a,b)})},null,b,1<arguments.length,null,!0)},removeData:function(a){
return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a
)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(
c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),
f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&(
"fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},
_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks(
"once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){
var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a
):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),
"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){
r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){
var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for(
"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)(c=V.get(f[g],a+"queueHooks"))&&c.empty&&(d++,
c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,
b){return"none"===(a=b||a).style.display||""===a.style.display&&r.contains(a.ownerDocument,a
)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],
a.style[f]=b[f];for(f in e=c.apply(a,d||[]),b)a.style[f]=g[f];return e},ea={};r.fn.extend({
show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){
return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(
this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,
"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>",
"</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
;ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td
;var na=/<|&#?\w+;/;!function(){var b=d.createDocumentFragment().appendChild(d.createElement("div"))
,c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),
c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0
).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0
).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,
ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;r.event={global:{},
add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q)for(c.handler&&(c=(f=c).handler,
e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}
),(g=q.handle)||(g=q.handle=function(b){
return void 0!==r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),j=(b=(
b||"").match(K)||[""]).length;j--;)n=p=(h=sa.exec(b[j])||[])[1],o=(h[2]||"").split(".").sort(),n&&(
l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({
type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,
needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||((m=i[n]=[]
).delegateCount=0,l.setup&&!1!==l.setup.call(a,d,o,g)||a.addEventListener&&a.addEventListener(n,g)),
l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k
):m.push(k),r.event.global[n]=!0)},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(
a)&&V.get(a);if(q&&(i=q.events)){for(j=(b=(b||"").match(K)||[""]).length;j--;)if(n=p=(h=sa.exec(b[j]
)||[])[1],o=(h[2]||"").split(".").sort(),n){for(l=r.event.special[n]||{},m=i[n=(
d?l.delegateType:l.bindType)||n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)")
,g=f=m.length;f--;)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace
)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,
l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&!1!==l.teardown.call(a,o,q.handle
)||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0)
;r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var c,d,e,f,g,h,
b=r.event.fix(a),i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],
k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(
b.delegateTarget=this,!k.preDispatch||!1!==k.preDispatch.call(this,b)){for(h=r.event.handlers.call(
this,b,j),c=0;(f=h[c++])&&!b.isPropagationStopped();)for(b.currentTarget=f.elem,d=0;(
g=f.handlers[d++])&&!b.isImmediatePropagationStopped();)b.rnamespace&&!b.rnamespace.test(g.namespace
)||(b.handleObj=g,b.data=g.data,void 0!==(e=((r.event.special[g.origType]||{}).handle||g.handler
).apply(f.elem,i))&&!1===(b.result=e)&&(b.preventDefault(),b.stopPropagation()))
;return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,
g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1)
)for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(!0!==i.disabled||"click"!==a.type)){for(d=[]
,c=0;c<h;c++)void 0===d[e=(f=b[c]).selector+" "]&&(d[e]=f.needsContext?-1<r(e,this).index(i):r.find(
e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}
return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){
Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b
)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent
)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,
configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},
special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==va()&&this.focus)return this.focus()
,!1},delegateType:"focusin"},blur:{trigger:function(){if(this===va()&&this.blur)return this.blur(),
!1},delegateType:"focusout"},click:{trigger:function(){if(
"checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},
_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){
void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},
r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,
b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,
this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&!1===a.returnValue?ta:ua,
this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,
this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,
b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},
r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,
isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent
;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){
var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},
stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,
a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,
bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,
pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,
clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,
targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button
;return null==a.which&&qa.test(a.type
)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type
)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",
mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){
r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,
f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,
arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a
,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj
)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,
d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}
return!1!==b&&"function"!=typeof b||(c=b,b=void 0),!1===c&&(c=ua),this.each(function(){
r.event.remove(this,a,c,b)})}})
;var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,
Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;r.extend({htmlPrefilter:function(a){return a.replace(
xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a)
;if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),d=0,e=(f=la(a)
).length;d<e;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;d<e;d++)Fa(f[d],
g[d]);else Fa(a,h);return 0<(g=la(h,"script")).length&&ma(g,!i&&la(a,"script")),h},
cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(
b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle)
;c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){
return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(
a){return void 0===a?r.text(this):this.empty().each(function(){
1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,
arguments.length)},append:function(){return Ha(this,arguments,function(a){
1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Ca(this,a).appendChild(a)})},
prepend:function(){return Ha(this,arguments,function(a){if(
1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,
b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){
this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,
function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){
for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="")
;return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){
return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,
d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a
)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)1===(
b=this[c]||{}).nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty(
).append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,
function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,
this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",
insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a
),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get())
;return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),
La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)}
;!function(){function b(){if(i){
i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"
,i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,
e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,
e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(
i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",
o.clearCloneStyle="content-box"===i.style.backgroundClip,
h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"
,h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){
return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}
))}();var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"
},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style
;r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,
fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{
"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g
,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),
g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(
"string"===(f=typeof c)&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),void(null!=c&&c==c&&(
"number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf(
"background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c))))}},css:function(
a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),(
g=r.cssHooks[b]||r.cssHooks[h])&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),
"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),!0===c||isFinite(f)?f||0:e):e}}),r.each(
["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Oa.test(r.css(a,
"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(
){return Wa(a,b,d)})},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,
"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,
c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Ma(a,
"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){
return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},
function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "
):[c];d<4;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),
r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(
d=La(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c
):r.css(a,b)},a,b,1<arguments.length)}}),(r.Tween=Xa).prototype={constructor:Xa,init:function(a,b,c,
d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,
this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){
var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},
run:function(a){var b,c=Xa.propHooks[this.prop]
;return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,
this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,
this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this
):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={
_default:{get:function(a){var b
;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(
b=r.css(a.elem,a.prop,""))&&"auto"!==b?b:0},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a
):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(
a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){
a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},
swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,
r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;r.Animation=r.extend(gb,{
tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},
tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++
)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],
prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){
var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,
easing:c&&b||b&&!r.isFunction(b)&&b}
;return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default
,null!=e.queue&&!0!==e.queue||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(
e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){
return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,
b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(
e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||!1===f.queue?this.each(g):this.queue(
f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)}
;return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&!1!==a&&this.queue(a||"fx",[]),this.each(function(
){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]
);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;
)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(
this,a)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),
d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),
e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0
),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),
r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){
return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({
slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{
opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){
return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now(
);b<c.length;b++)(a=c[b])()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},
r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,
r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(
r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za
):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c
){return b=r.fx&&r.fx.speeds[b]||b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b)
;d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),
c=d.createElement("select").appendChild(d.createElement("option"));a.type="checkbox",
o.checkOn=""!==a.value,o.optSelected=c.selected,(a=d.createElement("input")).value="t",
a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(
a,b){return S(this,r.attr,a,b,1<arguments.length)},removeAttr:function(a){return this.each(function(
){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(
3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(
e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(
a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:null==(d=r.find.attr(a,b))?void 0:d)
},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){
var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,
d=0,e=b&&b.match(K);if(e&&1===a.nodeType)for(;c=e[d++];)a.removeAttribute(c)}}),hb={set:function(a,b
,c){return!1===b?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(
/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase()
;return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}})
;var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){
return S(this,r.prop,a,b,1<arguments.length)},removeProp:function(a){return this.each(function(){
delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(
3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b)
)?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,
10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor",
"class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode
;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(
b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly",
"maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"
],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;r.fn.extend({
addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this
).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a)for(b=a.match(K)||[];c=this[i++];)if(
e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){for(g=0;f=b[g++];)d.indexOf(" "+f+" ")<0&&(
d+=f+" ");e!==(h=r.trim(d))&&c.setAttribute("class",h)}return this},removeClass:function(a){var b,c,
d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(
this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a)for(b=a.match(K
)||[];c=this[i++];)if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){for(g=0;f=b[g++];)for(
;-1<d.indexOf(" "+f+" ");)d=d.replace(" "+f+" "," ");e!==(h=r.trim(d))&&c.setAttribute("class",h)}
return this},toggleClass:function(a,b){var c=typeof a
;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a
)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){
var b,d,e,f;if("string"===c)for(d=0,e=r(this),f=a.match(K)||[];b=f[d++];)e.hasClass(b
)?e.removeClass(b):e.addClass(b);else void 0!==a&&"boolean"!==c||((b=mb(this))&&V.set(this,
"__className__",b),this.setAttribute&&this.setAttribute("class",b||!1===a?"":V.get(this,
"__className__")||""))})},hasClass:function(a){var b,c,d=0;for(b=" "+a+" ";c=this[d++];)if(
1===c.nodeType&&-1<(" "+mb(c)+" ").replace(lb," ").indexOf(b))return!0;return!1}});var nb=/\r/g,
ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];return arguments.length?(
d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(null==(e=d?a.call(this,c,r(this
).val()):a)?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){
return null==a?"":a+""})),(b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()]
)&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))})):e?(
b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()])&&"get"in b&&void 0!==(c=b.get(e,"value")
)?c:"string"==typeof(c=e.value)?c.replace(nb,""):null==c?"":c:void 0}}),r.extend({valHooks:{option:{
get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},
select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[
],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)if(((c=d[i]).selected||i===e)&&!c.disabled&&(
!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}
return g},set:function(a,b){for(var c,d,e=a.options,f=r.makeArray(b),g=e.length;g--;)((d=e[g]
).selected=-1<r.inArray(r.valHooks.option.get(d),f))&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),
r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b)
)return a.checked=-1<r.inArray(r(a).val(),b)}},o.checkOn||(r.valHooks[this].get=function(a){
return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/
;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,
q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,
3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(-1<p.indexOf(".")&&(p=(q=p.split("."
)).shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,(b=b[r.expando]?b:new r.Event(p,
"object"==typeof b&&b)).isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp(
"(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[
b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||!1!==n.trigger.apply(e,c))){if(
!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode
);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}
for(g=0;(h=o[g++])&&!b.isPropagationStopped();)b.type=1<g?j:n.bindType||p,(m=(V.get(h,"events")||{}
)[b.type]&&V.get(h,"handle"))&&m.apply(h,c),(m=k&&h[k])&&m.apply&&T(h)&&(b.result=m.apply(h,c),
!1===b.result&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented(
)||n._default&&!1!==n._default.apply(o.pop(),c)||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&((
i=e[k])&&(e[k]=null),e[r.event.triggered=p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},
simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,
null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)}
)},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each(
"blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
" "),function(a,b){r.fn[b]=function(a,c){return 0<arguments.length?this.on(b,null,a,c):this.trigger(
b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),
o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){
var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){
var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)
},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(
d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/
;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser
).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror"
).length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,
vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;r.param=function(
a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a
)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,
function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend(
{serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){
return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(
function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName
)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val()
;return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}
}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,
Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a")
;Ib.href=qb.href,r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",
isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,
contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",
html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},
contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",
text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,
"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,
b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(
Gb),ajax:function(b,c){function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,
g=h||"",y.readyState=0<b?4:0,j=200<=b&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(
o.ifModified&&((w=y.getResponseHeader("Last-Modified"))&&(r.lastModified[f]=w),(
w=y.getResponseHeader("etag"))&&(r.etag[f]=w)),
204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,j=!(n=v.error))
):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]
):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,
j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger(
"ajaxStop")))}"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c)
,p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks(
"once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(
a){var b;if(k){if(!h)for(h={};b=Bb.exec(g);)h[b[1].toLowerCase()]=b[2];b=h[a.toLowerCase()]}
return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a
,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},
overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a
)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){
var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+""
).replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(
o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{
j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){
o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,
o.traditional)),Kb(Fb,o,c,y),k)return y;for(m in(l=r.event&&o.global
)&&0==r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(
o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf(
"application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),
o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),!1===o.cache&&(f=f.replace(Ab,""),n=(sb.test(
f)?"&":"?")+"_="+rb+++n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader(
"If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(
o.data&&o.hasContent&&!1!==o.contentType||c.contentType)&&y.setRequestHeader("Content-Type",
o.contentType),y.setRequestHeader("Accept",
o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+(
"*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]),o.headers)y.setRequestHeader(m,
o.headers[m]);if(o.beforeSend&&(!1===o.beforeSend.call(p,y,o)||k))return y.abort();if(x="abort",
t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger(
"ajaxSend",[y,o]),k)return y;o.async&&0<o.timeout&&(i=a.setTimeout(function(){y.abort("timeout")},
o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");return y},
getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,
"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(
e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a
)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,
async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(
r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),
this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstElementChild;
)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a
)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),
c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a)
;return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){
return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),
r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(
a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(
){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr()
;o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(
o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,
b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];for(
g in b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),
b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)h.setRequestHeader(
g,e[g]);c=function(a){return function(){c&&(
c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort(
):"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(
Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text"
)||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},
h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),
void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(
function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},
abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),
r.ajaxSetup({accepts:{
script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){
return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),
a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){var b,c;if(a.crossDomain
)return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error"
,c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},
abort:function(){c&&c()}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",
jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter(
"json jsonp",function(b,c,d){var e,f,g,h=!1!==b.jsonp&&(Rb.test(b.url
)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded"
)&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(
b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):!1!==b.jsonp&&(
b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){
return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){
g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(
b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),
o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body
;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b
,c){return"string"!=typeof a?[]:("boolean"==typeof b&&(c=b,b=!1),b||(o.createHTMLDocument?((e=(
b=d.implementation.createHTMLDocument("")).createElement("base")).href=d.location.href,
b.head.appendChild(e)):b=d),g=!c&&[],(f=B.exec(a))?[b.createElement(f[1])]:(f=oa([a],b,g),
g&&g.length&&r(g).remove(),r.merge([],f.childNodes)));var e,f,g},r.fn.load=function(a,b,c){var d,e,f
,g=this,h=a.indexOf(" ");return-1<h&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,
b=void 0):b&&"object"==typeof b&&(e="POST"),0<g.length&&r.ajax({url:a,type:e||"GET",dataType:"html",
data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}
).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each([
"ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){
r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(
r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i
,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(
a,"top"),i=r.css(a,"left"),("absolute"===k||"fixed"===k)&&-1<(f+i).indexOf("auto")?(g=(d=l.position(
)).top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},
h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),
"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length
)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0]
;return f?f.getClientRects().length?(d=f.getBoundingClientRect()).width||d.height?(c=Sb(
e=f.ownerDocument),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,
left:d.left+c.pageXOffset-b.clientLeft}):d:{top:0,left:0}:void 0},position:function(){if(this[0]){
var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(
a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(
a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,
"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){
return this.map(function(){for(var a=this.offsetParent;a&&"static"===r.css(a,"position");
)a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},
function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a)
;return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,
arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a
,c){if(c)return c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",
Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){
r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(
!0===e||!0===f?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b
)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(
f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],
f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({
bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},
delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){
return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,
"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,
Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},
b||(a.jQuery=a.$=r),r}),function(t,e){"use strict";t.rails!==e&&t.error(
"jquery-ujs has already been loaded!");var a,n=t(document);t.rails=a={
linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
buttonClickSelector:"button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",
formSubmitSelector:"form",
formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
disableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
requiredInputSelector:"input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
fileInputSelector:"input[name][type=file]:not([disabled])",
linkDisableSelector:"a[data-disable-with], a[data-disable]",
buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]",
csrfToken:function(){return t("meta[name=csrf-token]").attr("content")},csrfParam:function(){
return t("meta[name=csrf-param]").attr("content")},CSRFProtection:function(t){var e=a.csrfToken()
;e&&t.setRequestHeader("X-CSRF-Token",e)},refreshCSRFTokens:function(){t(
'form input[name="'+a.csrfParam()+'"]').val(a.csrfToken())},fire:function(e,a,n){var r=t.Event(a)
;return e.trigger(r,n),!1!==r.result},confirm:function(t){return confirm(t)},ajax:function(e){
return t.ajax(e)},href:function(t){return t[0].href},isRemote:function(t){return t.data("remote"
)!==e&&!1!==t.data("remote")},handleRemote:function(n){var r,i,o,l,s,u;if(a.fire(n,"ajax:before")){
if(l=n.data("with-credentials")||null,s=n.data("type")||t.ajaxSettings&&t.ajaxSettings.dataType,
n.is("form")){r=n.data("ujs:submit-button-formmethod")||n.attr("method"),i=n.data(
"ujs:submit-button-formaction")||n.attr("action"),o=t(n[0]).serializeArray();var d=n.data(
"ujs:submit-button");d&&(o.push(d),n.data("ujs:submit-button",null)),n.data(
"ujs:submit-button-formmethod",null),n.data("ujs:submit-button-formaction",null)}else n.is(
a.inputChangeSelector)?(r=n.data("method"),i=n.data("url"),o=n.serialize(),n.data("params")&&(
o=o+"&"+n.data("params"))):n.is(a.buttonClickSelector)?(r=n.data("method")||"get",i=n.data("url"),
o=n.serialize(),n.data("params")&&(o=o+"&"+n.data("params"))):(r=n.data("method"),i=a.href(n),
o=n.data("params")||null);return u={type:r||"GET",data:o,dataType:s,beforeSend:function(t,r){
return r.dataType===e&&t.setRequestHeader("accept","*/*;q=0.5, "+r.accepts.script),!!a.fire(n,
"ajax:beforeSend",[t,r])&&void n.trigger("ajax:send",t)},success:function(t,e,a){n.trigger(
"ajax:success",[t,e,a])},complete:function(t,e){n.trigger("ajax:complete",[t,e])},error:function(t,e
,a){n.trigger("ajax:error",[t,e,a])},crossDomain:a.isCrossDomain(i)},l&&(u.xhrFields={
withCredentials:l}),i&&(u.url=i),a.ajax(u)}return!1},isCrossDomain:function(t){
var e=document.createElement("a");e.href=location.href;var a=document.createElement("a");try{
return a.href=t,a.href=a.href,!((!a.protocol||":"===a.protocol
)&&!a.host||e.protocol+"//"+e.host==a.protocol+"//"+a.host)}catch(n){return!0}},
handleMethod:function(n){var r=a.href(n),i=n.data("method"),o=n.attr("target"),l=a.csrfToken(),
s=a.csrfParam(),u=t('<form method="post" action="'+r+'"></form>'),
d='<input name="_method" value="'+i+'" type="hidden" />';s===e||l===e||a.isCrossDomain(r)||(
d+='<input name="'+s+'" value="'+l+'" type="hidden" />'),o&&u.attr("target",o),u.hide().append(d
).appendTo("body"),u.submit()},formElements:function(e,a){return e.is("form")?t(e[0].elements
).filter(a):e.find(a)},disableFormElements:function(e){a.formElements(e,a.disableSelector).each(
function(){a.disableFormElement(t(this))})},disableFormElement:function(t){var a,n;a=t.is("button"
)?"html":"val",(n=t.data("disable-with"))!==e&&(t.data("ujs:enable-with",t[a]()),t[a](n)),t.prop(
"disabled",!0),t.data("ujs:disabled",!0)},enableFormElements:function(e){a.formElements(e,
a.enableSelector).each(function(){a.enableFormElement(t(this))})},enableFormElement:function(t){
var a=t.is("button")?"html":"val";t.data("ujs:enable-with")!==e&&(t[a](t.data("ujs:enable-with")),
t.removeData("ujs:enable-with")),t.prop("disabled",!1),t.removeData("ujs:disabled")},
allowAction:function(t){var e,n=t.data("confirm"),r=!1;if(!n)return!0;if(a.fire(t,"confirm")){try{
r=a.confirm(n)}catch(i){(console.error||console.log).call(console,i.stack||i)}e=a.fire(t,
"confirm:complete",[r])}return r&&e},blankInputs:function(e,a,n){var r,o,l,s=t(),
u=a||"input,textarea",d=e.find(u),m={};return d.each(function(){(r=t(this)).is("input[type=radio]"
)?(l=r.attr("name"),m[l]||(0===e.find('input[type=radio]:checked[name="'+l+'"]').length&&(o=e.find(
'input[type=radio][name="'+l+'"]'),s=s.add(o)),m[l]=l)):(r.is(
"input[type=checkbox],input[type=radio]")?r.is(":checked"):!!r.val())===n&&(s=s.add(r))}),
!!s.length&&s},nonBlankInputs:function(t,e){return a.blankInputs(t,e,!0)},stopEverything:function(e
){return t(e.target).trigger("ujs:everythingStopped"),e.stopImmediatePropagation(),!1},
disableElement:function(t){var n=t.data("disable-with");n!==e&&(t.data("ujs:enable-with",t.html()),
t.html(n)),t.bind("click.railsDisable",function(t){return a.stopEverything(t)}),t.data(
"ujs:disabled",!0)},enableElement:function(t){t.data("ujs:enable-with")!==e&&(t.html(t.data(
"ujs:enable-with")),t.removeData("ujs:enable-with")),t.unbind("click.railsDisable"),t.removeData(
"ujs:disabled")}},a.fire(n,"rails:attachBindings")&&(t.ajaxPrefilter(function(t,e,n){
t.crossDomain||a.CSRFProtection(n)}),t(window).on("pageshow.rails",function(){t(
t.rails.enableSelector).each(function(){var e=t(this);e.data("ujs:disabled"
)&&t.rails.enableFormElement(e)}),t(t.rails.linkDisableSelector).each(function(){var e=t(this)
;e.data("ujs:disabled")&&t.rails.enableElement(e)})}),n.on("ajax:complete",a.linkDisableSelector,
function(){a.enableElement(t(this))}),n.on("ajax:complete",a.buttonDisableSelector,function(){
a.enableFormElement(t(this))}),n.on("click.rails",a.linkClickSelector,function(e){var n=t(this),
r=n.data("method"),i=n.data("params"),o=e.metaKey||e.ctrlKey;if(!a.allowAction(n)
)return a.stopEverything(e);if(!o&&n.is(a.linkDisableSelector)&&a.disableElement(n),a.isRemote(n)){
if(o&&(!r||"GET"===r)&&!i)return!0;var l=a.handleRemote(n);return!1===l?a.enableElement(n):l.fail(
function(){a.enableElement(n)}),!1}return r?(a.handleMethod(n),!1):void 0}),n.on("click.rails",
a.buttonClickSelector,function(e){var n=t(this);if(!a.allowAction(n)||!a.isRemote(n)
)return a.stopEverything(e);n.is(a.buttonDisableSelector)&&a.disableFormElement(n)
;var r=a.handleRemote(n);return!1===r?a.enableFormElement(n):r.fail(function(){a.enableFormElement(n
)}),!1}),n.on("change.rails",a.inputChangeSelector,function(e){var n=t(this);return a.allowAction(n
)&&a.isRemote(n)?(a.handleRemote(n),!1):a.stopEverything(e)}),n.on("submit.rails",
a.formSubmitSelector,function(n){var r,i,o=t(this),l=a.isRemote(o);if(!a.allowAction(o)
)return a.stopEverything(n);if(o.attr("novalidate")===e)if(o.data("ujs:formnovalidate-button")===e){
if((r=a.blankInputs(o,a.requiredInputSelector,!1))&&a.fire(o,"ajax:aborted:required",[r])
)return a.stopEverything(n)}else o.data("ujs:formnovalidate-button",e);if(l){if(i=a.nonBlankInputs(o
,a.fileInputSelector)){setTimeout(function(){a.disableFormElements(o)},13);var s=a.fire(o,
"ajax:aborted:file",[i]);return s||setTimeout(function(){a.enableFormElements(o)},13),s}
return a.handleRemote(o),!1}setTimeout(function(){a.disableFormElements(o)},13)}),n.on("click.rails"
,a.formInputClickSelector,function(e){var n=t(this);if(!a.allowAction(n))return a.stopEverything(e)
;var r=n.attr("name"),i=r?{name:r,value:n.val()}:null,o=n.closest("form");0===o.length&&(o=t(
"#"+n.attr("form"))),o.data("ujs:submit-button",i),o.data("ujs:formnovalidate-button",n.attr(
"formnovalidate")),o.data("ujs:submit-button-formaction",n.attr("formaction")),o.data(
"ujs:submit-button-formmethod",n.attr("formmethod"))}),n.on("ajax:send.rails",a.formSubmitSelector,
function(e){this===e.target&&a.disableFormElements(t(this))}),n.on("ajax:complete.rails",
a.formSubmitSelector,function(e){this===e.target&&a.enableFormElements(t(this))}),t(function(){
a.refreshCSRFTokens()}))}(jQuery),function(a){"use strict"
;"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict"
;function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/
)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a)
;throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){var b=a.toString(
).replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(b)}function d(a){return function(b){
var d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(d)for(var f=0,g=d.length;f<g;++f){var h=d[f].match(
/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),j=c(h[0]),k=h[1]||"",l=h[3]||"",m=null;h=h[2],i.hasOwnProperty(h
)&&(m=i[h],m=Number(a[m])),null!==m&&("!"===k&&(m=e(l,m)),""===k&&m<10&&(m="0"+m.toString()),
b=b.replace(j,m.toString()))}return b.replace(/%%/,"%")}}function e(a,b){var c="s",d="";return a&&(
1===(a=a.replace(/(:|;|\s)/gi,"").split(/\,/)).length?c=a[0]:(d=a[0],c=a[1])),1<Math.abs(b)?c:d}
var f=[],g=[],h={precision:100,elapse:!1,defer:!1};g.push(/^[0-9]*$/.source),g.push(
/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(
/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"))
;var i={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",
M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"},j=function(b
,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.options=a.extend({},h),
this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),
d&&("function"==typeof d?(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),
this.$el.on("finish.countdown",d)):this.options=a.extend({},h,d)),this.setFinalDate(c),
!1===this.options.defer&&this.start()};a.extend(j.prototype,{start:function(){
null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),
this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){
clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){
this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()
},remove:function(){this.stop.call(this),f[this.instanceNumber]=null,delete this.$el.data(
).countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){if(
0!==this.$el.closest("html").length){var b,c=void 0!==a._data(this.el,"events"),d=new Date
;b=this.finalDate.getTime()-d.getTime(),b=Math.ceil(b/1e3),b=!this.options.elapse&&b<0?0:Math.abs(b)
,this.totalSecsLeft!==b&&c&&(this.totalSecsLeft=b,this.elapsed=d>=this.finalDate,this.offset={
seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(
this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(
this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),
weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(
this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),
years:Math.abs(this.finalDate.getFullYear()-d.getFullYear()),totalDays:Math.floor(
this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),
totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft},
this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),
this.dispatchEvent("finish")))}else this.remove()},dispatchEvent:function(b){var c=a.Event(
b+".countdown");c.finalDate=this.finalDate,c.elapsed=this.elapsed,c.offset=a.extend({},this.offset),
c.strftime=d(this.offset),this.$el.trigger(c)}}),a.fn.countdown=function(){
var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data(
"countdown-instance");if(void 0!==c){var d=f[c],e=b[0];j.prototype.hasOwnProperty(e)?d[e].apply(d,
b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()
):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new j(this,b[0],
b[1])})}}),function(){"use strict";function a(){function a(){function a(a,c){function d(a){
var c=1==(e=1-e)?"width":"height";return Math.floor(Number(a)*b[c])}var e=0;i[c].coords=a.split(","
).map(d).join(",")}var b={width:k.width/k.naturalWidth,height:k.height/k.naturalHeight};j.forEach(a)
}function b(a){return a.coords.replace(/ *, */g,",").replace(/ +/g,",")}function c(){clearTimeout(l)
,l=setTimeout(a,250)}function d(){(k.width!==k.naturalWidth||k.height!==k.naturalHeight)&&a()}
function e(){k.addEventListener("load",a,!1),window.addEventListener("focus",a,!1),
window.addEventListener("resize",c,!1),window.addEventListener("readystatechange",a,!1),
document.addEventListener("fullscreenchange",a,!1)}function f(){return"function"==typeof h._resize}
function g(){i=h.getElementsByTagName("area"),j=Array.prototype.map.call(i,b),
k=document.querySelector('img[usemap="#'+h.name+'"]'),h._resize=a}var h=this,i=null,j=null,k=null,
l=null;f()?h._resize():(g(),e(),d())}function b(){function b(a){if(!a.tagName)throw new TypeError(
"Object is not a valid DOM element");if("MAP"!==a.tagName.toUpperCase())throw new TypeError(
"Expected <MAP> tag, found <"+a.tagName+">.")}function c(c){c&&(b(c),a.call(c),d.push(c))}var d
;return function(a){switch(d=[],typeof a){case"undefined":case"string":Array.prototype.forEach.call(
document.querySelectorAll(a||"map"),c);break;case"object":c(a);break;default:throw new TypeError(
"Unexpected data type ("+typeof a+").")}return d}}"function"==typeof define&&define.amd?define([],b
):"object"==typeof module&&"object"==typeof module.exports?module.exports=b(
):window.imageMapResize=b(),"jQuery"in window&&(jQuery.fn.imageMapResize=function(){
return this.filter("map").each(a).end()})}(),function(a,b){
"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}
):"object"==typeof exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){
!function(){"use strict";function b(b,d){if(this.el=b,this.$el=a(b),this.s=a.extend({},c,d),
this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length
)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},
this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,
this.isTouch="ontouchstart"in document.documentElement,this.s.slideEndAnimatoin&&(
this.s.hideControlOnEnd=!1),
this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.s.selectWithin?this.$items=a(
this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(a(this.s.selector)
):this.$items=this.$el.children(),this.$slide="",this.$outer="",this.init(),this}var c={
mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",
startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,
escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,
getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,
showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",
download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,
dynamic:!1,dynamicEl:[],galleryId:1};b.prototype.init=function(){var b=this
;b.s.preload>b.$items.length&&(b.s.preload=b.$items.length);var c=window.location.hash;0<c.indexOf(
"lg="+this.s.galleryId)&&(b.index=parseInt(c.split("&slide=")[1],10),a("body").addClass(
"lg-from-hash"),a("body").hasClass("lg-on")||(setTimeout(function(){b.build(b.index)}),a("body"
).addClass("lg-on"))),b.s.dynamic?(b.$el.trigger("onBeforeOpen.lg"),b.index=b.s.index||0,a("body"
).hasClass("lg-on")||setTimeout(function(){b.build(b.index),a("body").addClass("lg-on")})
):b.$items.on("click.lgcustom",function(c){try{c.preventDefault(),c.preventDefault()}catch(a){
c.returnValue=!1}b.$el.trigger("onBeforeOpen.lg"),b.index=b.s.index||b.$items.index(this),a("body"
).hasClass("lg-on")||(b.build(b.index),a("body").addClass("lg-on"))})},b.prototype.build=function(b
){var c=this;c.structure(),a.each(a.fn.lightGallery.modules,function(b){
c.modules[b]=new a.fn.lightGallery.modules[b](c.el)}),c.slide(b,!1,!1,!1),c.s.keyPress&&c.keyPress()
,1<c.$items.length?(c.arrow(),setTimeout(function(){c.enableDrag(),c.enableSwipe()},50),
c.s.mousewheel&&c.mousewheel()):c.$slide.on("click.lg",function(){c.$el.trigger("onSlideClick.lg")})
,c.counter(),c.closeGallery(),c.$el.trigger("onAfterOpen.lg"),c.$outer.on(
"mousemove.lg click.lg touchstart.lg",function(){c.$outer.removeClass("lg-hide-items"),clearTimeout(
c.hideBartimeout),c.hideBartimeout=setTimeout(function(){c.$outer.addClass("lg-hide-items")},
c.s.hideBarsDelay)}),c.$outer.trigger("mousemove.lg")},b.prototype.structure=function(){var b,c="",
d="",e=0,f="",g=this;for(a("body").append('<div class="lg-backdrop"></div>'),a(".lg-backdrop").css(
"transition-duration",this.s.backdropDuration+"ms"),e=0;e<this.$items.length;e++
)c+='<div class="lg-item"></div>';if(this.s.controls&&1<this.$items.length&&(
d='<div class="lg-actions"><button class="lg-prev lg-icon">'+this.s.prevHtml+'</button><button class="lg-next lg-icon">'+this.s.nextHtml+"</button></div>"
),".lg-sub-html"===this.s.appendSubHtmlTo&&(f='<div class="lg-sub-html"></div>'),
b='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+c+'</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>'+d+f+"</div></div>"
,a("body").append(b),this.$outer=a(".lg-outer"),this.$slide=this.$outer.find(".lg-item"),
this.s.useLeft?(this.$outer.addClass("lg-use-left"),this.s.mode="lg-slide"):this.$outer.addClass(
"lg-use-css3"),g.setTop(),a(window).on("resize.lg orientationchange.lg",function(){setTimeout(
function(){g.setTop()},100)}),this.$slide.eq(this.index).addClass("lg-current"),this.doCss(
)?this.$outer.addClass("lg-css3"):(this.$outer.addClass("lg-css"),this.s.speed=0),
this.$outer.addClass(this.s.mode),this.s.enableDrag&&1<this.$items.length&&this.$outer.addClass(
"lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){
var h=this.$outer.find(".lg-inner");h.css("transition-timing-function",this.s.cssEasing),h.css(
"transition-duration",this.s.speed+"ms")}setTimeout(function(){a(".lg-backdrop").addClass("in")}),
setTimeout(function(){g.$outer.addClass("lg-visible")},this.s.backdropDuration),
this.s.download&&this.$outer.find(".lg-toolbar").append(
'<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),
this.prevScrollTop=a(window).scrollTop()},b.prototype.setTop=function(){if("100%"!==this.s.height){
var b=a(window).height(),c=(b-parseInt(this.s.height,10))/2,d=this.$outer.find(".lg");b>=parseInt(
this.s.height,10)?d.css("top",c+"px"):d.css("top","0px")}},b.prototype.doCss=function(){
return!!function(){var a=["transition","MozTransition","WebkitTransition","OTransition",
"msTransition","KhtmlTransition"],b=document.documentElement,c=0;for(c=0;c<a.length;c++)if(
a[c]in b.style)return!0}()},b.prototype.isVideo=function(a,b){var c;if(
c=this.s.dynamic?this.s.dynamicEl[b].html:this.$items.eq(b).attr("data-html"),!a)return c?{html5:!0
}:(console.error("lightGallery :- data-src is not pvovided on slide item "+(b+1
)+". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"
),!1);var d=a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i)
,e=a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),f=a.match(
/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),g=a.match(
/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return d?{youtube:d}:e?{
vimeo:e}:f?{dailymotion:f}:g?{vk:g}:void 0},b.prototype.counter=function(){this.s.counter&&a(
this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(
this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},
b.prototype.addHtml=function(b){var c,d,e=null;if(
this.s.dynamic?this.s.dynamicEl[b].subHtmlUrl?c=this.s.dynamicEl[b].subHtmlUrl:e=this.s.dynamicEl[b].subHtml:(
d=this.$items.eq(b)).attr("data-sub-html-url")?c=d.attr("data-sub-html-url"):(e=d.attr(
"data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!e&&(e=d.attr("title")||d.find("img").first(
).attr("alt"))),!c)if(null!=e){var f=e.substring(0,1);"."!==f&&"#"!==f||(
e=this.s.subHtmlSelectorRelative&&!this.s.dynamic?d.find(e).html():a(e).html())}else e=""
;".lg-sub-html"===this.s.appendSubHtmlTo?c?this.$outer.find(this.s.appendSubHtmlTo).load(c
):this.$outer.find(this.s.appendSubHtmlTo).html(e):c?this.$slide.eq(b).load(c):this.$slide.eq(b
).append(e),null!=e&&(""===e?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"
):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),this.$el.trigger(
"onAfterAppendSubHtml.lg",[b])},b.prototype.preload=function(a){var b=1,c=1;for(
b=1;b<=this.s.preload&&!(b>=this.$items.length-a);b++)this.loadContent(a+b,!1,0);for(
c=1;c<=this.s.preload&&!(a-c<0);c++)this.loadContent(a-c,!1,0)},b.prototype.loadContent=function(b,c
,d){var e,f,g,h,i,j,k=this,l=!1,m=function(b){for(var c=[],d=[],e=0;e<b.length;e++){
var g=b[e].split(" ");""===g[0]&&g.splice(0,1),d.push(g[0]),c.push(g[1])}for(var h=a(window).width()
,i=0;i<c.length;i++)if(parseInt(c[i],10)>h){f=d[i];break}};if(k.s.dynamic){if(
k.s.dynamicEl[b].poster&&(l=!0,g=k.s.dynamicEl[b].poster),j=k.s.dynamicEl[b].html,
f=k.s.dynamicEl[b].src,k.s.dynamicEl[b].responsive)m(k.s.dynamicEl[b].responsive.split(","))
;h=k.s.dynamicEl[b].srcset,i=k.s.dynamicEl[b].sizes}else{if(k.$items.eq(b).attr("data-poster")&&(
l=!0,g=k.$items.eq(b).attr("data-poster")),j=k.$items.eq(b).attr("data-html"),f=k.$items.eq(b).attr(
"href")||k.$items.eq(b).attr("data-src"),k.$items.eq(b).attr("data-responsive"))m(k.$items.eq(b
).attr("data-responsive").split(","));h=k.$items.eq(b).attr("data-srcset"),i=k.$items.eq(b).attr(
"data-sizes")}var p=!1;k.s.dynamic?k.s.dynamicEl[b].iframe&&(p=!0):"true"===k.$items.eq(b).attr(
"data-iframe")&&(p=!0);var q=k.isVideo(f,b);if(!k.$slide.eq(b).hasClass("lg-loaded")){if(p
)k.$slide.eq(b).prepend(
'<div class="lg-video-cont lg-has-iframe" style="max-width:'+k.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+f+'"  allowfullscreen="true"></iframe></div></div>'
);else if(l){var r="";r=q&&q.youtube?"lg-has-youtube":q&&q.vimeo?"lg-has-vimeo":"lg-has-html5",
k.$slide.eq(b).prepend(
'<div class="lg-video-cont '+r+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+g+'" /></div></div>'
)}else q?(k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),
k.$el.trigger("hasVideo.lg",[b,f,j])):k.$slide.eq(b).prepend(
'<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+f+'" /></div>');if(k.$el.trigger(
"onAferAppendSlide.lg",[b]),e=k.$slide.eq(b).find(".lg-object"),i&&e.attr("sizes",i),h){e.attr(
"srcset",h);try{picturefill({elements:[e[0]]})}catch(a){console.warn(
"lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document."
)}}".lg-sub-html"!==this.s.appendSubHtmlTo&&k.addHtml(b),k.$slide.eq(b).addClass("lg-loaded")}
k.$slide.eq(b).find(".lg-object").on("load.lg error.lg",function(){var c=0;d&&!a("body").hasClass(
"lg-from-hash")&&(c=d),setTimeout(function(){k.$slide.eq(b).addClass("lg-complete"),k.$el.trigger(
"onSlideItemLoad.lg",[b,d||0])},c)}),q&&q.html5&&!l&&k.$slide.eq(b).addClass("lg-complete"),
!0===c&&(k.$slide.eq(b).hasClass("lg-complete")?k.preload(b):k.$slide.eq(b).find(".lg-object").on(
"load.lg error.lg",function(){k.preload(b)}))},b.prototype.slide=function(b,c,d,e){
var f=this.$outer.find(".lg-current").index(),g=this;if(!g.lGalleryOn||f!==b){
var h=this.$slide.length,i=g.lGalleryOn?this.s.speed:0;if(!g.lgBusy){var j,k,l;if(this.s.download)(
j=g.s.dynamic?!1!==g.s.dynamicEl[b].downloadUrl&&(g.s.dynamicEl[b].downloadUrl||g.s.dynamicEl[b].src
):"false"!==g.$items.eq(b).attr("data-download-url")&&(g.$items.eq(b).attr("data-download-url"
)||g.$items.eq(b).attr("href")||g.$items.eq(b).attr("data-src")))?(a("#lg-download").attr("href",j),
g.$outer.removeClass("lg-hide-download")):g.$outer.addClass("lg-hide-download");if(this.$el.trigger(
"onBeforeSlide.lg",[f,b,c,d]),g.lgBusy=!0,clearTimeout(g.hideBartimeout),
".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){g.addHtml(b)},i),this.arrowDisable(b)
,e||(b<f?e="prev":f<b&&(e="next")),c)this.$slide.removeClass(
"lg-prev-slide lg-current lg-next-slide"),2<h?(k=b-1,l=b+1,0===b&&f===h-1?(l=0,k=h-1
):b===h-1&&0===f&&(l=0,k=h-1)):(k=0,l=1),"prev"===e?g.$slide.eq(l).addClass("lg-next-slide"
):g.$slide.eq(k).addClass("lg-prev-slide"),g.$slide.eq(b).addClass("lg-current"
);else g.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),
"prev"===e?(this.$slide.eq(b).addClass("lg-prev-slide"),this.$slide.eq(f).addClass("lg-next-slide")
):(this.$slide.eq(b).addClass("lg-next-slide"),this.$slide.eq(f).addClass("lg-prev-slide")),
setTimeout(function(){g.$slide.removeClass("lg-current"),g.$slide.eq(b).addClass("lg-current"),
g.$outer.removeClass("lg-no-trans")},50);g.lGalleryOn?(setTimeout(function(){g.loadContent(b,!0,0)},
this.s.speed+50),setTimeout(function(){g.lgBusy=!1,g.$el.trigger("onAfterSlide.lg",[f,b,c,d])},
this.s.speed)):(g.loadContent(b,!0,g.s.backdropDuration),g.lgBusy=!1,g.$el.trigger("onAfterSlide.lg"
,[f,b,c,d])),g.lGalleryOn=!0,this.s.counter&&a("#lg-counter-current").text(b+1)}}},
b.prototype.goToNextSlide=function(a){var b=this,c=b.s.loop;a&&b.$slide.length<3&&(c=!1),b.lgBusy||(
b.index+1<b.$slide.length?(b.index++,b.$el.trigger("onBeforeNextSlide.lg",[b.index]),b.slide(b.index
,a,!1,"next")):c?(b.index=0,b.$el.trigger("onBeforeNextSlide.lg",[b.index]),b.slide(b.index,a,!1,
"next")):b.s.slideEndAnimatoin&&!a&&(b.$outer.addClass("lg-right-end"),setTimeout(function(){
b.$outer.removeClass("lg-right-end")},400)))},b.prototype.goToPrevSlide=function(a){var b=this,
c=b.s.loop;a&&b.$slide.length<3&&(c=!1),b.lgBusy||(0<b.index?(b.index--,b.$el.trigger(
"onBeforePrevSlide.lg",[b.index,a]),b.slide(b.index,a,!1,"prev")):c?(b.index=b.$items.length-1,
b.$el.trigger("onBeforePrevSlide.lg",[b.index,a]),b.slide(b.index,a,!1,"prev")
):b.s.slideEndAnimatoin&&!a&&(b.$outer.addClass("lg-left-end"),setTimeout(function(){
b.$outer.removeClass("lg-left-end")},400)))},b.prototype.keyPress=function(){var b=this
;1<this.$items.length&&a(window).on("keyup.lg",function(a){1<b.$items.length&&(37===a.keyCode&&(
a.preventDefault(),b.goToPrevSlide()),39===a.keyCode&&(a.preventDefault(),b.goToNextSlide()))}),a(
window).on("keydown.lg",function(a){!0===b.s.escKey&&27===a.keyCode&&(a.preventDefault(),
b.$outer.hasClass("lg-thumb-open")?b.$outer.removeClass("lg-thumb-open"):b.destroy())})},
b.prototype.arrow=function(){var a=this;this.$outer.find(".lg-prev").on("click.lg",function(){
a.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){a.goToNextSlide()})},
b.prototype.arrowDisable=function(a){!this.s.loop&&this.s.hideControlOnEnd&&(
a+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"
):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),
0<a?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(
".lg-prev").attr("disabled","disabled").addClass("disabled"))},b.prototype.setTranslate=function(a,b
,c){this.s.useLeft?a.css("left",b):a.css({transform:"translate3d("+b+"px, "+c+"px, 0px)"})},
b.prototype.touchMove=function(b,c){var d=c-b;15<Math.abs(d)&&(this.$outer.addClass("lg-dragging"),
this.setTranslate(this.$slide.eq(this.index),d,0),this.setTranslate(a(".lg-prev-slide"),
-this.$slide.eq(this.index).width()+d,0),this.setTranslate(a(".lg-next-slide"),this.$slide.eq(
this.index).width()+d,0))},b.prototype.touchEnd=function(a){var b=this
;"lg-slide"!==b.s.mode&&b.$outer.addClass("lg-slide"),this.$slide.not(
".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),setTimeout(function(){
b.$outer.removeClass("lg-dragging"),a<0&&Math.abs(a)>b.s.swipeThreshold?b.goToNextSlide(!0
):0<a&&Math.abs(a)>b.s.swipeThreshold?b.goToPrevSlide(!0):Math.abs(a)<5&&b.$el.trigger(
"onSlideClick.lg"),b.$slide.removeAttr("style")}),setTimeout(function(){b.$outer.hasClass(
"lg-dragging")||"lg-slide"===b.s.mode||b.$outer.removeClass("lg-slide")},b.s.speed+100)},
b.prototype.enableSwipe=function(){var a=this,b=0,c=0,d=!1;a.s.enableSwipe&&a.doCss()&&(a.$slide.on(
"touchstart.lg",function(c){a.$outer.hasClass("lg-zoomed")||a.lgBusy||(c.preventDefault(),
a.manageSwipeClass(),b=c.originalEvent.targetTouches[0].pageX)}),a.$slide.on("touchmove.lg",
function(e){a.$outer.hasClass("lg-zoomed")||(e.preventDefault(),
c=e.originalEvent.targetTouches[0].pageX,a.touchMove(b,c),d=!0)}),a.$slide.on("touchend.lg",
function(){a.$outer.hasClass("lg-zoomed")||(d?(d=!1,a.touchEnd(c-b)):a.$el.trigger("onSlideClick.lg"
))}))},b.prototype.enableDrag=function(){var b=this,c=0,d=0,e=!1,f=!1;b.s.enableDrag&&b.doCss()&&(
b.$slide.on("mousedown.lg",function(d){b.$outer.hasClass("lg-zoomed")||(a(d.target).hasClass(
"lg-object")||a(d.target).hasClass("lg-video-play"))&&(d.preventDefault(),b.lgBusy||(
b.manageSwipeClass(),c=d.pageX,e=!0,b.$outer.scrollLeft+=1,b.$outer.scrollLeft-=1,
b.$outer.removeClass("lg-grab").addClass("lg-grabbing"),b.$el.trigger("onDragstart.lg")))}),a(window
).on("mousemove.lg",function(a){e&&(f=!0,d=a.pageX,b.touchMove(c,d),b.$el.trigger("onDragmove.lg"))}
),a(window).on("mouseup.lg",function(g){f?(f=!1,b.touchEnd(d-c),b.$el.trigger("onDragend.lg")):(a(
g.target).hasClass("lg-object")||a(g.target).hasClass("lg-video-play"))&&b.$el.trigger(
"onSlideClick.lg"),e&&(e=!1,b.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},
b.prototype.manageSwipeClass=function(){var a=this.index+1,b=this.index-1
;this.s.loop&&2<this.$slide.length&&(
0===this.index?b=this.$slide.length-1:this.index===this.$slide.length-1&&(a=0)),
this.$slide.removeClass("lg-next-slide lg-prev-slide"),-1<b&&this.$slide.eq(b).addClass(
"lg-prev-slide"),this.$slide.eq(a).addClass("lg-next-slide")},b.prototype.mousewheel=function(){
var a=this;a.$outer.on("mousewheel.lg",function(b){b.deltaY&&(0<b.deltaY?a.goToPrevSlide(
):a.goToNextSlide(),b.preventDefault())})},b.prototype.closeGallery=function(){var b=this,c=!1
;this.$outer.find(".lg-close").on("click.lg",function(){b.destroy()}),b.s.closable&&(b.$outer.on(
"mousedown.lg",function(b){c=!!(a(b.target).is(".lg-outer")||a(b.target).is(".lg-item ")||a(b.target
).is(".lg-img-wrap"))}),b.$outer.on("mouseup.lg",function(d){(a(d.target).is(".lg-outer")||a(
d.target).is(".lg-item ")||a(d.target).is(".lg-img-wrap")&&c)&&(b.$outer.hasClass("lg-dragging"
)||b.destroy())}))},b.prototype.destroy=function(b){var c=this;b||(c.$el.trigger("onBeforeClose.lg")
,a(window).scrollTop(c.prevScrollTop)),b&&(c.s.dynamic||this.$items.off("click.lg click.lgcustom"),
a.removeData(c.el,"lightGallery")),this.$el.off(".lg.tm"),a.each(a.fn.lightGallery.modules,function(
a){c.modules[a]&&c.modules[a].destroy()}),this.lGalleryOn=!1,clearTimeout(c.hideBartimeout),
this.hideBartimeout=!1,a(window).off(".lg"),a("body").removeClass("lg-on lg-from-hash"),
c.$outer&&c.$outer.removeClass("lg-visible"),a(".lg-backdrop").removeClass("in"),setTimeout(
function(){c.$outer&&c.$outer.remove(),a(".lg-backdrop").remove(),b||c.$el.trigger("onCloseAfter.lg"
)},c.s.backdropDuration+50)},a.fn.lightGallery=function(c){return this.each(function(){if(a.data(
this,"lightGallery"))try{a(this).data("lightGallery").init()}catch(a){console.error(
"lightGallery has not initiated properly")}else a.data(this,"lightGallery",new b(this,c))})},
a.fn.lightGallery.modules={}}()}),function(r){r.fn.qrcode=function(h){function u(a){this.mode=s,
this.data=a}function o(a,c){this.typeNumber=a,this.errorCorrectLevel=c,this.modules=null,
this.moduleCount=0,this.dataCache=null,this.dataList=[]}function q(a,c){if(null==a.length
)throw Error(a.length+"/"+c);for(var d=0;d<a.length&&0==a[d];)d++;this.num=Array(a.length-d+c);for(
var b=0;b<a.length-d;b++)this.num[b]=a[b+d]}function p(a,c){this.totalCount=a,this.dataCount=c}
function t(){this.buffer=[],this.length=0}var s;u.prototype={getLength:function(){
return this.data.length},write:function(a){for(var c=0;c<this.data.length;c++)a.put(
this.data.charCodeAt(c),8)}},o.prototype={addData:function(a){this.dataList.push(new u(a)),
this.dataCache=null},isDark:function(a,c){if(a<0||this.moduleCount<=a||c<0||this.moduleCount<=c
)throw Error(a+","+c);return this.modules[a][c]},getModuleCount:function(){return this.moduleCount},
make:function(){if(this.typeNumber<1){var a=1;for(a=1;a<40;a++){for(var c=p.getRSBlocks(a,
this.errorCorrectLevel),d=new t,b=0,e=0;e<c.length;e++)b+=c[e].dataCount;for(
e=0;e<this.dataList.length;e++)c=this.dataList[e],d.put(c.mode,4),d.put(c.getLength(),
j.getLengthInBits(c.mode,a)),c.write(d);if(d.getLengthInBits()<=8*b)break}this.typeNumber=a}
this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){
this.moduleCount=4*this.typeNumber+17,this.modules=Array(this.moduleCount);for(
var d=0;d<this.moduleCount;d++){this.modules[d]=Array(this.moduleCount);for(
var b=0;b<this.moduleCount;b++)this.modules[d][b]=null}this.setupPositionProbePattern(0,0),
this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,
this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(a
,c),7<=this.typeNumber&&this.setupTypeNumber(a),null==this.dataCache&&(this.dataCache=o.createData(
this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,c)},
setupPositionProbePattern:function(a,c){for(var d=-1;d<=7;d++)if(!(a+d<=-1||this.moduleCount<=a+d)
)for(var b=-1;b<=7;b++)c+b<=-1||this.moduleCount<=c+b||(this.modules[a+d][c+b]=0<=d&&d<=6&&(
0==b||6==b)||0<=b&&b<=6&&(0==d||6==d)||2<=d&&d<=4&&2<=b&&b<=4)},getBestMaskPattern:function(){for(
var a=0,c=0,d=0;d<8;d++){this.makeImpl(!0,d);var b=j.getLostPoint(this);(0==d||b<a)&&(a=b,c=d)}
return c},createMovieClip:function(a,c,d){for(a=a.createEmptyMovieClip(c,d),this.make(),
c=0;c<this.modules.length;c++){d=1*c;for(var b=0;b<this.modules[c].length;b++){var e=1*b
;this.modules[c][b]&&(a.beginFill(0,100),a.moveTo(e,d),a.lineTo(e+1,d),a.lineTo(e+1,d+1),a.lineTo(e,
d+1),a.endFill())}}return a},setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++
)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(a=8;a<this.moduleCount-8;a++
)null==this.modules[6][a]&&(this.modules[6][a]=0==a%2)},setupPositionAdjustPattern:function(){for(
var a=j.getPatternPosition(this.typeNumber),c=0;c<a.length;c++)for(var d=0;d<a.length;d++){
var b=a[c],e=a[d];if(null==this.modules[b][e])for(var f=-2;f<=2;f++)for(var i=-2;i<=2;i++
)this.modules[b+f][e+i]=-2==f||2==f||-2==i||2==i||0==f&&0==i}},setupTypeNumber:function(a){for(
var c=j.getBCHTypeNumber(this.typeNumber),d=0;d<18;d++){var b=!a&&1==(c>>d&1)
;this.modules[Math.floor(d/3)][d%3+this.moduleCount-8-3]=b}for(d=0;d<18;d++)b=!a&&1==(c>>d&1),
this.modules[d%3+this.moduleCount-8-3][Math.floor(d/3)]=b},setupTypeInfo:function(a,c){for(
var d=j.getBCHTypeInfo(this.errorCorrectLevel<<3|c),b=0;b<15;b++){var e=!a&&1==(d>>b&1)
;b<6?this.modules[b][8]=e:b<8?this.modules[b+1][8]=e:this.modules[this.moduleCount-15+b][8]=e}for(
b=0;b<15;b++)e=!a&&1==(d>>b&1),
b<8?this.modules[8][this.moduleCount-b-1]=e:b<9?this.modules[8][15-b-1+1]=e:this.modules[8][15-b-1]=e
;this.modules[this.moduleCount-8][8]=!a},mapData:function(a,c){for(var d=-1,b=this.moduleCount-1,e=7
,f=0,i=this.moduleCount-1;0<i;i-=2)for(6==i&&i--;;){for(var g=0;g<2;g++)if(
null==this.modules[b][i-g]){var n=!1;f<a.length&&(n=1==(a[f]>>>e&1)),j.getMask(c,b,i-g)&&(n=!n),
this.modules[b][i-g]=n,-1==--e&&(f++,e=7)}if((b+=d)<0||this.moduleCount<=b){b-=d,d=-d;break}}}},
o.PAD0=236,o.PAD1=17,o.createData=function(a,c,d){c=p.getRSBlocks(a,c);for(var b=new t,
e=0;e<d.length;e++){var f=d[e];b.put(f.mode,4),b.put(f.getLength(),j.getLengthInBits(f.mode,a)),
f.write(b)}for(e=a=0;e<c.length;e++)a+=c[e].dataCount;if(b.getLengthInBits()>8*a)throw Error(
"code length overflow. ("+b.getLengthInBits()+">"+8*a+")");for(b.getLengthInBits()+4<=8*a&&b.put(0,4
);0!=b.getLengthInBits()%8;)b.putBit(!1);for(;!(b.getLengthInBits()>=8*a)&&(b.put(o.PAD0,8),!(
b.getLengthInBits()>=8*a));)b.put(o.PAD1,8);return o.createBytes(b,c)},o.createBytes=function(a,c){
for(var d=0,b=0,e=0,f=Array(c.length),i=Array(c.length),g=0;g<c.length;g++){var n=c[g].dataCount,
h=c[g].totalCount-n;b=Math.max(b,n),e=Math.max(e,h);f[g]=Array(n);for(var k=0;k<f[g].length;k++
)f[g][k]=255&a.buffer[k+d];for(d+=n,k=j.getErrorCorrectPolynomial(h),n=new q(f[g],k.getLength()-1
).mod(k),i[g]=Array(k.getLength()-1),k=0;k<i[g].length;k++)h=k+n.getLength()-i[g].length,
i[g][k]=0<=h?n.get(h):0}for(k=g=0;k<c.length;k++)g+=c[k].totalCount;for(d=Array(g),k=n=0;k<b;k++
)for(g=0;g<c.length;g++)k<f[g].length&&(d[n++]=f[g][k]);for(k=0;k<e;k++)for(g=0;g<c.length;g++
)k<i[g].length&&(d[n++]=i[g][k]);return d},s=4;for(var j={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[
6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,
66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6
,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[
6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,
138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,
28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],
G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var c=a<<10;0<=j.getBCHDigit(c
)-j.getBCHDigit(j.G15);)c^=j.G15<<j.getBCHDigit(c)-j.getBCHDigit(j.G15);return(a<<10|c)^j.G15_MASK},
getBCHTypeNumber:function(a){for(var c=a<<12;0<=j.getBCHDigit(c)-j.getBCHDigit(j.G18);
)c^=j.G18<<j.getBCHDigit(c)-j.getBCHDigit(j.G18);return a<<12|c},getBCHDigit:function(a){for(
var c=0;0!=a;)c++,a>>>=1;return c},getPatternPosition:function(a){
return j.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,c,d){switch(a){case 0:return 0==(c+d)%2
;case 1:return 0==c%2;case 2:return 0==d%3;case 3:return 0==(c+d)%3;case 4:return 0==(Math.floor(c/2
)+Math.floor(d/3))%2;case 5:return 0==c*d%2+c*d%3;case 6:return 0==(c*d%2+c*d%3)%2;case 7:
return 0==(c*d%3+(c+d)%2)%2;default:throw Error("bad maskPattern:"+a)}},
getErrorCorrectPolynomial:function(a){for(var c=new q([1],0),d=0;d<a;d++)c=c.multiply(new q([1,
l.gexp(d)],0));return c},getLengthInBits:function(a,c){if(1<=c&&c<10)switch(a){case 1:return 10
;case 2:return 9;case s:case 8:return 8;default:throw Error("mode:"+a)}else if(c<27)switch(a){
case 1:return 12;case 2:return 11;case s:return 16;case 8:return 10;default:throw Error("mode:"+a)
}else{if(!(c<41))throw Error("type:"+c);switch(a){case 1:return 14;case 2:return 13;case s:return 16
;case 8:return 12;default:throw Error("mode:"+a)}}},getLostPoint:function(a){for(
var c=a.getModuleCount(),d=0,b=0;b<c;b++)for(var e=0;e<c;e++){for(var f=0,i=a.isDark(b,e),
g=-1;g<=1;g++)if(!(b+g<0||c<=b+g))for(var h=-1;h<=1;h++)e+h<0||c<=e+h||0==g&&0==h||i==a.isDark(b+g,
e+h)&&f++;5<f&&(d+=3+f-5)}for(b=0;b<c-1;b++)for(e=0;e<c-1;e++)f=0,a.isDark(b,e)&&f++,a.isDark(b+1,e
)&&f++,a.isDark(b,e+1)&&f++,a.isDark(b+1,e+1)&&f++,(0==f||4==f)&&(d+=3);for(b=0;b<c;b++)for(
e=0;e<c-6;e++)a.isDark(b,e)&&!a.isDark(b,e+1)&&a.isDark(b,e+2)&&a.isDark(b,e+3)&&a.isDark(b,e+4
)&&!a.isDark(b,e+5)&&a.isDark(b,e+6)&&(d+=40);for(e=0;e<c;e++)for(b=0;b<c-6;b++)a.isDark(b,e
)&&!a.isDark(b+1,e)&&a.isDark(b+2,e)&&a.isDark(b+3,e)&&a.isDark(b+4,e)&&!a.isDark(b+5,e)&&a.isDark(
b+6,e)&&(d+=40);for(e=f=0;e<c;e++)for(b=0;b<c;b++)a.isDark(b,e)&&f++;return d+10*(a=Math.abs(
100*f/c/c-50)/5)}},l={glog:function(a){if(a<1)throw Error("glog("+a+")");return l.LOG_TABLE[a]},
gexp:function(a){for(;a<0;)a+=255;for(;256<=a;)a-=255;return l.EXP_TABLE[a]},EXP_TABLE:Array(256),
LOG_TABLE:Array(256)},m=0;m<8;m++)l.EXP_TABLE[m]=1<<m;for(m=8;m<256;m++
)l.EXP_TABLE[m]=l.EXP_TABLE[m-4]^l.EXP_TABLE[m-5]^l.EXP_TABLE[m-6]^l.EXP_TABLE[m-8];for(
m=0;m<255;m++)l.LOG_TABLE[l.EXP_TABLE[m]]=m;return q.prototype={get:function(a){return this.num[a]},
getLength:function(){return this.num.length},multiply:function(a){for(var c=Array(this.getLength(
)+a.getLength()-1),d=0;d<this.getLength();d++)for(var b=0;b<a.getLength();b++)c[d+b]^=l.gexp(l.glog(
this.get(d))+l.glog(a.get(b)));return new q(c,0)},mod:function(a){if(this.getLength()-a.getLength(
)<0)return this;for(var c=l.glog(this.get(0))-l.glog(a.get(0)),d=Array(this.getLength()),
b=0;b<this.getLength();b++)d[b]=this.get(b);for(b=0;b<a.getLength();b++)d[b]^=l.gexp(l.glog(a.get(b)
)+c);return new q(d,0).mod(a)}},p.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[
1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],
[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,
43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18
,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,
68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50
,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43
,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,
40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,
55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135
,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69
,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,
21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15
,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,
112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,
55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,
47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2
,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3
,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31
,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26
,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,
115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,
75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,
19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,
16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,
151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123]
,[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,
47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,
55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,
61,46,16]],p.getRSBlocks=function(a,c){var d=p.getRsBlockTable(a,c);if(null==d)throw Error(
"bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+c);for(var b=d.length/3,e=[],f=0;f<b;f++)for(
var h=d[3*f+0],g=d[3*f+1],j=d[3*f+2],l=0;l<h;l++)e.push(new p(g,j));return e},
p.getRsBlockTable=function(a,c){switch(c){case 1:return p.RS_BLOCK_TABLE[4*(a-1)+0];case 0:
return p.RS_BLOCK_TABLE[4*(a-1)+1];case 3:return p.RS_BLOCK_TABLE[4*(a-1)+2];case 2:
return p.RS_BLOCK_TABLE[4*(a-1)+3]}},t.prototype={get:function(a){return 1==(this.buffer[Math.floor(
a/8)]>>>7-a%8&1)},put:function(a,c){for(var d=0;d<c;d++)this.putBit(1==(a>>>c-d-1&1))},
getLengthInBits:function(){return this.length},putBit:function(a){var c=Math.floor(this.length/8)
;this.buffer.length<=c&&this.buffer.push(0),a&&(this.buffer[c]|=128>>>this.length%8),this.length++}}
,"string"==typeof h&&(h={text:h}),h=r.extend({},{render:"canvas",width:256,height:256,typeNumber:-1,
correctLevel:2,background:"#ffffff",foreground:"#000000"},h),this.each(function(){var a;if(
"canvas"==h.render){(a=new o(h.typeNumber,h.correctLevel)).addData(h.text),a.make()
;var c=document.createElement("canvas");c.width=h.width,c.height=h.height;for(var d=c.getContext(
"2d"),b=h.width/a.getModuleCount(),e=h.height/a.getModuleCount(),f=0;f<a.getModuleCount();f++)for(
var i=0;i<a.getModuleCount();i++){d.fillStyle=a.isDark(f,i)?h.foreground:h.background
;var g=Math.ceil((i+1)*b)-Math.floor(i*b),j=Math.ceil((f+1)*b)-Math.floor(f*b);d.fillRect(
Math.round(i*b),Math.round(f*e),g,j)}}else for((a=new o(h.typeNumber,h.correctLevel)).addData(h.text
),a.make(),c=r("<table></table>").css("width",h.width+"px").css("height",h.height+"px").css("border"
,"0px").css("border-collapse","collapse").css("background-color",h.background),
d=h.width/a.getModuleCount(),b=h.height/a.getModuleCount(),e=0;e<a.getModuleCount();e++)for(f=r(
"<tr></tr>").css("height",b+"px").appendTo(c),i=0;i<a.getModuleCount();i++)r("<td></td>").css(
"width",d+"px").css("background-color",a.isDark(e,i)?h.foreground:h.background).appendTo(f);a=c,
jQuery(a).appendTo(this)})}}(jQuery),function(e,t){
"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(
):"function"==typeof define&&define.amd?define(t):e.Vue=t()}(this,function(){"use strict"
;function e(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function t(e
){var t=parseFloat(e,10);return t||0===t?t:e}function n(e,t){for(var n=Object.create(null),
r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]
}:function(e){return n[e]}}function r(e,t){if(e.length){var n=e.indexOf(t);if(-1<n)return e.splice(n
,1)}}function i(e,t){return Wr.call(e,t)}function a(e){return"string"==typeof e||"number"==typeof e}
function o(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}function s(e,t
){function n(n){var r=arguments.length;return r?1<r?e.apply(t,arguments):e.call(t,n):e.call(t)}
return n._length=e.length,n}function c(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;
)r[n]=e[n+t];return r}function l(e,t){for(var n in t)e[n]=t[n];return e}function u(e){
return null!==e&&"object"==typeof e}function f(e){return ei.call(e)===ti}function d(e){for(var t={},
n=0;n<e.length;n++)e[n]&&l(t,e[n]);return t}function p(){}function v(e){return e.reduce(function(e,t
){return e.concat(t.staticKeys||[])},[]).join(",")}function h(e,t){return e==t||!(!u(e)||!u(t)
)&&JSON.stringify(e)===JSON.stringify(t)}function m(e,t){for(var n=0;n<e.length;n++)if(h(e[n],t)
)return n;return-1}function g(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function y(e,t,n,r
){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function _(e){if(
!ai.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return
;e=e[t[n]]}return e}}}function b(e){return/native code/.test(e.toString())}function $(e){
bi.target&&$i.push(bi.target),bi.target=e}function w(){bi.target=$i.pop()}function x(e,t){
e.__proto__=t}function C(e,t,n){for(var r=0,i=n.length;r<i;r++){var a=n[r];y(e,a,t[a])}}function k(e
){var t;if(u(e))return i(e,"__ob__")&&e.__ob__ instanceof Ai?t=e.__ob__:ki.shouldConvert&&!vi()&&(
Array.isArray(e)||f(e))&&Object.isExtensible(e)&&!e._isVue&&(t=new Ai(e)),t}function A(e,t,n){
var i=new bi,a=Object.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.configurable){var o=a&&a.get,
s=a&&a.set,c=k(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){
var t=o?o.call(e):n;return bi.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(t)&&T(t)),t},
set:function(t){var r=o?o.call(e):n;t===r||t!=t&&r!=r||(s?s.call(e,t):n=t,c=k(t),i.notify())}})}}
function O(e,t,n){if(Array.isArray(e))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(!i(e
,t)){var r=e.__ob__;return e._isVue||r&&r.vmCount?void 0:r?(A(r.value,t,n),r.dep.notify(),n):void(
e[t]=n)}e[t]=n}function S(e,t){var n=e.__ob__;e._isVue||n&&n.vmCount||i(e,t)&&(delete e[t],
n&&n.dep.notify())}function T(e){for(var t=void 0,n=0,r=e.length;n<r;n++)(t=e[n]
)&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&T(t)}function E(e,t){if(!t)return e;for(var n,r
,a,o=Object.keys(t),s=0;s<o.length;s++)r=e[n=o[s]],a=t[n],i(e,n)?f(r)&&f(a)&&E(r,a):O(e,n,a)
;return e}function j(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function N(e,t){
var n=Object.create(e||null);return t?l(n,t):n}function L(e){var t=e.props;if(t){var n,r,a={};if(
Array.isArray(t))for(n=t.length;n--;)"string"==typeof(r=t[n])&&(a[Gr(r)]={type:null});else if(f(t)
)for(var o in t)r=t[o],a[Gr(o)]=f(r)?r:{type:r};e.props=a}}function D(e){var t=e.directives;if(t
)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}function M(e,t,n){
function r(r){var i=Oi[r]||Si;u[r]=i(e[r],t[r],n,r)}L(t),D(t);var a=t["extends"];if(a&&(e=M(e,
"function"==typeof a?a.options:a,n)),t.mixins)for(var o=0,s=t.mixins.length;o<s;o++){
var c=t.mixins[o];c.prototype instanceof Ie&&(c=c.options),e=M(e,c,n)}var l,u={};for(l in e)r(l)
;for(l in t)i(e,l)||r(l);return u}function P(e,t,n){if("string"==typeof n){var a=e[t];if(i(a,n)
)return a[n];var o=Gr(n);if(i(a,o))return a[o];var s=Yr(o);return i(a,s)?a[s]:a[n]||a[o]||a[s]}}
function R(e,t,n,r){var a=t[e],o=!i(n,e),s=n[e];if(U(a.type)&&(o&&!i(a,"default"
)?s=!1:""!==s&&s!==Xr(e)||(s=!0)),void 0===s){s=I(r,a,e);var c=ki.shouldConvert;ki.shouldConvert=!0,
k(s),ki.shouldConvert=c}return s}function I(e,t,n){if(i(t,"default")){var r=t["default"];return u(r)
,
e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e[n]?e[n]:"function"==typeof r&&t.type!==Function?r.call(
e):r}}function F(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t&&t[1]}function U(e){
if(!Array.isArray(e))return"Boolean"===F(e);for(var t=0,n=e.length;t<n;t++)if("Boolean"===F(e[t])
)return!0;return!1}function H(){Ei.length=0,Ni=Li=!(ji={})}function B(){for(Li=!0,Ei.sort(function(e
,t){return e.id-t.id}),Di=0;Di<Ei.length;Di++){var e=Ei[Di],t=e.id;ji[t]=null,e.run()}
hi&&ii.devtools&&hi.emit("flush"),H()}function V(e){var t=e.id;if(null==ji[t]){if(ji[t]=!0,Li){for(
var n=Ei.length-1;0<=n&&Ei[n].id>e.id;)n--;Ei.splice(Math.max(n,Di)+1,0,e)}else Ei.push(e);Ni||(
Ni=!0,mi(B))}}function z(e){Ri.clear(),J(e,Ri)}function J(e,t){var n,r,i=Array.isArray(e);if((i||u(e
))&&Object.isExtensible(e)){if(e.__ob__){var a=e.__ob__.dep.id;if(t.has(a))return;t.add(a)}if(i)for(
n=e.length;n--;)J(e[n],t);else for(n=(r=Object.keys(e)).length;n--;)J(e[r[n]],t)}}function K(e){
e._watchers=[],q(e),Y(e),W(e),Z(e),Q(e)}function q(e){var t=e.$options.props;if(t){
var n=e.$options.propsData||{},r=e.$options._propKeys=Object.keys(t),i=!e.$parent;ki.shouldConvert=i
;for(var a=function(i){var a=r[i];A(e,a,R(a,t,n,e))},o=0;o<r.length;o++)a(o);ki.shouldConvert=!0}}
function W(e){var t=e.$options.data;f(t=e._data="function"==typeof t?t.call(e):t||{})||(t={});for(
var n=Object.keys(t),r=e.$options.props,a=n.length;a--;)r&&i(r,n[a])||te(e,n[a]);k(t),
t.__ob__&&t.__ob__.vmCount++}function Z(e){var t=e.$options.computed;if(t)for(var n in t){var r=t[n]
;"function"==typeof r?(Ii.get=G(r,e),Ii.set=p):(Ii.get=r.get?!1!==r.cache?G(r.get,e):s(r.get,e):p,
Ii.set=r.set?s(r.set,e):p),Object.defineProperty(e,n,Ii)}}function G(e,t){var n=new Pi(t,e,p,{
lazy:!0});return function(){return n.dirty&&n.evaluate(),bi.target&&n.depend(),n.value}}function Y(e
){var t=e.$options.methods;if(t)for(var n in t)e[n]=null==t[n]?p:s(t[n],e)}function Q(e){
var t=e.$options.watch;if(t)for(var n in t){var r=t[n];if(Array.isArray(r))for(
var i=0;i<r.length;i++)X(e,n,r[i]);else X(e,n,r)}}function X(e,t,n){var r;f(n)&&(n=(r=n).handler),
"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function ee(e){var t={get:function(){return this._data}
};Object.defineProperty(e.prototype,"$data",t),e.prototype.$set=O,e.prototype.$delete=S,
e.prototype.$watch=function(e,t,n){var r=this;(n=n||{}).user=!0;var i=new Pi(r,e,t,n)
;return n.immediate&&t.call(r,i.value),function(){i.teardown()}}}function te(e,t){g(t
)||Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},
set:function(n){e._data[t]=n}})}function ne(e){return new Fi(void 0,void 0,void 0,String(e))}
function re(e){var t=new Fi(e.tag,e.data,e.children,e.text,e.elm,e.context,e.componentOptions)
;return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isCloned=!0,t}function ie(e){for(
var t=new Array(e.length),n=0;n<e.length;n++)t[n]=re(e[n]);return t}function ae(e){var t=e.$options,
n=t.parent;if(n&&!t["abstract"]){for(;n.$options["abstract"]&&n.$parent;)n=n.$parent
;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,
e._inactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function oe(e){
e.prototype._mount=function(e,t){var n=this;return n.$el=e,n.$options.render||(n.$options.render=Ui)
,se(n,"beforeMount"),n._watcher=new Pi(n,function(){n._update(n._render(),t)},p),t=!1,
null==n.$vnode&&(n._isMounted=!0,se(n,"mounted")),n},e.prototype._update=function(e,t){var n=this
;n._isMounted&&se(n,"beforeUpdate");var r=n.$el,i=n._vnode,a=Hi;(Hi=n)._vnode=e,n.$el=i?n.__patch__(
i,e):n.__patch__(n.$el,e,t,!1,n.$options._parentElm,n.$options._refElm),Hi=a,r&&(r.__vue__=null),
n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el),
n._isMounted&&se(n,"updated")},e.prototype._updateFromParent=function(e,t,n,r){var i=this,a=!(
!i.$options._renderChildren&&!r);if(i.$options._parentVnode=n,i.$vnode=n,i._vnode&&(
i._vnode.parent=n),i.$options._renderChildren=r,e&&i.$options.props){ki.shouldConvert=!1;for(
var o=i.$options._propKeys||[],s=0;s<o.length;s++){var c=o[s];i[c]=R(c,i.$options.props,e,i)}
ki.shouldConvert=!0,i.$options.propsData=e}if(t){var l=i.$options._parentListeners
;i.$options._parentListeners=t,i._updateListeners(t,l)}a&&(i.$slots=Ne(r,n.context),i.$forceUpdate()
)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},
e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){se(e,"beforeDestroy"),
e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options["abstract"]||r(
t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;
)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,se(e,
"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.__patch__(e._vnode,null)}}}function se(e,t){
var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)n[r].call(e);e.$emit("hook:"+t)}function ce(
e,t,n,r,i){if(e){var a=n.$options._base;if(u(e)&&(e=a.extend(e)),"function"==typeof e){if(!e.cid)if(
e.resolved)e=e.resolved;else if(!(e=he(e,a,function(){n.$forceUpdate()})))return;Re(e);var o=me(
t=t||{},e);if(e.options.functional)return le(e,o,t,n,r);var s=t.on;t.on=t.nativeOn,
e.options["abstract"]&&(t={}),ye(t);var c=e.options.name||i;return new Fi("vue-component-"+e.cid+(
c?"-"+c:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:o,listeners:s,tag:i,children:r})}}}
function le(e,t,n,r,i){var a={},o=e.options.props;if(o)for(var s in o)a[s]=R(s,o,t)
;var c=Object.create(r),l=function(e,t,n,r){return Oe(c,e,t,n,r,!0)},u=e.options.render.call(null,l,
{props:a,data:n,parent:r,children:i,slots:function(){return Ne(i,r)}});return u instanceof Fi&&(
u.functionalContext=r,n.slot&&((u.data||(u.data={})).slot=n.slot)),u}function ue(e,t,n,r){
var i=e.componentOptions,a={_isComponent:!0,parent:t,propsData:i.propsData,_componentTag:i.tag,
_parentVnode:e,_parentListeners:i.listeners,_renderChildren:i.children,_parentElm:n||null,
_refElm:r||null},o=e.data.inlineTemplate;return o&&(a.render=o.render,
a.staticRenderFns=o.staticRenderFns),new i.Ctor(a)}function fe(e,t,n,r){if(
!e.child||e.child._isDestroyed)(e.child=ue(e,Hi,n,r)).$mount(t?e.elm:void 0,t);else if(
e.data.keepAlive){de(e,e)}}function de(e,t){var n=t.componentOptions;(t.child=e.child
)._updateFromParent(n.propsData,n.listeners,t,n.children)}function pe(e){e.child._isMounted||(
e.child._isMounted=!0,se(e.child,"mounted")),e.data.keepAlive&&(e.child._inactive=!1,se(e.child,
"activated"))}function ve(e){e.child._isDestroyed||(e.data.keepAlive?(e.child._inactive=!0,se(
e.child,"deactivated")):e.child.$destroy())}function he(e,t,n){if(!e.requested){e.requested=!0
;var r=e.pendingCallbacks=[n],i=!0,a=function(n){if(u(n)&&(n=t.extend(n)),e.resolved=n,!i)for(
var a=0,o=r.length;a<o;a++)r[a](n)},o=function(){},s=e(a,o)
;return s&&"function"==typeof s.then&&!e.resolved&&s.then(a,o),i=!1,e.resolved}
e.pendingCallbacks.push(n)}function me(e,t){var n=t.options.props;if(n){var r={},i=e.attrs,a=e.props
,o=e.domProps;if(i||a||o)for(var s in n){var c=Xr(s);ge(r,a,s,c,!0)||ge(r,i,s,c)||ge(r,o,s,c)}
return r}}function ge(e,t,n,r,a){if(t){if(i(t,n))return e[n]=t[n],a||delete t[n],!0;if(i(t,r)
)return e[n]=t[r],a||delete t[r],!0}return!1}function ye(e){e.hook||(e.hook={});for(
var t=0;t<Vi.length;t++){var n=Vi[t],r=e.hook[n],i=Bi[n];e.hook[n]=r?_e(i,r):i}}function _e(e,t){
return function(n,r,i,a){e(n,r,i,a),t(n,r,i,a)}}function be(e,t,n,r){r+=t;var i=e.__injected||(
e.__injected={});if(!i[r]){i[r]=!0;var a=e[t];e[t]=a?function(){a.apply(this,arguments),n.apply(this
,arguments)}:n}}function $e(e,t,n,r){var a,o,s,c,l,u,f;for(a in e)if(o=e[a],s=t[a],o)if(s){if(o!==s
)if(Array.isArray(s)){s.length=o.length;for(var d=0;d<s.length;d++)s[d]=o[d];e[a]=s}else s.fn=o,
e[a]=s}else l=(u="!"===(l=(f="~"===a.charAt(0))?a.slice(1):a).charAt(0))?l.slice(1):l,Array.isArray(
o)?n(l,o.invoker=we(o),f,u):(o.invoker||(c=o,(o=e[a]={}).fn=c,o.invoker=xe(o)),n(l,o.invoker,f,u))
;for(a in t)e[a]||r(l=(u="!"===(l=(f="~"===a.charAt(0))?a.slice(1):a).charAt(0))?l.slice(1):l,
t[a].invoker,u)}function we(e){return function(t){for(var n=arguments,r=1===arguments.length,
i=0;i<e.length;i++)r?e[i](t):e[i].apply(null,n)}}function xe(e){return function(t){
1===arguments.length?e.fn(t):e.fn.apply(null,arguments)}}function Ce(e){return a(e)?[ne(e)
]:Array.isArray(e)?ke(e):void 0}function ke(e,t){var n,r,i,o=[];for(n=0;n<e.length;n++)null!=(r=e[n]
)&&"boolean"!=typeof r&&(i=o[o.length-1],Array.isArray(r)?o.push.apply(o,ke(r,(t||"")+"_"+n)):a(r
)?i&&i.text?i.text+=String(r):""!==r&&o.push(ne(r)):r.text&&i&&i.text?o[o.length-1]=ne(i.text+r.text
):(r.tag&&null==r.key&&null!=t&&(r.key="__vlist"+t+"_"+n+"__"),o.push(r)));return o}function Ae(e){
return e&&e.filter(function(e){return e&&e.componentOptions})[0]}function Oe(e,t,n,r,i,o){return(
Array.isArray(n)||a(n))&&(i=r,r=n,n=void 0),o&&(i=!0),Se(e,t,n,r,i)}function Se(e,t,n,r,i){if(
n&&n.__ob__)return Ui();if(!t)return Ui();var a,o,s;(Array.isArray(r)&&"function"==typeof r[0]&&((
n=n||{}).scopedSlots={"default":r[0]},r.length=0),i&&(r=Ce(r)),"string"==typeof t)?(
o=ii.getTagNamespace(t),ii.isReservedTag(t)?a=new Fi(ii.parsePlatformTagName(t),n,r,void 0,void 0,e
):(s=P(e.$options,"components",t))?a=ce(s,n,e,r,t):(o="foreignObject"===t?"xhtml":o,a=new Fi(t,n,r,
void 0,void 0,e))):a=ce(t,n,e,r);return a?(o&&Te(a,o),a):Ui()}function Te(e,t){if(e.ns=t,e.children
)for(var n=0,r=e.children.length;n<r;n++){var i=e.children[n];i.tag&&!i.ns&&Te(i,t)}}function Ee(e){
e.$vnode=null,e._vnode=null,e._staticTrees=null;var t=e.$options._parentVnode,n=t&&t.context
;e.$slots=Ne(e.$options._renderChildren,n),e.$scopedSlots={},e._c=function(t,n,r,i){return Oe(e,t,n,
r,i,!1)},e.$createElement=function(t,n,r,i){return Oe(e,t,n,r,i,!0)},e.$options.el&&e.$mount(
e.$options.el)}function je(n){function r(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++
)e[r]&&"string"!=typeof e[r]&&i(e[r],t+"_"+r,n);else i(e,t,n)}function i(e,t,n){e.isStatic=!0,
e.key=t,e.isOnce=n}n.prototype.$nextTick=function(e){return mi(e,this)},
n.prototype._render=function(){var o,e=this,t=e.$options,n=t.render,r=t.staticRenderFns,
i=t._parentVnode;if(e._isMounted)for(var a in e.$slots)e.$slots[a]=ie(e.$slots[a])
;i&&i.data.scopedSlots&&(e.$scopedSlots=i.data.scopedSlots),r&&!e._staticTrees&&(e._staticTrees=[]),
e.$vnode=i;try{o=n.call(e._renderProxy,e.$createElement)}catch(t){if(!ii.errorHandler)throw t
;ii.errorHandler.call(null,t,e),o=e._vnode}return o instanceof Fi||(o=Ui()),o.parent=i,o},
n.prototype._s=e,n.prototype._v=ne,n.prototype._n=t,n.prototype._e=Ui,n.prototype._q=h,
n.prototype._i=m,n.prototype._m=function(e,t){var n=this._staticTrees[e];return n&&!t?Array.isArray(
n)?ie(n):re(n):(r(n=this._staticTrees[e]=this.$options.staticRenderFns[e].call(this._renderProxy),
"__static__"+e,!1),n)},n.prototype._o=function(e,t,n){return r(e,"__once__"+t+(n?"_"+n:""),!0),e},
n.prototype._f=function(e){return P(this.$options,"filters",e,!0)||ri},n.prototype._l=function(e,t){
var n,r,i,a,o;if(Array.isArray(e))for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r
);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(u(e))for(
a=Object.keys(e),n=new Array(a.length),r=0,i=a.length;r<i;r++)o=a[r],n[r]=t(e[o],o,r);return n},
n.prototype._t=function(e,t,n){var r=this.$scopedSlots[e];return r?r(n||{})||t:this.$slots[e]||t},
n.prototype._b=function(e,t,n,r){if(n&&u(n))for(var i in Array.isArray(n)&&(n=d(n)),n)if(
"class"===i||"style"===i)e[i]=n[i];else{(r||ii.mustUseProp(t,i)?e.domProps||(e.domProps={}
):e.attrs||(e.attrs={}))[i]=n[i]}return e},n.prototype._k=function(e,t,n){var r=ii.keyCodes[t]||n
;return Array.isArray(r)?-1===r.indexOf(e):r!==e}}function Ne(e,t){var n={};if(!e)return n;for(var r
,i,a=[],o=0,s=e.length;o<s;o++)if(((i=e[o]).context===t||i.functionalContext===t)&&i.data&&(
r=i.data.slot)){var c=n[r]||(n[r]=[]);"template"===i.tag?c.push.apply(c,i.children):c.push(i)
}else a.push(i);return a.length&&(1!==a.length||" "!==a[0].text&&!a[0].isComment)&&(n["default"]=a),
n}function Le(e){e._events=Object.create(null);var t=e.$options._parentListeners,n=function(t,n,r){
r?e.$once(t,n):e.$on(t,n)},r=s(e.$off,e);e._updateListeners=function(t,i){$e(t,i||{},n,r,e)},
t&&e._updateListeners(t)}function De(e){e.prototype.$on=function(e,t){var n=this;return(
n._events[e]||(n._events[e]=[])).push(t),n},e.prototype.$once=function(e,t){function n(){r.$off(e,n)
,t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){
var n=this;if(!arguments.length)return n._events=Object.create(null),n;var r=n._events[e];if(!r
)return n;if(1===arguments.length)return n._events[e]=null,n;for(var i,a=r.length;a--;)if((i=r[a]
)===t||i.fn===t){r.splice(a,1);break}return n},e.prototype.$emit=function(e){var t=this,
n=t._events[e];if(n){n=1<n.length?c(n):n;for(var r=c(arguments,1),i=0,a=n.length;i<a;i++)n[i].apply(
t,r)}return t}}function Me(e){e.prototype._init=function(e){var t=this;t._uid=zi++,t._isVue=!0,
e&&e._isComponent?Pe(t,e):t.$options=M(Re(t.constructor),e||{},t),ae((t._renderProxy=t)._self=t),Le(
t),se(t,"beforeCreate"),K(t),se(t,"created"),Ee(t)}}function Pe(e,t){var n=e.$options=Object.create(
e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,
n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,
n._componentTag=t._componentTag,n._parentElm=t._parentElm,n._refElm=t._refElm,t.render&&(
n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Re(e){var t=e.options;if(e["super"]
){var n=e["super"].options,r=e.superOptions,i=e.extendOptions;n!==r&&(e.superOptions=n,
i.render=t.render,i.staticRenderFns=t.staticRenderFns,i._scopeId=t._scopeId,(t=e.options=M(n,i)
).name&&(t.components[t.name]=e))}return t}function Ie(e){this._init(e)}function Fe(e){
e.use=function(e){if(!e.installed){var t=c(arguments,1);return t.unshift(this),
"function"==typeof e.install?e.install.apply(e,t):e.apply(null,t),e.installed=!0,this}}}function Ue(
e){e.mixin=function(e){this.options=M(this.options,e)}}function He(e){e.cid=0;var t=1
;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r]
;var a=e.name||n.options.name,o=function(e){this._init(e)};return o.prototype=Object.create(
n.prototype),(o.prototype.constructor=o).cid=t++,o.options=M(n.options,e),o["super"]=n,
o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,ii._assetTypes.forEach(function(e){o[e]=n[e]}),a&&(
o.options.components[a]=o),o.superOptions=n.options,o.extendOptions=e,i[r]=o}}function Be(e){
ii._assetTypes.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&f(n)&&(
n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,
update:n}),this.options[t+"s"][e]=n):this.options[t+"s"][e]}})}function Ve(e,t){
return"string"==typeof e?-1<e.split(",").indexOf(t):e.test(t)}function ze(e){var t={get:function(){
return ii}};Object.defineProperty(e,"config",t),e.util=Ti,e.set=O,e["delete"]=S,e.nextTick=mi,
e.options=Object.create(null),ii._assetTypes.forEach(function(t){e.options[t+"s"]=Object.create(null
)}),l((e.options._base=e).options.components,qi),Fe(e),Ue(e),He(e),Be(e)}function Je(e){for(
var t=e.data,n=e,r=e;r.child;)(r=r.child._vnode).data&&(t=Ke(r.data,t));for(;n=n.parent;)n.data&&(
t=Ke(t,n.data));return qe(t)}function Ke(e,t){return{staticClass:We(e.staticClass,t.staticClass),
"class":e["class"]?[e["class"],t["class"]]:t["class"]}}function qe(e){var t=e["class"],
n=e.staticClass;return n||t?We(n,Ze(t)):""}function We(e,t){return e?t?e+" "+t:e:t||""}function Ze(e
){var t="";if(!e)return t;if("string"==typeof e)return e;if(Array.isArray(e)){for(var n,r=0,
i=e.length;r<i;r++)e[r]&&(n=Ze(e[r]))&&(t+=n+" ");return t.slice(0,-1)}if(u(e)){for(var a in e
)e[a]&&(t+=a+" ");return t.slice(0,-1)}return t}function Ge(e){return oa(e
)?"svg":"math"===e?"math":void 0}function Ye(e){if(!si)return!0;if(ca(e))return!1;if(
e=e.toLowerCase(),null!=la[e])return la[e];var t=document.createElement(e);return-1<e.indexOf("-"
)?la[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:la[e]=/HTMLUnknownElement/.test(
t.toString())}function Qe(e){return"string"!=typeof e||(e=document.querySelector(e)
)?e:document.createElement("div")}function Xe(e,t){var n=document.createElement(e)
;return"select"!==e||t.data&&t.data.attrs&&"multiple"in t.data.attrs&&n.setAttribute("multiple",
"multiple"),n}function et(e,t){return document.createElementNS(ia[e],t)}function tt(e){
return document.createTextNode(e)}function nt(e){return document.createComment(e)}function rt(e,t,n
){e.insertBefore(t,n)}function it(e,t){e.removeChild(t)}function at(e,t){e.appendChild(t)}
function ot(e){return e.parentNode}function st(e){return e.nextSibling}function ct(e){
return e.tagName}function lt(e,t){e.textContent=t}function ut(e,t,n){e.setAttribute(t,n)}
function ft(e,t){var n=e.data.ref;if(n){var i=e.context,a=e.child||e.elm,o=i.$refs;t?Array.isArray(
o[n])?r(o[n],a):o[n]===a&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])&&o[n].indexOf(a
)<0?o[n].push(a):o[n]=[a]:o[n]=a}}function dt(e){return null==e}function pt(e){return null!=e}
function vt(e,t){return e.key===t.key&&e.tag===t.tag&&e.isComment===t.isComment&&!e.data==!t.data}
function ht(e,t,n){var r,i,a={};for(r=t;r<=n;++r)pt(i=e[r].key)&&(a[i]=r);return a}function mt(e){
function t(e){return new Fi(O.tagName(e).toLowerCase(),{},[],void 0,e)}function r(e,t){function n(){
0==--n.listeners&&i(e)}return n.listeners=t,n}function i(e){var t=O.parentNode(e);t&&O.removeChild(t
,e)}function o(e,t,n,r,i){if(e.isRootInsert=!i,!s(e,t,n,r)){var a=e.data,o=e.children,c=e.tag;pt(c
)?(e.elm=e.ns?O.createElementNS(e.ns,c):O.createElement(c,e),v(e),u(e,o,t),pt(a)&&d(e,t)
):e.isComment?e.elm=O.createComment(e.text):e.elm=O.createTextNode(e.text),l(n,e.elm,r)}}function s(
e,t,n,r){var i=e.data;if(pt(i)){var a=pt(e.child)&&i.keepAlive;if(pt(i=i.hook)&&pt(i=i.init)&&i(e,!1
,n,r),pt(e.child))return p(e,t),a&&c(e,t,n,r),!0}}function c(e,t,n,r){for(var i,a=e;a.child;)if(pt(
i=(a=a.child._vnode).data)&&pt(i=i.transition)){for(i=0;i<k.activate.length;++i)k.activate[i](da,a)
;t.push(a);break}l(n,e.elm,r)}function l(e,t,n){e&&(n?O.insertBefore(e,t,n):O.appendChild(e,t))}
function u(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)o(t[r],n,e.elm,null,!0);else a(
e.text)&&O.appendChild(e.elm,O.createTextNode(e.text))}function f(e){for(;e.child;)e=e.child._vnode
;return pt(e.tag)}function d(e,t){for(var n=0;n<k.create.length;++n)k.create[n](da,e);pt(
x=e.data.hook)&&(x.create&&x.create(da,e),x.insert&&t.push(e))}function p(e,t){
e.data.pendingInsert&&t.push.apply(t,e.data.pendingInsert),e.elm=e.child.$el,f(e)?(d(e,t),v(e)):(ft(
e),t.push(e))}function v(e){var t;pt(t=e.context)&&pt(t=t.$options._scopeId)&&O.setAttribute(e.elm,t
,""),pt(t=Hi)&&t!==e.context&&pt(t=t.$options._scopeId)&&O.setAttribute(e.elm,t,"")}function h(e,t,n
,r,i,a){for(;r<=i;++r)o(n[r],a,e,t)}function m(e){var t,n,r=e.data;if(pt(r))for(pt(t=r.hook)&&pt(
t=t.destroy)&&t(e),t=0;t<k.destroy.length;++t)k.destroy[t](e);if(pt(t=e.children))for(
n=0;n<e.children.length;++n)m(e.children[n])}function g(e,t,n,r){for(;n<=r;++n){var i=t[n];pt(i)&&(
pt(i.tag)?(y(i),m(i)):O.removeChild(e,i.elm))}}function y(e,t){if(t||pt(e.data)){
var n=k.remove.length+1;for(t?t.listeners+=n:t=r(e.elm,n),pt(x=e.child)&&pt(x=x._vnode)&&pt(x.data
)&&y(x,t),x=0;x<k.remove.length;++x)k.remove[x](e,t);pt(x=e.data.hook)&&pt(x=x.remove)?x(e,t):t()
}else i(e.elm)}function _(e,t,n,r,i){for(var a,s,c,u=0,f=0,d=t.length-1,p=t[0],v=t[d],m=n.length-1,
y=n[0],_=n[m],$=!i;u<=d&&f<=m;)dt(p)?p=t[++u]:dt(v)?v=t[--d]:vt(p,y)?(b(p,y,r),p=t[++u],y=n[++f]
):vt(v,_)?(b(v,_,r),v=t[--d],_=n[--m]):vt(p,_)?(b(p,_,r),$&&O.insertBefore(e,p.elm,O.nextSibling(
v.elm)),p=t[++u],_=n[--m]):(vt(v,y)?(b(v,y,r),$&&O.insertBefore(e,v.elm,p.elm),v=t[--d]):(dt(a)&&(
a=ht(t,u,d)),dt(s=pt(y.key)?a[y.key]:null)?o(y,r,e,p.elm):vt(c=t[s],y)?(b(c,y,r),t[s]=void 0,
$&&O.insertBefore(e,y.elm,p.elm)):o(y,r,e,p.elm)),y=n[++f]);d<u?h(e,dt(n[m+1])?null:n[m+1].elm,n,f,m
,r):m<f&&g(e,t,u,d)}function b(e,t,n,r){if(e!==t){if(t.isStatic&&e.isStatic&&t.key===e.key&&(
t.isCloned||t.isOnce))return t.elm=e.elm,void(t.child=e.child);var i,a=t.data,o=pt(a);o&&pt(i=a.hook
)&&pt(i=i.prepatch)&&i(e,t);var s=t.elm=e.elm,c=e.children,l=t.children;if(o&&f(t)){for(
i=0;i<k.update.length;++i)k.update[i](e,t);pt(i=a.hook)&&pt(i=i.update)&&i(e,t)}dt(t.text)?pt(c
)&&pt(l)?c!==l&&_(s,c,l,n,r):pt(l)?(pt(e.text)&&O.setTextContent(s,""),h(s,null,l,0,l.length-1,n)
):pt(c)?g(s,c,0,c.length-1):pt(e.text)&&O.setTextContent(s,""):e.text!==t.text&&O.setTextContent(s,
t.text),o&&pt(i=a.hook)&&pt(i=i.postpatch)&&i(e,t)}}function $(e,t,n){if(n&&e.parent
)e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}
function w(e,t,n){t.elm=e;var r=t.tag,i=t.data,a=t.children;if(pt(i)&&(pt(x=i.hook)&&pt(x=x.init
)&&x(t,!0),pt(x=t.child)))return p(t,n),!0;if(pt(r)){if(pt(a))if(e.hasChildNodes()){for(var o=!0,
s=e.firstChild,c=0;c<a.length;c++){if(!s||!w(s,a[c],n)){o=!1;break}s=s.nextSibling}if(!o||s)return!1
}else u(t,a,n);if(pt(i))for(var l in i)if(!S(l)){d(t,n);break}}return!0}var x,C,k={},A=e.modules,
O=e.nodeOps;for(x=0;x<pa.length;++x)for(k[pa[x]]=[],C=0;C<A.length;++C
)void 0!==A[C][pa[x]]&&k[pa[x]].push(A[C][pa[x]]);var S=n(
"attrs,style,class,staticClass,staticStyle,key");return function(e,n,r,i,a,s){if(n){var c,l,u=!1,d=[
];if(e){var p=pt(e.nodeType);if(!p&&vt(e,n))b(e,n,d,i);else{if(p){if(1===e.nodeType&&e.hasAttribute(
"server-rendered")&&(e.removeAttribute("server-rendered"),r=!0),r&&w(e,n,d))return $(n,d,!0),e;e=t(e
)}if(c=e.elm,o(n,d,l=O.parentNode(c),O.nextSibling(c)),n.parent){for(var v=n.parent;v;)v.elm=n.elm,
v=v.parent;if(f(n))for(var h=0;h<k.create.length;++h)k.create[h](da,n.parent)}null!==l?g(l,[e],0,0
):pt(e.tag)&&m(e)}}else u=!0,o(n,d,a,s);return $(n,d,u),n.elm}e&&m(e)}}function gt(e,t){(
e.data.directives||t.data.directives)&&yt(e,t)}function yt(e,t){var n,r,i,a=e===da,o=_t(
e.data.directives,e.context),s=_t(t.data.directives,t.context),c=[],l=[];for(n in s)r=o[n],i=s[n],
r?(i.oldValue=r.value,$t(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):($t(i,"bind",t,e)
,i.def&&i.def.inserted&&c.push(i));if(c.length){var u=function(){for(var n=0;n<c.length;n++)$t(c[n],
"inserted",t,e)};a?be(t.data.hook||(t.data.hook={}),"insert",u,"dir-insert"):u()}if(l.length&&be(
t.data.hook||(t.data.hook={}),"postpatch",function(){for(var n=0;n<l.length;n++)$t(l[n],
"componentUpdated",t,e)},"dir-postpatch"),!a)for(n in o)s[n]||$t(o[n],"unbind",e)}function _t(e,t){
var r,i,n=Object.create(null);if(!e)return n;for(r=0;r<e.length;r++)(i=e[r]).modifiers||(
i.modifiers=ha),(n[bt(i)]=i).def=P(t.$options,"directives",i.name,!0);return n}function bt(e){
return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function $t(e,t,n,r){
var i=e.def&&e.def[t];i&&i(n.elm,e,n,r)}function wt(e,t){if(e.data.attrs||t.data.attrs){var n,r,
a=t.elm,o=e.data.attrs||{},s=t.data.attrs||{};for(n in s.__ob__&&(s=t.data.attrs=l({},s)),s)r=s[n],
o[n]!==r&&xt(a,n,r);for(n in ui&&s.value!==o.value&&xt(a,"value",s.value),o)null==s[n]&&(ta(n
)?a.removeAttributeNS(ea,na(n)):Qi(n)||a.removeAttribute(n))}}function xt(e,t,n){Xi(t)?ra(n
)?e.removeAttribute(t):e.setAttribute(t,t):Qi(t)?e.setAttribute(t,ra(n)||"false"===n?"false":"true"
):ta(t)?ra(n)?e.removeAttributeNS(ea,na(t)):e.setAttributeNS(ea,t,n):ra(n)?e.removeAttribute(t
):e.setAttribute(t,n)}function Ct(e,t){var n=t.elm,r=t.data,i=e.data;if(
r.staticClass||r["class"]||i&&(i.staticClass||i["class"])){var a=Je(t),o=n._transitionClasses;o&&(
a=We(a,Ze(o))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}function kt(e,t,n,r){
if(n){var i=t;t=function(n){At(e,t,r),1===arguments.length?i(n):i.apply(null,arguments)}}
Wi.addEventListener(e,t,r)}function At(e,t,n){Wi.removeEventListener(e,t,n)}function Ot(e,t){if(
e.data.on||t.data.on){var n=t.data.on||{},r=e.data.on||{};Wi=t.elm,$e(n,r,kt,At,t.context)}}
function St(e,t){if(e.data.domProps||t.data.domProps){var n,r,i=t.elm,a=e.data.domProps||{},
o=t.data.domProps||{};for(n in o.__ob__&&(o=t.data.domProps=l({},o)),a)null==o[n]&&(i[n]="");for(
n in o)if(r=o[n],"textContent"!==n&&"innerHTML"!==n||(t.children&&(t.children.length=0),r!==a[n])
)if("value"===n){var s=null==(i._value=r)?"":String(r);!i.composing&&(
document.activeElement!==i&&i.value!==s||Tt(t,s))&&(i.value=s)}else i[n]=r}}function Tt(e,n){
var r=e.elm.value,i=e.elm._vModifiers;return i&&i.number||"number"===e.elm.type?t(r)!==t(n
):i&&i.trim?r.trim()!==n.trim():r!==n}function Et(e){var t=jt(e.style);return e.staticStyle?l(
e.staticStyle,t):t}function jt(e){return Array.isArray(e)?d(e):"string"==typeof e?$a(e):e}
function Nt(e,t){var n,r={};if(t)for(var i=e;i.child;)(i=i.child._vnode).data&&(n=Et(i.data))&&l(r,n
);(n=Et(e.data))&&l(r,n);for(var a=e;a=a.parent;)a.data&&(n=Et(a.data))&&l(r,n);return r}
function Lt(e,t){var n=t.data,r=e.data;if(n.staticStyle||n.style||r.staticStyle||r.style){var i,a,
o=t.elm,s=e.data.staticStyle,c=e.data.style||{},u=s||c,f=jt(t.data.style)||{}
;t.data.style=f.__ob__?l({},f):f;var d=Nt(t,!0);for(a in u)null==d[a]&&Ca(o,a,"");for(a in d)(i=d[a]
)!==u[a]&&Ca(o,a,null==i?"":i)}}function Dt(e,t){if(t&&t.trim())if(e.classList)-1<t.indexOf(" "
)?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{
var n=" "+e.getAttribute("class")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}
function Mt(e,t){if(t&&t.trim())if(e.classList)-1<t.indexOf(" ")?t.split(/\s+/).forEach(function(t){
return e.classList.remove(t)}):e.classList.remove(t);else{for(var n=" "+e.getAttribute("class")+" ",
r=" "+t+" ";0<=n.indexOf(r);)n=n.replace(r," ");e.setAttribute("class",n.trim())}}function Pt(e){Ma(
function(){Ma(e)})}function Rt(e,t){(e._transitionClasses||(e._transitionClasses=[])).push(t),Dt(e,t
)}function It(e,t){e._transitionClasses&&r(e._transitionClasses,t),Mt(e,t)}function Ft(e,t,n){
var r=Ut(e,t),i=r.type,a=r.timeout,o=r.propCount;if(!i)return n();var s=i===Ta?Na:Da,c=0,l=function(
){e.removeEventListener(s,u),n()},u=function(t){t.target===e&&++c>=o&&l()};setTimeout(function(){
c<o&&l()},a+1),e.addEventListener(s,u)}function Ut(e,t){var n,r=window.getComputedStyle(e),
i=r[ja+"Delay"].split(", "),a=r[ja+"Duration"].split(", "),o=Ht(i,a),s=r[La+"Delay"].split(", "),
c=r[La+"Duration"].split(", "),l=Ht(s,c),u=0,f=0;return t===Ta?0<o&&(n=Ta,u=o,f=a.length
):t===Ea?0<l&&(n=Ea,u=l,f=c.length):f=(n=0<(u=Math.max(o,l))?l<o?Ta:Ea:null
)?n===Ta?a.length:c.length:0,{type:n,timeout:u,propCount:f,hasTransform:n===Ta&&Pa.test(
r[ja+"Property"])}}function Ht(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null
,t.map(function(t,n){return Bt(t)+Bt(e[n])}))}function Bt(e){return 1e3*Number(e.slice(0,-1))}
function Vt(e,t){var n=e.elm;n._leaveCb&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Jt(
e.data.transition);if(r&&!n._enterCb&&1===n.nodeType){for(var i=r.css,a=r.type,o=r.enterClass,
s=r.enterActiveClass,c=r.appearClass,l=r.appearActiveClass,u=r.beforeEnter,f=r.enter,d=r.afterEnter,
p=r.enterCancelled,v=r.beforeAppear,h=r.appear,m=r.afterAppear,g=r.appearCancelled,y=Hi,
_=Hi.$vnode;_&&_.parent;)y=(_=_.parent).context;var b=!y._isMounted||!e.isRootInsert;if(
!b||h||""===h){var $=b?c:o,w=b?l:s,x=b&&v||u,C=b&&"function"==typeof h?h:f,k=b&&m||d,A=b&&g||p,
O=!1!==i&&!ui,S=C&&1<(C._length||C.length),T=n._enterCb=Kt(function(){O&&It(n,w),T.cancelled?(O&&It(
n,$),A&&A(n)):k&&k(n),n._enterCb=null});e.data.show||be(e.data.hook||(e.data.hook={}),"insert",
function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key]
;r&&r.context===e.context&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),C&&C(n,T)},
"transition-insert"),x&&x(n),O&&(Rt(n,$),Rt(n,w),Pt(function(){It(n,$),T.cancelled||S||Ft(n,a,T)})),
e.data.show&&(t&&t(),C&&C(n,T)),O||S||T()}}}function zt(e,t){function n(){m.cancelled||(
e.data.show||((r.parentNode._pending||(r.parentNode._pending={}))[e.key]=e),l&&l(r),v&&(Rt(r,s),Rt(r
,c),Pt(function(){It(r,s),m.cancelled||h||Ft(r,o,m)})),u&&u(r,m),v||h||m())}var r=e.elm
;r._enterCb&&(r._enterCb.cancelled=!0,r._enterCb());var i=Jt(e.data.transition);if(!i)return t();if(
!r._leaveCb&&1===r.nodeType){var a=i.css,o=i.type,s=i.leaveClass,c=i.leaveActiveClass,
l=i.beforeLeave,u=i.leave,f=i.afterLeave,d=i.leaveCancelled,p=i.delayLeave,v=!1!==a&&!ui,h=u&&1<(
u._length||u.length),m=r._leaveCb=Kt(function(){r.parentNode&&r.parentNode._pending&&(
r.parentNode._pending[e.key]=null),v&&It(r,c),m.cancelled?(v&&It(r,s),d&&d(r)):(t(),f&&f(r)),
r._leaveCb=null});p?p(n):n()}}function Jt(e){if(e){if("object"==typeof e){var t={}
;return!1!==e.css&&l(t,Ra(e.name||"v")),l(t,e),t}return"string"==typeof e?Ra(e):void 0}}function Kt(
e){var t=!1;return function(){t||(t=!0,e())}}function qt(e,t){t.data.show||Vt(t)}function Wt(e,t){
var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var a,o,s=0,c=e.options.length;s<c;s++)if(
o=e.options[s],i)a=-1<m(r,Gt(o)),o.selected!==a&&(o.selected=a);else if(h(Gt(o),r))return void(
e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function Zt(e,t){for(var n=0,
r=t.length;n<r;n++)if(h(Gt(t[n]),e))return!1;return!0}function Gt(e){
return"_value"in e?e._value:e.value}function Yt(e){e.target.composing=!0}function Qt(e){
e.target.composing=!1,Xt(e.target,"input")}function Xt(e,t){var n=document.createEvent("HTMLEvents")
;n.initEvent(t,!0,!0),e.dispatchEvent(n)}function en(e){
return!e.child||e.data&&e.data.transition?e:en(e.child._vnode)}function tn(e){
var t=e&&e.componentOptions;return t&&t.Ctor.options["abstract"]?tn(Ae(t.children)):e}function nn(e
){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var a in i
)t[Gr(a)]=i[a].fn;return t}function rn(e,t){return/\d-keep-alive$/.test(t.tag)?e("keep-alive"):null}
function an(e){for(;e=e.parent;)if(e.data.transition)return!0}function on(e){
e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function sn(e){
e.data.newPos=e.elm.getBoundingClientRect()}function cn(e){var t=e.data.pos,n=e.data.newPos,
r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var a=e.elm.style
;a.transform=a.WebkitTransform="translate("+r+"px,"+i+"px)",a.transitionDuration="0s"}}function ln(e
,t){var n=document.createElement("div");return n.innerHTML='<div a="'+e+'">',0<n.innerHTML.indexOf(t
)}function un(e){return(Ga=Ga||document.createElement("div")).innerHTML=e,Ga.textContent}
function fn(e,t){return t&&(e=e.replace(Jo,"\n")),e.replace(Vo,"<").replace(zo,">").replace(Ko,"&"
).replace(qo,'"')}function dn(e,t){function n(t){f+=t,e=e.substring(t)}function r(){var t=e.match(so
);if(t){var i,a,r={tagName:t[1],attrs:[],start:f};for(n(t[0].length);!(i=e.match(co))&&(a=e.match(io
));)n(a[0].length),r.attrs.push(a);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=f,r}}
function i(e){var n=e.tagName,r=e.unarySlash;l&&("p"===s&&eo(n)&&a("",s),Xa(n)&&s===n&&a("",n));for(
var i=u(n)||"html"===n&&"head"===s||!!r,o=e.attrs.length,f=new Array(o),d=0;d<o;d++){
var p=e.attrs[d];vo&&-1===p[0].indexOf('""')&&(""===p[3]&&delete p[3],""===p[4]&&delete p[4],
""===p[5]&&delete p[5]);var v=p[3]||p[4]||p[5]||"";f[d]={name:p[1],value:fn(v,t.shouldDecodeNewlines
)}}i||(c.push({tag:n,attrs:f}),s=n,r=""),t.start&&t.start(n,f,i,e.start,e.end)}function a(e,n,r,i){
var a;if(null==r&&(r=f),null==i&&(i=f),n){var o=n.toLowerCase();for(
a=c.length-1;0<=a&&c[a].tag.toLowerCase()!==o;a--);}else a=0;if(0<=a){for(var l=c.length-1;a<=l;l--
)t.end&&t.end(c[l].tag,r,i);c.length=a,s=a&&c[a-1].tag}else"br"===n.toLowerCase()?t.start&&t.start(n
,[],!0,r,i):"p"===n.toLowerCase()&&(t.start&&t.start(n,[],!1,r,i),t.end&&t.end(n,r,i))}for(var o,s,
c=[],l=t.expectHTML,u=t.isUnaryTag||ni,f=0;e;){if(o=e,s&&Ho(s,t.sfc,c)){var d=s.toLowerCase(),
p=Bo[d]||(Bo[d]=new RegExp("([\\s\\S]*?)(</"+d+"[^>]*>)","i")),v=0,h=e.replace(p,function(e,n,r){
return v=r.length,"script"!==d&&"style"!==d&&"noscript"!==d&&(n=n.replace(/<!--([\s\S]*?)-->/g,"$1"
).replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),t.chars&&t.chars(n),""});f+=e.length-h.length,e=h,a(
"</"+d+">",d,f-v,f)}else{var m=e.indexOf("<");if(0===m){if(fo.test(e)){var g=e.indexOf("-->");if(
0<=g){n(g+3);continue}}if(po.test(e)){var y=e.indexOf("]>");if(0<=y){n(y+2);continue}}var _=e.match(
uo);if(_){n(_[0].length);continue}var b=e.match(lo);if(b){var $=f;n(b[0].length),a(b[0],b[1],$,f)
;continue}var w=r();if(w){i(w);continue}}var x=void 0,C=void 0,k=void 0;if(0<m){for(C=e.slice(m);!(
lo.test(C)||so.test(C)||fo.test(C)||po.test(C)||(k=C.indexOf("<",1))<0);)m+=k,C=e.slice(m)
;x=e.substring(0,m),n(m)}m<0&&(x=e,e=""),t.chars&&x&&t.chars(x)}if(e===o&&t.chars){t.chars(e);break}
}a()}function pn(e){function t(){(o||(o=[])).push(e.slice(v,i).trim()),v=i+1}var n,r,i,a,o,s=!1,c=!1
,l=!1,u=!1,f=0,d=0,p=0,v=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!1
);else if(c)34===n&&92!==r&&(c=!1);else if(l)96===n&&92!==r&&(l=!1);else if(u)47===n&&92!==r&&(u=!1
);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||f||d||p){switch(n){case 34:c=!0
;break;case 39:s=!0;break;case 96:l=!0;break;case 40:p++;break;case 41:p--;break;case 91:d++;break
;case 93:d--;break;case 123:f++;break;case 125:f--}if(47===n){for(var h=i-1,m=void 0;0<=h&&" "===(
m=e.charAt(h));h--);m&&/[\w$]/.test(m)||(u=!0)}}else void 0===a?(v=i+1,a=e.slice(0,i).trim()):t()
;if(void 0===a?a=e.slice(0,i).trim():0!==v&&t(),o)for(i=0;i<o.length;i++)a=vn(a,o[i]);return a}
function vn(e,t){var n=t.indexOf("(");return n<0?'_f("'+t+'")('+e+")":'_f("'+t.slice(0,n
)+'")('+e+","+t.slice(n+1)}function hn(e,t){var n=t?Go(t):Wo;if(n.test(e)){for(var r,i,a=[],
o=n.lastIndex=0;r=n.exec(e);){o<(i=r.index)&&a.push(JSON.stringify(e.slice(o,i)));var s=pn(
r[1].trim());a.push("_s("+s+")"),o=i+r[0].length}return o<e.length&&a.push(JSON.stringify(e.slice(o)
)),a.join("+")}}function mn(e){console.error("[Vue parser]: "+e)}function gn(e,t){return e?e.map(
function(e){return e[t]}).filter(function(e){return e}):[]}function yn(e,t,n){(e.props||(e.props=[])
).push({name:t,value:n})}function _n(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n})}
function bn(e,t,n,r,i,a){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,
modifiers:a})}function $n(e,t,n,r,i){var a;r&&r.capture&&(delete r.capture,t="!"+t),r&&r.once&&(
delete r.once,t="~"+t),r&&r["native"]?(delete r["native"],a=e.nativeEvents||(e.nativeEvents={})
):a=e.events||(e.events={});var o={value:n,modifiers:r},s=a[t];Array.isArray(s)?i?s.unshift(o
):s.push(o):a[t]=s?i?[o,s]:[s,o]:o}function wn(e,t,n){var r=xn(e,":"+t)||xn(e,"v-bind:"+t);if(
null!=r)return pn(r);if(!1!==n){var i=xn(e,t);if(null!=i)return JSON.stringify(i)}}function xn(e,t){
var n;if(null!=(n=e.attrsMap[t]))for(var r=e.attrsList,i=0,a=r.length;i<a;i++)if(r[i].name===t){
r.splice(i,1);break}return n}function Cn(e){if(ho=(mo=e).length,yo=_o=bo=0,e.indexOf("["
)<0||e.lastIndexOf("]")<ho-1)return{exp:e,idx:null};for(;!An();)On(go=kn())?Tn(go):91===go&&Sn(go)
;return{exp:e.substring(0,_o),idx:e.substring(_o+1,bo)}}function kn(){return mo.charCodeAt(++yo)}
function An(){return ho<=yo}function On(e){return 34===e||39===e}function Sn(e){var t=1;for(
_o=yo;!An();)if(On(e=kn()))Tn(e);else if(91===e&&t++,93===e&&t--,0===t){bo=yo;break}}function Tn(e){
for(var t=e;!An()&&(e=kn())!==t;);}function En(e,t){t.warn||mn,wo=t.getTagNamespace||ni,
xo=t.mustUseProp||ni,Co=t.isPreTag||ni,ko=gn(t.modules,"preTransformNode"),Ao=gn(t.modules,
"transformNode"),Oo=gn(t.modules,"postTransformNode"),So=t.delimiters;var n,r,i=[],
a=!1!==t.preserveWhitespace,o=!1,s=!1;return dn(e,{expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,
shouldDecodeNewlines:t.shouldDecodeNewlines,start:function(e,a,c){function l(){}var u=r&&r.ns||wo(e)
;li&&"svg"===u&&(a=Wn(a));var f={type:1,tag:e,attrsList:a,attrsMap:Jn(a),parent:r,children:[]};u&&(
f.ns=u),qn(f)&&!vi()&&(f.forbidden=!0);for(var d=0;d<ko.length;d++)ko[d](f,t);if(o||(jn(f),f.pre&&(
o=!0)),Co(f.tag)&&(s=!0),o)Nn(f);else{Mn(f),Pn(f),Fn(f),Ln(f),f.plain=!f.key&&!a.length,Dn(f),Un(f),
Hn(f);for(var p=0;p<Ao.length;p++)Ao[p](f,t);Bn(f)}if(n?i.length||n["if"]&&(f.elseif||f["else"])&&(
l(f),In(n,{exp:f.elseif,block:f})):l(n=f),r&&!f.forbidden)if(f.elseif||f["else"])Rn(f,r);else if(
f.slotScope){r.plain=!1;var v=f.slotTarget||"default";(r.scopedSlots||(r.scopedSlots={}))[v]=f
}else r.children.push(f),f.parent=r;c||(r=f,i.push(f));for(var h=0;h<Oo.length;h++)Oo[h](f,t)},
end:function(){var e=i[i.length-1],t=e.children[e.children.length-1]
;t&&3===t.type&&" "===t.text&&e.children.pop(),i.length-=1,r=i[i.length-1],e.pre&&(o=!1),Co(e.tag
)&&(s=!1)},chars:function(e){var t;!r||li&&"textarea"===r.tag&&r.attrsMap.placeholder===e||!(
e=s||e.trim()?is(e):a&&r.children.length?" ":"")||(!o&&" "!==e&&(t=hn(e,So))?r.children.push({
type:2,expression:t,text:e}):r.children.push({type:3,text:e}))}}),n}function jn(e){null!=xn(e,
"v-pre")&&(e.pre=!0)}function Nn(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),
r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(
e.plain=!0)}function Ln(e){var t=wn(e,"key");t&&(e.key=t)}function Dn(e){var t=wn(e,"ref");t&&(
e.ref=t,e.refInFor=Vn(e))}function Mn(e){var t;if(t=xn(e,"v-for")){var n=t.match(Qo);if(!n)return
;e["for"]=n[2].trim();var r=n[1].trim(),i=r.match(Xo);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim()
,i[3]&&(e.iterator2=i[3].trim())):e.alias=r}}function Pn(e){var t=xn(e,"v-if");if(t)e["if"]=t,In(e,{
exp:t,block:e});else{null!=xn(e,"v-else")&&(e["else"]=!0);var n=xn(e,"v-else-if");n&&(e.elseif=n)}}
function Rn(e,t){var n=Kn(t.children);n&&n["if"]&&In(n,{exp:e.elseif,block:e})}function In(e,t){
e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function Fn(e){null!=xn(e,"v-once")&&(
e.once=!0)}function Un(e){if("slot"===e.tag)e.slotName=wn(e,"name");else{var t=wn(e,"slot");t&&(
e.slotTarget='""'===t?'"default"':t),"template"===e.tag&&(e.slotScope=xn(e,"scope"))}}function Hn(e
){var t;(t=wn(e,"is"))&&(e.component=t),null!=xn(e,"inline-template")&&(e.inlineTemplate=!0)}
function Bn(e){var t,n,r,i,a,o,s,c,l=e.attrsList;for(t=0,n=l.length;t<n;t++)if(r=i=l[t].name,
a=l[t].value,Yo.test(r))if(e.hasBindings=!0,(s=zn(r))&&(r=r.replace(rs,"")),es.test(r))r=r.replace(
es,""),a=pn(a),c=!1,s&&(s.prop&&(c=!0,"innerHtml"===(r=Gr(r))&&(r="innerHTML")),s.camel&&(r=Gr(r))),
c||xo(e.tag,r)?yn(e,r,a):_n(e,r,a);else if(ts.test(r))$n(e,r=r.replace(ts,""),a,s);else{var u=(
r=r.replace(Yo,"")).match(ns);u&&(o=u[1])&&(r=r.slice(0,-(o.length+1))),bn(e,r,i,a,o,s)}else _n(e,r,
JSON.stringify(a))}function Vn(e){for(var t=e;t;){if(void 0!==t["for"])return!0;t=t.parent}return!1}
function zn(e){var t=e.match(rs);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}
function Jn(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}function Kn(e){
for(var t=e.length;t--;)if(e[t].tag)return e[t]}function qn(e){
return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}
function Wn(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];as.test(r.name)||(r.name=r.name.replace(
os,""),t.push(r))}return t}function Zn(e,t){e&&(To=ss(t.staticKeys||""),Eo=t.isReservedTag||ni,Yn(e)
,Qn(e,!1))}function Gn(e){return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(
e?","+e:""))}function Yn(e){if(e["static"]=er(e),1===e.type){if(!Eo(e.tag
)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var t=0,
n=e.children.length;t<n;t++){var r=e.children[t];Yn(r),r["static"]||(e["static"]=!1)}}}function Qn(e
,t){if(1===e.type){if((e["static"]||e.once)&&(e.staticInFor=t),e["static"]&&e.children.length&&(
1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,
e.children)for(var n=0,r=e.children.length;n<r;n++)Qn(e.children[n],t||!!e["for"])
;e.ifConditions&&Xn(e.ifConditions,t)}}function Xn(e,t){for(var n=1,r=e.length;n<r;n++)Qn(e[n].block
,t)}function er(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e["if"]||e["for"]||qr(
e.tag)||!Eo(e.tag)||tr(e)||!Object.keys(e).every(To))))}function tr(e){for(;e.parent;){if(
"template"!==(e=e.parent).tag)return!1;if(e["for"])return!0}return!1}function nr(e,t){
var n=t?"nativeOn:{":"on:{";for(var r in e)n+='"'+r+'":'+rr(r,e[r])+",";return n.slice(0,-1)+"}"}
function rr(e,t){if(t){if(Array.isArray(t))return"["+t.map(function(t){return rr(e,t)}).join(","
)+"]";if(t.modifiers){var n="",r=[];for(var i in t.modifiers)fs[i]?n+=fs[i]:r.push(i)
;return r.length&&(n=ir(r)+n),"function($event){"+n+(ls.test(t.value)?t.value+"($event)":t.value
)+"}"}return cs.test(t.value)||ls.test(t.value)?t.value:"function($event){"+t.value+"}"}
return"function(){}"}function ir(e){return"if("+e.map(ar).join("&&")+")return;"}function ar(e){
var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=us[e]
;return"_k($event.keyCode,"+JSON.stringify(e)+(n?","+JSON.stringify(n):"")+")"}function or(e,t){
e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+(
t.modifiers&&t.modifiers.prop?",true":"")+")"}}function sr(e,t){var n=Mo,r=Mo=[],i=Po;Po=0,jo=(Ro=t
).warn||mn,No=gn(t.modules,"transformCode"),Lo=gn(t.modules,"genData"),Do=t.directives||{}
;var a=e?cr(e):'_c("div")';return Mo=n,Po=i,{render:"with(this){return "+a+"}",staticRenderFns:r}}
function cr(e){if(e.staticRoot&&!e.staticProcessed)return lr(e);if(e.once&&!e.onceProcessed
)return ur(e);if(e["for"]&&!e.forProcessed)return pr(e);if(e["if"]&&!e.ifProcessed)return fr(e);if(
"template"!==e.tag||e.slotTarget){if("slot"===e.tag)return Cr(e);var t;if(e.component)t=kr(
e.component,e);else{var n=e.plain?void 0:vr(e),r=e.inlineTemplate?null:_r(e,!0);t="_c('"+e.tag+"'"+(
n?","+n:"")+(r?","+r:"")+")"}for(var i=0;i<No.length;i++)t=No[i](e,t);return t}return _r(e
)||"void 0"}function lr(e){return e.staticProcessed=!0,Mo.push("with(this){return "+cr(e)+"}"),
"_m("+(Mo.length-1)+(e.staticInFor?",true":"")+")"}function ur(e){if(e.onceProcessed=!0,
e["if"]&&!e.ifProcessed)return fr(e);if(e.staticInFor){for(var t="",n=e.parent;n;){if(n["for"]){
t=n.key;break}n=n.parent}return t?"_o("+cr(e)+","+Po+++(t?","+t:"")+")":cr(e)}return lr(e)}
function fr(e){return e.ifProcessed=!0,dr(e.ifConditions.slice())}function dr(e){function t(e){
return e.once?ur(e):cr(e)}if(!e.length)return"_e()";var n=e.shift();return n.exp?"("+n.exp+")?"+t(
n.block)+":"+dr(e):""+t(n.block)}function pr(e){var t=e["for"],n=e.alias,
r=e.iterator1?","+e.iterator1:"",i=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,
"_l(("+t+"),function("+n+r+i+"){return "+cr(e)+"})"}function vr(e){var t="{",n=hr(e);n&&(t+=n+","),
e.key&&(t+="key:"+e.key+","),e.ref&&(t+="ref:"+e.ref+","),e.refInFor&&(t+="refInFor:true,"),e.pre&&(
t+="pre:true,"),e.component&&(t+='tag:"'+e.tag+'",');for(var r=0;r<Lo.length;r++)t+=Lo[r](e);if(
e.attrs&&(t+="attrs:{"+Ar(e.attrs)+"},"),e.props&&(t+="domProps:{"+Ar(e.props)+"},"),e.events&&(
t+=nr(e.events)+","),e.nativeEvents&&(t+=nr(e.nativeEvents,!0)+","),e.slotTarget&&(
t+="slot:"+e.slotTarget+","),e.scopedSlots&&(t+=gr(e.scopedSlots)+","),e.inlineTemplate){var i=mr(e)
;i&&(t+=i+",")}return t=t.replace(/,$/,"")+"}",e.wrapData&&(t=e.wrapData(t)),t}function hr(e){
var t=e.directives;if(t){var n,r,i,a,o="directives:[",s=!1;for(n=0,r=t.length;n<r;n++){i=t[n],a=!0
;var c=Do[i.name]||ds[i.name];c&&(a=!!c(e,i,jo)),a&&(s=!0,
o+='{name:"'+i.name+'",rawName:"'+i.rawName+'"'+(
i.value?",value:("+i.value+"),expression:"+JSON.stringify(i.value):"")+(i.arg?',arg:"'+i.arg+'"':""
)+(i.modifiers?",modifiers:"+JSON.stringify(i.modifiers):"")+"},")}return s?o.slice(0,-1)+"]":void 0
}}function mr(e){var t=e.children[0];if(1===t.type){var n=sr(t,Ro)
;return"inlineTemplate:{render:function(){"+n.render+"},staticRenderFns:["+n.staticRenderFns.map(
function(e){return"function(){"+e+"}"}).join(",")+"]}"}}function gr(e){
return"scopedSlots:{"+Object.keys(e).map(function(t){return yr(t,e[t])}).join(",")+"}"}function yr(e
,t){return e+":function("+String(t.attrsMap.scope)+"){return "+("template"===t.tag?_r(t
)||"void 0":cr(t))+"}"}function _r(e,t){var n=e.children;if(n.length){var r=n[0]
;return 1===n.length&&r["for"]&&"template"!==r.tag&&"slot"!==r.tag?cr(r):"["+n.map(wr).join(","
)+"]"+(t?br(n)?"":",true":"")}}function br(e){for(var t=0;t<e.length;t++){var n=e[t];if($r(n
)||n["if"]&&n.ifConditions.some(function(e){return $r(e.block)}))return!1}return!0}function $r(e){
return e["for"]||"template"===e.tag||"slot"===e.tag}function wr(e){return 1===e.type?cr(e):xr(e)}
function xr(e){return"_v("+(2===e.type?e.expression:Or(JSON.stringify(e.text)))+")"}function Cr(e){
var t=e.slotName||'"default"',n=_r(e);return"_t("+t+(n?","+n:"")+(e.attrs?(n?"":",null"
)+",{"+e.attrs.map(function(e){return Gr(e.name)+":"+e.value}).join(",")+"}":"")+")"}function kr(e,t
){var n=t.inlineTemplate?null:_r(t,!0);return"_c("+e+","+vr(t)+(n?","+n:"")+")"}function Ar(e){for(
var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+Or(r.value)+","}return t.slice(0,-1)}
function Or(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function Sr(e,t){
var n=En(e.trim(),t);Zn(n,t);var r=sr(n,t);return{ast:n,render:r.render,
staticRenderFns:r.staticRenderFns}}function Tr(e,t){var n=(t.warn,xn(e,"class"));n&&(
e.staticClass=JSON.stringify(n));var r=wn(e,"class",!1);r&&(e.classBinding=r)}function Er(e){
var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(
t+="class:"+e.classBinding+","),t}function jr(e,t){var n=(t.warn,xn(e,"style"));n&&(
e.staticStyle=JSON.stringify($a(n)));var r=wn(e,"style",!1);r&&(e.styleBinding=r)}function Nr(e){
var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(
t+="style:("+e.styleBinding+"),"),t}function Lr(e,t,n){n;var r=t.value,i=t.modifiers,a=e.tag,
o=e.attrsMap.type;return"select"===a?Rr(e,r,i):"input"===a&&"checkbox"===o?Dr(e,r,i
):"input"===a&&"radio"===o?Mr(e,r,i):Pr(e,r,i),!0}function Dr(e,t,n){var r=n&&n.number,i=wn(e,
"value")||"null",a=wn(e,"true-value")||"true",o=wn(e,"false-value")||"false";yn(e,"checked",
"Array.isArray("+t+")?_i("+t+","+i+")>-1:_q("+t+","+a+")"),$n(e,"change",
"var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+a+"):("+o+");if(Array.isArray($$a)){var $$v="+(
r?"_n("+i+")":i
)+",$$i=_i($$a,$$v);if($$c){$$i<0&&("+t+"=$$a.concat($$v))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+t+"=$$c}"
,null,!0)}function Mr(e,t,n){var r=n&&n.number,i=wn(e,"value")||"null";yn(e,"checked","_q("+t+","+(
i=r?"_n("+i+")":i)+")"),$n(e,"change",Ir(t,i),null,!0)}function Pr(e,t,n){var r=e.attrsMap.type,
i=n||{},a=i.lazy,o=i.number,s=i.trim,c=a||li&&"range"===r?"change":"input",l=!a&&"range"!==r,
u="input"===e.tag||"textarea"===e.tag,f=u?"$event.target.value"+(s?".trim()":""
):s?"(typeof $event === 'string' ? $event.trim() : $event)":"$event",d=Ir(t,
f=o||"number"===r?"_n("+f+")":f);u&&l&&(d="if($event.target.composing)return;"+d),yn(e,"value",
u?"_s("+t+")":"("+t+")"),$n(e,c,d,null,!0),(s||o||"number"===r)&&$n(e,"blur","$forceUpdate()")}
function Rr(e,t,n){$n(e,"change",Ir(t,
'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(
n&&n.number?"_n(val)":"val")+"})"+(null==e.attrsMap.multiple?"[0]":"")),null,!0)}function Ir(e,t){
var n=Cn(e)
;return null===n.idx?e+"="+t:"var $$exp = "+n.exp+", $$idx = "+n.idx+";if (!Array.isArray($$exp)){"+e+"="+t+"}else{$$exp.splice($$idx, 1, "+t+")}"
}function Fr(e,t){t.value&&yn(e,"textContent","_s("+t.value+")")}function Ur(e,t){t.value&&yn(e,
"innerHTML","_s("+t.value+")")}function Hr(e,t){return Sr(e,t=t?l(l({},ys),t):ys)}function Br(e,t){
var r=(t&&t.warn,t&&t.delimiters?String(t.delimiters)+e:e);if(gs[r])return gs[r];var i={},a=Hr(e,t)
;i.render=Vr(a.render);var o=a.staticRenderFns.length;i.staticRenderFns=new Array(o);for(
var s=0;s<o;s++)i.staticRenderFns[s]=Vr(a.staticRenderFns[s]);return gs[r]=i}function Vr(e){try{
return new Function(e)}catch(e){return p}}function zr(e){if(e.outerHTML)return e.outerHTML
;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var Jr,Kr,
qr=n("slot,component",!0),Wr=Object.prototype.hasOwnProperty,Zr=/-(\w)/g,Gr=o(function(e){
return e.replace(Zr,function(e,t){return t?t.toUpperCase():""})}),Yr=o(function(e){return e.charAt(0
).toUpperCase()+e.slice(1)}),Qr=/([^-])([A-Z])/g,Xr=o(function(e){return e.replace(Qr,"$1-$2"
).replace(Qr,"$1-$2").toLowerCase()}),ei=Object.prototype.toString,ti="[object Object]",ni=function(
){return!1},ri=function(e){return e},ii={optionMergeStrategies:Object.create(null),silent:!1,
devtools:!1,errorHandler:null,ignoredElements:null,keyCodes:Object.create(null),isReservedTag:ni,
isUnknownElement:ni,getTagNamespace:p,parsePlatformTagName:ri,mustUseProp:ni,_assetTypes:[
"component","directive","filter"],_lifecycleHooks:["beforeCreate","created","beforeMount","mounted",
"beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],_maxUpdateCount:100}
,ai=/[^\w.$]/,oi="__proto__"in{},si="undefined"!=typeof window,
ci=si&&window.navigator.userAgent.toLowerCase(),li=ci&&/msie|trident/.test(ci),ui=ci&&0<ci.indexOf(
"msie 9.0"),fi=ci&&0<ci.indexOf("edge/"),di=ci&&0<ci.indexOf("android"),
pi=ci&&/iphone|ipad|ipod|ios/.test(ci),vi=function(){return void 0===Jr&&(
Jr=!si&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),Jr},
hi=si&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,mi=function(){function e(){r=!1;for(var e=n.slice(0),
t=n.length=0;t<e.length;t++)e[t]()}var t,n=[],r=!1;if("undefined"!=typeof Promise&&b(Promise)){
var i=Promise.resolve(),a=function(e){console.error(e)};t=function(){i.then(e)["catch"](a),
pi&&setTimeout(p)}}else if("undefined"==typeof MutationObserver||!b(MutationObserver
)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())t=function(){setTimeout(e,0)
};else{var o=1,s=new MutationObserver(e),c=document.createTextNode(String(o));s.observe(c,{
characterData:!0}),t=function(){o=(o+1)%2,c.data=String(o)}}return function(e,i){var a;if(n.push(
function(){e&&e.call(i),a&&a(i)}),r||(r=!0,t()),!e&&"undefined"!=typeof Promise)return new Promise(
function(e){a=e})}}();Kr="undefined"!=typeof Set&&b(Set)?Set:function(){function e(){
this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},
e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null
)},e}();var gi,yi=p,_i=0,bi=function(){this.id=_i++,this.subs=[]};bi.prototype.addSub=function(e){
this.subs.push(e)},bi.prototype.removeSub=function(e){r(this.subs,e)},bi.prototype.depend=function(
){bi.target&&bi.target.addDep(this)},bi.prototype.notify=function(){for(var e=this.subs.slice(),t=0,
n=e.length;t<n;t++)e[t].update()},bi.target=null;var $i=[],wi=Array.prototype,xi=Object.create(wi);[
"push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=wi[e];y(xi,e,
function(){for(var n=arguments,r=arguments.length,i=new Array(r);r--;)i[r]=n[r];var a,o=t.apply(this
,i),s=this.__ob__;switch(e){case"push":case"unshift":a=i;break;case"splice":a=i.slice(2)}
return a&&s.observeArray(a),s.dep.notify(),o})});var Ci=Object.getOwnPropertyNames(xi),ki={
shouldConvert:!0,isSettingProps:!1},Ai=function(e){(this.value=e,this.dep=new bi,this.vmCount=0,y(e,
"__ob__",this),Array.isArray(e))?((oi?x:C)(e,xi,Ci),this.observeArray(e)):this.walk(e)}
;Ai.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)A(e,t[n],e[t[n]])},
Ai.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)k(e[t])}
;var Oi=ii.optionMergeStrategies;Oi.data=function(e,t,n){return n?e||t?function(){
var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):void 0;return r?E(r,i):i
}:void 0:t?"function"!=typeof t?e:e?function(){return E(t.call(this),e.call(this))}:t:e},
ii._lifecycleHooks.forEach(function(e){Oi[e]=j}),ii._assetTypes.forEach(function(e){Oi[e+"s"]=N}),
Oi.watch=function(e,t){if(!t)return e;if(!e)return t;var n={};for(var r in l(n,e),t){var i=n[r],
a=t[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(a):[a]}return n},
Oi.props=Oi.methods=Oi.computed=function(e,t){if(!t)return e;if(!e)return t;var n=Object.create(null
);return l(n,e),l(n,t),n};var Si=function(e,t){return void 0===t?e:t},Ti=Object.freeze({
defineReactive:A,_toString:e,toNumber:t,makeMap:n,isBuiltInTag:qr,remove:r,hasOwn:i,isPrimitive:a,
cached:o,camelize:Gr,capitalize:Yr,hyphenate:Xr,bind:s,toArray:c,extend:l,isObject:u,
isPlainObject:f,toObject:d,noop:p,no:ni,identity:ri,genStaticKeys:v,looseEqual:h,looseIndexOf:m,
isReserved:g,def:y,parsePath:_,hasProto:oi,inBrowser:si,UA:ci,isIE:li,isIE9:ui,isEdge:fi,
isAndroid:di,isIOS:pi,isServerRendering:vi,devtools:hi,nextTick:mi,get _Set(){return Kr},
mergeOptions:M,resolveAsset:P,warn:yi,formatComponentName:gi,validateProp:R}),Ei=[],ji={},Ni=!1,
Li=!1,Di=0,Mi=0,Pi=function(e,t,n,r){void 0===r&&(r={}),(this.vm=e)._watchers.push(this),
this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,
this.expression=t.toString(),this.cb=n,this.id=++Mi,this.active=!0,this.dirty=this.lazy,this.deps=[]
,this.newDeps=[],this.depIds=new Kr,this.newDepIds=new Kr,"function"==typeof t?this.getter=t:(
this.getter=_(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()}
;Pi.prototype.get=function(){$(this);var e=this.getter.call(this.vm,this.vm);return this.deep&&z(e),
w(),this.cleanupDeps(),e},Pi.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(
this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},
Pi.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t]
;e.newDepIds.has(n.id)||n.removeSub(e)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r
,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},
Pi.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():V(this)},
Pi.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||u(e)||this.deep){
var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){if(
!ii.errorHandler)throw e;ii.errorHandler.call(null,e,this.vm)}else this.cb.call(this.vm,e,t)}}},
Pi.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Pi.prototype.depend=function(
){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend()},Pi.prototype.teardown=function(){
var e=this;if(this.active){this.vm._isBeingDestroyed||this.vm._vForRemoving||r(this.vm._watchers,
this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1}};var Ri=new Kr,Ii={
enumerable:!0,configurable:!0,get:p,set:p},Fi=function(e,t,n,r,i,a,o){this.tag=e,this.data=t,
this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=a,this.functionalContext=void 0,
this.key=t&&t.key,this.componentOptions=o,this.child=void 0,this.parent=void 0,this.raw=!1,
this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1},
Ui=function(){var e=new Fi;return e.text="",e.isComment=!0,e},Hi=null,Bi={init:fe,prepatch:de,
insert:pe,destroy:ve},Vi=Object.keys(Bi),zi=0;Me(Ie),ee(Ie),De(Ie),oe(Ie),je(Ie);var Ji=[String,
RegExp],qi={KeepAlive:{name:"keep-alive","abstract":!0,props:{include:Ji,exclude:Ji},
created:function(){this.cache=Object.create(null)},render:function(){var e=Ae(this.$slots["default"]
);if(e&&e.componentOptions){var t=e.componentOptions,n=t.Ctor.options.name||t.tag;if(n&&(
this.include&&!Ve(this.include,n)||this.exclude&&Ve(this.exclude,n)))return e
;var r=null==e.key?t.Ctor.cid+(t.tag?"::"+t.tag:""):e.key
;this.cache[r]?e.child=this.cache[r].child:this.cache[r]=e,e.data.keepAlive=!0}return e},
destroyed:function(){var e=this;for(var t in this.cache){var n=e.cache[t];se(n.child,"deactivated"),
n.child.$destroy()}}}};ze(Ie),Object.defineProperty(Ie.prototype,"$isServer",{get:vi}),
Ie.version="2.1.6";var Wi,Zi,Gi=n("input,textarea,option,select"),Yi=function(e,t){
return"value"===t&&Gi(e
)||"selected"===t&&"option"===e||"checked"===t&&"input"===e||"muted"===t&&"video"===e},Qi=n(
"contenteditable,draggable,spellcheck"),Xi=n(
"allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"
),ea="http://www.w3.org/1999/xlink",ta=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},
na=function(e){return ta(e)?e.slice(6,e.length):""},ra=function(e){return null==e||!1===e},ia={
svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML",
xhtml:"http://www.w3.org/1999/xhtml"},aa=n(
"html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"
),oa=n(
"svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view"
,!0),sa=function(e){return"pre"===e},ca=function(e){return aa(e)||oa(e)},la=Object.create(null),
ua=Object.freeze({createElement:Xe,createElementNS:et,createTextNode:tt,createComment:nt,
insertBefore:rt,removeChild:it,appendChild:at,parentNode:ot,nextSibling:st,tagName:ct,
setTextContent:lt,setAttribute:ut}),fa={create:function(e,t){ft(t)},update:function(e,t){
e.data.ref!==t.data.ref&&(ft(e,!0),ft(t))},destroy:function(e){ft(e,!0)}},da=new Fi("",{},[]),pa=[
"create","activate","update","remove","destroy"],va={create:gt,update:gt,destroy:function(e){gt(e,da
)}},ha=Object.create(null),ma=[fa,va],ga={create:wt,update:wt},ya={create:Ct,update:Ct},_a={
create:Ot,update:Ot},ba={create:St,update:St},$a=o(function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/
;return e.split(n).forEach(function(e){if(e){var n=e.split(r);1<n.length&&(t[n[0].trim()]=n[1].trim(
))}}),t}),wa=/^--/,xa=/\s*!important$/,Ca=function(e,t,n){wa.test(t)?e.style.setProperty(t,n
):xa.test(n)?e.style.setProperty(t,n.replace(xa,""),"important"):e.style[Aa(t)]=n},ka=["Webkit",
"Moz","ms"],Aa=o(function(e){if(Zi=Zi||document.createElement("div"),"filter"!==(e=Gr(e)
)&&e in Zi.style)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<ka.length;n++){
var r=ka[n]+t;if(r in Zi.style)return r}}),Oa={create:Lt,update:Lt},Sa=si&&!ui,Ta="transition",
Ea="animation",ja="transition",Na="transitionend",La="animation",Da="animationend";Sa&&(
void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(ja="WebkitTransition",
Na="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(
La="WebkitAnimation",Da="webkitAnimationEnd"));var Ma=si&&window.requestAnimationFrame||setTimeout,
Pa=/\b(transform|all)(,|$)/,Ra=o(function(e){return{enterClass:e+"-enter",leaveClass:e+"-leave",
appearClass:e+"-enter",enterActiveClass:e+"-enter-active",leaveActiveClass:e+"-leave-active",
appearActiveClass:e+"-enter-active"}}),Ha=mt({nodeOps:ua,modules:[ga,ya,_a,ba,Oa,si?{create:qt,
activate:qt,remove:function(e,t){e.data.show?t():zt(e,t)}}:{}].concat(ma)})
;ui&&document.addEventListener("selectionchange",function(){var e=document.activeElement
;e&&e.vmodel&&Xt(e,"input")});var za={model:{inserted:function(e,t,n){if("select"===n.tag){
var r=function(){Wt(e,t,n.context)};r(),(li||fi)&&setTimeout(r,0)
}else"textarea"!==n.tag&&"text"!==e.type||(e._vModifiers=t.modifiers,t.modifiers.lazy||(di||(
e.addEventListener("compositionstart",Yt),e.addEventListener("compositionend",Qt)),ui&&(e.vmodel=!0)
))},componentUpdated:function(e,t,n){"select"===n.tag&&(Wt(e,t,n.context),(e.multiple?t.value.some(
function(t){return Zt(t,e.options)}):t.value!==t.oldValue&&Zt(t.value,e.options))&&Xt(e,"change"))}
},show:{bind:function(e,t,n){var r=t.value,i=(n=en(n)).data&&n.data.transition,
a=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i&&!ui?(n.data.show=!0,Vt(n,
function(){e.style.display=a})):e.style.display=r?a:"none"},update:function(e,t,n){var r=t.value
;r!==t.oldValue&&((n=en(n)).data&&n.data.transition&&!ui?(n.data.show=!0,r?Vt(n,function(){
e.style.display=e.__vOriginalDisplay}):zt(n,function(){e.style.display="none"})
):e.style.display=r?e.__vOriginalDisplay:"none")}}},Ja={name:String,appear:Boolean,css:Boolean,
mode:String,type:String,enterClass:String,leaveClass:String,enterActiveClass:String,
leaveActiveClass:String,appearClass:String,appearActiveClass:String},Ka={name:"transition",props:Ja,
"abstract":!0,render:function(e){var t=this,n=this.$slots["default"];if(n&&(n=n.filter(function(e){
return e.tag})).length){var r=this.mode,i=n[0];if(an(this.$vnode))return i;var a=tn(i);if(!a
)return i;if(this._leaving)return rn(e,i);var o=a.key=null==a.key||a.isStatic?"__v"+(a.tag+this._uid
)+"__":a.key,s=(a.data||(a.data={})).transition=nn(this),u=tn(this._vnode);if(
a.data.directives&&a.data.directives.some(function(e){return"show"===e.name})&&(a.data.show=!0),
u&&u.data&&u.key!==o){var f=u.data.transition=l({},s);if("out-in"===r)return this._leaving=!0,be(f,
"afterLeave",function(){t._leaving=!1,t.$forceUpdate()},o),rn(e,i);if("in-out"===r){var d,
p=function(){d()};be(s,"afterEnter",p,o),be(s,"enterCancelled",p,o),be(f,"delayLeave",function(e){
d=e},o)}}return i}}},qa=l({tag:String,moveClass:String},Ja);delete qa.mode;var Za={Transition:Ka,
TransitionGroup:{props:qa,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",
n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots["default"]||[],
a=this.children=[],o=nn(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key
).indexOf("__vlist")&&(a.push(c),((n[c.key]=c).data||(c.data={})).transition=o)}if(r){for(var l=[],
u=[],f=0;f<r.length;f++){var d=r[f];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),
n[d.key]?l.push(d):u.push(d)}this.kept=e(t,null,l),this.removed=u}return e(t,null,a)},
beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},
updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move"
;e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(on),e.forEach(sn),e.forEach(cn),
document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Rt(n,t),
r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Na,n._moveCb=function e(r){
r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Na,e),n._moveCb=null,It(n,t))})}}))},
methods:{hasMove:function(e,t){if(!Sa)return!1;if(null!=this._hasMove)return this._hasMove;Rt(e,t)
;var n=Ut(e);return It(e,t),this._hasMove=n.hasTransform}}}};Ie.config.isUnknownElement=Ye,
Ie.config.isReservedTag=ca,Ie.config.getTagNamespace=Ge,Ie.config.mustUseProp=Yi,l(
Ie.options.directives,za),l(Ie.options.components,Za),Ie.prototype.__patch__=si?Ha:p,
Ie.prototype.$mount=function(e,t){return e=e&&si?Qe(e):void 0,this._mount(e,t)},setTimeout(function(
){ii.devtools&&hi&&hi.emit("init",Ie)},0);var Ga,Ya=!!si&&ln("\n","&#10;"),Qa=n(
"area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr",!0),
Xa=n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source",!0),eo=n(
"address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"
,!0),to=/([^\s"'<>\/=]+)/,no=/(?:=)/,ro=[/"([^"]*)"+/.source,/'([^']*)'+/.source,
/([^\s"'=<>`]+)/.source],io=new RegExp("^\\s*"+to.source+"(?:\\s*("+no.source+")\\s*(?:"+ro.join("|"
)+"))?"),ao="[a-zA-Z_][\\w\\-\\.]*",oo="((?:"+ao+"\\:)?"+ao+")",so=new RegExp("^<"+oo),
co=/^\s*(\/?)>/,lo=new RegExp("^<\\/"+oo+"[^>]*>"),uo=/^<!DOCTYPE [^>]+>/i,fo=/^<!--/,po=/^<!\[/,
vo=!1;"x".replace(/x(.)?/g,function(e,t){vo=""===t});var ho,mo,go,yo,_o,bo,wo,xo,Co,ko,Ao,Oo,So,To,
Eo,jo,No,Lo,Do,Mo,Po,Ro,Fo=n("script,style",!0),Uo=function(e){
return"lang"===e.name&&"html"!==e.value},Ho=function(e,t,n){return!(!Fo(e)&&(
!t||1!==n.length||"template"===e&&!n[0].attrs.some(Uo)))},Bo={},Vo=/&lt;/g,zo=/&gt;/g,Jo=/&#10;/g,
Ko=/&amp;/g,qo=/&quot;/g,Wo=/\{\{((?:.|\n)+?)\}\}/g,Zo=/[-.*+?^${}()|[\]\/\\]/g,Go=o(function(e){
var t=e[0].replace(Zo,"\\$&"),n=e[1].replace(Zo,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")})
,Yo=/^v-|^@|^:/,Qo=/(.*?)\s+(?:in|of)\s+(.*)/,Xo=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,
es=/^:|^v-bind:/,ts=/^@|^v-on:/,ns=/:(.*)$/,rs=/\.[^.]+/g,is=o(un),as=/^xmlns:NS\d+/,os=/^NS\d+:/,
ss=o(Gn),cs=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
ls=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
us={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,"delete":[8,46]},fs={
stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",
self:"if($event.target !== $event.currentTarget)return;",ctrl:"if(!$event.ctrlKey)return;",
shift:"if(!$event.shiftKey)return;",alt:"if(!$event.altKey)return;",
meta:"if(!$event.metaKey)return;"},ds={bind:or,cloak:p},hs=[{staticKeys:["staticClass"],
transformNode:Tr,genData:Er},{staticKeys:["staticStyle"],transformNode:jr,genData:Nr}],ms={model:Lr,
text:Fr,html:Ur},gs=Object.create(null),ys={expectHTML:!0,modules:hs,staticKeys:v(hs),directives:ms,
isReservedTag:ca,isUnaryTag:Qa,mustUseProp:Yi,getTagNamespace:Ge,isPreTag:sa},_s=o(function(e){
var t=Qe(e);return t&&t.innerHTML}),bs=Ie.prototype.$mount;return Ie.prototype.$mount=function(e,t){
if((e=e&&Qe(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(
!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=_s(r));else{if(
!r.nodeType)return this;r=r.innerHTML}else e&&(r=zr(e));if(r){var i=Br(r,{warn:yi,
shouldDecodeNewlines:Ya,delimiters:n.delimiters},this),a=i.render,o=i.staticRenderFns;n.render=a,
n.staticRenderFns=o}}return bs.call(this,e,t)},Ie.compile=Br,Ie}),function(t,n){
"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(
):"function"==typeof define&&define.amd?define(n):t.VueResource=n()}(this,function(){"use strict"
;function t(t){this.state=it,this.value=void 0,this.deferred=[];var n=this;try{t(function(t){
n.resolve(t)},function(t){n.reject(t)})}catch(t){n.reject(t)}}function n(t,n){
t instanceof Promise?this.promise=t:this.promise=new Promise(t.bind(n)),this.context=n}function e(t
){at=t.util,ct=t.config.debug||!t.config.silent}function o(t){
"undefined"!=typeof console&&ct&&console.warn("[VueResource warn]: "+t)}function r(t){
"undefined"!=typeof console&&console.error(t)}function i(t,n){return at.nextTick(t,n)}function u(t){
return t.replace(/^\s*|\s*$/g,"")}function s(t){return t?t.toLowerCase():""}function c(t){
return t?t.toUpperCase():""}function a(t){return"string"==typeof t}function f(t){
return!0===t||!1===t}function h(t){return"function"==typeof t}function p(t){
return null!==t&&"object"==typeof t}function l(t){return p(t)&&Object.getPrototypeOf(t
)==Object.prototype}function d(t){return"undefined"!=typeof Blob&&t instanceof Blob}function m(t){
return"undefined"!=typeof FormData&&t instanceof FormData}function y(t,e,o){var r=n.resolve(t)
;return arguments.length<2?r:r.then(e,o)}function v(t,n,e){return h(e=e||{})&&(e=e.call(n)),g(
t.bind({$vm:n,$options:e}),t,{$options:e})}function b(t,n){var e,o;if(t&&"number"==typeof t.length
)for(e=0;e<t.length;e++)n.call(t[e],t[e],e);else if(p(t))for(o in t)t.hasOwnProperty(o)&&n.call(t[o]
,t[o],o);return t}function g(t){return ft.call(arguments,1).forEach(function(n){x(t,n,!0)}),t}
function w(t){return ft.call(arguments,1).forEach(function(n){for(var e in n)void 0===t[e]&&(
t[e]=n[e])}),t}function T(t){return ft.call(arguments,1).forEach(function(n){x(t,n)}),t}function x(t
,n,e){for(var o in n)e&&(l(n[o])||ht(n[o]))?(l(n[o])&&!l(t[o])&&(t[o]={}),ht(n[o])&&!ht(t[o])&&(
t[o]=[]),x(t[o],n[o],e)):void 0!==n[o]&&(t[o]=n[o])}function j(t,n){var e=n(t);return a(t.root
)&&!e.match(/^(https?:)?\//)&&(e=t.root+"/"+e),e}function E(t,n){var e=Object.keys(k.options.params)
,o={},r=n(t);return b(t.params,function(t,n){-1===e.indexOf(n)&&(o[n]=t)}),(o=k.params(o))&&(r+=(
-1==r.indexOf("?")?"?":"&")+o),r}function O(t,n,e){var o=P(t),r=o.expand(n);return e&&e.push.apply(e
,o.vars),r}function P(t){var n=["+","#",".","/",";","?","&"],e=[];return{vars:e,expand:function(o){
return t.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(t,r,i){if(r){var u=null,s=[];if(
-1!==n.indexOf(r.charAt(0))&&(u=r.charAt(0),r=r.substr(1)),r.split(/,/g).forEach(function(t){
var n=/([^:\*]*)(?::(\d+)|(\*))?/.exec(t);s.push.apply(s,C(o,u,n[1],n[2]||n[3])),e.push(n[1])}),
u&&"+"!==u){var c=",";return"?"===u?c="&":"#"!==u&&(c=u),(0!==s.length?u:"")+s.join(c)}
return s.join(",")}return U(i)})}}}function C(t,n,e,o){var r=t[e],i=[];if($(r)&&""!==r)if(
"string"==typeof r||"number"==typeof r||"boolean"==typeof r)r=r.toString(),o&&"*"!==o&&(
r=r.substring(0,parseInt(o,10))),i.push(R(n,r,A(n)?e:null));else if("*"===o)Array.isArray(r
)?r.filter($).forEach(function(t){i.push(R(n,t,A(n)?e:null))}):Object.keys(r).forEach(function(t){$(
r[t])&&i.push(R(n,r[t],t))});else{var u=[];Array.isArray(r)?r.filter($).forEach(function(t){u.push(
R(n,t))}):Object.keys(r).forEach(function(t){$(r[t])&&(u.push(encodeURIComponent(t)),u.push(R(n,
r[t].toString())))}),A(n)?i.push(encodeURIComponent(e)+"="+u.join(",")):0!==u.length&&i.push(u.join(
","))}else";"===n?i.push(encodeURIComponent(e)):""!==r||"&"!==n&&"?"!==n?""===r&&i.push(""):i.push(
encodeURIComponent(e)+"=");return i}function $(t){return null!=t}function A(t){
return";"===t||"&"===t||"?"===t}function R(t,n,e){return n="+"===t||"#"===t?U(n):encodeURIComponent(
n),e?encodeURIComponent(e)+"="+n:n}function U(t){return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(t
){return/%[0-9A-Fa-f]/.test(t)||(t=encodeURI(t)),t}).join("")}function S(t){var n=[],e=O(t.url,
t.params,n);return n.forEach(function(n){delete t.params[n]}),e}function k(t,n){var e,o=this||{},r=t
;return a(t)&&(r={url:t,params:n}),r=g({},k.options,o.$options,r),k.transforms.forEach(function(t){
e=I(t,e,o.$vm)}),e(r)}function I(t,n,e){return function(o){return t.call(e,o,n)}}function H(t,n,e){
var o,r=ht(n),i=l(n);b(n,function(n,u){o=p(n)||ht(n),e&&(u=e+"["+(i||o?u:"")+"]"),!e&&r?t.add(n.name
,n.value):o?H(t,n,u):t.add(u,n)})}function L(t){return new n(function(n){var e=new XDomainRequest,
o=function(o){var r=o.type,i=0;"load"===r?i=200:"error"===r&&(i=500),n(t.respondWith(e.responseText,
{status:i}))};t.abort=function(){return e.abort()},e.open(t.method,t.getUrl()),e.timeout=0,
e.onload=o,e.onerror=o,e.ontimeout=o,e.onprogress=function(){},e.send(t.getBody())})}function N(t,n
){!f(t.crossOrigin)&&q(t)&&(t.crossOrigin=!0),t.crossOrigin&&(yt||(t.client=L),delete t.emulateHTTP)
,n()}function q(t){var n=k.parse(k(t));return n.protocol!==mt.protocol||n.host!==mt.host}function B(
t,n){m(t.body)?t.headers["delete"]("Content-Type"):(p(t.body)||ht(t.body))&&(t.emulateJSON?(
t.body=k.params(t.body),t.headers.set("Content-Type","application/x-www-form-urlencoded")
):t.body=JSON.stringify(t.body)),n(function(t){return Object.defineProperty(t,"data",{get:function(
){return this.body},set:function(t){this.body=t}}),t.bodyText?y(t.text(),function(n){
var e=t.headers.get("Content-Type");if(a(e)&&0===e.indexOf("application/json"))try{
t.body=JSON.parse(n)}catch(n){t.body=null}else t.body=n;return t}):t})}function J(t){return new n(
function(n){var e,o,r=t.jsonp||"callback",i="_jsonp"+Math.random().toString(36).substr(2),u=null
;e=function(e){var r=e.type,s=0;"load"===r&&null!==u?s=200:"error"===r&&(s=500),n(t.respondWith(u,{
status:s})),delete window[i],document.body.removeChild(o)},t.params[r]=i,window[i]=function(t){
u=JSON.stringify(t)},(o=document.createElement("script")).src=t.getUrl(),o.type="text/javascript",
o.async=!0,o.onload=e,o.onerror=e,document.body.appendChild(o)})}function D(t,n){
"JSONP"==t.method&&(t.client=J),n(function(n){if("JSONP"==t.method)return y(n.json(),function(t){
return n.body=t,n})})}function M(t,n){h(t.before)&&t.before.call(this,t),n()}function X(t,n){
t.emulateHTTP&&/^(PUT|PATCH|DELETE)$/i.test(t.method)&&(t.headers.set("X-HTTP-Method-Override",
t.method),t.method="POST"),n()}function F(t,n){b(pt({},Z.headers.common,
t.crossOrigin?{}:Z.headers.custom,Z.headers[s(t.method)]),function(n,e){t.headers.has(e
)||t.headers.set(e,n)}),n()}function W(t,n){var e;t.timeout&&(e=setTimeout(function(){t.abort()},
t.timeout)),n(function(){clearTimeout(e)})}function G(t){return new n(function(n){
var e=new XMLHttpRequest,o=function(){var r=t.respondWith("response"in e?e.response:e.responseText,{
status:1223===e.status?204:e.status,statusText:1223===e.status?"No Content":u(e.statusText)});b(u(
e.getAllResponseHeaders()).split("\n"),function(t){r.headers.append(t.slice(0,t.indexOf(":")),
t.slice(t.indexOf(":")+1))}),n(r)};t.abort=function(){return e.abort()},t.progress&&(
"GET"===t.method?e.addEventListener("progress",t.progress):/^(POST|PUT)$/i.test(t.method
)&&e.upload.addEventListener("progress",t.progress)),e.open(t.method,t.getUrl(),!0),
"responseType"in e&&(e.responseType="blob"),!0===t.credentials&&(e.withCredentials=!0),
t.headers.forEach(function(t,n){e.setRequestHeader(n,t)}),e.timeout=0,e.onload=o,e.onerror=o,e.send(
t.getBody())})}function V(t){function e(e){return new n(function(n){function s(){h(r=i.pop()
)?r.call(t,e,c):(o("Invalid interceptor of type "+typeof r+", must be a function"),c())}function c(e
){if(h(e))u.unshift(e);else if(p(e))return u.forEach(function(n){e=y(e,function(e){return n.call(t,e
)||e})}),void y(e,n);s()}s()},t)}var r,i=[_],u=[];return p(t)||(t=null),e.use=function(t){i.push(t)}
,e}function _(t,n){n((t.client||G)(t))}function z(t,n){return Object.keys(t).reduce(function(t,e){
return s(n)===s(e)?e:t},null)}function K(t){if(/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)
)throw new TypeError("Invalid character in header field name");return u(t)}function Q(t){
return new n(function(n){var e=new FileReader;e.readAsText(t),e.onload=function(){n(e.result)}})}
function Y(t){return 0===t.type.indexOf("text")||-1!==t.type.indexOf("json")}function Z(t){
var e=this||{},o=V(e.$vm);return w(t||{},e.$options,Z.options),Z.interceptors.forEach(function(t){
o.use(t)}),o(new wt(t)).then(function(t){return t.ok?t:n.reject(t)},function(t){
return t instanceof Error&&r(t),n.reject(t)})}function tt(t,n,e,o){var r=this||{},i={};return b(
e=pt({},tt.actions,e),function(e,u){e=g({url:t,params:pt({},n)},o,e),i[u]=function(){return(
r.$http||Z)(nt(e,arguments))}}),i}function nt(t,n){var e,o=pt({},t),r={};switch(n.length){case 2:
r=n[0],e=n[1];break;case 1:/^(POST|PUT|PATCH)$/i.test(o.method)?e=n[0]:r=n[0];break;case 0:break
;default:throw"Expected up to 4 arguments [params, body], got "+n.length+" arguments"}
return o.body=e,o.params=pt({},o.params,r),o}function et(t){et.installed||(e(t),t.url=k,t.http=Z,
t.resource=tt,t.Promise=n,Object.defineProperties(t.prototype,{$url:{get:function(){return v(t.url,
this,this.$options.url)}},$http:{get:function(){return v(t.http,this,this.$options.http)}},
$resource:{get:function(){return t.resource.bind(this)}},$promise:{get:function(){var n=this
;return function(e){return new t.Promise(e,n)}}}}))}var ot=0,rt=1,it=2;t.reject=function(n){
return new t(function(t,e){e(n)})},t.resolve=function(n){return new t(function(t){t(n)})},
t.all=function(n){return new t(function(e,o){function r(t){return function(o){u[t]=o,(i+=1
)===n.length&&e(u)}}var i=0,u=[];0===n.length&&e(u);for(var s=0;s<n.length;s+=1)t.resolve(n[s]
).then(r(s),o)})},t.race=function(n){return new t(function(e,o){for(var r=0;r<n.length;r+=1
)t.resolve(n[r]).then(e,o)})};var ut=t.prototype;ut.resolve=function(t){var n=this;if(n.state===it){
if(t===n)throw new TypeError("Promise settled with itself.");var e=!1;try{var o=t&&t.then;if(
null!==t&&"object"==typeof t&&"function"==typeof o)return void o.call(t,function(t){e||n.resolve(t),
e=!0},function(t){e||n.reject(t),e=!0})}catch(t){return void(e||n.reject(t))}n.state=ot,n.value=t,
n.notify()}},ut.reject=function(t){var n=this;if(n.state===it){if(t===n)throw new TypeError(
"Promise settled with itself.");n.state=rt,n.value=t,n.notify()}},ut.notify=function(){var t=this;i(
function(){if(t.state!==it)for(;t.deferred.length;){var n=t.deferred.shift(),e=n[0],o=n[1],r=n[2],
i=n[3];try{t.state===ot?r("function"==typeof e?e.call(void 0,t.value):t.value):t.state===rt&&(
"function"==typeof o?r(o.call(void 0,t.value)):i(t.value))}catch(t){i(t)}}})},ut.then=function(n,e){
var o=this;return new t(function(t,r){o.deferred.push([n,e,t,r]),o.notify()})},ut["catch"]=function(
t){return this.then(void 0,t)},"undefined"==typeof Promise&&(window.Promise=t),n.all=function(t,e){
return new n(Promise.all(t),e)},n.resolve=function(t,e){return new n(Promise.resolve(t),e)},
n.reject=function(t,e){return new n(Promise.reject(t),e)},n.race=function(t,e){return new n(
Promise.race(t),e)};var st=n.prototype;st.bind=function(t){return this.context=t,this},
st.then=function(t,e){return t&&t.bind&&this.context&&(t=t.bind(this.context)),
e&&e.bind&&this.context&&(e=e.bind(this.context)),new n(this.promise.then(t,e),this.context)},
st["catch"]=function(t){return t&&t.bind&&this.context&&(t=t.bind(this.context)),new n(
this.promise["catch"](t),this.context)};var ct=!(st["finally"]=function(t){return this.then(
function(n){return t.call(this),n},function(n){return t.call(this),Promise.reject(n)})}),at={},ft=[
].slice,ht=Array.isArray,pt=Object.assign||T,lt=document.documentMode,dt=document.createElement("a")
;k.options={url:"",root:null,params:{}},k.transforms=[S,E,j],k.params=function(t){var n=[],
e=encodeURIComponent;return n.add=function(t,n){h(n)&&(n=n()),null===n&&(n=""),this.push(e(t)+"="+e(
n))},H(n,t),n.join("&").replace(/%20/g,"+")},k.parse=function(t){return lt&&(dt.href=t,t=dt.href),
dt.href=t,{href:dt.href,protocol:dt.protocol?dt.protocol.replace(/:$/,""):"",port:dt.port,
host:dt.host,hostname:dt.hostname,pathname:"/"===dt.pathname.charAt(0)?dt.pathname:"/"+dt.pathname,
search:dt.search?dt.search.replace(/^\?/,""):"",hash:dt.hash?dt.hash.replace(/^#/,""):""}}
;var mt=k.parse(location.href),yt="withCredentials"in new XMLHttpRequest,vt=function(t,n){if(!(
t instanceof n))throw new TypeError("Cannot call a class as a function")},bt=function(){function t(n
){var e=this;vt(this,t),this.map={},b(n,function(t,n){return e.append(n,t)})}
return t.prototype.has=function(t){return null!==z(this.map,t)},t.prototype.get=function(t){
var n=this.map[z(this.map,t)];return n?n[0]:null},t.prototype.getAll=function(t){return this.map[z(
this.map,t)]||[]},t.prototype.set=function(t,n){this.map[K(z(this.map,t)||t)]=[u(n)]},
t.prototype.append=function(t,n){var e=this.getAll(t);e.length?e.push(u(n)):this.set(t,n)},
t.prototype["delete"]=function(t){delete this.map[z(this.map,t)]},t.prototype.forEach=function(t,n){
var e=this;b(this.map,function(o,r){b(o,function(o){return t.call(n,o,r,e)})})},t}(),gt=function(){
function t(n,e){var o=e.url,r=e.headers,i=e.status,u=e.statusText;vt(this,t),this.url=o,
this.ok=200<=i&&i<300,this.status=i||0,this.statusText=u||"",this.headers=new bt(r),a(this.body=n
)?this.bodyText=n:d(n)&&(Y(this.bodyBlob=n)&&(this.bodyText=Q(n)))}return t.prototype.blob=function(
){return y(this.bodyBlob)},t.prototype.text=function(){return y(this.bodyText)},
t.prototype.json=function(){return y(this.text(),function(t){return JSON.parse(t)})},t}(),
wt=function(){function t(n){vt(this,t),this.body=null,this.params={},pt(this,n,{method:c(
n.method||"GET")}),this.headers instanceof bt||(this.headers=new bt(this.headers))}
return t.prototype.getUrl=function(){return k(this)},t.prototype.getBody=function(){return this.body
},t.prototype.respondWith=function(t,n){return new gt(t,pt(n||{},{url:this.getUrl()}))},t}(),Tt={
"X-Requested-With":"XMLHttpRequest"},xt={Accept:"application/json, text/plain, */*"},jt={
"Content-Type":"application/json;charset=utf-8"};return Z.options={},Z.headers={put:jt,post:jt,
patch:jt,"delete":jt,custom:Tt,common:xt},Z.interceptors=[M,W,X,B,D,F,N],["get","delete","head",
"jsonp"].forEach(function(t){Z[t]=function(n,e){return this(pt(e||{},{url:n,method:t}))}}),["post",
"put","patch"].forEach(function(t){Z[t]=function(n,e,o){return this(pt(o||{},{url:n,method:t,body:e}
))}}),tt.actions={get:{method:"GET"},save:{method:"POST"},query:{method:"GET"},update:{method:"PUT"
},remove:{method:"DELETE"},"delete":{method:"DELETE"}},
"undefined"!=typeof window&&window.Vue&&window.Vue.use(et),et}),function(t){if(
"object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if(
"function"==typeof define&&define.amd)define([],t);else{(
"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this
).Clipboard=t()}}(function(){var t;return function t(e,n,o){function i(a,c){if(!n[a]){if(!e[a]){
var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0)
;var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={
exports:{}};e[a][0].call(u.exports,function(t){return i(e[a][1][t]||t)},u,u.exports,t,e,n,o)}
return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a])
;return i}({1:[function(t,e){function o(t,e){for(;t&&t.nodeType!==i;){if(
"function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var i=9;if(
"undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype
;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector
}e.exports=o},{}],2:[function(t,e){function o(t,e,n,o,r){var a=i.apply(this,arguments)
;return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function i(t,e,
n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}var r=t(
"./closest");e.exports=o},{"./closest":1}],3:[function(t,e,n){n.node=function(t){
return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){
var e=Object.prototype.toString.call(t);return void 0!==t&&(
"[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))}
,n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){
return"[object Function]"===Object.prototype.toString.call(t)}},{}],4:[function(t,e){function o(t,e,
n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError(
"Second argument must be a String");if(!c.fn(n))throw new TypeError(
"Third argument must be a Function");if(c.node(t))return i(t,e,n);if(c.nodeList(t))return r(t,e,n)
;if(c.string(t))return a(t,e,n);throw new TypeError(
"First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){
return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function r(t,e,n){
return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){
Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){
return l(document.body,t,e,n)}var c=t("./is"),l=t("delegate");e.exports=o},{"./is":3,delegate:2}],
5:[function(t,e){function o(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if(
"INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute(
"readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),
e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),
i=document.createRange();i.selectNodeContents(t),o.removeAllRanges(),o.addRange(i),e=o.toString()}
return e}e.exports=o},{}],6:[function(t,e){function o(){}o.prototype={on:function(t,e,n){
var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){
function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t
){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,
i=n.length;o<i;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}
),o=n[t],i=[];if(o&&e)for(var r=0,a=o.length;r<a;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r])
;return i.length?n[t]=i:delete n[t],this}},e.exports=o},{}],7:[function(e,n,o){!function(i,r){if(
"function"==typeof t&&t.amd)t(["module","select"],r);else if(void 0!==o)r(n,e("select"));else{
var a={exports:{}};r(a,i.select),i.clipboardAction=a.exports}}(this,function(t,e){"use strict"
;function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e)
)throw new TypeError("Cannot call a class as a function")}var i=n(e),
r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(
t){
return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}
,a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,
o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n
,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=function(){function t(e){o(this,t),
this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function t(
argument_0){var e=0<arguments.length&&void 0!==argument_0?arguments[0]:{};this.action=e.action,
this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,
this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function t(){
this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function t(){
var e=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),
this.fakeHandlerCallback=function(){return e.removeFake()},
this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,
this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",
this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",
this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px"
;var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",
this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(
this.fakeElem),this.selectedText=(0,i["default"])(this.fakeElem),this.copyText()}},{
key:"removeFake",value:function t(){this.fakeHandler&&(this.container.removeEventListener("click",
this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(
this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",
value:function t(){this.selectedText=(0,i["default"])(this.target),this.copyText()}},{
key:"copyText",value:function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1
}this.handleResult(e)}},{key:"handleResult",value:function t(e){this.emitter.emit(
e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,
clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function t(){
this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",
value:function t(){this.removeFake()}},{key:"action",set:function t(argument_0){
var e=0<arguments.length&&void 0!==argument_0?arguments[0]:"copy";if(this._action=e,
"copy"!==this._action&&"cut"!==this._action)throw new Error(
'Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{
key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":r(e)
)||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if(
"copy"===this.action&&e.hasAttribute("disabled"))throw new Error(
'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(
"cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error(
'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
);this._target=e}},get:function t(){return this._target}}]),t}();t.exports=c})},{select:5}],8:[
function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","./clipboard-action",
"tiny-emitter","good-listener"],r);else if(void 0!==o)r(n,e("./clipboard-action"),e("tiny-emitter"),
e("good-listener"));else{var a={exports:{}};r(a,i.clipboardAction,i.tinyEmitter,i.goodListener),
i.clipboard=a.exports}}(this,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{
"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError(
"Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError(
"this hasn't been initialised - super() hasn't been called")
;return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if(
"function"!=typeof e&&null!==e)throw new TypeError(
"Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(
e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(
Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e){
var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var s=i(e),u=i(n),f=i(o),
d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(
t){
return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}
,h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,
o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n
,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(t,n){r(this,e);var o=a(this,
(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}
return c(e,t),h(e,[{key:"resolveOptions",value:function t(argument_0){
var e=0<arguments.length&&void 0!==argument_0?arguments[0]:{}
;this.action="function"==typeof e.action?e.action:this.defaultAction,
this.target="function"==typeof e.target?e.target:this.defaultTarget,
this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===d(e.container
)?e.container:document.body}},{key:"listenClick",value:function t(e){var n=this;this.listener=(0,
f["default"])(e,"click",function(t){return n.onClick(t)})}},{key:"onClick",value:function t(e){
var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),
this.clipboardAction=new s["default"]({action:this.action(n),target:this.target(n),text:this.text(n
),container:this.container,trigger:n,emitter:this})}},{key:"defaultAction",value:function t(e){
return l("action",e)}},{key:"defaultTarget",value:function t(e){var n=l("target",e);if(n
)return document.querySelector(n)}},{key:"defaultText",value:function t(e){return l("text",e)}},{
key:"destroy",value:function t(){this.listener.destroy(),this.clipboardAction&&(
this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function t(
argument_0){var e=0<arguments.length&&void 0!==argument_0?arguments[0]:["copy","cut"],
n="string"==typeof e?[e]:e,o=!!document.queryCommandSupported;return n.forEach(function(t){
o=o&&!!document.queryCommandSupported(t)}),o}}]),e}(u["default"]);t.exports=p})},{
"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});