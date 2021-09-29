import { makeStyles } from '@material-ui/core/styles';
import { deepPurple, blue } from '@material-ui/core/colors';


const FormStyle = makeStyles({
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

        "& #sliderWrapper": {
            margin: "30px 0 15px 0",
            border: "none",
        }
    },
});

export default FormStyle;