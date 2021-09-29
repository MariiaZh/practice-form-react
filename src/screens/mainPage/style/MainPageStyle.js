import { makeStyles } from '@material-ui/core/styles';

const ListStyles = makeStyles({
    root: {
        height: "86vh",
        maxWidth: "100%",
        backgroundImage: "url('https://github.com/MariiaZh/potion/blob/main/blockchain.jpg?raw=true')",
        backgroundColor: "lightblue",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        margin: "25px 0",
        display: "flex",
        flexFlow: "row wrap",

        "& .blocks": {
            background: "linear-gradient(rgba(235, 220, 153, 0.479), rgb(241, 221, 129, 0.8), rgb(241, 188, 74), rgb(241, 211, 74, 0.8),  rgba(235, 220, 153, 0.479))",
            width: "25%",
            height: "34%",
            color: "black",
            fontSize: 35,
            display: "flex",
            margin: 30,
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: "none"
        },

        "& .light": {
            background: "linear-gradient(rgba(235, 220, 153, 0.379), rgba(161, 144, 105, 0.8),  rgba(235, 220, 153, 0.379))",
        },

        "& .blocks:hover": {
            margin: "25px 30px 35px 30px",
            background: "linear-gradient(rgba(235, 220, 153, 0.579), rgb(241, 221, 129, 0.9), rgb(241, 188, 74), rgb(241, 211, 74, 0.9),  rgba(235, 220, 153, 0.579))",
            fontWeight: "bold"
        },

        "& .blocks:active": {
            margin: "25px 30px 35px 30px",
            background: "linear-gradient(rgba(235, 220, 153, 0.579), rgb(233, 208, 95, 0.9), rgb(241, 188, 74), rgb(233, 208, 95, 0.9),  rgba(235, 220, 153, 0.579))",
            fontWeight: "bold",
            fontSize: 37,
        },
    },
});
export default ListStyles;