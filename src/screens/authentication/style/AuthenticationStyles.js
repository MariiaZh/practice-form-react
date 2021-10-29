import { makeStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

const AuthStyles = makeStyles({
    root: {
        width: "40%",
        margin: "40px auto",
        background: teal[700],
        padding: 25,
        borderRadius: 16,
        boxShadow: "2px 4px 2px dimgray",

        "& h1": {
            margin: 0,
            color: "white",
            textShadow: `3px 3px 2px ${teal[900]}`,
        },

        "& input[type=email], input[type=password]": {
            display: "block",
            width: "94%",
            height: 25,
            margin: "15px 0",
            padding: 10,
            border: "none",
            borderRadius: 17,
            boxShadow: `2px 4px 2px ${teal[900]}`,
            outline: "none",
            fontSize: 20,
        },


        "& .wrapper": {
            width: "100%",
            height: 40,
            margin: "25px 0 0",
        },

        "& input[type=submit]": {
            display: "block",
            margin: "0 auto",
            padding: "10px 15px 8px",
            borderRadius: 9,
            border: `1px solid ${teal[100]}`,
            outline: "none",
            fontSize: 16,
            fontWeight: "bold",
            color: teal[900],
            alignItem: "middle",
            background: teal[100],
            boxShadow: `2px 4px 2px ${teal[900]}`,
        },

        "& input[type=submit]:hover": {
            background: teal[200],
            border: `1px solid ${teal[200]}`,
        },

        "& input[type=submit]:active": {
            background: teal[100],
            border: "none",
        },

        "& input[type=button]": {
            display: "block",
            margin: 0,
            padding: "8px 8px",
            border: "none",
            borderBottom: `2px solid ${teal[900]}`,
            outline: "none",
            fontSize: 16,
            fontWeight: "bold",
            color: teal[900],
            alignItem: "middle",
            background: "none",
        },

        "& input[type=button]:hover": {
            color: teal[500],
            borderBottom: `2px solid ${teal[500]}`,
        },

        "& input[type=button]:active": {
            color: "white",
            borderBottom: `3px solid white`,
        },

    }
});


export default AuthStyles;