import React from "react";
import { Button, Grid, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

const Details = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  return (
    <React.Fragment>
      <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Link to="/" width="100%" style={{ textDecoration: "none" }}>
            <Button variant="contained"> Go back</Button>
          </Link>
        </Grid>
      </Grid>
      <Paper elevation={6} style={{ height: "100%" }}>
        <h1>{video.snippet.title}</h1>
        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <img
              height="100%"
              width="100%"
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Paper elevation={6} style={{ padding: "15px" }}>
              <h1>Detalles del video:</h1>
              <h2>Id: {video.id.videoId}</h2>
              <h2>Chanel: {video.snippet.ChannelTitle}</h2>
              <h2>Description: {video.snippet.description}</h2>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default Details;
