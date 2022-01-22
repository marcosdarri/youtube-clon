import React from "react";
import { Paper, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  console.log(video);

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Grid container item xs={12}>
          <Grid item xs={8}>
            <Typography variant="h4">{video.snippet.title}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Link to="/description" width="100%" style={{ textDecoration:"none" }}>
              <Button variant="contained" > Description</Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetail;
