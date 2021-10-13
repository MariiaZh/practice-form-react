import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import bb_background from "../../../assets/20979.jpg";
import bb_background_empty from "../../../assets/bb_background_empty.png";

const ListStyles = makeStyles({
    root: {
        maxWidth: "100%",
        height: "100vh",
        display: "flex",
        margin: 0,
        textAlign: "center",
        fontWeight: "bolder",

        "& .leftPart": {
            width: "49%",
            backgroundImage: `url(${bb_background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            padding: '25px',
            margin: "25px 10px",
            textAlign: "center",
            fontWeight: "bolder",
            display: "flex",
            flexFlow: "row wrap",
            alignContent: "flex-start",
        },

        "& .rightPart": {
            width: "49%",
            backgroundImage: `url(${bb_background_empty})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            padding: '25px',
            margin: "25px 10px",
            textAlign: "center",
            fontWeight: "bolder",
        },

        "& .buttonWrapper": {
            width: "100%",
            height: "150px",
            margin: "196px 0px 0px 0px",
            padding: "0px 0px 0px 348px",
            //background: yellow[900],
        },

        "& button": {
            display: "block",
            height: "100px",
            width: "100px",
            background: green[900],
            margin: "25px 0 0px 15px",
            color: "white",
            border: '2px solid white',
            borderRadius: 0,
            fontSize: "18px",
            boxShadow: "2px 2px 2px rgb(85, 85, 85)",
        },

        "& .sliderWrapper": {
            width: "100%",
            margin: "30px 25px",
            border: "none",
        },

        "& .sliderWrapper span": {
            color: green[900],
        },

        "& .sliderWrapper span span span span span": {
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
        },

        '& .rightPart div': {
            borderRadius: 0,
            background: "rgba(255, 255, 255, 0.6)",
            display: "flex",
        },

        "& .imgWrapper": {
            width: "40%",
            height: "100%",
            border: '4px solid white',
            padding: 0,
            margin: "17px",
            boxShadow: "1px 1px 1px gray"
        },

        "& img": {
            width: "100%",
            height: "auto",
            margin: 0,
        },

        "& #details": {
            width: "50%",
            display: "flex",
            flexFlow: "row wrap",
            margin: 0,
            background: "none",
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

        "& .wrapper span": {
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
            fontWeight: "bold",
            background: `${green[900]}`,
            color: "white"
        },




    },

});
export default ListStyles;