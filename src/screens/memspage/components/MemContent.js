import React, { Fragment, useEffect } from "react";
import { CardContent, Typography } from "@material-ui/core";
import FetchRequest from "../../../helpers/validation/api/FetchRequest";
import { memsWorkerActions } from "../../../store/memsWorker";
import { useDispatch, useSelector } from "react-redux";
import ContentStyles from "../style/ContentStyle";


const MemContent = () => {

    const classes = ContentStyles();

    const dispatch = useDispatch();
    const catUrl = useSelector(state => state.memsWorker.catUrl);
    const fetchSuccess = useSelector(state => state.memsWorker.fetchSuccess);
    const selectedHourNumber = useSelector(state => state.memsWorker.selectedHourNumber);

    useEffect(() => {
        FetchRequest(`https://api.thecatapi.com/v1/images/search?limit=1&page=${selectedHourNumber}&order=Desc`)
            .then(response => {
                return response.json();
            })
            .then(result => {
                dispatch(memsWorkerActions.changeCatsPhoto(result));
            })
    }, [selectedHourNumber]);

    const showContent = (<CardContent className={classes.root}>
        <Typography
            gutterBottom
            variant="h4"
            component="h1">Your funny cat of the current happy hour!</Typography>
        <img className="image" src={catUrl}
            title="photo"
            alt="cat" />
    </CardContent>)

    return (<Fragment>
        {fetchSuccess ? showContent : "Please, wait!"}
    </Fragment>
    );
}

export default MemContent;