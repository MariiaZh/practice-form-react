import { makeStyles } from '@material-ui/core/styles';

const OverlayStyles = makeStyles({
    root: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 22,
        background: 'rgba(0, 0, 0, 0.45)',
    }
})

export default OverlayStyles;