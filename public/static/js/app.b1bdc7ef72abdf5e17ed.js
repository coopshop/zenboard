webpackJsonp([0],{"+Y6S":function(t,a,n){"use strict";var e=n("IN6T"),r={inserted:function(t){t.focus()}};a.a={name:"draft-card",props:["rowId","colId","numCards"],directives:{focus:r},data:function(){return{label:""}},methods:{onInput:function(t){this.label=t.target.innerText},onCancel:function(t){var a=t.srcElement,n=a.dataset.rowId,r=a.dataset.colId,o={rowId:n,colId:r};e.a.$emit("draft-card-cancel",o)},onSave:function(t){var a={label:this.label,rowId:this.rowId,colId:this.colId,myOrder:this.numCards+1};e.a.$emit("draft-card-save",a)}}}},"3eWl":function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement;return(t._self._c||a)("div",{staticClass:"task",attrs:{"data-card-id":t.card.id},on:{click:t.editDetails}},[t._v(t._s(t.card.label))])},r=[],o={render:e,staticRenderFns:r};a.a=o},"5lw2":function(t,a,n){"use strict";function e(t){n("ZZ4r")}var r=n("+Y6S"),o=n("v4ox"),c=n("VU/8"),s=e,i=c(r.a,o.a,!1,s,"data-v-1e9a85a6",null);a.a=i.exports},"84yr":function(t,a){},"8Wsr":function(t,a,n){"use strict";var e=n("DAYN"),r=n.n(e),o=n("rhdv"),c=n("5lw2");a.a={name:"cell",props:["cell","rowId","hasDraftCard"],components:{draggable:r.a,card:o.a,draftCard:c.a},computed:{dragOptions:function(){return{group:"cards",ghostClass:"ghost",disabled:this.contentEditable}}},methods:{onEnd:function(t){console.log("End (drag)"),this.$emit("card-drag-end",{id:t.clone.dataset.cardId,rowId:t.to.dataset.rowId,colId:t.to.dataset.colId,myOrder:t.newIndex+1})},onUpdate:function(){},onChange:function(){},onMove:function(){},onSort:function(){return!0}}}},"8a40":function(t,a,n){"use strict";function e(t){n("KWOH")}var r=n("Sz/U"),o=n("q0ro"),c=n("VU/8"),s=e,i=c(r.a,o.a,!1,s,"data-v-14c37d25",null);a.a=i.exports},"93UE":function(t,a,n){"use strict";function e(t){n("WBDU")}var r=n("mpyD"),o=n("Pzah"),c=n("VU/8"),s=e,i=c(r.a,o.a,!1,s,"data-v-07131804",null);a.a=i.exports},"9bDj":function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("td",[n("draggable",{staticClass:"dragArea",attrs:{element:"div",list:t.cell.cards,options:t.dragOptions,"data-col-id":t.cell.colId,"data-row-id":t.rowId},on:{end:t.onEnd,update:t.onUpdate,change:t.onChange,sort:t.onSort}},t._l(t.cell.cards,function(t){return n("card",{key:"card.id",attrs:{card:t}})})),t._v(" "),t.hasDraftCard?n("draft-card",{attrs:{rowId:t.rowId,colId:t.cell.colId,numCards:t.cell.cards.length}}):t._e()],1)},r=[],o={render:e,staticRenderFns:r};a.a=o},B1Az:function(t,a,n){"use strict";function e(t){n("wmLG")}var r=n("8Wsr"),o=n("9bDj"),c=n("VU/8"),s=e,i=c(r.a,o.a,!1,s,"data-v-bc45001c",null);a.a=i.exports},E8Ei:function(t,a,n){"use strict";var e=n("IN6T");a.a={name:"masthead",methods:{onClick:function(){e.a.$emit("masthead-add-card",!0)}}}},GYY5:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("board")],1)},r=[],o={render:e,staticRenderFns:r};a.a=o},IN6T:function(t,a,n){"use strict";var e=n("7+uW"),r=new e.a;a.a=r},KWOH:function(t,a){},Kz3E:function(t,a,n){"use strict";function e(t){n("Tdpp")}var r=n("E8Ei"),o=n("USWg"),c=n("VU/8"),s=e,i=c(r.a,o.a,!1,s,"data-v-2afa95d7",null);a.a=i.exports},LYzt:function(t,a,n){"use strict";var e=n("7+uW"),r=n("Kz3E"),o=n("93UE"),c=n("8a40"),s=n("IN6T"),i=n("hMcO"),d=n.n(i);e.a.use(d.a,"http://localhost:3001"),a.a={name:"board",components:{masthead:r.a,row:o.a,cardEditor:c.a},data:function(){return{rows:[]}},sockets:{connect:function(){console.log("socket connected")},customEmit:function(t){console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')},boardRefresh:function(t){console.log("boardRefresh",t),this.rows=t}},watch:{rows:function(t){console.log(t)}},created:function(){var t=this;fetch("http://localhost:3001/api/rows/deep").then(function(a){a.json().then(function(a){t.rows=a})}).catch(function(t){console.error(t),alert("Sorry, something went wrong\n\n"+t)})},methods:{cardDragEnd:function(t){console.log("board:card-drag-end",t),this.$socket.emit("task:move",t)},onCancel:function(t){console.log("board:onCancel"),s.a.$emit("global-cancel",!0)},onSave:function(t){console.log("board:onSave"),s.a.$emit("global-save",!0)}},mounted:function(){var t=this;s.a.$on("rows-refreshed",function(a){console.log("board:rows-refreshed"),t.rows=a}),s.a.$on("draft-card-save",function(t){console.log("draft-card-save",t),this.$socket.emit("task:create",t)})}}},M93x:function(t,a,n){"use strict";function e(t){n("lBIa")}var r=n("xJD8"),o=n("GYY5"),c=n("VU/8"),s=e,i=c(r.a,o.a,!1,s,null,null);a.a=i.exports},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("7+uW"),r=n("M93x");e.a.config.productionTip=!1,new e.a({el:"#app",template:"<App/>",components:{App:r.a}})},NU23:function(t,a,n){"use strict";var e=n("IN6T");a.a={name:"card",props:["card"],methods:{editDetails:function(){console.log("editDetails"),e.a.$emit("card-edit-details",this.card.id)}}}},Pzah:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("tr",{staticClass:"plain-bg",on:{mouseover:function(a){t.hover=!0},mouseleave:function(a){t.hover=!1}}},[n("th",[n("div",{staticClass:"row-label"},[t._v(t._s(t.row.label))]),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.hover?n("div",{staticClass:"btn-task-new",attrs:{disabled:"hasDraftCard"},on:{click:t.addDraftCard}},[t._v("Add card")]):t._e()])],1),t._v(" "),t._l(t.row.cells,function(a,e){return n("cell",{key:t.row.id+","+e,attrs:{cell:a,rowId:t.row.id,hasDraftCard:t.hasDraftCard&&1===a.colId},on:{"card-drag-end":t.cardDragEnd}})})],2)},r=[],o={render:e,staticRenderFns:r};a.a=o},"Sz/U":function(t,a,n){"use strict";var e=n("mvHQ"),r=n.n(e),o=n("IN6T"),c={inserted:function(t){t.focus()}};a.a={name:"cardEditor",directives:{focus:c},data:function(){return{card:!1}},mounted:function(){var t=this;o.a.$on("card-edit-details",function(a){console.log("Edit card",a),fetch("http://localhost:3001/api/cards/"+a).then(function(a){a.json().then(function(a){t.card=a})}).catch(function(t){console.error(t),alert("Sorry, something went wrong\n\n"+t)})}),o.a.$on("global-cancel",function(){t.onCancel()}),o.a.$on("global-save",function(){t.onSave()})},methods:{onCancel:function(){this.card=!1},onCancelIfClickOutside:function(t){t.srcElement.classList.contains("template-modal")&&o.a.$emit("global-cancel",t)},onSave:function(){console.log("About to save card..."),this.card.timestamp=(new Date).getTime();var t=this;console.log("api url","http://localhost:3001"),fetch("http://localhost:3001/api/cards/save",{method:"post",headers:new Headers({"Content-Type":"application/json"}),body:r()(this.card)}).then(function(a){if(!a.ok)throw Error(a.statusText);console.log("Card saved"),t.card=!1}).catch(function(t){return alert("Sorry, something went wrong\n\n"+t)})},handleCmdEnter:function(t){console.log(t),(t.metaKey||t.ctrlKey)&&13===t.keyCode&&this.onSave()}}}},TUcH:function(t,a,n){"use strict";function e(t){n("pEMd")}var r=n("LYzt"),o=n("w7cu"),c=n("VU/8"),s=e,i=c(r.a,o.a,!1,s,"data-v-0bf56ba6",null);a.a=i.exports},Tdpp:function(t,a){},USWg:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"masthead"},[n("div",{staticClass:"heading"},[t._v("\n        Acme Dev Team\n    ")]),t._v(" "),n("div",{staticClass:"nav"},[n("span",{staticClass:"nav-item nav-task-new action-task-new",on:{click:t.onClick}},[t._v("+ Add card")])])])},r=[],o={render:e,staticRenderFns:r};a.a=o},WBDU:function(t,a){},ZZ4r:function(t,a){},lBIa:function(t,a){},mpyD:function(t,a,n){"use strict";var e=n("B1Az"),r=n("IN6T");a.a={name:"row",components:{cell:e.a},props:["row"],data:function(){return{hasDraftCard:!1,hover:!1}},methods:{cardDragEnd:function(t){this.$emit("card-drag-end",t)},addDraftCard:function(t){this.hasDraftCard=!0},removeDraftCards:function(t){this.hasDraftCard=!1}},mounted:function(){var t=this;r.a.$on("draft-card-cancel",function(a){a.rowId===t.row.id.toString()&&t.removeDraftCards(a)}),r.a.$on("draft-card-save",function(a){a.rowId===t.row.id&&(t.hasDraftCard=!1)}),r.a.$on("masthead-add-card",function(){console.log("masthead-add-card"),1===t.row.position&&(t.hasDraftCard=!0)})}}},pEMd:function(t,a){},q0ro:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return t.card?n("div",{staticClass:"template-task-details template-modal",on:{click:t.onCancelIfClickOutside}},[n("div",{staticClass:"task-details-content modal-content",on:{keyup:[function(a){return("button"in a||!t._k(a.keyCode,"enter",13,a.key))&&a.ctrlKey?void t.onSave(a):null},function(a){if(!("button"in a)&&t._k(a.keyCode,"esc",27,a.key))return null;t.onCancel(a)}]}},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.card.label,expression:"card.label"},{name:"focus",rawName:"v-focus"}],staticClass:"tdc-label form-label",attrs:{type:"text",name:"label"},domProps:{value:t.card.label},on:{input:function(a){a.target.composing||t.$set(t.card,"label",a.target.value)}}})]),t._v(" "),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.card.description,expression:"card.description"}],staticClass:"tdc-description form-textarea",attrs:{name:"description"},domProps:{value:t.card.description},on:{input:function(a){a.target.composing||t.$set(t.card,"description",a.target.value)}}})]),t._v(" "),n("div",{staticClass:"tdc-archive form-archive"},[t._v("Archive "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.card.isArchived,expression:"card.isArchived"}],staticClass:"tdc-archive form-archive",attrs:{type:"checkbox",name:"archive"},domProps:{checked:Array.isArray(t.card.isArchived)?t._i(t.card.isArchived,null)>-1:t.card.isArchived},on:{change:function(a){var n=t.card.isArchived,e=a.target,r=!!e.checked;if(Array.isArray(n)){var o=t._i(n,null);e.checked?o<0&&(t.card.isArchived=n.concat([null])):o>-1&&(t.card.isArchived=n.slice(0,o).concat(n.slice(o+1)))}else t.$set(t.card,"isArchived",r)}}})]),t._v(" "),n("div",{staticClass:"modal-buttons tdc-buttons"},[n("input",{staticClass:"modal-cancel tdc-button-cancel",attrs:{type:"button",value:"Cancel",title:"[Esc]"},on:{click:t.onCancel}}),t._v(" "),n("input",{staticClass:"modal-save tdc-button-save",attrs:{type:"button",value:"Save",title:"[CMD + Enter]"},on:{click:t.onSave}})])])]):t._e()},r=[],o={render:e,staticRenderFns:r};a.a=o},rhdv:function(t,a,n){"use strict";function e(t){n("84yr")}var r=n("NU23"),o=n("3eWl"),c=n("VU/8"),s=e,i=c(r.a,o.a,!1,s,"data-v-3fc4922c",null);a.a=i.exports},v4ox:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"draft-card-wrapper"},[n("div",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"task-new",attrs:{contenteditable:!0},on:{input:t.onInput}}),t._v(" "),n("div",{staticClass:"button-container"},[n("span",{staticClass:"button btn-cancel",attrs:{title:"[Esc]","data-row-id":t.rowId,"data-col-id":t.colId},on:{click:t.onCancel}},[t._v("Cancel")]),t._v(" "),n("span",{staticClass:"button btn-save",attrs:{title:"[CTRL + Enter]"},on:{click:t.onSave}},[t._v("Save")])])])},r=[],o={render:e,staticRenderFns:r};a.a=o},w7cu:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("masthead"),t._v(" "),n("table",{staticClass:"main",on:{keyup:[function(a){return("button"in a||!t._k(a.keyCode,"enter",13,a.key))&&a.ctrlKey?void t.onSave(a):null},function(a){if(!("button"in a)&&t._k(a.keyCode,"esc",27,a.key))return null;t.onCancel(a)}]}},[t._m(0),t._v(" "),t._l(t.rows,function(a){return n("row",{key:"row.id",attrs:{row:a},on:{"card-drag-end":t.cardDragEnd}})})],2),t._v(" "),n("cardEditor")],1)},r=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("tr",[n("td",{staticClass:"cell-0"}),t._v(" "),n("th",{staticClass:"col"},[t._v("To do\n      ")]),t._v(" "),n("th",{staticClass:"col"},[t._v("Blocked\n      ")]),t._v(" "),n("th",{staticClass:"col"},[t._v("In progress\n      ")]),t._v(" "),n("th",{staticClass:"col"},[t._v("Done\n      ")])])}],o={render:e,staticRenderFns:r};a.a=o},wmLG:function(t,a){},xJD8:function(t,a,n){"use strict";var e=n("TUcH");a.a={name:"app",components:{board:e.a}}}},["NHnr"]);
//# sourceMappingURL=app.b1bdc7ef72abdf5e17ed.js.map