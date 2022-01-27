import React from "react";
import {Grid, Paper, Typography} from '@material-ui/core';
import './VideoItem.css'

const VideoItem = ({video, onVideoSelect}) => {
    return(
        <Grid item xs={12}  sm={12} md={12} lg={12} xl={12} >
            <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick = {()=> onVideoSelect(video)}>
            </Paper>
            <Grid item xs={12}  sm={12} md={12} lg={12} xl={12} >
                <img  alt="thumbnail" src={video.snippet.thumbnails.medium.url} className="videoItemImg" />
                </Grid>
                <Grid item xs={12}  sm={12} md={12} lg={12} xl={12} >
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
                </Grid>
            
        </Grid>
    )
}

export default VideoItem;