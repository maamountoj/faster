(this["webpackJsonpfasti-redux-example"]=this["webpackJsonpfasti-redux-example"]||[]).push([[0],{46:function(e,t,n){e.exports=n(77)},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(23),c=n(16),l=n(8),i=n(44),s=n(45),u=n(15),d=n(3),m=function(){return a.a.createElement("nav",null,a.a.createElement("section",null,a.a.createElement(u.b,{to:"/"},"Dashboard"),a.a.createElement(u.b,{to:"/posts"},"Posts")))},p=function(){return a.a.createElement("section",null,a.a.createElement("h1",null,"Dashboard"),a.a.createElement("p",null,"This is the dashboard."),a.a.createElement(u.b,{to:"/posts",className:"button"},"View Posts"))},v=n(21),f=n.n(v),h=n(79),b=n(80),y=n(2);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function O(e,t){try{var n=e()}catch(o){return t(o)}return n&&n.then?n.then(void 0,t):n}var E=function(e){var t=e.api,n=e.method,o=e.url,a=e.params,r=e.body,c=e.config;try{var l=function(){return console.log("responseresponse",i),i};n=n.toLowerCase(),console.log({method:n,url:o,params:a,body:r,config:c});var i=null,s=function(e,t){var n,o=/\[(.*?)\]/g;return Object(y.isEmpty)(t)?n=e:(e.replace(o,(function(e,t,n){return console.log(n+", "+t)})),n=e.replace(o,(function(e,n,o){return""+t[n]}))),n}(o,a),u=null,d=O((function(){var e=function(){if("get"===n||"delete"===n){var e=function(){i=u},o=function(){if(Object(y.isEmpty)(t)){var e=function(e){function t(e){o||(u=e)}return o?t(u=e):Promise.resolve(f.a[n](s,c)).then(t)},o=Object(y.isEmpty)(c);return o?Promise.resolve(f.a[n](s)).then(e):e(0)}var a=function(e){function o(e){r||(u=e)}return r?o(u=e):Promise.resolve(t[n](s,c)).then(o)},r=Object(y.isEmpty)(c);return r?Promise.resolve(t[n](s)).then(a):a(0)}();return o&&o.then?o.then(e):e()}var a=function(){if("post"===n||"put"===n){var e=function(){i=u},o=function(){if(Object(y.isEmpty)(t)){var e=function(e){function t(e){o||(u=e)}return o?t(u=e):Promise.resolve(f.a[n](s,r)).then(t)},o=Object(y.isEmpty)(c);return o?Promise.resolve(f.a[n](s,r,c)).then(e):e(0)}var a=function(e){function o(e){l||(u=e)}return l?o(u=e):Promise.resolve(t[n](s,r)).then(o)},l=Object(y.isEmpty)(c);return l?Promise.resolve(t[n](s,r,c)).then(a):a(0)}();return o&&o.then?o.then(e):e()}console.error("Ensure your method please")}();if(a&&a.then)return a.then((function(){}))}();if(e&&e.then)return e.then((function(){}))}),(function(e){e,console.log(e)}));return Promise.resolve(d&&d.then?d.then(l):l())}catch(m){return Promise.reject(m)}},j=function(e){var t=e.replace(/[A-Z]/g,(function(e){return"_"+e})).toUpperCase();return Object(h.a)("START_LOADING_"+t,""+t,"STOP_LOADING_"+t,"ERROR_"+t)},P=function(e){var t={};return null===e||void 0===e||e.map((function(e){for(var n=e.api,o=e.name,a=e.url,r=e.method,c=e.config,l=j(o),i=0,s=function(){var s,u=Object(y.keys)(l).splice(i,4);t=g({},t,((s={})[o+"Action"]=function(t){return function(o){try{var i;o(l[u[0]](!0)),console.log(t);var s=O((function(){function s(){Object(y.has)(e,"setPayload")?o(l[u[1]](null===e||void 0===e?void 0:e.setPayload({data:t,res:i}))):o(l[u[1]](i.data)),o(l[u[2]](!1))}var d=function(){if(Object(y.isEmpty)(n)){var e=function(e){function n(e){o||(i=e)}return o?n(i=e):Promise.resolve(E({method:r,url:a,body:"get"==r?"":t,config:c})).then(n)},o=Object(y.has)(t,"params");return o?Promise.resolve(E({method:r,url:a,params:null===t||void 0===t?void 0:t.params,body:Object(y.has)(t,"body")&&"get"==r?"":t.body,config:c})).then(e):e(0)}var l=function(e){function o(e){s||(i=e)}return s?o(i=e):Promise.resolve(E({api:n,method:r,url:a,body:"get"==r?"":t,config:c})).then(o)},s=Object(y.has)(t,"params");return s?Promise.resolve(E({api:n,method:r,url:a,params:null===t||void 0===t?void 0:t.params,body:Object(y.has)(t,"body")&&"get"==r?"":t.body,config:c})).then(l):l(0)}();return d&&d.then?d.then(s):s()}),(function(e){o(l[u[2]](!1)),o(l[u[3]](e))}));return Promise.resolve(s&&s.then?s.then((function(){})):void 0)}catch(d){return Promise.reject(d)}}},s)),i+=4};i<Object(y.keys)(l).length;)s()})),console.log({dataFns:t}),t},A=function(e){var t={},n={};return e.map((function(e){var o,a,r,c=e.key,l=e.stateKey,i=e.initStateKey,s=e.setState,u=c.replace(/[A-Z]/g,(function(e){return"_"+e})).toUpperCase();n=g({},n,((a={})[l]=g({},n[l],((o={data:i})["loading"+(c.charAt(0).toUpperCase()+c.slice(1))]=!1,o["error"+(c.charAt(0).toUpperCase()+c.slice(1))]="",o)),a)),Object(y.has)(e,"anotherActions")&&(null===e||void 0===e||e.anotherActions.map((function(e){var t,o;n=g({},n,((o={})[l]=g({},n[l],((t={})["loading"+((null===e||void 0===e?void 0:e.name.charAt(0).toUpperCase())+(null===e||void 0===e?void 0:e.name.slice(1)))]=!1,t["error"+((null===e||void 0===e?void 0:e.name.charAt(0).toUpperCase())+(null===e||void 0===e?void 0:e.name.slice(1)))]="",t)),o))}))),Object(y.has)(e,"anotherActions")&&(null===e||void 0===e||e.anotherActions.map((function(e){var n,o=null===e||void 0===e?void 0:e.name.replace(/[A-Z]/g,(function(e){return"_"+e})).toUpperCase();t=g({},t,((n={})[o]={next:function(t,n){var o,a;return Object(y.has)(e,"setState")?g({},t,((o={})[l]=g({},t[l],{data:s(t[l],n)}),o)):g({},t,((a={})[l]=g({},t[l],{data:null===n||void 0===n?void 0:n.payload}),a))}},n["START_LOADING_"+o]={next:function(t,n){var o,a;return g({},t,((a={})[l]=g({},t[l],((o={})["loading"+((null===e||void 0===e?void 0:e.name.charAt(0).toUpperCase())+(null===e||void 0===e?void 0:e.name.slice(1)))]=!0,o)),a))}},n["STOP_LOADING_"+o]={next:function(t,n){var o,a;return g({},t,((a={})[l]=g({},t[l],((o={})["loading"+((null===e||void 0===e?void 0:e.name.charAt(0).toUpperCase())+(null===e||void 0===e?void 0:e.name.slice(1)))]=!1,o)),a))}},n["ERROR_"+o]={next:function(t,n){var o,a;return g({},t,((a={})[l]=g({},t[l],((o={})["error"+((null===e||void 0===e?void 0:e.name.charAt(0).toUpperCase())+(null===e||void 0===e?void 0:e.name.slice(1)))]=n.payload,o)),a))}},n))}))),t=g({},t,((r={})[u]={next:function(t,n){var o,a;return Object(y.has)(e,"setState")?g({},t,((o={})[l]=g({},t[l],{data:s(t,n)}),o)):g({},t,((a={})[l]=g({},t[l],{data:null===n||void 0===n?void 0:n.payload}),a))}},r["START_LOADING_"+u]={next:function(e,t){var n,o;return g({},e,((o={})[l]=g({},e[l],((n={})["loading"+(c.charAt(0).toUpperCase()+c.slice(1))]=!0,n)),o))}},r["STOP_LOADING_"+u]={next:function(e,t){var n,o;return g({},e,((o={})[l]=g({},e[l],((n={})["loading"+(c.charAt(0).toUpperCase()+c.slice(1))]=!1,n)),o))}},r["ERROR_"+u]={next:function(e,t){var n,o;return g({},e,((o={})[l]=g({},e[l],((n={})["error"+(c.charAt(0).toUpperCase()+c.slice(1))]=t.payload,n)),o))}},r))})),console.log(t,n),Object(b.a)(t,n)},S="https://jsonplaceholder.typicode.com/posts",C=P([{name:"getPosts",url:S,method:"get"},{name:"addPost",url:S,method:"get"}]),x=C.getPostsAction,_=C.addPostAction;console.log(_());var k=function(e){var t=e.post,n=e.excerpt;return a.a.createElement("article",{className:n?"post-excerpt":"post"},a.a.createElement("h2",null,null===t||void 0===t?void 0:t.title),a.a.createElement("p",null,n?null===t||void 0===t?void 0:t.body.substring(0,100):null===t||void 0===t?void 0:t.body),n&&a.a.createElement(u.b,{to:"/posts/".concat(null===t||void 0===t?void 0:t.id),className:"button"},"View Post"))},I=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){var t,n;return null===(t=e.posts)||void 0===t||null===(n=t.posts)||void 0===n?void 0:n.loadingGetPosts})),n=Object(l.c)((function(e){var t,n;return null===(t=e.posts)||void 0===t||null===(n=t.posts)||void 0===n?void 0:n.loadingAddPost})),r=Object(l.c)((function(e){var t;return null===(t=e.posts.posts)||void 0===t?void 0:t.data}));Object(o.useEffect)((function(){e(x())}),[e]);return a.a.createElement("section",null,a.a.createElement("h1",null,"Posts"),a.a.createElement("strong",null,null===r||void 0===r?void 0:r.length),a.a.createElement("button",{className:"button",style:{borderWidth:"inherit"},onClick:function(){e(_())}},n?"...Loading":"Add Post"),t?a.a.createElement("p",null,"Loading posts..."):r.map((function(e){return a.a.createElement(k,{key:e.id,post:e,excerpt:!0})})))},R=P([{name:"getPost",url:"https://jsonplaceholder.typicode.com/posts/[id]",method:"get",config:{headers:{Authorization:"Bearer hjkhjkhjk"}},setPayload:function(e){return console.log(e),null===e||void 0===e?void 0:e.res.data}}]).getPostAction,U=P([{name:"getComments",url:"https://jsonplaceholder.typicode.com/comments?postId=[postId]",method:"get"}]).getCommentsAction,G=function(e){var t=e.comment;return a.a.createElement("aside",{className:"comment"},a.a.createElement("h2",null,t.title),a.a.createElement("h3",null,t.email),a.a.createElement("p",null,t.body))},L=function(e){var t=e.match,n=Object(l.b)(),r=Object(l.c)((function(e){var t,n,o,a;return{loadingGetPost:null===(t=e.post)||void 0===t||null===(n=t.post)||void 0===n?void 0:n.loading,loadingGetComments:null===(o=e.comments)||void 0===o||null===(a=o.comments)||void 0===a?void 0:a.loading}})),c=r.loadingGetPost,i=r.loadingGetComments,s=Object(l.c)((function(e){return e})),u=Object(l.c)((function(e){var t;return null===(t=e.post.post)||void 0===t?void 0:t.data})),d=Object(l.c)((function(e){var t;return null===(t=e.comments.comments)||void 0===t?void 0:t.data}));Object(o.useEffect)((function(){var e=t.params.id;n(R({params:{id:e}})),n(U({params:{postId:e}}))}),[n,t]);return a.a.createElement("section",null,console.log(s),c?a.a.createElement("p",null,"Loading post..."):a.a.createElement(k,{post:u}),a.a.createElement("h2",null,"Comments"),i?a.a.createElement("p",null,"Loading comments..."):d.map((function(e){return a.a.createElement(G,{key:e.id,comment:e})})))},N=function(){return a.a.createElement(u.a,null,a.a.createElement(m,null),a.a.createElement(d.d,null,a.a.createElement(d.b,{exact:!0,path:"/",component:p}),a.a.createElement(d.b,{exact:!0,path:"/posts",component:I}),a.a.createElement(d.b,{exact:!0,path:"/posts/:id",component:L}),a.a.createElement(d.a,{to:"/"})))},T=n(22),D=A([{key:"getPosts",stateKey:"posts",initStateKey:[],anotherActions:[{name:"addPost",setState:function(e,t){return console.log({posts:e,action:t}),console.log("postsnew",[].concat(Object(T.a)(null===e||void 0===e?void 0:e.data),Object(T.a)(t.payload))),[].concat(Object(T.a)(null===e||void 0===e?void 0:e.data),Object(T.a)(t.payload))}}]}]),w=A([{key:"getPost",stateKey:"post",initStateKey:{},setState:function(e,t){return console.log({state:e,action:t}),t.payload}}]),K=A([{key:"getComments",stateKey:"comments",initStateKey:[]}]),Z=Object(c.combineReducers)({posts:D,post:w,comments:K}),B=(n(76),Object(c.createStore)(Z,Object(s.composeWithDevTools)(Object(c.applyMiddleware)(i.a))));Object(r.render)(a.a.createElement(l.a,{store:B},a.a.createElement(N,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.92a41e5e.chunk.js.map