import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import SweetAlert from "react-bootstrap-sweetalert";
import TableDragSelect from "components/Table/TableDragSelect.jsx";

import buttonStyle from "assets/jss/material-dashboard-pro-react/components/buttonStyle.jsx";



class ArticleList extends Component {
    state = {
        alert: null,
        cells: [
            [false, false, false, false, false, false,false,false,false,false,false,false,false,false,false],
            [false, false, false, false, false, false,false,false,false,false,false,false,false,false,false],
            [false, false, false, false, false, false,false,false,false,false,false,false,false,false,false],
            [false, false, false, false, false, false,false,false,false,false,false,false,false,false,false],
        ]
    };

    addNewEventAlert(slotInfo) {
        this.setState({
            alert: (
                <SweetAlert
                    input
                    showCancel
                    style={{display: "block", marginTop: "-100px"}}
                    title="请输入价格"
                    onConfirm={e => this.addNewEvent(e, slotInfo)}
                    onCancel={() => this.hideAlert()}
                    confirmBtnCssClass={
                        this.props.classes.button + " " + this.props.classes.success
                    }
                    cancelBtnCssClass={
                        this.props.classes.button + " " + this.props.classes.danger
                    }
                />
            )
        });
    }

    addNewEvent(e, slotInfo) {
     console.debug("点击了确认");
    }

    hideAlert() {
        console.debug("点击了取消");
        this.setState({
            alert: null
        });
    }

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

    onCellsChanged=(a)=>{
        console.debug(a);
    }

    select=(a)=>{
        this.addNewEventAlert(a);
    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.root}>
                <Button>文章列表</Button>
                {this.state.alert}
                <TableDragSelect
                    value={this.state.cells}
                    onChange={this.select}
                >
                    <tr>
                        <td disabled/>
                        <td disabled>周一</td>
                        <td disabled>周一</td>
                        <td disabled>周一</td>
                        <td disabled>周一</td>
                        <td disabled>周一</td>
                        <td disabled>周一</td>
                        <td disabled>周一</td>
                        <td disabled>周一</td>
                        <td disabled>周一</td>
                        <td disabled>周一</td>
                        <td disabled>周一</td>
                        <td disabled>周一</td>
                        <td disabled>周一</td>
                        <td disabled>周一</td>
                    </tr>
                    <tr>
                        <td disabled>标准双人房</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                    </tr>
                    <tr>
                        <td disabled>标准单人房</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                    </tr>
                    <tr>
                        <td disabled>豪华房间</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                       <td>¥50</td>
                    </tr>
                </TableDragSelect>
            </div>
        );
    }
}

export default withStyles(buttonStyle)(ArticleList);
