import React, { useReducer } from "react";
import Poster_01 from "../../assets/BB_S1_poster.jpg";

import ListStyles from "../style/EpisodeStyle";
import { Box, Typography } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



const EpisodeInfo = (props) => {

    const classes = ListStyles();


    return <Card className={classes.root}>

        <CardMedia
            className={`${classes.photo}`}
            component="img"
            height="140"
            image={Poster_01} />

        <CardContent id="details">

            <Typography gutterBottom variant="h4" component="h1">
                {props.title}
            </Typography>

            <p variant="h4" className="wrapper">
                Episode:  <span>{props.episode}</span>
            </p>
            <p variant="h4" className="wrapper">
                Season: <span>{props.season}</span>
            </p>
            <Typography variant="body2" color="textSecondary" className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ipsa necessitatibus dolorum expedita voluptas distinctio asperiores, doloribus laudantium ratione voluptatem quidem fugiat quae! Id voluptate sequi accusamus molestias dicta nemo.
            </Typography>
            <p variant="h6" className="date">
                <span>Air date:</span>{props.air_date}
            </p>
        </CardContent>
    </Card >
}

export default EpisodeInfo;