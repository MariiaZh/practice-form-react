import React, { useRef } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import { todoWorkerActions } from '../../../store/todoWorker';
import { useDispatch } from 'react-redux';

const Modal = (props) => {

    const dispatch = useDispatch();
    const ref = useRef();

    const saveTaskHandler = (event) => {
        const value = ref.current.value;
        const id = props.id
        console.log(value)
        dispatch(todoWorkerActions.updateTask({ value, id }));
    }


    return <div>
        <TextareaAutosize
            aria-label={props.id}
            placeholder='edit task'
            style={{ width: 300 }}
            defaultValue={props.task}
            ref={ref}
        />
        <Button variant="contained" color="primary" onClick={saveTaskHandler}>Save</Button>

    </div>
}

export default Modal;