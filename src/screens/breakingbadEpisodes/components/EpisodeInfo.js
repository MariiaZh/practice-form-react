import React from "react";

import ListStyles from "../style/EpisodeStyle";
import { Typography, Card, CardContent, CardMedia } from "@material-ui/core";


const EpisodeInfo = (props) => {

    const classes = ListStyles();

    return <Card>

        <CardContent className="imgWrapper">
            <CardMedia
                className={`${classes.photo}`}
                component="img"
                height="140"
                image={props.image} />
        </CardContent>


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