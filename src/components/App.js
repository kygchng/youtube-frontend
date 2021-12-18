import React from 'react';
import SearchBar from './SearchBar';
import SelectedVideo from "./SelectedVideo";
import VideoList from "./VideoList";
import youtube from '../api/youtube';

class App extends React.Component {

  state =  {videos: [], selectedVideo: null}

  componentDidMount() {
    this.onSearchSubmit("cookies");
  }

  onSearchSubmit = async(term) => {
    //console.log("this is the term in app: " + term);
    const response = await youtube.get( "/search", {
      params : {
        q: term
      }
    })
    console.log(response);
    this.setState({videos : response.data.items, selectedVideo : response.data.items[0]});
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo : video});
  }

  render() {
    return(
      <div className = "ui container">
        <SearchBar
          onSearchSubmit = {this.onSearchSubmit}
        />
        <div className = "ui grid">
          <div className = "ui row">
            <div className = "eleven wide column">
              <SelectedVideo
                selectedVideo = {this.state.selectedVideo}
              />
            </div>
            <div className = "five wide column">
              <VideoList
                videos = {this.state.videos} 
                onVideoSelect = {this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
