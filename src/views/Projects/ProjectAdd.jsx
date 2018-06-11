import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import BootstrapInput from 'components/CustomInput/BootstrapInput';
import BootstrapTextarea from 'components/CustomInput/BootstrapTextarea';
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";
import ProgressButton from "components/CustomButtons/ProgressButton.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";

const styles = {
    root: {
        paddingLeft: 30,
        paddingRight: 30
    },
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

    handleChange = (a) => {
        console.debug(a.target.id);
        console.debug(a.target.value);
    }

    submit = () => {

    }

    seletImage = (file) => {
        console.debug(file);
    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.root}>
                <GridContainer direction={"column"} alignItems={"flex-start"}>
                    <GridContainer>
                        <ItemGrid md={6} xs={12} style={{marginLeft: 20}}>
                            <BootstrapInput
                                id={"title"}
                                lable={"项目名"}/>
                            <BootstrapInput
                                id={"link"}
                                lable={"链接"}
                                style={{marginTop: 20}}/>
                            <BootstrapInput
                                id={"startDate"}
                                lable={"开始时间"}
                                style={{marginTop: 20}}/>
                            <BootstrapInput
                                id={"endDate"}
                                lable={"结束时间"}
                                style={{marginTop: 20}}/>
                            <BootstrapTextarea
                                id={"description"}
                                lable={"描述信息"}
                                onChange={this.handleChange}
                                style={{marginTop: 20}}
                            />
                        </ItemGrid>
                        <ItemGrid md={5} xs={12} style={{margin: 20}}>
                            <ImageUpload onSelect={this.seletImage}/>
                        </ItemGrid>
                    </GridContainer>
                    <ProgressButton style={{marginLeft:40,marginTop:20}} onClick={this.submit}>添加</ProgressButton>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(styles)(ProjectAdd);
