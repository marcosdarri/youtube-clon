import React from "react";
import { Paper, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <React.Fragment>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
          <Grid container item xs={12} sm={12} lg={12} xl={12}>
            <Grid item xs={12} sm={12} lg={8} xl={8}>
              <Typography variant="h4">{video.snippet.title}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} xl={4}>
              <Link
                to="/details"
                width="100%"
                style={{ textDecoration: "none" }}
              >
                <Button variant="contained"> View video details</Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

export default VideoDetail;
