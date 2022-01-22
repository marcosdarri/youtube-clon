import React from "react";
import { Grid, Button } from "@material-ui/core";
import { SearchBar, VideoDetail, VideoList, Description } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import youtube from "./api/youtube";
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.handleSubmit("codigo del sur");
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 3,
        key: "AIzaSyB1Xc4L-7PWQM2frSFDq_X1BgzXJUeZg4s",
        q: searchTerm,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<VideoDetail />} /> 
          <Route exact path="/description" element={<Description video={selectedVideo}/>} />
        </Routes>
        <Grid justifyContent="center" container spacing={10}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={8}>
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  style={{ width: "100%", padding: "25px", fontSize: "30px" }}
                >
                  Button
                </Button>
              </Grid>
              <Grid item xs={8}>
                <VideoDetail video={selectedVideo} />
              </Grid>
              <Grid item xs={4}>
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                <h1>Videos watched: 17</h1>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </BrowserRouter>
    );
  }
}

export default App;
