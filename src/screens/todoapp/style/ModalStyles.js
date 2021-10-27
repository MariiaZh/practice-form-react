import { makeStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';

const ModalStyles = makeStyles({
    root: {
        position: 'fixed',
        width: "40%",
        minHeight: "15%",
        margin: "200px 400px",
        background: "paleturquoise",
        border: `2px solid ${cyan[300]}`,
        borderRadius: 6,
        padding: 10,
        zIndex: 33,

        "& .textarea": {
            width: "91%",
            margin: 10,
            padding: 10,
            fontSize: 18,
            border: 0,
            borderRadius: 6,
        },

        "& button": {
            display: "block",
            margin: 10,
        },
    },
});


export default ModalStyles;