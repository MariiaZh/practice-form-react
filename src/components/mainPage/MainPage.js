import React, { Fragment } from 'react';
import { Container } from '@material-ui/core';
import Header from '../Header';

export default function MainPage(props) {

    return (
        <Fragment>
            <Header />
            <Container>
                {props.children}
            </Container>
        </Fragment>
    );
}
