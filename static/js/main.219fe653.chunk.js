(this["webpackJsonpfasti-redux-example"]=this["webpackJsonpfasti-redux-example"]||[]).push([[0],{46:function(e,t,n){e.exports=n(77)},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(22),l=n(16),c=n(8),i=n(44),s=n(45),u=n(15),d=n(3),m=function(){return r.a.createElement("nav",null,r.a.createElement("section",null,r.a.createElement(u.b,{to:"/"},"Dashboard"),r.a.createElement(u.b,{to:"/posts"},"Posts")))},p=function(){return r.a.createElement("section",null,r.a.createElement("h1",null,"Dashboard"),r.a.createElement("p",null,"This is the dashboard."),r.a.createElement(u.b,{to:"/posts",className:"button"},"View Posts"))},v=n(21),f=n.n(v),h=n(79),y=n(80),b=n(2);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function O(e,t){try{var n=e()}catch(o){return t(o)}return n&&n.then?n.then(void 0,t):n}var E=function(e){var t=e.api,n=e.method,o=e.url,r=e.params,a=e.body,l=e.config;try{var c=function(){return console.log("responseresponse",i),i};n=n.toLowerCase(),console.log({method:n,url:o,params:r,body:a,config:l});var i=null,s=function(e,t){var n,o=/\[(.*?)\]/g;return Object(b.isEmpty)(t)?n=e:(e.replace(o,(function(e,t,n){return console.log(n+", "+t)})),n=e.replace(o,(function(e,n,o){return""+t[n]}))),n}(o,r),u=null,d=O((function(){var e=function(){if("get"===n||"delete"===n){var e=function(){i=u},o=function(){if(Object(b.isEmpty)(t)){var e=function(e){function t(e){o||(u=e)}return o?t(u=e):Promise.resolve(f.a[n](s,l)).then(t)},o=Object(b.isEmpty)(l);return o?Promise.resolve(f.a[n](s)).then(e):e(0)}var r=function(e){function o(e){a||(u=e)}return a?o(u=e):Promise.resolve(t[n](s,l)).then(o)},a=Object(b.isEmpty)(l);return a?Promise.resolve(t[n](s)).then(r):r(0)}();return o&&o.then?o.then(e):e()}var r=function(){if("post"===n||"put"===n){var e=function(){i=u},o=function(){if(Object(b.isEmpty)(t)){var e=function(e){function t(e){o||(u=e)}return o?t(u=e):Promise.resolve(f.a[n](s,a)).then(t)},o=Object(b.isEmpty)(l);return o?Promise.resolve(f.a[n](s,a,l)).then(e):e(0)}var r=function(e){function o(e){c||(u=e)}return c?o(u=e):Promise.resolve(t[n](s,a)).then(o)},c=Object(b.isEmpty)(l);return c?Promise.resolve(t[n](s,a,l)).then(r):r(0)}();return o&&o.then?o.then(e):e()}console.error("Ensure your method please")}();if(r&&r.then)return r.then((function(){}))}();if(e&&e.then)return e.then((function(){}))}),(function(e){e,console.log(e)}));return Promise.resolve(d&&d.then?d.then(c):c())}catch(m){return Promise.reject(m)}},j=function(e){var t=e.replace(/[A-Z]/g,(function(e){return"_"+e})).toUpperCase();return Object(h.a)("START_LOADING_"+t,""+t,"STOP_LOADING_"+t,"ERROR_"+t)},P=function(e){var t={};return null===e||void 0===e||e.map((function(e){for(var n=e.api,o=e.name,r=e.url,a=e.method,l=e.config,c=j(o),i=0,s=function(){var s,u=Object(b.keys)(c).splice(i,4);t=g({},t,((s={})[o+"Action"]=function(t){return function(o){try{var i;o(c[u[0]](!0));var s=O((function(){function s(){Object(b.has)(e,"setPayload")?o(c[u[1]](null===e||void 0===e?void 0:e.setPayload({data:t,res:i}))):o(c[u[1]](i.data)),o(c[u[2]](!1))}var d=function(){if(Object(b.isEmpty)(n)){var e=function(e){function n(e){o||(i=e)}return o?n(i=e):Promise.resolve(E({method:a,url:r,body:"get"==a?"":t,config:l})).then(n)},o=Object(b.has)(t,"params");return o?Promise.resolve(E({method:a,url:r,params:null===t||void 0===t?void 0:t.params,body:Object(b.has)(t,"body")&&"get"==a?"":t.body,config:l})).then(e):e(0)}var c=function(e){function o(e){s||(i=e)}return s?o(i=e):Promise.resolve(E({api:n,method:a,url:r,body:"get"==a?"":t,config:l})).then(o)},s=Object(b.has)(t,"params");return s?Promise.resolve(E({api:n,method:a,url:r,params:null===t||void 0===t?void 0:t.params,body:Object(b.has)(t,"body")&&"get"==a?"":t.body,config:l})).then(c):c(0)}();return d&&d.then?d.then(s):s()}),(function(e){o(c[u[2]](!1)),o(c[u[3]](e))}));return Promise.resolve(s&&s.then?s.then((function(){})):void 0)}catch(d){return Promise.reject(d)}}},s)),i+=4};i<Object(b.keys)(c).length;)s()})),t},A=function(e,t){console.log("createReducersMap");var n=e;return t.map((function(e){var t,o=null===e||void 0===e?void 0:e.key.replace(/[A-Z]/g,(function(e){return"_"+e})).toUpperCase();(t={})[o]={next:function(t,n){var o,r;return Object(b.has)(e,"setState")?g({},t,((o={})[stateKey]=g({},t[stateKey],{data:null===e||void 0===e?void 0:e.setState(t[stateKey],n)}),o)):g({},t,((r={})[stateKey]=g({},t[stateKey],{data:null===n||void 0===n?void 0:n.payload}),r))}},t["START_LOADING_"+o]={next:function(t,n){var r,a;return alert("START_LOADING_"+o),g({},t,((a={})[stateKey]=g({},t[stateKey],((r={})["loading"+((null===e||void 0===e?void 0:e.key.charAt(0).toUpperCase())+(null===e||void 0===e?void 0:e.key.slice(1)))]=!0,r)),a))}},t["STOP_LOADING_"+o]={next:function(t,n){var r,a;return alert("STOP_LOADING_"+o),g({},t,((a={})[stateKey]=g({},t[stateKey],((r={})["loading"+((null===e||void 0===e?void 0:e.key.charAt(0).toUpperCase())+(null===e||void 0===e?void 0:e.key.slice(1)))]=!1,r)),a))}},t["ERROR_"+o]={next:function(t,n){var o,r;return g({},t,((r={})[stateKey]=g({},t[stateKey],((o={})["error"+((null===e||void 0===e?void 0:e.key.charAt(0).toUpperCase())+(null===e||void 0===e?void 0:e.key.slice(1)))]=n.payload,o)),r))}},n=t})),n},k=function(e){var t={},n={};return e.map((function(e){var o,r,a=e.key,l=e.stateKey,c=e.initStateKey;a.replace(/[A-Z]/g,(function(e){return"_"+e})).toUpperCase();n=g({},n,((r={})[l]=g({},n[l],((o={data:c})["loading"+(a.charAt(0).toUpperCase()+a.slice(1))]=!1,o["error"+(a.charAt(0).toUpperCase()+a.slice(1))]="",o)),r)),Object(b.has)(e,"anotherActions")&&(null===e||void 0===e||e.anotherActions.map((function(e){var t,o;n=g({},n,((o={})[l]=g({},n[l],((t={})["loading"+((null===e||void 0===e?void 0:e.key.charAt(0).toUpperCase())+(null===e||void 0===e?void 0:e.key.slice(1)))]=!1,t["error"+((null===e||void 0===e?void 0:e.key.charAt(0).toUpperCase())+(null===e||void 0===e?void 0:e.key.slice(1)))]="",t)),o))}))),Object(b.has)(e,"anotherActions")&&(t=g({},t,A(t,null===e||void 0===e?void 0:e.anotherActions))),t=g({},t,A(t,[{key:a}]))})),Object(y.a)(t,n)},S="https://jsonplaceholder.typicode.com/posts",K=P([{name:"getPosts",url:S,method:"get"},{name:"addPost",url:S,method:"get"}]),C=K.getPostsAction,_=K.addPostAction;console.log(_());var x=function(e){var t=e.post,n=e.excerpt;return r.a.createElement("article",{className:n?"post-excerpt":"post"},r.a.createElement("h2",null,null===t||void 0===t?void 0:t.title),r.a.createElement("p",null,n?null===t||void 0===t?void 0:t.body.substring(0,100):null===t||void 0===t?void 0:t.body),n&&r.a.createElement(u.b,{to:"/posts/".concat(null===t||void 0===t?void 0:t.id),className:"button"},"View Post"))},I=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){var t,n;return null===(t=e.posts)||void 0===t||null===(n=t.posts)||void 0===n?void 0:n.loadingGetPosts})),n=Object(c.c)((function(e){var t,n;return null===(t=e.posts)||void 0===t||null===(n=t.posts)||void 0===n?void 0:n.loadingAddPost})),a=Object(c.c)((function(e){var t;return null===(t=e.posts.posts)||void 0===t?void 0:t.data}));Object(o.useEffect)((function(){e(C())}),[e]);return r.a.createElement("section",null,r.a.createElement("h1",null,"Posts"),r.a.createElement("strong",null,null===a||void 0===a?void 0:a.length),r.a.createElement("button",{className:"button",style:{borderWidth:"inherit"},onClick:function(){console.log(_()),e(_())}},n?"...Loading":"Add Post"),t?r.a.createElement("p",null,"Loading posts..."):a.map((function(e){return r.a.createElement(x,{key:e.id,post:e,excerpt:!0})})))},G=P([{name:"getPost",url:"https://jsonplaceholder.typicode.com/posts/[id]",method:"get",config:{headers:{Authorization:"Bearer hjkhjkhjk"}},setPayload:function(e){return console.log(e),null===e||void 0===e?void 0:e.res.data}}]).getPostAction,L=P([{name:"getComments",url:"https://jsonplaceholder.typicode.com/comments?postId=[postId]",method:"get"}]).getCommentsAction,N=function(e){var t=e.comment;return r.a.createElement("aside",{className:"comment"},r.a.createElement("h2",null,t.title),r.a.createElement("h3",null,t.email),r.a.createElement("p",null,t.body))},R=function(e){var t=e.match,n=Object(c.b)(),a=Object(c.c)((function(e){var t,n,o,r;return{loadingGetPost:null===(t=e.post)||void 0===t||null===(n=t.post)||void 0===n?void 0:n.loading,loadingGetComments:null===(o=e.comments)||void 0===o||null===(r=o.comments)||void 0===r?void 0:r.loading}})),l=a.loadingGetPost,i=a.loadingGetComments,s=Object(c.c)((function(e){return e})),u=Object(c.c)((function(e){var t;return null===(t=e.post.post)||void 0===t?void 0:t.data})),d=Object(c.c)((function(e){var t;return null===(t=e.comments.comments)||void 0===t?void 0:t.data}));Object(o.useEffect)((function(){var e=t.params.id;n(G({params:{id:e}})),n(L({params:{postId:e}}))}),[n,t]);return r.a.createElement("section",null,console.log(s),l?r.a.createElement("p",null,"Loading post..."):r.a.createElement(x,{post:u}),r.a.createElement("h2",null,"Comments"),i?r.a.createElement("p",null,"Loading comments..."):d.map((function(e){return r.a.createElement(N,{key:e.id,comment:e})})))},T=function(){return r.a.createElement(u.a,null,r.a.createElement(m,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:p}),r.a.createElement(d.b,{exact:!0,path:"/posts",component:I}),r.a.createElement(d.b,{exact:!0,path:"/posts/:id",component:R}),r.a.createElement(d.a,{to:"/"})))},U=n(33),D=k([{key:"getPosts",stateKey:"posts",initStateKey:[],anotherActions:[{key:"addPost",setState:function(e,t){return console.log({posts:e,action:t}),console.log("postsnew",{data:null===e||void 0===e?void 0:e.data,payload:t.payload}),[].concat(Object(U.a)(null===e||void 0===e?void 0:e.data),Object(U.a)(t.payload))}}]}]),w=k([{key:"getPost",stateKey:"post",initStateKey:{},setState:function(e,t){return console.log({state:e,action:t}),t.payload}}]),Z=k([{key:"getComments",stateKey:"comments",initStateKey:[]}]),B=Object(l.combineReducers)({posts:D,post:w,comments:Z}),J=(n(76),Object(l.createStore)(B,Object(s.composeWithDevTools)(Object(l.applyMiddleware)(i.a))));Object(a.render)(r.a.createElement(c.a,{store:J},r.a.createElement(T,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.219fe653.chunk.js.map