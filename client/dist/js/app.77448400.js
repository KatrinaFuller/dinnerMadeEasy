(function(e){function t(t){for(var r,s,n=t[0],c=t[1],l=t[2],p=0,d=[];p<n.length;p++)s=n[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var n=a[s];0!==i[n]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},s={app:0},i={app:0},o=[];function n(e){return c.p+"js/"+({MoreFavRecipes:"MoreFavRecipes",MoreToTry:"MoreToTry",activeRecipe:"activeRecipe",profile:"profile"}[e]||e)+"."+{MoreFavRecipes:"8ef022c3",MoreToTry:"704a3d98",activeRecipe:"351a1abf",profile:"4c6a0b7a"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={MoreFavRecipes:1,MoreToTry:1,activeRecipe:1,profile:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=new Promise((function(t,a){for(var r="css/"+({MoreFavRecipes:"MoreFavRecipes",MoreToTry:"MoreToTry",activeRecipe:"activeRecipe",profile:"profile"}[e]||e)+"."+{MoreFavRecipes:"7fa756cd",MoreToTry:"a877434f",activeRecipe:"cb52bf30",profile:"772ae384"}[e]+".css",i=c.p+r,o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var l=o[n],p=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(p===r||p===i))return t()}var d=document.getElementsByTagName("style");for(n=0;n<d.length;n++){l=d[n],p=l.getAttribute("data-href");if(p===r||p===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete s[e],m.parentNode.removeChild(m),a(o)},m.href=i;var u=document.getElementsByTagName("head")[0];u.appendChild(m)})).then((function(){s[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,a){r=i[e]=[t,a]}));t.push(r[2]=o);var l,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=n(e);var d=new Error;l=function(t){p.onerror=p.onload=null,clearTimeout(m);var a=i[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,a[1](d)}i[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:p})}),12e4);p.onerror=p.onload=l,document.head.appendChild(p)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=p;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("64a9"),s=a.n(r);s.a},"0bfc":function(e,t,a){},"16da":function(e,t,a){},"33bd":function(e,t,a){"use strict";var r=a("46e5"),s=a.n(r);s.a},"41cb":function(e,t,a){"use strict";var r=a("2b0e"),s=a("8c4f"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid bg"},[a("navbar"),a("homeHeader"),a("carousel"),a("randomRecipeButton")],1)},o=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sticky-top row"},[a("div",{staticClass:"col-12"},[a("nav",{staticClass:"navbar"},[a("form",{staticClass:"form-inline"},[e.user.email?a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.logoutNav}},[e._v("Logout")]):a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.loginNav}},[e._v("Login")]),e.user.email?a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.usernameButton}},[e._v("Hello, "+e._s(e.user.name))]):e._e()])])])])},c=[],l=(a("b60a"),{name:"navbar",data(){return{}},computed:{user(){return this.$store.state.user}},methods:{loginNav(){this.$store.dispatch("loginNav")},logoutNav(){this.$store.dispatch("logoutNav")},usernameButton(){this.$store.dispatch("usernameButton")}},components:{}}),p=l,d=(a("d433"),a("2877")),m=Object(d["a"])(p,n,c,!1,null,"24ad8668",null),u=m.exports,h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"carousel main-carousel slide w-100",attrs:{"data-ride":"carousel"}},[a("div",{staticClass:"carousel-inner",attrs:{row:""}},[a("div",{staticClass:"carousel-item h100 caro-item-1 active"},[a("a",{attrs:{href:"http://www.frenchrevolutionfood.com/2009/09/french-in-a-flash-tarragon-chicken-and-carrot-muffins-with-sweet-chevre-icing/",target:"_blank"}},[a("img",{staticClass:"mx-2",attrs:{src:"https://www.edamam.com/web-img/b28/b28acc0eed7e65de535d36954006f358.jpg",alt:"6 slide"}})]),a("a",{attrs:{href:"https://www.marthastewart.com/1154180/ham-and-apple-sandwiches",target:"_blank"}},[a("img",{staticClass:"mx-2",attrs:{src:"https://www.edamam.com/web-img/f38/f38e659af58a0119679d361184aa2121.jpg",alt:"1 slide"}})]),a("a",{attrs:{href:"http://www.seriouseats.com/recipes/2011/12/salmon-rillette-recipe.html",target:"_blank"}},[a("img",{staticClass:"mx-2",attrs:{src:"https://www.edamam.com/web-img/084/084df1023be09bf04c03701b7d6962bd.JPG",alt:"2 slide"}})])]),a("div",{staticClass:"carousel-item h100 caro-item-1"},[a("a",{attrs:{href:"http://www.saveur.com/article/Recipes/Burnt-Scallion-Fish",target:"_blank"}},[a("img",{staticClass:"mx-2",attrs:{src:"https://www.edamam.com/web-img/a96/a967fbe797803dbe8418a668cf304b53.jpg",alt:"6 slide"}})]),a("a",{attrs:{href:"http://www.marthastewart.com/862754/pork-quesadillas",target:"_blank"}},[a("img",{staticClass:"mx-2",attrs:{src:"https://www.edamam.com/web-img/310/3109aa67eaebff453982004a29ae61f5.jpg",alt:"1 slide"}})]),a("a",{attrs:{href:"http://norecipes.com/blog/2010/02/02/kimchi-pasta-recipe/",target:"_blank"}},[a("img",{staticClass:"mx-2",attrs:{src:"https://www.edamam.com/web-img/2d1/2d1770d49a37ccc618c0780c2abcf2b9.jpg",alt:"2 slide"}})])]),a("div",{staticClass:"carousel-item h100 caro-item-1"},[a("a",{attrs:{href:"http://www.bbcgoodfood.com/recipes/2558/",target:"_blank"}},[a("img",{staticClass:"mx-2",attrs:{src:"https://www.edamam.com/web-img/d37/d376c145f2a59befa7738a2c35caab31.jpg",alt:"6 slide"}})]),a("a",{attrs:{href:"http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",target:"_blank"}},[a("img",{staticClass:"mx-2",attrs:{src:"https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",alt:"1 slide"}})]),a("a",{attrs:{href:"https://www.epicurious.com/recipes/food/views/pork-carnitas-tacos",target:"_blank"}},[a("img",{staticClass:"mx-2",attrs:{src:"https://www.edamam.com/web-img/402/402c9eaeaa486495af64e4b9e0912ede.jpg",alt:"2 slide"}})])]),a("div",{staticClass:"carousel-item h100 caro-item-1"},[a("a",{attrs:{href:"http://www.simplyrecipes.com/recipes/hawaiian_pork_burger/",target:"_blank"}},[a("img",{staticClass:"mx-2",attrs:{src:"https://www.edamam.com/web-img/bc2/bc29eaf7faf7e50684e34007dbc61d49.jpg",alt:"6 slide"}})]),a("a",{attrs:{href:"http://www.simplyrecipes.com/recipes/pasta_with_ham_and_peas/",target:"_blank"}},[a("img",{staticClass:"mx-2",attrs:{src:"https://www.edamam.com/web-img/876/876dc994cccb72522bedee1a57fe1f8e.jpg",alt:"1 slide"}})]),a("a",{attrs:{href:"http://www.kitchendaily.com/recipe/the-eatingwell-taco-140840",target:"_blank"}},[a("img",{staticClass:"mx-2",attrs:{src:"https://www.edamam.com/web-img/fd6/fd61978d4e8f54059e99530d5737b545.jpg",alt:"2 slide"}})])])]),a("a",{staticClass:"carousel-control-prev",attrs:{href:".main-carousel",role:"button","data-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon"}),a("span",{staticClass:"sr-only"},[e._v("Previous")])]),a("a",{staticClass:"carousel-control-next",attrs:{href:".main-carousel",role:"button","data-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon"}),a("span",{staticClass:"sr-only"},[e._v("Next")])])])}],v={name:"carousel",data(){return{}},computed:{},methods:{},components:{}},g=v,w=(a("33bd"),Object(d["a"])(g,h,f,!1,null,"69dcfeb1",null)),y=w.exports,b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"homeHeader"},[a("h1",[e._v("Dinner Made Easy")]),a("p",[e._v("Browse recipes to make dinner time a breeze")])])}],C={name:"homeHeader",data(){return{}},computed:{},methods:{},components:{}},R=C,T=(a("8d01"),Object(d["a"])(R,b,_,!1,null,"bf890412",null)),x=T.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pt-5"},[a("div",{staticClass:"col-12 offset-md-3 col-md-6"},[a("h6",[e._v("Main Ingredient")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.mainIngredient,expression:"mainIngredient"}],staticClass:"dropdown",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.mainIngredient=t.target.multiple?a:a[0]}}},[a("option"),a("option",[e._v("random")]),a("option",[e._v("chicken")]),a("option",[e._v("beef")]),a("option",[e._v("pork")]),a("option",[e._v("ham")]),a("option",[e._v("turkey")]),a("option",[e._v("fish")])])]),a("div",{staticClass:"col-12 offset-md-3 col-md-6 pt-4"},[a("h6",[e._v("Dietary Requirement")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.dietaryRequirement,expression:"dietaryRequirement"}],staticClass:"dropdown",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.dietaryRequirement=t.target.multiple?a:a[0]}}},[a("option"),a("option",[e._v("low-carb")]),a("option",[e._v("low-fat")]),a("option",[e._v("low-sodium")]),a("option",[e._v("high-protein")]),a("option",[e._v("high-fiber")]),a("option",[e._v("balanced")])])]),a("div",{staticClass:"randomRecipeButton pt-4"},[a("button",{staticClass:"btn btn-lg",attrs:{type:"button"},on:{click:e.generate}},[e._v("Generate Recipe")]),a("div",{staticClass:"row justify-content-center pt-4"},[e.recipe?a("div",{staticClass:"card shadow mb-4",staticStyle:{width:"30rem"}},[a("h1",[e._v(e._s(e.recipe.label))]),a("img",{attrs:{alt:"Card image cap",src:""+e.recipe.image}}),a("div",{staticClass:"card-body"},[e._m(0),e._l(e.recipe.ingredients,(function(t){return a("p",{key:t._id,staticClass:"card-text"},[e._v(e._s(t.text))])})),a("button",{staticClass:"btn mx-1",on:{click:function(t){return e.addToFavorites()}}},[e._v("Add to My Favorites")]),a("button",{staticClass:"btn mx-1",on:{click:function(t){return e.addToTry()}}},[e._v("Recipe to try")]),a("button",{staticClass:"btn mx-1"},[a("a",{attrs:{href:""+e.recipe.url,target:"_blank"}},[e._v("Go To Recipe")])])],2)]):a("div",{staticClass:"spinner-border",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[e._v("Loading...")])])])])])},$=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h4",[a("b",[e._v("Ingredients:")])])}],M={name:"randomRecipeButton",data(){return{show:!1,mainIngredient:"",dietaryRequirement:""}},computed:{recipe(){return this.$store.state.recipes.recipe},ingredient(){return this.$store.state.recipes.recipe.ingredients}},mounted(){this.$store.dispatch("generate",{})},methods:{generate(){this.$store.commit("setRecipes",{});let e={random:!0};this.mainIngredient&&(e.query=this.mainIngredient),this.dietaryRequirement&&(e.diet=this.dietaryRequirement),this.$store.dispatch("generate",e)},addToFavorites(){this.recipe.type="favorites",this.$store.dispatch("addRecipe",this.recipe)},addToTry(){this.recipe.type="toTry",this.$store.dispatch("addToTry",this.recipe)}},components:{}},F=M,N=(a("c58c"),Object(d["a"])(F,k,$,!1,null,"68c0eea0",null)),j=N.exports,I={name:"home",components:{carousel:y,navbar:u,homeHeader:x,randomRecipeButton:j}},B=I,E=(a("a9fc"),Object(d["a"])(B,i,o,!1,null,"15f9cd88",null)),U=E.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login pt-4 bg"},[a("h1",{staticClass:"title mb-4"},[e._v("Dinner Made Easy")]),e.loginForm?a("form",{on:{submit:function(t){return t.preventDefault(),e.loginUser(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.email,expression:"creds.email"}],staticClass:"shadow",attrs:{type:"email",placeholder:"email"},domProps:{value:e.creds.email},on:{input:function(t){t.target.composing||e.$set(e.creds,"email",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.password,expression:"creds.password"}],staticClass:"shadow mt-2",attrs:{type:"password",placeholder:"password"},domProps:{value:e.creds.password},on:{input:function(t){t.target.composing||e.$set(e.creds,"password",t.target.value)}}}),e._m(0)]):a("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.name,expression:"newUser.name"}],staticClass:"shadow",attrs:{type:"text",placeholder:"name"},domProps:{value:e.newUser.name},on:{input:function(t){t.target.composing||e.$set(e.newUser,"name",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.email,expression:"newUser.email"}],staticClass:"shadow",attrs:{type:"email",placeholder:"email"},domProps:{value:e.newUser.email},on:{input:function(t){t.target.composing||e.$set(e.newUser,"email",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.password,expression:"newUser.password"}],staticClass:"shadow",attrs:{type:"password",placeholder:"password"},domProps:{value:e.newUser.password},on:{input:function(t){t.target.composing||e.$set(e.newUser,"password",t.target.value)}}}),a("button",{staticClass:"btn m-2 shadow",attrs:{type:"submit"}},[e._v("Create Account")])]),a("div",{staticClass:"action text",on:{click:function(t){e.loginForm=!e.loginForm}}},[e.loginForm?a("p",[e._v("No account? Click here to Register")]):a("p",[e._v("Already have an account? Click here to Login")])]),e._m(1)])},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12"},[a("button",{staticClass:"btn m-2",attrs:{type:"submit"}},[e._v("Login")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-12"},[r("img",{staticClass:"img-fluid",attrs:{src:a("51cf"),alt:""}})])}],S={name:"login",data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",name:""}}},beforeCreate(){this.$store.state.user._id&&this.$router.push({name:"home"})},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},L=S,P=(a("ffb6"),Object(d["a"])(L,O,A,!1,null,"0313e7b4",null)),q=P.exports;r["default"].use(s["a"]);t["a"]=new s["a"]({routes:[{path:"/",name:"home",component:U},{path:"/login",name:"login",component:q},{path:"/profile",name:"profile",component:function(){return a.e("profile").then(a.bind(null,"c66d"))}},{path:"/MoreFavRecipes",name:"MoreFavRecipes",component:function(){return a.e("MoreFavRecipes").then(a.bind(null,"faf2"))}},{path:"/MoreToTry",name:"MoreToTry",component:function(){return a.e("MoreToTry").then(a.bind(null,"c950"))}},{path:"/recipes/:recipeId",name:"activeRecipe",component:function(){return a.e("activeRecipe").then(a.bind(null,"bfe2"))}},{path:"*",redirect:"/"}]})},"46e5":function(e,t,a){},"51cf":function(e,t,a){e.exports=a.p+"img/dmelogo.e68538e5.png"},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)},i=[],o=(a("034f"),a("2877")),n={},c=Object(o["a"])(n,s,i,!1,null,null,null),l=c.exports,p=a("41cb"),d=a("2f62"),m=a("bc3a"),u=a.n(m),h=a("b60a"),f=a("5b7e"),v=a("3d20"),g=a.n(v);r["default"].use(d["a"]);let w=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",y=u.a.create({baseURL:w+"api/",timeout:999999999,withCredentials:!0});var b=new d["a"].Store({modules:{AuthModule:h["a"]},state:{user:{},recipes:[],randomRecipes:[],favoriteRecipes:[],toTryRecipes:[],groceries:[],activeRecipe:{}},mutations:{setUser(e,t){e.user=t},resetState(e,t){e.user={}},setRecipes(e,t){e.recipes=t},setRandomRecipes(e,t){e.randomRecipes=t},setFavRecipes(e,t){e.favoriteRecipes=t},addFavRecipe(e,t){e.favoriteRecipes.unshift(t)},addToTryRecipe(e,t){e.toTryRecipes.unshift(t)},removeTry(e,t){let a=e.toTryRecipes;for(let r=0;r<a.length;r++)a[r]._id==t._id&&e.toTryRecipes.splice(r,1)},removeFav(e,t){let a=e.favoriteRecipes;for(let r=0;r<a.length;r++)a[r]._id==t._id&&e.favoriteRecipes.splice(r,1)},setIngredients(e,t){e.groceries=t},setToTry(e,t){e.toTryRecipes=t},setActiveRecipe(e,t){e.activeRecipe=t}},actions:{async loginNav(){try{p["a"].push({name:"login"})}catch(e){console.error(e)}},async logoutNav({commit:e,dispatch:t}){try{await f["a"].Logout();e("resetState"),p["a"].push({name:"home"})}catch(a){console.warn(a.message)}},backButton(){p["a"].push({name:"home"})},backToProfile(){p["a"].push({name:"profile"})},MoreFavRecipes(){p["a"].push({name:"MoreFavRecipes"})},MoreToTry(){p["a"].push({name:"MoreToTry"})},usernameButton(){p["a"].push({name:"profile"})},async addRecipe({dispatch:e},t){try{await y.post("/recipe/favRecipes",t);e("addToFavorites");const a=g.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});a.fire({type:"success",title:"added recipe"})}catch(a){const e=g.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});e.fire({type:"warning",title:"please login to continue"}),console.warn(a.message)}},async addToFavorites({commit:e,dispatch:t},a){try{let t=await y.get("/recipe?type=favorites");e("setFavRecipes",t.data)}catch(r){console.error(r)}},async addNote({dispatch:e},t){try{await y.post(`/recipe/${t.recipeId}/notes`,t);t._id=t.recipeId,e("getRecipeById",t)}catch(a){console.error(a)}},async addDirections({dispatch:e},t){try{await y.post(`/recipe/${t.recipeId}/directions`,t);t._id=t.recipeId,e("getRecipeById",t)}catch(a){console.error(a)}},async deleteDirection({dispatch:e},t){try{await y.put(`/recipe/${t.recipeId}/directions`,t);t._id=t.recipeId,e("getRecipeById",t)}catch(a){console.error(a)}},async deleteNote({dispatch:e},t){try{await y.put(`/recipe/${t.recipeId}/notes`,t);t._id=t.recipeId,e("getRecipeById",t)}catch(a){console.error(a)}},async addToTry({dispatch:e},t){try{await y.post("/recipe/toTryRecipes",t);e("addToTryList");const a=g.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});a.fire({type:"success",title:"added recipe"})}catch(a){const e=g.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});e.fire({type:"warning",title:"please login to continue"}),console.warn(a.message)}},async addToTryList({commit:e}){try{let t=await y.get("/recipe?type=toTry");e("setToTry",t.data)}catch(t){console.error(t)}},async generate({commit:e,dispatch:t},a){let r=JSON.parse(localStorage.getItem("recipes"));try{if(!r||a.random){let t="/recipe/random";t+=a.query?`?q=${a.query}`:"",a.query?t+=a.diet?"&diet="+a.diet:"":t+=a.diet?"?diet="+a.diet:"";let s=await y.get(t);e("setRandomRecipes",s.data),localStorage.setItem("recipes",JSON.stringify(s.data)),r=s.data}let t=Math.floor(99*Math.random());e("setRecipes",r[t])}catch(s){console.error(s)}},async getRecipeById({commit:e},t){try{let a=await y.get(`/recipe/${t._id}`,t);e("setActiveRecipe",a.data)}catch(a){console.error(a)}},async removeRecipe({dispatch:e,commit:t},a){try{await y.delete("/recipe/"+a._id);e("addToFavorites"),e("addToTryList")}catch(r){console.error(r)}},async getGroceries({commit:e,dispatch:t}){try{let t=await y.get("/grocery");e("setIngredients",t.data)}catch(a){console.error(a)}},async addIngredient({commit:e,dispatch:t},a){try{await y.post("/grocery",a);t("getGroceries")}catch(r){console.error(r)}},async deleteGrocery({commit:e,dispatch:t},a){try{await y.delete("/grocery/"+a._id);t("getGroceries")}catch(r){console.error(r)}},async toggleCompletedStatus({dispatch:e},t){try{await y.put("/grocery/"+t._id,t);e("getGroceries")}catch(a){console.error(a)}},async setRating({dispatch:e},t){try{await y.put(`/recipe/${t._id}`,t);e("getRecipeById",t)}catch(a){console.error(a)}},async moveRecipe({commit:e,dispatch:t},a){try{if("favorites"==a.type){await y.put(`recipe/${a._id}`,a);e("addFavRecipe",a),e("removeTry",a)}else{await y.put(`recipe/${a._id}`,a);e("addToTryRecipe",a),e("removeFav",a)}}catch(r){console.error(r)}}}}),_=a("9483");async function C(){let e=await f["a"].Authenticate();e?b.commit("setUser",e):p["a"].push({name:"home"}),new r["default"]({router:p["a"],store:b,render:function(e){return e(l)}}).$mount("#app")}Object(_["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),window.location.reload(!0)},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),r["default"].config.productionTip=!1,C()},"5aed":function(e,t,a){},"5b7e":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("bc3a"),s=a.n(r);let i=location.host.includes("localhost")?"//localhost:3000/":"/",o=s.a.create({baseURL:i+"account/",timeout:3e3,withCredentials:!0});class n{static async Login(e){try{let t=await o.post("login",e);return t.data}catch(t){throw new Error(`[login failed] : ${t.response?t.response.data.error:"No response from server"}`)}}static async Register(e){try{let t=await o.post("register",e);return t.data}catch(t){throw new Error(`[registration failed] : ${t.response?t.response.data.error:"No response from server"}`)}}static async Logout(){try{await o.delete("logout");return!0}catch(e){throw new Error(`[logout failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Authenticate(){try{let e=await o.get("authenticate");return e.data}catch(e){console.warn(`[Authentication failed] : ${e.response?e.response.data.error:"No response from server"}`)}}}},"64a9":function(e,t,a){},"8d01":function(e,t,a){"use strict";var r=a("5aed"),s=a.n(r);s.a},a9fc:function(e,t,a){"use strict";var r=a("0bfc"),s=a.n(r);s.a},b60a:function(e,t,a){"use strict";var r=a("5b7e"),s=a("41cb"),i=a("3d20"),o=a.n(i);t["a"]={actions:{async register({commit:e,dispatch:t},a){try{let t=await r["a"].Register(a);e("setUser",t),s["a"].push({name:"home"})}catch(i){const e=o.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});e.fire({type:"warning",title:"account already created"}),console.warn(i.message)}},async login({commit:e,dispatch:t},a){try{let t=await r["a"].Login(a);e("setUser",t),s["a"].push({name:"home"})}catch(i){const e=o.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});e.fire({type:"warning",title:"invalid login"})}}}}},b9fc:function(e,t,a){},c58c:function(e,t,a){"use strict";var r=a("e515"),s=a.n(r);s.a},d433:function(e,t,a){"use strict";var r=a("b9fc"),s=a.n(r);s.a},e515:function(e,t,a){},ffb6:function(e,t,a){"use strict";var r=a("16da"),s=a.n(r);s.a}});
//# sourceMappingURL=app.77448400.js.map