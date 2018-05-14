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

import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close"

import extendedTablesStyle from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.jsx";



class UserList extends Component {
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
        const fillButtons = [
            {color: "info", icon: Person},
            {color: "success", icon: Edit},
            {color: "danger", icon: Close}
        ].map((prop, key) => {
            return (
                <Button color={prop.color} customClass={classes.actionButton} key={key}>
                    <prop.icon className={classes.icon}/>
                </Button>
            );
        });

        return (
            <div className={classes.root}>
                <GridContainer>
                    <ItemGrid xs={12}>
                        <IconCard
                            icon={Assignment}
                            title={"用户列表信息"}
                            content={
                                <Table
                                    tableHead={[
                                        "#",
                                        "Name",
                                        "Job Position",
                                        "Since",
                                        "Salary",
                                        "Actions"
                                    ]}
                                    tableData={[
                                        [
                                            "1",
                                            "Andrew Mike",
                                            "Develop",
                                            "2013",
                                            "€ 99,225",
                                            fillButtons
                                        ],
                                        ["2", "John Doe", "Design", "2012", "€ 89,241", fillButtons],
                                        [
                                            "3",
                                            "Alex Mike",
                                            "Design",
                                            "2010",
                                            "€ 92,144",
                                            fillButtons
                                        ],
                                        [
                                            "4",
                                            "Mike Monday",
                                            "Marketing",
                                            "2013",
                                            "€ 49,990",
                                            fillButtons
                                        ],
                                        [
                                            "5",
                                            "Paul Dickens",
                                            "Communication",
                                            "2015",
                                            "€ 69,201",
                                            fillButtons
                                        ]
                                    ]}
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
                            }/>
                    </ItemGrid>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(extendedTablesStyle)(UserList);
