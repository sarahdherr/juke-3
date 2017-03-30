import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import NewPlayList from '../components/NewPlayList';

export default class PlayListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playListName: '',
      inputValue: '',
      validLength: false,
      startedTyping: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkLength = this.checkLength.bind(this);
    
  }

  checkLength() {

    (this.state.inputValue.length > 16 || this.state.inputValue.length === 0) ? this.setState({ validLength: false }) : this.setState({ validLength: true })
    //console.log("checking length", this.state.validLength);
  }

  handleChange(e) {
    this.setState({
      playListName: e.target.value,
      inputValue: e.target.value,
      startedTyping: true
    }, this.checkLength) //setState takes a callback as a second argument
  }

  handleSubmit(e) {
    //console.log("playlist submitted", this.state.playListName)
    this.setState({ inputValue: "" })
    e.preventDefault();
    this.props.createNewPlayList(this.state.playListName)
  }

  // createNewPlayList() {
  //   axios.post('/api/playlists', {name: this.state.playListName})
  //     .then(res => res.data)
  //     .then(result => {
  //       console.log(result) // response json from the server!
  //     });
  // }

  render() {
    const playListName = this.state.playListName;


    return (
      <div>

        <NewPlayList handleChange={this.handleChange} handleSubmit={this.handleSubmit} inputValue={this.state.inputValue} validLength={this.state.validLength} startedTyping={this.state.startedTyping} />
      </div>
    )
  }

}
