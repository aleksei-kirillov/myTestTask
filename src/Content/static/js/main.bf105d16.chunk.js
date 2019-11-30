(this["webpackJsonpreact-part"]=this["webpackJsonpreact-part"]||[]).push([[0],{13:function(e,t,n){e.exports=n(20)},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(12),r=n.n(s),l=(n(18),n(2)),o=n(3),c=n(6),u=n(5),m=n(1),d=n(7),h=(n(9),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).onEdit=n.onEdit.bind(Object(m.a)(n)),n.onDelete=n.onDelete.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.item,n=this.props.item.episodes.map((function(e){return i.a.createElement("li",{key:e.episode,onClick:function(){}},i.a.createElement("span",{className:"episode-episode"},e.episode),"\xa0|\xa0 ",e.description)}));return i.a.createElement("div",{className:"input-panel"},i.a.createElement("span",{className:"form-caption"},t.name),i.a.createElement("div",null,i.a.createElement("span",{className:"field-name"},"Summary:")," ",t.summary),i.a.createElement("div",null,i.a.createElement("span",{className:"episodes"},"Episodes:")," ",n),i.a.createElement("br",null),i.a.createElement("button",{onClick:function(){return e.onDelete()}},"Delete"),"\xa0",i.a.createElement("button",{onClick:function(){return e.onEdit()}},"Edit"))}},{key:"onEdit",value:function(){this.props.onEdit()}},{key:"onDelete",value:function(){var e=this.props.item;window.confirm("Are you sure to delete item: "+e.name+" ?")&&this.props.onDelete(e.link)}}]),t}(a.Component)),p=n(10),b=function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,[{key:"validateInputs",value:function(e){var t="";return e.name||(t+="Please enter name of this item.\n"),e.summary||(t+="Please enter summary of this item.\n"),0===t.length||(alert(t),!1)}}]),e}(),v=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).validator=new b,n.onCancel=n.onCancel.bind(Object(m.a)(n)),n.onSubmit=n.onSubmit.bind(Object(m.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(m.a)(n)),n.state={name:"",summary:"",year:"",country:"",description:"",episodes:[]},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,n=t.value,a=t.name;this.setState(Object(p.a)({},a,n))}},{key:"onCancel",value:function(){this.props.onCancel()}},{key:"onSubmit",value:function(){this.validator.validateInputs(this.state)&&this.props.onSubmit(this.state)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"input-panel"},i.a.createElement("span",{onClick:function(){return e.onCancel()},className:"item-delete clickable",title:"cancel adding"},"\u2716")," \xa0",i.a.createElement("div",null,i.a.createElement("label",{className:"field-name"},"Name:",i.a.createElement("br",null),i.a.createElement("input",{value:this.state.name,name:"name",maxLength:"40",required:!0,onChange:this.handleInputChange,placeholder:"item name"}))),i.a.createElement("div",null,i.a.createElement("label",{className:"field-name"},"Summary:",i.a.createElement("br",null),i.a.createElement("input",{value:this.state.summary,name:"summary",maxLength:"40",required:!0,onChange:this.handleInputChange,placeholder:"summary"}))),i.a.createElement("br",null),i.a.createElement("button",{onClick:function(){return e.onSubmit()}},"Create"))}}]),t}(a.Component),f=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).validator=new b,n.onCancel=n.onCancel.bind(Object(m.a)(n)),n.onSubmit=n.onSubmit.bind(Object(m.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(m.a)(n));var a=e.item;return n.state={name:a.name,summary:a.summary,description:a.description,link:a.link,episodes:a.episodes},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,n=t.value,a=t.name;this.setState(Object(p.a)({},a,n))}},{key:"onCancel",value:function(){this.props.onCancel()}},{key:"onSubmit",value:function(){this.validator.validateInputs(this.state)&&this.props.onSubmit(this.state)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"input-panel"},i.a.createElement("span",{onClick:function(){return e.this.onCancel()},className:"item-delete clickable",title:"cancel editing"},"\u2716")," \xa0",i.a.createElement("div",null,i.a.createElement("label",{className:"field-name"},"Name:",i.a.createElement("br",null),i.a.createElement("input",{value:this.state.name,name:"name",maxLength:"40",required:!0,onChange:this.handleInputChange,placeholder:"item name"}))),i.a.createElement("div",null,i.a.createElement("label",{className:"field-name"},"Summary:",i.a.createElement("br",null),i.a.createElement("input",{value:this.state.summary,name:"summary",maxLength:"40",required:!0,onChange:this.handleInputChange,placeholder:"summary"}))),i.a.createElement("br",null),i.a.createElement("button",{onClick:function(){return e.onSubmit()}},"Update"))}}]),t}(a.Component),E=n(4),k=n.n(E),y=n(8),I=function(){function e(){Object(l.a)(this,e),this.items=[{link:1,name:"Children on Nuclear Plant",summary:"Family show",description:"Desc 1",lastSeason:1,episodes:[{episode:"s1e1",description:"The Fun",viewed:!0},{episode:"s1e2",description:"The Explosion",viewed:!1}]},{link:2,name:"Test",summary:"Here should be summary",description:"Test Description",lastSeason:1,episodes:[{episode:"s1e1",description:"First Test",viewed:!1}]},{link:3,name:"Animals",summary:"Funny animals",description:"Really funny animals",lastSeason:1,episodes:[{episode:"s1e1",description:"Cats",viewed:!0},{episode:"s1e2",description:"Dogs",viewed:!0},{episode:"s1e3",description:"Humans",viewed:!1}]}]}return Object(o.a)(e,[{key:"retrieveItems",value:function(){var e=Object(y.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve(this.items));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getItem",value:function(){var e=Object(y.a)(k.a.mark((function e(t,n){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0;case 1:if(!(a<this.items.length)){e.next=7;break}if(this.items[a].link!==t){e.next=4;break}return e.abrupt("return",Promise.resolve(this.items[a]));case 4:a++,e.next=1;break;case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"createItem",value:function(){var e=Object(y.a)(k.a.mark((function e(t,n){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("ItemService.createItem():"),console.log(t),this.items.push(t),e.abrupt("return",Promise.resolve(t));case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteItem",value:function(){var e=Object(y.a)(k.a.mark((function e(t,n){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("ItemService.deleteItem():"),console.log("item ID:"+t),a=0;case 3:if(!(a<this.items.length)){e.next=10;break}if(this.items[a].link!==t){e.next=7;break}return this.items.splice(a,1),e.abrupt("return",Promise.resolve());case 7:a++,e.next=3;break;case 10:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"updateItem",value:function(){var e=Object(y.a)(k.a.mark((function e(t,n){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("ItemService.updateItem():"),console.log(t);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),g=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data.episode,t="item-episode clickable",n="you didn't see it";return e.viewed&&(t="item-episode clickable viewed",n="already viewed"),i.a.createElement("li",{className:t,title:n},i.a.createElement("span",{className:"episode-episode"},e.episode))}}]),t}(i.a.Component),w=function e(){Object(l.a)(this,e),this.USER_GETTOKEN_URL="http://localhost:59254/User/GetToken",this.ITEM_COLLECTION_URL="http://localhost:43605/Item/index?user={user}",this.ITEM_CREATE_URL="http://localhost:43605/Item/Create"},C=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).onLogin=n.onLogin.bind(Object(m.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(m.a)(n));var a=window.localStorage.getItem("lastUserName");return a||(a=""),n.config=new w,n.state={userName:a,password:"",token:null},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"login-panel"},i.a.createElement("div",null,i.a.createElement("label",{className:"field-name"},"Login: \xa0",i.a.createElement("input",{value:this.state.userName,onChange:this.handleInputChange,name:"userName",maxLength:"40",required:!0,placeholder:"user name"})),i.a.createElement("span",{className:"spacer"},"\xa0"),i.a.createElement("label",{className:"field-name"},"Password: \xa0",i.a.createElement("input",{type:"password",value:this.state.password,onChange:this.handleInputChange,name:"password",maxLength:"40",required:!0,placeholder:"password"})),i.a.createElement("span",{className:"spacer"},"\xa0"),i.a.createElement("span",{className:"button clickable",onClick:function(){return e.onLogin()}},"Login")),i.a.createElement("br",null),i.a.createElement("div",{className:"login-help-text"},"If you'll sign up with non-existing user name, new account will be created automatically with password you did provide this first time. No password changing or reminding functionality, so put proper password - at least 79 symbols with at least 3 lower case letters, 3 capital letters, 18 digits and 7 Chinese Simplified hieroglyphs in it.",i.a.createElement("br",null),"Seriosly: the password will be ignored, as no security system here; next time i'll use OAuth2, but yet user can see what others did see."))}},{key:"onLogin",value:function(){var e=Object(y.a)(k.a.mark((function e(){var t,n=this;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.localStorage.setItem("lastUserName",this.state.userName),t=JSON.stringify({userName:this.state.userName,password:this.state.password}),e.abrupt("return",fetch(this.config.USER_GETTOKEN_URL,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:t}).then((function(e){return console.log("Retrieved items:"),console.log(e),e.ok||n.handleResponseError(e),e.json()})).then((function(e){console.log("Retrieved items:"),console.log(e),n.props.data(e.token,n.state.userName)})).catch((function(e){n.handleError(e)})));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleInputChange",value:function(e){var t=e.target,n=t.value,a=t.name;this.setState(Object(p.a)({},a,n))}},{key:"handleResponseError",value:function(e){throw new Error("HTTP error, status = "+e.status)}},{key:"handleError",value:function(e){console.log(e.message)}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).itemService=new I,n.onSelect=n.onSelect.bind(Object(m.a)(n)),n.onNewItem=n.onNewItem.bind(Object(m.a)(n)),n.onEditItem=n.onEditItem.bind(Object(m.a)(n)),n.onCancel=n.onCancel.bind(Object(m.a)(n)),n.onCancelEdit=n.onCancelEdit.bind(Object(m.a)(n)),n.onCreateItem=n.onCreateItem.bind(Object(m.a)(n)),n.onUpdateItem=n.onUpdateItem.bind(Object(m.a)(n)),n.onDeleteItem=n.onDeleteItem.bind(Object(m.a)(n)),n.onAddEpisodeClick=n.onAddEpisodeClick.bind(Object(m.a)(n)),n.onEpisodeClick=n.onEpisodeClick.bind(Object(m.a)(n)),n.onLogin=n.onLogin.bind(Object(m.a)(n)),n.state={showDetails:!1,editItem:!1,selectedItem:null,newItem:null,userName:null,token:null},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getItems()}},{key:"render",value:function(){var e=this,t=this.state.items;if(!t)return null;if(null==this.state.token)return i.a.createElement(C,{data:this.onLogin});var n=this.state.showDetails,a=this.state.selectedItem,s=this.state.newItem,r=this.state.editItem,l=t.map((function(t){return i.a.createElement("li",{className:"list-item",key:t.link},i.a.createElement("span",{onClick:function(){return e.onDeleteItem(t.link)},className:"item-delete clickable",title:"remove this show from the list"},"\u2716")," \xa0",i.a.createElement("span",{onClick:function(){return e.onSelect(t.link)},className:"item-name clickable"},t.name,"\xa0|\xa0 ",i.a.createElement("span",{className:"item-summary"},t.summary)),i.a.createElement("ul",{className:"item-episodes"},t.episodes.map((function(n){return i.a.createElement("span",{key:n.episode,onClick:function(){e.onEpisodeClick(t,n.episode)}},i.a.createElement(g,{data:{episode:n,item:t}}))})),"\xa0...\xa0",i.a.createElement("li",{className:"item-episode-add button clickable",onClick:function(){return e.onAddEpisodeClick(t)}},"+")),i.a.createElement("br",null))}));return i.a.createElement("div",null,i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"welcome-panel"},"Welcome, ",this.state.userName),i.a.createElement("ul",{className:"items"},l),i.a.createElement("br",null),n&&a&&i.a.createElement(h,{item:a,onEdit:this.onEditItem,onDelete:this.onDeleteItem}),r&&a&&i.a.createElement(f,{onSubmit:this.onUpdateItem,onCancel:this.onCancelEdit,item:a}),s&&i.a.createElement(v,{onSubmit:this.onCreateItem,onCancel:this.onCancel}),i.a.createElement("div",{className:"item-add clickable",onClick:function(){return e.onNewItem()}},"\u25bc add new show "),i.a.createElement("br",null)))}},{key:"getItems",value:function(){var e=this;this.itemService.retrieveItems(this.state.userName).then((function(t){e.setState({items:t})}))}},{key:"onSelect",value:function(e){var t=this;this.clearState(),this.itemService.getItem(e).then((function(e){t.setState({showDetails:!0,selectedItem:e})}))}},{key:"onEpisodeClick",value:function(e,t){var n=this;e.episodes.forEach((function(e){e.episode===t&&(e.viewed=!e.viewed)})),this.clearState(),this.itemService.updateItem(e).then((function(e){n.getItems()}))}},{key:"onAddEpisodeClick",value:function(e){var t=this;void 0===e.lastEpisode||null==e.lastEpisode?e.lastEpisode=e.episodes.length+1:e.lastEpisode=e.lastEpisode+1,void 0===e.lastSeason&&(e.lastSeason=1),e.episodes.push({episode:"s"+e.lastSeason+"e"+e.lastEpisode,viewed:!1}),this.clearState(),this.itemService.updateItem(e).then((function(e){t.getItems()}))}},{key:"onCancel",value:function(){this.clearState()}},{key:"onNewItem",value:function(){this.clearState(),this.setState({newItem:!0})}},{key:"onEditItem",value:function(){this.setState({showDetails:!1,editItem:!0,newItem:null})}},{key:"onCancelEdit",value:function(){this.setState({showDetails:!0,editItem:!1,newItem:null})}},{key:"onUpdateItem",value:function(e){var t=this;this.clearState(),this.itemService.updateItem(e).then((function(e){t.getItems()}))}},{key:"onCreateItem",value:function(e){var t=this;this.clearState(),this.itemService.createItem(e).then((function(e){t.getItems()}))}},{key:"onDeleteItem",value:function(e){var t=this;this.clearState(),this.itemService.deleteItem(e).then((function(e){t.getItems()}))}},{key:"onLogin",value:function(e,t){this.setState({token:e,userName:t}),this.forceUpdate()}},{key:"clearState",value:function(){this.setState({showDetails:!1,selectedItem:null,editItem:!1,newItem:null})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.bf105d16.chunk.js.map