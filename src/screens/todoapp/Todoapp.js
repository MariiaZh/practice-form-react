import React, { useEffect } from "react";
import DraggableCard from "./components/DraggableCard";
import TodoStyles from "./style/TodoStyle";
import { todoWorkerActions } from "../../store/todoWorker";
import { useDispatch, useSelector } from "react-redux";

let startFlag = false;

const Todoapp = () => {
    const classes = TodoStyles();

    const tasksList = useSelector(state => state.todoWorker.initialData);
    const dragCard = useSelector(state => state.todoWorker.dragCard);

    const dispatch = useDispatch();

    const dragStartHandler = (event) => {
        event.target.style.background = "lightcyan";
        dispatch(todoWorkerActions.chooseDragCard(event.target.id));
    }

    const dragEndHandler = (event) => {
        event.target.style.background = "#4dd0e1";
    }

    const dragOverHandler = (event) => {
        event.preventDefault();
        event.target.style.background = "LightCyan";

        if (startFlag && dragCard.id !== event.target.id) {
            dispatch(todoWorkerActions.changeOrder(event.target.id))
        }
    }

    const dragLeaveHandler = (event) => {
        event.target.style.background = "#4dd0e1";
    }

    const dropHandler = (event) => {
        event.preventDefault();
        event.target.style.background = "#4dd0e1";
    }

    useEffect(() => {
        startFlag = true;
    }, [])

    return (
        <div className={classes.root}>
            {tasksList.map(item => {
                return (<DraggableCard
                    key={item.id}
                    id={item.id}
                    order={item.order}
                    task={item.task}
                    editModal={item.editModal}
                    onDragStart={item.inProgress ? dragStartHandler : null}
                    onDragEnd={item.inProgress ? dragEndHandler : null}
                    onDragOver={item.inProgress ? dragOverHandler : null}
                    onDragLeave={item.inProgress ? dragLeaveHandler : null}
                    onDrop={item.inProgress ? dropHandler : null} />)
            })}
        </div>
    );
}

export default Todoapp;
