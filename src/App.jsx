import React from "react";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoDetail, VideoList, Details } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createSlice, configureStore } from "@reduxjs/toolkit";

import youtube from "./api/youtube";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

store.subscribe(() => console.log(store.getState()));

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    counter: 0,
  };

  componentDidMount() {
    this.handleSubmit("Codigo del Sur");
  }

  onVideoSelect = (video) => {
    store.dispatch(incremented());
    this.setState({ selectedVideo: video, counter: store.getState().value });
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
          <Route
            exact
            path="/details"
            element={<Details video={selectedVideo} />}
          />
          <Route
            exact
            path="/"
            element={
              <Grid justifyContent="center" container spacing={1}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Grid
                    container
                    item
                    spacing={1}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                  >
                    <SearchBar onFormSubmit={this.handleSubmit} />
                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                      <VideoDetail video={selectedVideo} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <VideoList
                        videos={videos}
                        onVideoSelect={this.onVideoSelect}
                      />
                      <h1>Videos watched: {store.getState().value}</h1>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
