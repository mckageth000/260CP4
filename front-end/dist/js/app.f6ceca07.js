(function(t){function e(e){for(var r,i,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1c89":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:"/drop.png"}})])]),t._m(0)],1),n("div",{staticClass:"content"},[n("router-view")],1),n("div",{staticClass:"footer"},[n("router-link",{attrs:{to:"/manage"}},[t._v("Manage")]),t._m(1)],1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("h1",[t._v("Gas Tracker")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticStyle:{"padding-left":"5px"},attrs:{href:"#"}},[n("i",[t._v("github")])])}],i=(n("034f"),n("2877")),o={},l=Object(i["a"])(o,a,s,!1,null,null,null),c=l.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("section",[n("div",{staticClass:"page-content"},[n("div",{attrs:{id:"table"}},[n("table",[n("col",{staticStyle:{width:"25%"}}),n("col",{staticStyle:{width:"25%"}}),n("col",{staticStyle:{width:"25%"}}),n("col",{staticStyle:{width:"25%"}}),t._m(0),n("tbody",[n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],attrs:{type:"date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.miles,expression:"miles"}],attrs:{placeholder:"miles"},domProps:{value:t.miles},on:{input:function(e){e.target.composing||(t.miles=e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.gallons,expression:"gallons"}],attrs:{placeholder:"gallons"},domProps:{value:t.gallons},on:{input:function(e){e.target.composing||(t.gallons=e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cost,expression:"cost"}],attrs:{placeholder:"cost"},domProps:{value:t.cost},on:{input:function(e){e.target.composing||(t.cost=e.target.value)}}})]),n("td",{staticClass:"button-cell"},[n("button",{on:{click:t.addEntry}},[t._v("Add")])])]),t._l(t.entries,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.date))]),n("td",[t._v(t._s(e.miles))]),n("td",[t._v(t._s(e.gallons))]),n("td",[t._v("$"+t._s(e.cost))])])}))],2)])]),n("div",{attrs:{id:"stats"}},[n("p",[t._v("Average MPG: "),n("b",[t._v(t._s(t.mpgToDate))])]),n("p",[t._v("Average Cost per Gallon: "),n("b",[t._v("$"+t._s(t.avgCostPerGallon))])]),n("p",[t._v("Average Cost per Mile: "),n("b",[t._v("$"+t._s(t.avgCostPerMile))])])])])])])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("Date")]),n("th",{attrs:{scope:"col"}},[t._v("Miles")]),n("th",{attrs:{scope:"col"}},[t._v("Gallons")]),n("th",{attrs:{scope:"col"}},[t._v("Cost")])])])}],v=n("1da1"),h=(n("96cf"),n("159b"),n("d3b7"),n("ddb0"),n("b680"),n("fb6a"),n("bc3a")),m=n.n(h),f={name:"Home",data:function(){return{entries:[],date:"",miles:"",gallons:"",cost:""}},created:function(){this.getEntries()},computed:{mpgToDate:function(){var t=0,e=0;return this.entries.forEach((function(n){t+=parseFloat(n.miles),e+=parseFloat(n.gallons)})),(t/e).toFixed(2)},avgCostPerGallon:function(){var t=0,e=0;return this.entries.forEach((function(n){t+=parseFloat(n.cost),e+=parseFloat(n.gallons)})),(t/e).toFixed(2)},avgCostPerMile:function(){var t=0,e=0;return this.entries.forEach((function(n){t+=parseFloat(n.cost),e+=parseFloat(n.miles)})),(t/e).toFixed(2)}},methods:{getEntries:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("/api/entry");case 3:return n=e.sent,t.entries=n.data,t.entries.sort((function(t,e){var n=t.date.slice(0,4),r=e.date.slice(0,4),a=t.date.slice(5,7),s=e.date.slice(5,7),i=t.date.slice(8,10),o=e.date.slice(8,10);return n>r?-1:n<r?1:a>s?-1:a<s?1:i>o?-1:1})),e.abrupt("return",!0);case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},addEntry:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.checkForm()){e.next=4;break}console.log("All forms need to be filled"),e.next=18;break;case 4:return t.format(),e.prev=5,e.next=8,m.a.post("/api/entry",{date:t.date,miles:t.miles,gallons:t.gallons,cost:t.cost});case 8:t.date="",t.miles="",t.gallons="",t.cost="",e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](5),console.log(e.t0);case 17:t.getEntries();case 18:case"end":return e.stop()}}),e,null,[[5,14]])})))()},format:function(){this.miles=parseFloat(this.miles).toFixed(1),this.gallons=parseFloat(this.gallons).toFixed(3),this.cost=parseFloat(this.cost).toFixed(2)},checkForm:function(){return""!==this.date&&""!==this.miles&&""!==this.gallons&&""!==this.cost}}},g=f,_=(n("e6ea"),Object(i["a"])(g,d,p,!1,null,"6ec01f15",null)),b=_.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin"},[t._m(0),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchDate,expression:"searchDate"}],attrs:{type:"month"},domProps:{value:t.searchDate},on:{input:function(e){e.target.composing||(t.searchDate=e.target.value)}}}),n("button",{on:{click:t.search}},[t._v("Search")]),n("table",[n("col",{staticStyle:{width:"20%"}}),n("col",{staticStyle:{width:"20%"}}),n("col",{staticStyle:{width:"20%"}}),n("col",{staticStyle:{width:"20%"}}),n("col",{staticStyle:{width:"10%"}}),n("col",{staticStyle:{width:"10%"}}),t._m(1),n("tbody",t._l(t.searchResults,(function(e){return n("tr",{directives:[{name:"show",rawName:"v-show",value:t.searchResults,expression:"searchResults"}],key:e.id},[n("td",[t._v(t._s(e.date))]),n("td",[t._v(t._s(e.miles))]),n("td",[t._v(t._s(e.gallons))]),n("td",[t._v("$"+t._s(e.cost))]),n("td",{staticClass:"button-cell"},[n("button",{on:{click:function(n){return t.editEntry(e)}}},[t._v("Edit")])]),n("td",{staticClass:"button-cell"},[n("button",{on:{click:function(n){return t.deleteEntry(e)}}},[t._v("Delete")])])])})),0)]),n("p"),n("div",{directives:[{name:"show",rawName:"v-show",value:t.editing,expression:"editing"}],attrs:{id:"editing"}},[n("h2",[t._v("Editing entry for "+t._s(this.editingDate))]),t._v(" Miles: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.editMiles,expression:"editMiles"}],attrs:{type:"text",placeholder:"Miles"},domProps:{value:t.editMiles},on:{input:function(e){e.target.composing||(t.editMiles=e.target.value)}}}),n("p"),t._v(" Gallons: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.editGallons,expression:"editGallons"}],attrs:{type:"text",placeholder:"Gallons"},domProps:{value:t.editGallons},on:{input:function(e){e.target.composing||(t.editGallons=e.target.value)}}}),n("p"),t._v(" Cost: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.editCost,expression:"editCost"}],attrs:{type:"text",placeholder:"Cost"},domProps:{value:t.editCost},on:{input:function(e){e.target.composing||(t.editCost=e.target.value)}}}),n("p"),n("button",{on:{click:t.saveEdit}},[t._v("Save")])])])])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("h2",[t._v("Edit/Delete an Entry")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("Date")]),n("th",{attrs:{scope:"col"}},[t._v("Miles")]),n("th",{attrs:{scope:"col"}},[t._v("Gallons")]),n("th",{attrs:{scope:"col"}},[t._v("Cost")])])])}],x={name:"Manage",data:function(){return{entries:[],searchDate:"",searchResults:[],editing:!1,editMiles:"",editGallons:"",editCost:"",entryEditing:null}},computed:{editingDate:function(){return this.entryEditing?this.entryEditing.date:""}},created:function(){this.getEntries()},methods:{search:function(){var t=this;this.searchResults=[],this.entries.forEach((function(e){e.date.slice(0,7)==t.searchDate&&t.searchResults.push(e)}))},getEntries:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("/api/entry");case 3:return n=e.sent,t.entries=n.data,e.abrupt("return",!0);case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},deleteEntry:function(t){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.a.delete("/api/entry/"+t._id);case 3:return e.getEntries(),e.searchResults=[],e.searchDate="",n.abrupt("return",!0);case 9:n.prev=9,n.t0=n["catch"](0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()},editEntry:function(t){this.entryEditing=t,this.editing=!0,this.editMiles=t.miles,this.editGallons=t.gallons,this.editCost=t.cost,document.getElementById("editing").scrollIntoView()},saveEdit:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.format(),e.next=4,m.a.put("/api/entries/"+t.entryEditing._id,{miles:t.editMiles,gallons:t.editGallons,cost:t.editCost});case 4:return t.entryEditing=null,t.editing=!1,t.editMiles="",t.editGallons="",t.editCost="",t.searchResults=[],t.getEntries(),e.abrupt("return",!0);case 14:e.prev=14,e.t0=e["catch"](0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))()},format:function(){this.editMiles=parseFloat(this.editMiles).toFixed(1),this.editGallons=parseFloat(this.editGallons).toFixed(3),this.editCost=parseFloat(this.editCost).toFixed(2)}}},E=x,C=(n("eede"),Object(i["a"])(E,y,w,!1,null,"c98ad804",null)),M=C.exports;r["a"].use(u["a"]);var k=[{path:"/",name:"home",component:b},{path:"/manage",name:"manage",component:M}],F=new u["a"]({mode:"history",base:"/",routes:k}),P=F;r["a"].config.productionTip=!1,new r["a"]({router:P,render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,e,n){},db9c:function(t,e,n){},e6ea:function(t,e,n){"use strict";n("1c89")},eede:function(t,e,n){"use strict";n("db9c")}});
//# sourceMappingURL=app.f6ceca07.js.map