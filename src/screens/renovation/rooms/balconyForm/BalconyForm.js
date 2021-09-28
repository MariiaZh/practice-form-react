import React from 'react';
import { useFormik } from "formik";

import ValidationSchema from '../../../../helpers/validation/validation';
import { Box, Typography, Button, TextField, Checkbox, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';

import UseStyles from '../../../../style/FormStyle';

const BalconyForm = () => {

    const [balconyType, setBalconyType] = React.useState('');

    const handleBalconyChange = (event) => {



        setBalconyType(event.target.value);
        console.log('event);:', event.target)
        console.log(formik.values.glazing + " ---- " + formik.values.french + " ---- " + formik.values.takeOut + " ---- " + formik.values.notGlazing);

    };

    const classes = UseStyles();

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
                <Typography variant="h6">Check type of the balcony renovation:</Typography>

                {/*<Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                />*/}


                <RadioGroup aria-label="balconyType" name="balconyType" value={balconyType} onChange={handleBalconyChange}>
                    <FormControlLabel id="glazing" value={formik.values.glazing} control={<Radio />} label="Glazing Balcony" />
                    <FormControlLabel id="french" value={formik.values.french} control={<Radio />} label="French Balcony" />
                    <FormControlLabel id="takeOut" value={formik.values.takeOut} control={<Radio />} label="Balcony with take-out" />
                    <FormControlLabel id="notGlazing" value={formik.values.notGlazing} control={<Radio />} label="Not glazed balcony" />
                </RadioGroup>
            </Box>

            <Box>
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
        </form >
    </Box >
    );

}

export default BalconyForm;
