import React, { cloneElement, useEffect } from "react";
import {
  AppBar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import "./cards.css";
import "@fontsource/cairo/300.css";
import "@fontsource/cairo/400.css";
import "@fontsource/cairo/500.css";
import "@fontsource/cairo/700.css";
import fajr from "../imgs/fajr-prayer.png";
import dhur from "../imgs/dhhr-prayer-mosque.png";
import asr from "../imgs/asr-prayer-mosque.png";
import sunset from "../imgs/sunset-prayer-mosque.png";
import isha from "../imgs/night-prayer-mosque.png";
import Zoom, { Fade, Flip } from "react-reveal";

const Cards = ({ time }) => {
  return (
    <Fade>
      <Grid
        container
        spacing={{ xs: 2, md: 3, sm: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs sx={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ width: "200px", height: "270px", ml: 1 }}>
            <CardMedia
              component="img"
              height="100"
              image={fajr}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Cairo" }}
              >
                الفجر
              </Typography>
              <Typography variant="h2">{time.Fajr}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs sx={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ width: "200px", height: "270px", ml: 1 }}>
            <CardMedia
              component="img"
              height="100"
              image={dhur}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Cairo" }}
              >
                الظهر
              </Typography>
              <Typography variant="h2">{time.Dhuhr}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs sx={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ width: "200px", height: "270px", ml: 1 }}>
            <CardMedia
              component="img"
              height="100"
              image={asr}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Cairo" }}
              >
                العصر
              </Typography>
              <Typography variant="h2">{time.Asr}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs sx={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ width: "200px", height: "270px", ml: 1 }}>
            <CardMedia
              component="img"
              height="100"
              image={sunset}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Cairo" }}
              >
                المغرب
              </Typography>
              <Typography variant="h2">{time.Maghrib}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs sx={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ width: "200px", height: "270px", ml: 1 }}>
            <CardMedia
              component="img"
              height="100"
              image={isha}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Cairo" }}
              >
                العشاء
              </Typography>
              <Typography variant="h2">{time.Isha}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default Cards;
