import React from 'react';

import { Grid } from "@material-ui/core";

import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)
    
    return (
        <Grid container item spacing={2} xs={12} sm={12} xl={12}>
            {listOfVideos}
        </Grid>
    ) 
}

export default VideoList;