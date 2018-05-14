import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
const styles = {
    root: {},
};



class Home extends Component {
    state = {

    };

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }



    componentWillUnmount() {

    }


    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.root}>
                <Button>首页</Button>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
