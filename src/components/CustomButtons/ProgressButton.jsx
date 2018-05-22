import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import {CircularProgress} from 'material-ui/Progress';
import Button from 'material-ui/Button';
import pink from 'material-ui/colors/pink';

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:"center"
    },
    wrapper: {
        margin: theme.spacing.unit,
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: pink[500],
        '&:hover': {
            backgroundColor: pink[700],
        },
    },
    buttonProgress: {
        color: pink[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
});

class ProgressButton extends Component {





    render() {
        const {classes,onClick,loading} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <Button
                        variant="raised"
                        color="primary"
                        className={classes.buttonSuccess}
                        disabled={loading}
                        onClick={onClick}
                    >
                        提交
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress}/>}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ProgressButton);
