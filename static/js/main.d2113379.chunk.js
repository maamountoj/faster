(this["webpackJsonpfasti-redux-example"]=this["webpackJsonpfasti-redux-example"]||[]).push([[0],{46:function(t,e,n){t.exports=n(77)},76:function(t,e,n){},77:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(22),i=n(16),c=n(4),l=n(44),s=n(45),u=n(15),d=n(3),p=function(){return a.a.createElement("nav",null,a.a.createElement("section",null,a.a.createElement(u.b,{to:"/"},"Dashboard"),a.a.createElement(u.b,{to:"/posts"},"Posts")))},m=function(){return a.a.createElement("section",null,a.a.createElement("h1",null,"Dashboard"),a.a.createElement("p",null,"This is the dashboard."),a.a.createElement(u.b,{to:"/posts",className:"button"},"View Posts"))},v=n(21),f=n.n(v),h=n(79),y=n(80),b=n(2);function g(){return(g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function O(t,e){try{var n=t()}catch(o){return e(o)}return n&&n.then?n.then(void 0,e):n}var j=function(t){var e=t.api,n=t.method,o=t.url,a=t.params,r=t.body,i=t.config;try{var c=function(){return console.log("responseresponse",l),l};n=n.toLowerCase();var l=null,s=function(t,e){return Object(b.isEmpty)(e)?t:t.replace(/\[(.*?)\]/g,(function(t,n,o){return""+e[n]}))}(o,a),u=null,d=O((function(){var t=function(){if("get"===n||"delete"===n){var t=function(){l=u},o=function(){if(Object(b.isEmpty)(e)){var t=function(t){function e(t){o||(u=t)}return o?e(u=t):Promise.resolve(f.a[n](s,i)).then(e)},o=Object(b.isEmpty)(i);return o?Promise.resolve(f.a[n](s)).then(t):t(0)}var a=function(t){function o(t){r||(u=t)}return r?o(u=t):Promise.resolve(e[n](s,i)).then(o)},r=Object(b.isEmpty)(i);return r?Promise.resolve(e[n](s)).then(a):a(0)}();return o&&o.then?o.then(t):t()}var a=function(){if("post"===n||"put"===n){var t=function(){l=u},o=function(){if(Object(b.isEmpty)(e)){var t=function(t){function e(t){o||(u=t)}return o?e(u=t):Promise.resolve(f.a[n](s,r)).then(e)},o=Object(b.isEmpty)(i);return o?Promise.resolve(f.a[n](s,r,i)).then(t):t(0)}var a=function(t){function o(t){c||(u=t)}return c?o(u=t):Promise.resolve(e[n](s,r)).then(o)},c=Object(b.isEmpty)(i);return c?Promise.resolve(e[n](s,r,i)).then(a):a(0)}();return o&&o.then?o.then(t):t()}console.error("Ensure your method please")}();if(a&&a.then)return a.then((function(){}))}();if(t&&t.then)return t.then((function(){}))}),(function(t){t,console.log(t)}));return Promise.resolve(d&&d.then?d.then(c):c())}catch(p){return Promise.reject(p)}},E=function(t){var e=t.replace(/[A-Z]/g,(function(t){return"_"+t})).toUpperCase();return Object(h.a)("START_LOADING_"+e,""+e,"STOP_LOADING_"+e,"ERROR_"+e)},P=function(t){var e={};return null===t||void 0===t||t.map((function(t){for(var n=t.api,o=t.name,a=t.url,r=t.method,i=t.config,c=E(o),l=0,s=function(){var s,u=Object(b.keys)(c).splice(l,4);e=g({},e,((s={})[o+"Action"]=function(e){return function(o){try{var l;o(c[u[0]](!0));var s=O((function(){function s(){Object(b.has)(t,"setPayload")?o(c[u[1]](null===t||void 0===t?void 0:t.setPayload({data:e,res:l}))):o(c[u[1]](l.data)),o(c[u[2]](!1))}var d=function(){if(Object(b.isEmpty)(n)){var t=function(t){function n(t){o||(l=t)}return o?n(l=t):Promise.resolve(j({method:r,url:a,body:"get"==r?"":e,config:i})).then(n)},o=Object(b.has)(e,"params");return o?Promise.resolve(j({method:r,url:a,params:null===e||void 0===e?void 0:e.params,body:Object(b.has)(e,"body")&&"get"==r?"":e.body,config:i})).then(t):t(0)}var c=function(t){function o(t){s||(l=t)}return s?o(l=t):Promise.resolve(j({api:n,method:r,url:a,body:"get"==r?"":e,config:i})).then(o)},s=Object(b.has)(e,"params");return s?Promise.resolve(j({api:n,method:r,url:a,params:null===e||void 0===e?void 0:e.params,body:Object(b.has)(e,"body")&&"get"==r?"":e.body,config:i})).then(c):c(0)}();return d&&d.then?d.then(s):s()}),(function(t){o(c[u[2]](!1)),o(c[u[3]](t))}));return Promise.resolve(s&&s.then?s.then((function(){})):void 0)}catch(d){return Promise.reject(d)}}},s)),l+=4};l<Object(b.keys)(c).length;)s()})),e},A=function(t){var e={},n={};return t.map((function(t){try{var o,a,r,i=t.key,c=t.stateKey,l=t.initStateKey,s=t.setState,u=i.replace(/[A-Z]/g,(function(t){return"_"+t})).toUpperCase();return n=g({},n,((a={})[c]=g({},n[c],((o={data:l})["loading"+(i.charAt(0).toUpperCase()+i.slice(1))]=!1,o["error"+(i.charAt(0).toUpperCase()+i.slice(1))]="",o)),a)),Object(b.has)(t,"anotherActions")&&(null===t||void 0===t||t.anotherActions.map((function(t){var e,o;n=g({},n,((o={})[c]=g({},n[c],((e={})["loading"+((null===t||void 0===t?void 0:t.key.charAt(0).toUpperCase())+(null===t||void 0===t?void 0:t.key.slice(1)))]=!1,e["error"+((null===t||void 0===t?void 0:t.key.charAt(0).toUpperCase())+(null===t||void 0===t?void 0:t.key.slice(1)))]="",e)),o))}))),Object(b.has)(t,"anotherActions")&&t.anotherActions.map((function(t){var n,o=null===t||void 0===t?void 0:t.key.replace(/[A-Z]/g,(function(t){return"_"+t})).toUpperCase();e=g({},e,((n={})[o]={next:function(e,n){var o,a;return Object(b.has)(t,"setState")?g({},e,((o={})[c]=g({},e[c],{data:null===t||void 0===t?void 0:t.setState(e[c],n)}),o)):g({},e,((a={})[c]=g({},e[c],{data:null===n||void 0===n?void 0:n.payload}),a))}},n["START_LOADING_"+o]={next:function(e,n){var o,a;return g({},e,((a={})[c]=g({},e[c],((o={})["loading"+((null===t||void 0===t?void 0:t.key.charAt(0).toUpperCase())+(null===t||void 0===t?void 0:t.key.slice(1)))]=!0,o)),a))}},n["STOP_LOADING_"+o]={next:function(e,n){var o,a;return g({},e,((a={})[c]=g({},e[c],((o={})["loading"+((null===t||void 0===t?void 0:t.key.charAt(0).toUpperCase())+(null===t||void 0===t?void 0:t.key.slice(1)))]=!1,o)),a))}},n["ERROR_"+o]={next:function(e,n){var o,a;return g({},e,((a={})[c]=g({},e[c],((o={})["error"+((null===t||void 0===t?void 0:t.key.charAt(0).toUpperCase())+(null===t||void 0===t?void 0:t.key.slice(1)))]=n.payload,o)),a))}},n))})),e=g({},e,((r={})[u]={next:function(e,n){var o,a;return Object(b.has)(t,"setState")?g({},e,((o={})[c]=g({},e[c],{data:s(e[c],n)}),o)):g({},e,((a={})[c]=g({},e[c],{data:null===n||void 0===n?void 0:n.payload}),a))}},r["START_LOADING_"+u]={next:function(t,e){var n,o;return g({},t,((o={})[c]=g({},t[c],((n={})["loading"+(i.charAt(0).toUpperCase()+i.slice(1))]=!0,n)),o))}},r["STOP_LOADING_"+u]={next:function(t,e){var n,o;return g({},t,((o={})[c]=g({},t[c],((n={})["loading"+(i.charAt(0).toUpperCase()+i.slice(1))]=!1,n)),o))}},r["ERROR_"+u]={next:function(t,e){var n,o;return g({},t,((o={})[c]=g({},t[c],((n={})["error"+(i.charAt(0).toUpperCase()+i.slice(1))]=e.payload,n)),o))}},r)),Promise.resolve()}catch(d){return Promise.reject(d)}})),Object(y.a)(e,n)},S="https://jsonplaceholder.typicode.com/posts",k=P([{name:"getPosts",url:S,method:"get"},{name:"addPost",url:S,method:"POST",setPayload:function(t){var e=t.data,n=t.res;return console.log("data",{data:e,res:n}),n.data.title="test",n.data},config:{headers:{"Content-type":"application/json"}}},{name:"updatePost",url:"https://jsonplaceholder.typicode.com/posts/[id]",method:"PUT",setPayload:function(t){var e=t.data,n=t.res;return console.log("data",{data:e,res:n}),n.data},config:{headers:{"Content-type":"application/json"}}}]),C=k.getPostsAction,x=k.addPostAction,_=k.updatePostAction,U=function(t){var e=t.post,n=t.excerpt,o=Object(c.b)(),r=Object(c.c)((function(t){var e,n;return null===(e=t.posts)||void 0===e||null===(n=e.posts)||void 0===n?void 0:n.loadingUpdatePost}));return a.a.createElement("article",{className:n?"post-excerpt":"post"},a.a.createElement("h2",null,null===e||void 0===e?void 0:e.title),a.a.createElement("p",null,n?null===e||void 0===e?void 0:e.body.substring(0,100):null===e||void 0===e?void 0:e.body),n&&a.a.createElement(a.a.Fragment,null,a.a.createElement(u.b,{to:"/posts/".concat(null===e||void 0===e?void 0:e.id),className:"button"},"View Post"),a.a.createElement("button",{className:"button",style:{borderWidth:"inherit",cursor:"pointer"},onClick:function(){o(_({body:{title:"maamoun",body:"description,description"},params:{id:null===e||void 0===e?void 0:e.id}}))}},r?"...Loading":"Update Post")))},I=function(){var t=Object(c.b)(),e=Object(c.c)((function(t){var e,n;return null===(e=t.posts)||void 0===e||null===(n=e.posts)||void 0===n?void 0:n.loadingGetPosts})),n=Object(c.c)((function(t){var e,n;return null===(e=t.posts)||void 0===e||null===(n=e.posts)||void 0===n?void 0:n.loadingAddPost})),r=Object(c.c)((function(t){var e;return null===(e=t.posts.posts)||void 0===e?void 0:e.data}));Object(o.useEffect)((function(){t(C())}),[t]);return a.a.createElement("section",null,a.a.createElement("h1",null,"Posts"),a.a.createElement("div",{style:{display:"flex",width:"100%",justifyContent:"space-between"}},a.a.createElement("p",null,a.a.createElement("strong",null,"Total:",null===r||void 0===r?void 0:r.length)),a.a.createElement("button",{className:"button",style:{borderWidth:"inherit",cursor:"pointer"},onClick:function(){t(x({title:"foo",body:"bar",userId:1}))}},n?"...Loading":"Add Post")),e?a.a.createElement("p",null,"Loading posts..."):r.map((function(t){return a.a.createElement(U,{key:t.id,post:t,excerpt:!0})})))},T=P([{name:"getPost",url:"https://jsonplaceholder.typicode.com/posts/[id]",method:"get",config:{headers:{Authorization:"Bearer hjkhjkhjk"}},setPayload:function(t){return null===t||void 0===t?void 0:t.res.data}}]),R=T.getPostAction,L=(T.updatePostAction,P([{name:"getComments",url:"https://jsonplaceholder.typicode.com/comments?postId=[postId]",method:"get"}]).getCommentsAction),N=function(t){var e=t.comment;return a.a.createElement("aside",{className:"comment"},a.a.createElement("h2",null,e.title),a.a.createElement("h3",null,e.email),a.a.createElement("p",null,e.body))},G=function(t){var e=t.match,n=Object(c.b)(),r=Object(c.c)((function(t){var e,n,o,a;return{loadingGetPost:null===(e=t.post)||void 0===e||null===(n=e.post)||void 0===n?void 0:n.loading,loadingGetComments:null===(o=t.comments)||void 0===o||null===(a=o.comments)||void 0===a?void 0:a.loading}})),i=r.loadingGetPost,l=r.loadingGetComments,s=(Object(c.c)((function(t){return t})),Object(c.c)((function(t){var e;return null===(e=t.post.post)||void 0===e?void 0:e.data}))),u=Object(c.c)((function(t){var e;return null===(e=t.comments.comments)||void 0===e?void 0:e.data}));Object(o.useEffect)((function(){var t=e.params.id;n(R({params:{id:t}})),n(L({params:{postId:t}}))}),[n,e]);return a.a.createElement("section",null,i?a.a.createElement("p",null,"Loading post..."):a.a.createElement(U,{post:s}),a.a.createElement("h2",null,"Comments"),l?a.a.createElement("p",null,"Loading comments..."):u.map((function(t){return a.a.createElement(N,{key:t.id,comment:t})})))},w=function(){return a.a.createElement(u.a,null,a.a.createElement(p,null),a.a.createElement(d.d,null,a.a.createElement(d.b,{exact:!0,path:"/",component:m}),a.a.createElement(d.b,{exact:!0,path:"/posts",component:I}),a.a.createElement(d.b,{exact:!0,path:"/posts/:id",component:G}),a.a.createElement(d.a,{to:"/"})))},D=n(33),K=A([{key:"getPosts",stateKey:"posts",initStateKey:[],anotherActions:[{key:"updatePost",setState:function(t,e){return console.log({posts:t,action:e}),Object(D.a)(null===t||void 0===t?void 0:t.data.map((function(t){return t.id===e.payload.id?e.payload:t})))}},{key:"addPost",setState:function(t,e){return console.log({posts:t,action:e}),[e.payload].concat(Object(D.a)(null===t||void 0===t?void 0:t.data))}}]}]),W=A([{key:"getPost",stateKey:"post",initStateKey:{},setState:function(t,e){return e.payload}}]),Z=A([{key:"getComments",stateKey:"comments",initStateKey:[]}]),B=Object(i.combineReducers)({posts:K,post:W,comments:Z}),J=(n(76),Object(i.createStore)(B,Object(s.composeWithDevTools)(Object(i.applyMiddleware)(l.a))));Object(r.render)(a.a.createElement(c.a,{store:J},a.a.createElement(w,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.d2113379.chunk.js.map