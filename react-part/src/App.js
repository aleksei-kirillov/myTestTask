import React, { Component } from 'react';
import './App.css';
import ItemDetails from './item-details';
import NewItem from './new-item';
import EditItem from './edit-item';
import ItemService from './shared/item-service';
import ItemEpisode from './item-episode';
import Login from './login';

class App extends Component {

  constructor(props) {
    super(props);
    this.itemService = new ItemService();
    this.onSelect = this.onSelect.bind(this);
    this.onNewItem = this.onNewItem.bind(this);
    this.onEditItem = this.onEditItem.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onCancelEdit = this.onCancelEdit.bind(this);
    this.onCreateItem = this.onCreateItem.bind(this);
    this.onUpdateItem = this.onUpdateItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.onAddEpisodeClick = this.onAddEpisodeClick.bind(this);
    this.onEpisodeClick = this.onEpisodeClick.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.state = {
      showDetails: false,
      editItem: false,
      selectedItem: null,
      newItem: null,
	  userName: null,
	  token: null,
	  items: []
    }
  }

  componentDidMount() {
      this.getItems();
  }

  render() {
    const items = this.state.items;
		
	if(this.state.token == null)
	{
		return (<Login data={this.onLogin}/>);
	}
	
    const showDetails = this.state.showDetails;
    const selectedItem = this.state.selectedItem;
    const newItem = this.state.newItem;
    const editItem = this.state.editItem;
	
    const listItems = items.map((item) =>
      <li className="list-item" key={item.link}>
		<span onClick={() => this.onDeleteItem(item.link)} className="item-delete clickable" title="remove this show from the list">✖</span> &nbsp;
        <span onClick={() => this.onSelect(item)} className="item-name clickable">{item.name}&nbsp;|&nbsp; <span className="item-summary">{item.summary}</span></span>
			<ul className="item-episodes">
				{item.episodes.map((episode)=> <span key={episode.episode} onClick={()=>{this.onEpisodeClick(item, episode.episode)}}><ItemEpisode data={{episode:episode, item: item}} /></span>)}
				&nbsp;...&nbsp;
			
				<li className="item-episode-add button clickable" title="add episode" onClick={()=>this.onAddEpisodeClick(item)}>+</li>
			</ul>
			<br/>
      </li>
    );

    return (
	<div>
      <div className="App">
		  <div className="welcome-panel">Welcome, {this.state.userName}</div>
          <ul className="items">
            {listItems}
          </ul>
          <br/>
		{showDetails && selectedItem && <ItemDetails item={selectedItem} onEdit={this.onEditItem}  onDelete={this.onDeleteItem} />}
		{editItem && selectedItem && <EditItem onSubmit={this.onUpdateItem} onCancel={this.onCancelEdit} item={selectedItem} />}
		{newItem && <NewItem onSubmit={this.onCreateItem} onCancel={this.onCancel}/>}
          <div className="item-add clickable" onClick={() => this.onNewItem()}>▼ add new show </div>
          <br/>
      </div>
      </div>
    );
  }

  getItems() {
	if(this.state.token === null || this.state.token === "")
		return;
	
    this.itemService.retrieveItems(this.state.token).then(items => {
          this.setState({items: items});
        }
    );
  }

  onSelect(item) {
//	this.clearState();
	this.setState({
	  showDetails: true,
	  selectedItem: item
	});
/*    this.itemService.getItem(itemLink, this.state.token).then(item => {
      this.setState({
          showDetails: true,
          selectedItem: item
        });
      }
    );*/
  }

  onEpisodeClick(item, episodeName)
  {
	item.episodes.forEach(e => {if(e.episode === episodeName)e.viewed = !e.viewed;});

    this.clearState();
    this.itemService.updateItem(item, this.state.token).then(item => {
        this.getItems();
      }
    );
  }

  onAddEpisodeClick(item)
  {
	if(item.lastEpisode === undefined || item.lastEpisode == null )
		item.lastEpisode = item.episodes.length + 1;
	else
		item.lastEpisode = item.lastEpisode + 1;
	
	if(item.lastSeason === undefined)
		item.lastSeason = 1;
	
	item.episodes.push({episode: "s" + item.lastSeason + "e" + item.lastEpisode, viewed: false});

    this.clearState();
    this.itemService.updateItem(item, this.state.token).then(item => {
        this.getItems();
      }
    );
  }

  onCancel() {
    this.clearState();
  }

  onNewItem() {
    this.clearState();
    this.setState({
      newItem: true
    });
  }

  onEditItem() {
    this.setState({
      showDetails: false,
      editItem: true,
      newItem: null
    });
  }

  onCancelEdit() {
    this.setState({
      showDetails: true,
      editItem: false,
      newItem: null
    });
  }

  onUpdateItem(item) {
    this.clearState();
    this.itemService.updateItem(item, this.state.token).then(item => {
        this.getItems();
      }
    );
  }

  onCreateItem(newItem) {
    this.clearState();
    this.itemService.createItem(newItem, this.state.token).then(item => {
        this.getItems();
      }
    );
  }

  onDeleteItem(itemLink) {
    this.clearState();
    this.itemService.deleteItem(itemLink, this.state.token).then(res => {
        this.getItems();
      }
    );
  }
  
  onLogin(token, userName)
  {
	  this.setState({"token": token, "userName": userName});
	  this.getItems();
	  this.forceUpdate();
  }

  clearState() {
    this.setState({
      showDetails: false,
      selectedItem: null,
      editItem: false,
      newItem: null,
    });
  }
}

export default App;
