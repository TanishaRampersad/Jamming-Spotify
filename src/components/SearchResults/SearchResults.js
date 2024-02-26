import React from "react";
import "./SearchResults.module.css";

export class SearchResults extends React.Component{
    render() {
    return (
        <div className="SearchResults">
          <h2>Results</h2>
        {/* <!-- Add a TrackList component --> */}
        <TrackList track={this.props.searchResults}
        onAdd={this.props.onAdd}
        isRemoval={false}/>
      </div>
        );
    };
};
