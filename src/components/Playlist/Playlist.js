import React from "react";
import "./Playlist.module.css";

export class Playlist extends React.Component{
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  };

  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  };

    render() {
    return (
        <div className="Playlist">
        <input defaultValue={"New Playlist"} onChange={this.handleNameChange}/>
        {/* <!-- Add a TrackList component --> */}
        <Tracklist 
        trackst={this.props.playlistTracks} 
        onnRemove={this.props.onRemove}
        isRemoval={true} 
        />
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
        );
    };
};
