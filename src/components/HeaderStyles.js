import { makeStyles } from '@material-ui/core/styles';
import { teal, pink } from '@material-ui/core/colors';


const HeaderStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",

        "& .tabs div a:hover": {
            borderBottom: "2px solid #f50057",
        },

        "& .login": {
            background: "silver",
        },

        "& .avatar": {
            background: teal[600]
        },

        "& .avatarLog": {
            background: pink[500],
        }

    },
});


export default HeaderStyles;