import { makeStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';



const ItemStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: " space-between",

        "& .main": {
            margin: "10px 20px",
            width: "40%",
            minHeight: 60,
            background: cyan[300],
            display: "flex",
            alignItems: "center",
            border: `2px solid ${cyan[300]}`,
            borderRadius: 6,
            fontSize: 24,
            zIndex: 11,
        },

        "& .main:hover": {
            background: cyan[100],
            cursor: "grab"
        },

        "& .main:active": {
            background: cyan[100],
            cursor: "grab"
        },
        "& .main:visited": {
            background: cyan[300],
        },

        "& .done": {
            textDecoration: "line-through",
            background: cyan[600],
            border: `2px solid ${cyan[800]}`,
        },

    },

});


export default ItemStyles;