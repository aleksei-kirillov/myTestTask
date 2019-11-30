import React, { Component } from 'react';

class ItemEpisodes extends Component {
	render()
	{		
		const item = this.props.data.item;
		const onEpisodeClick = this.props.data.onEpisodeClick;
		if(item === null || item === undefined)
			return "";
		return item.episodes.length > 0? item.episodes.map((episode)=> 
			<span key={episode.episodeId} onClick={()=>{onEpisodeClick(item, episode.episodeId)}}><ItemEpisode data={{episode:episode, item:item}} /></span>) : "";
	}
}

class ItemEpisode extends React.Component {
	
	render(){
		const episode = this.props.data.episode;

		var className = "item-episode clickable";
		var title = "you didn't see it";
		if(episode.viewed)
		{
			className = "item-episode clickable viewed";
			title = "already viewed";
		}
		
		return (<li className={className} title={title}><span className="episode-episode">{episode.episodeId}</span></li>)
	}
}

export default ItemEpisodes;