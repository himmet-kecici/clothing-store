(this["webpackJsonpclothing-store"]=this["webpackJsonpclothing-store"]||[]).push([[0],{73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(1),a=n.n(c),i=n(36),s=n.n(i),o=n(26),u=n(12),l=n(49),d=n(16),b=n(39),j=(n(67),n(50)),p=n.n(j),O=n(5),f={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_FAILURE:"SIGN_UP_FAILURE",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS"},m={currentUser:null,error:null},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.SIGN_IN_SUCCESS:return Object(O.a)(Object(O.a)({},e),{},{currentUser:t.payload,error:null});case f.SIGN_OUT_SUCCESS:return Object(O.a)(Object(O.a)({},e),{},{currentUser:null,error:null});case f.SIGN_IN_FAILURE:case f.SIGN_OUT_FAILURE:case f.SIGN_UP_FAILURE:return Object(O.a)(Object(O.a)({},e),{},{error:t.payload});default:return e}},x={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_CART:"CLEAR_CART"},v=n(56),g=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(O.a)(Object(O.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(v.a)(e),[Object(O.a)(Object(O.a)({},t),{},{quantity:1})])},S=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(O.a)(Object(O.a)({},e),{},{quantity:e.quantity-1}):e}))},E={hidden:!0,cartItems:[]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.TOGGLE_CART_HIDDEN:return Object(O.a)(Object(O.a)({},e),{},{hidden:!e.hidden});case x.ADD_ITEM:return Object(O.a)(Object(O.a)({},e),{},{cartItems:g(e.cartItems,t.payload)});case x.CLEAR_ITEM_FROM_CART:return Object(O.a)(Object(O.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case x.REMOVE_ITEM:return Object(O.a)(Object(O.a)({},e),{},{cartItems:S(e.cartItems,t.payload)});case x.CLEAR_CART:return Object(O.a)(Object(O.a)({},e),{},{cartItems:[]});default:return e}},_={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;return t.type,e},y={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},w={collections:null,isFetching:!1,errorMessage:void 0},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.FETCH_COLLECTIONS_START:return Object(O.a)(Object(O.a)({},e),{},{isFetching:!0});case y.FETCH_COLLECTIONS_SUCCESS:return Object(O.a)(Object(O.a)({},e),{},{isFetching:!1,collections:t.payload});case y.FETCH_COLLECTIONS_FAILURE:return Object(O.a)(Object(O.a)({},e),{},{isFetching:!1,errorMessage:t.payload});default:return e}},T={key:"root",storage:p.a,whitelist:["cart"]},k=Object(d.c)({user:h,cart:I,directory:N,shop:C}),U=Object(b.a)(T,k),R=n(57),A=n(4),L=n.n(A),G=n(8),F=n(31),P=n(34);n(93),n(71);P.a.initializeApp({apiKey:"AIzaSyA870GollR9MnFtxp9tcPrhAIkqO2cAjsc",authDomain:"clothing-store-db-8f418.firebaseapp.com",projectId:"clothing-store-db-8f418",storageBucket:"clothing-store-db-8f418.appspot.com",messagingSenderId:"211713861467",appId:"1:211713861467:web:50f0089d2b6d978582dc7e",measurementId:"G-81B3GVSMP4"});var M=function(){var e=Object(F.a)(L.a.mark((function e(t,n){var r,c,a,i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=q.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,a=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(O.a)({displayName:c,email:a,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),H=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},D=P.a.auth(),q=P.a.firestore(),z=new P.a.auth.GoogleAuthProvider;z.setCustomParameters({prompt:"select_account"});P.a;var V=function(){return{type:y.FETCH_COLLECTIONS_START}},B=function(e){return{type:y.FETCH_COLLECTIONS_SUCCESS,payload:e}},K=function(e){return{type:y.FETCH_COLLECTIONS_FAILURE,payload:e}},Q=L.a.mark(X),W=L.a.mark(Y),J=L.a.mark(Z);function X(){var e,t,n;return L.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=q.collection("collections"),r.next=4,e.get();case 4:return t=r.sent,r.next=7,Object(G.b)(H,t);case 7:return n=r.sent,r.next=10,Object(G.c)(B(n));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(G.c)(K(r.t0.message));case 16:case"end":return r.stop()}}),Q,null,[[0,12]])}function Y(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(y.FETCH_COLLECTIONS_START,X);case 2:case"end":return e.stop()}}),W)}function Z(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(Y)]);case 2:case"end":return e.stop()}}),J)}var $=function(e){return{type:f.SIGN_IN_FAILURE,payload:e}},ee=function(e){var t=e.user,n=e.additionalData;return{type:f.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},te=L.a.mark(Oe),ne=L.a.mark(fe),re=L.a.mark(me),ce=L.a.mark(he),ae=L.a.mark(xe),ie=L.a.mark(ve),se=L.a.mark(ge),oe=L.a.mark(Se),ue=L.a.mark(Ee),le=L.a.mark(Ie),de=L.a.mark(_e),be=L.a.mark(Ne),je=L.a.mark(ye),pe=L.a.mark(we);function Oe(e,t){var n,r;return L.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(G.b)(M,e,t);case 3:return n=c.sent,c.next=6,n.get();case 6:return r=c.sent,c.next=9,Object(G.c)((a=Object(O.a)({id:r.id},r.data()),{type:f.SIGN_IN_SUCCESS,payload:a}));case 9:c.next=15;break;case 11:return c.prev=11,c.t0=c.catch(0),c.next=15,Object(G.c)($(c.t0));case 15:case"end":return c.stop()}var a}),te,null,[[0,11]])}function fe(){var e;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var n=D.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,Oe(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(G.c)($(t.t0));case 14:case"end":return t.stop()}}),ne,null,[[0,10]])}function me(){var e,t;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,D.signInWithPopup(z);case 3:return e=n.sent,t=e.user,n.next=7,Oe(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(G.c)($(n.t0));case 13:case"end":return n.stop()}}),re,null,[[0,9]])}function he(e){var t,n,r,c,a;return L.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,i.prev=1,i.next=4,D.signInWithEmailAndPassword(n,r);case 4:return c=i.sent,a=c.user,i.next=8,Oe(a);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(G.c)($(i.t0));case 14:case"end":return i.stop()}}),ce,null,[[1,10]])}function xe(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.signOut();case 3:return e.next=5,Object(G.c)({type:f.SIGN_OUT_SUCCESS});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(G.c)((t=e.t0,{type:f.SIGN_OUT_FAILURE,payload:t}));case 11:case"end":return e.stop()}var t}),ae,null,[[0,7]])}function ve(e){var t,n,r,c,a,i;return L.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,n=t.email,r=t.password,c=t.displayName,s.prev=1,s.next=4,D.createUserWithEmailAndPassword(n,r);case 4:return a=s.sent,i=a.user,s.next=8,Object(G.c)(ee({user:i,additionalData:{displayName:c}}));case 8:s.next=14;break;case 10:return s.prev=10,s.t0=s.catch(1),s.next=14,Object(G.c)((o=s.t0,{type:f.SIGN_UP_FAILURE,payload:o}));case 14:case"end":return s.stop()}var o}),ie,null,[[1,10]])}function ge(e){var t,n,r;return L.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.user,r=t.additionalData,c.next=3,Oe(n,r);case 3:case"end":return c.stop()}}),se)}function Se(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(f.GOOGLE_SIGN_IN_START,me);case 2:case"end":return e.stop()}}),oe)}function Ee(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(f.EMAIL_SIGN_IN_START,he);case 2:case"end":return e.stop()}}),ue)}function Ie(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(f.CHECK_USER_SESSION,fe);case 2:case"end":return e.stop()}}),le)}function _e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(f.SIGN_OUT_START,xe);case 2:case"end":return e.stop()}}),de)}function Ne(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(f.SIGN_UP_START,ve);case 2:case"end":return e.stop()}}),be)}function ye(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(f.SIGN_UP_SUCCESS,ge);case 2:case"end":return e.stop()}}),je)}function we(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(Se),Object(G.b)(Ee),Object(G.b)(Ie),Object(G.b)(_e),Object(G.b)(Ne),Object(G.b)(ye)]);case 2:case"end":return e.stop()}}),pe)}var Ce=function(){return{type:x.TOGGLE_CART_HIDDEN}},Te=function(e){return{type:x.ADD_ITEM,payload:e}},ke=L.a.mark(Ae),Ue=L.a.mark(Le),Re=L.a.mark(Ge);function Ae(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.c)({type:x.CLEAR_CART});case 2:case"end":return e.stop()}}),ke)}function Le(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(f.SIGN_OUT_SUCCESS,Ae);case 2:case"end":return e.stop()}}),Ue)}function Ge(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(Le)]);case 2:case"end":return e.stop()}}),Re)}var Fe=L.a.mark(Pe);function Pe(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(Z),Object(G.b)(we),Object(G.b)(Ge)]);case 2:case"end":return e.stop()}}),Fe)}var Me=Object(R.a)(),He=[Me];var De=Object(d.e)(U,d.a.apply(void 0,He));Me.run(Pe);var qe=Object(b.b)(De),ze=(n(73),n(14)),Ve=n(11),Be=(n(74),n(75),function(e){return e.cart}),Ke=Object(Ve.a)([Be],(function(e){return e.cartItems})),Qe=Object(Ve.a)([Be],(function(e){return e.hidden})),We=Object(Ve.a)([Ke],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Je=Object(Ve.a)([Ke],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)}));function Xe(){return(Xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ye(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var Ze=c.createElement("g",null),$e=c.createElement("g",null),et=c.createElement("g",null),tt=c.createElement("g",null),nt=c.createElement("g",null),rt=c.createElement("g",null),ct=c.createElement("g",null),at=c.createElement("g",null),it=c.createElement("g",null),st=c.createElement("g",null),ot=c.createElement("g",null),ut=c.createElement("g",null),lt=c.createElement("g",null),dt=c.createElement("g",null),bt=c.createElement("g",null);function jt(e,t){var n=e.title,r=e.titleId,a=Ye(e,["title","titleId"]);return c.createElement("svg",Xe({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Ze,$e,et,tt,nt,rt,ct,at,it,st,ot,ut,lt,dt,bt)}var pt=c.forwardRef(jt),Ot=(n.p,n(76),Object(Ve.b)({itemCount:Je})),ft=Object(u.b)(Ot,(function(e){return{toggleCartHidden:function(){return e(Ce())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(r.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(r.jsx)(pt,{className:"shopping-icon"}),Object(r.jsx)("span",{className:"item-count",children:n})]})})),mt=(n(77),function(e){var t=e.item,n=t.imageUrl,c=t.price,a=t.name,i=t.quantity;return Object(r.jsxs)("div",{className:"cart-item",children:[Object(r.jsx)("img",{src:n,alt:"item"}),Object(r.jsxs)("div",{className:"item-details",children:[Object(r.jsx)("span",{className:"name",children:a}),Object(r.jsxs)("span",{className:"price",children:[i," X ",c]})]})]})}),ht=n(25),xt=n(19),vt=n(20);function gt(){var e=Object(xt.a)(["\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: 'Open Sans Condensed';\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  ","\n"]);return gt=function(){return e},e}function St(){var e=Object(xt.a)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]);return St=function(){return e},e}function Et(){var e=Object(xt.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]);return Et=function(){return e},e}function It(){var e=Object(xt.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]);return It=function(){return e},e}var _t=Object(vt.a)(It()),Nt=Object(vt.a)(Et()),yt=Object(vt.a)(St()),wt=vt.b.button(gt(),(function(e){return e.isGoogleSignIn?yt:e.inverted?Nt:_t})),Ct=function(e){var t=e.children,n=Object(ht.a)(e,["children"]);return Object(r.jsx)(wt,Object(O.a)(Object(O.a)({},n),{},{children:t}))},Tt=(n(78),Object(Ve.b)({cartItems:Ke})),kt=Object(ze.g)(Object(u.b)(Tt)((function(e){var t=e.cartItems,n=e.history,c=e.dispatch;return Object(r.jsxs)("div",{className:"cart-dropdown",children:[Object(r.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(r.jsx)(mt,{item:e},e.id)})):Object(r.jsx)("span",{className:"empty-message",children:"Your cart ist empty"})}),Object(r.jsx)(Ct,{onClick:function(){n.push("/checkout"),c(Ce())},children:"Go to checkout"})]})}))),Ut=Object(Ve.a)([function(e){return e.user}],(function(e){return e.currentUser}));function Rt(){return(Rt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function At(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var Lt=c.createElement("desc",null,"Created with Sketch."),Gt=c.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},c.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},c.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),c.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))));function Ft(e,t){var n=e.title,r=e.titleId,a=At(e,["title","titleId"]);return c.createElement("svg",Rt({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},a),void 0===n?c.createElement("title",{id:r},"Group"):n?c.createElement("title",{id:r},n):null,Lt,Gt)}var Pt=c.forwardRef(Ft);n.p;function Mt(){var e=Object(xt.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"]);return Mt=function(){return e},e}function Ht(){var e=Object(xt.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]);return Ht=function(){return e},e}function Dt(){var e=Object(xt.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n"]);return Dt=function(){return e},e}function qt(){var e=Object(xt.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"]);return qt=function(){return e},e}var zt=vt.b.div(qt()),Vt=Object(vt.b)(o.b)(Dt()),Bt=vt.b.div(Ht()),Kt=Object(vt.b)(o.b)(Mt()),Qt=Object(Ve.b)({currentUser:Ut,hidden:Qe}),Wt=Object(u.b)(Qt,(function(e){return{signOutStart:function(){return e({type:f.SIGN_OUT_START})}}}))((function(e){var t=e.currentUser,n=e.hidden,c=e.signOutStart;return Object(r.jsxs)(zt,{children:[Object(r.jsx)(Vt,{to:"/",children:Object(r.jsx)(Pt,{className:"logo"})}),Object(r.jsxs)(Bt,{children:[Object(r.jsx)(Kt,{to:"/shop",children:"SHOP"}),Object(r.jsx)(Kt,{to:"/shop",children:"CONTACT"}),t?Object(r.jsx)(Kt,{as:"div",onClick:c,children:"SIGN OUT"}):Object(r.jsx)(Kt,{to:"/signin",children:"SIGN IN"}),Object(r.jsx)(ft,{})]}),n?null:Object(r.jsx)(kt,{})]})})),Jt=(n(80),Object(ze.g)((function(e){var t=e.title,n=e.imageUrl,c=e.size,a=e.history,i=e.linkUrl,s=e.match;return Object(r.jsxs)("div",{className:"".concat(c," menu-item"),onClick:function(){return a.push("".concat(s.url).concat(i))},children:[Object(r.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(r.jsx)("span",{className:"subtitle ",children:"SHOP NOW"})]})]})}))),Xt=(n(81),Object(Ve.a)([function(e){return e.directory}],(function(e){return e.sections}))),Yt=Object(Ve.b)({sections:Xt}),Zt=Object(u.b)(Yt)((function(e){var t=e.sections;return Object(r.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(ht.a)(e,["id"]);return Object(r.jsx)(Jt,Object(O.a)({},n),t)}))})}));function $t(){var e=Object(xt.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\npadding: 20px 80px;\n"]);return $t=function(){return e},e}var en=vt.b.div($t()),tn=function(){return Object(r.jsx)(en,{children:Object(r.jsx)(Zt,{})})},nn=n(54),rn=n.n(nn),cn=function(e){return e.shop},an=Object(Ve.a)([cn],(function(e){return e.collections})),sn=Object(Ve.a)([an],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),on=rn()((function(e){return Object(Ve.a)([an],(function(t){return t?t[e]:null}))})),un=Object(Ve.a)([cn],(function(e){return e.isFetching})),ln=Object(Ve.a)([cn],(function(e){return!!e.collections}));function dn(){var e=Object(xt.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return dn=function(){return e},e}function bn(){var e=Object(xt.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return bn=function(){return e},e}var jn=vt.b.div(bn()),pn=vt.b.div(dn()),On=function(e){return function(t){var n=t.isLoading,c=Object(ht.a)(t,["isLoading"]);return n?Object(r.jsx)(jn,{children:Object(r.jsx)(pn,{})}):Object(r.jsx)(e,Object(O.a)({},c))}},fn=(n(82),Object(u.b)(null,(function(e){return{addItem:function(t){return e(Te(t))}}}))((function(e){var t=e.item,n=e.addItem,c=t.name,a=t.price,i=t.imageUrl;return Object(r.jsxs)("div",{className:"collection-item",children:[Object(r.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),Object(r.jsxs)("div",{className:"collection-footer",children:[Object(r.jsx)("span",{className:"name",children:c}),Object(r.jsx)("span",{className:"price",children:a})]}),Object(r.jsx)(Ct,{className:"custom-button",onClick:function(){return n(t)},inverted:!0,children:"Add to card"})]})}))),mn=(n(83),function(e){var t=e.title,n=e.items;return Object(r.jsxs)("div",{className:"collection-preview",children:[Object(r.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(r.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(r.jsx)(fn,{item:e},e.id)}))})]})}),hn=(n(84),Object(Ve.b)({collections:sn})),xn=Object(u.b)(hn)((function(e){var t=e.collections;return Object(r.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(ht.a)(e,["id"]);return Object(r.jsx)(mn,Object(O.a)({},n),t)}))})})),vn=Object(Ve.b)({isLoading:un}),gn=Object(d.d)(Object(u.b)(vn),On)(xn),Sn=(n(85),Object(u.b)((function(e,t){return{collection:on(t.match.params.collectionId)(e)}}))((function(e){var t=e.collection,n=t.title,c=t.items;return Object(r.jsxs)("div",{className:"collection-page",children:[Object(r.jsx)("h2",{className:"title",children:n}),Object(r.jsx)("div",{className:"items",children:c.map((function(e){return Object(r.jsx)(fn,{item:e},e.id)}))})]})}))),En=Object(Ve.b)({isLoading:function(e){return!ln(e)}}),In=Object(d.d)(Object(u.b)(En),On)(Sn),_n=Object(u.b)(null,(function(e){return{fetchCollectionsStart:function(){return e(V())}}}))((function(e){var t=e.fetchCollectionsStart,n=e.match;return Object(c.useEffect)((function(){t()}),[t]),Object(r.jsxs)("div",{className:"shop-page",children:[Object(r.jsx)(ze.b,{exact:!0,path:"".concat(n.path),component:gn}),Object(r.jsx)(ze.b,{path:"".concat(n.path,"/:collectionId"),component:In})]})})),Nn=(n(86),n(87),Object(u.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:x.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(Te(t))},removeItem:function(t){return e(function(e){return{type:x.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,c=e.addItem,a=e.removeItem,i=t.name,s=t.imageUrl,o=t.price,u=t.quantity;return Object(r.jsxs)("div",{className:"checkout-item",children:[Object(r.jsx)("div",{className:"image-container",children:Object(r.jsx)("img",{src:s,alt:"item"})}),Object(r.jsx)("span",{className:"name",children:i}),Object(r.jsxs)("span",{className:"quantity",children:[Object(r.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:"\u276e"}),Object(r.jsx)("span",{className:"value",children:u}),Object(r.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276f"})]}),Object(r.jsx)("span",{className:"price",children:o}),Object(r.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),yn=n(55),wn=n.n(yn),Cn=function(e){var t=e.price,n=100*t;return Object(r.jsx)(wn.a,{label:"Pay Now",name:"Cloting Store Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://sendeyo.com/up/d/f3eb2117da",description:"your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_51IJW4xKQVIvT67wQjwqSIw3kDCjnF8QLf06Yv6SZ9bSs9peA7pH2NC576HgG8pUVQsQ66xaUiO515lZRJT83EGvC00kShhLzzR"})},Tn=Object(Ve.b)({cartItems:Ke,total:We}),kn=Object(u.b)(Tn)((function(e){var t=e.cartItems,n=e.total;return Object(r.jsxs)("div",{className:"checkout-page",children:[Object(r.jsxs)("div",{className:"checkout-header",children:[Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Product"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Description"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Quantity"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Price"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(r.jsx)(Nn,{cartItem:e},e.id)})),Object(r.jsx)("div",{className:"total",children:Object(r.jsxs)("span",{children:["TOTAL : $",n," "]})}),Object(r.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for payments*",Object(r.jsx)("br",{}),"4242 4242 4242 4242 - Exp: you can write any date in the future from your current date - CVV: 123"]}),Object(r.jsx)(Cn,{price:n})]})})),Un=n(33),Rn=n(40),An=(n(88),function(e){var t=e.handleChange,n=e.label,c=Object(ht.a)(e,["handleChange","label"]);return Object(r.jsxs)("div",{className:"group",children:[Object(r.jsx)("input",Object(O.a)({className:"form-input",onChange:t},c)),n?Object(r.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label"),children:n}):null]})}),Ln=(n(89),Object(u.b)(null,(function(e){return{googleSignInStart:function(){return e({type:f.GOOGLE_SIGN_IN_START})},emailSignInStart:function(t,n){return e({type:f.EMAIL_SIGN_IN_START,payload:{email:t,password:n}})}}}))((function(e){var t=e.emailSignInStart,n=e.googleSignInStart,a=Object(c.useState)({email:"",password:""}),i=Object(Rn.a)(a,2),s=i[0],o=i[1],u=s.email,l=s.password,d=function(){var e=Object(F.a)(L.a.mark((function e(n){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(u,l);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.value,r=t.name;o(Object(O.a)(Object(O.a)({},s),{},Object(Un.a)({},r,n)))};return Object(r.jsxs)("div",{className:"sign-in",children:[Object(r.jsx)("h2",{children:"i already have an account"}),Object(r.jsx)("span",{children:" Sign in with your email and password"}),Object(r.jsxs)("form",{onSubmit:d,children:[Object(r.jsx)(An,{name:"email",type:"email",handleChange:b,value:u,label:"email",required:!0}),Object(r.jsx)(An,{name:"password",type:"password",handleChange:b,value:l,label:"password",required:!0}),Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)(Ct,{type:"submit",children:"Sign in "}),Object(r.jsx)(Ct,{type:"button",onClick:n,isGoogleSignIn:!0,children:" with google"})]})]})]})}))),Gn=(n(90),Object(u.b)(null,(function(e){return{signUpStart:function(t){return e(function(e){return{type:f.SIGN_UP_START,payload:e}}(t))}}}))((function(e){var t=e.signUpStart,n=Object(c.useState)({displayName:"",email:"",password:"",confirmPassword:""}),a=Object(Rn.a)(n,2),i=a[0],s=a[1],o=i.displayName,u=i.email,l=i.password,d=i.confirmPassword,b=function(){var e=Object(F.a)(L.a.mark((function e(n){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),l===d){e.next=4;break}return alert("passwords do not match"),e.abrupt("return");case 4:t({displayName:o,email:u,password:l});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,n=t.name,r=t.value;s(Object(O.a)(Object(O.a)({},i),{},Object(Un.a)({},n,r)))};return Object(r.jsxs)("div",{className:"sign-up",children:[Object(r.jsx)("h2",{className:"title",children:"i do not have an account"}),Object(r.jsx)("span",{children:"Sign up with email and password "}),Object(r.jsxs)("form",{className:"sign-up-form",onSubmit:b,children:[Object(r.jsx)(An,{type:"text",name:"displayName",value:o,onChange:j,label:"Display Name ",required:!0}),Object(r.jsx)(An,{type:"email",name:"email",value:u,onChange:j,label:"Email ",required:!0}),Object(r.jsx)(An,{type:"password",name:"password",value:l,onChange:j,label:"Password",required:!0}),Object(r.jsx)(An,{type:"password",name:"confirmPassword",value:d,onChange:j,label:"Confirm Password ",required:!0}),Object(r.jsx)(Ct,{type:"submit",children:" Sign Up "})]})]})}))),Fn=(n(91),function(){return Object(r.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(r.jsx)(Ln,{}),Object(r.jsx)(Gn,{})]})}),Pn=Object(Ve.b)({currentUser:Ut}),Mn=Object(u.b)(Pn,(function(e){return{checkUserSession:function(){return e({type:f.CHECK_USER_SESSION})}}}))((function(e){var t=e.checkUserSession,n=e.currentUser;return Object(c.useEffect)((function(){t()}),[t]),Object(r.jsxs)("div",{children:[Object(r.jsx)(Wt,{}),Object(r.jsxs)(ze.d,{children:[Object(r.jsx)(ze.b,{exact:!0,path:"/",component:tn}),Object(r.jsx)(ze.b,{path:"/shop",component:_n}),Object(r.jsx)(ze.b,{exact:!0,path:"/checkout",component:kn}),Object(r.jsx)(ze.b,{exact:!0,path:"/signin",render:function(){return n?Object(r.jsx)(ze.a,{to:"/"}):Object(r.jsx)(Fn,{})}})]})]})}));s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(u.a,{store:De,children:Object(r.jsx)(o.a,{children:Object(r.jsx)(l.a,{persistor:qe,children:Object(r.jsx)(Mn,{})})})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.26cdfbaa.chunk.js.map