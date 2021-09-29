import React, { Fragment } from 'react';
import { Container } from '@material-ui/core';
import Header from './Header.js';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        width: "100%",
        maxWidth: "100%",
        padding: 0,
        margin: 0,
    },
});

export default function Content(props) {

    const classes = useStyles();
    return (
        <Fragment >
            <Header />
            <Container className={classes.root}>
                {props.children}
            </Container>
        </Fragment>
    );
}
