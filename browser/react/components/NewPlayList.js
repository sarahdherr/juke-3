import React from 'react';
import { Link } from 'react-router';

export default class NewPlayList extends React.Component {
  constructor(props) {
    super(props)


  }

  render() {
    return (
      <div className="well">
        <form className="form-horizontal" onSubmit={this.props.handleSubmit}>
          <fieldset>
            <legend>New Playlist</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input value= {this.props.inputValue} className="form-control" type="text" onChange={this.props.handleChange} />
              </div>
            </div>
            {(!this.props.validLength && this.props.startedTyping) ? <div className="alert alert-warning">Please enter a name</div> : <div></div>}
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button disabled={!this.props.validLength} type="submit" className="btn btn-success" >Create Playlist</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
