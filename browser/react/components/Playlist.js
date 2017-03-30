import React, {Component} from 'react';
import Songs from '../components/Songs';

export default class Playlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 0,
			playlist: {}
		}
	}

	componentDidMount () {
	    const selectPlaylist = this.props.selectPlaylist;
	    const playlistId = this.props.routeParams.playlistId;
	    selectPlaylist(playlistId);
	    this.setState({
	    	id: playlistId,
	    	playlist: this.props.selectedPlaylist
	    })
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.routeParams.playlistId !== this.state.id) {
			const selectPlaylist = this.props.selectPlaylist;
		    const playlistId = this.props.routeParams.playlistId;
		    selectPlaylist(playlistId);
			this.setState({
				playlist: nextProps.selectedPlaylist,
				id: playlistId
			})
		}
	}

	render() {
		const playlist = this.props.selectedPlaylist || [];
		return (
			<div>
			  <h3>{ playlist.name }</h3>
			  <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
			  { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
			  <hr />
			</div>
		)
	}
}