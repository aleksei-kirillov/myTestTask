(this["webpackJsonpreact-part"]=this["webpackJsonpreact-part"]||[]).push([[0],{13:function(e,t,n){e.exports=n(20)},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(12),o=n.n(s),r=(n(18),n(2)),l=n(3),c=n(6),u=n(5),m=n(1),h=n(7),d=(n(9),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).onEdit=n.onEdit.bind(Object(m.a)(n)),n.onDelete=n.onDelete.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.item,n=this.props.item.episodes.map((function(e){return i.a.createElement("li",{key:e.episode,onClick:function(){}},i.a.createElement("span",{className:"episode-episode"},e.episode),"\xa0|\xa0 ",e.description)}));return i.a.createElement("div",{className:"input-panel"},i.a.createElement("span",{className:"form-caption"},t.name),i.a.createElement("div",null,i.a.createElement("span",{className:"field-name"},"Summary:")," ",t.summary),i.a.createElement("div",null,i.a.createElement("span",{className:"episodes"},"Episodes:")," ",n),i.a.createElement("br",null),i.a.createElement("button",{onClick:function(){return e.onDelete()}},"Delete"),"\xa0",i.a.createElement("button",{onClick:function(){return e.onEdit()}},"Edit"))}},{key:"onEdit",value:function(){this.props.onEdit()}},{key:"onDelete",value:function(){var e=this.props.item;window.confirm("Are you sure to delete item: "+e.name+" ?")&&this.props.onDelete(e.link)}}]),t}(a.Component)),p=n(10),E=function(){function e(){Object(r.a)(this,e)}return Object(l.a)(e,[{key:"validateInputs",value:function(e){var t="";return e.name||(t+="Please enter name of this item.\n"),e.summary||(t+="Please enter summary of this item.\n"),0===t.length||(alert(t),!1)}}]),e}(),f=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).validator=new E,n.onCancel=n.onCancel.bind(Object(m.a)(n)),n.onSubmit=n.onSubmit.bind(Object(m.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(m.a)(n)),n.state={name:"",summary:"",description:"",episodes:[]},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,n=t.value,a=t.name;this.setState(Object(p.a)({},a,n))}},{key:"onCancel",value:function(){this.props.onCancel()}},{key:"onSubmit",value:function(){this.validator.validateInputs(this.state)&&this.props.onSubmit(this.state)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"input-panel"},i.a.createElement("span",{onClick:function(){return e.onCancel()},className:"item-delete clickable",title:"cancel adding"},"\u2716")," \xa0",i.a.createElement("div",null,i.a.createElement("label",{className:"field-name"},"Name:",i.a.createElement("br",null),i.a.createElement("input",{value:this.state.name,name:"name",maxLength:"40",required:!0,onChange:this.handleInputChange,placeholder:"item name"}))),i.a.createElement("div",null,i.a.createElement("label",{className:"field-name"},"Summary:",i.a.createElement("br",null),i.a.createElement("input",{value:this.state.summary,name:"summary",maxLength:"40",required:!0,onChange:this.handleInputChange,placeholder:"summary"}))),i.a.createElement("br",null),i.a.createElement("button",{onClick:function(){return e.onSubmit()}},"Create"))}}]),t}(a.Component),b=function(e){function t(e){var n;Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).validator=new E,n.onCancel=n.onCancel.bind(Object(m.a)(n)),n.onSubmit=n.onSubmit.bind(Object(m.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(m.a)(n));var a=e.item;return n.state={name:a.name,summary:a.summary,description:a.description,link:a.link,episodes:a.episodes},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,n=t.value,a=t.name;this.setState(Object(p.a)({},a,n))}},{key:"onCancel",value:function(){this.props.onCancel()}},{key:"onSubmit",value:function(){this.validator.validateInputs(this.state)&&this.props.onSubmit(this.state)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"input-panel"},i.a.createElement("span",{onClick:function(){return e.onCancel()},className:"item-delete clickable",title:"cancel editing"},"\u2716")," \xa0",i.a.createElement("div",null,i.a.createElement("label",{className:"field-name"},"Name:",i.a.createElement("br",null),i.a.createElement("input",{value:this.state.name,name:"name",maxLength:"40",required:!0,onChange:this.handleInputChange,placeholder:"item name"}))),i.a.createElement("div",null,i.a.createElement("label",{className:"field-name"},"Summary:",i.a.createElement("br",null),i.a.createElement("input",{value:this.state.summary,name:"summary",maxLength:"40",required:!0,onChange:this.handleInputChange,placeholder:"summary"}))),i.a.createElement("br",null),i.a.createElement("button",{onClick:function(){return e.onSubmit()}},"Update"))}}]),t}(a.Component),v=n(4),I=n.n(v),k=n(8),g=function e(){Object(r.a)(this,e),this.BASE_URL="http://localhost:43605/",this.USER_GETTOKEN_URL="http://localhost:43605/User/GetToken",this.ITEM_COLLECTION_URL="http://localhost:43605/Item/Index/",this.ITEM_CREATE_URL="http://localhost:43605/Item/Create/",this.ITEM_EDIT_URL="http://localhost:43605/Item/Edit/",this.ITEM_DELETE_URL="http://localhost:43605/Item/Delete/"},y=function(){function e(){Object(r.a)(this,e),this.config=new g}return Object(l.a)(e,[{key:"retrieveItems",value:function(){var e=Object(k.a)(I.a.mark((function e(t){var n=this;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(this.config.ITEM_COLLECTION_URL+t).then((function(e){return e.ok||n.handleResponseError(e),e.json()})).then((function(e){console.log("Retrieved items:"),console.log(e);for(var t=0;t<e.items.length;t++)null!==e.items[t].episodes&&void 0!==e.items[t].episodes||(e.items[t].episodes=[]);return e.items})).catch((function(e){n.handleError(e)})));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getItem",value:function(){var e=Object(k.a)(I.a.mark((function e(t,n){var a=this;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("ItemService.getItem():"),console.log("Item: "+t),e.abrupt("return",fetch(this.config.ITEM_GET_URL+n).then((function(e){return e.ok||a.handleResponseError(e),e.json()})).then((function(e){return null!==e.episodes&&void 0!==e.episodes||(e.episodes=[]),e})).catch((function(e){a.handleError(e)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"createItem",value:function(){var e=Object(k.a)(I.a.mark((function e(t,n){var a=this;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("ItemService.createItem():"),console.log(t),e.abrupt("return",fetch(this.config.ITEM_CREATE_URL+n,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.ok||a.handleResponseError(e),e.json()})).catch((function(e){a.handleError(e)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteItem",value:function(){var e=Object(k.a)(I.a.mark((function e(t,n){var a=this;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("ItemService.deleteItem():"),console.log("item: "+t),e.abrupt("return",fetch(this.config.ITEM_DELETE_URL+n,{method:"DELETE",mode:"cors",body:JSON.stringify(t)}).then((function(e){e.ok||a.handleResponseError(e)})).catch((function(e){a.handleError(e)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"updateItem",value:function(){var e=Object(k.a)(I.a.mark((function e(t,n){var a=this;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("ItemService.updateItem():"),console.log(t),e.abrupt("return",fetch(this.config.ITEM_UPDATE_URL+n,{method:"PUT",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.ok||a.handleResponseError(e),e.json()})).catch((function(e){a.handleError(e)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleResponseError",value:function(e){throw new Error("HTTP error, status = "+e.status)}},{key:"handleError",value:function(e){console.log(e.message)}}]),e}(),C=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data;return t.episodes.length>0?this.props.item.episodes.map((function(n){return i.a.createElement("span",{key:n.episode,onClick:function(){e.onEpisodeClick(t,n.episode)}},i.a.createElement(O,{data:{episode:n,item:t}}))})):""}}]),t}(i.a.Component),O=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.data.episode,t="item-episode clickable",n="you didn't see it";return e.viewed&&(t="item-episode clickable viewed",n="already viewed"),i.a.createElement("li",{className:t,title:n},i.a.createElement("span",{className:"episode-episode"},e.episode))}}]),t}(i.a.Component),w=C,j=function e(){Object(r.a)(this,e),this.USER_GETTOKEN_URL="http://localhost:43605/User/GetToken",this.ITEM_COLLECTION_URL="http://localhost:43605/Item/",this.ITEM_CREATE_URL="http://localhost:43605/Item/Create/",this.ITEM_DELETE_URL="http://localhost:43605/Item/Delete/",this.ITEM_EDIT_URL="http://localhost:43605/Item/Edit/",this.ITEM_UPDATE_URL="http://localhost:43605/Item/Update/",this.ITEM_GET_URL="http://localhost:43605/Item/Get/"},S=function(e){function t(e){var n;Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).onLogin=n.onLogin.bind(Object(m.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(m.a)(n));var a=window.localStorage.getItem("lastUserName");return a||(a=""),n.config=new j,n.state={userName:a,password:"",token:null},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"login-panel"},i.a.createElement("div",null,i.a.createElement("label",{className:"field-name"},"Login: \xa0",i.a.createElement("input",{value:this.state.userName,onChange:this.handleInputChange,name:"userName",maxLength:"40",required:!0,placeholder:"user name"})),i.a.createElement("span",{className:"spacer"},"\xa0"),i.a.createElement("label",{className:"field-name"},"Password: \xa0",i.a.createElement("input",{type:"password",value:this.state.password,onChange:this.handleInputChange,name:"password",maxLength:"40",required:!0,placeholder:"password"})),i.a.createElement("span",{className:"spacer"},"\xa0"),i.a.createElement("span",{className:"button clickable",onClick:function(){return e.onLogin()}},"Login")),i.a.createElement("br",null),i.a.createElement("div",{className:"login-help-text"},"If you'll sign up with non-existing user name, new account will be created automatically with password you did provide this first time. No password changing or reminding functionality, so put proper password - at least 79 symbols with at least 3 lower case letters, 3 capital letters, 18 digits and 7 Chinese Simplified hieroglyphs in it.",i.a.createElement("br",null),"Seriosly: the password will be ignored, as no security system here; next time i'll use OAuth2, but yet user can see what others did see."))}},{key:"onLogin",value:function(){var e=Object(k.a)(I.a.mark((function e(){var t,n=this;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.localStorage.setItem("lastUserName",this.state.userName),t=JSON.stringify({userName:this.state.userName,password:this.state.password}),e.abrupt("return",fetch(this.config.USER_GETTOKEN_URL,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:t}).then((function(e){return console.log("Retrieved items:"),console.log(e),e.ok||n.handleResponseError(e),e.json()})).then((function(e){console.log("Retrieved items:"),console.log(e),n.props.data(e.token,n.state.userName)})).catch((function(e){n.handleError(e)})));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleInputChange",value:function(e){var t=e.target,n=t.value,a=t.name;this.setState(Object(p.a)({},a,n))}},{key:"handleResponseError",value:function(e){throw new Error("HTTP error, status = "+e.status)}},{key:"handleError",value:function(e){console.log(e.message)}}]),t}(a.Component),N=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).itemService=new y,n.onSelect=n.onSelect.bind(Object(m.a)(n)),n.onNewItem=n.onNewItem.bind(Object(m.a)(n)),n.onEditItem=n.onEditItem.bind(Object(m.a)(n)),n.onCancel=n.onCancel.bind(Object(m.a)(n)),n.onCancelEdit=n.onCancelEdit.bind(Object(m.a)(n)),n.onCreateItem=n.onCreateItem.bind(Object(m.a)(n)),n.onUpdateItem=n.onUpdateItem.bind(Object(m.a)(n)),n.onDeleteItem=n.onDeleteItem.bind(Object(m.a)(n)),n.onAddEpisodeClick=n.onAddEpisodeClick.bind(Object(m.a)(n)),n.onEpisodeClick=n.onEpisodeClick.bind(Object(m.a)(n)),n.onLogin=n.onLogin.bind(Object(m.a)(n)),n.state={showDetails:!1,editItem:!1,selectedItem:null,newItem:null,userName:null,token:null,items:[]},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getItems()}},{key:"render",value:function(){var e=this,t=this.state.items;if(null==this.state.token)return i.a.createElement(S,{data:this.onLogin});var n=this.state.showDetails,a=this.state.selectedItem,s=this.state.newItem,o=this.state.editItem,r=t.length>0?t.map((function(t){return i.a.createElement("li",{className:"list-item",key:t.link},i.a.createElement("span",{onClick:function(){return e.onDeleteItem(t.link)},className:"item-delete clickable",title:"remove this show from the list"},"\u2716")," \xa0",i.a.createElement("span",{onClick:function(){return e.onSelect(t)},className:"item-name clickable"},t.name,"\xa0|\xa0 ",i.a.createElement("span",{className:"item-summary"},t.summary)),i.a.createElement("ul",{className:"item-episodes"},i.a.createElement(w,{data:t}),"\xa0...\xa0",i.a.createElement("li",{className:"item-episode-add button clickable",title:"add episode",onClick:function(){return e.onAddEpisodeClick(t)}},"+")),i.a.createElement("br",null))})):"";return i.a.createElement("div",null,i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"welcome-panel"},"Welcome, ",this.state.userName),i.a.createElement("ul",{className:"items"},r),i.a.createElement("br",null),n&&a&&i.a.createElement(d,{item:a,onEdit:this.onEditItem,onDelete:this.onDeleteItem}),o&&a&&i.a.createElement(b,{onSubmit:this.onUpdateItem,onCancel:this.onCancelEdit,item:a}),s&&i.a.createElement(f,{onSubmit:this.onCreateItem,onCancel:this.onCancel}),i.a.createElement("div",{className:"item-add clickable",onClick:function(){return e.onNewItem()}},"\u25bc add new show "),i.a.createElement("br",null)))}},{key:"getItems",value:function(){var e=this;null!==this.state.token&&""!==this.state.token&&this.itemService.retrieveItems(this.state.token).then((function(t){e.setState({items:t})}))}},{key:"onSelect",value:function(e){this.setState({showDetails:!0,selectedItem:e})}},{key:"onEpisodeClick",value:function(e,t){var n=this;e.episodes.forEach((function(e){e.episode===t&&(e.viewed=!e.viewed)})),this.clearState(),this.itemService.updateItem(e,this.state.token).then((function(e){n.getItems()}))}},{key:"onAddEpisodeClick",value:function(e){var t=this;void 0===e.lastEpisode||null==e.lastEpisode?e.lastEpisode=e.episodes.length+1:e.lastEpisode=e.lastEpisode+1,void 0===e.lastSeason&&(e.lastSeason=1),e.episodes.push({episode:"s"+e.lastSeason+"e"+e.lastEpisode,viewed:!1}),this.clearState(),this.itemService.updateItem(e,this.state.token).then((function(e){t.getItems()}))}},{key:"onCancel",value:function(){this.clearState()}},{key:"onNewItem",value:function(){this.clearState(),this.setState({newItem:!0})}},{key:"onEditItem",value:function(){this.setState({showDetails:!1,editItem:!0,newItem:null})}},{key:"onCancelEdit",value:function(){this.setState({showDetails:!0,editItem:!1,newItem:null})}},{key:"onUpdateItem",value:function(e){var t=this;this.clearState(),this.itemService.updateItem(e,this.state.token).then((function(e){t.getItems()}))}},{key:"onCreateItem",value:function(e){var t=this;this.clearState(),this.itemService.createItem(e,this.state.token).then((function(e){t.getItems()}))}},{key:"onDeleteItem",value:function(e){var t=this;this.clearState(),this.itemService.deleteItem(e,this.state.token).then((function(e){t.getItems()}))}},{key:"onLogin",value:function(e,t){this.setState({token:e,userName:t}),this.getItems(),this.forceUpdate()}},{key:"clearState",value:function(){this.setState({showDetails:!1,selectedItem:null,editItem:!1,newItem:null})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.3376a2e0.chunk.js.map