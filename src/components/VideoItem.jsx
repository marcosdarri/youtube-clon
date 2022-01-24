import React from "react";

import {Grid, Paper, Typography} from '@material-ui/core';

const VideoItem = ({video, onVideoSelect}) => {
    return(
        <Grid item xs={12}  sm={12} md={12} lg={12} xl={12} >
            <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick = {()=> onVideoSelect(video)}>
            <Grid item xs={12}  sm={12} md={8} lg={8} xl={8} >
                <img  alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
                </Grid>
                <Grid item xs={12}  sm={12} md={4} lg={4} xl={4} >
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default VideoItem;