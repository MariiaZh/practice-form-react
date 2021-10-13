import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const ContentStyles = makeStyles({
    root: {
        padding: 10,

        "& .image": {
            height: 450,
        },

        "& h1": {
            color: purple[700],
        }
    }
});


export default ContentStyles;