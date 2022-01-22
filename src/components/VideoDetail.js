import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import {Paper, Typography, Button} from '@material-ui/core';
import About from './About';

const VideoDetail = ({video}) => {
    if(!video) return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
   return(
       <React.Fragment>
           <Paper elevation={6} style={{height: '70%'}}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc}/>
           </Paper>
           <Paper elevation={6} style={{padding: '15px'}}>
            <Typography variant="h4">{video.snippet.title}</Typography>
               <Router>
                   <Button variant="contained" href="/about">Descripcion</Button>
              </Router>
           </Paper>
       </React.Fragment>
   ) 
}

export default VideoDetail;