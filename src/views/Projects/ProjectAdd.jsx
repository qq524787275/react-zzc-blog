import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import {DateRange} from 'react-date-range';
import {default as zhCN} from 'react-date-range/dist/locale/zh-CN';
import BootstrapInput from 'components/CustomInput/BootstrapInput';
import BootstrapTextarea from 'components/CustomInput/BootstrapTextarea';
const styles = {
    root: {},
};

class ProjectAdd extends Component {
    state = {
        dataRange: {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
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

    handleRangeChange = (which) => {
        console.debug(which);
        this.setState({
            ...this.state,
            dataRange: which.selection
        })
    }

    handleChange=(a)=>{
        console.debug(a.target.id);
        console.debug(a.target.value);
    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.root}>

                {/*<DateRange*/}
                {/*rangeColors={["#E91E63"]}*/}
                {/*locale={zhCN}*/}
                {/*onChange={this.handleRangeChange}*/}
                {/*moveRangeOnFirstSelection={false}*/}
                {/*ranges={[this.state.dataRange]}*/}
                {/*className={classes.PreviewArea}*/}
                {/*/>*/}
                <BootstrapInput id={"title"} lable={"项目名"}></BootstrapInput>
                <BootstrapTextarea id={"description"} lable={"描述信息"} onChange={this.handleChange}></BootstrapTextarea>
            </div>
        );
    }
}

export default withStyles(styles)(ProjectAdd);
