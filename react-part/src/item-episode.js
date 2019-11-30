import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './App.css';


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
		
		return (<li className={className} title={title}><span className="episode-episode">{episode.episode}</span></li>)
	}
}

export default ItemEpisode;