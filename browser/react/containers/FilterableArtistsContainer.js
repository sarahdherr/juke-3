import React, {Component} from 'react';
import {Link} from 'react-router';

import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

export default class FilterableArtistsContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {
			inputValue: ''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({inputValue: e.target.value});
	}

	render() {
		const inputValue = this.state.inputValue;
		const filteredArtists = this.props.artists.filter(artist =>
			artist.name.match(inputValue));

		return (
			<div>
				<FilterInput handleChange={this.handleChange}/>
				<Artists artists={filteredArtists}/>
			</div>
		)
	}

}