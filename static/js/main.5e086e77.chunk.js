(this["webpackJsonpfasti-redux-example"]=this["webpackJsonpfasti-redux-example"]||[]).push([[0],{46:function(e,t,n){e.exports=n(77)},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(23),l=n(16),c=n(8),i=n(44),s=n(45),u=n(15),d=n(3),m=function(){return a.a.createElement("nav",null,a.a.createElement("section",null,a.a.createElement(u.b,{to:"/"},"Dashboard"),a.a.createElement(u.b,{to:"/posts"},"Posts")))},p=function(){return a.a.createElement("section",null,a.a.createElement("h1",null,"Dashboard"),a.a.createElement("p",null,"This is the dashboard."),a.a.createElement(u.b,{to:"/posts",className:"button"},"View Posts"))},v=n(21),f=n.n(v),h=n(79),b=n(80),g=n(2);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function O(e,t){try{var n=e()}catch(o){return t(o)}return n&&n.then?n.then(void 0,t):n}var E=function(e){var t=e.api,n=e.method,o=e.url,a=e.params,r=e.body,l=e.config;try{var c=function(){return console.log("responseresponse",i),i};n=n.toLowerCase(),console.log({method:n,url:o,params:a,body:r,config:l});var i=null,s=function(e,t){var n,o=/\[(.*?)\]/g;return Object(g.isEmpty)(t)?n=e:(e.replace(o,(function(e,t,n){return console.log(n+", "+t)})),n=e.replace(o,(function(e,n,o){return""+t[n]}))),n}(o,a),u=null,d=O((function(){var e=function(){if("get"===n||"delete"===n){var e=function(){i=u},o=function(){if(Object(g.isEmpty)(t)){var e=function(e){function t(e){o||(u=e)}return o?t(u=e):Promise.resolve(f.a[n](s,l)).then(t)},o=Object(g.isEmpty)(l);return o?Promise.resolve(f.a[n](s)).then(e):e(0)}var a=function(e){function o(e){r||(u=e)}return r?o(u=e):Promise.resolve(t[n](s,l)).then(o)},r=Object(g.isEmpty)(l);return r?Promise.resolve(t[n](s)).then(a):a(0)}();return o&&o.then?o.then(e):e()}var a=function(){if("post"===n||"put"===n){var e=function(){i=u},o=function(){if(Object(g.isEmpty)(t)){var e=function(e){function t(e){o||(u=e)}return o?t(u=e):Promise.resolve(f.a[n](s,r)).then(t)},o=Object(g.isEmpty)(l);return o?Promise.resolve(f.a[n](s,r,l)).then(e):e(0)}var a=function(e){function o(e){c||(u=e)}return c?o(u=e):Promise.resolve(t[n](s,r)).then(o)},c=Object(g.isEmpty)(l);return c?Promise.resolve(t[n](s,r,l)).then(a):a(0)}();return o&&o.then?o.then(e):e()}console.error("Ensure your method please")}();if(a&&a.then)return a.then((function(){}))}();if(e&&e.then)return e.then((function(){}))}),(function(e){e,console.log(e)}));return Promise.resolve(d&&d.then?d.then(c):c())}catch(m){return Promise.reject(m)}},j=function(e){var t=e.replace(/[A-Z]/g,(function(e){return"_"+e})).toUpperCase();return Object(h.a)("START_LOADING_"+t,""+t,"STOP_LOADING_"+t,"ERROR_"+t)},A=function(e){var t={};return null===e||void 0===e||e.map((function(e){for(var n=e.api,o=e.name,a=e.url,r=e.method,l=e.config,c=j(o),i=0,s=function(){var s,u=Object(g.keys)(c).splice(i,4);t=y({},t,((s={})[o+"Action"]=function(t){return function(o){try{var i;o(c[u[0]](!0)),console.log({dispatchPrepareActions:c,partsKeys:u});var s=O((function(){function s(){Object(g.has)(e,"setPayload")?o(c[u[1]](null===e||void 0===e?void 0:e.setPayload({data:t,res:i}))):o(c[u[1]](i.data)),o(c[u[2]](!1))}var d=function(){if(Object(g.isEmpty)(n)){var e=function(e){function n(e){o||(i=e)}return o?n(i=e):Promise.resolve(E({method:r,url:a,body:"get"==r?"":t,config:l})).then(n)},o=Object(g.has)(t,"params");return o?Promise.resolve(E({method:r,url:a,params:null===t||void 0===t?void 0:t.params,body:Object(g.has)(t,"body")&&"get"==r?"":t.body,config:l})).then(e):e(0)}var c=function(e){function o(e){s||(i=e)}return s?o(i=e):Promise.resolve(E({api:n,method:r,url:a,body:"get"==r?"":t,config:l})).then(o)},s=Object(g.has)(t,"params");return s?Promise.resolve(E({api:n,method:r,url:a,params:null===t||void 0===t?void 0:t.params,body:Object(g.has)(t,"body")&&"get"==r?"":t.body,config:l})).then(c):c(0)}();return d&&d.then?d.then(s):s()}),(function(e){o(c[u[2]](!1)),o(c[u[3]](e))}));return Promise.resolve(s&&s.then?s.then((function(){})):void 0)}catch(d){return Promise.reject(d)}}},s)),i+=4};i<Object(g.keys)(c).length;)s()})),console.log({dataFns:t}),t},P=function(e){var t={},n={};return e.map((function(e){var o,a,r,l=e.key,c=e.stateKey,i=e.initStateKey,s=e.setState,u=l.replace(/[A-Z]/g,(function(e){return"_"+e})).toUpperCase();n=y({},n,((a={})[c]=y({},n[c],((o={data:i})["loading"+(l.charAt(0).toUpperCase()+l.slice(1))]=!1,o["error"+(l.charAt(0).toUpperCase()+l.slice(1))]="",o)),a)),Object(g.has)(e,"anotherActions")&&(null===e||void 0===e||e.anotherActions.map((function(e){var t,o;n=y({},n,((o={})[c]=y({},n[c],((t={})["loading"+((null===e||void 0===e?void 0:e.name.charAt(0).toUpperCase())+(null===e||void 0===e?void 0:e.name.slice(1)))]=!1,t["error"+((null===e||void 0===e?void 0:e.name.charAt(0).toUpperCase())+(null===e||void 0===e?void 0:e.name.slice(1)))]="",t)),o))}))),console.log("vallll",e),Object(g.has)(e,"anotherActions")&&(alert("anotherActions"),console.log("anotherActions",null===e||void 0===e?void 0:e.anotherActions),null===e||void 0===e||e.anotherActions.map((function(e){var n,o=null===e||void 0===e?void 0:e.name.replace(/[A-Z]/g,(function(e){return"_"+e})).toUpperCase();(console.log("value?.name",null===e||void 0===e?void 0:e.name),o)&&(console.log("newAction",o),t=y({},t,((n={})[o]={next:function(t,n){var a,r;return console.log("valueeeee",e),Object(g.has)(e,"setState")?(alert(o),console.log("value setState",e),console.log("new data",null===e||void 0===e?void 0:e.setState(t[c],n)),alert("new data"),y({},t,((a={})[c]=y({},t[c],{data:null===e||void 0===e?void 0:e.setState(t[c],n)}),a))):y({},t,((r={})[c]=y({},t[c],{data:null===n||void 0===n?void 0:n.payload}),r))}},n["START_LOADING_"+o]={next:function(t,n){var a,r;return alert("START_LOADING_"+o),y({},t,((r={})[c]=y({},t[c],((a={})["loading"+((null===e||void 0===e?void 0:e.name.charAt(0).toUpperCase())+(null===e||void 0===e?void 0:e.name.slice(1)))]=!0,a)),r))}},n["STOP_LOADING_"+o]={next:function(t,n){var a,r;return alert("STOP_LOADING_"+o),y({},t,((r={})[c]=y({},t[c],((a={})["loading"+((null===e||void 0===e?void 0:e.name.charAt(0).toUpperCase())+(null===e||void 0===e?void 0:e.name.slice(1)))]=!1,a)),r))}},n["ERROR_"+o]={next:function(t,n){var o,a;return y({},t,((a={})[c]=y({},t[c],((o={})["error"+((null===e||void 0===e?void 0:e.name.charAt(0).toUpperCase())+(null===e||void 0===e?void 0:e.name.slice(1)))]=n.payload,o)),a))}},n)))}))),t=y({},t,((r={})[u]={next:function(t,n){var o,a;return Object(g.has)(e,"setState")?y({},t,((o={})[c]=y({},t[c],{data:s(t,n)}),o)):y({},t,((a={})[c]=y({},t[c],{data:null===n||void 0===n?void 0:n.payload}),a))}},r["START_LOADING_"+u]={next:function(e,t){var n,o;return y({},e,((o={})[c]=y({},e[c],((n={})["loading"+(l.charAt(0).toUpperCase()+l.slice(1))]=!0,n)),o))}},r["STOP_LOADING_"+u]={next:function(e,t){var n,o;return y({},e,((o={})[c]=y({},e[c],((n={})["loading"+(l.charAt(0).toUpperCase()+l.slice(1))]=!1,n)),o))}},r["ERROR_"+u]={next:function(e,t){var n,o;return y({},e,((o={})[c]=y({},e[c],((n={})["error"+(l.charAt(0).toUpperCase()+l.slice(1))]=t.payload,n)),o))}},r))})),console.log(t,n),Object(b.a)(t,n)},S="https://jsonplaceholder.typicode.com/posts",_=A([{name:"getPosts",url:S,method:"get"},{name:"addPost",url:S,method:"get"}]),C=_.getPostsAction,x=_.addPostAction;console.log(x());var I=function(e){var t=e.post,n=e.excerpt;return a.a.createElement("article",{className:n?"post-excerpt":"post"},a.a.createElement("h2",null,null===t||void 0===t?void 0:t.title),a.a.createElement("p",null,n?null===t||void 0===t?void 0:t.body.substring(0,100):null===t||void 0===t?void 0:t.body),n&&a.a.createElement(u.b,{to:"/posts/".concat(null===t||void 0===t?void 0:t.id),className:"button"},"View Post"))},k=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){var t,n;return null===(t=e.posts)||void 0===t||null===(n=t.posts)||void 0===n?void 0:n.loadingGetPosts})),n=Object(c.c)((function(e){var t,n;return null===(t=e.posts)||void 0===t||null===(n=t.posts)||void 0===n?void 0:n.loadingAddPost})),r=Object(c.c)((function(e){var t;return null===(t=e.posts.posts)||void 0===t?void 0:t.data}));Object(o.useEffect)((function(){e(C())}),[e]);return a.a.createElement("section",null,a.a.createElement("h1",null,"Posts"),a.a.createElement("strong",null,null===r||void 0===r?void 0:r.length),a.a.createElement("button",{className:"button",style:{borderWidth:"inherit"},onClick:function(){console.log(x()),e(x())}},n?"...Loading":"Add Post"),t?a.a.createElement("p",null,"Loading posts..."):r.map((function(e){return a.a.createElement(I,{key:e.id,post:e,excerpt:!0})})))},R=A([{name:"getPost",url:"https://jsonplaceholder.typicode.com/posts/[id]",method:"get",config:{headers:{Authorization:"Bearer hjkhjkhjk"}},setPayload:function(e){return console.log(e),null===e||void 0===e?void 0:e.res.data}}]).getPostAction,T=A([{name:"getComments",url:"https://jsonplaceholder.typicode.com/comments?postId=[postId]",method:"get"}]).getCommentsAction,G=function(e){var t=e.comment;return a.a.createElement("aside",{className:"comment"},a.a.createElement("h2",null,t.title),a.a.createElement("h3",null,t.email),a.a.createElement("p",null,t.body))},L=function(e){var t=e.match,n=Object(c.b)(),r=Object(c.c)((function(e){var t,n,o,a;return{loadingGetPost:null===(t=e.post)||void 0===t||null===(n=t.post)||void 0===n?void 0:n.loading,loadingGetComments:null===(o=e.comments)||void 0===o||null===(a=o.comments)||void 0===a?void 0:a.loading}})),l=r.loadingGetPost,i=r.loadingGetComments,s=Object(c.c)((function(e){return e})),u=Object(c.c)((function(e){var t;return null===(t=e.post.post)||void 0===t?void 0:t.data})),d=Object(c.c)((function(e){var t;return null===(t=e.comments.comments)||void 0===t?void 0:t.data}));Object(o.useEffect)((function(){var e=t.params.id;n(R({params:{id:e}})),n(T({params:{postId:e}}))}),[n,t]);return a.a.createElement("section",null,console.log(s),l?a.a.createElement("p",null,"Loading post..."):a.a.createElement(I,{post:u}),a.a.createElement("h2",null,"Comments"),i?a.a.createElement("p",null,"Loading comments..."):d.map((function(e){return a.a.createElement(G,{key:e.id,comment:e})})))},N=function(){return a.a.createElement(u.a,null,a.a.createElement(m,null),a.a.createElement(d.d,null,a.a.createElement(d.b,{exact:!0,path:"/",component:p}),a.a.createElement(d.b,{exact:!0,path:"/posts",component:k}),a.a.createElement(d.b,{exact:!0,path:"/posts/:id",component:L}),a.a.createElement(d.a,{to:"/"})))},U=n(22),w=P([{key:"getPosts",stateKey:"posts",initStateKey:[],anotherActions:[{name:"addPost",setState:function(e,t){return console.log({posts:e,action:t}),console.log("postsnew",[].concat(Object(U.a)(null===e||void 0===e?void 0:e.data),Object(U.a)(t.payload))),[].concat(Object(U.a)(null===e||void 0===e?void 0:e.data),Object(U.a)(t.payload))}}]}]),D=P([{key:"getPost",stateKey:"post",initStateKey:{},setState:function(e,t){return console.log({state:e,action:t}),t.payload}}]),K=P([{key:"getComments",stateKey:"comments",initStateKey:[]}]),Z=Object(l.combineReducers)({posts:w,post:D,comments:K}),B=(n(76),Object(l.createStore)(Z,Object(s.composeWithDevTools)(Object(l.applyMiddleware)(i.a))));Object(r.render)(a.a.createElement(c.a,{store:B},a.a.createElement(N,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.5e086e77.chunk.js.map