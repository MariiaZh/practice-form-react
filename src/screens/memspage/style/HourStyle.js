import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';


const HourStyles = makeStyles({
    root: {
        padding: 10,
        display: "flex",

        "& button": {
            width: 50,
            height: 50,
            background: purple[300],
            borderRadius: 15,
            color: "white",
        },

        "& .current": {
            background: purple[500],
        },

        "& button:hover": {
            color: purple[300],
        }
    }

});


export default HourStyles;