import React, { useRef, Fragment } from 'react';
import ReactDOM from "react-dom";
import { Container, Button, TextareaAutosize } from '@material-ui/core';
import { todoWorkerActions } from '../../../store/todoWorker';
import { useDispatch } from 'react-redux';
import ModalStyles from "../style/ModalStyles";
import OverlayStyles from "../style/OverlayStyles";


const Overlay = (props) => {
    const classes = OverlayStyles();

    return (
        <div
            className={classes.root}
            onClick={props.onClick}></div>
    )
}

const Modal = (props) => {

    const classes = ModalStyles();

    const dispatch = useDispatch();
    const ref = useRef();

    const saveTaskHandler = () => {
        const value = ref.current.value;
        const id = props.id
        console.log(value)
        dispatch(todoWorkerActions.updateTask({ value, id }));
    }

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Container className={classes.root}>
                    <TextareaAutosize className='textarea'
                        aria-label={props.id}
                        placeholder='edit task'
                        defaultValue={props.task}
                        ref={ref}
                    />
                    <Button variant="contained" color="primary" onClick={saveTaskHandler}>Save</Button>
                </Container>,
                document.getElementById("modal"))
            }
            {ReactDOM.createPortal(
                <Overlay onClick={saveTaskHandler} />,
                document.getElementById("overlay")
            )}
        </Fragment>
    )
}

export default Modal;