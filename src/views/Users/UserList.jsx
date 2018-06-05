import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';

// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import IconCard from "components/Cards/IconCard.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Table from "components/Table/Table.jsx";

import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close"

import extendedTablesStyle from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.jsx";

import {getUserList} from "http/okgo";

import ReactPaginate from 'react-paginate';


class UserList extends Component {
    state = {
        result: {},
        paginate:null,
    };

    componentWillMount() {

    }

    componentDidMount() {
        this.loadUserListData(1, 10);

    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }


    handlePageClick = (a) => {
        this.loadUserListData(a.selected + 1, 10);
    }

    loadUserListData =async (page, size) => {
        let data = await getUserList(page, size);
        this.setState({
            ...this.state,
            result: data.result,
            paginate:(
                <ReactPaginate previousLabel={"上一页"}
                               nextLabel={"下一页"}
                               breakLabel={<a href="">...</a>}
                               breakClassName={"break"}
                               pageCount={data.result.pages}
                               marginPagesDisplayed={1}
                               pageRangeDisplayed={3}
                               onPageChange={this.handlePageClick}
                               containerClassName={"react-paginate"}
                               subContainerClassName={"pages pagination"}
                               activeClassName={"active"}/>
            )
        })
        console.debug(this.state.result);
    }

    onItemClickListener = (a) => {
        console.debug(a.target);
    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        // const fillButtons = [
        //     {color: "success", icon: Edit},
        //     {color: "danger", icon: Close}
        // ].map((prop, key) => {
        //     return (
        //         <Button color={prop.color} customClass={classes.actionButton} key={key} onClick={this.onItemClickListener}>
        //             <prop.icon className={classes.icon}/>
        //         </Button>
        //     );
        // });

        return (
            <div className={classes.root}>
                <GridContainer>
                    <ItemGrid xs={12}>
                        <IconCard
                            icon={Assignment}
                            title={"用户列表信息"}
                            footer={
                                this.state.paginate
                            }
                            content={
                                <div>
                                    <Table
                                        hover
                                        tableHead={[
                                            "id",
                                            "Username",
                                            "Password",
                                            "Actions"
                                        ]}
                                        tableData={
                                            this.state.result.list !== undefined ? this.state.result.list.map(function (item, key) {
                                                return [
                                                    item.uid,
                                                    item.username,
                                                    item.password,
                                                    [
                                                        <Button color={"success"} customClass={classes.actionButton}
                                                                key={"edit"} onClick={() => {
                                                            console.debug(item);
                                                        }}>
                                                            <Edit className={classes.icon}/>
                                                        </Button>
                                                        ,
                                                        <Button color={"danger"} customClass={classes.actionButton}
                                                                key={"close"} onClick={() => {
                                                            console.debug(item);
                                                        }}>
                                                            <Close className={classes.icon}/>
                                                        </Button>
                                                    ]
                                                ]
                                            }) : []
                                        }
                                        customCellClasses={[
                                            classes.center,
                                            classes.right,
                                            classes.right
                                        ]}
                                        customClassesForCells={[0, 4, 5]}
                                        customHeadCellClasses={[
                                            classes.center,
                                            classes.right,
                                            classes.right
                                        ]}
                                        customHeadClassesForCells={[0, 4, 5]}
                                    />
                                </div>
                            }/>
                    </ItemGrid>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(extendedTablesStyle)(UserList);
