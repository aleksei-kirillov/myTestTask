import React, { Component } from 'react';
import './App.css';

class ItemDetails extends Component {

  constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
	
  render() {
    const item = this.props.item;
	const episodes = this.props.item.episodes;
    const listEpisodes = episodes.map((episode) =>
      <li key={episode.episode} onClick={() => {}}>
         <span className="episode-episode">{episode.episode}</span>&nbsp;|&nbsp; {episode.description}
      </li>
    );

    return (
      <div className="input-panel">
      <span className="form-caption">{ item.name}</span>
      <div><span className="field-name">Summary:</span> {item.summary}</div>
      <div><span className="episodes">Episodes:</span> {listEpisodes}</div>
      <br/>
      <button onClick={() => this.onDelete()}>Delete</button>&nbsp;
      <button onClick={() => this.onEdit()}>Edit</button>
      </div>
    );
  }

  onEdit() {
    this.props.onEdit();
  }

  onDelete() {
    const item = this.props.item;
    if(window.confirm("Are you sure to delete item: " + item.name + " ?")) {
      this.props.onDelete(item.link);
    }
  }

}

export default ItemDetails;
