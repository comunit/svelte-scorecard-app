var app=function(){"use strict";function n(){}function t(n){return n()}function e(){return Object.create(null)}function r(n){n.forEach(t)}function o(n){return"function"==typeof n}function a(n,t){return n!=n?t==t:n!==t||n&&"object"==typeof n||"function"==typeof n}function i(n,t){n.appendChild(t)}function l(n,t,e){n.insertBefore(t,e||null)}function s(n){n.parentNode.removeChild(n)}function c(n){return document.createElement(n)}function u(n){return document.createTextNode(n)}function p(){return u(" ")}function m(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function f(n,t,e){null==e?n.removeAttribute(t):n.setAttribute(t,e)}function d(n){return""===n?void 0:+n}function h(n,t){t=""+t,n.data!==t&&(n.data=t)}let y;function $(n){y=n}function v(){const n=y;return(t,e)=>{const r=n.$$.callbacks[t];if(r){const o=function(n,t){const e=document.createEvent("CustomEvent");return e.initCustomEvent(n,!1,!1,t),e}(t,e);r.slice().forEach(t=>{t.call(n,o)})}}}const g=[],b=Promise.resolve();let _=!1;const x=[],C=[],P=[];function w(n){C.push(n)}function N(){const n=new Set;do{for(;g.length;){const n=g.shift();$(n),k(n.$$)}for(;x.length;)x.shift()();for(;C.length;){const t=C.pop();n.has(t)||(t(),n.add(t))}}while(g.length);for(;P.length;)P.pop()();_=!1}function k(n){n.fragment&&(n.update(n.dirty),r(n.before_render),n.fragment.p(n.dirty,n.ctx),n.dirty=null,n.after_render.forEach(w))}let E;function S(){E={remaining:0,callbacks:[]}}function A(){E.remaining||r(E.callbacks)}function j(n){E.callbacks.push(n)}function D(n,e,a){const{fragment:i,on_mount:l,on_destroy:s,after_render:c}=n.$$;i.m(e,a),w(()=>{const e=l.map(t).filter(o);s?s.push(...e):r(e),n.$$.on_mount=[]}),c.forEach(w)}function L(n,t){n.$$.dirty||(g.push(n),_||(_=!0,b.then(N)),n.$$.dirty=e()),n.$$.dirty[t]=!0}function O(t,o,a,i,l,s){const c=y;$(t);const u=o.props||{},p=t.$$={fragment:null,ctx:null,props:s,update:n,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(c?c.$$.context:[]),callbacks:e(),dirty:null};let m=!1;var f;p.ctx=a?a(t,u,(n,e)=>{p.ctx&&l(p.ctx[n],p.ctx[n]=e)&&(p.bound[n]&&p.bound[n](e),m&&L(t,n))}):u,p.update(),m=!0,r(p.before_render),p.fragment=i(p.ctx),o.target&&(o.hydrate?p.fragment.l((f=o.target,Array.from(f.childNodes))):p.fragment.c(),o.intro&&t.$$.fragment.i&&t.$$.fragment.i(),D(t,o.target,o.anchor),N()),$(c)}class q{$destroy(){var t,e;e=!0,(t=this).$$&&(r(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={}),this.$destroy=n}$on(n,t){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(t),()=>{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}$set(){}}function z(t){var e;return{c(){(e=c("div")).innerHTML="<h1>Player Scoreboard</h1>",e.className="navbar bg-primary"},m(n,t){l(n,e,t)},p:n,i:n,o:n,d(n){n&&s(e)}}}class B extends q{constructor(n){super(),O(this,n,null,z,a,[])}}function M(n){var t;return{c(){t=u("+")},m(n,e){l(n,t,e)},d(n){n&&s(t)}}}function T(n){var t;return{c(){t=u("-")},m(n,e){l(n,t,e)},d(n){n&&s(t)}}}function H(n){var t,e,o,a,i,u;return{c(){(t=c("button")).textContent="+1",e=p(),(o=c("button")).textContent="-1",a=p(),i=c("input"),t.className="btn",o.className="btn btn-dark",f(i,"type","number"),u=[m(t,"click",n.addPoints),m(o,"click",n.removePoints),m(i,"input",n.input_input_handler)]},m(r,s){l(r,t,s),l(r,e,s),l(r,o,s),l(r,a,s),l(r,i,s),i.value=n.points},p(n,t){n.points&&(i.value=t.points)},d(n){n&&(s(t),s(e),s(o),s(a),s(i)),r(u)}}}function I(t){var e,o,a,f,d,y,$,v,g,b,_,x,C;function P(n){return n.showControls?T:M}var w=P(t),N=w(t),k=t.showControls&&H(t);return{c(){e=c("div"),o=c("h1"),a=u(t.name),f=p(),d=c("button"),N.c(),y=p(),($=c("button")).textContent="X",v=p(),g=c("h3"),b=u("Points: "),_=u(t.points),x=p(),k&&k.c(),d.className="btn btn-sm",$.className="btn btn-danger btn-sm",o.className="svelte-1crdzae",g.className="svelte-1crdzae",e.className="card",C=[m(d,"click",t.toggleControls),m($,"click",t.onDelete)]},m(n,t){l(n,e,t),i(e,o),i(o,a),i(o,f),i(o,d),N.m(d,null),i(o,y),i(o,$),i(e,v),i(e,g),i(g,b),i(g,_),i(e,x),k&&k.m(e,null)},p(n,t){n.name&&h(a,t.name),w!==(w=P(t))&&(N.d(1),(N=w(t))&&(N.c(),N.m(d,null))),n.points&&h(_,t.points),t.showControls?k?k.p(n,t):((k=H(t)).c(),k.m(e,null)):k&&(k.d(1),k=null)},i:n,o:n,d(n){n&&s(e),N.d(),k&&k.d(),r(C)}}}function R(n,t,e){const r=v();let{name:o,points:a,showControls:i=!1}=t;return n.$set=(n=>{"name"in n&&e("name",o=n.name),"points"in n&&e("points",a=n.points),"showControls"in n&&e("showControls",i=n.showControls)}),{name:o,points:a,showControls:i,addPoints:()=>{const n=a+=1;return e("points",a),n},removePoints:()=>{const n=a-=1;return e("points",a),n},toggleControls:()=>{const n=i=!i;return e("showControls",i),n},onDelete:()=>{r("removePlayer",o)},input_input_handler:function(){a=d(this.value),e("points",a)}}}class W extends q{constructor(n){super(),O(this,n,R,I,a,["name","points","showControls"])}}function X(t){var e,o,a,u,d,h,y;return{c(){e=c("form"),o=c("input"),a=p(),u=c("input"),d=p(),h=c("input"),f(o,"type","text"),o.placeholder="Player Name",f(u,"type","number"),u.placeholder="Player Points",f(h,"type","submit"),h.className="btn btn-primary",h.value="Add Player",e.className="grid-3",y=[m(o,"input",t.input0_input_handler),m(u,"input",t.input1_input_handler),m(e,"submit",t.onSubmit)]},m(n,r){l(n,e,r),i(e,o),o.value=t.player.name,i(e,a),i(e,u),u.value=t.player.points,i(e,d),i(e,h)},p(n,t){n.player&&o.value!==t.player.name&&(o.value=t.player.name),n.player&&(u.value=t.player.points)},i:n,o:n,d(n){n&&s(e),r(y)}}}function F(n,t,e){const r=v();let o={name:"",points:0};return{player:o,onSubmit:n=>{n.preventDefault(),r("addplayer",o),e("player",o={name:"",points:0})},input0_input_handler:function(){o.name=this.value,e("player",o)},input1_input_handler:function(){o.points=d(this.value),e("player",o)}}}class G extends q{constructor(n){super(),O(this,n,F,X,a,[])}}function J(n,t,e){const r=Object.create(n);return r.player=t[e],r}function K(n){for(var t,e,r=n.players,o=[],a=0;a<r.length;a+=1)o[a]=U(J(n,r,a));function i(n,t,e){o[n]&&(t&&j(()=>{o[n].d(t),o[n]=null}),o[n].o(e))}return{c(){for(var n=0;n<o.length;n+=1)o[n].c();t=u("")},m(n,r){for(var a=0;a<o.length;a+=1)o[a].m(n,r);l(n,t,r),e=!0},p(n,e){if(n.players||n.removePlayer){r=e.players;for(var a=0;a<r.length;a+=1){const i=J(e,r,a);o[a]?(o[a].p(n,i),o[a].i(1)):(o[a]=U(i),o[a].c(),o[a].i(1),o[a].m(t.parentNode,t))}for(S();a<o.length;a+=1)i(a,1,1);A()}},i(n){if(!e){for(var t=0;t<r.length;t+=1)o[t].i();e=!0}},o(n){o=o.filter(Boolean);for(let n=0;n<o.length;n+=1)i(n,0);e=!1},d(n){!function(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}(o,n),n&&s(t)}}}function Q(t){var e;return{c(){(e=c("p")).textContent="No Players"},m(n,t){l(n,e,t)},p:n,i:n,o:n,d(n){n&&s(e)}}}function U(n){var t,e=new W({props:{name:n.player.name,points:n.player.points}});return e.$on("removePlayer",n.removePlayer),{c(){e.$$.fragment.c()},m(n,r){D(e,n,r),t=!0},p(n,t){var r={};n.players&&(r.name=t.player.name),n.players&&(r.points=t.player.points),e.$set(r)},i(n){t||(e.$$.fragment.i(n),t=!0)},o(n){e.$$.fragment.o(n),t=!1},d(n){e.$destroy(n)}}}function V(n){var t,e,r,o,a,u,m=new B({}),f=new G({});f.$on("addplayer",n.addPlayer);var d=[Q,K],h=[];function y(n){return 0===n.players.length?0:1}return o=y(n),a=h[o]=d[o](n),{c(){m.$$.fragment.c(),t=p(),e=c("div"),f.$$.fragment.c(),r=p(),a.c(),e.className="container"},m(n,a){D(m,n,a),l(n,t,a),l(n,e,a),D(f,e,null),i(e,r),h[o].m(e,null),u=!0},p(n,t){var r=o;(o=y(t))===r?h[o].p(n,t):(S(),j(()=>{h[r].d(1),h[r]=null}),a.o(1),A(),(a=h[o])||(a=h[o]=d[o](t)).c(),a.i(1),a.m(e,null))},i(n){u||(m.$$.fragment.i(n),f.$$.fragment.i(n),a&&a.i(),u=!0)},o(n){m.$$.fragment.o(n),f.$$.fragment.o(n),a&&a.o(),u=!1},d(n){m.$destroy(n),n&&(s(t),s(e)),f.$destroy(),h[o].d()}}}function Y(n,t,e){let r=[{name:"Imran Rafique",points:100},{name:"Sam Smith",points:45},{name:"Sara Wilson",points:34}];return{players:r,addPlayer:n=>{const t=n.detail;e("players",r=[...r,t])},removePlayer:n=>{e("players",r=r.filter(t=>t.name!==n.detail))}}}return new class extends q{constructor(n){super(),O(this,n,Y,V,a,[])}}({target:document.body,prop:{}})}();
//# sourceMappingURL=bundle.js.map
