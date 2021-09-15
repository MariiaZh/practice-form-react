import { makeStyles } from '@material-ui/core/styles';
import { green, yellow} from '@material-ui/core/colors';


const ListStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        borderRadius: "0 0 15px 0",
        boxShadow: `2px 2px 4px ${yellow[100]}`,
        color: green[600],
        padding: '10px',
        margin: "10px auto",

        "& .imgWrapper": {
            width: "40%",
            height: "100%",

        },

        "& img": {
            width: "100%",
            height: "auto",
            margin: 0,

        },

        "& #details": {
            width: "60%",
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