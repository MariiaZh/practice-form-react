import { makeStyles } from '@material-ui/core/styles';
import { green, yellow, blue, deepPurple } from '@material-ui/core/colors';


const ListStyles = makeStyles({
    root: {
        display: "flex",
        borderRadius: "0 0 15px 0",
        boxShadow: `2px 2px 4px ${yellow[100]}`,
        color: green[600],
        padding: '10px',
        margin: "10px auto",

        "& img": {
            width: "500px",
            height: "auto",
            margin: "0px 15px 10px 0",
            background: blue[500],
        },

        "& #details": {
            display: "flex",
            flexFlow: "row wrap",
            display: "block",
            margin: 0,
        },


        "& h1": {
            textAlign: "center",
            padding: 2,
            width: "100%",
            background: `${green[900]}`,
            color: "white"
        },

        "& .wrapper": {
            display: "inline-block",
            color: "black",
            fontWeight: "bold",
            fontSize: "20px",
            justifyContent: "space-between",
            margin: "0 10px",
        },

        "& span": {
            margin: "0 0 0 10px",
            padding: "6px 12px",
            background: `${green[900]}`,
            color: "white"
        },

        "& .text": {
            width: "96%",
            margin: "10px 10px",
            fontSize: "20px",
            textAlign: "justify"
        },

        "& .date": {
            width: "70%",
            color: "black",
            fontWeight: "bold",
            fontSize: "20px",
        },

        "& .date span": {
            padding: "6px 8px",
            margin: "0 10px 0",
            color: "black",
            fontWeight: "bold",
            background: `${green[900]}`,
            color: "white"
        },


    },

});
export default ListStyles;