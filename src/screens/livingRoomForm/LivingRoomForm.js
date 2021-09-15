import React from 'react';
import { useFormik } from "formik";
import ValidationSchema from '../../helpers/validation/validation';

import { Box, Typography, Button, TextField, Checkbox } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { deepPurple, blue } from '@material-ui/core/colors';


const useStyles = makeStyles({
    root: {
        borderRadius: "0 0 15px 0",
        boxShadow: `2px 2px 4px ${blue[100]}`,
        color: deepPurple[600],
        padding: '10px',
        margin: "10px auto",

        "& div": {
            borderBottom: `2px dotted ${blue[500]}`,
            padding: 15,
        },

        "& div div": {
            borderBottom: `none`,
            padding: 2,
        },

        "& h6": {
            color: blue[600],
        },

        "& button": {
            display: "block",
            background: blue[500],
            margin: "25px 0 15px 15px",
            color: "white",
            border: `2px solid ${blue[800]}`,
            borderRadius: 7,
        },

        "& #params": {
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: "space-around",
        },

        "& #params h6": {
            width: '100%',
        },

        "&.wrapper": {
            width: '30%',
        },

        "& #params label": {
            display: 'block',
            width: '100%',
        },

        "& input[type='number']": {
            width: '60px',

        },

        "& input[type='text']": {
            width: "auto",
        },

        "& input[type='email']": {
            width: "auto"
        },

        "& input[type='checkbox']": {
            marginLeft: 20,
        },

        "& label": {
            margin: 5,
            color: deepPurple[800],
            fontWeight: '500',
        },

    },
});

const LivingRoomForm = (props) => {

    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            roomWidth: "",
            roomLength: "",
            roomHeight: "",
            name: "",
            email: "",
            tile: false,
            pipeline: false,
            window: false,
            furniture: false,
            sinks: false,
            stove: false,
            connection: false,
            lighting: false,
            hood: false,
        },

        validationSchema: ValidationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return (<Box className={classes.root}>
        <form onSubmit={formik.handleSubmit}>
            <Box id="params">
                <Typography variant="h6">Enter room parameters, sm:</Typography>
                <Box className="wrapper">
                    <label htmlFor="roomWidth">Room width:</label>
                    <TextField
                        type="number"
                        name="roomWidth"
                        id="roomWidth"
                        onChange={formik.handleChange}
                        value={formik.values.roomWidth}
                        error={formik.touched.roomWidth && Boolean(formik.errors.roomWidth)}
                        helperText={formik.touched.roomWidth && formik.errors.roomWidth}
                    />
                </Box>
                <Box className="wrapper">
                    <label htmlFor="roomLength">Room length:</label>
                    <TextField
                        type="number"
                        name="roomLength"
                        id="roomLength"
                        onChange={formik.handleChange}
                        value={formik.values.roomLength}
                        error={formik.touched.roomLength && Boolean(formik.errors.roomLength)}
                        helperText={formik.touched.roomLength && formik.errors.roomLength}
                    />
                </Box>
                <Box className="wrapper">
                    <label htmlFor="roomHeight">Room height:</label>
                    <TextField
                        type="number"
                        name="roomHeight"
                        id="roomHeight"
                        onChange={formik.handleChange}
                        value={formik.values.roomHeight}
                        error={formik.touched.roomHeight && Boolean(formik.errors.roomHeight)}
                        helperText={formik.touched.roomHeight && formik.errors.roomHeight}
                    />
                </Box>

            </Box>
            <Box>
                <Typography variant="h6">Mark the types of repairs:</Typography>
                <Box>
                    <Checkbox type="checkbox" name="tile"
                        onChange={formik.handleChange}
                        value={formik.values.tile} />
                    <label htmlFor="tile">tile laying</label>
                    <Checkbox type="checkbox" name="pipeline"
                        onChange={formik.handleChange}
                        value={formik.values.pipeline} />
                    <label>pipeline laying</label>
                    <Checkbox type="checkbox" name="window"
                        onChange={formik.handleChange}
                        value={formik.values.window} />
                    <label>windows installation</label>
                </Box>
                <Box>
                    <Checkbox type="checkbox" name="furniture"
                        onChange={formik.handleChange}
                        value={formik.values.furniture} />
                    <label>furniture installation</label>
                    <Checkbox type="checkbox" name="sink"
                        onChange={formik.handleChange}
                        value={formik.values.sink} />
                    <label>sink installation</label>
                    <Checkbox type="checkbox" name="stove"
                        onChange={formik.handleChange}
                        value={formik.values.stove} />
                    <label>stove installation</label>
                </Box>
                <Box>
                    <Checkbox type="checkbox" name="connection"
                        onChange={formik.handleChange}
                        value={formik.values.connection} />
                    <label>tap connection</label>
                    <Checkbox type="checkbox" name="lighting"
                        onChange={formik.handleChange}
                        value={formik.values.lighting} />
                    <label>lighting installation</label>
                    <Checkbox type="checkbox" name="hood"
                        onChange={formik.handleChange}
                        value={formik.values.hood} />
                    <label>hood installation</label>
                </Box>
            </Box>
            <Box>
                <Typography variant="h6">Input your name and email:</Typography>
                <TextField
                    id="name" label="Name" variant="outlined"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    id="email" label="Email" variant="outlined"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
            </Box>
            <Button type="submit">Submit</Button>
        </form>
    </Box >
    );

}

export default LivingRoomForm;
