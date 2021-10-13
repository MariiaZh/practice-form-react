import React, { useEffect, useState } from "react";
import { Checkbox, Typography } from "@material-ui/core";
import ItemStyles from "../style/ItemStyles";
import { todoWorkerActions } from "../../../store/todoWorker";
import { useDispatch, useSelector } from "react-redux";

import IconButton from '@mui/material/IconButton';
import ArticleTwoTone from '@mui/icons-material/ArticleTwoTone';
import DeleteTwoTone from '@mui/icons-material/DeleteTwoTone';
import Modal from "./Modal";

let flag = false;

const DraggableCard = (props) => {
    const classes = ItemStyles();

    const tasksList = useSelector(state => state.todoWorker.initialData);
    const status = tasksList.find(item => item.id === props.id).inProgress;

    const [checker, setChecker] = useState(!status);

    const dispatch = useDispatch();

    const handleCheck = () => {
        setChecker(!checker);
    }

    useEffect(() => {
        if (checker) {
            flag = true;
            dispatch(todoWorkerActions.checkFinishedTask(props.id));
        }
        if (flag && !checker) {
            dispatch(todoWorkerActions.uncheckFinishedTask(props.id));
        }
    }, [checker])

    const deleteTaskHandler = () => {
        dispatch(todoWorkerActions.deleteTask(props.id))
    }

    const showModalHandler = () => {
        dispatch(todoWorkerActions.showEditModal(props.id))
    }

    const editButton = (
        <IconButton aria-label="edit" color='primary' onClick={showModalHandler}>
            <ArticleTwoTone />
        </IconButton>)

    return (
        <div className={classes.root}>
            <div
                className={checker ? "main done" : 'main'}
                id={props.id}
                order={props.order}
                draggable={checker ? false : true}
                onDragStart={props.onDragStart}
                onDragEnd={props.onDragEnd}
                onDragOver={props.onDragOver}
                onDragLeave={props.onDragLeave}
                onDrop={props.onDrop}
            >
                <Checkbox
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                    onClick={handleCheck}
                    checked={checker}
                />
                {/*<Typography className="userText"
                    onClickCapture={(e) => e.preventDefault()}
                >*/}
                {props.task}
                {/*</Typography>*/}

                {!checker && editButton}
                <IconButton
                    id={props.id}
                    onClick={deleteTaskHandler}
                    aria-label="delete"
                    color='error'>
                    <DeleteTwoTone />
                </IconButton>
            </div>
            {props.editModal && <Modal
                task={props.task}
                id={props.id}
            />}
        </div >
    );
};

export default DraggableCard;